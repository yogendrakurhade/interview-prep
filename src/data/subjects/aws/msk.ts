import type { Topic } from "../../../types";

export const awsMSKTopic: Topic = {
  id: "aws-msk",
  name: "AWS MSK (Managed Streaming for Kafka)",
  questions: [
    {
      id: "q1",
      question: "What is AWS MSK and how does DLQ (Dead Letter Queue) implementation work?",
      answer:
        "AWS MSK (Managed Streaming for Kafka) is a fully managed service that makes it easy to build and run applications that use Kafka to process streaming data.\n\nKey features:\n• Fully managed: No need to manage Kafka cluster infrastructure\n• High availability: Multi-AZ deployment\n• Scalability: Easy scaling of brokers\n• Security: Encryption, VPC security, IAM authentication\n• Monitoring: Integration with CloudWatch and EventBridge\n\nDead Letter Queue (DLQ) Implementation:\nDLQ is used to handle messages that fail processing after retries. It prevents message loss and helps with debugging.\n\nPattern:\n1. Message arrives in main topic\n2. Consumer processes message\n3. If processing fails and retries exhausted, send to DLQ\n4. DLQ consumer handles failed messages separately\n5. Separate monitoring for DLQ messages\n\nBenefits:\n• Prevents message loss\n• Decouples error handling\n• Enables debugging and recovery\n• Maintains system stability\n• Allows separate processing strategies",
      codeSnippets: [
        {
          language: "csharp",
          code: `// AWS MSK Consumer with DLQ Implementation in C#
using Confluent.Kafka;
using System.Text.Json;
using Microsoft.Extensions.Logging;

public class KafkaConsumerWithDLQ
{
    private readonly IConsumer<string, string> _consumer;
    private readonly IProducer<string, string> _dlqProducer;
    private readonly ILogger<KafkaConsumerWithDLQ> _logger;
    private readonly string _mainTopic;
    private readonly string _dlqTopic;
    private const int MaxRetries = 3;

    public KafkaConsumerWithDLQ(
        string bootstrapServers,
        string mainTopic,
        string dlqTopic,
        ILogger<KafkaConsumerWithDLQ> logger)
    {
        _mainTopic = mainTopic;
        _dlqTopic = dlqTopic;
        _logger = logger;

        var consumerConfig = new ConsumerConfig
        {
            BootstrapServers = bootstrapServers,
            GroupId = "order-processor-group",
            AutoOffsetReset = AutoOffsetReset.Earliest,
            EnableAutoCommit = false,
            SecurityProtocol = SecurityProtocol.SaslSsl,
            SaslMechanism = SaslMechanism.ScramSha512
        };

        var producerConfig = new ProducerConfig
        {
            BootstrapServers = bootstrapServers,
            SecurityProtocol = SecurityProtocol.SaslSsl,
            SaslMechanism = SaslMechanism.ScramSha512
        };

        _consumer = new ConsumerBuilder<string, string>(consumerConfig).Build();
        _dlqProducer = new ProducerBuilder<string, string>(producerConfig).Build();
    }

    public async Task ConsumeWithDLQAsync(CancellationToken cancellationToken)
    {
        _consumer.Subscribe(_mainTopic);

        while (!cancellationToken.IsCancellationRequested)
        {
            try
            {
                var consumeResult = _consumer.Consume(cancellationToken);
                var processed = await ProcessWithRetryAsync(consumeResult);

                if (!processed)
                {
                    await SendToDLQAsync(consumeResult);
                }

                _consumer.Commit(consumeResult);
            }
            catch (OperationCanceledException)
            {
                break;
            }
        }
    }

    private async Task<bool> ProcessWithRetryAsync(
        ConsumeResult<string, string> message)
    {
        for (int retry = 0; retry < MaxRetries; retry++)
        {
            try
            {
                await ProcessMessageAsync(message.Message.Value);
                _logger.LogInformation("Processed: {Key}", message.Message.Key);
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogWarning("Retry {R}/{Max}: {Err}", 
                    retry + 1, MaxRetries, ex.Message);
                await Task.Delay(TimeSpan.FromSeconds(Math.Pow(2, retry)));
            }
        }
        return false;
    }

    private async Task ProcessMessageAsync(string messageValue)
    {
        var order = JsonSerializer.Deserialize<OrderMessage>(messageValue);
        if (order == null || string.IsNullOrEmpty(order.OrderId))
            throw new InvalidOperationException("Invalid order");
        
        // Process order logic here
        await Task.CompletedTask;
    }

    private async Task SendToDLQAsync(ConsumeResult<string, string> message)
    {
        var dlqMessage = new DLQMessage
        {
            OriginalMessage = message.Message.Value,
            OriginalTopic = _mainTopic,
            FailureReason = "Max retries exceeded",
            Timestamp = DateTime.UtcNow
        };

        await _dlqProducer.ProduceAsync(_dlqTopic, new Message<string, string>
        {
            Key = message.Message.Key,
            Value = JsonSerializer.Serialize(dlqMessage)
        });

        _logger.LogError("Sent to DLQ: {Key}", message.Message.Key);
    }
}

public record OrderMessage(string OrderId, decimal Amount, string CustomerId);
public record DLQMessage
{
    public string OriginalMessage { get; init; } = "";
    public string OriginalTopic { get; init; } = "";
    public string FailureReason { get; init; } = "";
    public DateTime Timestamp { get; init; }
}`,
        },
        {
          language: "csharp",
          code: `// MSK Consumer Hosted Service with Dependency Injection
using Microsoft.Extensions.Hosting;

public class MSKConsumerService : BackgroundService
{
    private readonly KafkaConsumerWithDLQ _consumer;
    private readonly ILogger<MSKConsumerService> _logger;

    public MSKConsumerService(
        KafkaConsumerWithDLQ consumer,
        ILogger<MSKConsumerService> logger)
    {
        _consumer = consumer;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("MSK Consumer Service starting...");
        
        try
        {
            await _consumer.ConsumeWithDLQAsync(stoppingToken);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "MSK Consumer Service error");
            throw;
        }
    }
}

// Program.cs - Service Registration
var builder = Host.CreateApplicationBuilder(args);

builder.Services.AddSingleton<KafkaConsumerWithDLQ>(sp =>
{
    var logger = sp.GetRequiredService<ILogger<KafkaConsumerWithDLQ>>();
    return new KafkaConsumerWithDLQ(
        bootstrapServers: builder.Configuration["MSK:BootstrapServers"]!,
        mainTopic: "orders-topic",
        dlqTopic: "orders-dlq",
        logger: logger
    );
});

builder.Services.AddHostedService<MSKConsumerService>();

var host = builder.Build();
host.Run();`,
        },
      ],
    },
    {
      id: "q2",
      question: "How does Debezium integrate with AWS MSK for Change Data Capture (CDC)?",
      answer:
        "Debezium is an open-source distributed platform for change data capture that integrates seamlessly with AWS MSK to stream database changes in real-time.\n\nDebezium capabilities:\n• Captures INSERT, UPDATE, DELETE operations from databases\n• Supports multiple database engines (PostgreSQL, MySQL, SQL Server)\n• Delivers change events in real-time to Kafka topics\n• Exactly-once delivery semantics\n• Supports snapshots and incremental updates\n\nDebezium with MSK architecture:\n1. Debezium connector watches database transaction log\n2. Captures change events (inserts, updates, deletes)\n3. Publishes events to MSK topics\n4. Consumers subscribe to change topics\n5. Applications react to data changes\n\nUse cases:\n• Real-time analytics\n• Cache invalidation\n• Event sourcing\n• Data synchronization\n• Audit logging\n• Microservices integration",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Debezium CDC Consumer in C# - Processing Change Events
using Confluent.Kafka;
using System.Text.Json;
using Microsoft.Extensions.Logging;

public class DebeziumCDCConsumer
{
    private readonly IConsumer<string, string> _consumer;
    private readonly ILogger<DebeziumCDCConsumer> _logger;
    private readonly ICacheService _cacheService;
    private readonly IEventPublisher _eventPublisher;

    public DebeziumCDCConsumer(
        string bootstrapServers,
        ILogger<DebeziumCDCConsumer> logger,
        ICacheService cacheService,
        IEventPublisher eventPublisher)
    {
        _logger = logger;
        _cacheService = cacheService;
        _eventPublisher = eventPublisher;

        var config = new ConsumerConfig
        {
            BootstrapServers = bootstrapServers,
            GroupId = "cdc-processor-group",
            AutoOffsetReset = AutoOffsetReset.Earliest,
            EnableAutoCommit = false
        };

        _consumer = new ConsumerBuilder<string, string>(config).Build();
    }

    public async Task ProcessCDCEventsAsync(CancellationToken ct)
    {
        _consumer.Subscribe("cdc.public.orders");

        while (!ct.IsCancellationRequested)
        {
            var result = _consumer.Consume(ct);
            var changeEvent = JsonSerializer
                .Deserialize<DebeziumChangeEvent>(result.Message.Value);

            if (changeEvent != null)
                await ProcessChangeEventAsync(changeEvent);

            _consumer.Commit(result);
        }
    }

    private async Task ProcessChangeEventAsync(DebeziumChangeEvent evt)
    {
        var operation = evt.Payload?.Operation;
        var table = evt.Payload?.Source?.Table;

        _logger.LogInformation("Processing {Op} on {Table}", operation, table);

        switch (operation)
        {
            case "c": // CREATE (INSERT)
                await HandleInsertAsync(evt);
                break;
            case "u": // UPDATE
                await HandleUpdateAsync(evt);
                break;
            case "d": // DELETE
                await HandleDeleteAsync(evt);
                break;
            case "r": // READ (Snapshot)
                await HandleSnapshotAsync(evt);
                break;
        }
    }

    private async Task HandleInsertAsync(DebeziumChangeEvent evt)
    {
        var after = evt.Payload?.After;
        if (after == null) return;

        await _cacheService.SetAsync(
            $"order:{after.Id}", 
            JsonSerializer.Serialize(after));

        await _eventPublisher.PublishAsync(new OrderCreatedEvent
        {
            OrderId = after.Id,
            CustomerId = after.CustomerId,
            Amount = after.TotalAmount,
            CreatedAt = DateTime.UtcNow
        });

        _logger.LogInformation("INSERT: Order {Id}", after.Id);
    }

    private async Task HandleUpdateAsync(DebeziumChangeEvent evt)
    {
        var before = evt.Payload?.Before;
        var after = evt.Payload?.After;
        if (after == null) return;

        await _cacheService.SetAsync(
            $"order:{after.Id}", 
            JsonSerializer.Serialize(after));

        if (before?.Status != after.Status)
        {
            await _eventPublisher.PublishAsync(new OrderStatusChangedEvent
            {
                OrderId = after.Id,
                OldStatus = before?.Status ?? "",
                NewStatus = after.Status,
                ChangedAt = DateTime.UtcNow
            });
        }
    }

    private async Task HandleDeleteAsync(DebeziumChangeEvent evt)
    {
        var before = evt.Payload?.Before;
        if (before == null) return;

        await _cacheService.RemoveAsync($"order:{before.Id}");
        await _eventPublisher.PublishAsync(new OrderDeletedEvent
        {
            OrderId = before.Id,
            DeletedAt = DateTime.UtcNow
        });
    }

    private async Task HandleSnapshotAsync(DebeziumChangeEvent evt)
    {
        var after = evt.Payload?.After;
        if (after == null) return;

        await _cacheService.SetAsync(
            $"order:{after.Id}", 
            JsonSerializer.Serialize(after));
    }
}`,
        },
        {
          language: "csharp",
          code: `// Debezium Change Event Models
using System.Text.Json.Serialization;

public class DebeziumChangeEvent
{
    public DebeziumPayload? Payload { get; set; }
}

public class DebeziumPayload
{
    public OrderRecord? Before { get; set; }
    public OrderRecord? After { get; set; }
    public DebeziumSource? Source { get; set; }
    
    [JsonPropertyName("op")]
    public string? Operation { get; set; }
    
    [JsonPropertyName("ts_ms")]
    public long TimestampMs { get; set; }
}

public class DebeziumSource
{
    public string? Connector { get; set; }
    public string? Db { get; set; }
    public string? Schema { get; set; }
    public string? Table { get; set; }
    
    [JsonPropertyName("ts_ms")]
    public long TimestampMs { get; set; }
}

public class OrderRecord
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public decimal TotalAmount { get; set; }
    public string Status { get; set; } = "";
    public DateTime CreatedAt { get; set; }
}

// Domain Events
public record OrderCreatedEvent
{
    public int OrderId { get; init; }
    public int CustomerId { get; init; }
    public decimal Amount { get; init; }
    public DateTime CreatedAt { get; init; }
}

public record OrderStatusChangedEvent
{
    public int OrderId { get; init; }
    public string OldStatus { get; init; } = "";
    public string NewStatus { get; init; } = "";
    public DateTime ChangedAt { get; init; }
}

public record OrderDeletedEvent
{
    public int OrderId { get; init; }
    public DateTime DeletedAt { get; init; }
}

// Interfaces
public interface ICacheService
{
    Task SetAsync(string key, string value);
    Task RemoveAsync(string key);
}

public interface IEventPublisher
{
    Task PublishAsync<T>(T @event) where T : class;
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are best practices for production MSK deployment and monitoring?",
      answer:
        "Production MSK deployments require careful planning for availability, security, performance, and monitoring.\n\nDeployment best practices:\n• Multi-AZ deployment: Distribute brokers across 3+ availability zones\n• Broker sizing: Calculate based on throughput, retention, and consumer count\n• Storage: Monitor disk usage and expand proactively\n• Network: Use VPC security groups with minimal required permissions\n• Encryption: Enable encryption at rest and in transit\n• Authentication: Use AWS IAM or SASL/SCRAM\n\nMonitoring metrics:\n• Broker health: CPU, memory, disk I/O\n• Topic metrics: Messages in/out rate, bytes in/out\n• Consumer metrics: Lag, processing rate, error rate\n• Latency: End-to-end message latency\n• Availability: Broker uptime, replication status\n\nDisaster recovery:\n• Multi-region replication: Use MirrorMaker for cross-region backup\n• Snapshot: Regular backups of critical topics\n• Topic recovery: Ability to restore from backup",
      codeSnippets: [
        {
          language: "csharp",
          code: `// MSK Monitoring Service with CloudWatch Integration
using Amazon.CloudWatch;
using Amazon.CloudWatch.Model;
using Amazon.Kafka;
using Amazon.Kafka.Model;

public class MSKMonitoringService
{
    private readonly IAmazonKafka _kafkaClient;
    private readonly IAmazonCloudWatch _cloudWatchClient;
    private readonly ILogger<MSKMonitoringService> _logger;

    public MSKMonitoringService(
        IAmazonKafka kafkaClient,
        IAmazonCloudWatch cloudWatchClient,
        ILogger<MSKMonitoringService> logger)
    {
        _kafkaClient = kafkaClient;
        _cloudWatchClient = cloudWatchClient;
        _logger = logger;
    }

    public async Task<ClusterHealth> CheckClusterHealthAsync(string clusterArn)
    {
        var response = await _kafkaClient.DescribeClusterAsync(
            new DescribeClusterRequest { ClusterArn = clusterArn });

        var cluster = response.ClusterInfo;

        return new ClusterHealth
        {
            ClusterName = cluster.ClusterName,
            State = cluster.State.ToString(),
            BrokerCount = cluster.NumberOfBrokerNodes,
            BrokerType = cluster.BrokerNodeGroupInfo.InstanceType,
            StorageGB = cluster.BrokerNodeGroupInfo.StorageInfo
                .EbsStorageInfo.VolumeSize,
            Timestamp = DateTime.UtcNow
        };
    }

    public async Task<BrokerMetrics> GetBrokerMetricsAsync(
        string clusterName, 
        int brokerId)
    {
        var endTime = DateTime.UtcNow;
        var startTime = endTime.AddMinutes(-5);

        var cpuMetric = await GetMetricAsync(
            "AWS/Kafka", "CpuUser", 
            clusterName, brokerId, startTime, endTime);

        var diskMetric = await GetMetricAsync(
            "AWS/Kafka", "KafkaDataLogsDiskUsed", 
            clusterName, brokerId, startTime, endTime);

        return new BrokerMetrics
        {
            BrokerId = brokerId,
            CpuUtilization = cpuMetric,
            DiskUsedBytes = diskMetric,
            Timestamp = DateTime.UtcNow
        };
    }

    private async Task<double> GetMetricAsync(
        string ns, string metricName,
        string clusterName, int brokerId,
        DateTime startTime, DateTime endTime)
    {
        var request = new GetMetricStatisticsRequest
        {
            Namespace = ns,
            MetricName = metricName,
            Dimensions = new List<Dimension>
            {
                new() { Name = "Cluster Name", Value = clusterName },
                new() { Name = "Broker ID", Value = brokerId.ToString() }
            },
            StartTimeUtc = startTime,
            EndTimeUtc = endTime,
            Period = 60,
            Statistics = new List<string> { "Average" }
        };

        var response = await _cloudWatchClient
            .GetMetricStatisticsAsync(request);
        
        return response.Datapoints.Count > 0 
            ? response.Datapoints.Average(d => d.Average) 
            : 0;
    }

    public async Task<ConsumerLag> GetConsumerLagAsync(
        string clusterName,
        string consumerGroup,
        string topic)
    {
        var request = new GetMetricStatisticsRequest
        {
            Namespace = "AWS/Kafka",
            MetricName = "SumOffsetLag",
            Dimensions = new List<Dimension>
            {
                new() { Name = "Cluster Name", Value = clusterName },
                new() { Name = "Consumer Group", Value = consumerGroup },
                new() { Name = "Topic", Value = topic }
            },
            StartTimeUtc = DateTime.UtcNow.AddMinutes(-5),
            EndTimeUtc = DateTime.UtcNow,
            Period = 60,
            Statistics = new List<string> { "Maximum" }
        };

        var response = await _cloudWatchClient
            .GetMetricStatisticsAsync(request);

        return new ConsumerLag
        {
            ConsumerGroup = consumerGroup,
            Topic = topic,
            TotalLag = response.Datapoints.Count > 0 
                ? (long)response.Datapoints.Max(d => d.Maximum) 
                : 0
        };
    }

    public async Task CreateAlarmAsync(
        string clusterName,
        string metricName,
        double threshold,
        string snsTopicArn)
    {
        var request = new PutMetricAlarmRequest
        {
            AlarmName = $"{clusterName}-{metricName}-alarm",
            ComparisonOperator = ComparisonOperator.GreaterThanThreshold,
            EvaluationPeriods = 2,
            MetricName = metricName,
            Namespace = "AWS/Kafka",
            Period = 300,
            Statistic = Statistic.Average,
            Threshold = threshold,
            ActionsEnabled = true,
            AlarmActions = new List<string> { snsTopicArn },
            Dimensions = new List<Dimension>
            {
                new() { Name = "Cluster Name", Value = clusterName }
            }
        };

        await _cloudWatchClient.PutMetricAlarmAsync(request);
        _logger.LogInformation("Created alarm: {Name}", request.AlarmName);
    }
}

public record ClusterHealth
{
    public string ClusterName { get; init; } = "";
    public string State { get; init; } = "";
    public int BrokerCount { get; init; }
    public string BrokerType { get; init; } = "";
    public int StorageGB { get; init; }
    public DateTime Timestamp { get; init; }
}

public record BrokerMetrics
{
    public int BrokerId { get; init; }
    public double CpuUtilization { get; init; }
    public double DiskUsedBytes { get; init; }
    public DateTime Timestamp { get; init; }
}

public record ConsumerLag
{
    public string ConsumerGroup { get; init; } = "";
    public string Topic { get; init; } = "";
    public long TotalLag { get; init; }
}`,
        },
      ],
    },
  ],
};
