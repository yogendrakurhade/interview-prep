import type { Topic } from "../../../types";

export const csharpAsynchronousProgrammingTopic: Topic = {
  id: "csharp-async-programming",
  name: "Asynchronous Programming",
  questions: [
    {
      id: "q1",
      question: "What is asynchronous programming and why is it important in C#?",
      answer:
        "Asynchronous programming allows operations to run without blocking the calling thread. It's important for improving application responsiveness, especially for I/O operations like database queries, API calls, and file access. It enables better resource utilization by allowing the thread to work on other tasks while waiting.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Synchronous - blocks thread
public string FetchDataSync()
{
    System.Threading.Thread.Sleep(2000); // Simulates I/O operation
    return "Data";
}

// Asynchronous - doesn't block thread
public async Task<string> FetchDataAsync()
{
    await Task.Delay(2000); // Simulates I/O operation
    return "Data";
}

// Usage
string result = FetchDataSync(); // Thread is blocked for 2 seconds

var result = await FetchDataAsync(); // Thread is free to do other work`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the difference between Task and async/await?",
      answer:
        "Task is the underlying abstraction representing asynchronous work. async/await is syntactic sugar that makes working with Tasks easier and more readable. async methods return Task or Task<T>, and await unwraps the result.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Using Task directly
public Task<string> GetDataTask()
{
    return Task.Run(async () => 
    {
        await Task.Delay(1000);
        return "Data";
    });
}

// Using async/await (more readable)
public async Task<string> GetDataAsync()
{
    await Task.Delay(1000);
    return "Data";
}

// Calling Task version
GetDataTask().ContinueWith(task => 
{
    Console.WriteLine(task.Result);
});

// Calling async version (cleaner)
var data = await GetDataAsync();
Console.WriteLine(data);`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is async/await and how does it work?",
      answer:
        "async/await is syntactic sugar for working with Tasks. The 'async' keyword enables the 'await' operator and returns a Task. 'await' suspends execution until the awaited Task completes, allowing other code to run.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Async method signature
public async Task<string> FetchDataAsync()
{
    // Method must be async to use await
    var response = await HttpClient.GetAsync("https://api.example.com/data");
    var content = await response.Content.ReadAsStringAsync();
    return content;
}

// Async void (not recommended except for event handlers)
public async void OnButtonClick()
{
    var data = await FetchDataAsync();
}

// Async Task (recommended)
public async Task OnButtonClickAsync()
{
    var data = await FetchDataAsync();
}

// Async Task<T> (with return value)
public async Task<int> CalculateAsync()
{
    await Task.Delay(1000);
    return 42;
}

// Usage
int result = await CalculateAsync();`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the relationship between async/await and the thread pool?",
      answer:
        "async/await doesn't necessarily use new threads. When you await a Task, the current thread is freed and can handle other work. The Task may use a thread from the ThreadPool, but often I/O operations don't use threads at all.",
      codeSnippets: [
        {
          language: "csharp",
          code: `public async Task DemonstrateAsync()
{
    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} started");
    
    // This doesn't block the thread
    await Task.Delay(1000);
    
    // May run on different thread
    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} resumed");
}

// With CPU-bound work
public async Task CpuBoundAsync()
{
    // Run on ThreadPool to avoid blocking
    var result = await Task.Run(() => 
    {
        // Long CPU operation
        return ExpensiveCalculation();
    });
    
    return result;
}

// Key difference:
// I/O operations (HTTP, Database) use completion-based asynchrony
// CPU operations should use Task.Run to avoid blocking the UI thread`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the difference between Task.Run and Task.Delay?",
      answer:
        "Task.Run executes CPU-bound work on a thread pool thread. Task.Delay creates a Task that completes after a specified time without using a thread. Use Task.Run for CPU work, Task.Delay for timing/I/O operations.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Task.Delay - doesn't use a thread
public async Task DelayExample()
{
    await Task.Delay(2000); // Just waits, no thread
    Console.WriteLine("Waited 2 seconds");
}

// Task.Run - uses thread pool thread
public async Task RunExample()
{
    var result = await Task.Run(() =>
    {
        // CPU-intensive work on separate thread
        return ExpensiveCalculation();
    });
    return result;
}

// Real-world example
public async Task<Data> FetchAndProcessAsync(string url)
{
    // I/O operation - no thread needed
    var response = await httpClient.GetAsync(url);
    
    // CPU-intensive operation - use Task.Run
    var processed = await Task.Run(() => ProcessData(response));
    
    return processed;
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you handle exceptions in async/await?",
      answer:
        "Use try-catch blocks around await statements just like synchronous code. Exceptions are captured and re-thrown when the Task is awaited. Use Task.WhenAll to handle multiple exceptions.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Try-catch with async/await
public async Task<string> FetchDataAsync()
{
    try
    {
        var response = await httpClient.GetAsync("https://api.example.com/data");
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"HTTP error: {ex.Message}");
        throw; // Re-throw or handle
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
        throw;
    }
}

// Handle multiple async operations
public async Task<(Data1, Data2)> FetchMultipleAsync()
{
    try
    {
        var task1 = FetchData1Async();
        var task2 = FetchData2Async();
        
        await Task.WhenAll(task1, task2);
        
        return (task1.Result, task2.Result);
    }
    catch (Exception ex)
    {
        // Both exceptions might be in ex.InnerExceptions
        Console.WriteLine($"Error: {ex.Message}");
        throw;
    }
}`,
        },
      ],
    },
    {
      id: "q7",
      question: "What is deadlock in async/await and how do you prevent it?",
      answer:
        "Deadlock occurs when you block on an async operation using .Result or .Wait(). The thread is blocked waiting for the Task, but the Task needs the same context (like UI thread) to complete. Use await instead of .Result or .Wait().",
      codeSnippets: [
        {
          language: "csharp",
          code: `// DEADLOCK - Bad practice
public void BadMethod()
{
    // If FetchDataAsync needs the UI context, this deadlocks
    var data = FetchDataAsync().Result; // BLOCKS!
}

// Also deadlock risk
public void AnotherBadMethod()
{
    var task = FetchDataAsync();
    task.Wait(); // Blocks thread
    var data = task.Result;
}

// GOOD - Use async all the way
public async Task GoodMethodAsync()
{
    var data = await FetchDataAsync();
    return data;
}

// If you must call async from sync context (rare):
public string SafeMethod()
{
    var task = FetchDataAsync();
    // Don't use Result/Wait - marshal to another thread
    return task.GetAwaiter().GetResult();
}

// Best practice: Make the caller async
public async Task CallerAsync()
{
    var data = await FetchDataAsync();
}`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is ConfigureAwait and why is it important?",
      answer:
        "ConfigureAwait(false) tells the await to not capture the current SynchronizationContext. This improves performance in library code and helps avoid deadlocks in async over sync scenarios. Use it in library code unless you need the original context.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Without ConfigureAwait - captures UI context
public async Task<string> FetchWithContextAsync()
{
    var response = await httpClient.GetAsync(url);
    // Resumes on UI thread (slow if it's a library method)
    return await response.Content.ReadAsStringAsync();
}

// With ConfigureAwait - doesn't capture context
public async Task<string> FetchWithoutContextAsync()
{
    var response = await httpClient.GetAsync(url).ConfigureAwait(false);
    // Resumes on any thread (faster)
    return await response.Content.ReadAsStringAsync().ConfigureAwait(false);
}

// Best practice in libraries
public async Task<Data> GetDataAsync()
{
    using var httpClient = new HttpClient();
    
    var response = await httpClient
        .GetAsync("https://api.example.com/data")
        .ConfigureAwait(false);
    
    var content = await response.Content
        .ReadAsStringAsync()
        .ConfigureAwait(false);
    
    return JsonConvert.DeserializeObject<Data>(content);
}

// ConfigureAwait(true) - important to preserve context
public async Task UpdateUIAsync()
{
    var data = await FetchDataAsync().ConfigureAwait(true);
    // Must resume on UI thread to update controls
    myLabel.Text = data;
}`,
        },
      ],
    },
    {
      id: "q9",
      question: "How do you run multiple async operations concurrently?",
      answer:
        "Use Task.WhenAll to wait for multiple Tasks concurrently, or Task.WhenAny to wait for the first one. Start all tasks first, then await together to run concurrently.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Sequential - slow
public async Task<(Data1, Data2, Data3)> FetchSequentialAsync()
{
    var data1 = await FetchData1Async();
    var data2 = await FetchData2Async();
    var data3 = await FetchData3Async();
    return (data1, data2, data3);
}

// Concurrent - fast
public async Task<(Data1, Data2, Data3)> FetchConcurrentAsync()
{
    var task1 = FetchData1Async();
    var task2 = FetchData2Async();
    var task3 = FetchData3Async();
    
    await Task.WhenAll(task1, task2, task3);
    
    return (task1.Result, task2.Result, task3.Result);
}

// Task.WhenAny - return first completed
public async Task<Data> FetchFirstAsync()
{
    var task1 = FetchFromServerAsync("server1");
    var task2 = FetchFromServerAsync("server2");
    var task3 = FetchFromServerAsync("server3");
    
    var completedTask = await Task.WhenAny(task1, task2, task3);
    
    return ((Task<Data>)completedTask).Result;
}

// Handle exceptions with WhenAll
public async Task<List<Data>> FetchMultipleAsync(IEnumerable<string> urls)
{
    var tasks = urls.Select(url => FetchAsync(url)).ToList();
    
    try
    {
        var results = await Task.WhenAll(tasks);
        return results.ToList();
    }
    catch (Exception ex)
    {
        // May contain multiple exceptions in InnerExceptions
        throw;
    }
}`,
        },
      ],
    },
    {
      id: "q10",
      question: "What is async void and when should you use it?",
      answer:
        "async void methods have no way to signal completion or report exceptions. They should only be used for event handlers where the caller doesn't need to wait. Use async Task or async Task<T> for all other scenarios.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// AVOID - async void (except for event handlers)
public async void BadAsyncMethod()
{
    // No way to wait for completion
    // Exceptions will crash the app
    await FetchDataAsync();
}

// GOOD - async Task
public async Task GoodAsyncMethod()
{
    var data = await FetchDataAsync();
    return data;
}

// ACCEPTABLE - async void for event handlers only
public async void OnButtonClick(object sender, EventArgs e)
{
    try
    {
        var data = await FetchDataAsync();
        UpdateUI(data);
    }
    catch (Exception ex)
    {
        MessageBox.Show($"Error: {ex.Message}");
    }
}

// BETTER - Event handler that returns Task
public class MyControl : Control
{
    private async void button_Click(object sender, EventArgs e)
    {
        await HandleClickAsync();
    }
    
    public async Task HandleClickAsync()
    {
        var data = await FetchDataAsync();
        UpdateUI(data);
    }
}

// Rule of thumb
// async void: Only for top-level event handlers
// async Task: For all other methods
// async Task<T>: When you need to return a value`,
        },
      ],
    },
  ],
};
