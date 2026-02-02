import type { Topic } from "../../../types";

export const azureEventGridTopic: Topic = {
  id: "azure-event-grid",
  name: "Event Grid",
  questions: [
    {
      id: "q1",
      question: "What is Azure Event Grid and what are its core components?",
      answer:
        "Azure Event Grid is a fully managed event routing service that connects event publishers to event subscribers using pub-sub pattern. Core components: 1) Event Sources - produce events (Storage, Service Bus, custom topics). 2) Event Handlers - receive and process events (Functions, Logic Apps, Webhooks, Event Hubs). 3) Topics - endpoints where events are published. 4) Event Subscriptions - route events from topics to handlers. 5) Event Filters - filter events by type, subject, or data. Supports thousands of events per second with at-least-once delivery guarantee. Integrates with 200+ Azure services and custom webhooks.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Event Grid - Core Concepts
using Azure;
using Azure.Messaging.EventGrid;
using Microsoft.Azure.WebJobs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= EVENT SOURCES =============
// Built-in sources: Storage, Service Bus, App Configuration, IoT Hub, etc.

public static class EventSources
{
    public const string StorageSource = "Microsoft.Storage.StorageAccounts";
    public const string ServiceBusSource = "Microsoft.ServiceBus.Namespaces";
    public const string AppConfigSource = "Microsoft.AppConfiguration.ConfigurationStores";
    public const string IoTHubSource = "Microsoft.Devices.IoTHubs";
}

// ============= CUSTOM TOPIC =============
// Create custom topic for application events

[FunctionName("PublishEventToCustomTopic")]
public static async Task PublishEvent(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "events")] EventData eventData,
    [EventGrid(TopicEndpointUri = "EventGridTopicUri", TopicKeySetting = "EventGridTopicKey")] IAsyncCollector<EventGridEvent> eventCollector)
{
    // Create event
    var eventGridEvent = new EventGridEvent(
        subject: $"/orders/{eventData.OrderId}",
        eventType: "Orders.OrderCreated",
        dataVersion: "1.0",
        data: eventData
    );

    // Publish event
    await eventCollector.AddAsync(eventGridEvent);

    Console.WriteLine($"Event published for order {eventData.OrderId}");
}

// ============= EVENT HANDLER (WEBHOOK) =============
// Handle events from Event Grid

[FunctionName("EventGridWebhook")]
public static async Task HandleEventGridEvents(
    [HttpTrigger(AuthorizationLevel.Function, "post", Route = "eventgrid")] EventGridEvent[] events)
{
    foreach (var @event in events)
    {
        // Handle validation event (sent first time webhook is registered)
        if (@event.EventType == "Microsoft.EventGrid.SubscriptionValidationEvent")
        {
            var validationEvent = @event.Data as dynamic;
            var validationCode = validationEvent?.validationCode;
            Console.WriteLine($"Validation code: {validationCode}");
            continue;
        }

        Console.WriteLine($"Event Type: {@event.EventType}");
        Console.WriteLine($"Subject: {@event.Subject}");
        Console.WriteLine($"Data: {@event.Data}");
    }

    await Task.CompletedTask;
}

// ============= EVENT HANDLER (AZURE FUNCTION) =============
// Process events using Event Grid trigger

[FunctionName("OrderCreatedEventHandler")]
public static async Task ProcessOrderEvent(
    [EventGridTrigger] EventGridEvent eventGridEvent,
    ILogger log)
{
    log.LogInformation($"Processing event: {eventGridEvent.EventType}");
    log.LogInformation($"Subject: {eventGridEvent.Subject}");

    // Parse event data
    var orderData = eventGridEvent.Data as dynamic;
    var orderId = orderData.OrderId;

    log.LogInformation($"Order created: {orderId}");

    // Process order (call function, write to database, etc.)
    await ProcessOrderAsync(orderId);
}

// ============= EVENT SUBSCRIPTION =============
// Route events from topic to handler

public class EventSubscriptionConfig
{
    // Topics: Custom topic or event source (Storage, Service Bus, etc.)
    public string TopicName { get; set; }

    // Event types to subscribe to
    public List<string> EventTypes { get; set; } = new()
    {
        "Orders.OrderCreated",
        "Orders.OrderUpdated",
        "Orders.OrderCancelled"
    };

    // Filter by subject prefix/suffix
    public string SubjectFilter { get; set; } = "/orders/";

    // Endpoint where events are sent
    public string EndpointUri { get; set; }

    // Retry policy
    public RetryPolicy RetryPolicy { get; set; } = new()
    {
        MaxDeliveryAttempts = 30,
        EventTimeToLiveInMinutes = 1440 // 24 hours
    };

    // Dead-letter endpoint for failed events
    public string DeadLetterEndpoint { get; set; }
}

public class RetryPolicy
{
    public int MaxDeliveryAttempts { get; set; }
    public int EventTimeToLiveInMinutes { get; set; }
}

// ============= EVENT TYPES =============
// Common Event Grid event types

public static class CommonEventTypes
{
    // Storage events
    public const string BlobCreated = "Microsoft.Storage.BlobCreated";
    public const string BlobDeleted = "Microsoft.Storage.BlobDeleted";

    // Service Bus events
    public const string ServiceBusQueueMessage = "Microsoft.ServiceBus.QueueMessageDelivered";

    // App Configuration events
    public const string AppConfigKeyValueModified = "Microsoft.AppConfiguration.KeyValueModified";

    // IoT Hub events
    public const string IoTDeviceTelemetry = "Microsoft.Devices.DeviceTelemetry";

    // Custom events
    public const string OrderCreated = "Orders.OrderCreated";
    public const string PaymentProcessed = "Payment.PaymentProcessed";
}

// ============= EVENT DATA =============
class EventData
{
    public string OrderId { get; set; }
    public decimal Amount { get; set; }
    public string CustomerEmail { get; set; }
    public DateTime CreatedAt { get; set; }
}

async Task ProcessOrderAsync(string orderId)
{
    await Task.Delay(100);
    Console.WriteLine($"Order {orderId} processed");
}

// ============= EVENT GRID ARCHITECTURE =============
Console.WriteLine("Event Grid Architecture:");
Console.WriteLine("Event Sources → Event Grid Topic → Event Subscriptions → Event Handlers");
Console.WriteLine("");
Console.WriteLine("Publishers publish events to topics");
Console.WriteLine("Subscribers subscribe to topics");
Console.WriteLine("Event Grid routes events based on subscriptions and filters");
Console.WriteLine("");
Console.WriteLine("Delivery: At-least-once (events may be delivered multiple times)");
Console.WriteLine("Ordering: Best-effort (not guaranteed within same subscription)");
Console.WriteLine("Throughput: Thousands of events per second");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you configure event subscriptions and filters in Event Grid?",
      answer:
        "Event subscriptions connect event sources to handlers. Configure: 1) Event types - subscribe to specific event types (Azure-provided or custom). 2) Subject filtering - include/exclude by subject prefix/suffix (e.g., /orders/premium). 3) Advanced filters - filter by data properties (e.g., amount > 100). 4) Endpoints - send to Webhook, Function, Logic App, Event Hub, Service Bus Queue, Storage Queue. 5) Delivery properties - add custom headers or properties to events. 6) Retry policy - set max attempts and TTL. 7) Dead-letter - handle failed deliveries. Multiple subscriptions per topic enable different handlers to process same events.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Grid - Subscriptions & Filters
using Azure.Messaging.EventGrid;
using System;
using System.Collections.Generic;

// ============= EVENT SUBSCRIPTION WITH FILTERS =============

public class EventSubscriptionWithFilters
{
    // Filter 1: By Event Type
    public List<string> FilterByEventType()
    {
        return new List<string>
        {
            "Orders.OrderCreated",
            "Orders.OrderCancelled"
        };
        // Only these event types are delivered
    }

    // Filter 2: By Subject (Simple)
    public class SubjectFilter
    {
        public string Prefix { get; set; } = "/orders/premium/";  // Include prefix
        public string Suffix { get; set; } = ".json";             // Include suffix
    }

    // Filter 3: Advanced Filters (on data properties)
    public class AdvancedFilters
    {
        // Number comparisons
        public bool FilterByAmount(decimal eventAmount)
        {
            return eventAmount > 100;  // Only amounts > 100
        }

        // String contains
        public bool FilterByCustomer(string customerEmail)
        {
            return customerEmail.Contains("@premium.com");
        }

        // String in list
        public bool FilterByStatus(string orderStatus)
        {
            var validStatuses = new[] { "Pending", "Processing", "Shipped" };
            return Array.Exists(validStatuses, s => s == orderStatus);
        }

        // Boolean matches
        public bool FilterByExpressShipping(bool isExpress)
        {
            return isExpress == true;  // Only express orders
        }
    }
}

// ============= CREATE SUBSCRIPTION PROGRAMMATICALLY =============

public async Task CreateEventSubscription(string topicName, string resourceGroup)
{
    // Subscription 1: Premium orders to premium handler
    var premiumSubscription = new
    {
        Name = "PremiumOrderSubscription",
        EventTypes = new[] { "Orders.OrderCreated" },
        SubjectFilter = new
        {
            Prefix = "/orders/premium/",
            CaseSensitive = false
        },
        Labels = new[] { "premium-orders" },
        EndpointType = "WebHook",
        Endpoint = "https://myfunction.azurewebsites.net/api/premium-orders",
        RetryPolicy = new
        {
            MaxDeliveryAttempts = 30,
            EventTimeToLiveInMinutes = 1440
        },
        DeadLetterDestination = new
        {
            EndpointType = "StorageQueue",
            ResourceId = "/subscriptions/.../queues/order-deadletter"
        }
    };

    // Subscription 2: Large orders to Logic App
    var largeOrderSubscription = new
    {
        Name = "LargeOrderSubscription",
        EventTypes = new[] { "Orders.OrderCreated" },
        AdvancedFilters = new
        {
            Filters = new[]
            {
                new
                {
                    OperatorType = "NumberGreaterThan",
                    Key = "data.amount",
                    Value = 1000
                }
            }
        },
        EndpointType = "LogicApp",
        Endpoint = "https://prod-logicapp.azurelogicapps.net/...",
        RetryPolicy = new
        {
            MaxDeliveryAttempts = 60,
            EventTimeToLiveInMinutes = 2880
        }
    };

    // Subscription 3: All events to Event Hub
    var eventHubSubscription = new
    {
        Name = "AllEventsToEventHub",
        EventTypes = new[] { "*" },  // All event types
        EndpointType = "EventHub",
        Endpoint = "/subscriptions/.../eventhubs/order-stream/",
        DeliveryWithResourceIdentity = new
        {
            Identity = new { Type = "SystemAssigned" },
            Destination = new
            {
                EndpointType = "EventHub",
                ResourceId = "/subscriptions/.../eventhubs/order-stream/"
            }
        }
    };

    Console.WriteLine("Subscriptions configured");
}

// ============= DELIVERY PROPERTIES =============

public class DeliveryProperties
{
    public static Dictionary<string, string> AddCustomHeaders()
    {
        return new Dictionary<string, string>
        {
            { "X-Custom-Header", "OrderProcessing" },
            { "X-Order-Priority", "High" },
            { "Authorization", "Bearer token" }
        };
    }
}

// ============= FILTER OPERATORS =============

public class FilterOperators
{
    // Number operators
    public const string NumberGreaterThan = "NumberGreaterThan";
    public const string NumberGreaterThanOrEquals = "NumberGreaterThanOrEquals";
    public const string NumberLessThan = "NumberLessThan";
    public const string NumberLessThanOrEquals = "NumberLessThanOrEquals";
    public const string NumberIn = "NumberIn";
    public const string NumberNotIn = "NumberNotIn";

    // String operators
    public const string StringContains = "StringContains";
    public const string StringNotContains = "StringNotContains";
    public const string StringBeginsWith = "StringBeginsWith";
    public const string StringNotBeginsWith = "StringNotBeginsWith";
    public const string StringEndsWith = "StringEndsWith";
    public const string StringNotEndsWith = "StringNotEndsWith";
    public const string StringIn = "StringIn";
    public const string StringNotIn = "StringNotIn";

    // Boolean operators
    public const string BoolEquals = "BoolEquals";

    // Example: Filter orders with amount > 500 AND status = "Pending"
    public static void ExampleComplexFilter()
    {
        var filters = new[]
        {
            new
            {
                OperatorType = "NumberGreaterThan",
                Key = "data.amount",
                Value = 500
            },
            new
            {
                OperatorType = "StringEquals",
                Key = "data.status",
                Value = "Pending"
            }
        };
        // Both conditions must be true (AND logic)
    }
}

// ============= ENDPOINT TYPES =============

public class EndpointTypes
{
    // 1. Webhook - Custom HTTP endpoint
    public string WebhookEndpoint => "https://myapp.com/webhook";

    // 2. Azure Function - Managed by Azure Functions runtime
    public string FunctionEndpoint => "https://myfunc.azurewebsites.net/api/handler";

    // 3. Event Hub - Stream events to Event Hub
    public string EventHubEndpoint => "/subscriptions/.../eventhubs/myeventhub";

    // 4. Service Bus Queue - Route to queue
    public string ServiceBusQueueEndpoint => "/subscriptions/.../queues/myqueue";

    // 5. Service Bus Topic - Route to topic
    public string ServiceBusTopicEndpoint => "/subscriptions/.../topics/mytopic";

    // 6. Storage Queue - Route to storage queue
    public string StorageQueueEndpoint => "https://mystg.queue.core.windows.net/myqueue";

    // 7. Logic App - Managed connector
    public string LogicAppEndpoint => "https://prod-logicapp.azurelogicapps.net/triggers/manual";

    // 8. Hybrid Connection - Relay to on-premises
    public string HybridConnectionEndpoint => "/subscriptions/.../hybridConnections/myconnection";
}

// ============= SUBSCRIPTION BEST PRACTICES =============

Console.WriteLine("Event Subscription Best Practices:");
Console.WriteLine("✓ Use specific event types, not '*' unless needed");
Console.WriteLine("✓ Filter by subject prefix to reduce unwanted events");
Console.WriteLine("✓ Use advanced filters for fine-grained control");
Console.WriteLine("✓ Configure dead-letter endpoint for failed events");
Console.WriteLine("✓ Set appropriate retry policy (max 30 attempts default)");
Console.WriteLine("✓ Use managed identity instead of connection strings");
Console.WriteLine("✓ Test subscriptions with test events before production");
Console.WriteLine("✓ Monitor subscription health and event delivery");
Console.WriteLine("✓ Use Event Grid explorer to validate filters");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you handle event delivery failures and implement dead-letter processing?",
      answer:
        "Event Grid uses retry policy for failed deliveries. Configure: 1) Max delivery attempts (1-30, default 30). 2) Event TTL (1440 minutes default, max 1440). After max retries or TTL expiration, events go to dead-letter endpoint if configured. Dead-letter handlers receive failed events for analysis/reprocessing. Failures occur due to: non-2xx HTTP responses, timeouts, malformed requests. Use exponential backoff between retries (internal). Implement dead-letter as Storage Queue or custom blob for audit trail. Monitor dead-letter queue for patterns and fix root causes.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Grid - Failure Handling & Dead-Letter
using Azure.Messaging.EventGrid;
using Azure.Storage.Queues;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.Azure.WebJobs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= RETRY POLICY CONFIGURATION =============

public class RetryConfiguration
{
    // Conservative: Few retries, quick failure
    public static Dictionary<string, object> ConservativeRetry()
    {
        return new Dictionary<string, object>
        {
            { "MaxDeliveryAttempts", 3 },
            { "EventTimeToLiveInMinutes", 60 }  // 1 hour
        };
    }

    // Aggressive: Many retries, long TTL
    public static Dictionary<string, object> AggressiveRetry()
    {
        return new Dictionary<string, object>
        {
            { "MaxDeliveryAttempts", 30 },
            { "EventTimeToLiveInMinutes", 1440 }  // 24 hours
        };
    }

    // Custom: Tailored to workload
    public static Dictionary<string, object> CustomRetry(int maxAttempts, int ttlMinutes)
    {
        return new Dictionary<string, object>
        {
            { "MaxDeliveryAttempts", Math.Clamp(maxAttempts, 1, 30) },
            { "EventTimeToLiveInMinutes", Math.Clamp(ttlMinutes, 1, 1440) }
        };
    }
}

// ============= HANDLER WITH PROPER ERROR HANDLING =============

[FunctionName("EventHandler")]
public static async Task HandleEventWithErrorHandling(
    [EventGridTrigger] EventGridEvent[] events,
    ILogger log)
{
    foreach (var @event in events)
    {
        try
        {
            log.LogInformation($"Processing event: {@event.EventType}");

            // Simulate processing
            var order = @event.Data as dynamic;
            var orderId = order?.orderId;

            // Business logic might fail (non-2xx response)
            if (orderId == null)
            {
                throw new ArgumentException("Order ID is required");
            }

            await ProcessOrderAsync(orderId);
            log.LogInformation($"Event processed successfully for {orderId}");
        }
        catch (Exception ex)
        {
            // Log error - Event Grid will retry
            log.LogError($"Error processing event: {ex.Message}");
            
            // Important: Throw to signal failure (HTTP non-2xx)
            // Event Grid will retry based on retry policy
            throw;
        }
    }
}

// ============= DEAD-LETTER HANDLER =============

[FunctionName("DeadLetterProcessor")]
public static async Task ProcessDeadLetterEvents(
    [QueueTrigger("event-deadletter")] CloudQueueMessage deadLetterMessage,
    [Queue("event-deadletter-archive")] IAsyncCollector<string> archiveQueue,
    [Table("DeadLetterEvents")] CloudTable deadLetterTable,
    ILogger log)
{
    try
    {
        log.LogError($"Processing dead-letter event: {deadLetterMessage.AsString}");

        // Parse event
        var eventData = deadLetterMessage.AsString;

        // 1. Archive for audit trail
        await archiveQueue.AddAsync(eventData);

        // 2. Log to table for analysis
        var deadLetterEntity = new DeadLetterEntity
        {
            PartitionKey = DateTime.UtcNow.ToString("yyyy-MM-dd"),
            RowKey = Guid.NewGuid().ToString(),
            EventData = eventData,
            ReceivedAt = DateTime.UtcNow,
            Reason = "Max retries exceeded or TTL expired"
        };

        await deadLetterTable.ExecuteAsync(TableOperation.Insert(deadLetterEntity));

        // 3. Alert on critical errors
        await AlertOnCriticalErrorAsync(eventData, log);

        // 4. Reprocess if applicable
        bool shouldRetry = ShouldRetryEvent(eventData);
        if (shouldRetry)
        {
            await ResubmitEventAsync(eventData, log);
        }
    }
    catch (Exception ex)
    {
        log.LogError($"Error processing dead-letter: {ex.Message}");
        throw;
    }
}

// ============= DEAD-LETTER ENTITY FOR TABLE STORAGE =============

public class DeadLetterEntity : TableEntity
{
    public string EventData { get; set; }
    public DateTime ReceivedAt { get; set; }
    public string Reason { get; set; }
    public int RetryCount { get; set; }
    public string ErrorMessage { get; set; }
}

// ============= FAILURE ANALYSIS =============

[FunctionName("AnalyzeDeadLetterPatterns")]
public static async Task AnalyzeFailurePatterns(
    [TimerTrigger("0 0 * * * *")] TimerInfo myTimer,
    [Table("DeadLetterEvents")] CloudTable deadLetterTable,
    ILogger log)
{
    // Query dead-letter events from last hour
    var filter = TableQuery.GenerateFilterCondition(
        "ReceivedAt",
        QueryComparisons.GreaterThan,
        DateTime.UtcNow.AddHours(-1).ToString("O")
    );

    var query = new TableQuery<DeadLetterEntity>().Where(filter);
    var results = await deadLetterTable.ExecuteQuerySegmentedAsync(query, null);

    log.LogInformation($"Dead-letter events in last hour: {results.Results.Count}");

    // Analyze patterns
    var errorCounts = new Dictionary<string, int>();
    foreach (var entity in results.Results)
    {
        if (errorCounts.ContainsKey(entity.Reason))
        {
            errorCounts[entity.Reason]++;
        }
        else
        {
            errorCounts[entity.Reason] = 1;
        }
    }

    // Log summary
    foreach (var error in errorCounts)
    {
        log.LogWarning($"Error: {error.Key} - Count: {error.Value}");
    }

    // Alert if threshold exceeded
    if (results.Results.Count > 100)
    {
        log.LogError("Dead-letter queue exceeding threshold!");
        await SendAlertAsync(log);
    }
}

// ============= EVENT RETRY DECISION LOGIC =============

private static bool ShouldRetryEvent(string eventData)
{
    // Determine if event should be retried based on error type
    // Transient errors: timeout, rate limit, service unavailable
    // Permanent errors: validation failure, authentication error

    // Example: Check if error is transient
    if (eventData.Contains("timeout") || eventData.Contains("ServiceUnavailable"))
    {
        return true;  // Retry transient errors
    }

    if (eventData.Contains("ValidationError") || eventData.Contains("Unauthorized"))
    {
        return false;  // Don't retry permanent errors
    }

    return false;
}

// ============= RESUBMIT EVENT TO EVENT GRID =============

private static async Task ResubmitEventAsync(string eventData, ILogger log)
{
    try
    {
        // Parse original event
        var originalEvent = System.Text.Json.JsonDocument.Parse(eventData);

        // Create new event for reprocessing
        var resubmitEvent = new EventGridEvent(
            subject: "/resubmitted/",
            eventType: "Event.Resubmitted",
            dataVersion: "1.0",
            data: originalEvent.RootElement
        );

        log.LogInformation("Event resubmitted to Event Grid");
        await Task.CompletedTask;
    }
    catch (Exception ex)
    {
        log.LogError($"Failed to resubmit event: {ex.Message}");
    }
}

// ============= ALERTING =============

private static async Task AlertOnCriticalErrorAsync(string eventData, ILogger log)
{
    // Send alert via email, SMS, or Teams
    log.LogError($"CRITICAL: Dead-letter event: {eventData}");
    await Task.CompletedTask;
}

private static async Task SendAlertAsync(ILogger log)
{
    // Trigger alert (email, Teams, SMS)
    log.LogError("ALERT: Dead-letter queue threshold exceeded");
    await Task.CompletedTask;
}

// ============= HTTP STATUS CODES =============

Console.WriteLine("HTTP Status Code Handling:");
Console.WriteLine("✓ 2xx (Success) - Event delivered, no retry");
Console.WriteLine("✗ 3xx (Redirect) - Treated as failure, will retry");
Console.WriteLine("✗ 4xx (Client Error) - Treated as failure, will retry");
Console.WriteLine("  - 400, 401, 403: Permanent failures, consider dead-letter");
Console.WriteLine("✗ 5xx (Server Error) - Transient failure, will retry");
Console.WriteLine("✗ Timeout - Transient failure, will retry");
Console.WriteLine("✗ No Response - Treated as failure, will retry");

async Task ProcessOrderAsync(string orderId)
{
    await Task.Delay(100);
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What are Event Grid event schemas and how do you parse events?",
      answer:
        "Event Grid uses CloudEvents or Event Grid schema. CloudEvents: standardized, W3C format with subject, type, source, id, time. Event Grid schema: Azure-specific with eventType, subject, data, eventTime, id. Both support custom data payload. Events are delivered as JSON array (even single events). Parse using: EventGridEvent[] (built-in), JsonDocument for raw JSON, or custom deserializers. Event properties: subject (resource identifier), eventType (what happened), eventTime (UTC), data (payload), id (unique), dataVersion. Handle both system events (Storage, Service Bus) and custom application events.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Grid - Event Schemas & Parsing
using Azure.Messaging.EventGrid;
using System;
using System.Collections.Generic;
using System.Text.Json;

// ============= EVENT GRID SCHEMA =============

public class EventGridSchema
{
    public static void ExampleEventGridEvent()
    {
        var json = @"
{
  ""id"": ""2d1781af-3a4c-4d7c-b93d-aacd7590859c"",
  ""eventType"": ""Microsoft.Storage.BlobCreated"",
  ""subject"": ""/blobServices/default/containers/test-container/blobs/test.txt"",
  ""eventTime"": ""2024-01-15T12:34:56.000Z"",
  ""data"": {
    ""api"": ""PutBlob"",
    ""clientRequestId"": ""xyz123"",
    ""requestId"": ""abc456"",
    ""eTag"": ""0x123456"",
    ""contentType"": ""text/plain"",
    ""contentLength"": 1024,
    ""blobType"": ""BlockBlob"",
    ""url"": ""https://mystg.blob.core.windows.net/test-container/test.txt""
  },
  ""dataVersion"": ""1.0"",
  ""metadataVersion"": ""1""
}";

        Console.WriteLine("Event Grid Schema Properties:");
        Console.WriteLine("- id: Unique event identifier");
        Console.WriteLine("- eventType: What happened (e.g., BlobCreated)");
        Console.WriteLine("- subject: Resource that generated event");
        Console.WriteLine("- eventTime: When event occurred (UTC)");
        Console.WriteLine("- data: Event-specific data payload");
        Console.WriteLine("- dataVersion: Schema version for data");
        Console.WriteLine("- metadataVersion: Event Grid schema version");
    }
}

// ============= CLOUD EVENTS SCHEMA =============

public class CloudEventsSchema
{
    public static void ExampleCloudEvent()
    {
        var json = @"
{
  ""specversion"": ""1.0"",
  ""type"": ""com.example.orders.created"",
  ""source"": ""https://myapp.com/orders"",
  ""subject"": ""order/12345"",
  ""id"": ""A234-1234-1234"",
  ""time"": ""2024-01-15T12:34:56Z"",
  ""datacontenttype"": ""application/json"",
  ""data"": {
    ""orderId"": ""12345"",
    ""amount"": 99.99,
    ""customer"": ""john@example.com""
  }
}";

        Console.WriteLine("CloudEvents Schema Properties:");
        Console.WriteLine("- specversion: CloudEvents specification version (1.0)");
        Console.WriteLine("- type: Event type (reverse-domain notation)");
        Console.WriteLine("- source: Event source");
        Console.WriteLine("- subject: Resource context");
        Console.WriteLine("- id: Unique identifier");
        Console.WriteLine("- time: Timestamp");
        Console.WriteLine("- datacontenttype: Payload content type");
        Console.WriteLine("- data: Event payload");
    }
}

// ============= PARSING EVENT GRID EVENTS =============

public class EventParsing
{
    // Method 1: Using EventGridEvent (built-in binding)
    public static void ParseUsingEventGridEvent(EventGridEvent[] events)
    {
        foreach (var @event in events)
        {
            Console.WriteLine($"ID: {@event.Id}");
            Console.WriteLine($"Type: {@event.EventType}");
            Console.WriteLine($"Subject: {@event.Subject}");
            Console.WriteLine($"Time: {@event.EventTime}");
            Console.WriteLine($"Data: {@event.Data}");
            Console.WriteLine($"Data Version: {@event.DataVersion}");
        }
    }

    // Method 2: Custom deserialization
    public static void ParseCustom(string jsonPayload)
    {
        using var document = JsonDocument.Parse(jsonPayload);
        var root = document.RootElement;

        if (root.ValueKind == JsonValueKind.Array)
        {
            foreach (var item in root.EnumerateArray())
            {
                var id = item.GetProperty("id").GetString();
                var eventType = item.GetProperty("eventType").GetString();
                var subject = item.GetProperty("subject").GetString();
                var data = item.GetProperty("data");

                Console.WriteLine($"Event: {eventType} for {subject}");
            }
        }
    }

    // Method 3: POCO deserialization
    public static void ParseToPoco(string jsonPayload)
    {
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        var events = JsonSerializer.Deserialize<EventGridEventDto[]>(jsonPayload, options);

        foreach (var @event in events)
        {
            Console.WriteLine($"Event: {@event.EventType}");
            var orderData = JsonSerializer.Deserialize<OrderData>(@event.Data.ToString(), options);
            Console.WriteLine($"Order: {orderData?.OrderId}");
        }
    }
}

public class EventGridEventDto
{
    public string Id { get; set; }
    public string EventType { get; set; }
    public string Subject { get; set; }
    public DateTime EventTime { get; set; }
    public JsonElement Data { get; set; }
    public string DataVersion { get; set; }
}

public class OrderData
{
    public string OrderId { get; set; }
    public decimal Amount { get; set; }
}

// ============= SYSTEM EVENTS PARSING =============

public class SystemEventsParser
{
    // Storage Blob event
    public static void ParseStorageBlobEvent(EventGridEvent @event)
    {
        if (@event.EventType == "Microsoft.Storage.BlobCreated")
        {
            var blobData = @event.Data as dynamic;
            var url = blobData?.url;
            var contentLength = blobData?.contentLength;

            Console.WriteLine($"Blob created: {url}, Size: {contentLength}");
        }
    }

    // Service Bus message event
    public static void ParseServiceBusEvent(EventGridEvent @event)
    {
        if (@event.EventType.Contains("ServiceBus"))
        {
            var messageData = @event.Data as dynamic;
            var messageId = messageData?.messageId;

            Console.WriteLine($"Service Bus message: {messageId}");
        }
    }

    // IoT Hub event
    public static void ParseIoTEvent(EventGridEvent @event)
    {
        if (@event.EventType.Contains("Devices"))
        {
            var deviceData = @event.Data as dynamic;
            var deviceId = deviceData?.deviceId;

            Console.WriteLine($"IoT Device: {deviceId}");
        }
    }
}

// ============= CUSTOM APPLICATION EVENTS =============

public class CustomEventParser
{
    public class CustomOrderEvent
    {
        public string OrderId { get; set; }
        public decimal Amount { get; set; }
        public string Status { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public static void ParseCustomOrderEvent(EventGridEvent @event)
    {
        if (@event.EventType == "Orders.OrderCreated")
        {
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var orderEvent = JsonSerializer.Deserialize<CustomOrderEvent>(
                @event.Data.ToString(),
                options
            );

            Console.WriteLine($"Order {orderEvent.OrderId}: {orderEvent.Amount}");
        }
    }
}

// ============= EVENT VALIDATION =============

public class EventValidation
{
    public static bool ValidateEvent(EventGridEvent @event)
    {
        // Check required fields
        if (string.IsNullOrEmpty(@event.Id))
            return false;

        if (string.IsNullOrEmpty(@event.EventType))
            return false;

        if (@event.EventTime == default)
            return false;

        if (@event.Data == null)
            return false;

        return true;
    }

    public static void ValidateEventData(EventGridEvent @event)
    {
        // Event-specific validation
        if (@event.EventType == "Orders.OrderCreated")
        {
            var orderData = @event.Data as dynamic;

            if (orderData?.orderId == null)
                throw new ArgumentException("Order ID required");

            if ((decimal)orderData?.amount <= 0)
                throw new ArgumentException("Amount must be positive");
        }
    }
}

// ============= PARSING BEST PRACTICES =============

Console.WriteLine("Event Parsing Best Practices:");
Console.WriteLine("✓ Always validate event structure before parsing");
Console.WriteLine("✓ Use try-catch for JSON parsing");
Console.WriteLine("✓ Handle both event types in subscription");
Console.WriteLine("✓ Use PropertyNameCaseInsensitive for JSON deserialization");
Console.WriteLine("✓ Validate required fields exist");
Console.WriteLine("✓ Log unparseable events for debugging");
Console.WriteLine("✓ Version your event schema (dataVersion)");
Console.WriteLine("✓ Test with actual events from Event Grid");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you monitor and troubleshoot Event Grid issues?",
      answer:
        "Monitor Event Grid using: 1) Azure Portal - view metrics (published events, delivery attempts, unmatched events). 2) Diagnostic Logs - activity logs, failed deliveries. 3) Application Insights - track handler performance. 4) Event Grid Viewer - test event delivery. 5) Metrics to track: delivery success rate, latency, unmatched events, dead-letter count. Common issues: handlers returning non-2xx, validation webhook failing, subject filters too strict, mismatched event types. Debug by: testing webhook with Event Grid Viewer, checking handler logs, verifying filters, inspecting dead-letter queue. Set up alerts for high failure rates or dead-letter queue growth.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Grid - Monitoring & Troubleshooting
using Azure.Monitor.Query;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= MONITORING WITH APPLICATION INSIGHTS =============

[FunctionName("MonitoredEventHandler")]
public static async Task HandleEventWithMonitoring(
    [EventGridTrigger] EventGridEvent[] events,
    TelemetryClient telemetryClient,
    ILogger log)
{
    foreach (var @event in events)
    {
        using (var operation = telemetryClient.StartOperation<RequestTelemetry>(
            $"EventProcessing-{@event.EventType}"))
        {
            try
            {
                var startTime = DateTime.UtcNow;

                log.LogInformation($"Processing event: {@event.EventType}");

                // Custom dimension tracking
                telemetryClient.TrackEvent(
                    "EventReceived",
                    new Dictionary<string, string>
                    {
                        { "EventType", @event.EventType },
                        { "Subject", @event.Subject },
                        { "EventId", @event.Id }
                    }
                );

                // Process event
                await ProcessEventAsync(@event);

                var duration = DateTime.UtcNow - startTime;
                telemetryClient.TrackEvent(
                    "EventProcessed",
                    new Dictionary<string, string>
                    {
                        { "EventType", @event.EventType },
                        { "Status", "Success" }
                    },
                    new Dictionary<string, double>
                    {
                        { "ProcessingTimeMs", duration.TotalMilliseconds }
                    }
                );
            }
            catch (Exception ex)
            {
                // Track exception
                telemetryClient.TrackException(ex);
                telemetryClient.TrackEvent(
                    "EventProcessingFailed",
                    new Dictionary<string, string>
                    {
                        { "EventType", @event.EventType },
                        { "ErrorMessage", ex.Message }
                    }
                );

                operation.Telemetry.Success = false;
                throw;
            }
        }
    }
}

// ============= CUSTOM METRICS TRACKING =============

public class EventGridMetrics
{
    public static void TrackMetrics(TelemetryClient telemetryClient)
    {
        // Track custom metrics
        telemetryClient.GetMetric("EventsProcessed").TrackValue(1);
        telemetryClient.GetMetric("EventProcessingDurationMs").TrackValue(150);
        telemetryClient.GetMetric("DeadLetterQueueSize").TrackValue(5);
        telemetryClient.GetMetric("FailureRate").TrackValue(0.02); // 2%
    }
}

// ============= DIAGNOSTIC LOGGING =============

[FunctionName("DiagnosticEventHandler")]
public static async Task HandleEventWithDiagnostics(
    [EventGridTrigger] EventGridEvent[] events,
    ILogger log)
{
    log.LogInformation($"Received {events.Length} events");

    foreach (var @event in events)
    {
        try
        {
            // Log event details
            log.LogInformation(
                "Event: {@EventDetails}",
                new
                {
                    Id = @event.Id,
                    Type = @event.EventType,
                    Subject = @event.Subject,
                    Time = @event.EventTime,
                    DataVersion = @event.DataVersion
                }
            );

            // Validate event
            if (string.IsNullOrEmpty(@event.Id))
            {
                log.LogWarning("Event missing ID: {Subject}", @event.Subject);
                continue;
            }

            // Process
            await ProcessEventAsync(@event);

            log.LogInformation("Event processed successfully: {EventId}", @event.Id);
        }
        catch (Exception ex)
        {
            log.LogError(
                ex,
                "Error processing event {EventId}: {ErrorMessage}",
                @event.Id,
                ex.Message
            );

            // Log event data for debugging
            log.LogError(
                "Event data: {@EventData}",
                @event.Data
            );

            throw;
        }
    }
}

// ============= WEBHOOK VALIDATION =============

[FunctionName("ValidateEventGridWebhook")]
public static async Task ValidateWebhook(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "webhook")] EventGridEvent[] events,
    ILogger log)
{
    foreach (var @event in events)
    {
        // Handle subscription validation
        if (@event.EventType == "Microsoft.EventGrid.SubscriptionValidationEvent")
        {
            log.LogInformation("Validating Event Grid subscription");

            var validationEvent = @event.Data as dynamic;
            var validationCode = validationEvent?.validationCode;

            log.LogInformation("Validation code: {ValidationCode}", validationCode);

            // Must return validation code within 5 minutes
            // Return 200 OK with validation response
        }
    }
    await Task.CompletedTask;
}

// ============= MONITORING CHECKLIST =============

[FunctionName("MonitoringDashboard")]
public static void MonitoringChecklist()
{
    Console.WriteLine("Event Grid Monitoring Checklist:");
    Console.WriteLine("");

    Console.WriteLine("Metrics to Monitor:");
    Console.WriteLine("✓ Published Events - Count of events published");
    Console.WriteLine("✓ Delivery Attempts - Total delivery attempts");
    Console.WriteLine("✓ Delivered Events - Successfully delivered");
    Console.WriteLine("✓ Failed Events - Failed deliveries");
    Console.WriteLine("✓ Unmatched Events - Events not matching any subscription");
    Console.WriteLine("✓ Dead-letter Events - Events moved to dead-letter");
    Console.WriteLine("");

    Console.WriteLine("Alerts to Set Up:");
    Console.WriteLine("⚠ High failure rate (>10% failed events)");
    Console.WriteLine("⚠ Dead-letter queue growing (>100 messages/hour)");
    Console.WriteLine("⚠ Unmatched events spike (>1000 events/hour)");
    Console.WriteLine("⚠ Handler timeouts (>5% timeout rate)");
    Console.WriteLine("⚠ Handler returning 4xx errors");
    Console.WriteLine("");

    Console.WriteLine("Troubleshooting Steps:");
    Console.WriteLine("1. Check Azure Portal metrics");
    Console.WriteLine("2. Review function logs in Application Insights");
    Console.WriteLine("3. Inspect dead-letter queue");
    Console.WriteLine("4. Test webhook with Event Grid Viewer");
    Console.WriteLine("5. Validate subscription filters");
    Console.WriteLine("6. Check handler response codes (must return 2xx)");
    Console.WriteLine("7. Verify network connectivity");
    Console.WriteLine("8. Review retry policy settings");
}

// ============= HEALTH CHECK ENDPOINT =============

[FunctionName("EventGridHealthCheck")]
public static async Task<object> HealthCheck(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "health")] object req,
    ILogger log)
{
    try
    {
        // Check handler readiness
        var isHealthy = await CheckHandlerHealthAsync();

        if (isHealthy)
        {
            log.LogInformation("Health check passed");
            return new { Status = "Healthy", Timestamp = DateTime.UtcNow };
        }
        else
        {
            log.LogError("Health check failed");
            return new { Status = "Unhealthy", Timestamp = DateTime.UtcNow };
        }
    }
    catch (Exception ex)
    {
        log.LogError($"Health check error: {ex.Message}");
        return new { Status = "Error", Error = ex.Message };
    }
}

// ============= PERFORMANCE MONITORING =============

public class PerformanceMonitoring
{
    public static Dictionary<string, double> TrackPerformanceMetrics()
    {
        return new Dictionary<string, double>
        {
            { "AverageProcessingTimeMs", 150 },
            { "MaxProcessingTimeMs", 5000 },
            { "P95ProcessingTimeMs", 800 },
            { "P99ProcessingTimeMs", 2000 },
            { "ThroughputEventsPerSecond", 100 },
            { "SuccessRatePercentage", 98.5 },
            { "FailureRatePercentage", 1.5 }
        };
    }
}

// ============= COMMON ISSUES & SOLUTIONS =============

Console.WriteLine("");
Console.WriteLine("Common Event Grid Issues:");
Console.WriteLine("");
Console.WriteLine("Issue 1: Webhook not receiving events");
Console.WriteLine("  Check: Is handler returning 200-299 status?");
Console.WriteLine("  Check: Can Event Grid reach the webhook URL?");
Console.WriteLine("  Check: Are subscription filters too restrictive?");
Console.WriteLine("");

Console.WriteLine("Issue 2: High dead-letter count");
Console.WriteLine("  Check: Handler error logs");
Console.WriteLine("  Check: Handler response status codes");
Console.WriteLine("  Check: Network connectivity");
Console.WriteLine("");

Console.WriteLine("Issue 3: Unmatched events spike");
Console.WriteLine("  Check: Event type filters");
Console.WriteLine("  Check: Subject filters");
Console.WriteLine("  Check: Are subscriptions correctly configured?");
Console.WriteLine("");

Console.WriteLine("Issue 4: Webhook validation failing");
Console.WriteLine("  Check: Handler must respond to validation event");
Console.WriteLine("  Check: Return validation code in response");
Console.WriteLine("  Check: Must respond within 5 minutes");

async Task ProcessEventAsync(EventGridEvent @event)
{
    await Task.Delay(100);
}

async Task<bool> CheckHandlerHealthAsync()
{
    await Task.Delay(100);
    return true;
}`,
        },
      ],
    },
  ],
};
