import type { Topic } from "../../../types";

export const microservicesDataPatternsTopic: Topic = {
  id: "microservices-data",
  name: "Data Management",
  questions: [
    {
      id: "q1",
      question: "What is the Database per Service pattern and its advantages/disadvantages?",
      answer:
        "The Database per Service pattern assigns each microservice its own database, ensuring loose coupling and independent scaling. Advantages: autonomy, technology flexibility, easier scaling. Disadvantages: distributed transactions, data consistency challenges, cross-service queries.",
      codeSnippets: [
        {
          language: "C#",
          code: `// Database per Service Pattern
// OrderService - PostgreSQL
public class OrderService
{
    private readonly IOrderRepository _orderRepository;
    
    public async Task<Order> CreateOrderAsync(CreateOrderRequest request)
    {
        var order = new Order
        {
            Id = Guid.NewGuid(),
            CustomerId = request.CustomerId,
            Items = request.Items,
            Total = CalculateTotal(request.Items)
        };
        
        // Order service manages its own database
        return await _orderRepository.SaveAsync(order);
    }
}

// UserService - MongoDB
public class UserService
{
    private readonly IMongoCollection<User> _userCollection;
    
    public async Task<User> GetUserAsync(Guid userId)
    {
        // User service uses different database technology
        return await _userCollection.Find(u => u.Id == userId).FirstOrDefaultAsync();
    }
}

// InventoryService - Redis
public class InventoryService
{
    private readonly IConnectionMultiplexer _redis;
    
    public async Task<Stock> GetStockAsync(string productId)
    {
        // Inventory uses Redis for fast access
        var db = _redis.GetDatabase();
        var stock = await db.StringGetAsync($"stock:{productId}");
        return JsonConvert.DeserializeObject<Stock>(stock.ToString());
    }
}

// Cross-Service Communication
public class OrderProcessingService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IInventoryServiceClient _inventoryServiceClient;
    
    public async Task ProcessOrderAsync(Guid orderId)
    {
        // Get order from OrderService
        var order = await _orderServiceClient.GetOrderAsync(orderId);
        
        // Get user from UserService (different database)
        var user = await _userServiceClient.GetUserAsync(order.CustomerId);
        
        // Check inventory from InventoryService (different database)
        var stock = await _inventoryServiceClient.GetStockAsync(order.Items[0].ProductId);
        
        // Combine data from multiple services
        var orderDetails = new OrderDetails
        {
            Order = order,
            Customer = user,
            AvailableStock = stock.Quantity
        };
    }
}

// Challenges: Distributed Transactions
public class TransactionalOrderService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IEventBus _eventBus;
    
    public async Task CreateOrderWithSagaAsync(CreateOrderRequest request)
    {
        var order = new Order { Id = Guid.NewGuid() };
        
        // Step 1: Save order in OrderService database
        await _orderRepository.SaveAsync(order);
        
        // Step 2: Publish event for other services to handle
        await _eventBus.PublishAsync(new OrderCreatedEvent { OrderId = order.Id });
        
        // Each service updates its own database independently
        // Saga pattern manages distributed transaction
    }
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the CQRS pattern specifically for data management in microservices?",
      answer:
        "CQRS (Command Query Responsibility Segregation) for microservices separates write and read data models. Commands write to operational database, queries read from denormalized read model. Enables different storage solutions for writes vs reads, independent scaling, and optimized performance.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// CQRS Pattern for Data Management
// Write Model (Operational Data Store)
public class OrderWriteModel
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
    public decimal Total { get; set; }
    public OrderStatus Status { get; set; }
    public DateTime CreatedAt { get; set; }
}

// Read Model (Denormalized)
public class OrderReadModel
{
    public Guid Id { get; set; }
    public string CustomerName { get; set; }
    public string CustomerEmail { get; set; }
    public int ItemCount { get; set; }
    public decimal Total { get; set; }
    public string Status { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<string> ItemDescriptions { get; set; }
}

// Write Repository
public class OrderWriteRepository
{
    private readonly DbContext _writeDb;
    
    public async Task SaveAsync(OrderWriteModel order)
    {
        // Write to operational database
        _writeDb.Orders.Add(order);
        await _writeDb.SaveChangesAsync();
    }
}

// Read Repository (using different storage)
public class OrderReadRepository
{
    private readonly IElasticsearchClient _elasticsearch;
    
    public async Task<OrderReadModel> GetOrderAsync(Guid orderId)
    {
        // Query from denormalized read model in Elasticsearch
        var response = await _elasticsearch.SearchAsync<OrderReadModel>(s => s
            .Query(q => q.Term(t => t.Id, orderId))
        );
        
        return response.Documents.FirstOrDefault();
    }
    
    public async Task<List<OrderReadModel>> SearchOrdersAsync(string customerName)
    {
        // Optimized search across denormalized data
        var response = await _elasticsearch.SearchAsync<OrderReadModel>(s => s
            .Query(q => q.Match(m => m.Field(f => f.CustomerName).Query(customerName)))
        );
        
        return response.Documents.ToList();
    }
}

// Synchronization: Event-driven update of read model
public class OrderReadModelUpdater
{
    private readonly OrderReadRepository _readRepository;
    private readonly UserServiceClient _userServiceClient;
    private readonly IEventBus _eventBus;
    
    [EventSubscriber(EventType = "OrderCreated")]
    public async Task OnOrderCreatedAsync(OrderCreatedEvent @event)
    {
        // Get customer details from UserService
        var customer = await _userServiceClient.GetUserAsync(@event.CustomerId);
        
        // Build denormalized read model
        var readModel = new OrderReadModel
        {
            Id = @event.OrderId,
            CustomerName = customer.Name,
            CustomerEmail = customer.Email,
            ItemCount = @event.Items.Count,
            Total = @event.Total,
            Status = "Created",
            CreatedAt = @event.CreatedAt,
            ItemDescriptions = @event.Items.Select(i => i.Description).ToList()
        };
        
        // Update read model
        await _readRepository.SaveAsync(readModel);
    }
}

// CQRS Command Handler
public class CreateOrderCommandHandler
{
    private readonly OrderWriteRepository _writeRepository;
    private readonly IEventBus _eventBus;
    
    public async Task HandleAsync(CreateOrderCommand command)
    {
        var order = new OrderWriteModel
        {
            Id = Guid.NewGuid(),
            CustomerId = command.CustomerId,
            Items = command.Items,
            Status = OrderStatus.Pending
        };
        
        await _writeRepository.SaveAsync(order);
        
        // Publish event to trigger read model update
        await _eventBus.PublishAsync(new OrderCreatedEvent 
        { 
            OrderId = order.Id,
            CustomerId = order.CustomerId,
            Items = order.Items
        });
    }
}

// CQRS Query Handler
public class GetOrderDetailsQueryHandler
{
    private readonly OrderReadRepository _readRepository;
    
    public async Task<OrderReadModel> HandleAsync(GetOrderDetailsQuery query)
    {
        // Fast read from denormalized read model
        return await _readRepository.GetOrderAsync(query.OrderId);
    }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is Event Sourcing and how does it solve data consistency issues?",
      answer:
        "Event Sourcing stores all state changes as immutable events instead of current state. Provides audit trail, enables temporal queries, and simplifies data consistency. Challenges: eventual consistency handling, complex queries, storage of all events.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Sourcing for Data Management
// Domain Events
public abstract class DomainEvent
{
    public Guid AggregateId { get; set; }
    public long EventVersion { get; set; }
    public DateTime Timestamp { get; set; }
}

public class OrderCreatedEvent : DomainEvent
{
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
    public decimal Total { get; set; }
}

public class OrderShippedEvent : DomainEvent
{
    public string TrackingNumber { get; set; }
    public DateTime ShipDate { get; set; }
}

public class OrderCancelledEvent : DomainEvent
{
    public string Reason { get; set; }
}

// Event Store
public interface IEventStore
{
    Task AppendEventAsync(DomainEvent @event);
    Task<IEnumerable<DomainEvent>> GetEventsAsync(Guid aggregateId);
    Task<IEnumerable<DomainEvent>> GetAllEventsAsync();
}

public class EventStoreRepository : IEventStore
{
    private readonly DbContext _context;
    
    public async Task AppendEventAsync(DomainEvent @event)
    {
        var eventEntity = new EventEntity
        {
            Id = Guid.NewGuid(),
            AggregateId = @event.AggregateId,
            EventType = @event.GetType().Name,
            EventData = JsonConvert.SerializeObject(@event),
            Timestamp = DateTime.UtcNow
        };
        
        _context.Events.Add(eventEntity);
        await _context.SaveChangesAsync();
    }
    
    public async Task<IEnumerable<DomainEvent>> GetEventsAsync(Guid aggregateId)
    {
        var events = await _context.Events
            .Where(e => e.AggregateId == aggregateId)
            .OrderBy(e => e.Id)
            .ToListAsync();
        
        return events.Select(DeserializeEvent);
    }
    
    private DomainEvent DeserializeEvent(EventEntity entity)
    {
        return entity.EventType switch
        {
            nameof(OrderCreatedEvent) => JsonConvert.DeserializeObject<OrderCreatedEvent>(entity.EventData),
            nameof(OrderShippedEvent) => JsonConvert.DeserializeObject<OrderShippedEvent>(entity.EventData),
            nameof(OrderCancelledEvent) => JsonConvert.DeserializeObject<OrderCancelledEvent>(entity.EventData),
            _ => throw new InvalidOperationException($"Unknown event type: {entity.EventType}")
        };
    }
}

// Aggregate: Order
public class Order
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public List<OrderItem> Items { get; set; }
    public OrderStatus Status { get; set; }
    public decimal Total { get; set; }
    
    private List<DomainEvent> _uncommittedEvents = new();
    
    // Rebuild from events
    public static Order FromHistory(IEnumerable<DomainEvent> events)
    {
        var order = new Order { Items = new List<OrderItem>() };
        
        foreach (var @event in events)
        {
            order.ApplyEvent(@event);
        }
        
        return order;
    }
    
    public void PlaceOrder(Guid customerId, List<OrderItem> items)
    {
        var @event = new OrderCreatedEvent
        {
            AggregateId = this.Id,
            CustomerId = customerId,
            Items = items,
            Total = items.Sum(i => i.Price * i.Quantity)
        };
        
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    public void Ship(string trackingNumber)
    {
        if (this.Status != OrderStatus.Confirmed)
            throw new InvalidOperationException("Only confirmed orders can be shipped");
        
        var @event = new OrderShippedEvent
        {
            AggregateId = this.Id,
            TrackingNumber = trackingNumber,
            ShipDate = DateTime.UtcNow
        };
        
        ApplyEvent(@event);
        _uncommittedEvents.Add(@event);
    }
    
    private void ApplyEvent(DomainEvent @event)
    {
        switch (@event)
        {
            case OrderCreatedEvent created:
                this.Id = created.AggregateId;
                this.CustomerId = created.CustomerId;
                this.Items = created.Items;
                this.Total = created.Total;
                this.Status = OrderStatus.Pending;
                break;
            case OrderShippedEvent shipped:
                this.Status = OrderStatus.Shipped;
                break;
            case OrderCancelledEvent cancelled:
                this.Status = OrderStatus.Cancelled;
                break;
        }
    }
    
    public IEnumerable<DomainEvent> GetUncommittedEvents() => _uncommittedEvents;
}

// Order Repository using Event Store
public class OrderRepository
{
    private readonly IEventStore _eventStore;
    
    public async Task SaveAsync(Order order)
    {
        foreach (var @event in order.GetUncommittedEvents())
        {
            await _eventStore.AppendEventAsync(@event);
        }
    }
    
    public async Task<Order> GetByIdAsync(Guid orderId)
    {
        var events = await _eventStore.GetEventsAsync(orderId);
        return Order.FromHistory(events);
    }
    
    // Temporal query: Get order state at specific point in time
    public async Task<Order> GetByIdAtTimeAsync(Guid orderId, DateTime timestamp)
    {
        var events = await _eventStore.GetEventsAsync(orderId);
        var eventsAtTime = events.Where(e => e.Timestamp <= timestamp);
        return Order.FromHistory(eventsAtTime);
    }
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the API Composition pattern for querying data across microservices?",
      answer:
        "The API Composition pattern queries multiple microservices and aggregates results at the client or gateway level. Client makes multiple requests and combines results. Alternative to database joins in monoliths. Challenges: network latency, handling partial failures, N+1 queries.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// API Composition Pattern
// Individual Service Clients
public interface IOrderServiceClient
{
    Task<OrderDto> GetOrderAsync(Guid orderId);
}

public interface IUserServiceClient
{
    Task<UserDto> GetUserAsync(Guid userId);
}

public interface IProductServiceClient
{
    Task<ProductDto> GetProductAsync(string productId);
}

// API Composition: Aggregate data from multiple services
public class OrderCompositionService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IProductServiceClient _productServiceClient;
    private readonly ILogger<OrderCompositionService> _logger;
    
    public async Task<OrderDetailDto> GetOrderDetailsAsync(Guid orderId)
    {
        try
        {
            // Get order details
            var order = await _orderServiceClient.GetOrderAsync(orderId);
            
            // Parallel calls to other services
            var userTask = _userServiceClient.GetUserAsync(order.CustomerId);
            var productTasks = order.Items.Select(item => 
                _productServiceClient.GetProductAsync(item.ProductId)
            );
            
            await Task.WhenAll(userTask, Task.WhenAll(productTasks));
            
            var user = await userTask;
            var products = await Task.WhenAll(productTasks);
            
            // Compose the response
            return new OrderDetailDto
            {
                OrderId = order.Id,
                CustomerName = user.Name,
                CustomerEmail = user.Email,
                Items = order.Items.Select((item, index) => new OrderItemDetailDto
                {
                    ProductName = products[index].Name,
                    ProductDescription = products[index].Description,
                    Quantity = item.Quantity,
                    UnitPrice = item.Price
                }).ToList(),
                Total = order.Total
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Failed to compose order details for {orderId}");
            throw;
        }
    }
}

// Optimized composition with caching
public class CachedOrderCompositionService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IProductServiceClient _productServiceClient;
    private readonly IDistributedCache _cache;
    
    public async Task<OrderDetailDto> GetOrderDetailsAsync(Guid orderId)
    {
        var cacheKey = $"order:{orderId}";
        
        // Try to get from cache
        var cached = await _cache.GetAsync<OrderDetailDto>(cacheKey);
        if (cached != null)
            return cached;
        
        // Compose from services
        var order = await _orderServiceClient.GetOrderAsync(orderId);
        var user = await _userServiceClient.GetUserAsync(order.CustomerId);
        
        // Get products in parallel
        var products = await Task.WhenAll(
            order.Items.Select(item => _productServiceClient.GetProductAsync(item.ProductId))
        );
        
        var result = new OrderDetailDto
        {
            OrderId = order.Id,
            CustomerName = user.Name,
            Items = order.Items.Select((item, i) => new OrderItemDetailDto
            {
                ProductName = products[i].Name,
                Quantity = item.Quantity,
                UnitPrice = item.Price
            }).ToList()
        };
        
        // Cache for 1 hour
        await _cache.SetAsync(cacheKey, result, TimeSpan.FromHours(1));
        
        return result;
    }
}

// Timeout and fallback handling
public class ResilientOrderCompositionService
{
    private readonly IOrderServiceClient _orderServiceClient;
    private readonly IUserServiceClient _userServiceClient;
    private readonly IDistributedCache _cache;
    
    public async Task<OrderDetailDto> GetOrderDetailsAsync(Guid orderId)
    {
        var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
        
        try
        {
            var order = await _orderServiceClient.GetOrderAsync(orderId);
            var user = await _userServiceClient.GetUserAsync(order.CustomerId);
            
            return new OrderDetailDto
            {
                OrderId = order.Id,
                CustomerName = user.Name,
                Items = order.Items
            };
        }
        catch (OperationCanceledException)
        {
            // Timeout: return partial data from cache
            var cachedOrder = await _cache.GetAsync<OrderDto>($"order:{orderId}");
            if (cachedOrder != null)
            {
                return new OrderDetailDto
                {
                    OrderId = cachedOrder.Id,
                    CustomerName = "Unknown",
                    Items = cachedOrder.Items
                };
            }
            throw;
        }
    }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the Command Query Responsibility Segregation and Event Sourcing integration?",
      answer:
        "Combining CQRS with Event Sourcing provides powerful data management: events drive the system, commands modify events, read models derive from events. Enables independent scaling of reads/writes, audit trail, temporal queries, and eventual consistency.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// CQRS + Event Sourcing Integration
// Command (Write)
public abstract class Command
{
    public Guid CommandId { get; } = Guid.NewGuid();
    public DateTime CreatedAt { get; } = DateTime.UtcNow;
}

public class CreateOrderCommand : Command
{
    public Guid CustomerId { get; set; }
    public List<OrderLineItem> Items { get; set; }
}

// Domain Event (Source of Truth)
public class OrderCreatedEvent : DomainEvent
{
    public Guid CustomerId { get; set; }
    public List<OrderLineItem> Items { get; set; }
    public decimal Total { get; set; }
}

// Command Handler: Generates Events
public class OrderCommandHandler
{
    private readonly IEventStore _eventStore;
    private readonly IEventBus _eventBus;
    
    public async Task HandleAsync(CreateOrderCommand command)
    {
        var orderId = Guid.NewGuid();
        var total = command.Items.Sum(i => i.Price * i.Quantity);
        
        var @event = new OrderCreatedEvent
        {
            AggregateId = orderId,
            CustomerId = command.CustomerId,
            Items = command.Items,
            Total = total,
            Timestamp = DateTime.UtcNow
        };
        
        // Save to event store
        await _eventStore.AppendEventAsync(@event);
        
        // Publish event for subscribers
        await _eventBus.PublishAsync(@event);
    }
}

// Event Handlers: Update Read Models
public class OrderReadModelEventHandler
{
    private readonly IOrderReadRepository _readRepository;
    private readonly IUserServiceClient _userServiceClient;
    
    [EventSubscriber]
    public async Task OnOrderCreatedAsync(OrderCreatedEvent @event)
    {
        var customer = await _userServiceClient.GetUserAsync(@event.CustomerId);
        
        var readModel = new OrderReadModel
        {
            Id = @event.AggregateId,
            CustomerName = customer.Name,
            CustomerEmail = customer.Email,
            ItemCount = @event.Items.Count,
            Total = @event.Total,
            CreatedAt = @event.Timestamp
        };
        
        // Update read model in optimized store (Elasticsearch, etc.)
        await _readRepository.SaveAsync(readModel);
    }
}

// Query (Read)
public abstract class Query<TResult>
{
}

public class GetOrderDetailsQuery : Query<OrderDetailsDto>
{
    public Guid OrderId { get; set; }
}

// Query Handler: Reads from Read Model
public class OrderQueryHandler
{
    private readonly IOrderReadRepository _readRepository;
    
    public async Task<OrderDetailsDto> HandleAsync(GetOrderDetailsQuery query)
    {
        // Fast read from denormalized read model
        return await _readRepository.GetOrderDetailsAsync(query.OrderId);
    }
}

// Full Architecture: Command-Event-Query Flow
public class OrderService
{
    private readonly ICommandBus _commandBus;
    private readonly IQueryBus _queryBus;
    private readonly IEventBus _eventBus;
    
    // Write Operation
    public async Task<Guid> CreateOrderAsync(CreateOrderRequest request)
    {
        var command = new CreateOrderCommand
        {
            CustomerId = request.CustomerId,
            Items = request.Items
        };
        
        // Send command to handler
        // Handler creates OrderCreatedEvent
        // Event is stored and published
        // Read models updated via event handlers
        await _commandBus.SendAsync(command);
        
        return Guid.NewGuid(); // Return order ID
    }
    
    // Read Operation
    public async Task<OrderDetailsDto> GetOrderDetailsAsync(Guid orderId)
    {
        var query = new GetOrderDetailsQuery { OrderId = orderId };
        
        // Query reads from optimized read model
        return await _queryBus.SendAsync(query);
    }
    
    // Temporal Query: Get order state at specific time
    public async Task<OrderDetailsDto> GetOrderDetailsAtTimeAsync(Guid orderId, DateTime timestamp)
    {
        // Rebuild from event store at specific timestamp
        var events = await _eventStore.GetEventsAsync(orderId);
        var relevantEvents = events.Where(e => e.Timestamp <= timestamp);
        
        var order = Order.FromHistory(relevantEvents);
        
        return new OrderDetailsDto { /* ... */ };
    }
}

// Eventual Consistency Handling
public class EventProjectionService : IHostedService
{
    private readonly IEventStore _eventStore;
    private readonly IOrderReadRepository _readRepository;
    
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        // Continuously project new events to read models
        while (!cancellationToken.IsCancellationRequested)
        {
            var newEvents = await _eventStore.GetUnprocessedEventsAsync();
            
            foreach (var @event in newEvents)
            {
                // Update read model for this event
                await ProjectEventToReadModelAsync(@event);
                await _eventStore.MarkAsProcessedAsync(@event.Id);
            }
            
            await Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
        }
    }
    
    private async Task ProjectEventToReadModelAsync(DomainEvent @event)
    {
        switch (@event)
        {
            case OrderCreatedEvent orderCreated:
                // Update order read model
                break;
            case OrderShippedEvent orderShipped:
                // Update order read model status
                break;
        }
    }
    
    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}`,
        },
      ],
    },
  ],
};
