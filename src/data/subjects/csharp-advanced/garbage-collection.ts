import type { Topic } from "../../../types";

export const csharpGarbageCollectionTopic: Topic = {
  id: "csharp-garbage-collection",
  name: "Garbage Collection",
  questions: [
    {
      id: "q1",
      question: "What is garbage collection and why is it important?",
      answer:
        "Garbage collection is the automatic memory management process that frees memory occupied by objects no longer needed. It's important because it eliminates manual memory management, prevents memory leaks, and reduces the chance of bugs like accessing freed memory or double-freeing.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// In languages without GC (like C++), you must manage memory manually
// void* ptr = malloc(sizeof(int));
// free(ptr);  // Easy to forget, leading to leaks

// In C#, the garbage collector handles this
public class MyClass
{
    private byte[] data = new byte[1000000]; // 1MB of data
}

// Memory allocated automatically
var obj = new MyClass();

// When 'obj' is no longer reachable, garbage collector
// automatically frees the memory
obj = null; // Object can now be collected
// GC will free the 1MB when it runs

// Benefits:
// 1. No manual memory management needed
// 2. No memory leaks from forgetting to free
// 3. No use-after-free bugs
// 4. No double-free bugs

// Drawback:
// - Unpredictable pause times when GC runs
// - Can't control exactly when memory is freed`,
        },
      ],
    },
    {
      id: "q2",
      question: "How does .NET garbage collection work?",
      answer:
        "The .NET garbage collector uses mark-and-sweep algorithm. It starts from roots (static variables, local variables, registers), marks all reachable objects, and sweaps (frees) unmarked objects. It uses generational collection for performance: most objects die young (Gen 0), rarely collected objects (Gen 2).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Garbage Collection Process:
// 1. Pause all threads
// 2. Mark phase: Start from roots, mark all reachable objects
// 3. Sweep phase: Free unmarked objects
// 4. Compact: Move objects together to reduce fragmentation
// 5. Resume threads

public class GCDemo
{
    public void Demonstrate()
    {
        // Local variable (root)
        var obj1 = new MyObject();
        
        // obj1 is reachable from local variable
        // - During GC.Mark: marked as reachable
        
        obj1 = null; // No longer reachable
        // - During next GC: sweep phase will collect this memory
        
        // Reference from another object
        var obj2 = new MyObject();
        var obj3 = new Container { Item = obj2 };
        
        // obj2 is reachable through obj3.Item
        // Even if obj2 local variable goes out of scope,
        // the object still exists because obj3 references it
        
        obj3 = null; // Now obj2 is also unreachable
        // Both will be collected in next GC
    }
}

// Roots are:
// - Local variables in methods
// - Static fields
// - CPU registers holding references
// - GC handles (pinned objects)

public static class RootsExample
{
    private static MyObject staticField; // Root
    
    public void Method()
    {
        var localVar = new MyObject(); // Root
        staticField = new MyObject();   // Root (through static field)
        
        var temp = new MyObject();
        temp = null; // This object becomes unreachable
        // Will be collected next GC cycle
    }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are generations in garbage collection? Explain Gen 0, Gen 1, and Gen 2.",
      answer:
        "Generations are a performance optimization. Gen 0 is for new objects, Gen 1 for survivors, Gen 2 for long-lived objects. Most objects die in Gen 0, reducing GC overhead. Gen 2 is collected less frequently since most collected objects are young.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Generational Hypothesis: Most objects die young
// This means frequent full scans are wasteful

// GC Collections:
// Gen 0: Most frequent (every few MB allocated)
// Gen 1: When Gen 0 fills up multiple times
// Gen 2: When Gen 1 fills up

public class GenerationDemo
{
    public void Demonstrate()
    {
        // Initially in Gen 0
        var young = new MyObject(); // Gen 0
        
        // After first GC, survivors move to Gen 1
        GC.Collect(0); // Force Gen 0 collection
        
        // Now if it survived, it's Gen 1
        // Next GC might collect it if it's unreachable
        
        // Objects that survive multiple GC cycles move to Gen 2
        var longLived = new MyObject();
        // Multiple GC cycles later...
        // longLived is in Gen 2 (very old object)
        
        // Benefits:
        // - Gen 0 is fast to scan (small)
        // - Gen 2 scanned infrequently
        // - Improves cache locality
    }
}

// Checking object generation
var obj = new MyObject();
int generation = GC.GetGeneration(obj); // 0 or 1 or 2

// Gen 0 -> Gen 1 -> Gen 2 progression
public void LifeCycleDemo()
{
    var obj = new byte[1024]; // Created in Gen 0
    Console.WriteLine(GC.GetGeneration(obj)); // Output: 0
    
    // Simulate some GCs
    GC.Collect(0);
    GC.WaitForPendingFinalizers();
    
    // Object survived Gen 0 collection
    Console.WriteLine(GC.GetGeneration(obj)); // Output: 1
    
    // More GCs...
    GC.Collect();
    
    // Object is now in Gen 2
    Console.WriteLine(GC.GetGeneration(obj)); // Output: 2
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is IDisposable and what is the Dispose pattern?",
      answer:
        "IDisposable is an interface for releasing unmanaged resources (file handles, database connections, unmanaged memory). The Dispose pattern provides a safe way to clean up resources. Implement Dispose() to release resources, and optionally a finalizer for safety.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// IDisposable interface
public interface IDisposable
{
    void Dispose();
}

// Basic Dispose Pattern
public class FileHandler : IDisposable
{
    private IntPtr fileHandle; // Unmanaged resource
    private bool disposed = false;
    
    public void ReadFile()
    {
        // Use the file handle
    }
    
    // Implement Dispose
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Prevent finalizer from running
    }
    
    // Protected dispose with bool parameter
    protected virtual void Dispose(bool disposing)
    {
        if (disposed)
            return;
        
        if (disposing)
        {
            // Free managed resources
        }
        
        // Free unmanaged resources
        if (fileHandle != IntPtr.Zero)
        {
            // Release the unmanaged resource
            fileHandle = IntPtr.Zero;
        }
        
        disposed = true;
    }
    
    // Finalizer - safety net
    ~FileHandler()
    {
        Dispose(false);
    }
}

// Using Disposable objects
using (var handler = new FileHandler())
{
    handler.ReadFile();
} // Dispose called automatically here

// Modern pattern (C# 8+) - using declaration
{
    using var handler = new FileHandler();
    handler.ReadFile();
} // Dispose called automatically when scope ends

// IAsyncDisposable for async cleanup
public class AsyncFileHandler : IAsyncDisposable
{
    public async ValueTask DisposeAsync()
    {
        await CloseHandleAsync();
    }
    
    private async Task CloseHandleAsync()
    {
        // Async cleanup
    }
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the difference between Dispose and Finalizer? When should you use each?",
      answer:
        "Dispose is called explicitly and should release unmanaged resources immediately. Finalizer (~ClassName) is called by the GC as a safety net but has unpredictable timing. Always implement Dispose for quick cleanup, use Finalizer only as a backup.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Finalizer (destructor) - Bad practice alone
public class BadResource
{
    private IntPtr handle;
    
    // Finalizer - called by GC, timing is unpredictable
    ~BadResource()
    {
        // This might run minutes or hours after object created!
        // Not reliable for immediate cleanup
        ReleaseHandle(handle);
    }
}

// Good practice - Dispose + Finalizer
public class GoodResource : IDisposable
{
    private IntPtr handle;
    private bool disposed = false;
    
    // Immediate cleanup when explicitly called
    public void Dispose()
    {
        if (disposed)
            return;
        
        ReleaseHandle(handle);
        disposed = true;
        
        // Tell GC: don't call finalizer, already cleaned up
        GC.SuppressFinalize(this);
    }
    
    // Safety net - cleanup if Dispose wasn't called
    ~GoodResource()
    {
        if (!disposed)
        {
            ReleaseHandle(handle);
        }
    }
    
    private void ReleaseHandle(IntPtr h)
    {
        if (h != IntPtr.Zero)
        {
            // Release resource
        }
    }
}

// Usage - guarantees cleanup
public void ProcessFile()
{
    var resource = new GoodResource();
    try
    {
        // Use resource
    }
    finally
    {
        resource?.Dispose(); // Guaranteed cleanup
    }
}

// Or with using (C# 8+)
public void ProcessFileModern()
{
    using var resource = new GoodResource();
    // Use resource
} // Dispose called automatically

// Costs of finalizers:
// 1. Objects with finalizers go to finalization queue
// 2. Finalizer thread processes them slowly
// 3. Keeps objects alive longer (Gen 2 candidate)
// 4. Performance impact

// Avoid this pattern:
public class BadPattern
{
    private string data; // Managed resource
    
    // DON'T finalize managed objects
    ~BadPattern()
    {
        data = null; // Unnecessary and bad practice
    }
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is the 'using' statement and how does it work with IDisposable?",
      answer:
        "The 'using' statement ensures Dispose is called on IDisposable objects, even if an exception occurs. It's syntactic sugar for try-finally. Modern C# 8+ has 'using declaration' which disposes at the end of the scope.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Traditional using statement
using (var stream = new FileStream("file.txt", FileMode.Open))
{
    // Use stream
    stream.Read(...);
} // Dispose called automatically, even if exception

// Equivalent to:
FileStream stream = new FileStream("file.txt", FileMode.Open);
try
{
    // Use stream
    stream.Read(...);
}
finally
{
    // Guaranteed to call Dispose
    stream?.Dispose();
}

// Modern using declaration (C# 8+)
void ProcessFile()
{
    using var stream = new FileStream("file.txt", FileMode.Open);
    // Use stream
    stream.Read(...);
} // Dispose called automatically at end of scope

// Multiple resources
using (var stream = File.OpenRead("input.txt"))
using (var writer = new StreamWriter("output.txt"))
{
    // Use both
    var data = stream.ReadToEnd();
    writer.Write(data);
} // Both disposed automatically

// Modern syntax for multiple
void ProcessMultiple()
{
    using var stream = File.OpenRead("input.txt");
    using var writer = new StreamWriter("output.txt");
    
    var data = stream.ReadToEnd();
    writer.Write(data);
} // Both disposed at end of scope

// With exception handling
using var conn = new SqlConnection("connection");
try
{
    conn.Open();
    // Use connection
}
catch (Exception ex)
{
    // Handle error
}
finally
{
    // Using ensures Dispose called in finally
}

// IAsyncDisposable with using
async Task ProcessAsync()
{
    await using var conn = new SqlConnection("connection");
    await conn.OpenAsync();
    // Use connection
} // DisposeAsync called automatically`,
        },
      ],
    },
    {
      id: "q7",
      question: "How can memory leaks occur in managed code? Give examples.",
      answer:
        "Memory leaks in C# occur when objects are unintentionally kept alive through references. Common causes: static references, event handler subscriptions without unsubscribe, circular references in disposable objects, or not disposing unmanaged resources.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Memory Leak 1: Static References
public class Cache
{
    private static Dictionary<string, LargeObject> cache
        = new Dictionary<string, LargeObject>();
    
    public void Add(string key, LargeObject obj)
    {
        cache[key] = obj; // Objects never removed from static cache!
        // Memory leak - objects are never freed
    }
}

// Fix: Implement cache eviction
public class BetterCache
{
    private Dictionary<string, LargeObject> cache
        = new Dictionary<string, LargeObject>();
    private int maxSize = 100;
    
    public void Add(string key, LargeObject obj)
    {
        if (cache.Count >= maxSize)
            cache.Remove(cache.First().Key); // Evict old items
        
        cache[key] = obj;
    }
}

// Memory Leak 2: Event Handler Subscription
public class DataProvider : IDisposable
{
    public event EventHandler DataChanged;
}

public class Consumer
{
    private DataProvider provider;
    
    public Consumer(DataProvider provider)
    {
        this.provider = provider;
        // Subscribe to event
        provider.DataChanged += OnDataChanged;
    }
    
    private void OnDataChanged(object sender, EventArgs e)
    {
        // Handle data change
    }
    
    // Memory Leak: Provider kept alive because Consumer subscribed
    // Consumer kept alive because Provider has reference in event
    // Circular reference!
}

// Fix: Unsubscribe in Dispose
public class GoodConsumer : IDisposable
{
    private DataProvider provider;
    
    public GoodConsumer(DataProvider provider)
    {
        this.provider = provider;
        provider.DataChanged += OnDataChanged;
    }
    
    public void Dispose()
    {
        if (provider != null)
            provider.DataChanged -= OnDataChanged; // Unsubscribe
    }
    
    private void OnDataChanged(object sender, EventArgs e) { }
}

// Memory Leak 3: Not Disposing Resources
public void BadMethod()
{
    var stream = new FileStream("file.txt", FileMode.Open);
    var data = stream.ReadToEnd(); // Exception here?
    stream.Dispose(); // Never called if exception
    // File handle leaked!
}

// Fix: Use using
public void GoodMethod()
{
    using var stream = new FileStream("file.txt", FileMode.Open);
    var data = stream.ReadToEnd();
} // Dispose guaranteed even with exception

// Memory Leak 4: Circular References
public class Node
{
    public Node Parent { get; set; }
    public Node Child { get; set; }
}

public void CreateCircularReference()
{
    var parent = new Node();
    var child = new Node();
    
    parent.Child = child;
    child.Parent = parent; // Circular reference
    
    parent = null;
    child = null;
    // Both objects kept alive by circular reference!
    // GC can still collect (it detects cycles), but resources
    // held by these objects won't be freed until GC runs
}

// Prevention strategies:
// 1. Always use 'using' for IDisposable
// 2. Unsubscribe from events
// 3. Clear static collections periodically
// 4. Use weak references for caches
// 5. Implement IDisposable properly
// 6. Use dependency injection instead of static references`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is GC.Collect? When should you call it and when should you avoid it?",
      answer:
        "GC.Collect() forces garbage collection to run immediately. It's generally not recommended because the GC is optimized to run automatically. Only use it in specific scenarios like demonstrating GC behavior or after loading massive data before entering critical sections.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// GC.Collect() - Forces garbage collection
public class GCDemo
{
    public void BadPractice()
    {
        // BAD - Calling GC.Collect frequently
        for (int i = 0; i < 1000; i++)
        {
            var obj = new byte[1024 * 1024]; // 1MB
            GC.Collect(); // Forces collection every iteration!
            // Massive performance hit - GC is interrupted constantly
        }
    }
    
    public void AvoidThis()
    {
        // Calling GC.Collect after operation
        LoadMillionsOfObjects();
        GC.Collect(); // Let GC manage itself!
        // The GC will run automatically when needed
    }
}

// When it's ACCEPTABLE to call GC.Collect:
public class ProperGCUsage
{
    // Scenario 1: Before critical performance measurement
    public long MeasurePerformance(Action action)
    {
        GC.Collect();
        GC.WaitForPendingFinalizers();
        GC.Collect(); // Clear everything
        
        var sw = Stopwatch.StartNew();
        action();
        sw.Stop();
        
        return sw.ElapsedMilliseconds;
    }
    
    // Scenario 2: After loading data, before game starts
    public void InitializeGame()
    {
        LoadAllAssets(); // Massive allocation
        LoadAllModels();
        
        GC.Collect(); // Clean up temporary allocations
        // Now game starts without GC pauses
    }
    
    // Scenario 3: Demonstrate GC behavior
    public void DemonstrateGC()
    {
        var obj = new object();
        Console.WriteLine(GC.GetGeneration(obj)); // 0
        
        GC.Collect(); // Force collection
        
        Console.WriteLine(GC.GetGeneration(obj)); // 1 (survived)
    }
}

// GC.Collect options
public void CollectionOptions()
{
    GC.Collect(); // Full collection (all generations)
    
    GC.Collect(0); // Collect Gen 0 only
    
    GC.Collect(1); // Collect Gen 0 and Gen 1
    
    GC.Collect(2); // Full collection (Gen 0, 1, and 2)
    
    // Wait for finalizers to complete
    GC.WaitForPendingFinalizers();
    
    // Second collection clears objects finalized
    GC.Collect();
}

// Impact of GC.Collect
public void PerformanceImpact()
{
    var sw = Stopwatch.StartNew();
    for (int i = 0; i < 1_000_000; i++)
    {
        var obj = new object();
    }
    sw.Stop();
    Console.WriteLine(\`Without GC.Collect: \${sw.ElapsedMilliseconds}ms\`);
    
    // Reset timer
    sw.Restart();
    for (int i = 0; i < 1_000_000; i++)
    {
        var obj = new object();
        if (i % 1000 == 0)
            GC.Collect(); // Call GC.Collect every 1000 allocations
    }
    sw.Stop();
    Console.WriteLine(\`With GC.Collect: \${sw.ElapsedMilliseconds}ms\`);
    // Shows HUGE performance difference!
}

// Better approach: Let GC do its job
public void RecommendedApproach()
{
    // Trust the GC - it's optimized
    var list = new List<byte[]>();
    for (int i = 0; i < 1000; i++)
    {
        list.Add(new byte[1024 * 1024]);
    }
    // GC handles memory automatically
    // No manual GC.Collect() needed
}`,
        },
      ],
    },
    {
      id: "q9",
      question: "What are weak references and when would you use them?",
      answer:
        "Weak references point to objects without preventing garbage collection. The GC can collect weakly referenced objects. Use them for caches where you want objects freed if memory is needed, but can keep them if memory is available.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// WeakReference - allows GC to collect referenced object
public class Cache<K, V>
{
    // Strong reference - keeps object alive
    private Dictionary<K, V> strongCache = new();
    
    // Weak reference - allows GC to collect
    private Dictionary<K, WeakReference<V>> weakCache = new();
    
    public void AddToWeakCache(K key, V value)
    {
        weakCache[key] = new WeakReference<V>(value);
    }
    
    public bool TryGetFromWeakCache(K key, out V value)
    {
        if (weakCache.TryGetValue(key, out var weakRef))
        {
            // Try to get the object
            if (weakRef.TryGetTarget(out var target))
            {
                value = target; // Object still alive
                return true;
            }
            
            // Object was garbage collected
            weakCache.Remove(key);
        }
        
        value = null;
        return false;
    }
}

// Practical example: Image cache
public class ImageCache
{
    private Dictionary<string, WeakReference<Bitmap>> cache
        = new();
    
    public Bitmap GetImage(string path)
    {
        if (cache.TryGetValue(path, out var weakRef))
        {
            if (weakRef.TryGetTarget(out var bitmap))
            {
                return bitmap; // Image still in memory
            }
        }
        
        // Image was garbage collected or not cached
        var newBitmap = LoadImage(path);
        cache[path] = new WeakReference<Bitmap>(newBitmap);
        return newBitmap;
    }
    
    private Bitmap LoadImage(string path)
    {
        return new Bitmap(path);
    }
}

// Strong vs Weak References
public class ReferenceComparison
{
    public void Demonstrate()
    {
        var obj = new byte[10 * 1024 * 1024]; // 10MB
        
        // Strong reference
        var strong = obj;
        
        // Weak reference
        var weak = new WeakReference<byte[]>(obj);
        
        // Check if weak ref is alive
        bool isAlive = weak.TryGetTarget(out var target);
        Console.WriteLine(\`Alive: \${isAlive}\`); // true
        
        // Remove strong reference
        obj = null;
        strong = null;
        
        // Now weak reference might be dead
        isAlive = weak.TryGetTarget(out target);
        Console.WriteLine(\`Alive after strong ref removed: \${isAlive}\`); // false
    }
}

// Use cases:
// 1. Object Pools - cache objects but don't prevent GC
// 2. Event Handler Caches - weak cache of subscribers
// 3. Large Object Caches - free if memory needed
// 4. View Model Caches - free when view is closed

public class EventCache
{
    private Dictionary<string, WeakReference<Action>> handlers
        = new();
    
    public void Register(string eventName, Action handler)
    {
        handlers[eventName] = new WeakReference<Action>(handler);
    }
    
    public void Invoke(string eventName)
    {
        if (handlers.TryGetValue(eventName, out var weak))
        {
            if (weak.TryGetTarget(out var handler))
            {
                handler();
            }
            else
            {
                // Handler was collected
                handlers.Remove(eventName);
            }
        }
    }
}`,
        },
      ],
    },
    {
      id: "q10",
      question: "What is the difference between reference types (classes) and value types (structs)? How does this relate to GC?",
      answer:
        "Reference types are allocated on the heap and managed by GC. Value types are allocated on the stack (in methods) or inline in objects and don't need GC. Stack allocation is faster, but reference types are more flexible.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Reference Type - allocated on heap, managed by GC
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// Value Type - allocated on stack or inline
public struct Point
{
    public int X { get; set; }
    public int Y { get; set; }
}

public class AllocationDemo
{
    public void Demonstrate()
    {
        // Reference type - allocated on HEAP
        var person = new Person { Name = "Alice", Age = 30 };
        // Stack: person (reference/pointer)
        // Heap: Person object, managed by GC
        
        // Value type - allocated on STACK
        var point = new Point { X = 10, Y = 20 };
        // Stack: X, Y values (embedded in stack frame)
        // When method ends, point is freed (no GC involved)
        
        // Value type inside reference type - allocated on HEAP
        var people = new List<Point>();
        people.Add(point);
        // Heap: List object, contains Point values
        // Point stored directly in List (not as separate object)
    }
}

// Performance difference
public class PerformanceComparison
{
    public class RefPoint
    {
        public int X, Y;
    }
    
    public struct ValuePoint
    {
        public int X, Y;
    }
    
    public void Benchmark()
    {
        const int count = 1_000_000;
        
        // Value type - stack allocation (fast!)
        var sw = Stopwatch.StartNew();
        for (int i = 0; i < count; i++)
        {
            var p = new ValuePoint { X = 1, Y = 2 };
        }
        sw.Stop();
        Console.WriteLine(\`ValuePoint: \${sw.ElapsedMilliseconds}ms\`); // ~1-5ms
        
        // Reference type - heap allocation with GC (slower)
        sw.Restart();
        for (int i = 0; i < count; i++)
        {
            var p = new RefPoint { X = 1, Y = 2 };
        }
        sw.Stop();
        Console.WriteLine(\`RefPoint: \${sw.ElapsedMilliseconds}ms\`); // ~50-200ms
        
        // Reference type is much slower due to:
        // 1. Heap allocation overhead
        // 2. GC overhead
        // 3. Indirection (following pointers)
    }
}

// Boxing - value type becomes reference type
public void BoxingDemo()
{
    // Value type
    int value = 42;
    
    // Boxing - creates heap object
    object boxed = value; // Value copied to heap
    
    // Unboxing - extract value
    int unboxed = (int)boxed; // Value copied back to stack
    
    // Performance cost of boxing/unboxing
    for (int i = 0; i < 1_000_000; i++)
    {
        object box = i; // Box: copy to heap
        int unbox = (int)box; // Unbox: copy to stack
    }
    // Much slower than working with pure value types
}

// Guidelines:
// Use Reference Types (classes) for:
// - Large objects
// - Long-lived objects
// - Objects with inheritance
// - When identity matters
// - Most domain objects

// Use Value Types (structs) for:
// - Small immutable values (Point, Color, Size)
// - Performance-critical code
// - Stack allocation scenario
// - Avoid boxing overhead
// - Keep structs small (<16 bytes)

public struct SmallValue
{
    public int X, Y; // 8 bytes - good
}

public struct BadValue
{
    public byte[] data; // Large reference - bad!
    public string name;
}

// Disposal with both types
public class ManagedResource : IDisposable
{
    private IntPtr handle;
    
    public void Dispose()
    {
        // Reference type - GC will call finalizer if not disposed
        // Value type can't implement finalizer
    }
}

public struct ValueWithNativeResource
{
    // CAN implement IDisposable but unusual
    private IntPtr handle;
    
    public void Dispose()
    {
        // Must be called explicitly - struct on stack won't auto-dispose!
    }
}`,
        },
      ],
    },
    {
      id: "q11",
      question: "What is the Stack and Heap? How do they relate to garbage collection?",
      answer:
        "Stack stores value types and references (pointers), allocated/freed automatically when scope ends. Heap stores objects (reference types), memory managed by GC. Stack is faster and doesn't need GC. Heap is flexible but requires GC.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Memory Layout
public class MemoryDemo
{
    public void Demonstrate()
    {
        // STACK allocation
        int x = 5;                        // Stack: int value 5
        string name = "Alice";            // Stack: reference/pointer
                                           // Heap: "Alice" string object
        
        var person = new Person();        // Stack: reference/pointer
                                          // Heap: Person object
        person.Age = 30;                  // Heap: Age field set to 30
        
        // STACK LAYOUT:
        // [Return Address]
        // [x = 5]
        // [name = pointer to "Alice"]
        // [person = pointer to Person object]
        
        // HEAP LAYOUT:
        // [String object: "Alice"]
        // [Person object: Age=30, ...]
        
        NestedMethod();
    }
    
    private void NestedMethod()
    {
        // New stack frame created
        int y = 10;
        var local = new byte[1024];
    } // Stack frame destroyed, y and local pointer freed
      // Byte array might be collected later by GC
}

// Stack behavior - automatic
public void StackExample()
{
    int a = 1;
    {
        int b = 2; // New scope
        int c = 3;
    } // b and c freed automatically when scope ends
    // a still alive
} // a freed when method ends

// Heap behavior - GC managed
public void HeapExample()
{
    var obj1 = new byte[1_000_000]; // Heap: 1MB allocated
    var obj2 = new byte[1_000_000]; // Heap: 1MB allocated
    
    obj1 = null; // Reference removed
    // 1MB on heap is now unreachable
    // GC will free it eventually (maybe in milliseconds or seconds)
    
    obj2 = null; // Another 1MB unreachable
} // Method ends, both freed by GC

// Stack overflow
public void StackOverflow()
{
    int[] huge = new int[1_000_000]; // 4MB stack - might overflow!
    // Large value types on stack are bad
    
    // Better approach
    var huge2 = new int[1_000_000]; // Heap - no problem
}

// Escape analysis (modern .NET)
public void ModernOptimization()
{
    // Small objects might be allocated on stack (escape analysis)
    var point = new Point { X = 1, Y = 2 }; // Might be stack!
    
    // The JIT compiler analyzes: does this escape the method?
    // If Point never escapes, allocate on stack instead of heap
    // Avoids GC overhead!
}

// Stack trace - shows stack frames
public void Demonstration()
{
    Method1();
}

private void Method1()
{
    // Stack: [Return to Demonstrate]
    // Stack: [Method1 frame]
    Method2();
}

private void Method2()
{
    // Stack: [Return to Method1]
    // Stack: [Method2 frame]
    
    var trace = Environment.StackTrace;
    // Shows:
    // - Method2 (current)
    // - Method1 (called from)
    // - Demonstrate (called from)
}

// Key differences:
// Stack:
// - Fast allocation (just increment pointer)
// - Automatic deallocation
// - Limited size
// - LIFO order
// - No GC needed

// Heap:
// - Slower allocation
// - GC overhead
// - Large capacity
// - Any order
// - GC manages lifecycle`,
        },
      ],
    },
    {
      id: "q12",
      question: "How can you monitor and optimize garbage collection? What tools and techniques are available?",
      answer:
        "Use GC class for statistics, profilers like Perfview and dotTrace, and Event Tracing for Windows (ETW). Monitor Gen 2 collections and pause times. Optimize by reducing allocations, using object pools, and tuning GC modes.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Diagnostics;

// 1. Monitor GC Statistics
public class GCMonitoring
{
    public void MonitorGC()
    {
        // Get total memory before
        long before = GC.GetTotalMemory(false);
        
        // Do work
        DoWork();
        
        // Get total memory after
        long after = GC.GetTotalMemory(false);
        Console.WriteLine(\`Memory used: \${(after - before) / 1024}KB\`);
        
        // Get collection counts
        Console.WriteLine(\`Gen 0 Collections: \${GC.CollectionCount(0)}\`);
        Console.WriteLine(\`Gen 1 Collections: \${GC.CollectionCount(1)}\`);
        Console.WriteLine(\`Gen 2 Collections: \${GC.CollectionCount(2)}\`);
    }
    
    // Monitor individual object
    public void MonitorObject()
    {
        var obj = new byte[1024];
        
        Console.WriteLine(\`Generation: \${GC.GetGeneration(obj)}\`);
        
        int gen = GC.GetGeneration(obj);
        Console.WriteLine(\`In Gen \${gen}\`);
    }
    
    private void DoWork()
    {
        var list = new List<byte[]>();
        for (int i = 0; i < 1000; i++)
        {
            list.Add(new byte[1024]);
        }
    }
}

// 2. Use GC Modes
public class GCModes
{
    public void DemoGCModes()
    {
        // Workstation mode (default) - low latency
        // Server mode - high throughput
        
        // Check GC info
        var info = GCSettings.IsServerGC;
        Console.WriteLine(\`Server GC: \${info}\`);
        
        // Configure latency
        // GCLatencyMode.Interactive (default)
        // GCLatencyMode.Batch (high throughput)
        // GCLatencyMode.SustainedLowLatency
        
        var oldMode = GCSettings.LatencyMode;
        GCSettings.LatencyMode = GCLatencyMode.SustainedLowLatency;
        
        // Critical section with minimal GC pauses
        CriticalGameLoop();
        
        GCSettings.LatencyMode = oldMode;
    }
    
    private void CriticalGameLoop()
    {
        for (int i = 0; i < 100; i++)
        {
            // Frame rendering with minimal GC interruption
        }
    }
}

// 3. Object Pool Pattern - reduce allocations
public class ObjectPool<T> where T : class, new()
{
    private Stack<T> pool = new();
    private int maxPoolSize = 100;
    
    public T Rent()
    {
        return pool.Count > 0 ? pool.Pop() : new T();
    }
    
    public void Return(T obj)
    {
        if (pool.Count < maxPoolSize)
        {
            (obj as IPoolable)?.Reset();
            pool.Push(obj);
        }
    }
}

public interface IPoolable
{
    void Reset();
}

// 4. Reduce allocations in hot paths
public class AllocationOptimization
{
    // Bad - allocation per loop iteration
    public void BadAllocations()
    {
        var results = new List<string>();
        for (int i = 0; i < 1000; i++)
        {
            var text = new string('x', 100); // Allocation each time!
            results.Add(text);
        }
    }
    
    // Better - reuse buffer
    public void BetterAllocations()
    {
        var buffer = new StringBuilder();
        var results = new List<string>();
        
        for (int i = 0; i < 1000; i++)
        {
            buffer.Clear();
            buffer.Append('x', 100); // Reuses buffer
            results.Add(buffer.ToString());
        }
    }
    
    // Use Span<T> and stackalloc for small arrays
    public void StackAllocation()
    {
        Span<int> buffer = stackalloc int[10]; // Stack allocation!
        for (int i = 0; i < buffer.Length; i++)
        {
            buffer[i] = i;
        }
        // No heap allocation, no GC
    }
}

// 5. Profiler commands
public class ProfilingHelpers
{
    public void ProfileMethod(Action method)
    {
        GC.Collect();
        GC.WaitForPendingFinalizers();
        GC.Collect();
        
        long before = GC.GetTotalMemory(false);
        int gen0Before = GC.CollectionCount(0);
        int gen2Before = GC.CollectionCount(2);
        
        var sw = Stopwatch.StartNew();
        method();
        sw.Stop();
        
        long after = GC.GetTotalMemory(false);
        int gen0After = GC.CollectionCount(0);
        int gen2After = GC.CollectionCount(2);
        
        Console.WriteLine(\`Time: \${sw.ElapsedMilliseconds}ms\`);
        Console.WriteLine(\`Memory: \${(after - before) / 1024}KB\`);
        Console.WriteLine(\`Gen 0 Collections: \${gen0After - gen0Before}\`);
        Console.WriteLine(\`Gen 2 Collections: \${gen2After - gen2Before}\`);
    }
}

// 6. Configure for low latency (gaming, real-time)
public void ConfigureLowLatency()
{
    // In .csproj or programmatically:
    // <PropertyGroup>
    //   <TieredCompilationQuickJit>true</TieredCompilationQuickJit>
    //   <TieredCompilationQuickJitForLoops>true</TieredCompilationQuickJitForLoops>
    //   <ReadyToRun>false</ReadyToRun>
    // </PropertyGroup>
    
    GCSettings.IsGCWorkingSetQuotaEnabled = true; // Respect memory limits
    GCSettings.LatencyMode = GCLatencyMode.SustainedLowLatency;
}

// Common optimization techniques:
// 1. Use stackalloc for small buffers
// 2. Implement object pooling for frequently allocated objects
// 3. Use value types for small immutable values
// 4. Avoid boxing
// 5. Reuse collections instead of creating new ones
// 6. Use ArrayPool<T> for temporary arrays
// 7. Profile to find hotspots
// 8. Configure GC mode appropriately (Workstation vs Server)`,
        },
      ],
    },
  ],
};
