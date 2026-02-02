import type { Topic } from "../../../types";

export const csharpCollectionsTopic: Topic = {
  id: "csharp-collections",
  name: "Collections",
  questions: [
    {
      id: "q1",
      question: "What are collections in C# and what are the main types?",
      answer:
        "Collections are data structures that store and manage groups of objects. Main types: List<T> (ordered, indexable), Dictionary<K,V> (key-value pairs), HashSet<T> (unique items), Queue<T> (FIFO), Stack<T> (LIFO), LinkedList<T> (doubly-linked). Located in System.Collections.Generic namespace.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;

// 1. List<T> - Dynamic array, ordered
var list = new List<int> { 1, 2, 3 };
list.Add(4);
list.Remove(2);
Console.WriteLine(list[0]); // Access by index: 1

// 2. Dictionary<K,V> - Key-value pairs
var dict = new Dictionary<string, int>
{
    { "Alice", 25 },
    { "Bob", 30 }
};
dict["Charlie"] = 28;
var age = dict["Alice"]; // 25

// 3. HashSet<T> - Unique items only
var set = new HashSet<int> { 1, 2, 3, 2 }; // 2 ignored
set.Add(4);
bool contains = set.Contains(2); // true

// 4. Queue<T> - FIFO (First In, First Out)
var queue = new Queue<string>();
queue.Enqueue("First");
queue.Enqueue("Second");
var first = queue.Dequeue(); // "First"

// 5. Stack<T> - LIFO (Last In, First Out)
var stack = new Stack<string>();
stack.Push("First");
stack.Push("Second");
var last = stack.Pop(); // "Second"

// 6. LinkedList<T> - Doubly-linked nodes
var linked = new LinkedList<int>();
linked.AddLast(1);
linked.AddLast(2);
var node = linked.First; // Access nodes

// 7. SortedDictionary<K,V> - Sorted key-value pairs
var sorted = new SortedDictionary<string, int>
{
    { "Charlie", 28 },
    { "Alice", 25 }, // Auto-sorted by key
    { "Bob", 30 }
};

// 8. Tuple - Fixed size, multiple types
var tuple = Tuple.Create(1, "Alice", 25);
Console.WriteLine(tuple.Item1); // 1`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the difference between IEnumerable, ICollection, and IList interfaces?",
      answer:
        "IEnumerable provides iteration (foreach). ICollection adds Count, Add, Remove, Contains. IList adds indexing ([]). Each builds on the previous one. IEnumerable is most basic, IList most feature-rich. Choose based on what operations you need.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;

// IEnumerable - Only iteration
public void ProcessEnumerable(IEnumerable<int> items)
{
    foreach (var item in items) // Only operation available
    {
        Console.WriteLine(item);
    }
    // Can't: access by index, count, add, remove
}

// ICollection - Add iteration + mutation + count
public void ProcessCollection(ICollection<int> items)
{
    var count = items.Count; // Has Count
    items.Add(5); // Can add
    items.Remove(3); // Can remove
    bool has = items.Contains(2); // Can check
    
    foreach (var item in items) // Still iterable
    {
        Console.WriteLine(item);
    }
    // Can't: access by index
}

// IList - Add indexing to everything
public void ProcessList(IList<int> items)
{
    var item = items[0]; // Access by index
    items[0] = 10; // Modify by index
    
    var count = items.Count;
    items.Add(5);
    items.Remove(3);
    
    items.Insert(1, 7); // Insert at index
    items.RemoveAt(2); // Remove by index
    
    var index = items.IndexOf(5); // Find index
    
    foreach (var i in items)
    {
        Console.WriteLine(i);
    }
}

// Hierarchy:
// IEnumerable
//     ↓ (adds Count, Add, Remove, Contains)
// ICollection<T>
//     ↓ (adds indexing)
// IList<T>

// Practical example
public void DemonstrateDifferences()
{
    var list = new List<int> { 1, 2, 3 };
    
    // Can use as IEnumerable
    IEnumerable<int> enumerable = list;
    ProcessEnumerable(enumerable);
    
    // Can use as ICollection
    ICollection<int> collection = list;
    ProcessCollection(collection);
    
    // Can use as IList
    IList<int> ilist = list;
    ProcessList(ilist);
}

// Choosing which to return from methods
public IEnumerable<User> GetActiveUsers() // Most restrictive - good for LINQ
{
    return users.Where(u => u.IsActive);
}

public ICollection<User> GetAllUsers() // Can modify collection
{
    return users;
}

public IList<User> GetUserList() // Full access
{
    return users as IList<User>;
}

// Best practice: Return most restrictive interface
// that meets your needs`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the difference between List<T> and Array? When to use each?",
      answer:
        "Array is fixed-size, created once. List<T> is dynamic, grows as needed. Array is faster for fixed-size, uses less memory. List<T> is flexible, supports Add/Remove. Use Array when size is known and won't change, use List<T> for flexible collections.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;
using System.Diagnostics;

// Array - Fixed size
int[] array = new int[10]; // Size 10, fixed
array[0] = 1;
array[1] = 2;
// array[10] = 3; // IndexOutOfRangeException

// List<T> - Dynamic size
var list = new List<int> { 1, 2 };
list.Add(3); // Grows automatically
list.Add(4);

// Performance comparison
public void PerformanceComparison()
{
    const int count = 1_000_000;
    
    // Array - faster for fixed size
    var sw = Stopwatch.StartNew();
    int[] array = new int[count];
    for (int i = 0; i < count; i++)
    {
        array[i] = i; // Direct access
    }
    sw.Stop();
    Console.WriteLine(\`Array: \${sw.ElapsedMilliseconds}ms\`); // ~1-5ms
    
    // List - dynamic but slightly slower
    sw.Restart();
    var list = new List<int>(count); // Pre-allocate capacity
    for (int i = 0; i < count; i++)
    {
        list.Add(i);
    }
    sw.Stop();
    Console.WriteLine(\`List: \${sw.ElapsedMilliseconds}ms\`); // ~5-15ms
    
    // List without pre-allocated capacity - even slower
    sw.Restart();
    var list2 = new List<int>();
    for (int i = 0; i < count; i++)
    {
        list2.Add(i); // Reallocates when full
    }
    sw.Stop();
    Console.WriteLine(\`List (no capacity): \${sw.ElapsedMilliseconds}ms\`); // ~20-50ms
}

// Memory comparison
public void MemoryComparison()
{
    // Array uses contiguous memory
    int[] array = new int[100]; // 400 bytes + object header
    
    // List uses internal array + size tracking
    var list = new List<int>(100);
    // Uses more memory due to wrapper overhead
    // But grows efficiently (usually doubles capacity)
}

// Key differences:
// Feature          Array                List<T>
// Size             Fixed at creation    Dynamic
// Speed            Fastest              Very fast
// Memory           Minimal              More overhead
// Resize           Not possible         Grows automatically
// API              Basic                Rich (Add, Remove, etc)
// Type safety      Generic (if T[])     Generic
// Performance      O(1) access          O(1) access

// When to use Array:
// - Size is known and fixed
// - Performance critical
// - Need minimal memory overhead
// - Working with existing code expecting arrays

public void ProcessFixedData(int[] data)
{
    // Size won't change, array is perfect
    for (int i = 0; i < data.Length; i++)
    {
        data[i] *= 2;
    }
}

// When to use List<T>:
// - Size changes dynamically
// - Need Add/Remove/Insert operations
// - Working with LINQ
// - Flexibility is important

public void ProcessDynamicData(IEnumerable<int> numbers)
{
    var list = new List<int>(numbers); // Convert to List for manipulation
    list.Add(999); // Add operations
    list.RemoveAll(n => n < 0); // Rich API
}

// Converting between them
int[] array = new int[] { 1, 2, 3 };
var list = new List<int>(array); // Array to List
array = list.ToArray(); // List to Array

// Array initialization
int[] arr1 = new int[5]; // Default values (0)
int[] arr2 = new[] { 1, 2, 3 }; // Array initializer
int[] arr3 = { 1, 2, 3 }; // Also works

// List initialization
var list1 = new List<int>(); // Empty
var list2 = new List<int>(10); // Capacity 10
var list3 = new List<int> { 1, 2, 3 }; // With values`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the difference between Dictionary, Hashtable, and SortedDictionary?",
      answer:
        "Dictionary<K,V> is generic, fast, unordered. Hashtable is non-generic, slower, legacy. SortedDictionary keeps keys sorted. Use Dictionary for most cases (type-safe, fast), Hashtable rarely (backward compatibility), SortedDictionary when you need sorted order.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections;
using System.Collections.Generic;

// Dictionary<K,V> - Generic, Fast (PREFERRED)
var dict = new Dictionary<string, int>
{
    { "Alice", 25 },
    { "Bob", 30 },
    { "Charlie", 28 }
};

dict["David"] = 32;
var age = dict["Alice"];
bool has = dict.ContainsKey("Bob");
dict.TryGetValue("Alice", out int aliceAge);

// Hashtable - Non-generic, legacy (AVOID)
Hashtable hashtable = new Hashtable
{
    { "Alice", 25 },
    { "Bob", 30 }
};

hashtable["David"] = 32;
var age2 = (int)hashtable["Alice"]; // Requires casting!
bool has2 = hashtable.ContainsKey("Bob");

// SortedDictionary - Ordered by key
var sorted = new SortedDictionary<string, int>
{
    { "Charlie", 28 },
    { "Alice", 25 },
    { "Bob", 30 }
};

// Iteration order: Alice, Bob, Charlie (sorted)
foreach (var kvp in sorted)
{
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}

// Comparison
// Feature              Dictionary   Hashtable   SortedDictionary
// Type-safe            Yes          No          Yes
// Performance          Fast         Slow        Slow (maintains order)
// Order                Unordered    Unordered   Sorted by key
// Boxing               No           Yes         No
// Thread-safe          No           Yes         No
// Null keys            No           Yes         No
// Generics             Yes          No          Yes

public void DemonstrateDifferences()
{
    // Dictionary is fastest and type-safe
    var dict = new Dictionary<string, int>();
    dict["Alice"] = 25; // Type-safe
    int age = dict["Alice"]; // No casting needed
    
    // Hashtable requires casting and boxing
    var hashtable = new Hashtable();
    hashtable["Alice"] = 25; // Boxing
    int age2 = (int)hashtable["Alice"]; // Casting required!
    
    // SortedDictionary maintains order
    var sorted = new SortedDictionary<int, string>();
    sorted[3] = "Third";
    sorted[1] = "First";
    sorted[2] = "Second";
    
    // Iteration: First, Second, Third (sorted order)
    foreach (var item in sorted)
    {
        Console.WriteLine(item.Value);
    }
}

// Performance benchmark
public void PerformanceBench()
{
    const int iterations = 1_000_000;
    
    // Dictionary - fastest
    var sw = Stopwatch.StartNew();
    var dict = new Dictionary<string, int>();
    for (int i = 0; i < iterations; i++)
    {
        dict[$"Key{i}"] = i;
    }
    sw.Stop();
    Console.WriteLine($"Dictionary: {sw.ElapsedMilliseconds}ms");
    
    // Hashtable - slower
    sw.Restart();
    var hashtable = new Hashtable();
    for (int i = 0; i < iterations; i++)
    {
        hashtable[$"Key{i}"] = i;
    }
    sw.Stop();
    Console.WriteLine($"Hashtable: {sw.ElapsedMilliseconds}ms");
    
    // SortedDictionary - slowest (maintains order)
    sw.Restart();
    var sorted = new SortedDictionary<string, int>();
    for (int i = 0; i < iterations; i++)
    {
        sorted[$"Key{i}"] = i;
    }
    sw.Stop();
    Console.WriteLine($"SortedDictionary: {sw.ElapsedMilliseconds}ms");
}

// When to use each:
// Dictionary - 99% of cases (fast, type-safe)
public void ModernApproach()
{
    var dict = new Dictionary<string, User>();
    dict["alice"] = new User { Name = "Alice" };
}

// Hashtable - Legacy code compatibility only
public void LegacyApproach()
{
    var ht = new Hashtable();
    ht["alice"] = new User { Name = "Alice" };
}

// SortedDictionary - When you need sorted order
public void SortedApproach()
{
    var sorted = new SortedDictionary<string, decimal>();
    sorted["Banana"] = 0.5m;
    sorted["Apple"] = 0.8m;
    // Iteration is always in sorted order: Apple, Banana
}`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the difference between HashSet and SortedSet? When to use each?",
      answer:
        "HashSet is unordered, fast, no duplicates. SortedSet is ordered, slower, no duplicates. HashSet is O(1) for add/remove/lookup. SortedSet is O(log n). Use HashSet for fast membership testing, SortedSet when you need sorted order.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;

// HashSet<T> - Fast, unordered, no duplicates
var hashSet = new HashSet<int> { 3, 1, 4, 1, 5 }; // Duplicates ignored
Console.WriteLine(hashSet.Count); // 4 (not 5)

hashSet.Add(2);
bool has = hashSet.Contains(3); // O(1) - very fast
hashSet.Remove(1);

// Iteration order is unpredictable
foreach (var item in hashSet)
{
    Console.WriteLine(item); // Order not guaranteed
}

// SortedSet<T> - Ordered, no duplicates
var sortedSet = new SortedSet<int> { 3, 1, 4, 1, 5 };
Console.WriteLine(sortedSet.Count); // 4

sortedSet.Add(2);
bool has2 = sortedSet.Contains(3); // O(log n)
sortedSet.Remove(1);

// Iteration order is always sorted
foreach (var item in sortedSet)
{
    Console.WriteLine(item); // 2, 3, 4, 5 (sorted)
}

// Comparison
// Feature              HashSet      SortedSet
// Order                Unordered    Sorted
// Add/Remove/Lookup    O(1)         O(log n)
// Space                Less         More
// Iteration speed      Fast         Fast
// Range queries        No           Yes
// Min/Max              No           Yes (free)
// Memory               Minimal      More overhead

public void DemonstrateDifferences()
{
    // HashSet - Fast for membership testing
    var users = new HashSet<string> { "Alice", "Bob", "Charlie" };
    
    if (users.Contains("Alice")) // O(1) - instant
    {
        Console.WriteLine("User exists");
    }
}

// Unique numbers example
public void FindUniqueNumbers()
{
    int[] numbers = { 1, 2, 2, 3, 3, 3, 4, 4, 4, 4 };
    
    // HashSet removes duplicates automatically
    var unique = new HashSet<int>(numbers);
    Console.WriteLine(unique.Count); // 4
}

// Set operations
public void SetOperations()
{
    var set1 = new HashSet<int> { 1, 2, 3, 4, 5 };
    var set2 = new HashSet<int> { 4, 5, 6, 7, 8 };
    
    // Union
    set1.UnionWith(set2); // { 1, 2, 3, 4, 5, 6, 7, 8 }
    
    // Intersection
    var result = new HashSet<int> { 1, 2, 3, 4, 5 };
    result.IntersectWith(set2); // { 4, 5 }
    
    // Difference
    result = new HashSet<int> { 1, 2, 3, 4, 5 };
    result.ExceptWith(set2); // { 1, 2, 3 }
    
    // Symmetric difference
    result = new HashSet<int> { 1, 2, 3, 4, 5 };
    result.SymmetricExceptWith(set2); // { 1, 2, 3, 6, 7, 8 }
}

// SortedSet - Range queries
public void RangeQueries()
{
    var scores = new SortedSet<int> { 10, 20, 30, 40, 50 };
    
    // Get range of values
    var range = scores.GetViewBetween(20, 40); // { 20, 30, 40 }
    
    // Get elements less than a value
    var lessThan30 = scores.Where(x => x < 30); // { 10, 20 }
    
    // Min and Max
    var min = scores.Min; // 10
    var max = scores.Max; // 50
}

// Performance comparison
public void PerformanceBench()
{
    const int iterations = 100_000;
    var numbers = Enumerable.Range(0, iterations).ToArray();
    
    // HashSet - much faster for lookups
    var sw = Stopwatch.StartNew();
    var hashSet = new HashSet<int>();
    foreach (var n in numbers)
    {
        hashSet.Add(n);
        hashSet.Contains(n);
    }
    sw.Stop();
    Console.WriteLine(\`HashSet: \${sw.ElapsedMilliseconds}ms\`);
    
    // SortedSet - slower but maintains order
    sw.Restart();
    var sortedSet = new SortedSet<int>();
    foreach (var n in numbers)
    {
        sortedSet.Add(n);
        sortedSet.Contains(n);
    }
    sw.Stop();
    Console.WriteLine(\`SortedSet: \${sw.ElapsedMilliseconds}ms\`);
}

// When to use each:
// HashSet - Checking membership, removing duplicates
public void FastMembership()
{
    var bannedUsers = new HashSet<string> { "spammer1", "spammer2" };
    if (!bannedUsers.Contains(currentUser))
    {
        AllowAccess();
    }
}

// SortedSet - Need order or range queries
public void NeedSorted()
{
    var highScores = new SortedSet<int>();
    highScores.Add(100);
    highScores.Add(90);
    
    var topScores = highScores.GetViewBetween(90, 100);
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "What are Queue and Stack? Give practical examples of when to use each.",
      answer:
        "Queue<T> is FIFO (First In, First Out) - use for task queues, printer queues, BFS. Stack<T> is LIFO (Last In, First Out) - use for undo/redo, function call stacks, DFS. Queue has Enqueue/Dequeue, Stack has Push/Pop.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;

// Queue<T> - FIFO (First In, First Out)
var queue = new Queue<string>();
queue.Enqueue("First request");
queue.Enqueue("Second request");
queue.Enqueue("Third request");

var first = queue.Dequeue(); // "First request"
var second = queue.Dequeue(); // "Second request"

// Stack<T> - LIFO (Last In, First Out)
var stack = new Stack<string>();
stack.Push("First action");
stack.Push("Second action");
stack.Push("Third action");

var last = stack.Pop(); // "Third action"
var previous = stack.Pop(); // "Second action"

// Practical: Task Queue
public class TaskQueue
{
    private Queue<Task> tasks = new();
    
    public void AddTask(Task task)
    {
        tasks.Enqueue(task); // Add to end
    }
    
    public Task ProcessNextTask()
    {
        if (tasks.Count > 0)
            return tasks.Dequeue(); // Process first task
        return null;
    }
}

// Usage
var queue = new TaskQueue();
queue.AddTask(new Task { Name = "Print document" });
queue.AddTask(new Task { Name = "Send email" });
queue.AddTask(new Task { Name = "Backup files" });

// Process in order: Print, Send, Backup
var task1 = queue.ProcessNextTask(); // Print
var task2 = queue.ProcessNextTask(); // Send
var task3 = queue.ProcessNextTask(); // Backup

// Practical: Undo/Redo with Stack
public class UndoRedo
{
    private Stack<Action> undoStack = new();
    private Stack<Action> redoStack = new();
    
    public void DoAction(Action action, Action undoAction)
    {
        action();
        undoStack.Push(undoAction);
        redoStack.Clear(); // Clear redo on new action
    }
    
    public void Undo()
    {
        if (undoStack.Count > 0)
        {
            var action = undoStack.Pop();
            action();
            // Push corresponding redo action
        }
    }
    
    public void Redo()
    {
        if (redoStack.Count > 0)
        {
            var action = redoStack.Pop();
            action();
        }
    }
}

// Usage
var editor = new UndoRedo();
editor.DoAction(
    () => Console.WriteLine("Type: Hello"),
    () => Console.WriteLine("Delete: Hello")
);

editor.DoAction(
    () => Console.WriteLine("Type: World"),
    () => Console.WriteLine("Delete: World")
);

editor.Undo(); // Delete: World
editor.Undo(); // Delete: Hello
editor.Redo(); // Type: Hello

// Practical: Breadth-First Search with Queue
public void BreadthFirstSearch(Node root)
{
    var queue = new Queue<Node>();
    var visited = new HashSet<Node>();
    
    queue.Enqueue(root);
    visited.Add(root);
    
    while (queue.Count > 0)
    {
        var node = queue.Dequeue();
        Console.WriteLine(node.Value);
        
        foreach (var neighbor in node.Neighbors)
        {
            if (!visited.Contains(neighbor))
            {
                queue.Enqueue(neighbor);
                visited.Add(neighbor);
            }
        }
    }
}

// Practical: Depth-First Search with Stack
public void DepthFirstSearch(Node root)
{
    var stack = new Stack<Node>();
    var visited = new HashSet<Node>();
    
    stack.Push(root);
    
    while (stack.Count > 0)
    {
        var node = stack.Pop();
        if (visited.Contains(node))
            continue;
        
        visited.Add(node);
        Console.WriteLine(node.Value);
        
        foreach (var neighbor in node.Neighbors)
        {
            if (!visited.Contains(neighbor))
                stack.Push(neighbor);
        }
    }
}

// Queue methods
public void QueueOperations()
{
    var queue = new Queue<int>();
    
    queue.Enqueue(1); // Add to back
    queue.Enqueue(2);
    queue.Enqueue(3);
    
    var front = queue.Peek(); // 1 (without removing)
    var first = queue.Dequeue(); // 1 (with removing)
    
    bool has = queue.Contains(2);
    var count = queue.Count;
}

// Stack methods
public void StackOperations()
{
    var stack = new Stack<int>();
    
    stack.Push(1); // Add to top
    stack.Push(2);
    stack.Push(3);
    
    var top = stack.Peek(); // 3 (without removing)
    var last = stack.Pop(); // 3 (with removing)
    
    bool has = stack.Contains(2);
    var count = stack.Count;
}

// Comparison
// Operation    Queue        Stack
// Add          Enqueue      Push
// Remove       Dequeue      Pop
// Peek         Peek         Peek
// Order        FIFO         LIFO
// Use case     Tasks        Undo/DFS

// When to use Queue:
// - Job scheduling
// - BFS algorithms
// - Printer queues
// - Message processing
// - Buffering data

// When to use Stack:
// - Undo/Redo functionality
// - DFS algorithms
// - Expression evaluation
// - Function call stack
// - Backtracking problems`,
        },
      ],
    },
    {
      id: "q7",
      question: "What is LinkedList<T> and when would you use it instead of List<T>?",
      answer:
        "LinkedList<T> is a doubly-linked list with nodes. Use when you need efficient insertions/deletions in the middle. List<T> is better for random access. LinkedList has O(1) insert/delete at known position, but O(n) random access. Use LinkedList rarely, List<T> is usually better.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;

// LinkedList<T> - Doubly-linked nodes
var linked = new LinkedList<int>();

var node1 = linked.AddLast(10); // Add to end
var node2 = linked.AddLast(20);
var node3 = linked.AddLast(30);

// Efficient insertion in the middle
linked.AddAfter(node1, 15); // Insert between 10 and 20
linked.AddBefore(node3, 25); // Insert before 30

// Result: 10 -> 15 -> 20 -> 25 -> 30

// Access nodes
var first = linked.First; // LinkedListNode<int>
var last = linked.Last;

// Traverse
foreach (var item in linked)
{
    Console.WriteLine(item); // 10, 15, 20, 25, 30
}

// Remove by node reference (O(1))
linked.Remove(node2); // Very fast - O(1)

// Find a value
var foundNode = linked.Find(20); // O(n)

// Comparison with List
// Operation            LinkedList   List<T>
// Add to end          O(1)         O(1)
// Add to start        O(1)         O(n) - shifts elements
// Insert at index     O(n)         O(n) - shifts elements
// Remove by node      O(1)         O(n)
// Random access [i]   O(n)         O(1)
// Memory              More         Less
// Cache friendly      No           Yes

public class ComparisonDemo()
{
    public void InsertionPerformance()
    {
        const int count = 10_000;
        
        // List - slow at inserting in middle
        var sw = Stopwatch.StartNew();
        var list = new List<int>();
        for (int i = 0; i < count; i++)
        {
            list.Insert(0, i); // Insert at start - O(n)
        }
        sw.Stop();
        Console.WriteLine(\`List insert at start: \${sw.ElapsedMilliseconds}ms\`);
        
        // LinkedList - fast at inserting
        sw.Restart();
        var linked = new LinkedList<int>();
        LinkedListNode<int> node = null;
        for (int i = 0; i < count; i++)
        {
            node = linked.AddFirst(i); // O(1)
        }
        sw.Stop();
        Console.WriteLine(\`LinkedList insert at start: \${sw.ElapsedMilliseconds}ms\`);
    }
    
    public void RandomAccessPerformance()
    {
        const int count = 10_000;
        var list = new List<int>(Enumerable.Range(0, count));
        var linked = new LinkedList<int>(Enumerable.Range(0, count));
        
        // List - fast random access
        var sw = Stopwatch.StartNew();
        for (int i = 0; i < count; i++)
        {
            var item = list[i]; // O(1)
        }
        sw.Stop();
        Console.WriteLine(\`List random access: \${sw.ElapsedMilliseconds}ms\`);
        
        // LinkedList - slow random access
        sw.Restart();
        for (int i = 0; i < count; i++)
        {
            var node = linked.First;
            for (int j = 0; j < i; j++)
                node = node.Next; // O(n)
        }
        sw.Stop();
        Console.WriteLine(\`LinkedList random access: \${sw.ElapsedMilliseconds}ms\`);
    }
}

// Practical: Circular Buffer with LinkedList
public class CircularBuffer<T>
{
    private LinkedList<T> buffer = new();
    private int maxSize;
    
    public CircularBuffer(int size)
    {
        maxSize = size;
    }
    
    public void Add(T item)
    {
        buffer.AddLast(item);
        
        // Remove oldest if exceeds max
        if (buffer.Count > maxSize)
            buffer.RemoveFirst(); // O(1) removal
    }
    
    public IEnumerable<T> GetAll()
    {
        return buffer;
    }
}

// Usage
var buffer = new CircularBuffer<int>(3);
buffer.Add(1);
buffer.Add(2);
buffer.Add(3);
buffer.Add(4); // Removes 1
buffer.Add(5); // Removes 2
// Buffer contains: 3, 4, 5

// Practical: LRU Cache with LinkedList
public class LRUCache<K, V>
{
    private Dictionary<K, LinkedListNode<(K key, V value)>> cache;
    private LinkedList<(K key, V value)> order;
    private int capacity;
    
    public LRUCache(int capacity)
    {
        this.capacity = capacity;
        cache = new Dictionary<K, LinkedListNode<(K, V)>>(capacity);
        order = new LinkedList<(K, V)>();
    }
    
    public void Put(K key, V value)
    {
        if (cache.ContainsKey(key))
        {
            // Remove old entry
            order.Remove(cache[key]);
        }
        else if (cache.Count >= capacity)
        {
            // Evict least recently used
            var lru = order.First;
            order.RemoveFirst();
            cache.Remove(lru.Value.key);
        }
        
        // Add new entry to end (most recently used)
        var node = order.AddLast((key, value));
        cache[key] = node;
    }
    
    public bool TryGet(K key, out V value)
    {
        if (!cache.ContainsKey(key))
        {
            value = default;
            return false;
        }
        
        // Move to end (mark as recently used)
        var node = cache[key];
        order.Remove(node);
        order.AddLast(node);
        
        value = node.Value.value;
        return true;
    }
}

// When to use LinkedList:
// 1. Frequent insertions/deletions in middle
var musicians = new LinkedList<string>();
musicians.AddLast("Alice");
var bob = musicians.AddLast("Bob");
var charlie = musicians.AddLast("Charlie");
musicians.AddAfter(bob, "Beatrice"); // Efficient

// 2. Circular buffers or queues
var ring = new LinkedList<int>();

// 3. Implementing other data structures
// (usually prefer built-in collections)

// When NOT to use LinkedList:
// - Need random access - use List<T>
// - Need fast iteration - use List<T>
// - Most general-purpose use - use List<T>

// Rule of thumb: Use List<T> 95% of the time,
// LinkedList<T> only when you specifically need
// efficient middle insertions/deletions`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is IEqualityComparer and when would you implement it?",
      answer:
        "IEqualityComparer defines how to compare objects for equality and hash them. Implement when default equality doesn't suit your needs. Use in HashSet, Dictionary, LINQ Distinct/GroupBy to customize comparison logic.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;
using System.Linq;

// Default comparison - uses reference equality for classes
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

var person1 = new Person { Name = "Alice", Age = 25 };
var person2 = new Person { Name = "Alice", Age = 25 };

Console.WriteLine(person1 == person2); // false (different references)

// Custom IEqualityComparer - compare by value
public class PersonNameComparer : IEqualityComparer<Person>
{
    public bool Equals(Person x, Person y)
    {
        if (x == null && y == null) return true;
        if (x == null || y == null) return false;
        return x.Name == y.Name; // Compare by name only
    }
    
    public int GetHashCode(Person obj)
    {
        return obj?.Name?.GetHashCode() ?? 0;
    }
}

// Custom comparer for age-based comparison
public class PersonAgeComparer : IEqualityComparer<Person>
{
    public bool Equals(Person x, Person y)
    {
        if (x == null && y == null) return true;
        if (x == null || y == null) return false;
        return x.Age == y.Age; // Compare by age
    }
    
    public int GetHashCode(Person obj)
    {
        return obj?.Age.GetHashCode() ?? 0;
    }
}

// Case-insensitive string comparer
public class CaseInsensitiveStringComparer : IEqualityComparer<string>
{
    public bool Equals(string x, string y)
    {
        return string.Equals(x, y, StringComparison.OrdinalIgnoreCase);
    }
    
    public int GetHashCode(string obj)
    {
        return obj?.ToLower().GetHashCode() ?? 0;
    }
}

public void DemonstrateCustomComparers()
{
    var people = new List<Person>
    {
        new Person { Name = "Alice", Age = 25 },
        new Person { Name = "Bob", Age = 30 },
        new Person { Name = "Alice", Age = 25 },
        new Person { Name = "Charlie", Age = 25 }
    };
    
    // Using custom comparer in HashSet
    var uniqueByName = new HashSet<Person>(people, new PersonNameComparer());
    Console.WriteLine(\`Unique by name: \${uniqueByName.Count}\`); // 3 (Alice, Bob, Charlie)
    
    var uniqueByAge = new HashSet<Person>(people, new PersonAgeComparer());
    Console.WriteLine(\`Unique by age: \${uniqueByAge.Count}\`); // 2 (age 25, age 30)
}

// Using with Dictionary
public void CustomComparerWithDictionary()
{
    var dict = new Dictionary<string, int>(new CaseInsensitiveStringComparer());
    
    dict["Alice"] = 25;
    dict["BOB"] = 30;
    dict["ALICE"] = 26; // Overwrites "Alice"
    
    Console.WriteLine(dict["alice"]); // 26 (case-insensitive)
}

// Using with LINQ Distinct
public void CustomComparerWithLinq()
{
    var people = new List<Person>
    {
        new Person { Name = "Alice", Age = 25 },
        new Person { Name = "alice", Age = 25 },
        new Person { Name = "Bob", Age = 30 }
    };
    
    // Remove duplicates using custom comparer
    var unique = people.Distinct(new PersonNameComparer()).ToList();
    Console.WriteLine($"Unique count: {unique.Count}"); // 2
}

// Using with GroupBy
public void CustomComparerWithGroupBy()
{
    var words = new[] { "Hello", "hello", "HELLO", "World", "world" };
    
    var groups = words.GroupBy(w => w, new CaseInsensitiveStringComparer());
    
    foreach (var group in groups)
    {
        Console.WriteLine($"{group.Key}: {group.Count()}");
        // hello: 3
        // world: 2
    }
}

// Important: GetHashCode and Equals must be consistent!
// If two objects are equal, they MUST have the same hash code
public class BadEqualityComparer : IEqualityComparer<int>
{
    public bool Equals(int x, int y) => x == y;
    
    public int GetHashCode(int obj)
    {
        return 42; // WRONG! Breaks HashSet/Dictionary
    }
}

// Correct implementation
public class GoodEqualityComparer : IEqualityComparer<int>
{
    public bool Equals(int x, int y)
    {
        return x == y;
    }
    
    public int GetHashCode(int obj)
    {
        return obj.GetHashCode(); // Must be consistent
    }
}

// Complex example: comparing objects by multiple fields
public class PersonFullComparer : IEqualityComparer<Person>
{
    public bool Equals(Person x, Person y)
    {
        if (x == null && y == null) return true;
        if (x == null || y == null) return false;
        return x.Name == y.Name && x.Age == y.Age;
    }
    
    public int GetHashCode(Person obj)
    {
        unchecked
        {
            int hash = 17;
            hash = hash * 31 + obj.Name?.GetHashCode() ?? 0;
            hash = hash * 31 + obj.Age.GetHashCode();
            return hash;
        }
    }
}

// Override Equals and GetHashCode on the class itself (preferred)
public class ImprovedPerson : IEquatable<ImprovedPerson>
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public bool Equals(ImprovedPerson other)
    {
        if (other == null) return false;
        return Name == other.Name && Age == other.Age;
    }
    
    public override bool Equals(object obj)
    {
        return Equals(obj as ImprovedPerson);
    }
    
    public override int GetHashCode()
    {
        unchecked
        {
            int hash = 17;
            hash = hash * 31 + Name?.GetHashCode() ?? 0;
            hash = hash * 31 + Age.GetHashCode();
            return hash;
        }
    }
}

// Usage
var person = new ImprovedPerson { Name = "Alice", Age = 25 };
var hashSet = new HashSet<ImprovedPerson> { person };
hashSet.Contains(new ImprovedPerson { Name = "Alice", Age = 25 }); // true!`,
        },
      ],
    },
    {
      id: "q9",
      question: "What is ConcurrentBag, ConcurrentDictionary, and other thread-safe collections?",
      answer:
        "Thread-safe collections from System.Collections.Concurrent allow safe concurrent access without external locking. Include ConcurrentBag, ConcurrentQueue, ConcurrentDictionary, ConcurrentStack. Use for multi-threaded scenarios instead of locking regular collections.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

// ConcurrentBag<T> - Unordered, thread-safe collection
var bag = new ConcurrentBag<int>();

Task.Run(() =>
{
    for (int i = 0; i < 100; i++)
    {
        bag.Add(i); // Thread-safe add
    }
});

Task.Run(() =>
{
    for (int i = 100; i < 200; i++)
    {
        bag.Add(i); // Thread-safe add
    }
});

// ConcurrentQueue<T> - Thread-safe FIFO queue
var queue = new ConcurrentQueue<string>();

Task.Run(() =>
{
    for (int i = 0; i < 50; i++)
    {
        queue.Enqueue($"Task {i}");
    }
});

Task.Run(() =>
{
    while (queue.TryDequeue(out var item))
    {
        Console.WriteLine($"Processing: {item}");
    }
});

// ConcurrentStack<T> - Thread-safe LIFO stack
var stack = new ConcurrentStack<int>();

for (int i = 0; i < 10; i++)
{
    stack.Push(i); // Thread-safe
}

if (stack.TryPop(out var value))
{
    Console.WriteLine(value); // Thread-safe pop
}

// ConcurrentDictionary<K,V> - Thread-safe dictionary
var dict = new ConcurrentDictionary<string, int>();

Task.Run(() =>
{
    for (int i = 0; i < 100; i++)
    {
        dict[$"Key{i}"] = i; // Thread-safe
    }
});

Task.Run(() =>
{
    foreach (var kvp in dict)
    {
        Console.WriteLine(kvp); // Thread-safe iteration
    }
});

// Thread-safe operations on ConcurrentDictionary
var dict2 = new ConcurrentDictionary<string, int>();

// AddOrUpdate - atomic operation
dict2.AddOrUpdate("count", 1, (key, oldValue) => oldValue + 1);
dict2.AddOrUpdate("count", 1, (key, oldValue) => oldValue + 1);
Console.WriteLine(dict2["count"]); // 2

// TryAdd - atomic operation
bool added = dict2.TryAdd("name", 123); // true if added
bool added2 = dict2.TryAdd("name", 456); // false (already exists)

// TryGetValue - atomic operation
if (dict2.TryGetValue("name", out int value))
{
    Console.WriteLine(value);
}

// Comparison: Bad vs Good for multithreading
// BAD - Using regular collection with lock
public class BadMultithreadedCounter
{
    private Dictionary<string, int> counts = new();
    private object lockObj = new();
    
    public void Increment(string key)
    {
        lock (lockObj) // Bottleneck!
        {
            if (counts.ContainsKey(key))
                counts[key]++;
            else
                counts[key] = 1;
        }
    }
}

// GOOD - Using ConcurrentDictionary
public class GoodMultithreadedCounter
{
    private ConcurrentDictionary<string, int> counts = new();
    
    public void Increment(string key)
    {
        counts.AddOrUpdate(key, 1, (k, v) => v + 1); // No lock!
    }
}

// Thread-safe collection summary
// Collection              Type      Operations
// ConcurrentBag           Unordered Add, Take
// ConcurrentQueue         FIFO      Enqueue, TryDequeue
// ConcurrentStack         LIFO      Push, TryPop
// ConcurrentDictionary    K-V       Add, TryAdd, AddOrUpdate

// Practical: Producer-Consumer with ConcurrentQueue
public class ProducerConsumer
{
    private ConcurrentQueue<int> queue = new();
    
    public void ProduceItems()
    {
        for (int i = 0; i < 100; i++)
        {
            queue.Enqueue(i);
            Thread.Sleep(10);
        }
    }
    
    public void ConsumeItems()
    {
        while (true)
        {
            if (queue.TryDequeue(out var item))
            {
                Console.WriteLine($"Processing: {item}");
            }
            else
            {
                Thread.Sleep(100); // Wait for items
            }
        }
    }
}

// Usage
var pc = new ProducerConsumer();
var producer = Task.Run(() => pc.ProduceItems());
var consumer = Task.Run(() => pc.ConsumeItems());

// Important: Thread-safe collections don't make your code thread-safe!
// Example of race condition even with ConcurrentDictionary
var concurrentDict = new ConcurrentDictionary<string, int>();

// This is NOT atomic!
if (!concurrentDict.ContainsKey("key"))
{
    // Another thread could add "key" here!
    concurrentDict["key"] = 1;
}

// Correct approach using AddOrUpdate
concurrentDict.AddOrUpdate("key", 1, (k, v) => v + 1); // Atomic

// Performance tips:
// - ConcurrentDictionary is slower than Dictionary + lock
// - Use when you have high contention
// - Use regular collections with lock for low contention
// - Minimize time spent in critical sections`,
        },
      ],
    },
    {
      id: "q10",
      question: "How do you choose between different collection types? What are the selection criteria?",
      answer:
        "Choose based on: (1) Access pattern (random vs sequential), (2) Frequency of insert/delete, (3) Order preservation, (4) Duplicates allowed, (5) Key-value pairs needed, (6) Thread-safety required. Use flowchart: Need random access? → List. Need key-value? → Dictionary. Need unique? → HashSet. Need ordered? → SortedDictionary.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;

// Selection Guide - Decision Tree

// 1. Do you need key-value pairs?
if (needKeyValue)
{
    // Yes -> Use Dictionary or SortedDictionary
    
    // Need sorted order?
    if (needSorted)
    {
        var dict = new SortedDictionary<string, int>(); // Sorted
    }
    else
    {
        var dict = new Dictionary<string, int>(); // Fast
    }
}
else
{
    // No -> Use List, HashSet, Queue, or Stack
    
    // Need random access by index?
    if (needRandomAccess)
    {
        var list = new List<int>(); // O(1) access
    }
    else
    {
        // Need unique items?
        if (needUnique)
        {
            // Need order?
            if (needOrder)
            {
                var set = new SortedSet<int>(); // Ordered, unique
            }
            else
            {
                var set = new HashSet<int>(); // Fast, unique
            }
        }
        else
        {
            // Need FIFO or LIFO?
            if (needFIFO)
            {
                var queue = new Queue<int>(); // FIFO
            }
            else if (needLIFO)
            {
                var stack = new Stack<int>(); // LIFO
            }
        }
    }
}

// Practical Scenarios

// Scenario 1: Cache user data by ID
// Need: Fast lookup by ID, key-value pairs
var userCache = new Dictionary<int, User>();
userCache[123] = new User { Name = "Alice" };
var user = userCache[123]; // Fast O(1)

// Scenario 2: Autocomplete suggestions
// Need: All matching items, starts with prefix
var autoComplete = new SortedSet<string>();
autoComplete.Add("Hello");
autoComplete.Add("Help");
var matches = autoComplete.Where(s => s.StartsWith("He"));

// Scenario 3: Process job queue
// Need: FIFO order, dequeue first item
var jobQueue = new Queue<Job>();
jobQueue.Enqueue(new Job { Name = "Task1" });
var nextJob = jobQueue.Dequeue();

// Scenario 4: Undo/Redo functionality
// Need: LIFO order for undo
var undoStack = new Stack<Action>();
undoStack.Push(() => Console.WriteLine("Undo action 1"));
var action = undoStack.Pop();

// Scenario 5: Remove duplicates
// Need: Unique items, fast membership testing
var uniqueUsers = new HashSet<User>(users, new UserIdComparer());

// Scenario 6: Sorted leaderboard
// Need: Sorted by score, range queries
var scores = new SortedSet<(string name, int score)>(
    new ScoreComparer());

// Scenario 7: Graph adjacency list
// Need: Multiple neighbors per node, order doesn't matter
var graph = new Dictionary<Node, List<Node>>();
graph[nodeA] = new List<Node> { nodeB, nodeC };

// Performance Comparison Table
Console.WriteLine("Collection Performance Comparison:");
Console.WriteLine("Operation          List    Dict    Hash    Queue   Stack");
Console.WriteLine("Add to end         O(1)    -       O(1)    O(1)    O(1)");
Console.WriteLine("Add to start       O(n)    -       -       -       -");
Console.WriteLine("Remove first       O(n)    -       -       O(1)    -");
Console.WriteLine("Remove last        O(1)    -       -       -       O(1)");
Console.WriteLine("Random access      O(1)    -       -       -       -");
Console.WriteLine("Contains           O(n)    O(1)    O(1)    O(n)    O(n)");
Console.WriteLine("Remove by value    O(n)    O(1)    O(1)    O(n)    O(n)");

// Selection Checklist
/*
List<T>:
✓ Need random access by index
✓ Maintain insertion order
✓ Mostly appending items
✓ Need Count, Insert, RemoveAt
✗ Large frequent insertions in middle
✗ Need unique items
✗ Need key-value association

Dictionary<K,V>:
✓ Need fast lookup by key
✓ Key-value association
✓ Most operations O(1)
✓ No required order
✗ Null keys
✗ Need sorted order
✗ Need unique values

HashSet<T>:
✓ Need unique items
✓ Need fast membership testing
✓ Don't care about order
✓ Set operations (Union, Intersect)
✗ Need sorted order
✗ Need random access
✗ Need to preserve duplicates

SortedSet<T>:
✓ Need unique items
✓ Need sorted order
✓ Need range queries
✗ Large frequent updates (slower)
✗ Need random access by index

Queue<T>:
✓ FIFO processing needed
✓ Task scheduling
✓ Fast operations
✗ Random access
✗ Need to access middle items

Stack<T>:
✓ LIFO processing needed
✓ Undo/Redo
✓ DFS algorithms
✗ Random access
✗ Need to access from bottom

LinkedList<T>:
✓ Frequent middle insertions
✓ Frequent removals by node
✗ Random access needed
✗ Memory overhead acceptable
✗ Large collections

SortedDictionary<K,V>:
✓ Need sorted key-value pairs
✓ Range queries on keys
✗ High performance needed
✗ Large frequent updates
*/

// Examples for different scenarios
public class SelectionExamples
{
    // Student grades management
    public void ManageGrades()
    {
        // Lookup grade by student ID
        var grades = new Dictionary<int, decimal>();
    }
    
    // Shopping cart items
    public void ShoppingCart()
    {
        // Add/remove items, maintain order
        var cart = new List<CartItem>();
    }
    
    // Blocked users
    public void BlockedUsers()
    {
        // Fast membership check
        var blocked = new HashSet<int>();
    }
    
    // Task processing
    public void ProcessTasks()
    {
        // Process in order received (FIFO)
        var queue = new Queue<Task>();
    }
    
    // Undo operations
    public void UndoOperations()
    {
        // Access last operation (LIFO)
        var undoStack = new Stack<Operation>();
    }
}`,
        },
      ],
    },
  ],
};
