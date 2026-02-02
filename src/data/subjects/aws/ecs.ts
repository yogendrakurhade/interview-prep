import type { Topic } from "../../../types";

export const awsECSTopic: Topic = {
  id: "aws-ecs",
  name: "AWS ECS (Elastic Container Service)",
  questions: [
    {
      id: "q1",
      question: "What is AWS ECS and how does it differ from Kubernetes (EKS)?",
      answer:
        "AWS ECS (Elastic Container Service) is a managed container orchestration service that allows you to run and scale Docker containers on AWS.\n\nECS Features:\n• Fully managed: AWS handles container orchestration\n• No master node management: Unlike Kubernetes\n• Deep AWS integration: IAM, VPC, CloudFormation, CloudWatch\n• Flexible launch types: EC2 and Fargate\n• Simple API: Easier learning curve than Kubernetes\n• Cost-effective: Pay only for what you use\n\nECS vs EKS (Kubernetes):\nECS:\n• Simpler learning curve\n• Tight AWS integration\n• Less operational overhead\n• Limited portability\n• Better for AWS-only workloads\n\nEKS:\n• Full Kubernetes ecosystem\n• Vendor-agnostic (runs anywhere)\n• Larger community\n• More complex to manage\n• Better for multi-cloud\n\nECS Architecture:\n• Task Definition: Blueprint for Docker containers (like pod definition)\n• Task: Running instance of task definition\n• Service: Maintains running tasks (like deployment)\n• Container Instance: EC2 or Fargate instance running tasks\n• Cluster: Logical grouping of resources\n\nLaunch Types:\n1. EC2: Traditional servers in VPC\n2. Fargate: Serverless containers (no infrastructure management)\n3. External: Run on-premises or third-party infrastructure",
      codeSnippets: [
        {
          language: "csharp",
          code: `// AWS ECS Management Service in C#
using Amazon.ECS;
using Amazon.ECS.Model;
using Microsoft.Extensions.Logging;

public class ECSManager
{
    private readonly IAmazonECS _ecsClient;
    private readonly ILogger<ECSManager> _logger;
    private readonly string _clusterName;

    public ECSManager(
        IAmazonECS ecsClient, 
        string clusterName,
        ILogger<ECSManager> logger)
    {
        _ecsClient = ecsClient;
        _clusterName = clusterName;
        _logger = logger;
    }

    public async Task<string> RegisterTaskDefinitionAsync(
        TaskDefinitionConfig config)
    {
        var request = new RegisterTaskDefinitionRequest
        {
            Family = config.Family,
            NetworkMode = NetworkMode.Awsvpc,
            RequiresCompatibilities = new List<string> { "FARGATE" },
            Cpu = config.Cpu,
            Memory = config.Memory,
            ExecutionRoleArn = config.ExecutionRoleArn,
            TaskRoleArn = config.TaskRoleArn,
            ContainerDefinitions = new List<ContainerDefinition>
            {
                new()
                {
                    Name = config.ContainerName,
                    Image = config.Image,
                    Essential = true,
                    PortMappings = new List<PortMapping>
                    {
                        new() { ContainerPort = config.Port, Protocol = "tcp" }
                    },
                    LogConfiguration = new LogConfiguration
                    {
                        LogDriver = LogDriver.Awslogs,
                        Options = new Dictionary<string, string>
                        {
                            ["awslogs-group"] = $"/ecs/{config.Family}",
                            ["awslogs-region"] = "us-east-1",
                            ["awslogs-stream-prefix"] = "ecs"
                        }
                    },
                    HealthCheck = new HealthCheck
                    {
                        Command = new List<string> 
                        { 
                            "CMD-SHELL", 
                            $"curl -f http://localhost:{config.Port}/health || exit 1" 
                        },
                        Interval = 30,
                        Timeout = 5,
                        Retries = 3,
                        StartPeriod = 60
                    }
                }
            }
        };

        var response = await _ecsClient.RegisterTaskDefinitionAsync(request);
        var taskDefArn = response.TaskDefinition.TaskDefinitionArn;
        
        _logger.LogInformation("Registered task definition: {Arn}", taskDefArn);
        return taskDefArn;
    }

    public async Task<string> CreateServiceAsync(ServiceConfig config)
    {
        var request = new CreateServiceRequest
        {
            Cluster = _clusterName,
            ServiceName = config.ServiceName,
            TaskDefinition = config.TaskDefinition,
            DesiredCount = config.DesiredCount,
            LaunchType = LaunchType.FARGATE,
            NetworkConfiguration = new NetworkConfiguration
            {
                AwsvpcConfiguration = new AwsVpcConfiguration
                {
                    Subnets = config.Subnets,
                    SecurityGroups = config.SecurityGroups,
                    AssignPublicIp = AssignPublicIp.DISABLED
                }
            },
            DeploymentConfiguration = new DeploymentConfiguration
            {
                MaximumPercent = 200,
                MinimumHealthyPercent = 100,
                DeploymentCircuitBreaker = new DeploymentCircuitBreaker
                {
                    Enable = true,
                    Rollback = true
                }
            }
        };

        if (config.LoadBalancerTargetGroupArn != null)
        {
            request.LoadBalancers = new List<LoadBalancer>
            {
                new()
                {
                    TargetGroupArn = config.LoadBalancerTargetGroupArn,
                    ContainerName = config.ContainerName,
                    ContainerPort = config.Port
                }
            };
        }

        var response = await _ecsClient.CreateServiceAsync(request);
        _logger.LogInformation("Created service: {Arn}", response.Service.ServiceArn);
        return response.Service.ServiceArn;
    }

    public async Task<ServiceStatus> GetServiceStatusAsync(string serviceName)
    {
        var response = await _ecsClient.DescribeServicesAsync(
            new DescribeServicesRequest
            {
                Cluster = _clusterName,
                Services = new List<string> { serviceName }
            });

        var service = response.Services.First();

        return new ServiceStatus
        {
            ServiceName = service.ServiceName,
            Status = service.Status,
            DesiredCount = service.DesiredCount,
            RunningCount = service.RunningCount,
            PendingCount = service.PendingCount,
            Deployments = service.Deployments.Select(d => new DeploymentInfo
            {
                Id = d.Id,
                Status = d.Status,
                DesiredCount = d.DesiredCount,
                RunningCount = d.RunningCount,
                PendingCount = d.PendingCount,
                CreatedAt = d.CreatedAt
            }).ToList()
        };
    }

    public async Task ScaleServiceAsync(string serviceName, int desiredCount)
    {
        await _ecsClient.UpdateServiceAsync(new UpdateServiceRequest
        {
            Cluster = _clusterName,
            Service = serviceName,
            DesiredCount = desiredCount
        });

        _logger.LogInformation("Scaled {Service} to {Count} tasks", 
            serviceName, desiredCount);
    }
}

// Configuration Records
public record TaskDefinitionConfig
{
    public string Family { get; init; } = "";
    public string Cpu { get; init; } = "256";
    public string Memory { get; init; } = "512";
    public string ContainerName { get; init; } = "";
    public string Image { get; init; } = "";
    public int Port { get; init; }
    public string ExecutionRoleArn { get; init; } = "";
    public string TaskRoleArn { get; init; } = "";
}

public record ServiceConfig
{
    public string ServiceName { get; init; } = "";
    public string TaskDefinition { get; init; } = "";
    public int DesiredCount { get; init; }
    public string ContainerName { get; init; } = "";
    public int Port { get; init; }
    public List<string> Subnets { get; init; } = new();
    public List<string> SecurityGroups { get; init; } = new();
    public string? LoadBalancerTargetGroupArn { get; init; }
}

public record ServiceStatus
{
    public string ServiceName { get; init; } = "";
    public string Status { get; init; } = "";
    public int DesiredCount { get; init; }
    public int RunningCount { get; init; }
    public int PendingCount { get; init; }
    public List<DeploymentInfo> Deployments { get; init; } = new();
}

public record DeploymentInfo
{
    public string Id { get; init; } = "";
    public string Status { get; init; } = "";
    public int DesiredCount { get; init; }
    public int RunningCount { get; init; }
    public int PendingCount { get; init; }
    public DateTime CreatedAt { get; init; }
}`,
        },
        {
          language: "json",
          code: `// ECS Task Definition (JSON Configuration)
{
  "family": "api-service",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "api-container",
      "image": "123456789012.dkr.ecr.us-east-1.amazonaws.com/api:latest",
      "portMappings": [
        {
          "containerPort": 8080,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "environment": [
        { "name": "ASPNETCORE_ENVIRONMENT", "value": "Production" }
      ],
      "secrets": [
        {
          "name": "ConnectionStrings__DefaultConnection",
          "valueFrom": "arn:aws:secretsmanager:us-east-1:123456789012:secret:db-connection"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/api-service",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      },
      "healthCheck": {
        "command": ["CMD-SHELL", "curl -f http://localhost:8080/health || exit 1"],
        "interval": 30,
        "timeout": 5,
        "retries": 3,
        "startPeriod": 60
      }
    }
  ],
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "taskRoleArn": "arn:aws:iam::123456789012:role/ecsTaskRole"
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "How does ECS handle deployment, rolling updates, and rollback?",
      answer:
        "ECS provides sophisticated deployment strategies to ensure zero-downtime updates and quick rollback capabilities.\n\nDeployment types:\n1. Rolling deployment (default): Gradually replace old tasks with new ones\n2. Blue/Green: Run two identical environments, switch traffic\n3. Canary: Deploy to small percentage first, then full rollout\n4. All-at-once: Replace all tasks immediately (high risk)\n\nRolling Deployment Process:\n1. Start new tasks with new task definition\n2. New tasks pass health checks\n3. Drain connections from old tasks (deregistration delay)\n4. Remove old tasks\n5. Repeat until all tasks updated\n\nKey Configuration:\n• minimumHealthyPercent: Minimum % of tasks that must be healthy\n• maximumPercent: Maximum % of tasks allowed during deployment\n• deploymentCircuitBreaker: Auto-rollback on failure\n• healthCheck: Determine task health status\n• deregistrationDelay: Time to drain connections\n\nDeployment Circuit Breaker:\n• Monitors deployment progress\n• Automatically rolls back if deployment fails\n• Based on CloudWatch alarms or health checks\n• Prevents cascading failures",
      codeSnippets: [
        {
          language: "csharp",
          code: `// ECS Deployment Manager with Circuit Breaker and Rollback
using Amazon.ECS;
using Amazon.ECS.Model;
using Microsoft.Extensions.Logging;

public class ECSDeploymentManager
{
    private readonly IAmazonECS _ecsClient;
    private readonly ILogger<ECSDeploymentManager> _logger;
    private readonly string _clusterName;

    public ECSDeploymentManager(
        IAmazonECS ecsClient,
        string clusterName,
        ILogger<ECSDeploymentManager> logger)
    {
        _ecsClient = ecsClient;
        _clusterName = clusterName;
        _logger = logger;
    }

    public async Task<DeploymentResult> DeployWithCircuitBreakerAsync(
        string serviceName,
        string newTaskDefinition,
        CancellationToken ct = default)
    {
        var currentService = await GetServiceAsync(serviceName);
        var previousTaskDef = currentService.TaskDefinition;

        _logger.LogInformation(
            "Starting deployment: {Old} -> {New}",
            previousTaskDef, newTaskDefinition);

        // Update service with circuit breaker
        await _ecsClient.UpdateServiceAsync(new UpdateServiceRequest
        {
            Cluster = _clusterName,
            Service = serviceName,
            TaskDefinition = newTaskDefinition,
            ForceNewDeployment = true,
            DeploymentConfiguration = new DeploymentConfiguration
            {
                MaximumPercent = 200,
                MinimumHealthyPercent = 100,
                DeploymentCircuitBreaker = new DeploymentCircuitBreaker
                {
                    Enable = true,
                    Rollback = true
                }
            }
        }, ct);

        // Monitor deployment progress
        var timeout = TimeSpan.FromMinutes(10);
        var startTime = DateTime.UtcNow;

        while (DateTime.UtcNow - startTime < timeout)
        {
            var service = await GetServiceAsync(serviceName);
            var deployments = service.Deployments;

            // Check if deployment completed (single PRIMARY deployment)
            if (deployments.Count == 1 && 
                deployments[0].Status == "PRIMARY" &&
                deployments[0].RolloutState == "COMPLETED")
            {
                _logger.LogInformation("Deployment completed successfully!");
                return new DeploymentResult
                {
                    Status = DeploymentStatus.Success,
                    TaskDefinition = newTaskDefinition,
                    Timestamp = DateTime.UtcNow
                };
            }

            // Check for circuit breaker rollback
            if (deployments.Any(d => d.Status == "STOPPED"))
            {
                _logger.LogWarning("Circuit breaker triggered rollback!");
                return new DeploymentResult
                {
                    Status = DeploymentStatus.Rollback,
                    Reason = "Circuit breaker triggered",
                    TaskDefinition = previousTaskDef,
                    Timestamp = DateTime.UtcNow
                };
            }

            var primary = deployments.First(d => d.Status == "PRIMARY");
            _logger.LogInformation(
                "Progress: Running={Running}/{Desired}, Pending={Pending}",
                primary.RunningCount, primary.DesiredCount, primary.PendingCount);

            await Task.Delay(TimeSpan.FromSeconds(10), ct);
        }

        return new DeploymentResult
        {
            Status = DeploymentStatus.Timeout,
            TaskDefinition = previousTaskDef,
            Timestamp = DateTime.UtcNow
        };
    }

    public async Task<DeploymentResult> ManualRollbackAsync(string serviceName)
    {
        var service = await GetServiceAsync(serviceName);
        var currentTaskDef = service.TaskDefinition;

        // Get previous task definition revision
        var taskDefParts = currentTaskDef.Split(':');
        var previousRevision = int.Parse(taskDefParts.Last()) - 1;
        var previousTaskDef = $"{string.Join(":", taskDefParts.Take(taskDefParts.Length - 1))}:{previousRevision}";

        _logger.LogInformation("Rolling back to: {TaskDef}", previousTaskDef);

        await _ecsClient.UpdateServiceAsync(new UpdateServiceRequest
        {
            Cluster = _clusterName,
            Service = serviceName,
            TaskDefinition = previousTaskDef,
            ForceNewDeployment = true
        });

        return new DeploymentResult
        {
            Status = DeploymentStatus.RollbackInitiated,
            TaskDefinition = previousTaskDef,
            Timestamp = DateTime.UtcNow
        };
    }

    public async Task<List<TaskInfo>> ListTasksAsync(string serviceName)
    {
        var listResponse = await _ecsClient.ListTasksAsync(new ListTasksRequest
        {
            Cluster = _clusterName,
            ServiceName = serviceName
        });

        if (!listResponse.TaskArns.Any())
            return new List<TaskInfo>();

        var describeResponse = await _ecsClient.DescribeTasksAsync(
            new DescribeTasksRequest
            {
                Cluster = _clusterName,
                Tasks = listResponse.TaskArns
            });

        return describeResponse.Tasks.Select(t => new TaskInfo
        {
            TaskArn = t.TaskArn,
            Status = t.LastStatus,
            DesiredStatus = t.DesiredStatus,
            Cpu = t.Cpu,
            Memory = t.Memory,
            CreatedAt = t.CreatedAt
        }).ToList();
    }

    private async Task<Service> GetServiceAsync(string serviceName)
    {
        var response = await _ecsClient.DescribeServicesAsync(
            new DescribeServicesRequest
            {
                Cluster = _clusterName,
                Services = new List<string> { serviceName }
            });

        return response.Services.First();
    }
}

public record DeploymentResult
{
    public DeploymentStatus Status { get; init; }
    public string? Reason { get; init; }
    public string TaskDefinition { get; init; } = "";
    public DateTime Timestamp { get; init; }
}

public record TaskInfo
{
    public string TaskArn { get; init; } = "";
    public string Status { get; init; } = "";
    public string DesiredStatus { get; init; } = "";
    public string Cpu { get; init; } = "";
    public string Memory { get; init; } = "";
    public DateTime CreatedAt { get; init; }
}

public enum DeploymentStatus
{
    Success,
    Rollback,
    RollbackInitiated,
    Timeout,
    Failed
}`,
        },
        {
          language: "csharp",
          code: `// ECS Auto-Scaling Configuration
using Amazon.ApplicationAutoScaling;
using Amazon.ApplicationAutoScaling.Model;
using Microsoft.Extensions.Logging;

public class ECSAutoScalingManager
{
    private readonly IAmazonApplicationAutoScaling _autoScaling;
    private readonly ILogger<ECSAutoScalingManager> _logger;
    private readonly string _clusterName;

    public ECSAutoScalingManager(
        IAmazonApplicationAutoScaling autoScaling,
        string clusterName,
        ILogger<ECSAutoScalingManager> logger)
    {
        _autoScaling = autoScaling;
        _clusterName = clusterName;
        _logger = logger;
    }

    public async Task SetupAutoScalingAsync(
        string serviceName,
        int minTasks,
        int maxTasks,
        double targetCpu)
    {
        var resourceId = $"service/{_clusterName}/{serviceName}";

        // Register scalable target
        await _autoScaling.RegisterScalableTargetAsync(
            new RegisterScalableTargetRequest
            {
                ServiceNamespace = ServiceNamespace.Ecs,
                ResourceId = resourceId,
                ScalableDimension = ScalableDimension.EcsServiceDesiredCount,
                MinCapacity = minTasks,
                MaxCapacity = maxTasks
            });

        // Create scaling policy for CPU
        await _autoScaling.PutScalingPolicyAsync(
            new PutScalingPolicyRequest
            {
                PolicyName = $"{serviceName}-cpu-scaling",
                ServiceNamespace = ServiceNamespace.Ecs,
                ResourceId = resourceId,
                ScalableDimension = ScalableDimension.EcsServiceDesiredCount,
                PolicyType = PolicyType.TargetTrackingScaling,
                TargetTrackingScalingPolicyConfiguration = 
                    new TargetTrackingScalingPolicyConfiguration
                {
                    TargetValue = targetCpu,
                    PredefinedMetricSpecification = 
                        new PredefinedMetricSpecification
                    {
                        PredefinedMetricType = 
                            MetricType.ECSServiceAverageCPUUtilization
                    },
                    ScaleOutCooldown = 300,
                    ScaleInCooldown = 300
                }
            });

        _logger.LogInformation(
            "Setup auto-scaling for {Service}: {Min}-{Max} tasks, target CPU {Cpu}%",
            serviceName, minTasks, maxTasks, targetCpu);
    }

    public async Task<ScalingStatus> GetScalingStatusAsync(string serviceName)
    {
        var resourceId = $"service/{_clusterName}/{serviceName}";

        var targets = await _autoScaling.DescribeScalableTargetsAsync(
            new DescribeScalableTargetsRequest
            {
                ServiceNamespace = ServiceNamespace.Ecs,
                ResourceIds = new List<string> { resourceId }
            });

        var policies = await _autoScaling.DescribeScalingPoliciesAsync(
            new DescribeScalingPoliciesRequest
            {
                ServiceNamespace = ServiceNamespace.Ecs,
                ResourceId = resourceId
            });

        var target = targets.ScalableTargets.FirstOrDefault();

        return new ScalingStatus
        {
            ServiceName = serviceName,
            MinCapacity = target?.MinCapacity ?? 0,
            MaxCapacity = target?.MaxCapacity ?? 0,
            PolicyCount = policies.ScalingPolicies.Count
        };
    }
}

public record ScalingStatus
{
    public string ServiceName { get; init; } = "";
    public int MinCapacity { get; init; }
    public int MaxCapacity { get; init; }
    public int PolicyCount { get; init; }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are best practices for production ECS deployments?",
      answer:
        "Production ECS deployments require careful planning for security, reliability, performance, and cost optimization.\n\nTask Definition Best Practices:\n• Use official base images\n• Pin image versions (no 'latest' tag)\n• Include health checks\n• Set resource limits (CPU, memory)\n• Use secrets for sensitive data\n\nSecurity:\n• Use IAM task roles (not EC2 role)\n• Enable encryption at rest and in transit\n• Use VPC endpoints for AWS services\n• Implement network security groups\n• Enable container image scanning\n\nReliability:\n• Multi-AZ deployment\n• Health checks on all tasks\n• Circuit breaker for deployments\n• Graceful shutdown (stopTimeout)\n• Connection draining\n• Monitoring and alerting\n\nPerformance:\n• Right-size task CPU and memory\n• Use Fargate Spot for non-critical workloads\n• Implement auto-scaling\n• Monitor container startup time\n\nCost Optimization:\n• Use Fargate Spot instances\n• Right-size resources\n• Monitor unused resources\n• Implement auto-scaling\n• Use log retention policies",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Production ECS Health Monitoring Service
using Amazon.ECS;
using Amazon.ECS.Model;
using Amazon.CloudWatch;
using Amazon.CloudWatch.Model;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

public class ECSHealthMonitor : BackgroundService
{
    private readonly IAmazonECS _ecsClient;
    private readonly IAmazonCloudWatch _cloudWatch;
    private readonly ILogger<ECSHealthMonitor> _logger;
    private readonly string _clusterName;
    private readonly List<string> _serviceNames;

    public ECSHealthMonitor(
        IAmazonECS ecsClient,
        IAmazonCloudWatch cloudWatch,
        ILogger<ECSHealthMonitor> logger,
        string clusterName,
        List<string> serviceNames)
    {
        _ecsClient = ecsClient;
        _cloudWatch = cloudWatch;
        _logger = logger;
        _clusterName = clusterName;
        _serviceNames = serviceNames;
    }

    protected override async Task ExecuteAsync(CancellationToken ct)
    {
        while (!ct.IsCancellationRequested)
        {
            foreach (var serviceName in _serviceNames)
            {
                try
                {
                    var health = await CheckServiceHealthAsync(serviceName);
                    await PublishMetricsAsync(health);

                    if (health.HealthStatus != "HEALTHY")
                    {
                        _logger.LogWarning(
                            "Service {Name} is {Status}",
                            serviceName, health.HealthStatus);
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, 
                        "Error checking health for {Service}", serviceName);
                }
            }

            await Task.Delay(TimeSpan.FromSeconds(30), ct);
        }
    }

    private async Task<ServiceHealth> CheckServiceHealthAsync(string serviceName)
    {
        var response = await _ecsClient.DescribeServicesAsync(
            new DescribeServicesRequest
            {
                Cluster = _clusterName,
                Services = new List<string> { serviceName }
            });

        var service = response.Services.First();
        var isHealthy = service.RunningCount == service.DesiredCount &&
                        service.PendingCount == 0 &&
                        service.Status == "ACTIVE";

        return new ServiceHealth
        {
            ServiceName = serviceName,
            HealthStatus = isHealthy ? "HEALTHY" : "UNHEALTHY",
            DesiredCount = service.DesiredCount,
            RunningCount = service.RunningCount,
            PendingCount = service.PendingCount,
            DeploymentCount = service.Deployments.Count,
            Timestamp = DateTime.UtcNow
        };
    }

    private async Task PublishMetricsAsync(ServiceHealth health)
    {
        var metrics = new List<MetricDatum>
        {
            new()
            {
                MetricName = "RunningTasks",
                Value = health.RunningCount,
                Unit = StandardUnit.Count,
                Dimensions = new List<Dimension>
                {
                    new() { Name = "ServiceName", Value = health.ServiceName },
                    new() { Name = "ClusterName", Value = _clusterName }
                }
            },
            new()
            {
                MetricName = "HealthStatus",
                Value = health.HealthStatus == "HEALTHY" ? 1 : 0,
                Unit = StandardUnit.None,
                Dimensions = new List<Dimension>
                {
                    new() { Name = "ServiceName", Value = health.ServiceName },
                    new() { Name = "ClusterName", Value = _clusterName }
                }
            }
        };

        await _cloudWatch.PutMetricDataAsync(new PutMetricDataRequest
        {
            Namespace = "Custom/ECS",
            MetricData = metrics
        });
    }
}

public record ServiceHealth
{
    public string ServiceName { get; init; } = "";
    public string HealthStatus { get; init; } = "";
    public int DesiredCount { get; init; }
    public int RunningCount { get; init; }
    public int PendingCount { get; init; }
    public int DeploymentCount { get; init; }
    public DateTime Timestamp { get; init; }
}

// Program.cs - DI Registration
var builder = Host.CreateApplicationBuilder(args);

builder.Services.AddSingleton<IAmazonECS, AmazonECSClient>();
builder.Services.AddSingleton<IAmazonCloudWatch, AmazonCloudWatchClient>();
builder.Services.AddHostedService(sp =>
{
    var ecs = sp.GetRequiredService<IAmazonECS>();
    var cw = sp.GetRequiredService<IAmazonCloudWatch>();
    var logger = sp.GetRequiredService<ILogger<ECSHealthMonitor>>();
    
    return new ECSHealthMonitor(
        ecs, cw, logger, 
        "production-cluster",
        new List<string> { "api-service", "worker-service" });
});

var host = builder.Build();
host.Run();`,
        },
        {
          language: "json",
          code: `// Production-Grade ECS Task Definition
{
  "family": "production-api",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "containerDefinitions": [
    {
      "name": "api",
      "image": "123456789012.dkr.ecr.us-east-1.amazonaws.com/api:v1.2.3",
      "essential": true,
      "portMappings": [
        { "containerPort": 8080, "protocol": "tcp" }
      ],
      "environment": [
        { "name": "ASPNETCORE_ENVIRONMENT", "value": "Production" },
        { "name": "ASPNETCORE_URLS", "value": "http://+:8080" }
      ],
      "secrets": [
        {
          "name": "ConnectionStrings__DefaultConnection",
          "valueFrom": "arn:aws:secretsmanager:us-east-1:123456789012:secret:db-url"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/production-api",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      },
      "healthCheck": {
        "command": ["CMD-SHELL", "curl -f http://localhost:8080/health || exit 1"],
        "interval": 30,
        "timeout": 5,
        "retries": 3,
        "startPeriod": 60
      },
      "stopTimeout": 120,
      "readonlyRootFilesystem": true
    }
  ],
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "taskRoleArn": "arn:aws:iam::123456789012:role/ecsTaskRole"
}`,
        },
      ],
    },
  ],
};
