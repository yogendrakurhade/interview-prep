import type { Topic } from "../../../types";

export const azureServiceBusTopic: Topic = {
  id: "azure-service-bus",
  name: "Service Bus & Functions",
  questions: [
    {
      id: "q1",
      question: "What is Azure Service Bus and what are its main components?",
      answer:
        "Azure Service Bus is enterprise messaging service (asynchronous communication). Components: Queues (one-to-one), Topics (one-to-many with subscriptions), Relay (hybrid connections). Features: message sessions, dead-letter queues, duplicate detection, message TTL. Use for decoupling applications, ordering guarantees, delayed processing.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Azure.Messaging.ServiceBus;

// Azure Service Bus - Queues and Topics

// Queue: One sender, one receiver (FIFO)
var queueClient = new ServiceBusClient("connection-string").CreateSender("myqueue");

// Send message to queue
var message = new ServiceBusMessage("Hello, Service Bus!")
{
    MessageId = Guid.NewGuid().ToString(),
    CorrelationId = "order-123",
    Subject = "OrderProcessing",
    TimeToLive = TimeSpan.FromHours(1)
};

await queueClient.SendMessageAsync(message);

// Receive from queue
var receiver = new ServiceBusClient("connection-string").CreateReceiver("myqueue");
var receivedMessage = await receiver.ReceiveMessageAsync();

if (receivedMessage != null)
{
    Console.WriteLine(receivedMessage.Body.ToString());
    await receiver.CompleteMessageAsync(receivedMessage); // Acknowledge
}

// Topic: One sender, multiple receivers (Publish-Subscribe)
var topicClient = new ServiceBusClient("connection-string").CreateSender("orders");

var topicMessage = new ServiceBusMessage("Order #123")
{
    Subject = "NewOrder",
    ContentType = "application/json"
};

await topicClient.SendMessageAsync(topicMessage);

// Subscribe to topic
var subscriptionClient = new ServiceBusClient("connection-string")
    .CreateReceiver("orders", "email-subscription");

var subscriptionMessage = await subscriptionClient.ReceiveMessageAsync();
if (subscriptionMessage != null)
{
    Console.WriteLine($"Email subscriber received: {subscriptionMessage.Body}");
    await subscriptionClient.CompleteMessageAsync(subscriptionMessage);
}

// Dead-Letter Queue: Messages that can't be processed
var deadLetterReceiver = new ServiceBusClient("connection-string")
    .CreateReceiver("myqueue", new ServiceBusReceiverOptions 
    { 
        SubQueue = SubQueue.DeadLetter 
    });

var dlMessage = await deadLetterReceiver.ReceiveMessageAsync();

Console.WriteLine("Service Bus Components:");
Console.WriteLine("Queue:");
Console.WriteLine("  - FIFO order");
Console.WriteLine("  - One receiver (at a time)");
Console.WriteLine("  - At-least-once delivery");
Console.WriteLine("");
Console.WriteLine("Topic with Subscriptions:");
Console.WriteLine("  - Publish-Subscribe pattern");
Console.WriteLine("  - Multiple subscribers");
Console.WriteLine("  - Filter rules");
Console.WriteLine("");
Console.WriteLine("Dead-Letter Queue:");
Console.WriteLine("  - Messages that failed processing");
Console.WriteLine("  - Retry logic can be applied");`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Azure Functions and how do you create serverless functions?",
      answer:
        "Azure Functions runs code without managing infrastructure. Pay only for execution time. Triggered by: HTTP, Timer, Queue, Blob, Event Hub, Service Bus, etc. Languages: C#, Python, Node.js, Java. Hosting: Consumption plan (pay-per-use), App Service plan, Elastic Premium. Bindings simplify code (Input/Output).",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

// HTTP Trigger Function
[Function("HttpTriggerFunction")]
public static HttpResponseData HttpTrigger(
    [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "hello")] 
    HttpRequestData req,
    FunctionContext context)
{
    var logger = context.GetLogger("HttpTriggerFunction");
    logger.LogInformation("C# HTTP trigger function processed a request.");
    
    var response = req.CreateResponse(System.Net.HttpStatusCode.OK);
    response.Headers.Add("Content-Type", "text/plain; charset=utf-8");
    response.WriteString("Hello from Azure Functions!");
    
    return response;
}

// Queue Trigger Function
[Function("QueueTriggerFunction")]
public static void QueueTrigger(
    [QueueTrigger("myqueue")] string myQueueItem,
    FunctionContext context)
{
    var logger = context.GetLogger("QueueTriggerFunction");
    logger.LogInformation($"Queue message received: {myQueueItem}");
    
    // Process queue message
}

// Timer Trigger Function
[Function("TimerTriggerFunction")]
public static void TimerTrigger(
    [TimerTrigger("0 */5 * * * *")] TimerInfo myTimer, // Every 5 minutes
    FunctionContext context)
{
    var logger = context.GetLogger("TimerTriggerFunction");
    logger.LogInformation($"Timer triggered at: {DateTime.Now}");
}

// Service Bus Trigger
[Function("ServiceBusTriggerFunction")]
public static void ServiceBusTrigger(
    [ServiceBusTrigger("myqueue", Connection = "ServiceBusConnection")] 
    string sbMessage,
    FunctionContext context)
{
    var logger = context.GetLogger("ServiceBusTriggerFunction");
    logger.LogInformation($"Service Bus message: {sbMessage}");
}

// Blob Trigger
[Function("BlobTriggerFunction")]
public static void BlobTrigger(
    [BlobTrigger("mycontainer/{name}")] Stream myBlob,
    string name,
    FunctionContext context)
{
    var logger = context.GetLogger("BlobTriggerFunction");
    logger.LogInformation($"Blob processed: {name}, Size: {myBlob.Length}");
}

// Output Binding: Write to Blob
[Function("WriteToBlob")]
public static void WriteToBlob(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [BlobOutput("mycontainer/{id}.txt")] IAsyncCollector<string> outputBlob,
    FunctionContext context)
{
    outputBlob.AddAsync("File content here");
}

// Output Binding: Write to Queue
[Function("WriteToQueue")]
public static async Task WriteToQueue(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [QueueOutput("myqueue")] IAsyncCollector<string> outputQueue)
{
    await outputQueue.AddAsync("Message to queue");
}

// function.json configuration (for isolated worker)
/*
{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "maxTelemetryItemsPerSecond": 20
      }
    }
  },
  "functionTimeout": "00:05:00"
}
*/

Console.WriteLine("Azure Functions Triggers:");
Console.WriteLine("HTTP - REST API");
Console.WriteLine("Timer - Scheduled");
Console.WriteLine("Queue - Azure Storage Queue");
Console.WriteLine("Service Bus - Azure Service Bus");
Console.WriteLine("Blob - Azure Blob Storage");
Console.WriteLine("Event Hub - Event streaming");
Console.WriteLine("Cosmos DB - Database change");
Console.WriteLine("Event Grid - Event routing");

Console.WriteLine("Function Bindings:");
Console.WriteLine("Input Binding - Read data");
Console.WriteLine("Output Binding - Write data");
Console.WriteLine("Trigger - Start execution");

Console.WriteLine("Hosting Plans:");
Console.WriteLine("Consumption - Pay per execution");
Console.WriteLine("App Service - Share App Service Plan");
Console.WriteLine("Elastic Premium - Dedicated resources, auto-scale");
Console.WriteLine("Dedicated - Custom orchestration");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you integrate Service Bus with Azure Functions?",
      answer:
        "Use ServiceBusTrigger to automatically process messages. Set Connection string in local.settings.json (local) or Application Settings (cloud). Each message triggers function execution. Can batch messages. Supports dead-letter handling. Perfect for event-driven architecture and asynchronous processing.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Azure.Messaging.ServiceBus;

// Service Bus + Functions Integration

// Single message processing
[Function("ProcessServiceBusMessage")]
public static async Task ProcessMessage(
    [ServiceBusTrigger("orders", "email-subscription", Connection = "ServiceBusConnection")]
    ServiceBusReceivedMessage message,
    ServiceBusClient client,
    ILogger log)
{
    log.LogInformation($"Processing message: {message.MessageId}");
    log.LogInformation($"Body: {message.Body}");
    
    try
    {
        // Process order
        var orderData = message.Body.ToString();
        
        // Business logic
        await SendConfirmationEmail(orderData);
        
        log.LogInformation("Message processed successfully");
        
        // Message is auto-completed
    }
    catch (Exception ex)
    {
        log.LogError($"Error processing message: {ex.Message}");
        
        // Throw to move to dead-letter queue
        throw;
    }
}

// Batch processing (multiple messages at once)
[Function("ProcessBatch")]
public static async Task ProcessBatch(
    [ServiceBusTrigger("orders", Connection = "ServiceBusConnection", IsSingleDispatch = false)]
    ServiceBusReceivedMessage[] messages,
    ILogger log)
{
    log.LogInformation($"Processing batch of {messages.Length} messages");
    
    foreach (var message in messages)
    {
        try
        {
            log.LogInformation($"Message: {message.Body}");
            // Process each message
        }
        catch (Exception ex)
        {
            log.LogError($"Error: {ex.Message}");
        }
    }
}

// With custom properties
[Function("ProcessWithProperties")]
public static void ProcessWithProperties(
    [ServiceBusTrigger("orders", Connection = "ServiceBusConnection")]
    ServiceBusReceivedMessage message,
    ILogger log)
{
    log.LogInformation($"Message ID: {message.MessageId}");
    log.LogInformation($"Correlation ID: {message.CorrelationId}");
    log.LogInformation($"Subject: {message.Subject}");
    
    // Access user properties
    if (message.ApplicationProperties.TryGetValue("OrderId", out var orderId))
    {
        log.LogInformation($"Order ID: {orderId}");
    }
}

// local.settings.json (local development)
/*
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=...",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated",
    "ServiceBusConnection": "Endpoint=sb://mynamespace.servicebus.windows.net/;..."
  }
}
*/

// Sending messages to Service Bus from Function
[Function("CreateOrder")]
public static async Task CreateOrder(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [ServiceBusOutput("orders", Connection = "ServiceBusConnection")] 
    IAsyncCollector<ServiceBusMessage> output)
{
    var message = new ServiceBusMessage("New Order Data")
    {
        MessageId = Guid.NewGuid().ToString(),
        Subject = "NewOrder",
        CorrelationId = "order-123"
    };
    
    message.ApplicationProperties.Add("OrderId", "ORD-001");
    
    await output.AddAsync(message);
}

async Task SendConfirmationEmail(string orderData)
{
    // Send email
    await Task.Delay(100); // Simulate
}

Console.WriteLine("Service Bus + Functions Patterns:");
Console.WriteLine("1. Event-driven processing");
Console.WriteLine("2. Decoupled microservices");
Console.WriteLine("3. Async message handling");
Console.WriteLine("4. Auto-scaling per message");
Console.WriteLine("5. Guaranteed delivery");
Console.WriteLine("6. Dead-letter handling");`,
        },
      ],
    },
  ],
};
