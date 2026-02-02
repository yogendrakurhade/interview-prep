import type { Topic } from "../../../types";

export const azureEventHubTopic: Topic = {
  id: "azure-event-hub",
  name: "Event Hub",
  questions: [
    {
      id: "q1",
      question: "What is Azure Event Hub and what are its core concepts?",
      answer:
        "Azure Event Hub is a fully managed, real-time big data streaming platform that ingests and processes millions of events per second. Core concepts: 1) Event Hubs - namespace containers for topics. 2) Topics - like queues but optimized for streaming. 3) Partitions - ordered log of events enabling parallel consumption. 4) Consumer Groups - independent readers of event stream. 5) Event Processors - handle event consumption and checkpointing. 6) Throughput Units/Capacity Units - control ingress/egress rates. Key differences from Service Bus: Event Hub is event streaming (append-only log), Service Bus is messaging (queue/topic). Event Hub supports 1MB+ event sizes, millions events/sec, multiple independent consumers reading same stream. Use cases: IoT telemetry, log analytics, event sourcing.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Event Hub - Core Concepts
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;
using Azure.Messaging.EventHubs.Consumer;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

// ============= CORE COMPONENTS =============

// 1. Event Hub Namespace
public class EventHubNamespace
{
    public string NamespaceName { get; set; } = "myeventhubns";
    public string ConnectionString { get; set; } = "Endpoint=sb://...";
    public string[] EventHubNames { get; set; } = { "order-events", "user-events" };
}

// 2. Event Hub (Topic)
public class EventHubInfo
{
    public string Name { get; set; } = "order-events";
    public int PartitionCount { get; set; } = 4;
    public int RetentionDays { get; set; } = 7;
    public long MaxMessageSizeBytes { get; set; } = 1048576; // 1MB
    public DateTime CreatedAt { get; set; }
}

// 3. Partitions & Consumer Groups
public class EventHubStructure
{
    public string EventHubName { get; set; } = "order-events";
    
    // Partitions: ordered log of events
    public int[] Partitions { get; set; } = { 0, 1, 2, 3 };
    
    // Consumer Groups: independent readers
    public Dictionary<string, ConsumerGroupInfo> ConsumerGroups { get; set; } = new()
    {
        { "order-processing", new ConsumerGroupInfo { Name = "order-processing" } },
        { "analytics", new ConsumerGroupInfo { Name = "analytics" } },
        { "backup", new ConsumerGroupInfo { Name = "backup" } }
    };
}

public class ConsumerGroupInfo
{
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }
    public Dictionary<int, PartitionProperties> PartitionStatus { get; set; } = new();
}

// 4. Event (Message)
public class EventHubEvent
{
    public string OrderId { get; set; }
    public decimal Amount { get; set; }
    public string CustomerId { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Status { get; set; }
}

// ============= THROUGHPUT & SCALING =============

public class ThroughputConfiguration
{
    // Standard tier: Throughput Units (TU)
    public int ThroughputUnits { get; set; } = 10;  // 1 TU = 1 MB/s ingress, 2 MB/s egress
    public int MaxConnections { get; set; } = 5000; // Per TU

    // Premium tier: Event Hub Capacity Units (ECU)
    public int CapacityUnits { get; set; } = 1;     // 1 ECU = 10 MB/s ingress, 20 MB/s egress
    public int MaxBandwidthMbps { get; set; } = 10; // Per ECU
}

// ============= PUBLISHING EVENTS =============

public class EventPublisher
{
    private EventHubProducerClient _producer;

    public EventPublisher(string connectionString, string eventHubName)
    {
        _producer = new EventHubProducerClient(connectionString, eventHubName);
    }

    // Publish single event
    public async Task PublishEventAsync(EventHubEvent evt)
    {
        var eventData = new EventData(System.Text.Encoding.UTF8.GetBytes(
            System.Text.Json.JsonSerializer.Serialize(evt)
        ));

        // Optional: Set partition key (ensures events with same key go to same partition)
        await _producer.SendAsync(new[] { eventData }, 
            new SendEventOptions { PartitionKey = evt.CustomerId });
    }

    // Publish batch events
    public async Task PublishBatchAsync(IEnumerable<EventHubEvent> events)
    {
        var batch = await _producer.CreateBatchAsync();

        foreach (var evt in events)
        {
            var eventData = new EventData(System.Text.Encoding.UTF8.GetBytes(
                System.Text.Json.JsonSerializer.Serialize(evt)
            ));

            // Add to batch; if batch full, send and start new batch
            if (!batch.TryAdd(eventData))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync();
                batch.TryAdd(eventData);
            }
        }

        // Send remaining events
        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _producer.CloseAsync();
    }
}

// ============= CONSUMING EVENTS =============

public class EventConsumer
{
    private EventHubConsumerClient _consumer;

    public EventConsumer(string connectionString, string eventHubName, string consumerGroup)
    {
        _consumer = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);
    }

    // Read from specific partition
    public async Task ConsumeFromPartitionAsync(int partitionId)
    {
        var startingPosition = EventPosition.Latest;
        
        await foreach (PartitionEvent partitionEvent in 
            _consumer.ReadEventsFromPartitionAsync(partitionId, startingPosition))
        {
            var eventBody = System.Text.Encoding.UTF8.GetString(partitionEvent.Data.Body);
            Console.WriteLine($"Partition {partitionId}: {eventBody}");
        }
    }

    // Read from all partitions (for specific consumer group)
    public async Task ConsumeFromAllPartitionsAsync()
    {
        var startingPosition = EventPosition.Earliest;

        await foreach (PartitionEvent partitionEvent in 
            _consumer.ReadEventsAsync(startingPosition))
        {
            var eventBody = System.Text.Encoding.UTF8.GetString(partitionEvent.Data.Body);
            var partitionId = partitionEvent.Partition.PartitionId;
            var offset = partitionEvent.Data.Offset;
            var sequenceNumber = partitionEvent.Data.SequenceNumber;

            Console.WriteLine($"Partition {partitionId}, Offset: {offset}, Seq: {sequenceNumber}");
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _consumer.CloseAsync();
    }
}

// ============= KEY DIFFERENCES FROM SERVICE BUS =============

public class EventHubVsServiceBus
{
    public static void ComparisonTable()
    {
        Console.WriteLine("Event Hub vs Service Bus:");
        Console.WriteLine("");
        Console.WriteLine("Feature                  | Event Hub              | Service Bus");
        Console.WriteLine("Purpose                  | Event streaming        | Queuing/Messaging");
        Console.WriteLine("Data model               | Append-only log        | Queue/Topic");
        Console.WriteLine("Retention                | Hours/Days             | Until consumed");
        Console.WriteLine("Consumer model           | Multiple independent   | Single consumer");
        Console.WriteLine("Throughput               | Very high (millions)   | High");
        Console.WriteLine("Message size             | Up to 1MB              | 256KB default");
        Console.WriteLine("Ordering                 | Per partition          | Per session");
        Console.WriteLine("Use case                 | Real-time streaming    | Decoupled messaging");
    }
}

// ============= EVENT HUB ARCHITECTURE =============

Console.WriteLine("Event Hub Architecture:");
Console.WriteLine("");
Console.WriteLine("Publishers → Event Hub (Topic) → Partitions → Consumer Groups → Consumers");
Console.WriteLine("");
Console.WriteLine("Publishers:");
Console.WriteLine("- Send events to Event Hub");
Console.WriteLine("- Can specify partition key for ordering");
Console.WriteLine("");
Console.WriteLine("Partitions:");
Console.WriteLine("- Ordered log of events within partition");
Console.WriteLine("- 4-32 partitions typical");
Console.WriteLine("- Each partition can have concurrent consumers");
Console.WriteLine("");
Console.WriteLine("Consumer Groups:");
Console.WriteLine("- Independent stream readers");
Console.WriteLine("- Multiple apps can process same stream");
Console.WriteLine("- Each group tracks own offset per partition");
Console.WriteLine("");
Console.WriteLine("Consumers:");
Console.WriteLine("- Read from partition using consumer group");
Console.WriteLine("- Can use EventProcessorClient for automatic checkpointing");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do partitions and consumer groups work in Event Hub?",
      answer:
        "Partitions are ordered logs within an Event Hub - events are appended sequentially to one partition based on partition key or round-robin. Key benefits: 1) Ordered processing - events in same partition maintain order. 2) Parallel consumption - different consumers read different partitions. 3) Throughput - adding partitions increases overall event rate. Typical partition count: 4-32, can scale dynamically. Consumer Groups enable independent readers of same event stream - each group maintains own offset per partition. Multiple applications can process same events simultaneously. Default consumer group: $Default. Use consumer groups for different processing scenarios (real-time analytics, batch processing, backup). Each partition can have at most one active consumer per consumer group.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Hub - Partitions & Consumer Groups
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Consumer;
using Azure.Messaging.EventHubs.Processor;
using Azure.Storage.Blobs;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

// ============= PARTITION KEY =============

public class PartitionKeyStrategy
{
    // Strategy 1: Ensure ordering by customer
    public static string GetPartitionKeyByCustomer(string customerId)
    {
        return customerId;  // Same customer → same partition → ordered
    }

    // Strategy 2: Distribute events round-robin
    public static string NoPartitionKey()
    {
        return null;  // Event Hub chooses partition
    }

    // Strategy 3: Partition by tenant
    public static string GetPartitionKeyByTenant(string tenantId)
    {
        return tenantId;
    }
}

// ============= CONSUMER GROUP MANAGEMENT =============

public class ConsumerGroupManagement
{
    // Create/list consumer groups
    public async Task ManageConsumerGroupsAsync(string connectionString, string eventHubName)
    {
        var client = new EventHubAdministrationClient(connectionString);

        // List all consumer groups
        await foreach (var groupName in client.ListConsumerGroupsAsync(eventHubName))
        {
            Console.WriteLine($"Consumer Group: {groupName}");
        }

        // Get consumer group properties
        try
        {
            var properties = await client.GetConsumerGroupAsync(eventHubName, "order-processing");
            Console.WriteLine($"Consumer Group: {properties.Value.Name}");
            Console.WriteLine($"Created At: {properties.Value.CreatedOn}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}

// ============= PARTITION PROPERTIES =============

public class PartitionInformation
{
    public async Task GetPartitionInfoAsync(string connectionString, string eventHubName)
    {
        var client = new EventHubConsumerClient(
            EventHubConsumerClient.DefaultConsumerGroupName,
            connectionString,
            eventHubName
        );

        try
        {
            var properties = await client.GetEventHubPropertiesAsync();

            Console.WriteLine($"Event Hub: {properties.Name}");
            Console.WriteLine($"Created: {properties.CreatedOn}");
            Console.WriteLine($"Partitions: {properties.PartitionIds.Length}");

            foreach (var partitionId in properties.PartitionIds)
            {
                var partitionProperties = await client.GetPartitionPropertiesAsync(partitionId);

                Console.WriteLine($"  Partition {partitionId}:");
                Console.WriteLine($"    First Offset: {partitionProperties.FirstSequenceNumber}");
                Console.WriteLine($"    Last Offset: {partitionProperties.LastSequenceNumber}");
                Console.WriteLine($"    Last Enqueued Time: {partitionProperties.LastEnqueuedTimeUtc}");
            }
        }
        finally
        {
            await client.CloseAsync();
        }
    }
}

// ============= CONSUMER GROUP OFFSET TRACKING =============

public class OffsetTracking
{
    // Manual offset tracking
    public async Task ReadWithManualCheckpointAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup)
    {
        var client = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);

        try
        {
            var startingPosition = EventPosition.Earliest;

            await foreach (PartitionEvent partitionEvent in 
                client.ReadEventsAsync(startingPosition))
            {
                // Process event
                ProcessEvent(partitionEvent);

                // Manually track offset
                string offset = partitionEvent.Data.Offset;
                long sequenceNumber = partitionEvent.Data.SequenceNumber;

                Console.WriteLine($"Processed - Offset: {offset}, Seq: {sequenceNumber}");
                // Save offset to persistent storage (database, blob, etc.)
            }
        }
        finally
        {
            await client.CloseAsync();
        }
    }

    // Automatic checkpointing with EventProcessorClient
    public async Task ReadWithEventProcessorAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup,
        string blobConnectionString,
        string blobContainerName)
    {
        var storageClient = new BlobContainerClient(
            new Uri($"https://..." + blobContainerName),
            new Azure.Storage.StorageSharedKeyCredential("", "")
        );

        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            connectionString,
            eventHubName
        );

        processor.ProcessEventAsync += ProcessEventHandlerAsync;
        processor.ProcessErrorAsync += ProcessErrorHandlerAsync;

        await processor.StartProcessingAsync();
        // Continue processing until stopped
        await processor.StopProcessingAsync();
    }

    private async Task ProcessEventHandlerAsync(ProcessEventArgs args)
    {
        try
        {
            ProcessEvent(args.Data);
            // Checkpoint automatically saved
            await args.UpdateCheckpointAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error processing event: {ex.Message}");
        }
    }

    private async Task ProcessErrorHandlerAsync(ProcessErrorEventArgs args)
    {
        Console.WriteLine($"Error in partition {args.PartitionId}: {args.Exception.Message}");
        await Task.CompletedTask;
    }

    private void ProcessEvent(EventData eventData)
    {
        var eventBody = System.Text.Encoding.UTF8.GetString(eventData.Body);
        Console.WriteLine($"Event: {eventBody}");
    }
}

// ============= PARTITION STRATEGY =============

public class PartitionStrategy
{
    public static void WhenToUsePartitionKey()
    {
        Console.WriteLine("Use Partition Key when:");
        Console.WriteLine("✓ Order matters (events from same customer should be ordered)");
        Console.WriteLine("✓ Downstream processing depends on order");
        Console.WriteLine("✓ Stateful processing (grouping related events)");
        Console.WriteLine("");

        Console.WriteLine("Don't use Partition Key when:");
        Console.WriteLine("✗ Order doesn't matter (random events)");
        Console.WriteLine("✗ Need maximum throughput (distributed across all partitions)");
        Console.WriteLine("✗ Want load balancing across partitions");
    }

    public static void ScalingConsumers()
    {
        Console.WriteLine("");
        Console.WriteLine("Consumer Scaling:");
        Console.WriteLine("- If partitions > consumers: Some consumers read multiple partitions");
        Console.WriteLine("- If partitions = consumers: Each consumer reads 1 partition");
        Console.WriteLine("- If partitions < consumers: Some consumers idle");
        Console.WriteLine("- Optimal: Consumers <= Partitions");
        Console.WriteLine("- Recommendation: 1 consumer per partition for best throughput");
    }
}

// ============= CONSUMER GROUP USE CASES =============

public class ConsumerGroupUseCases
{
    public static void Examples()
    {
        Console.WriteLine("");
        Console.WriteLine("Consumer Group Use Cases:");
        Console.WriteLine("");

        Console.WriteLine("1. Real-time Dashboard:");
        Console.WriteLine("   Consumer Group: 'dashboard'");
        Console.WriteLine("   Purpose: Display live event metrics");
        Console.WriteLine("   Offset: Latest (skip past events)");
        Console.WriteLine("");

        Console.WriteLine("2. Analytics Batch Processing:");
        Console.WriteLine("   Consumer Group: 'analytics'");
        Console.WriteLine("   Purpose: Process all events for analysis");
        Console.WriteLine("   Offset: Earliest (process from beginning)");
        Console.WriteLine("");

        Console.WriteLine("3. Backup/Archive:");
        Console.WriteLine("   Consumer Group: 'backup'");
        Console.WriteLine("   Purpose: Store all events to long-term storage");
        Console.WriteLine("   Offset: Earliest with checkpointing");
        Console.WriteLine("");

        Console.WriteLine("4. Multiple Applications:");
        Console.WriteLine("   Each app has own consumer group");
        Console.WriteLine("   Each reads entire event stream independently");
        Console.WriteLine("   No interference between applications");
    }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you publish events efficiently and handle batching in Event Hub?",
      answer:
        "Event publishing optimizes throughput through batching. Key strategies: 1) Create batch with CreateBatchAsync() - groups events before sending. 2) Check batch capacity with TryAdd() - prevents exceeding size limits. 3) Send full batch immediately - reduces network round-trips. 4) Use partition keys for ordering - same key = same partition. 5) Handle backpressure - retry on transient failures. Performance optimization: batch size ~1MB, 1000 events typical batch, tune based on event size. Failed events can be retried with exponential backoff. For throughput units, calculate: events/sec * avg_event_size / 1MB = TU needed. Max batch size 1MB, individual event max 1MB.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Hub - Publishing & Batching
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

// ============= BATCH PUBLISHING =============

public class BatchPublisher
{
    private EventHubProducerClient _producer;

    public BatchPublisher(string connectionString, string eventHubName)
    {
        _producer = new EventHubProducerClient(connectionString, eventHubName);
    }

    // Basic batch publishing
    public async Task PublishBatchAsync(List<EventData> events)
    {
        var batch = await _producer.CreateBatchAsync();

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                // Batch is full, send it
                await _producer.SendAsync(batch);

                // Create new batch
                batch = await _producer.CreateBatchAsync();

                // Add event to new batch (must succeed)
                if (!batch.TryAdd(@event))
                {
                    throw new InvalidOperationException("Event too large for batch");
                }
            }
        }

        // Send remaining events
        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    // Publishing with partition key
    public async Task PublishWithPartitionKeyAsync(
        List<EventData> events,
        string partitionKey)
    {
        var sendOptions = new SendEventOptions { PartitionKey = partitionKey };
        var batch = await _producer.CreateBatchAsync(sendOptions);

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync(sendOptions);
                batch.TryAdd(@event);
            }
        }

        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    // Publishing to specific partition
    public async Task PublishToSpecificPartitionAsync(
        List<EventData> events,
        int partitionId)
    {
        var sendOptions = new SendEventOptions { PartitionId = partitionId.ToString() };
        var batch = await _producer.CreateBatchAsync(sendOptions);

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync(sendOptions);
                batch.TryAdd(@event);
            }
        }

        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _producer.CloseAsync();
    }
}

// ============= BATCH SIZE OPTIMIZATION =============

public class BatchOptimization
{
    // Get batch properties
    public async Task AnalyzeBatchAsync(string connectionString, string eventHubName)
    {
        var producer = new EventHubProducerClient(connectionString, eventHubName);

        try
        {
            var batchOptions = new CreateBatchOptions();
            var batch = await producer.CreateBatchAsync(batchOptions);

            Console.WriteLine($"Max Batch Size: {batch.MaximumSizeInBytes} bytes");
            Console.WriteLine($"Available Size: {batch.SizeInBytes} bytes");

            // Create sample events and check size
            var sampleEvent = new EventData(System.Text.Encoding.UTF8.GetBytes(
                JsonSerializer.Serialize(new { orderId = "12345", amount = 99.99 })
            ));

            if (batch.TryAdd(sampleEvent))
            {
                Console.WriteLine($"Sample Event Size: {sampleEvent.Body.Length} bytes");
                Console.WriteLine($"Batch Used: {batch.SizeInBytes} bytes");
            }
        }
        finally
        {
            await producer.CloseAsync();
        }
    }
}

// ============= THROUGHPUT CALCULATION =============

public class ThroughputCalculation
{
    public static void CalculateThroughputUnits()
    {
        Console.WriteLine("Throughput Unit (TU) Sizing:");
        Console.WriteLine("");

        // Example: 100,000 events/sec, average 1KB per event
        int eventsPerSecond = 100000;
        int avgEventSizeBytes = 1024;  // 1KB

        double ingressMBps = (eventsPerSecond * avgEventSizeBytes) / (1024.0 * 1024.0);
        int tuNeeded = (int)Math.Ceiling(ingressMBps);

        Console.WriteLine($"Events/sec: {eventsPerSecond}");
        Console.WriteLine($"Avg Event Size: {avgEventSizeBytes} bytes");
        Console.WriteLine($"Required Ingress: {ingressMBps:F2} MB/s");
        Console.WriteLine($"Throughput Units Needed: {tuNeeded} TU");
        Console.WriteLine("");

        Console.WriteLine("1 TU = 1 MB/s ingress, 2 MB/s egress");
        Console.WriteLine("Scale up: Add more TU");
        Console.WriteLine("Monitor: Use Azure Monitor for actual usage");
    }
}

// ============= ERROR HANDLING & RETRY =============

public class ErrorHandlingPublisher
{
    private EventHubProducerClient _producer;

    public ErrorHandlingPublisher(string connectionString, string eventHubName)
    {
        _producer = new EventHubProducerClient(connectionString, eventHubName);
    }

    // Publish with retry logic
    public async Task PublishWithRetryAsync(
        List<EventData> events,
        int maxRetries = 3)
    {
        int retryCount = 0;
        var exponentialBackoff = new System.Diagnostics.Stopwatch();

        while (retryCount < maxRetries)
        {
            try
            {
                await PublishBatchAsync(events);
                return;  // Success
            }
            catch (Azure.Messaging.EventHubs.EventHubsException ex) when (ex.IsTransient)
            {
                retryCount++;
                int delayMs = (int)Math.Pow(2, retryCount) * 1000;  // Exponential backoff

                Console.WriteLine($"Transient error, retrying in {delayMs}ms");
                await Task.Delay(delayMs);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Fatal error: {ex.Message}");
                throw;
            }
        }

        throw new InvalidOperationException($"Failed after {maxRetries} retries");
    }

    private async Task PublishBatchAsync(List<EventData> events)
    {
        var batch = await _producer.CreateBatchAsync();

        foreach (var @event in events)
        {
            if (!batch.TryAdd(@event))
            {
                await _producer.SendAsync(batch);
                batch = await _producer.CreateBatchAsync();
                batch.TryAdd(@event);
            }
        }

        if (batch.Count > 0)
        {
            await _producer.SendAsync(batch);
        }
    }

    public async ValueTask DisposeAsync()
    {
        await _producer.CloseAsync();
    }
}

// ============= PERFORMANCE MONITORING =============

public class PerformanceMonitoring
{
    public async Task MeasurePublishThroughputAsync(
        string connectionString,
        string eventHubName,
        int totalEvents)
    {
        var producer = new EventHubProducerClient(connectionString, eventHubName);
        var stopwatch = Stopwatch.StartNew();

        try
        {
            var batch = await producer.CreateBatchAsync();
            int eventCount = 0;

            for (int i = 0; i < totalEvents; i++)
            {
                var eventData = new EventData(System.Text.Encoding.UTF8.GetBytes(
                    $"Event {i}: {DateTime.UtcNow}"
                ));

                if (!batch.TryAdd(eventData))
                {
                    await producer.SendAsync(batch);
                    batch = await producer.CreateBatchAsync();
                    batch.TryAdd(eventData);
                }

                eventCount++;
            }

            if (batch.Count > 0)
            {
                await producer.SendAsync(batch);
            }

            stopwatch.Stop();

            double eventsPerSecond = totalEvents / stopwatch.Elapsed.TotalSeconds;
            Console.WriteLine($"Published {totalEvents} events");
            Console.WriteLine($"Duration: {stopwatch.ElapsedMilliseconds}ms");
            Console.WriteLine($"Throughput: {eventsPerSecond:F0} events/sec");
        }
        finally
        {
            await producer.CloseAsync();
        }
    }
}

// ============= BEST PRACTICES =============

Console.WriteLine("Event Hub Publishing Best Practices:");
Console.WriteLine("");
Console.WriteLine("✓ Always use batching for efficiency");
Console.WriteLine("✓ Batch size: Aim for 1MB (max limit)");
Console.WriteLine("✓ Use partition key for ordering requirements");
Console.WriteLine("✓ Implement exponential backoff for retries");
Console.WriteLine("✓ Handle EventHubsException.IsTransient for transient errors");
Console.WriteLine("✓ Monitor throughput unit utilization");
Console.WriteLine("✓ Use EventHubProducerClient connection pooling");
Console.WriteLine("✓ Dispose producer when done to free resources");
Console.WriteLine("✓ Size TU based on peak event rate");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you consume events efficiently using EventProcessorClient?",
      answer:
        "EventProcessorClient automates consumption with: 1) Automatic checkpoint management - saves offset to blob storage. 2) Load balancing - distributes partitions across consumer instances. 3) Partition ownership - ensures each partition has max one owner. 4) Automatic recovery - handles consumer failures gracefully. 5) Event processing - delegates to ProcessEventAsync handler. Checkpointing strategy: automatic (after each event) or manual (batch of events). Use blob storage for checkpoint persistence - enables resuming from last checkpoint. Multiple EventProcessorClient instances with same consumer group scale horizontally. Benefits: no manual offset tracking, automatic partition rebalancing, high availability. Setup: configure storage client, define event/error handlers, start processing.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Hub - EventProcessorClient for Consumption
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Consumer;
using Azure.Messaging.EventHubs.Processor;
using Azure.Storage.Blobs;
using Microsoft.Azure.WebJobs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= EVENT PROCESSOR CLIENT SETUP =============

public class EventHubConsumerSetup
{
    public static async Task SetupEventProcessorAsync(
        string eventHubConnectionString,
        string eventHubName,
        string consumerGroup,
        string storageConnectionString,
        string containerName)
    {
        // Initialize storage client for checkpointing
        var storageClient = new BlobContainerClient(
            new Uri($"https://mystg.blob.core.windows.net/{containerName}"),
            new Azure.Storage.StorageSharedKeyCredential("accountname", "accountkey")
        );

        // Create processor
        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            eventHubConnectionString,
            eventHubName
        );

        // Register handlers
        processor.ProcessEventAsync += ProcessEventHandlerAsync;
        processor.ProcessErrorAsync += ProcessErrorHandlerAsync;

        // Start processing
        await processor.StartProcessingAsync();

        // Keep processing until stopped
        Console.WriteLine("Event processor started. Press Ctrl+C to stop.");
        await Task.Delay(Timeout.Infinite);

        // Stop processing
        await processor.StopProcessingAsync();
    }

    private static async Task ProcessEventHandlerAsync(ProcessEventArgs args)
    {
        try
        {
            // Get event data
            var eventBody = System.Text.Encoding.UTF8.GetString(args.Data.Body);
            Console.WriteLine($"Event: {eventBody}");

            // Process event (custom logic)
            await ProcessOrderAsync(eventBody);

            // Checkpoint after successful processing
            // Saves offset to blob storage
            await args.UpdateCheckpointAsync();

            Console.WriteLine($"Checkpointed partition {args.Partition.PartitionId}, offset {args.Data.Offset}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error processing event: {ex.Message}");
            // Don't checkpoint on error - will retry next time
        }
    }

    private static async Task ProcessErrorHandlerAsync(ProcessErrorEventArgs args)
    {
        Console.WriteLine($"Error in partition {args.PartitionId}: {args.Exception.Message}");
        Console.WriteLine($"Operation: {args.Operation}");

        // Handle specific error types
        if (args.Exception is Azure.Messaging.EventHubs.EventHubsException ehEx)
        {
            if (ehEx.IsTransient)
            {
                Console.WriteLine("Transient error - processor will retry");
            }
            else
            {
                Console.WriteLine("Permanent error - manual intervention needed");
            }
        }

        await Task.CompletedTask;
    }

    private static async Task ProcessOrderAsync(string orderJson)
    {
        // Simulate processing
        await Task.Delay(100);
    }
}

// ============= CHECKPOINT MANAGEMENT =============

public class CheckpointManagement
{
    // Automatic checkpointing (every event)
    private static async Task AutomaticCheckpointAsync(ProcessEventArgs args)
    {
        await args.UpdateCheckpointAsync();
        Console.WriteLine($"Checkpoint updated: {args.Data.Offset}");
    }

    // Manual checkpointing (batch of events)
    public async Task ManualCheckpointingAsync(
        string eventHubConnectionString,
        string eventHubName,
        string consumerGroup,
        string storageConnectionString)
    {
        var storageClient = new BlobContainerClient(
            new Uri("https://mystg.blob.core.windows.net/checkpoints"),
            new Azure.Storage.StorageSharedKeyCredential("accountname", "key")
        );

        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            eventHubConnectionString,
            eventHubName
        );

        int eventCount = 0;
        const int checkpointInterval = 100;

        processor.ProcessEventAsync += async (args) =>
        {
            // Process event
            await ProcessOrderAsync(System.Text.Encoding.UTF8.GetString(args.Data.Body));

            eventCount++;

            // Checkpoint every 100 events
            if (eventCount % checkpointInterval == 0)
            {
                await args.UpdateCheckpointAsync();
                Console.WriteLine($"Batch checkpoint: {eventCount} events processed");
            }
        };

        processor.ProcessErrorAsync += (args) =>
        {
            Console.WriteLine($"Error: {args.Exception.Message}");
            return Task.CompletedTask;
        };

        await processor.StartProcessingAsync();
    }

    // Resume from checkpoint
    public async Task ResumeFromCheckpointAsync(
        string eventHubConnectionString,
        string eventHubName,
        string consumerGroup,
        string storageConnectionString)
    {
        var storageClient = new BlobContainerClient(
            new Uri("https://mystg.blob.core.windows.net/checkpoints"),
            new Azure.Storage.StorageSharedKeyCredential("accountname", "key")
        );

        var processor = new EventProcessorClient(
            storageClient,
            consumerGroup,
            eventHubConnectionString,
            eventHubName
        );

        Console.WriteLine("Processor will resume from last checkpoint...");

        processor.ProcessEventAsync += (args) => ProcessEventHandlerAsync(args);
        processor.ProcessErrorAsync += (args) => ProcessErrorHandlerAsync(args);

        await processor.StartProcessingAsync();
    }
}

// ============= PARTITION OWNERSHIP & LOAD BALANCING =============

public class PartitionOwnershipTracking
{
    public async Task TrackPartitionOwnershipAsync(
        EventProcessorClient processor)
    {
        processor.PartitionInitializingAsync += async (args) =>
        {
            Console.WriteLine($"Initializing partition {args.Partition.PartitionId}");
            // Custom initialization logic
            await Task.CompletedTask;
        };

        processor.PartitionClosingAsync += async (args) =>
        {
            Console.WriteLine($"Closing partition {args.Partition.PartitionId}");
            Console.WriteLine($"Reason: {args.Reason}");
            // Custom cleanup logic
            await Task.CompletedTask;
        };
    }

    public static void LoadBalancingBehavior()
    {
        Console.WriteLine("");
        Console.WriteLine("EventProcessorClient Load Balancing:");
        Console.WriteLine("");

        Console.WriteLine("Scenario 1: 4 Partitions, 1 Processor");
        Console.WriteLine("  Processor owns all 4 partitions");
        Console.WriteLine("");

        Console.WriteLine("Scenario 2: 4 Partitions, 2 Processors");
        Console.WriteLine("  Each processor owns 2 partitions");
        Console.WriteLine("  Automatic rebalancing");
        Console.WriteLine("");

        Console.WriteLine("Scenario 3: 4 Partitions, 5 Processors");
        Console.WriteLine("  4 processors own 1 partition each");
        Console.WriteLine("  1 processor idle (no partitions assigned)");
        Console.WriteLine("");

        Console.WriteLine("When processor added/removed:");
        Console.WriteLine("  - Automatic rebalancing triggers");
        Console.WriteLine("  - Partitions reassigned to remaining processors");
        Console.WriteLine("  - Minimal impact on processing");
    }
}

// ============= CONSUMER GROUP MANAGEMENT =============

public class ConsumerGroupScaling
{
    public static void HorizontalScaling()
    {
        Console.WriteLine("");
        Console.WriteLine("Horizontal Scaling with EventProcessorClient:");
        Console.WriteLine("");

        Console.WriteLine("1. Multiple instances of same consumer group:");
        Console.WriteLine("   - All connect to same Event Hub and consumer group");
        Console.WriteLine("   - All share same storage account for checkpoints");
        Console.WriteLine("   - Automatic partition distribution");
        Console.WriteLine("");

        Console.WriteLine("2. Scaling logic:");
        Console.WriteLine("   - Add processor: Rebalance distributes partitions");
        Console.WriteLine("   - Remove processor: Other processors take partitions");
        Console.WriteLine("   - No message loss (checkpoints saved)");
        Console.WriteLine("");

        Console.WriteLine("3. Best practices:");
        Console.WriteLine("   - Use separate consumer groups for different apps");
        Console.WriteLine("   - Size instances: 1 instance per partition optimal");
        Console.WriteLine("   - Monitor: Track partition ownership and lag");
        Console.WriteLine("   - Handle rebalancing gracefully");
    }
}

// ============= ERROR HANDLING STRATEGIES =============

public class ErrorHandlingStrategies
{
    public static async Task ConfigureErrorHandlingAsync(EventProcessorClient processor)
    {
        processor.ProcessErrorAsync += async (args) =>
        {
            // Log error details
            Console.WriteLine($"Partition: {args.PartitionId}");
            Console.WriteLine($"Operation: {args.Operation}");
            Console.WriteLine($"Exception: {args.Exception.Message}");

            // Handle specific errors
            if (args.Exception is Azure.Messaging.EventHubs.EventHubsException ehEx)
            {
                if (ehEx.IsTransient)
                {
                    // Transient error - processor will retry automatically
                    Console.WriteLine("Transient error - automatic retry");
                }
                else if (args.Exception.InnerException is TimeoutException)
                {
                    // Timeout - likely network issue
                    Console.WriteLine("Timeout - check connectivity");
                }
                else
                {
                    // Other error
                    Console.WriteLine("Fatal error - may need intervention");
                }
            }

            await Task.CompletedTask;
        };
    }
}

// ============= BEST PRACTICES =============

Console.WriteLine("EventProcessorClient Best Practices:");
Console.WriteLine("");
Console.WriteLine("✓ Use blob storage for checkpoint persistence");
Console.WriteLine("✓ Implement ProcessEventAsync handler for processing");
Console.WriteLine("✓ Implement ProcessErrorAsync handler for error handling");
Console.WriteLine("✓ Use UpdateCheckpointAsync() to save progress");
Console.WriteLine("✓ Handle transient errors gracefully");
Console.WriteLine("✓ Scale: Add multiple processor instances");
Console.WriteLine("✓ Monitor: Track partition ownership and processing lag");
Console.WriteLine("✓ Batch checkpointing for better performance");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you monitor Event Hub performance and troubleshoot issues?",
      answer:
        "Monitor Event Hub using: 1) Azure Portal metrics - throughput, latency, consumer lag. 2) Diagnostic logs - operational logs, errors. 3) Application Insights - custom telemetry. 4) Azure Monitor alerts - high latency, throughput limits, errors. Key metrics: incoming messages, outgoing messages, active connections, server errors, incoming bytes. Consumer lag: difference between last enqueued offset and consumer offset. High lag indicates slow consumption. Troubleshooting: check TU/ECU limits (consider scaling), verify consumer is running, inspect error logs, validate network connectivity, review dead-letter behavior. Common issues: throttling (add TU), high latency (reduce batch size, check network), partition imbalance (verify consumer group), events lost (check retention policy).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Event Hub - Monitoring & Troubleshooting
using Azure.Monitor.Query;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= MONITORING METRICS =============

public class EventHubMonitoring
{
    public static void KeyMetricsToMonitor()
    {
        Console.WriteLine("Event Hub Key Metrics:");
        Console.WriteLine("");

        Console.WriteLine("Publisher Metrics:");
        Console.WriteLine("- Incoming Messages: Total events published");
        Console.WriteLine("- Incoming Bytes: Total data volume");
        Console.WriteLine("- Successful Requests: % of successful publishes");
        Console.WriteLine("- Server Errors: % of server-side failures");
        Console.WriteLine("");

        Console.WriteLine("Consumer Metrics:");
        Console.WriteLine("- Outgoing Messages: Total events consumed");
        Console.WriteLine("- Outgoing Bytes: Total data downloaded");
        Console.WriteLine("- Active Connections: Connected consumers");
        Console.WriteLine("");

        Console.WriteLine("Performance Metrics:");
        Console.WriteLine("- Consumer Lag: Offset difference between latest and consumed");
        Console.WriteLine("- Latency: Time from publish to consumption");
        Console.WriteLine("- Throughput Utilization: % of TU/ECU used");
    }
}

// ============= APPLICATION INSIGHTS INTEGRATION =============

public class ApplicationInsightsMonitoring
{
    private TelemetryClient _telemetryClient;

    public ApplicationInsightsMonitoring(string instrumentationKey)
    {
        var config = new Microsoft.ApplicationInsights.Config.TelemetryConfiguration(instrumentationKey);
        _telemetryClient = new TelemetryClient(config);
    }

    // Track publishing metrics
    public async Task TrackPublishingAsync(
        string eventHubName,
        int eventCount,
        long sizeBytes)
    {
        var startTime = DateTime.UtcNow;

        try
        {
            // Simulate publishing
            await Task.Delay(100);

            var duration = DateTime.UtcNow - startTime;

            _telemetryClient.TrackEvent(
                "EventHub_Publish",
                new Dictionary<string, string>
                {
                    { "EventHub", eventHubName },
                    { "Status", "Success" }
                },
                new Dictionary<string, double>
                {
                    { "EventCount", eventCount },
                    { "SizeBytes", sizeBytes },
                    { "DurationMs", duration.TotalMilliseconds }
                }
            );
        }
        catch (Exception ex)
        {
            _telemetryClient.TrackException(ex);
        }
    }

    // Track consumption metrics
    public async Task TrackConsumptionAsync(
        string eventHubName,
        string consumerGroup,
        int processedEvents,
        long processingTimeMs)
    {
        _telemetryClient.TrackEvent(
            "EventHub_Consume",
            new Dictionary<string, string>
            {
                { "EventHub", eventHubName },
                { "ConsumerGroup", consumerGroup }
            },
            new Dictionary<string, double>
            {
                { "ProcessedEvents", processedEvents },
                { "ProcessingTimeMs", processingTimeMs },
                { "AvgTimePerEventMs", processingTimeMs / (double)processedEvents }
            }
        );
    }

    // Track consumer lag
    public void TrackConsumerLag(
        string eventHubName,
        string consumerGroup,
        int partitionId,
        long lagMessages)
    {
        var severity = lagMessages > 10000 ? SeverityLevel.Warning : SeverityLevel.Information;

        _telemetryClient.TrackEvent(
            "EventHub_ConsumerLag",
            new Dictionary<string, string>
            {
                { "EventHub", eventHubName },
                { "ConsumerGroup", consumerGroup },
                { "Partition", partitionId.ToString() },
                { "Severity", severity.ToString() }
            },
            new Dictionary<string, double>
            {
                { "LagMessages", lagMessages }
            }
        );
    }
}

// ============= CONSUMER LAG TRACKING =============

public class ConsumerLagAnalysis
{
    public async Task AnalyzeLagAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup)
    {
        var client = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);

        try
        {
            var properties = await client.GetEventHubPropertiesAsync();

            Console.WriteLine($"Event Hub: {eventHubName}");
            Console.WriteLine($"Consumer Group: {consumerGroup}");
            Console.WriteLine("");

            foreach (var partitionId in properties.PartitionIds)
            {
                var partitionProperties = await client.GetPartitionPropertiesAsync(partitionId);
                long lastEnqueuedSequence = partitionProperties.LastSequenceNumber;

                // Get consumer group info
                var adminClient = new EventHubAdministrationClient(connectionString);
                var consumerGroupProperties = await adminClient.GetConsumerGroupAsync(
                    eventHubName,
                    consumerGroup
                );

                // Estimate lag
                long lag = lastEnqueuedSequence - (partitionProperties.LastSequenceNumber - 1000);

                Console.WriteLine($"Partition {partitionId}:");
                Console.WriteLine($"  First Sequence: {partitionProperties.FirstSequenceNumber}");
                Console.WriteLine($"  Last Sequence: {lastEnqueuedSequence}");
                Console.WriteLine($"  Estimated Lag: {Math.Max(0, lag)} messages");
                Console.WriteLine("");
            }
        }
        finally
        {
            await client.CloseAsync();
        }
    }
}

// ============= THROTTLING & THROUGHPUT MANAGEMENT =============

public class ThrottlingHandling
{
    public static void ThroughputUnitScaling()
    {
        Console.WriteLine("");
        Console.WriteLine("Throughput Unit (TU) Scaling:");
        Console.WriteLine("");

        Console.WriteLine("When to add TU:");
        Console.WriteLine("- Throttling errors (429)");
        Console.WriteLine("- High latency (>1 second)");
        Console.WriteLine("- TU utilization >80%");
        Console.WriteLine("");

        Console.WriteLine("Scaling formula:");
        Console.WriteLine("TU Needed = (Events/sec * Avg Size) / 1MB");
        Console.WriteLine("");

        Console.WriteLine("Example:");
        Console.WriteLine("- 50,000 events/sec");
        Console.WriteLine("- 2KB average size");
        Console.WriteLine("- (50,000 * 2048) / (1024 * 1024) = 97.7 MB/s");
        Console.WriteLine("- Need ~98 TU (1 TU = 1 MB/s ingress)");
        Console.WriteLine("");

        Console.WriteLine("Premium tier (ECU):");
        Console.WriteLine("- 1 ECU = 10 MB/s ingress, 20 MB/s egress");
        Console.WriteLine("- Better for consistent high throughput");
    }
}

// ============= HEALTH CHECK =============

public class EventHubHealthCheck
{
    public async Task<HealthStatus> CheckEventHubHealthAsync(
        string connectionString,
        string eventHubName,
        string consumerGroup)
    {
        var status = new HealthStatus();

        try
        {
            // Check producer
            using (var producer = new Azure.Messaging.EventHubs.Producer.EventHubProducerClient(
                connectionString,
                eventHubName))
            {
                var properties = await producer.GetEventHubPropertiesAsync();
                status.ProducerHealthy = true;
                status.PartitionCount = properties.PartitionIds.Length;
            }

            // Check consumer
            using (var consumer = new Azure.Messaging.EventHubs.Consumer.EventHubConsumerClient(
                consumerGroup,
                connectionString,
                eventHubName))
            {
                var properties = await consumer.GetEventHubPropertiesAsync();
                status.ConsumerHealthy = true;
            }

            status.OverallHealthy = status.ProducerHealthy && status.ConsumerHealthy;
        }
        catch (Exception ex)
        {
            status.OverallHealthy = false;
            status.LastError = ex.Message;
        }

        return status;
    }

    public class HealthStatus
    {
        public bool ProducerHealthy { get; set; }
        public bool ConsumerHealthy { get; set; }
        public bool OverallHealthy { get; set; }
        public int PartitionCount { get; set; }
        public string LastError { get; set; }

        public override string ToString()
        {
            return $"Overall: {(OverallHealthy ? "Healthy" : "Unhealthy")}, " +
                   $"Producer: {(ProducerHealthy ? "OK" : "Failed")}, " +
                   $"Consumer: {(ConsumerHealthy ? "OK" : "Failed")}, " +
                   $"Partitions: {PartitionCount}";
        }
    }
}

// ============= COMMON ISSUES & SOLUTIONS =============

public class TroubleshootingGuide
{
    public static void CommonIssuesAndSolutions()
    {
        Console.WriteLine("");
        Console.WriteLine("Event Hub Troubleshooting Guide:");
        Console.WriteLine("");

        Console.WriteLine("Issue 1: Throttling errors (429)");
        Console.WriteLine("  Cause: Exceeding TU/ECU limits");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Increase Throughput Units");
        Console.WriteLine("    - Reduce publishing rate");
        Console.WriteLine("    - Batch events efficiently");
        Console.WriteLine("");

        Console.WriteLine("Issue 2: High consumer lag");
        Console.WriteLine("  Cause: Consumer can't keep up");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Add more consumer instances");
        Console.WriteLine("    - Increase partition count");
        Console.WriteLine("    - Optimize event processing");
        Console.WriteLine("");

        Console.WriteLine("Issue 3: Events lost");
        Console.WriteLine("  Cause: Consumer not checkpointing");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Verify UpdateCheckpointAsync() called");
        Console.WriteLine("    - Check blob storage for checkpoints");
        Console.WriteLine("    - Monitor retention policy");
        Console.WriteLine("");

        Console.WriteLine("Issue 4: High latency");
        Console.WriteLine("  Cause: Network or processing delays");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Check network connectivity");
        Console.WriteLine("    - Reduce batch size");
        Console.WriteLine("    - Monitor CPU/memory on consumers");
        Console.WriteLine("");

        Console.WriteLine("Issue 5: Connection failures");
        Console.WriteLine("  Cause: Network, authentication, or firewall");
        Console.WriteLine("  Solution:");
        Console.WriteLine("    - Verify connection string");
        Console.WriteLine("    - Check firewall rules");
        Console.WriteLine("    - Verify managed identity permissions");
    }
}

// ============= MONITORING BEST PRACTICES =============

Console.WriteLine("Event Hub Monitoring Best Practices:");
Console.WriteLine("");
Console.WriteLine("✓ Monitor TU/ECU utilization continuously");
Console.WriteLine("✓ Set alerts for lag exceeding threshold");
Console.WriteLine("✓ Track error rates and error types");
Console.WriteLine("✓ Monitor consumer group lag");
Console.WriteLine("✓ Set up Application Insights custom metrics");
Console.WriteLine("✓ Use Azure Monitor dashboards");
Console.WriteLine("✓ Review diagnostic logs regularly");
Console.WriteLine("✓ Implement health check endpoints");
Console.WriteLine("✓ Track end-to-end latency");
Console.WriteLine("✓ Monitor partition distribution");`,
        },
      ],
    },
  ],
};
