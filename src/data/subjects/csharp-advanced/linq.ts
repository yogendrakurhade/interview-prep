import type { Topic } from "../../../types";

export const csharpLinqTopic: Topic = {
  id: "csharp-linq",
  name: "LINQ (Language Integrated Query)",
  questions: [
    {
      id: "q1",
      question: "What is LINQ and why is it important in C#?",
      answer:
        "LINQ (Language Integrated Query) provides a uniform way to query different data sources using C# syntax. It works with objects (LINQ to Objects), databases (LINQ to SQL/Entity Framework), XML (LINQ to XML), and more. It's important because it provides type-safe, readable queries with compile-time checking and IntelliSense support.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Linq;
using System.Collections.Generic;

List<int> numbers = new() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// LINQ query - filters even numbers
var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
// Result: [2, 4, 6, 8, 10]

// LINQ with objects
var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", Salary = 50000 },
    new { Id = 2, Name = "Bob", Salary = 60000 },
    new { Id = 3, Name = "Charlie", Salary = 55000 }
};

// Filter and select - type-safe and readable
var highEarners = employees
    .Where(e => e.Salary > 50000)
    .Select(e => e.Name)
    .ToList();
// Result: ["Bob", "Charlie"]`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the difference between query syntax and method syntax in LINQ?",
      answer:
        "Query syntax looks like SQL and is translated to method syntax at compile time. Method syntax uses extension methods like Where, Select. Both produce the same IL code. Use query syntax for complex queries, method syntax for simple ones.",
      codeSnippets: [
        {
          language: "csharp",
          code: `var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Query Syntax (SQL-like)
var resultQuery = from n in numbers
                  where n > 5
                  select n * 2;

// Method Syntax (Lambda expressions)
var resultMethod = numbers
    .Where(n => n > 5)
    .Select(n => n * 2);

// Both produce same result: [12, 14, 16, 18, 20]

// Complex query - query syntax is cleaner
var complexQuery = from emp in employees
                   where emp.Salary > 50000
                   group emp by emp.Department into deptGroup
                   select new
                   {
                       Department = deptGroup.Key,
                       AvgSalary = deptGroup.Average(e => e.Salary)
                   };

// Same with method syntax (more verbose)
var complexMethod = employees
    .Where(emp => emp.Salary > 50000)
    .GroupBy(emp => emp.Department)
    .Select(deptGroup => new
    {
        Department = deptGroup.Key,
        AvgSalary = deptGroup.Average(e => e.Salary)
    });`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is deferred execution in LINQ?",
      answer:
        "Deferred execution means the query doesn't run immediately when defined. It runs when you enumerate the results (call ToList, ForEach, etc.). This allows you to build queries dynamically and only execute when needed.",
      codeSnippets: [
        {
          language: "csharp",
          code: `var numbers = new List<int> { 1, 2, 3, 4, 5 };

// Deferred execution - query not executed yet
IEnumerable<int> query = numbers.Where(n => n > 2);

// Add more conditions - still not executed
query = query.Select(n => n * 2);

// Now execute - deferred execution happens here
var result = query.ToList();

// Practical example: Building dynamic queries
public List<Employee> GetEmployees(string department = null, decimal? minSalary = null)
{
    IQueryable<Employee> query = _dbContext.Employees;
    
    // Conditions added dynamically - not executed yet
    if (!string.IsNullOrEmpty(department))
        query = query.Where(e => e.Department == department);
    
    if (minSalary.HasValue)
        query = query.Where(e => e.Salary >= minSalary);
    
    // Query executes here when ToList is called
    return query.ToList();
}

// Problem with deferred execution
var list = numbers.Where(n => n > 2);
numbers.Add(6); // Modifying source after query definition

// Enumeration happens here - includes the newly added 6!
foreach(var n in list)
    Console.WriteLine(n); // 3, 4, 5, 6

// Solution: Use ToList to execute immediately
var list2 = numbers.Where(n => n > 2).ToList();
numbers.Add(7); // Adding now doesn't affect list2`,
        },
      ],
    },
    {
      id: "q4",
      question: "What are common LINQ methods and when to use each?",
      answer:
        "Common LINQ methods: Where (filter), Select (transform), FirstOrDefault/Single (get one item), OrderBy (sort), GroupBy (group), Join (combine), Aggregate (calculate), Skip/Take (pagination), Any/All (check conditions).",
      codeSnippets: [
        {
          language: "csharp",
          code: `var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", Salary = 50000, Dept = "IT" },
    new { Id = 2, Name = "Bob", Salary = 60000, Dept = "HR" },
    new { Id = 3, Name = "Charlie", Salary = 55000, Dept = "IT" },
    new { Id = 4, Name = "David", Salary = 52000, Dept = "HR" }
};

// WHERE - Filter
var highSalaries = employees.Where(e => e.Salary > 50000);

// SELECT - Transform
var names = employees.Select(e => e.Name);

// FIRST/FIRSTORDEFAULT - Get single item
var first = employees.First();
var firstIT = employees.FirstOrDefault(e => e.Dept == "IT");
var notFound = employees.FirstOrDefault(e => e.Dept == "Finance"); // null

// SINGLE/SINGLEORDEFAULT - Exactly one item
var admin = employees.SingleOrDefault(e => e.Id == 1);

// ORDERBY - Sort
var sortedByName = employees.OrderBy(e => e.Name);
var sortedBySalaryDesc = employees.OrderByDescending(e => e.Salary);
var multiSort = employees.OrderBy(e => e.Dept).ThenByDescending(e => e.Salary);

// GROUPBY - Group items
var byDept = employees.GroupBy(e => e.Dept);
foreach(var group in byDept)
{
    Console.WriteLine($"{group.Key}: {group.Count()} employees");
}

// JOIN - Combine collections
var departments = new List<Department>
{
    new { Id = 1, Name = "IT" },
    new { Id = 2, Name = "HR" }
};

var joined = employees.Join(departments,
    e => e.DeptId,
    d => d.Id,
    (e, d) => new { e.Name, Department = d.Name });

// SKIP/TAKE - Pagination
var page2 = employees.OrderBy(e => e.Id).Skip(2).Take(2);

// ANY/ALL - Check conditions
bool hasHighSalary = employees.Any(e => e.Salary > 60000);
bool allAbove40k = employees.All(e => e.Salary >= 40000);

// AGGREGATE - Calculate
decimal totalSalary = employees.Sum(e => e.Salary);
double avgSalary = employees.Average(e => e.Salary);
int count = employees.Count();
var maxSalary = employees.Max(e => e.Salary);`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the difference between LINQ to Objects and LINQ to SQL?",
      answer:
        "LINQ to Objects queries in-memory collections using delegates. LINQ to SQL/Entity Framework queries databases and translates C# to SQL. LINQ to Objects executes in-memory, LINQ to SQL on the server. Use LINQ to Objects for collections, LINQ to SQL for databases.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// LINQ to Objects - In-memory collection
var employees = new List<Employee>
{
    new { Name = "Alice", Salary = 50000 },
    new { Name = "Bob", Salary = 60000 }
};

// Executes in-memory with delegates
var result = employees
    .Where(e => e.Salary > 50000)
    .ToList(); // Filters all data in memory

// LINQ to SQL / Entity Framework - Database
public class EmployeeContext : DbContext
{
    public DbSet<Employee> Employees { get; set; }
}

using (var context = new EmployeeContext())
{
    // Executes on SQL Server - only matching rows returned
    var result = context.Employees
        .Where(e => e.Salary > 50000)
        .ToList(); // Translates to SQL: WHERE Salary > 50000
}

// Key difference in performance
var numbers = Enumerable.Range(1, 1000000).ToList();

// LINQ to Objects - loads all million numbers, filters in memory
var slowQuery = numbers.Where(n => n > 500000).ToList();

// LINQ to SQL - only fetches matching rows from database
using (var context = new DbContext())
{
    var fastQuery = context.Numbers
        .Where(n => n > 500000)
        .ToList();
}

// Important: Only simple operations work in LINQ to SQL
var employees = new List<Employee> { ... };

// Works in LINQ to Objects
var complex = employees
    .Where(e => e.Salary > 50000)
    .Select(e => new { e.Name, Length = e.Name.Length }) // String.Length works
    .ToList();

// May not work with LINQ to SQL - depends on database provider
var dbComplex = context.Employees
    .Where(e => e.Salary > 50000)
    .Select(e => new { e.Name, Length = e.Name.Length }) // Might fail
    .ToList();`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you perform a GroupBy operation in LINQ?",
      answer:
        "GroupBy groups elements by a key and returns IEnumerable<IGrouping<TKey, TElement>>. Each group can be aggregated. Use for creating summaries, calculations by category, etc.",
      codeSnippets: [
        {
          language: "csharp",
          code: `var sales = new List<Sale>
{
    new { Product = "Laptop", Quantity = 2, Price = 1000 },
    new { Product = "Mouse", Quantity = 5, Price = 20 },
    new { Product = "Laptop", Quantity = 1, Price = 1000 },
    new { Product = "Keyboard", Quantity = 3, Price = 50 }
};

// Simple GroupBy
var byProduct = sales.GroupBy(s => s.Product);

foreach(var group in byProduct)
{
    Console.WriteLine($"{group.Key}:");
    foreach(var item in group)
        Console.WriteLine($"  Qty: {item.Quantity}, Price: {item.Price}");
}

// GroupBy with aggregation
var productSummary = sales
    .GroupBy(s => s.Product)
    .Select(g => new
    {
        Product = g.Key,
        TotalQuantity = g.Sum(s => s.Quantity),
        TotalRevenue = g.Sum(s => s.Quantity * s.Price),
        Count = g.Count()
    })
    .ToList();

foreach(var summary in productSummary)
{
    Console.WriteLine(\`\${summary.Product}: \${summary.TotalQuantity} units, \${summary.TotalRevenue}\`);
}

// GroupBy multiple keys
var employeeSales = new List<Sale>
{
    new { Employee = "Alice", Product = "A", Amount = 100 },
    new { Employee = "Bob", Product = "A", Amount = 150 },
    new { Employee = "Alice", Product = "B", Amount = 200 }
};

var byEmployeeAndProduct = employeeSales
    .GroupBy(s => new { s.Employee, s.Product })
    .Select(g => new
    {
        Employee = g.Key.Employee,
        Product = g.Key.Product,
        Total = g.Sum(s => s.Amount)
    });

// GroupBy with where clause
var topProducts = sales
    .GroupBy(s => s.Product)
    .Where(g => g.Sum(s => s.Quantity) > 2)
    .Select(g => new
    {
        Product = g.Key,
        Quantity = g.Sum(s => s.Quantity)
    });`,
        },
      ],
    },
    {
      id: "q7",
      question: "How do you perform a Join operation in LINQ?",
      answer:
        "Use Join to combine two collections based on a key. Supports inner join, left join (with DefaultIfEmpty), and right join. Alternative: use query syntax with 'join' keyword.",
      codeSnippets: [
        {
          language: "csharp",
          code: `var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", DeptId = 1 },
    new { Id = 2, Name = "Bob", DeptId = 2 },
    new { Id = 3, Name = "Charlie", DeptId = 1 }
};

var departments = new List<Department>
{
    new { Id = 1, Name = "IT" },
    new { Id = 2, Name = "HR" }
};

// Inner Join - Method syntax
var innerJoin = employees.Join(departments,
    e => e.DeptId,          // outer key
    d => d.Id,              // inner key
    (e, d) => new           // result selector
    {
        e.Name,
        Department = d.Name
    });

// Inner Join - Query syntax (cleaner)
var innerJoinQuery = from emp in employees
                     join dept in departments on emp.DeptId equals dept.Id
                     select new { emp.Name, Department = dept.Name };

// Left Join - Include employees without matching department
var leftJoin = employees.GroupJoin(departments,
    e => e.DeptId,
    d => d.Id,
    (e, depts) => new
    {
        e.Name,
        Department = depts.FirstOrDefault()?.Name ?? "No Department"
    });

// Left Join - Query syntax with DefaultIfEmpty
var leftJoinQuery = from emp in employees
                    join dept in departments on emp.DeptId equals dept.Id into deptGroup
                    from d in deptGroup.DefaultIfEmpty()
                    select new
                    {
                        emp.Name,
                        Department = d?.Name ?? "No Department"
                    };

// Multiple joins
var orders = new List<Order>
{
    new { Id = 1, EmployeeId = 1, Amount = 100 },
    new { Id = 2, EmployeeId = 2, Amount = 200 }
};

var multiJoin = from order in orders
                join emp in employees on order.EmployeeId equals emp.Id
                join dept in departments on emp.DeptId equals dept.Id
                select new
                {
                    order.Id,
                    emp.Name,
                    dept.Name,
                    order.Amount
                };`,
        },
      ],
    },
    {
      id: "q8",
      question: "What are Select and SelectMany? What's the difference?",
      answer:
        "Select projects each element to a new form. SelectMany flattens nested collections. Use Select for one-to-one mapping, SelectMany for one-to-many mapping (like SQL CROSS APPLY).",
      codeSnippets: [
        {
          language: "csharp",
          code: `var students = new List<Student>
{
    new { Name = "Alice", Subjects = new[] { "Math", "English" } },
    new { Name = "Bob", Subjects = new[] { "Math", "Science" } }
};

// SELECT - projects each element (one-to-one)
var names = students.Select(s => s.Name);
// Result: ["Alice", "Bob"]

var enrollments = students.Select(s => new
{
    s.Name,
    SubjectCount = s.Subjects.Length
});
// Result: [{ Name: "Alice", SubjectCount: 2 }, ...]

// SELECTMANY - flattens collections (one-to-many)
var allSubjects = students.SelectMany(s => s.Subjects);
// Result: ["Math", "English", "Math", "Science"]

var studentSubjects = students.SelectMany(
    s => s.Subjects,
    (student, subject) => new
    {
        Student = student.Name,
        Subject = subject
    });
// Result: [
//   { Student: "Alice", Subject: "Math" },
//   { Student: "Alice", Subject: "English" },
//   { Student: "Bob", Subject: "Math" },
//   { Student: "Bob", Subject: "Science" }
// ]

// Query syntax alternative
var flatQuery = from student in students
                from subject in student.Subjects
                select new
                {
                    Student = student.Name,
                    Subject = subject
                };

// SelectMany with orders
var orders = new List<Order>
{
    new { CustomerId = 1, Items = new[] { "A", "B", "C" } },
    new { CustomerId = 2, Items = new[] { "D", "E" } }
};

var orderItems = orders.SelectMany(
    o => o.Items,
    (order, item) => new
    {
        order.CustomerId,
        Item = item
    });`,
        },
      ],
    },
    {
      id: "q9",
      question: "How do you handle null values and use DefaultIfEmpty in LINQ?",
      answer:
        "Use null-coalescing operator (??), null-conditional operator (?.), or DefaultIfEmpty to handle empty sequences. DefaultIfEmpty returns a default value when the sequence is empty, useful for outer joins.",
      codeSnippets: [
        {
          language: "csharp",
          code: `var employees = new List<Employee>
{
    new { Name = "Alice", ManagerId = null },
    new { Name = "Bob", ManagerId = 1 },
    new { Name = "Charlie", ManagerId = 1 }
};

var managers = new List<Manager>
{
    new { Id = 1, Name = "Alice" }
};

// Null-coalescing operator (??)
var managerNames = employees.Select(e =>
    e.ManagerId.HasValue ? e.ManagerId.ToString() : "No Manager");

// Null-conditional operator (?.)
var result = employees
    .Select(e => new
    {
        e.Name,
        ManagerName = e.Manager?.Name ?? "No Manager" // Safe navigation
    });

// DefaultIfEmpty - left outer join
var leftJoin = from emp in employees
               join mgr in managers on emp.ManagerId equals mgr.Id into managerGroup
               from m in managerGroup.DefaultIfEmpty()
               select new
               {
                   Employee = emp.Name,
                   Manager = m?.Name ?? "No Manager"
               };

// DefaultIfEmpty with custom default
var query = employees
    .Where(e => e.Salary > 100000)
    .DefaultIfEmpty(new Employee { Name = "No results" });

foreach(var emp in query)
    Console.WriteLine(emp.Name); // "No results" if no employees found

// Handling empty collections
var numbers = new List<int>();

// This throws IndexOutOfRangeException
// var first = numbers.First();

// This returns null/default
var safeFirst = numbers.FirstOrDefault();

var customDefault = numbers.FirstOrDefault(() => 0);

// Check before accessing
var hasData = numbers.Any();
if (hasData)
{
    var first = numbers.First();
}

// Safe with null coalescing
var first2 = numbers.FirstOrDefault() ?? 0;`,
        },
      ],
    },
    {
      id: "q10",
      question: "What is the difference between IEnumerable and IQueryable in LINQ?",
      answer:
        "IEnumerable uses delegates (LINQ to Objects) and executes in-memory. IQueryable uses expression trees and can be translated to other query languages (SQL, OData). Use IEnumerable for collections, IQueryable for databases.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// IEnumerable - In-memory, uses delegates
IEnumerable<Employee> enumerable = employees;
var enumerableResult = enumerable
    .Where(e => e.Salary > 50000)  // Delegates - executes in C#
    .Select(e => e.Name);

// Loads all employees in memory, then filters
foreach(var item in enumerableResult)
    Console.WriteLine(item);

// IQueryable - Deferred, uses expression trees
IQueryable<Employee> queryable = context.Employees.AsQueryable();
var queryableResult = queryable
    .Where(e => e.Salary > 50000)  // Expression tree - translated to SQL
    .Select(e => e.Name);

// Sends SQL to database, returns only matching rows
foreach(var item in queryableResult)
    Console.WriteLine(item);

// Key difference - where clauses
var list = new List<Employee>
{
    new { Id = 1, Name = "Alice", Manager = new Manager { Name = "Bob" } },
    new { Id = 2, Name = "Bob", Manager = null }
};

// IEnumerable - works with any delegate
var ienumResult = list
    .AsEnumerable()
    .Where(e => e.Manager.Name == "Bob") // Works because delegates can use custom C# code
    .ToList();

// IQueryable - must be translatable to SQL
var iqueryResult = list
    .AsQueryable()
    .Where(e => e.Manager.Name == "Bob") // Might fail - can't translate navigation to SQL
    .ToList();

// Solution for IQueryable
var iqueryResult2 = list
    .AsQueryable()
    .Where(e => e.Manager != null && e.Manager.Name == "Bob")
    .ToList();

// Performance difference
// LINQ to Objects - loads all 1 million records
var slow = employees.AsEnumerable()
    .Where(e => e.Salary > 50000)
    .ToList();

// LINQ to SQL - only fetches matching records
var fast = context.Employees
    .Where(e => e.Salary > 50000)
    .ToList();`,
        },
      ],
    },
    {
      id: "q11",
      question: "How do you write complex LINQ queries with multiple conditions?",
      answer:
        "Combine Where, OrderBy, GroupBy, and Select clauses. For complex conditions, use multiple Where calls or build conditions dynamically. Query syntax is often cleaner for complex queries.",
      codeSnippets: [
        {
          language: "csharp",
          code: `var employees = new List<Employee>
{
    new { Id = 1, Name = "Alice", Dept = "IT", Salary = 70000, YearsExp = 5 },
    new { Id = 2, Name = "Bob", Dept = "HR", Salary = 60000, YearsExp = 3 },
    new { Id = 3, Name = "Charlie", Dept = "IT", Salary = 65000, YearsExp = 4 },
    new { Id = 4, Name = "David", Dept = "Finance", Salary = 75000, YearsExp = 6 }
};

// Complex query with query syntax
var complexQuery = from emp in employees
                   where emp.Salary > 60000 && emp.YearsExp >= 4
                   group emp by emp.Dept into deptGroup
                   where deptGroup.Count() > 1
                   select new
                   {
                       Department = deptGroup.Key,
                       Count = deptGroup.Count(),
                       AvgSalary = deptGroup.Average(e => e.Salary),
                       Employees = deptGroup.Select(e => e.Name).ToList()
                   };

// Same with method syntax (more verbose)
var methodQuery = employees
    .Where(emp => emp.Salary > 60000 && emp.YearsExp >= 4)
    .GroupBy(emp => emp.Dept)
    .Where(g => g.Count() > 1)
    .Select(deptGroup => new
    {
        Department = deptGroup.Key,
        Count = deptGroup.Count(),
        AvgSalary = deptGroup.Average(e => e.Salary),
        Employees = deptGroup.Select(e => e.Name).ToList()
    });

// Multiple Where conditions
var filtered = employees
    .Where(e => e.Salary > 60000)
    .Where(e => e.YearsExp >= 4)
    .Where(e => !string.IsNullOrEmpty(e.Name))
    .OrderByDescending(e => e.Salary)
    .ThenBy(e => e.Name);

// Dynamic query building
public IEnumerable<Employee> SearchEmployees(
    string department = null,
    decimal? minSalary = null,
    int? minExperience = null)
{
    var query = employees.AsEnumerable();
    
    if (!string.IsNullOrEmpty(department))
        query = query.Where(e => e.Dept == department);
    
    if (minSalary.HasValue)
        query = query.Where(e => e.Salary >= minSalary);
    
    if (minExperience.HasValue)
        query = query.Where(e => e.YearsExp >= minExperience);
    
    return query.OrderBy(e => e.Name);
}

// Complex aggregation
var report = employees
    .GroupBy(e => e.Dept)
    .Select(g => new
    {
        Department = g.Key,
        TotalEmployees = g.Count(),
        AvgSalary = g.Average(e => e.Salary),
        MaxSalary = g.Max(e => e.Salary),
        MinSalary = g.Min(e => e.Salary),
        HighEarners = g
            .Where(e => e.Salary > g.Average(x => x.Salary))
            .Select(e => e.Name)
            .ToList()
    })
    .OrderByDescending(r => r.AvgSalary);`,
        },
      ],
    },
    {
      id: "q12",
      question: "What are performance considerations when using LINQ?",
      answer:
        "Avoid N+1 queries with LINQ to SQL. Use Include() for eager loading. Materialize data at appropriate times with ToList(). Use IQueryable for databases, IEnumerable for collections. Filter on the server before bringing data to memory.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// N+1 Problem - Bad
var employees = context.Employees.ToList(); // Query 1: Gets all employees
foreach(var emp in employees)
{
    var dept = context.Departments.FirstOrDefault(d => d.Id == emp.DeptId); // N queries
    Console.WriteLine($"{emp.Name} - {dept.Name}");
}
// Total queries: 1 + N

// Solution 1: Eager loading with Include
var empWithDepts = context.Employees
    .Include(e => e.Department) // Loads department in same query
    .ToList();

foreach(var emp in empWithDepts)
{
    Console.WriteLine($"{emp.Name} - {emp.Department.Name}");
}
// Total queries: 1

// Solution 2: Join
var joined = from emp in context.Employees
             join dept in context.Departments on emp.DeptId equals dept.Id
             select new { emp.Name, DeptName = dept.Name };

// Materializing at wrong time - Bad
var query = context.Employees
    .Where(e => e.Salary > 50000)
    .ToList() // Materializes all matching employees
    .Where(e => e.Name.StartsWith("A")) // Filters in-memory
    .ToList();

// Better - Filter on database
var better = context.Employees
    .Where(e => e.Salary > 50000 && e.Name.StartsWith("A"))
    .ToList(); // Materializes only filtered results

// Using IQueryable instead of IEnumerable
var slow = GetAllEmployees() // Returns IEnumerable
    .Where(e => e.Salary > 50000)
    .ToList();

var fast = context.Employees.AsQueryable() // IQueryable
    .Where(e => e.Salary > 50000)
    .ToList();

// Avoiding inefficient projections
var bad = context.Employees
    .Select(e => e) // Unnecessary
    .ToList();

var good = context.Employees
    .Select(e => new { e.Id, e.Name })
    .ToList();

// Use AsNoTracking for read-only queries
var tracked = context.Employees
    .Where(e => e.Salary > 50000)
    .ToList(); // Entity Framework tracks changes

var untracked = context.Employees
    .AsNoTracking()
    .Where(e => e.Salary > 50000)
    .ToList(); // Faster - no tracking overhead`,
        },
      ],
    },
  ],
};
