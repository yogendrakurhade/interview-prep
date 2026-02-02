import type { Topic } from "../../../types";

export const csharpMultiThreadingTopic: Topic = {
  id: "csharp-multi-threading",
  name: "Multi-threading",
  questions: [
    {
      id: "q1",
      question: "What is multi-threading and why is it important in C#?",
      answer:
        "Multi-threading allows multiple threads to execute within a single process, enabling concurrent execution of code. It's important for improving application responsiveness, better resource utilization, and handling multiple operations simultaneously.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Creating and starting threads
Thread thread1 = new Thread(() => Console.WriteLine("Thread 1"));
Thread thread2 = new Thread(() => Console.WriteLine("Thread 2"));

thread1.Start();
thread2.Start();

thread1.Join(); // Wait for thread1 to complete
thread2.Join(); // Wait for thread2 to complete`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the difference between Thread and Task in C#?",
      answer:
        "Thread is a low-level abstraction representing an OS thread. Task is a higher-level abstraction built on the ThreadPool that represents asynchronous work. Tasks are more efficient, support better composition, and are preferred in modern C#.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Using Thread
Thread thread = new Thread(() => Console.WriteLine("Thread"));
thread.Start();

// Using Task
Task task = Task.Run(() => Console.WriteLine("Task"));
task.Wait();

// Using async/await (recommended)
await Task.Run(() => Console.WriteLine("Async Task"));`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is a lock and how do you use it for synchronization?",
      answer:
        "A lock is a synchronization primitive that ensures only one thread can access a critical section of code at a time. It prevents race conditions when multiple threads access shared resources. Use 'lock' keyword with an object.",
      codeSnippets: [
        {
          language: "csharp",
          code: `private int counter = 0;
private object lockObject = new object();

public void Increment()
{
    lock (lockObject)
    {
        // Only one thread can execute this at a time
        int temp = counter;
        temp++;
        counter = temp;
    }
}

// Thread-safe alternative using Interlocked
public void IncrementAtomic()
{
    Interlocked.Increment(ref counter);
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What are mutexes and semaphores? How do they differ?",
      answer:
        "Mutex is a mutual exclusion lock that allows only one thread to access a resource. Semaphore is a signaling mechanism that allows a specified number of threads to access a resource. Semaphore with count=1 is similar to a mutex.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Using Mutex
Mutex mutex = new Mutex();

mutex.WaitOne(); // Acquire lock
try
{
    // Critical section
}
finally
{
    mutex.ReleaseMutex(); // Release lock
}

// Using Semaphore (allows N threads)
Semaphore semaphore = new Semaphore(3, 3); // Allow 3 threads

semaphore.WaitOne(); // Acquire one slot
try
{
    // Critical section
}
finally
{
    semaphore.Release(); // Release one slot
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is a ReaderWriterLock and when would you use it?",
      answer:
        "ReaderWriterLock allows multiple threads to read simultaneously, but only one thread to write. It's useful when reads are frequent and writes are rare, providing better concurrency than a regular lock.",
      codeSnippets: [
        {
          language: "csharp",
          code: `private ReaderWriterLockSlim rwLock = new ReaderWriterLockSlim();
private string data = "";

public string ReadData()
{
    rwLock.EnterReadLock();
    try
    {
        return data;
    }
    finally
    {
        rwLock.ExitReadLock();
    }
}

public void WriteData(string value)
{
    rwLock.EnterWriteLock();
    try
    {
        data = value;
    }
    finally
    {
        rwLock.ExitWriteLock();
    }
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is the ThreadPool and how does it improve performance?",
      answer:
        "ThreadPool is a collection of threads maintained by the system. It reduces overhead by reusing threads instead of creating new ones for each task. Tasks are queued and executed on available threads, improving performance.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Queue work to ThreadPool
ThreadPool.QueueUserWorkItem(state =>
{
    Console.WriteLine("Executing on ThreadPool");
    Thread.Sleep(1000);
});

// Using WaitHandle to wait for completion
ManualResetEvent resetEvent = new ManualResetEvent(false);

ThreadPool.QueueUserWorkItem(state =>
{
    Console.WriteLine("Work completed");
    resetEvent.Set();
});

resetEvent.WaitOne(); // Wait for signal`,
        },
      ],
    },
    {
      id: "q7",
      question: "What is a race condition and how do you prevent it?",
      answer:
        "A race condition occurs when multiple threads access shared data concurrently, leading to unpredictable results. Prevent it using synchronization techniques: locks, mutexes, semaphores, or thread-safe collections.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// BAD - Race condition
private int unsafeCounter = 0;

public void UnsafeIncrement()
{
    unsafeCounter++; // Not atomic
}

// GOOD - Thread-safe
private int safeCounter = 0;
private object lockObj = new object();

public void SafeIncrement()
{
    lock (lockObj)
    {
        safeCounter++;
    }
}

// GOOD - Using Interlocked
public void AtomicIncrement()
{
    Interlocked.Increment(ref unsafeCounter);
}`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is a deadlock and how can you avoid it?",
      answer:
        "A deadlock occurs when two or more threads are blocked waiting for each other to release resources. Avoid it by: acquiring locks in the same order, using timeouts, minimizing lock scope, or using lock-free structures.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// BAD - Potential Deadlock
object lock1 = new object();
object lock2 = new object();

Thread t1 = new Thread(() =>
{
    lock (lock1) { lock (lock2) { /* work */ } }
});

Thread t2 = new Thread(() =>
{
    lock (lock2) { lock (lock1) { /* work */ } } // Different order!
});

// GOOD - Avoid deadlock with consistent lock ordering
Thread t3 = new Thread(() =>
{
    lock (lock1) { lock (lock2) { /* work */ } }
});

Thread t4 = new Thread(() =>
{
    lock (lock1) { lock (lock2) { /* work */ } } // Same order
});

// GOOD - Using timeout
if (Monitor.TryEnter(lock1, TimeSpan.FromSeconds(1)))
{
    try { /* critical section */ }
    finally { Monitor.Exit(lock1); }
}`,
        },
      ],
    },
    {
      id: "q9",
      question: "What is async/await and how does it relate to multi-threading?",
      answer:
        "async/await is syntactic sugar for Task-based asynchronous programming. It doesn't require a new thread - the same thread can switch between tasks. It's more efficient for I/O-bound operations than creating new threads.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Async/await pattern
public async Task<string> FetchDataAsync()
{
    // This doesn't block the thread while waiting
    HttpClient client = new HttpClient();
    string result = await client.GetStringAsync("https://api.example.com/data");
    return result;
}

// Called asynchronously
await FetchDataAsync();

// Contrast with blocking
public string FetchDataSync()
{
    HttpClient client = new HttpClient();
    // This blocks the thread while waiting
    string result = client.GetStringAsync("https://api.example.com/data").Result;
    return result;
}`,
        },
      ],
    },
    {
      id: "q10",
      question: "What are thread-safe collections in C#?",
      answer:
        "Thread-safe collections from System.Collections.Concurrent allow multiple threads to access them without explicit locking. Examples: ConcurrentBag, ConcurrentQueue, ConcurrentDictionary, ConcurrentStack.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System.Collections.Concurrent;

// Thread-safe queue
ConcurrentQueue<int> queue = new ConcurrentQueue<int>();
queue.Enqueue(1);
queue.Enqueue(2);
queue.TryDequeue(out int value);

// Thread-safe dictionary
ConcurrentDictionary<string, int> dict = new ConcurrentDictionary<string, int>();
dict.TryAdd("key", 10);
dict.AddOrUpdate("key", 20, (k, v) => v + 20);

// Thread-safe bag
ConcurrentBag<string> bag = new ConcurrentBag<string>();
bag.Add("item1");
bag.TryTake(out string item);`,
        },
      ],
    },
  ],
};
