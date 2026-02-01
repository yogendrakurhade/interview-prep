import type { Topic } from "../../../types";

export const microservicesResiliencePatternsTopic: Topic = {
  id: "microservices-resilience",
  name: "Resilience Patterns",
  questions: [
    {
      id: "q1",
      question: "What is the Circuit Breaker pattern and how does it prevent cascading failures?",
      answer:
        "The Circuit Breaker pattern monitors for failures and temporarily stops requests to a failing service. It has three states: Closed (normal), Open (blocking requests), and Half-Open (testing recovery). Prevents cascading failures and allows services to recover gracefully.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Circuit Breaker Implementation
public enum CircuitState
{
    Closed,      // Normal operation
    Open,        // Blocking requests
    HalfOpen     // Testing recovery
}

public class CircuitBreaker
{
    private CircuitState _state = CircuitState.Closed;
    private DateTime _lastFailureTime;
    private int _failureCount;
    private int _failureThreshold = 5;
    private TimeSpan _timeout = TimeSpan.FromSeconds(30);
    private readonly object _lock = new();
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        lock (_lock)
        {
            if (_state == CircuitState.Open)
            {
                if (DateTime.UtcNow - _lastFailureTime > _timeout)
                {
                    _state = CircuitState.HalfOpen;
                    _failureCount = 0;
                }
                else
                {
                    throw new CircuitBreakerOpenException("Circuit breaker is open");
                }
            }
        }
        
        try
        {
            var result = await operation();
            OnSuccess();
            return result;
        }
        catch (Exception ex)
        {
            OnFailure();
            throw;
        }
    }
    
    private void OnSuccess()
    {
        lock (_lock)
        {
            _failureCount = 0;
            if (_state == CircuitState.HalfOpen)
            {
                _state = CircuitState.Closed;
            }
        }
    }
    
    private void OnFailure()
    {
        lock (_lock)
        {
            _failureCount++;
            _lastFailureTime = DateTime.UtcNow;
            
            if (_failureCount >= _failureThreshold)
            {
                _state = CircuitState.Open;
            }
        }
    }
    
    public CircuitState GetState() => _state;
}

// Using Polly library (recommended)
using Polly;
using Polly.CircuitBreaker;

public class PollyCircuitBreakerExample
{
    public static IAsyncPolicy<HttpResponseMessage> GetCircuitBreakerPolicy()
    {
        return Policy
            .HandleResult<HttpResponseMessage>(r => !r.IsSuccessStatusCode)
            .Or<HttpRequestException>()
            .CircuitBreakerAsync<HttpResponseMessage>(
                handledEventsAllowedBeforeBreaking: 3,
                durationOfBreak: TimeSpan.FromSeconds(30),
                onBreak: (outcome, timespan) =>
                {
                    Console.WriteLine(\`Circuit breaker opened for {\timespan.TotalSeconds} seconds\`);
                },
                onReset: () =>
                {
                    Console.WriteLine("Circuit breaker reset");
                }
            );
    }
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "Explain the Retry pattern with exponential backoff in microservices.",
      answer:
        "The Retry pattern automatically retries failed requests with exponential backoff to handle transient failures. Exponential backoff increases delay between retries to avoid overwhelming a recovering service. Includes jitter to prevent thundering herd problem.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Retry with Exponential Backoff
public class RetryPolicy
{
    private int _maxRetries = 3;
    private double _backoffMultiplier = 2.0;
    private int _initialDelayMs = 100;
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        int retryCount = 0;
        
        while (true)
        {
            try
            {
                return await operation();
            }
            catch (Exception ex) when (ShouldRetry(ex) && retryCount < _maxRetries)
            {
                retryCount++;
                var delayMs = CalculateDelay(retryCount);
                Console.WriteLine(\`Retry attempt {retryCount} after {delayMs}ms\`);
                await Task.Delay(delayMs);
            }
        }
    }
    
    private int CalculateDelay(int attemptNumber)
    {
        // Exponential backoff: initialDelay * (backoffMultiplier ^ attemptNumber)
        var exponentialDelay = _initialDelayMs * Math.Pow(_backoffMultiplier, attemptNumber - 1);
        
        // Add jitter to prevent thundering herd
        var jitter = new Random().NextDouble() * 0.1 * exponentialDelay;
        
        return (int)(exponentialDelay + jitter);
    }
    
    private bool ShouldRetry(Exception ex)
    {
        // Retry on transient errors
        return ex is HttpRequestException || 
               ex is TimeoutException ||
               (ex is InvalidOperationException && ex.Message.Contains("transient"));
    }
}

// Using Polly
var retryPolicy = Policy
    .Handle<HttpRequestException>()
    .Or<TimeoutException>()
    .WaitAndRetryAsync(
        retryCount: 3,
        sleepDurationProvider: attempt => TimeSpan.FromMilliseconds(
            Math.Pow(2, attempt) * 100 + new Random().Next(0, 100)
        ),
        onRetry: (outcome, timespan, retryCount, context) =>
        {
            Console.WriteLine(\`Retry {retryCount} after {timespan.TotalMilliseconds}ms\`);
        }
    );

// Execute with retry
var response = await retryPolicy.ExecuteAsync(() => 
    httpClient.GetAsync("https://api.example.com/data")
);`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the Bulkhead pattern and how does it prevent resource exhaustion?",
      answer:
        "The Bulkhead pattern isolates resources (threads, connections) for different operations to prevent one failing operation from exhausting all resources. Named after compartments in ships that contain flooding. Limits concurrency and prevents cascading failures.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Bulkhead Pattern Implementation
public class BulkheadIsolation
{
    private readonly SemaphoreSlim _semaphore;
    private readonly string _name;
    
    public BulkheadIsolation(string name, int maxConcurrency)
    {
        _name = name;
        _semaphore = new SemaphoreSlim(maxConcurrency);
    }
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        if (!await _semaphore.WaitAsync(TimeSpan.FromSeconds(5)))
        {
            throw new BulkheadException($"Bulkhead '{_name}' is at capacity");
        }
        
        try
        {
            return await operation();
        }
        finally
        {
            _semaphore.Release();
        }
    }
}

// Usage
public class PaymentServiceClient
{
    private readonly BulkheadIsolation _bulkhead;
    private readonly HttpClient _httpClient;
    
    public PaymentServiceClient(HttpClient httpClient)
    {
        _httpClient = httpClient;
        // Limit to 10 concurrent requests to payment service
        _bulkhead = new BulkheadIsolation("PaymentService", maxConcurrency: 10);
    }
    
    public async Task<PaymentResult> ProcessPaymentAsync(Payment payment)
    {
        return await _bulkhead.ExecuteAsync(async () =>
        {
            var response = await _httpClient.PostAsJsonAsync(
                "https://payment-api.example.com/process",
                payment
            );
            return await response.Content.ReadAsAsync<PaymentResult>();
        });
    }
}

// Using Polly Bulkhead
var bulkheadPolicy = Policy.BulkheadAsync(
    maxParallelization: 10,
    maxQueuingActions: 5,
    onBulkheadRejectedAsync: context =>
    {
        Console.WriteLine("Bulkhead at capacity - request rejected");
        return Task.CompletedTask;
    }
);

// Using separate thread pools
public class ThreadPoolBulkhead
{
    private readonly TaskScheduler _taskScheduler;
    
    public ThreadPoolBulkhead(int maxDegreeOfParallelism)
    {
        _taskScheduler = new LimitedConcurrencyLevelTaskScheduler(maxDegreeOfParallelism);
    }
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> operation)
    {
        var task = operation();
        var schedulerTask = Task.Factory.StartNew(
            async () => await task,
            CancellationToken.None,
            TaskCreationOptions.DenyChildAttach,
            _taskScheduler
        );
        
        return await await schedulerTask;
    }
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the Timeout pattern and its importance in distributed systems?",
      answer:
        "The Timeout pattern sets maximum waiting time for operations to complete. Prevents hanging requests and resource leaks. Critical in distributed systems where network issues can cause indefinite waits. Combined with retries and circuit breakers for resilience.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Timeout Pattern
public class TimeoutPolicy
{
    public async Task<T> ExecuteWithTimeoutAsync<T>(
        Func<Task<T>> operation, 
        TimeSpan timeout)
    {
        using (var cts = new CancellationTokenSource(timeout))
        {
            try
            {
                return await operation();
            }
            catch (OperationCanceledException)
            {
                throw new TimeoutException($"Operation exceeded timeout of {timeout.TotalSeconds}s");
            }
        }
    }
}

// HTTP Client with Timeout
public class ResilientHttpClient
{
    private readonly HttpClient _httpClient;
    private readonly TimeSpan _timeout = TimeSpan.FromSeconds(10);
    
    public ResilientHttpClient()
    {
        _httpClient = new HttpClient();
        _httpClient.Timeout = _timeout;
    }
    
    public async Task<T> GetAsync<T>(string url)
    {
        try
        {
            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsAsync<T>();
        }
        catch (TaskCanceledException ex)
        {
            throw new TimeoutException($"Request to {url} timed out", ex);
        }
    }
}

// Polly Timeout Policy
var timeoutPolicy = Policy
    .TimeoutAsync<HttpResponseMessage>(
        timeout: TimeSpan.FromSeconds(10),
        timeoutStrategy: TimeoutStrategy.Aggressive
    );

// Combining multiple policies
var combinedPolicy = Policy.WrapAsync(
    timeoutPolicy,
    circuitBreakerPolicy,
    retryPolicy
);

// Usage
var result = await combinedPolicy.ExecuteAsync(async () =>
{
    return await httpClient.GetAsync("https://api.example.com/data");
});`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the Fallback pattern and how does it improve user experience?",
      answer:
        "The Fallback pattern provides alternative behavior when primary operations fail. Examples: return cached data, default values, or graceful degradation. Improves user experience by avoiding complete failures and maintaining partial functionality.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Fallback Pattern
public class FallbackPolicy
{
    public async Task<T> ExecuteWithFallbackAsync<T>(
        Func<Task<T>> primaryOperation,
        Func<Task<T>> fallbackOperation)
    {
        try
        {
            return await primaryOperation();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Primary operation failed: {ex.Message}. Using fallback.");
            return await fallbackOperation();
        }
    }
}

// Product Service with Cache Fallback
public class ProductService
{
    private readonly HttpClient _httpClient;
    private readonly IDistributedCache _cache;
    
    public async Task<Product> GetProductAsync(int productId)
    {
        try
        {
            // Primary: Call remote service
            var response = await _httpClient.GetAsync(
                $"https://products-api.example.com/{productId}"
            );
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsAsync<Product>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to fetch from remote service: {ex.Message}");
            
            // Fallback: Return cached data
            var cachedProduct = await _cache.GetAsync<Product>($"product:{productId}");
            if (cachedProduct != null)
                return cachedProduct;
            
            // Final fallback: Return default/empty product
            return new Product { Id = productId, Name = "Product Unavailable" };
        }
    }
}

// Using Polly Fallback
var fallbackPolicy = Policy
    .Handle<HttpRequestException>()
    .Or<TimeoutException>()
    .FallbackAsync<UserProfile>(async context =>
    {
        // Return default/cached profile
        return new UserProfile 
        { 
            Id = Guid.NewGuid(),
            Name = "Guest User",
            IsDefault = true 
        };
    });

// Combining with other policies
var combinedPolicy = Policy.WrapAsync(
    timeoutPolicy,
    retryPolicy,
    fallbackPolicy
);`,
        },
      ],
    },
  ],
};
