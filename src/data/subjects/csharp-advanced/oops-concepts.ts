import type { Topic } from "../../../types";

export const csharpOopsConceptsTopic: Topic = {
  id: "csharp-oops-concepts",
  name: "OOPs Concepts",
  questions: [
    {
      id: "q1",
      question: "What are the four pillars of OOP and explain each one briefly?",
      answer:
        "The four pillars are: (1) Encapsulation - bundling data and methods, hiding internals with access modifiers. (2) Inheritance - deriving new classes from existing ones, reusing code. (3) Polymorphism - objects can take many forms, same method name different behavior. (4) Abstraction - hiding complexity, exposing only essential features through interfaces/abstract classes.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// 1. ENCAPSULATION - Hide internals, expose through properties
public class BankAccount
{
    private decimal balance; // Hidden
    
    public decimal Balance
    {
        get { return balance; }
        private set { balance = value; } // Only internal access
    }
    
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount; // Controlled modification
    }
    
    public bool Withdraw(decimal amount)
    {
        if (amount <= balance)
        {
            balance -= amount;
            return true;
        }
        return false;
    }
}

// Usage
var account = new BankAccount();
account.Deposit(1000);
Console.WriteLine(account.Balance); // 1000
account.Withdraw(200); // Verified before withdrawal
// account.balance = -999; // ERROR: Can't access private field

// 2. INHERITANCE - Derive from base class
public class Animal
{
    public string Name { get; set; }
    
    public virtual void MakeSound()
    {
        Console.WriteLine("Generic animal sound");
    }
}

public class Dog : Animal // Inherits from Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Usage
Animal dog = new Dog { Name = "Buddy" };
dog.MakeSound(); // Woof! (Dog's implementation)

// 3. POLYMORPHISM - Same interface, different behavior
public void AnimalSounds()
{
    var animals = new Animal[]
    {
        new Dog { Name = "Buddy" },
        new Cat { Name = "Whiskers" },
        new Animal { Name = "Generic" }
    };
    
    foreach (var animal in animals)
    {
        animal.MakeSound(); // Calls appropriate implementation
        // Woof!
        // Meow!
        // Generic animal sound
    }
}

// 4. ABSTRACTION - Hide complexity, show only what's needed
public abstract class Vehicle
{
    public abstract void Start(); // Must be implemented
    public abstract void Stop();
    
    public void Drive()
    {
        Start();
        Console.WriteLine("Driving...");
        Stop();
    }
}

public class Car : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("Engine started");
    }
    
    public override void Stop()
    {
        Console.WriteLine("Engine stopped");
    }
}

// Usage - User doesn't need to know how Start/Stop work
var car = new Car();
car.Drive(); // Abstracted logic`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the difference between abstraction and encapsulation? Are they the same?",
      answer:
        "No, they're different. Encapsulation is about hiding implementation details and controlling access using access modifiers (private, public, protected). Abstraction is about hiding complexity and showing only essential features through abstract classes or interfaces. Encapsulation is HOW you hide (access modifiers), abstraction is WHAT you hide (complexity).",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// ENCAPSULATION - HOW to hide (using access modifiers)
public class Person
{
    // Private - hidden from outside
    private string socialSecurityNumber;
    private decimal salary;
    
    // Public property with validation
    public string Name { get; set; }
    
    public decimal Salary
    {
        get { return salary; }
        set 
        { 
            if (value >= 0)
                salary = value; // Controlled access
        }
    }
    
    public bool VerifySocialSecurityNumber(string ssn)
    {
        return socialSecurityNumber == ssn; // Only method can access
    }
}

// ABSTRACTION - WHAT to hide (using abstract classes/interfaces)
// Hides how different shapes calculate area
public abstract class Shape
{
    public abstract double GetArea(); // User doesn't need to know how
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    public override double GetArea()
    {
        return Math.PI * radius * radius; // Complex calculation hidden
    }
}

public class Rectangle : Shape
{
    private double width, height;
    
    public Rectangle(double w, double h) 
    { 
        width = w; 
        height = h; 
    }
    
    public override double GetArea()
    {
        return width * height; // Different calculation
    }
}

// Usage - Client doesn't care how area is calculated
public void CalculateAreas()
{
    Shape circle = new Circle(5);
    Shape rectangle = new Rectangle(4, 6);
    
    Console.WriteLine(circle.GetArea()); // π*5*5 (calculation hidden)
    Console.WriteLine(rectangle.GetArea()); // 4*6 (calculation hidden)
}

// Real-world comparison
// ENCAPSULATION: BankAccount hides balance with private field
// ABSTRACTION: IPaymentProcessor hides how payments are processed

public interface IPaymentProcessor
{
    bool ProcessPayment(decimal amount); // What it does
    // Client doesn't know if it uses Stripe, PayPal, or bank transfer
}

public class StripePaymentProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        // Complex Stripe API calls hidden here
        Console.WriteLine($"Processing {amount} via Stripe");
        return true;
    }
}

public class PayPalPaymentProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        // Complex PayPal API calls hidden here
        Console.WriteLine($"Processing {amount} via PayPal");
        return true;
    }
}

// Key differences:
// ENCAPSULATION                           ABSTRACTION
// Hide data/implementation               Hide complexity
// Use: private, protected, public        Use: abstract, interface
// Achieved with: fields, properties      Achieved with: abstract class, interface
// Controls: Access to data               Controls: Interface/contract
// "How" something works                  "What" something does`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the difference between Abstract Class and Interface? When to use each?",
      answer:
        "Abstract class can have implementation, state (fields), constructors, access modifiers. Interface only declares contracts, no implementation (except default methods in modern C#). Use abstract class for related classes sharing code, use interface for unrelated classes sharing behavior. A class can implement multiple interfaces but inherit from one abstract class.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// ABSTRACT CLASS - Partial implementation, shared state
public abstract class Employee
{
    // Fields (state) - Abstract class can have
    protected string name;
    protected decimal salary;
    
    // Constructor - Abstract class can have
    protected Employee(string name, decimal salary)
    {
        this.name = name;
        this.salary = salary;
    }
    
    // Concrete method - Abstract class can have implementation
    public void PrintDetails()
    {
        Console.WriteLine($"Name: {name}");
    }
    
    // Abstract method - Must be implemented by derived class
    public abstract decimal CalculateBonus();
    
    // Virtual method - Can be overridden
    public virtual void Work()
    {
        Console.WriteLine($"{name} is working");
    }
}

public class Manager : Employee
{
    private int teamSize;
    
    public Manager(string name, decimal salary, int team) 
        : base(name, salary)
    {
        teamSize = team;
    }
    
    public override decimal CalculateBonus()
    {
        return salary * 0.2m; // 20% bonus
    }
    
    public override void Work()
    {
        Console.WriteLine($"{name} is managing {teamSize} people");
    }
}

// INTERFACE - Contract only, no implementation
public interface IPayable
{
    decimal GetSalary();
    void Pay();
}

public interface IManageable
{
    int GetTeamSize();
    void Manage();
}

// One class can implement multiple interfaces
public class Contractor : IPayable, IManageable
{
    private decimal hourlyRate;
    private int hoursWorked;
    private int teamSize;
    
    public Contractor(decimal rate, int hours, int team)
    {
        hourlyRate = rate;
        hoursWorked = hours;
        teamSize = team;
    }
    
    public decimal GetSalary()
    {
        return hourlyRate * hoursWorked;
    }
    
    public void Pay()
    {
        Console.WriteLine($"Paying contractor: {GetSalary()}");
    }
    
    public int GetTeamSize()
    {
        return teamSize;
    }
    
    public void Manage()
    {
        Console.WriteLine($"Managing {teamSize} contractors");
    }
}

// Comparison
Console.WriteLine("ABSTRACT CLASS vs INTERFACE:");
Console.WriteLine("Feature              Abstract Class      Interface");
Console.WriteLine("Implementation       Can have            None (C#7) or default");
Console.WriteLine("Fields               Yes                 No");
Console.WriteLine("Constructors         Yes                 No");
Console.WriteLine("Access modifiers     public/private      All public");
Console.WriteLine("Inheritance          One abstract class  Multiple interfaces");
Console.WriteLine("When to use          Related classes     Unrelated contract");
Console.WriteLine("Purpose              IS-A relationship   CAN-DO capability");

// Modern C# 8+ - Interfaces can have default implementation
public interface IWorker
{
    void DoWork(); // Abstract
    
    void TakeBreak() // Default implementation
    {
        Console.WriteLine("Taking a break");
    }
}

public class Worker : IWorker
{
    public void DoWork()
    {
        Console.WriteLine("Working");
    }
    
    // Inherits TakeBreak() from interface
}

// When to use Abstract Class
public abstract class Vehicle
{
    // Shared fields
    protected string model;
    protected int year;
    
    // Shared implementation
    public void Register()
    {
        Console.WriteLine("Registering vehicle");
    }
    
    // Abstract method
    public abstract void Drive();
}

public class Car : Vehicle { /* ... */ }
public class Truck : Vehicle { /* ... */ }
// Car and Truck are related through Vehicle

// When to use Interface
public interface IComparable
{
    int CompareTo(object obj);
}

public interface IDrawable
{
    void Draw();
}

public class Circle : IComparable, IDrawable
{
    public int CompareTo(object obj)
    {
        // Implementation
        return 0;
    }
    
    public void Draw()
    {
        // Implementation
    }
}

// Circle doesn't have IS-A relationship with IComparable or IDrawable
// But it CAN compare and CAN draw

// Best practice decision:
// Use Abstract Class when:
// - Classes are closely related
// - Need shared fields/state
// - Need non-public members
// - Need constructors or initialization logic

// Use Interface when:
// - Unrelated classes need same contract
// - Need multiple inheritance of type
// - Defining capability/behavior only
// - Need polymorphic behavior across unrelated types`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is polymorphism? Explain compile-time (static) and runtime (dynamic) polymorphism.",
      answer:
        "Polymorphism means 'many forms'. Compile-time (static) polymorphism is method overloading - multiple methods with same name but different parameters, resolved at compile time. Runtime (dynamic) polymorphism is method overriding - child class overrides parent method, resolved at runtime based on actual object type.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// ========== COMPILE-TIME POLYMORPHISM (Method Overloading) ==========
// Same method name, different parameters
public class Calculator
{
    // Add for two integers
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    // Add for three integers (different parameter count)
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
    
    // Add for two doubles (different parameter type)
    public double Add(double a, double b)
    {
        return a + b;
    }
    
    // Add for string (different parameter type)
    public string Add(string a, string b)
    {
        return a + b;
    }
}

// Usage - Compiler decides which method to call
var calc = new Calculator();

int result1 = calc.Add(5, 3); // Calls Add(int, int)
int result2 = calc.Add(5, 3, 2); // Calls Add(int, int, int)
double result3 = calc.Add(5.5, 3.2); // Calls Add(double, double)
string result4 = calc.Add("Hello", "World"); // Calls Add(string, string)

// Compile-time polymorphism with different return types
public class Printer
{
    // Overload by parameter type
    public void Print(int value)
    {
        Console.WriteLine($"Printing integer: {value}");
    }
    
    public void Print(string value)
    {
        Console.WriteLine($"Printing string: {value}");
    }
    
    public void Print(double value)
    {
        Console.WriteLine($"Printing double: {value}");
    }
}

// ========== RUNTIME POLYMORPHISM (Method Overriding) ==========
// Base class with virtual method
public abstract class Shape
{
    public string Name { get; set; }
    
    // Virtual method - can be overridden
    public virtual void Draw()
    {
        Console.WriteLine("Drawing generic shape");
    }
    
    public virtual double GetArea()
    {
        return 0;
    }
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    // Override - child class implementation
    public override void Draw()
    {
        Console.WriteLine("Drawing circle");
    }
    
    public override double GetArea()
    {
        return Math.PI * radius * radius;
    }
}

public class Rectangle : Shape
{
    private double width, height;
    
    public Rectangle(double w, double h)
    {
        width = w;
        height = h;
    }
    
    public override void Draw()
    {
        Console.WriteLine("Drawing rectangle");
    }
    
    public override double GetArea()
    {
        return width * height;
    }
}

// Runtime polymorphism - type determined at runtime
public void DemoRuntimePolymorphism()
{
    Shape[] shapes = new Shape[]
    {
        new Circle(5),
        new Rectangle(4, 6),
        new Circle(3)
    };
    
    // Runtime decides which implementation to call
    foreach (var shape in shapes)
    {
        shape.Draw(); // Calls correct Draw() based on actual type
        // Drawing circle
        // Drawing rectangle
        // Drawing circle
    }
}

// Key differences
Console.WriteLine("COMPILE-TIME vs RUNTIME POLYMORPHISM:");
Console.WriteLine("Aspect              Compile-Time        Runtime");
Console.WriteLine("Also called         Overloading         Overriding");
Console.WriteLine("When resolved       At compile time     At runtime");
Console.WriteLine("Same method name    Yes, diff params    Yes, same params");
Console.WriteLine("Virtual keyword     Not needed          Required");
Console.WriteLine("Use                 Operator +          shape.Draw()");
Console.WriteLine("Performance         Slightly faster     Slightly slower");

// Compile-time polymorphism example
public void CompileTimeExample()
{
    var printer = new Printer();
    
    // Compiler knows at compile time which Print() to call
    printer.Print(42); // Print(int)
    printer.Print("Hello"); // Print(string)
    printer.Print(3.14); // Print(double)
}

// Runtime polymorphism example
public void RuntimeExample()
{
    Shape circle = new Circle(5); // circle is Shape reference
    Shape rectangle = new Rectangle(4, 6); // rect is Shape reference
    
    // Runtime (not compile time) determines actual type
    circle.Draw(); // Calls Circle.Draw()
    rectangle.Draw(); // Calls Rectangle.Draw()
    
    // This is why virtual keyword is important
    // Without virtual, would always call Shape.Draw()
}

// Non-virtual method - NOT polymorphic
public class Parent
{
    public void Method()
    {
        Console.WriteLine("Parent method");
    }
}

public class Child : Parent
{
    public new void Method() // Uses "new", not "override"
    {
        Console.WriteLine("Child method");
    }
}

var obj = new Parent();
obj.Method(); // Parent method

Parent childRef = new Child();
childRef.Method(); // Still Parent method (NOT polymorphic)
// Because Method() is not virtual

// Virtual method - IS polymorphic
public class Parent2
{
    public virtual void Method()
    {
        Console.WriteLine("Parent method");
    }
}

public class Child2 : Parent2
{
    public override void Method()
    {
        Console.WriteLine("Child method");
    }
}

Parent2 childRef2 = new Child2();
childRef2.Method(); // Child method (IS polymorphic)`,
        },
      ],
    },
    {
      id: "q5",
      question: "What are access modifiers? Explain public, private, protected, and internal.",
      answer:
        "Access modifiers control where code can be accessed. public - accessible everywhere. private - accessible only within same class. protected - accessible in same class and derived classes. internal - accessible within same assembly. private protected - only in same class or derived classes in same assembly.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

public class AccessModifiersExample
{
    // PUBLIC - Accessible from anywhere
    public string PublicField;
    public void PublicMethod()
    {
        Console.WriteLine("Public method");
    }
    
    // PRIVATE - Accessible only within this class
    private string privateField;
    private void PrivateMethod()
    {
        Console.WriteLine("Private method");
    }
    
    // PROTECTED - Accessible in this class and derived classes
    protected string protectedField;
    protected void ProtectedMethod()
    {
        Console.WriteLine("Protected method");
    }
    
    // INTERNAL - Accessible within same assembly
    internal string internalField;
    internal void InternalMethod()
    {
        Console.WriteLine("Internal method");
    }
    
    // PRIVATE PROTECTED - Same class or derived in same assembly
    private protected string privateProtectedField;
    
    // PROTECTED INTERNAL - This class, derived classes, same assembly
    protected internal string protectedInternalField;
}

// Derived class demonstrates access
public class DerivedClass : AccessModifiersExample
{
    public void TestAccess()
    {
        // ✓ Can access public
        PublicField = "accessible";
        PublicMethod();
        
        // ✗ Cannot access private
        // privateField = "not accessible"; // ERROR
        // PrivateMethod(); // ERROR
        
        // ✓ Can access protected (because we're derived)
        protectedField = "accessible";
        ProtectedMethod();
        
        // ✓ Can access internal (same assembly)
        internalField = "accessible";
        InternalMethod();
        
        // ✓ Can access private protected (derived + same assembly)
        privateProtectedField = "accessible";
    }
}

// Another class in same assembly
public class OtherClass
{
    public void TestAccess()
    {
        var obj = new AccessModifiersExample();
        
        // ✓ Can access public
        obj.PublicField = "accessible";
        obj.PublicMethod();
        
        // ✗ Cannot access private
        // obj.privateField = "not accessible"; // ERROR
        // obj.PrivateMethod(); // ERROR
        
        // ✗ Cannot access protected (not derived)
        // obj.protectedField = "not accessible"; // ERROR
        // obj.ProtectedMethod(); // ERROR
        
        // ✓ Can access internal (same assembly)
        obj.internalField = "accessible";
        obj.InternalMethod();
        
        // ✗ Cannot access private protected (not derived)
        // obj.privateProtectedField = "not accessible"; // ERROR
    }
}

// Encapsulation example - Using private fields with public property
public class BankAccount
{
    private decimal balance; // Private - hidden
    
    public decimal Balance // Public property - controlled access
    {
        get { return balance; }
        private set { balance = value; } // Only internal modification
    }
    
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount;
    }
    
    public bool Withdraw(decimal amount)
    {
        if (amount > 0 && amount <= balance)
        {
            balance -= amount;
            return true;
        }
        return false;
    }
}

// Usage
var account = new BankAccount();
account.Deposit(1000);
Console.WriteLine(account.Balance); // Can read: 1000
// account.Balance = -500; // ERROR: Can't set (private setter)
// account.balance = -500; // ERROR: Can't access private field

// Access modifier summary table
Console.WriteLine("Access Modifier Summary:");
Console.WriteLine("Modifier             Same Class  Derived Class  Same Assembly  Different Assembly");
Console.WriteLine("public               ✓           ✓              ✓              ✓");
Console.WriteLine("protected            ✓           ✓              ✗              ✗");
Console.WriteLine("internal             ✓           ✗              ✓              ✗");
Console.WriteLine("private              ✓           ✗              ✗              ✗");
Console.WriteLine("protected internal   ✓           ✓              ✓              ✗");
Console.WriteLine("private protected    ✓           ✓              ✗              ✗");

// Best practices
public class GoodEncapsulation
{
    // Private fields - hide implementation
    private List<Item> items = new();
    private decimal total;
    
    // Public property - controlled access
    public IReadOnlyList<Item> Items
    {
        get { return items.AsReadOnly(); }
    }
    
    public decimal Total
    {
        get { return total; }
    }
    
    // Public methods - define behavior
    public void AddItem(Item item)
    {
        items.Add(item);
        total += item.Price;
    }
    
    public void Clear()
    {
        items.Clear();
        total = 0;
    }
}

// Protected for derived classes
public abstract class DataAccessBase
{
    protected string connectionString; // Available to derived classes
    
    protected void ExecuteQuery(string sql)
    {
        // Implementation
    }
}

public class UserRepository : DataAccessBase
{
    public List<User> GetAllUsers()
    {
        ExecuteQuery("SELECT * FROM Users"); // Can use protected method
        return new List<User>();
    }
}`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is the difference between virtual, abstract, and override keywords?",
      answer:
        "virtual - base class method can be overridden (optional). abstract - must be overridden in derived class (no implementation). override - implementing the virtual/abstract method in derived class. virtual allows optional override, abstract requires it. Abstract methods have no body, virtual methods do.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// ========== VIRTUAL - Optional override ==========
public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Some generic sound");
    }
    
    public virtual void Move()
    {
        Console.WriteLine("Moving");
    }
}

public class Dog : Animal
{
    // Override is optional - if not overridden, uses base implementation
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
    
    // Don't override Move - uses Animal.Move()
}

var dog = new Dog();
dog.MakeSound(); // Woof! (overridden)
dog.Move(); // Moving (not overridden, uses base)

// ========== ABSTRACT - Required override ==========
public abstract class Shape
{
    // Abstract method - NO implementation, must be overridden
    public abstract double GetArea();
    
    // Abstract methods must be overridden by derived class
    public abstract void Draw();
    
    // Can still have concrete methods
    public void Describe()
    {
        Console.WriteLine($"Area: {GetArea()}");
    }
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    // MUST override abstract methods
    public override double GetArea()
    {
        return Math.PI * radius * radius;
    }
    
    public override void Draw()
    {
        Console.WriteLine("Drawing circle");
    }
}

// Cannot instantiate abstract class
// var shape = new Shape(); // ERROR

// But can instantiate concrete derived class
var circle = new Circle(5);
circle.Describe(); // Uses Describe() from base

// ========== Comparison Table ==========
Console.WriteLine("VIRTUAL vs ABSTRACT:");
Console.WriteLine("Aspect               Virtual             Abstract");
Console.WriteLine("Implementation       Has body            No body (;)");
Console.WriteLine("Override required    Optional            Required");
Console.WriteLine("Can instantiate      Yes                 No");
Console.WriteLine("Use in               Regular class       Only abstract class");
Console.WriteLine("Keyword combo        virtual             abstract");

// Real-world example: Vehicle hierarchy
public abstract class Vehicle
{
    // Abstract - must override
    public abstract void Start();
    public abstract void Stop();
    
    // Virtual - can override
    public virtual void Drive()
    {
        Start();
        Console.WriteLine("Driving...");
        Stop();
    }
}

public class Car : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("Car engine starts");
    }
    
    public override void Stop()
    {
        Console.WriteLine("Car engine stops");
    }
    
    // Don't override Drive - uses base implementation
}

public class Bicycle : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("Ready to pedal");
    }
    
    public override void Stop()
    {
        Console.WriteLine("Stopped pedaling");
    }
    
    // Override Drive for different behavior
    public override void Drive()
    {
        Console.WriteLine("Pedaling...");
    }
}

// Another example: Payment processors
public abstract class PaymentProcessor
{
    // Abstract - must override
    public abstract bool ValidatePayment(decimal amount);
    
    // Virtual - optional override
    public virtual void RecordTransaction(string description)
    {
        Console.WriteLine($"Recording: {description}");
    }
    
    // Template method using abstract method
    public void ProcessPayment(decimal amount)
    {
        if (ValidatePayment(amount))
        {
            Console.WriteLine("Payment successful");
            RecordTransaction($"Charge: {amount}");
        }
        else
        {
            Console.WriteLine("Payment failed");
        }
    }
}

public class CreditCardProcessor : PaymentProcessor
{
    public override bool ValidatePayment(decimal amount)
    {
        // Credit card specific validation
        return amount > 0 && amount < 100000;
    }
    
    // Don't override RecordTransaction - uses base
}

public class BankTransferProcessor : PaymentProcessor
{
    public override bool ValidatePayment(decimal amount)
    {
        // Bank transfer specific validation
        return amount > 100 && amount < 50000;
    }
    
    // Override for different recording
    public override void RecordTransaction(string description)
    {
        Console.WriteLine($"Recording in bank ledger: {description}");
    }
}

// Usage
PaymentProcessor ccProcessor = new CreditCardProcessor();
ccProcessor.ProcessPayment(500); // Uses CC validation

PaymentProcessor bankProcessor = new BankTransferProcessor();
bankProcessor.ProcessPayment(5000); // Uses bank validation

// Key point: Interface as pure abstraction
public interface ILogger
{
    void Log(string message); // All members are abstract
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message); // Must implement
    }
}

// Sealed keyword - prevents further overriding
public class FinalAnimal : Animal
{
    public sealed override void MakeSound()
    {
        Console.WriteLine("Final sound");
    }
}

// Cannot override FinalAnimal.MakeSound()
// public class BadDog : FinalAnimal
// {
//     public override void MakeSound() // ERROR: sealed
//     {
//     }
// }`,
        },
      ],
    },
    {
      id: "q7",
      question: "What is method overriding? How is it different from method overloading?",
      answer:
        "Method overriding is in derived class with same signature as base class, uses virtual/override keywords, resolved at runtime. Method overloading is in same class with same name but different parameters, resolved at compile time. Overriding is runtime polymorphism, overloading is compile-time polymorphism.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// ========== METHOD OVERLOADING (Compile-time) ==========
// Same name, different parameters, SAME CLASS
public class StringUtility
{
    // Convert int to string
    public string ToString(int value)
    {
        return value.ToString();
    }
    
    // Convert double to string
    public string ToString(double value)
    {
        return value.ToString("F2");
    }
    
    // Convert bool to string
    public string ToString(bool value)
    {
        return value.ToString();
    }
    
    // Different parameter count
    public string Concat(string a, string b)
    {
        return a + b;
    }
    
    public string Concat(string a, string b, string c)
    {
        return a + b + c;
    }
}

// Usage - Compiler determines which method at COMPILE TIME
var util = new StringUtility();
var s1 = util.ToString(42); // Calls ToString(int)
var s2 = util.ToString(3.14); // Calls ToString(double)
var s3 = util.ToString(true); // Calls ToString(bool)
var s4 = util.Concat("Hello", "World"); // 2 params
var s5 = util.Concat("A", "B", "C"); // 3 params

// ========== METHOD OVERRIDING (Runtime polymorphism) ==========
// Same name, same parameters, BASE and DERIVED class
public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Generic sound");
    }
}

public class Dog : Animal
{
    // Override - same signature, DIFFERENT CLASS
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Usage - Runtime determines which method based on ACTUAL TYPE
Animal animal1 = new Dog();
Animal animal2 = new Cat();
Animal animal3 = new Animal();

animal1.MakeSound(); // Woof! (Dog's override)
animal2.MakeSound(); // Meow! (Cat's override)
animal3.MakeSound(); // Generic sound (Animal's implementation)

// Detailed comparison
Console.WriteLine("METHOD OVERLOADING vs OVERRIDING:");
Console.WriteLine("Aspect              Overloading         Overriding");
Console.WriteLine("Scope               Same class          Base + derived");
Console.WriteLine("Method name         Same                Same");
Console.WriteLine("Parameters          Different           Same");
Console.WriteLine("Return type         Can differ          Same");
Console.WriteLine("Keywords            None                virtual/override");
Console.WriteLine("When resolved       Compile-time        Runtime");
Console.WriteLine("Inheritance         No                  Yes");
Console.WriteLine("Polymorphism type   Compile-time        Runtime");

// Real example: Overloading
public class DataProcessor
{
    public int Sum(int a, int b)
    {
        return a + b;
    }
    
    public double Sum(double a, double b)
    {
        return a + b;
    }
    
    public int Sum(int a, int b, int c)
    {
        return a + b + c;
    }
}

var dp = new DataProcessor();
int r1 = dp.Sum(5, 3); // Sum(int, int) -> 8
double r2 = dp.Sum(5.5, 3.2); // Sum(double, double) -> 8.7
int r3 = dp.Sum(5, 3, 2); // Sum(int, int, int) -> 10

// Real example: Overriding
public abstract class Shape
{
    public abstract double GetArea();
}

public class Circle : Shape
{
    private double radius;
    
    public Circle(double r) { radius = r; }
    
    public override double GetArea()
    {
        return Math.PI * radius * radius;
    }
}

public class Rectangle : Shape
{
    private double width, height;
    
    public Rectangle(double w, double h) 
    { 
        width = w; 
        height = h; 
    }
    
    public override double GetArea()
    {
        return width * height;
    }
}

// Polymorphism through overriding
Shape[] shapes = new Shape[]
{
    new Circle(5),
    new Rectangle(4, 6)
};

foreach (var shape in shapes)
{
    Console.WriteLine($"Area: {shape.GetArea()}");
    // Area: 78.54 (Circle)
    // Area: 24 (Rectangle)
}

// Cannot override in same class
public class BadExample
{
    public void Display(int x) { }
    // public override void Display(int x) { } // ERROR: No base member to override
    
    // But can overload
    public void Display(string x) { } // OK: Overload
}

// Overloading with different return types - usually not recommended
public class Example
{
    public int GetValue() { return 10; }
    // public string GetValue() { } // ERROR: Return type alone doesn't distinguish
    // Need different parameters
    public string GetValue(int x) { return "test"; } // OK: Different parameter
}

// Common mistake: Hiding instead of overriding
public class Parent
{
    public virtual void Method()
    {
        Console.WriteLine("Parent");
    }
}

public class Child : Parent
{
    public new void Method() // "new" hides parent method
    {
        Console.WriteLine("Child");
    }
}

var child = new Child();
child.Method(); // Child

Parent childRef = new Child();
childRef.Method(); // Parent (WRONG! Should be Child)

// Correct: Use override
public class GoodChild : Parent
{
    public override void Method()
    {
        Console.WriteLine("GoodChild");
    }
}

var goodChild = new GoodChild();
goodChild.Method(); // GoodChild

Parent goodChildRef = new GoodChild();
goodChildRef.Method(); // GoodChild (CORRECT!)`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is composition vs inheritance? When to use each?",
      answer:
        "Inheritance is IS-A relationship (Dog IS-A Animal). Composition is HAS-A relationship (Car HAS-A Engine). Use inheritance for related classes sharing behavior. Use composition for flexibility and avoiding rigid hierarchies. Composition is usually better than deep inheritance chains. Prefer composition over inheritance for code reuse.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;

// ========== INHERITANCE (IS-A) ==========
public abstract class Animal
{
    public string Name { get; set; }
    
    public abstract void MakeSound();
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// IS-A: Dog IS-A Animal
var dog = new Dog { Name = "Buddy" };
dog.MakeSound(); // Woof

// Problem with deep inheritance
public class Vehicle { }
public class Car : Vehicle { }
public class SportsCar : Car { }
public class FerrariFf : SportsCar { }
// Rigid hierarchy - hard to change

// ========== COMPOSITION (HAS-A) ==========
public class Engine
{
    public int Horsepower { get; set; }
    
    public void Start()
    {
        Console.WriteLine("Engine started");
    }
}

public class Transmission
{
    public string Type { get; set; }
    
    public void Shift(string gear)
    {
        Console.WriteLine($"Shifting to {gear}");
    }
}

public class ComposedCar
{
    // Car HAS-A Engine
    private Engine engine;
    
    // Car HAS-A Transmission
    private Transmission transmission;
    
    public ComposedCar(Engine engine, Transmission transmission)
    {
        this.engine = engine;
        this.transmission = transmission;
    }
    
    public void Drive()
    {
        engine.Start();
        transmission.Shift("D");
        Console.WriteLine("Driving");
    }
}

// Usage
var engine = new Engine { Horsepower = 200 };
var transmission = new Transmission { Type = "Automatic" };
var car = new ComposedCar(engine, transmission);
car.Drive();

// Can swap components easily
var sportEngine = new Engine { Horsepower = 500 };
var sportCar = new ComposedCar(sportEngine, transmission);

// Comparison
Console.WriteLine("INHERITANCE vs COMPOSITION:");
Console.WriteLine("Aspect           Inheritance         Composition");
Console.WriteLine("Relationship     IS-A                HAS-A");
Console.WriteLine("Flexibility      Rigid               Flexible");
Console.WriteLine("Runtime change   Not possible        Possible");
Console.WriteLine("Complexity       Can be complex      Usually simpler");
Console.WriteLine("Code reuse       Through extension   Through delegation");

// Real-world example: Inheritance (NOT recommended)
public abstract class Employee
{
    public string Name { get; set; }
    
    public abstract decimal CalculateSalary();
}

// Bad: Too specific inheritance
public class Manager : Employee
{
    public override decimal CalculateSalary()
    {
        return 5000;
    }
}

public class Developer : Employee
{
    public override decimal CalculateSalary()
    {
        return 4000;
    }
}

// Problem: What if manager is also developer?
// Can't inherit from both

// Better: Composition
public interface IRole
{
    decimal CalculateCompensation();
}

public class ManagerRole : IRole
{
    public decimal CalculateCompensation() => 2000;
}

public class DeveloperRole : IRole
{
    public decimal CalculateCompensation() => 3000;
}

public class ComposedEmployee
{
    public string Name { get; set; }
    
    private List<IRole> roles = new();
    
    public void AddRole(IRole role)
    {
        roles.Add(role);
    }
    
    public decimal CalculateTotalCompensation()
    {
        decimal total = 0;
        foreach (var role in roles)
        {
            total += role.CalculateCompensation();
        }
        return total;
    }
}

// Usage - Much more flexible!
var employee = new ComposedEmployee { Name = "Alice" };
employee.AddRole(new ManagerRole());
employee.AddRole(new DeveloperRole());
Console.WriteLine(employee.CalculateTotalCompensation()); // 5000

// Real-world: Logger example
// Bad inheritance approach
public class ConsoleWriter
{
    public void WriteLine(string text) => Console.WriteLine(text);
}

public class ConsoleLogger : ConsoleWriter
{
    public void Log(string message)
    {
        WriteLine($"[LOG] {message}");
    }
}

// Problem: Can't change ConsoleWriter at runtime

// Good composition approach
public interface IWriter
{
    void Write(string text);
}

public class ConsoleOutput : IWriter
{
    public void Write(string text) => Console.WriteLine(text);
}

public class FileOutput : IWriter
{
    public void Write(string text)
    {
        // Write to file
    }
}

public class ComposedLogger
{
    private IWriter writer;
    
    public ComposedLogger(IWriter writer)
    {
        this.writer = writer;
    }
    
    public void Log(string message)
    {
        writer.Write($"[LOG] {message}");
    }
}

// Usage - Switch writers at runtime!
var consoleLogger = new ComposedLogger(new ConsoleOutput());
consoleLogger.Log("Hello"); // To console

var fileLogger = new ComposedLogger(new FileOutput());
fileLogger.Log("Hello"); // To file

// When to use Inheritance
public abstract class DatabaseConnection
{
    public abstract void Connect();
    public abstract void Disconnect();
}

// Related classes - use inheritance
public class SqlServerConnection : DatabaseConnection
{
    public override void Connect() => Console.WriteLine("Connecting to SQL Server");
    public override void Disconnect() => Console.WriteLine("Disconnecting from SQL Server");
}

public class MySqlConnection : DatabaseConnection
{
    public override void Connect() => Console.WriteLine("Connecting to MySQL");
    public override void Disconnect() => Console.WriteLine("Disconnecting from MySQL");
}

// When to use Composition
public class DataRepository
{
    private DatabaseConnection connection;
    
    public DataRepository(DatabaseConnection connection)
    {
        this.connection = connection;
    }
    
    public void LoadData()
    {
        connection.Connect();
        // Load data
        connection.Disconnect();
    }
}

// Summary: Prefer composition for flexibility`,
        },
      ],
    },
    {
      id: "q9",
      question: "What is the difference between == operator and Equals() method?",
      answer:
        "== compares references for reference types (unless overloaded). Equals() compares values by default. For value types, == doesn't work without overload. Equals() checks object equality. Best practice: override both == and Equals() together, implement IEquatable<T>.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// ========== DEFAULT BEHAVIOR ==========
public class Person
{
    public string Name { get; set; }
}

var person1 = new Person { Name = "Alice" };
var person2 = new Person { Name = "Alice" };

Console.WriteLine(person1 == person2); // false (different references)
Console.WriteLine(person1.Equals(person2)); // false (default: reference comparison)

// For value types
int a = 5;
int b = 5;
Console.WriteLine(a == b); // true (value comparison)
Console.WriteLine(a.Equals(b)); // true (value comparison)

// ========== OVERRIDING EQUALS AND == ==========
public class GoodPerson : IEquatable<GoodPerson>
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Override Equals - compare by value
    public override bool Equals(object obj)
    {
        return Equals(obj as GoodPerson);
    }
    
    public bool Equals(GoodPerson other)
    {
        if (other == null) return false;
        return Name == other.Name && Age == other.Age;
    }
    
    // Override GetHashCode - must be consistent with Equals
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
    
    // Overload == operator
    public static bool operator ==(GoodPerson left, GoodPerson right)
    {
        if (ReferenceEquals(left, right))
            return true;
        if (left is null || right is null)
            return false;
        return left.Equals(right);
    }
    
    // Overload != operator
    public static bool operator !=(GoodPerson left, GoodPerson right)
    {
        return !(left == right);
    }
}

// Usage
var good1 = new GoodPerson { Name = "Alice", Age = 25 };
var good2 = new GoodPerson { Name = "Alice", Age = 25 };
var good3 = new GoodPerson { Name = "Bob", Age = 30 };

Console.WriteLine(good1 == good2); // true (value comparison)
Console.WriteLine(good1.Equals(good2)); // true (value comparison)
Console.WriteLine(good1 != good3); // true

// ========== String example ==========
// Strings override Equals and ==
string str1 = "Hello";
string str2 = "Hello";
string str3 = new string(new[] { 'H', 'e', 'l', 'l', 'o' });

Console.WriteLine(str1 == str2); // true (value comparison)
Console.WriteLine(str1.Equals(str2)); // true (value comparison)
Console.WriteLine(str1 == str3); // true (value comparison)

// ========== Reference vs Value comparison ==========
public class BadPerson
{
    public string Name { get; set; }
    
    // Don't override Equals or ==
}

var bad1 = new BadPerson { Name = "Alice" };
var bad2 = new BadPerson { Name = "Alice" };

Console.WriteLine(bad1 == bad2); // false (reference comparison)
Console.WriteLine(bad1.Equals(bad2)); // false (reference comparison)

// Even though values are same!

// ========== Important: Must override both ==========
public class InconsistentPerson
{
    public string Name { get; set; }
    
    // Overrode Equals but not ==
    public override bool Equals(object obj)
    {
        var other = obj as InconsistentPerson;
        return other?.Name == Name;
    }
    
    public override int GetHashCode()
    {
        return Name?.GetHashCode() ?? 0;
    }
    
    // Forgot to override ==
}

var inc1 = new InconsistentPerson { Name = "Alice" };
var inc2 = new InconsistentPerson { Name = "Alice" };

Console.WriteLine(inc1 == inc2); // false (uses reference comparison)
Console.WriteLine(inc1.Equals(inc2)); // true (uses Equals override)
// INCONSISTENT! BAD!

// ========== Null comparisons ==========
GoodPerson person = null;
GoodPerson other = null;

Console.WriteLine(person == other); // true (both null)
Console.WriteLine(person == new GoodPerson()); // false (one null)

// ========== With collections ==========
var list = new List<GoodPerson>
{
    new GoodPerson { Name = "Alice", Age = 25 },
    new GoodPerson { Name = "Bob", Age = 30 }
};

var target = new GoodPerson { Name = "Alice", Age = 25 };

// Contains uses Equals (which we overrode)
bool found = list.Contains(target); // true!

// Dictionary uses GetHashCode and Equals
var dict = new Dictionary<GoodPerson, string>();
dict[new GoodPerson { Name = "Alice", Age = 25 }] = "Developer";

// Can retrieve with different reference
var value = dict[new GoodPerson { Name = "Alice", Age = 25 }]; // Works!

// ========== Summary Table ==========
Console.WriteLine("EQUALS vs ==:");
Console.WriteLine("Aspect               Equals           ==");
Console.WriteLine("Default behavior     Reference        Reference");
Console.WriteLine("Can override         Yes              Yes");
Console.WriteLine("For strings          Value            Value (overridden)");
Console.WriteLine("For value types      Value            Value (overridden)");
Console.WriteLine("Must implement       IEquatable<T>    Both operators");
Console.WriteLine("Used in              Contains, Dict   Comparisons");

// Best practice template
public class ProperComparison : IEquatable<ProperComparison>
{
    public string Id { get; set; }
    
    public override bool Equals(object obj) => Equals(obj as ProperComparison);
    
    public bool Equals(ProperComparison other)
    {
        if (other == null) return false;
        return Id == other.Id;
    }
    
    public override int GetHashCode() => Id?.GetHashCode() ?? 0;
    
    public static bool operator ==(ProperComparison left, ProperComparison right)
    {
        if (left is null) return right is null;
        return left.Equals(right);
    }
    
    public static bool operator !=(ProperComparison left, ProperComparison right)
    {
        return !(left == right);
    }
}`,
        },
      ],
    },
    {
      id: "q10",
      question: "What are constructors and destructors? What is the difference between parameterized and default constructors?",
      answer:
        "Constructor is a special method called when creating an object, initializes state. Destructor cleans up resources, called when object is garbage collected (rare in C#). Default constructor has no parameters. Parameterized constructor takes parameters to initialize fields. Base class constructor can be called using : base().",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;

// ========== DEFAULT CONSTRUCTOR ==========
public class SimpleClass
{
    public string Name { get; set; }
    public int Value { get; set; }
    
    // Default constructor - no parameters
    public SimpleClass()
    {
        Name = "Default";
        Value = 0;
        Console.WriteLine("Default constructor called");
    }
}

var simple = new SimpleClass();
// Output: Default constructor called
Console.WriteLine(simple.Name); // Default

// ========== PARAMETERIZED CONSTRUCTOR ==========
public class Account
{
    public string AccountNumber { get; set; }
    public decimal Balance { get; set; }
    
    // Parameterized constructor
    public Account(string accountNumber, decimal initialBalance)
    {
        AccountNumber = accountNumber;
        Balance = initialBalance;
        Console.WriteLine($"Account {accountNumber} created");
    }
}

var account = new Account("ACC001", 1000);
// Output: Account ACC001 created

// ========== MULTIPLE CONSTRUCTORS (Overloading) ==========
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
    
    // Default constructor
    public Person()
    {
        Name = "Unknown";
        Age = 0;
        Email = "unknown@email.com";
    }
    
    // Parameterized - one parameter
    public Person(string name)
    {
        Name = name;
        Age = 0;
        Email = "unknown@email.com";
    }
    
    // Parameterized - two parameters
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
        Email = "unknown@email.com";
    }
    
    // Parameterized - all parameters
    public Person(string name, int age, string email)
    {
        Name = name;
        Age = age;
        Email = email;
    }
}

var p1 = new Person(); // Default
var p2 = new Person("Alice"); // 1 param
var p3 = new Person("Bob", 30); // 2 params
var p4 = new Person("Charlie", 25, "charlie@email.com"); // All params

// ========== USING this() for constructor chaining ==========
public class ImprovedPerson
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public ImprovedPerson() : this("Unknown", 0)
    {
        // Calls parameterized constructor
    }
    
    public ImprovedPerson(string name) : this(name, 0)
    {
        // Calls other constructor
    }
    
    public ImprovedPerson(string name, int age)
    {
        Name = name;
        Age = age;
        Console.WriteLine($"Person created: {name}, Age {age}");
    }
}

var ip1 = new ImprovedPerson(); // Calls : this()
var ip2 = new ImprovedPerson("Alice"); // Calls : this(string)
var ip3 = new ImprovedPerson("Bob", 30); // Full initialization

// ========== INHERITANCE AND CONSTRUCTORS ==========
public class Animal
{
    public string Name { get; set; }
    
    public Animal(string name)
    {
        Name = name;
        Console.WriteLine($"Animal constructor: {name}");
    }
}

public class Dog : Animal
{
    public string Breed { get; set; }
    
    // Must call base constructor with : base()
    public Dog(string name, string breed) : base(name)
    {
        Breed = breed;
        Console.WriteLine($"Dog constructor: {breed}");
    }
}

var dog = new Dog("Buddy", "Labrador");
// Output:
// Animal constructor: Buddy
// Dog constructor: Labrador

// ========== DESTRUCTORS (Finalizers) ==========
public class ResourceHolder
{
    private IntPtr unmanagedResource;
    
    public ResourceHolder()
    {
        Console.WriteLine("Constructor: Resource allocated");
        unmanagedResource = AllocateUnmanagedResource();
    }
    
    // Destructor - called by garbage collector
    ~ResourceHolder()
    {
        Console.WriteLine("Destructor: Resource freed");
        FreeUnmanagedResource(unmanagedResource);
    }
    
    private IntPtr AllocateUnmanagedResource()
    {
        return new IntPtr(12345); // Simulated
    }
    
    private void FreeUnmanagedResource(IntPtr resource)
    {
        // Cleanup
    }
}

// ========== PROPER RESOURCE MANAGEMENT WITH IDisposable ==========
public class ManagedResource : IDisposable
{
    private bool disposed = false;
    
    public ManagedResource()
    {
        Console.WriteLine("Constructor");
    }
    
    // Implement Dispose for explicit cleanup
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Don't call finalizer
    }
    
    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                Console.WriteLine("Disposing managed resources");
                // Dispose managed resources
            }
            
            Console.WriteLine("Freeing unmanaged resources");
            // Free unmanaged resources
            
            disposed = true;
        }
    }
    
    // Finalizer as safety net
    ~ManagedResource()
    {
        Dispose(false);
    }
}

// Usage with using statement
using (var resource = new ManagedResource())
{
    // Use resource
} // Dispose called automatically

// Or
var resource2 = new ManagedResource();
try
{
    // Use resource
}
finally
{
    resource2?.Dispose();
}

// ========== STATIC CONSTRUCTOR ==========
public class Configuration
{
    public static string AppName { get; set; }
    public static string Version { get; set; }
    
    // Static constructor - called once when class is first used
    static Configuration()
    {
        AppName = "MyApp";
        Version = "1.0";
        Console.WriteLine("Static constructor called");
    }
}

// Usage
var app1 = new Configuration();
var app2 = new Configuration();
// Static constructor called only ONCE (for all instances)

// ========== COMPARISON ==========
Console.WriteLine("CONSTRUCTOR vs DESTRUCTOR:");
Console.WriteLine("Aspect           Constructor     Destructor");
Console.WriteLine("Purpose          Initialize      Cleanup");
Console.WriteLine("Called when      Object created  Object collected");
Console.WriteLine("Can overload     Yes             No (only one)");
Console.WriteLine("Parameters       Yes             No");
Console.WriteLine("Syntax           public Type()   ~Type()");
Console.WriteLine("Timing           Immediate       Garbage collection");

// ========== BEST PRACTICES ==========
public class GoodPractice
{
    private string resource;
    
    // Clear parameterized constructor
    public GoodPractice(string resource)
    {
        this.resource = resource ?? throw new ArgumentNullException(nameof(resource));
        Console.WriteLine("Initialized with: " + resource);
    }
    
    // Validate input in constructor
    public static implicit operator GoodPractice(string value)
    {
        return new GoodPractice(value);
    }
}

// Use constructor to validate
var good = new GoodPractice("Valid");
// good = new GoodPractice(null); // Throws ArgumentNullException`,
        },
      ],
    },
  ],
};
