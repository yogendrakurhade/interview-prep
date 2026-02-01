import type { Topic } from "../../../types";

export const microservicesCommunicationPatternsTopic: Topic = {
  id: "microservices-communication",
  name: "Service Communication",
  questions: [
    {
      id: "q1",
      question: "What is the API Gateway pattern and why is it important in microservices?",
      answer:
        "The API Gateway pattern provides a single entry point for all client requests to a microservices architecture. It handles request routing, protocol translation, authentication, rate limiting, and response aggregation. It simplifies client code and provides a facade over complex microservices.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// API Gateway using middleware
public class ApiGateway
{
    private readonly IServiceProvider _serviceProvider;
    
    public ApiGateway(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }
    
    public async Task<ApiResponse> RouteRequest(ApiRequest request)
    {
        // Route to appropriate microservice
        return request.Path switch
        {
            "/users/*" => await RouteToUserService(request),
            "/orders/*" => await RouteToOrderService(request),
            "/products/*" => await RouteToProductService(request),
            _ => new ApiResponse { StatusCode = 404, Body = "Not Found" }
        };
    }
    
    private async Task<ApiResponse> RouteToUserService(ApiRequest request)
    {
        var userService = _serviceProvider.GetRequiredService<IUserService>();
        return await userService.HandleRequest(request);
    }
    
    private async Task<ApiResponse> RouteToOrderService(ApiRequest request)
    {
        var orderService = _serviceProvider.GetRequiredService<IOrderService>();
        return await orderService.HandleRequest(request);
    }
    
    private async Task<ApiResponse> RouteToProductService(ApiRequest request)
    {
        var productService = _serviceProvider.GetRequiredService<IProductService>();
        return await productService.HandleRequest(request);
    }
}

// ASP.NET Core Implementation
app.Use(async (context, next) =>
{
    var path = context.Request.Path.Value;
    
    if (path.StartsWith("/api/users"))
        context.Items["service"] = "UserService";
    else if (path.StartsWith("/api/orders"))
        context.Items["service"] = "OrderService";
    
    // Add authentication, rate limiting, logging
    await next();
});`,
        },
      ],
    },
    {
      id: "q2",
      question: "Explain the Saga pattern for distributed transactions in microservices.",
      answer:
        "The Saga pattern manages data consistency across multiple microservices without distributed transactions. It's a sequence of local transactions coordinated by a saga coordinator. Two approaches: Choreography (event-driven) and Orchestration (centralized coordinator).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Orchestration-based Saga
public class OrderSaga
{
    private readonly IOrderService _orderService;
    private readonly IPaymentService _paymentService;
    private readonly IInventoryService _inventoryService;
    private readonly IEventBus _eventBus;
    
    public async Task<bool> ExecuteOrderSaga(Order order)
    {
        try
        {
            // Step 1: Create order
            var orderCreated = await _orderService.CreateOrder(order);
            if (!orderCreated) throw new Exception("Order creation failed");
            
            // Step 2: Process payment
            var paymentProcessed = await _paymentService.ProcessPayment(order.Id, order.Amount);
            if (!paymentProcessed)
            {
                await _orderService.CancelOrder(order.Id);
                throw new Exception("Payment failed");
            }
            
            // Step 3: Reserve inventory
            var inventoryReserved = await _inventoryService.ReserveInventory(order.Items);
            if (!inventoryReserved)
            {
                await _paymentService.RefundPayment(order.Id);
                await _orderService.CancelOrder(order.Id);
                throw new Exception("Inventory reservation failed");
            }
            
            // Publish order completed event
            await _eventBus.PublishAsync(new OrderCompletedEvent { OrderId = order.Id });
            return true;
        }
        catch (Exception ex)
        {
            // Compensating transactions already handled in try-catch
            await _eventBus.PublishAsync(new OrderFailedEvent { OrderId = order.Id, Reason = ex.Message });
            return false;
        }
    }
}

// Choreography-based Saga with Events
public class OrderService
{
    private readonly IEventBus _eventBus;
    
    public async Task CreateOrder(Order order)
    {
        // Create order
        await SaveOrder(order);
        
        // Publish event - other services subscribe and act
        await _eventBus.PublishAsync(new OrderCreatedEvent { OrderId = order.Id });
    }
}

public class PaymentService
{
    private readonly IEventBus _eventBus;
    
    [EventHandler]
    public async Task HandleOrderCreated(OrderCreatedEvent @event)
    {
        var order = await GetOrder(@event.OrderId);
        var success = await ProcessPayment(order);
        
        if (success)
            await _eventBus.PublishAsync(new PaymentProcessedEvent { OrderId = @event.OrderId });
        else
            await _eventBus.PublishAsync(new PaymentFailedEvent { OrderId = @event.OrderId });
    }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the Event Sourcing pattern and its benefits?",
      answer:
        "Event Sourcing stores the state of an entity as a sequence of immutable events rather than storing the current state. Benefits include complete audit trail, ability to rebuild state at any point, and temporal queries. Challenges include handling eventual consistency and complex queries.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Sourcing Implementation
public abstract class Event
{
    public Guid AggregateId { get; set; }
    public long Version { get; set; }
    public DateTime Timestamp { get; set; }
}

public class AccountCreatedEvent : Event
{
    public string AccountHolder { get; set; }
    public decimal InitialBalance { get; set; }
}

public class MoneyDepositedEvent : Event
{
    public decimal Amount { get; set; }
}

public class MoneyWithdrawnEvent : Event
{
    public decimal Amount { get; set; }
}

// Aggregate Root
public class BankAccount
{
    public Guid Id { get; set; }
    public string AccountHolder { get; set; }
    public decimal Balance { get; private set; }
    public long Version { get; private set; }
    
    private List<Event> _uncommittedEvents = new();
    
    // Recreate account from events
    public static BankAccount FromHistory(IEnumerable<Event> events)
    {
        var account = new BankAccount();
        foreach (var @event in events)
        {
            account.ApplyEvent(@event);
        }
        return account;
    }
    
    public void Deposit(decimal amount)
    {
        var @event = new MoneyDepositedEvent
        {
            AggregateId = this.Id,
            Amount = amount,
            Version = this.Version + 1,
            Timestamp = DateTime.UtcNow
        };
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    public void Withdraw(decimal amount)
    {
        if (this.Balance < amount)
            throw new InvalidOperationException("Insufficient funds");
        
        var @event = new MoneyWithdrawnEvent
        {
            AggregateId = this.Id,
            Amount = amount,
            Version = this.Version + 1,
            Timestamp = DateTime.UtcNow
        };
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    private void ApplyEvent(Event @event)
    {
        switch (@event)
        {
            case AccountCreatedEvent acc:
                this.Id = acc.AggregateId;
                this.AccountHolder = acc.AccountHolder;
                this.Balance = acc.InitialBalance;
                break;
            case MoneyDepositedEvent dep:
                this.Balance += dep.Amount;
                break;
            case MoneyWithdrawnEvent wd:
                this.Balance -= wd.Amount;
                break;
        }
        this.Version = @event.Version;
    }
    
    public IEnumerable<Event> GetUncommittedEvents() => _uncommittedEvents;
}

// Event Store
public interface IEventStore
{
    Task SaveEventsAsync(Guid aggregateId, IEnumerable<Event> events);
    Task<IEnumerable<Event>> GetEventsAsync(Guid aggregateId);
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the CQRS (Command Query Responsibility Segregation) pattern?",
      answer:
        "CQRS separates read and write models. Commands handle writes (state changes), while queries handle reads (retrieving data). Enables independent scaling, different storage mechanisms for reads/writes, and better performance through optimized read models.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Commands - Write Model
public abstract class Command
{
    public Guid CommandId { get; } = Guid.NewGuid();
}

public class CreateOrderCommand : Command
{
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
}

public class UpdateOrderStatusCommand : Command
{
    public Guid OrderId { get; set; }
    public OrderStatus NewStatus { get; set; }
}

// Queries - Read Model
public abstract class Query<TResult>
{
}

public class GetOrderByIdQuery : Query<OrderDto>
{
    public Guid OrderId { get; set; }
}

public class GetCustomerOrdersQuery : Query<List<OrderSummaryDto>>
{
    public Guid CustomerId { get; set; }
}

// Command Handler
public class OrderCommandHandler
{
    private readonly IEventBus _eventBus;
    private readonly IRepository<Order> _repository;
    
    public async Task Handle(CreateOrderCommand command)
    {
        var order = new Order
        {
            Id = Guid.NewGuid(),
            CustomerId = command.CustomerId,
            Items = command.Items,
            CreatedAt = DateTime.UtcNow
        };
        
        await _repository.SaveAsync(order);
        
        // Publish event for read model update
        await _eventBus.PublishAsync(new OrderCreatedEvent 
        { 
            OrderId = order.Id,
            CustomerId = command.CustomerId 
        });
    }
}

// Query Handler
public class OrderQueryHandler
{
    private readonly IReadModelRepository _readRepository;
    
    public async Task<OrderDto> Handle(GetOrderByIdQuery query)
    {
        // Query optimized read model (denormalized data)
        return await _readRepository.GetOrderAsync(query.OrderId);
    }
    
    public async Task<List<OrderSummaryDto>> Handle(GetCustomerOrdersQuery query)
    {
        // Quick read from denormalized read model
        return await _readRepository.GetCustomerOrdersAsync(query.CustomerId);
    }
}

// CQRS Bus
public class CqrsBus
{
    private readonly IServiceProvider _serviceProvider;
    
    public async Task<TResult> SendQuery<TResult>(Query<TResult> query)
    {
        var handlerType = typeof(IQueryHandler<,>).MakeGenericType(query.GetType(), typeof(TResult));
        var handler = _serviceProvider.GetService(handlerType);
        var method = handlerType.GetMethod("Handle");
        return await (Task<TResult>)method.Invoke(handler, new object[] { query });
    }
    
    public async Task SendCommand<T>(T command) where T : Command
    {
        var handlerType = typeof(ICommandHandler<>).MakeGenericType(command.GetType());
        var handler = _serviceProvider.GetService(handlerType);
        var method = handlerType.GetMethod("Handle");
        await (Task)method.Invoke(handler, new object[] { command });
    }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "Explain the Message Queue pattern in microservices architecture.",
      answer:
        "The Message Queue pattern enables asynchronous communication between microservices through a message broker. Services produce messages to a queue and consumers process them independently. Benefits: decoupling, reliability, and handling temporary failures.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Message interface
public interface IMessage
{
    string MessageType { get; }
    DateTime CreatedAt { get; }
}

public class OrderPlacedMessage : IMessage
{
    public string MessageType => "OrderPlaced";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public Guid OrderId { get; set; }
    public List<OrderItem> Items { get; set; }
}

// Message Producer
public class OrderService
{
    private readonly IMessageQueue _messageQueue;
    
    public async Task PlaceOrder(Order order)
    {
        // Save order
        await SaveOrder(order);
        
        // Publish message to queue
        var message = new OrderPlacedMessage
        {
            OrderId = order.Id,
            Items = order.Items
        };
        
        await _messageQueue.PublishAsync("orders.placed", message);
    }
}

// Message Consumer
public class NotificationService
{
    private readonly IMessageQueue _messageQueue;
    
    public async Task StartProcessing()
    {
        await _messageQueue.SubscribeAsync("orders.placed", HandleOrderPlaced);
    }
    
    private async Task HandleOrderPlaced(OrderPlacedMessage message)
    {
        try
        {
            // Send notification to customer
            await SendEmailNotification(message.OrderId);
        }
        catch (Exception ex)
        {
            // Message will be retried or moved to dead-letter queue
            throw;
        }
    }
}

// Message Queue Implementation with RabbitMQ
public class RabbitMQMessageQueue : IMessageQueue
{
    private readonly IConnection _connection;
    
    public async Task PublishAsync<T>(string queueName, T message) where T : IMessage
    {
        using (var channel = _connection.CreateModel())
        {
            channel.QueueDeclare(queue: queueName, durable: true);
            
            var json = JsonConvert.SerializeObject(message);
            var body = Encoding.UTF8.GetBytes(json);
            
            channel.BasicPublish(exchange: "", routingKey: queueName, body: body);
        }
    }
    
    public async Task SubscribeAsync<T>(string queueName, Func<T, Task> handler) where T : IMessage
    {
        using (var channel = _connection.CreateModel())
        {
            channel.QueueDeclare(queue: queueName, durable: true);
            var consumer = new EventingBasicConsumer(channel);
            
            consumer.Received += async (model, ea) =>
            {
                try
                {
                    var json = Encoding.UTF8.GetString(ea.Body.ToArray());
                    var message = JsonConvert.DeserializeObject<T>(json);
                    await handler(message);
                    channel.BasicAck(ea.DeliveryTag, false);
                }
                catch (Exception ex)
                {
                    channel.BasicNack(ea.DeliveryTag, false, true); // Requeue
                }
            };
            
            channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);
        }
    }
}`,
        },
      ],
    },
  ],
};
