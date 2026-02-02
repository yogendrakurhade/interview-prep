import type { Topic } from "../../../types";

export const csharpSolidPrinciplesTopic: Topic = {
  id: "csharp-solid-principles",
  name: "SOLID Principles",
  questions: [
    {
      id: "q1",
      question: "What are SOLID principles and why are they important?",
      answer:
        "SOLID is an acronym for five design principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) that make code more maintainable, scalable, and testable. They help you write clean code that's easy to understand, modify, and extend without breaking existing functionality.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// BAD - Violates SOLID principles
public class UserManager
{
    // Violates SRP - does too many things
    public void CreateUser(string name, string email) { }
    public void SendEmail(string to, string subject) { }
    public void LogActivity(string message) { }
    public void SaveToDatabase(string data) { }
    public void ValidateEmail(string email) { }
    
    // Hard to test, maintain, and extend
    // Change one thing breaks everything
}

// GOOD - Follows SOLID principles
public class UserService
{
    private readonly IUserRepository userRepository;
    private readonly IEmailService emailService;
    private readonly ILogger logger;
    
    public UserService(
        IUserRepository userRepository,
        IEmailService emailService,
        ILogger logger)
    {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.logger = logger;
    }
    
    public void CreateUser(User user)
    {
        // Single Responsibility - only manage users
        userRepository.Save(user);
        logger.Log(\`User \${user.Name} created\`);
    }
}

public interface IUserRepository
{
    void Save(User user);
}

public interface IEmailService
{
    void SendEmail(string to, string subject, string body);
}

public interface ILogger
{
    void Log(string message);
}

// Benefits:
// - Easy to test (inject mocks)
// - Easy to extend (implement new repositories)
// - Easy to maintain (each class has one job)
// - Easy to reuse (components are independent)`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the Single Responsibility Principle (SRP)?",
      answer:
        "A class should have only one reason to change. It should have only one responsibility. This makes classes focused, easier to understand, test, and maintain. If a class has multiple reasons to change, it violates SRP.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// VIOLATES SRP - Multiple reasons to change
public class Employee
{
    public string Name { get; set; }
    public decimal Salary { get; set; }
    
    // Responsibility 1: Employee data
    public void UpdateName(string name)
    {
        Name = name;
    }
    
    // Responsibility 2: Calculations
    public decimal CalculateBonus()
    {
        return Salary * 0.1m;
    }
    
    // Responsibility 3: Persistence
    public void SaveToDatabase()
    {
        // Save to DB
    }
    
    // Responsibility 4: Reporting
    public string GenerateReport()
    {
        return $"Employee: {Name}, Salary: {Salary}";
    }
    
    // Changes for any reason: pay logic, DB schema, report format, etc.
}

// FOLLOWS SRP - Each class has one reason to change
public class Employee
{
    public string Name { get; set; }
    public decimal Salary { get; set; }
}

public class BonusCalculator
{
    // Only reason to change: bonus calculation logic
    public decimal CalculateBonus(Employee employee)
    {
        return employee.Salary * 0.1m;
    }
}

public class EmployeeRepository
{
    // Only reason to change: database schema or ORM
    public void Save(Employee employee)
    {
        // Save to DB
    }
}

public class EmployeeReporter
{
    // Only reason to change: report format
    public string GenerateReport(Employee employee)
    {
        return $"Employee: {employee.Name}, Salary: {employee.Salary}";
    }
}

// Benefits:
// - Each class is easier to understand
// - Changes are localized (changing bonus logic doesn't affect reporting)
// - Easier to test
// - Easier to reuse

// Usage
var employee = new Employee { Name = "Alice", Salary = 50000 };
var calculator = new BonusCalculator();
var bonus = calculator.CalculateBonus(employee); // $5000`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the Open/Closed Principle (OCP)?",
      answer:
        "Software entities should be open for extension but closed for modification. You should be able to add new functionality without changing existing code. Achieved through inheritance, abstraction, and polymorphism.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// VIOLATES OCP - Need to modify for every new report type
public class ReportGenerator
{
    public void Generate(string reportType)
    {
        if (reportType == "PDF")
        {
            // Generate PDF
        }
        else if (reportType == "Excel")
        {
            // Generate Excel
        }
        else if (reportType == "HTML")
        {
            // Generate HTML
        }
        // Must modify this class for every new report type!
    }
}

// FOLLOWS OCP - Use abstraction to extend
public interface IReportFormatter
{
    void Format(ReportData data);
}

public class PdfReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate PDF
    }
}

public class ExcelReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate Excel
    }
}

public class HtmlReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate HTML
    }
}

public class ReportGenerator
{
    // Closed for modification - this doesn't change
    // Open for extension - add new formatters without changing this
    public void Generate(ReportData data, IReportFormatter formatter)
    {
        formatter.Format(data); // Works with any formatter
    }
}

// Adding new report type doesn't require changing ReportGenerator
public class JsonReportFormatter : IReportFormatter
{
    public void Format(ReportData data)
    {
        // Generate JSON
    }
}

// Usage
var generator = new ReportGenerator();
var data = new ReportData();

generator.Generate(data, new PdfReportFormatter());
generator.Generate(data, new ExcelReportFormatter());
generator.Generate(data, new JsonReportFormatter()); // New format!

// Benefits:
// - Existing code is not modified (lower risk of bugs)
// - New functionality can be added by creating new classes
// - Easier to test (mock formatters)
// - Better code organization`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the Liskov Substitution Principle (LSP)?",
      answer:
        "Derived classes must be substitutable for their base classes. If a class is a subclass of another, it should be usable wherever the parent class is expected without breaking the code. Violating this principle leads to unexpected behavior.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// VIOLATES LSP - Circle can't be substituted for Rectangle
public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
    
    public virtual int CalculateArea()
    {
        return Width * Height;
    }
}

public class Circle : Rectangle
{
    // Circle doesn't have Width and Height independently!
    // Setting Width should also set Height (radius)
    
    public override int Width
    {
        get => base.Width;
        set => base.Width = base.Height = value; // Violates expectations
    }
    
    public override int CalculateArea()
    {
        return (int)(Width * Width * 3.14); // Different calculation
    }
}

// Problem: Circle violates Rectangle's contract
public void ProcessRectangle(Rectangle rect)
{
    rect.Width = 5;
    rect.Height = 10;
    
    // Expected area: 5 * 10 = 50
    var area = rect.CalculateArea();
    
    if (rect is Circle)
        // area = 5 * 5 * 3.14 ≈ 78.5 - BROKEN!
    }
}

// FOLLOWS LSP - Proper inheritance hierarchy
public abstract class Shape
{
    public abstract int CalculateArea();
}

public class Rectangle : Shape
{
    public int Width { get; set; }
    public int Height { get; set; }
    
    public override int CalculateArea()
    {
        return Width * Height;
    }
}

public class Circle : Shape
{
    public int Radius { get; set; }
    
    public override int CalculateArea()
    {
        return (int)(Radius * Radius * 3.14);
    }
}

// Now all shapes can be substituted
public void ProcessShape(Shape shape)
{
    var area = shape.CalculateArea(); // Works correctly for any shape
}

// Usage
var shapes = new List<Shape>
{
    new Rectangle { Width = 5, Height = 10 },
    new Circle { Radius = 3 }
};

foreach (var shape in shapes)
{
    Console.WriteLine(shape.CalculateArea()); // Works correctly
}

// Benefits:
// - Inheritance is meaningful
// - Polymorphism works as expected
// - No surprises when substituting derived classes
// - Easier to reason about code`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the Interface Segregation Principle (ISP)?",
      answer:
        "Clients should not depend on interfaces they don't use. Create specific, focused interfaces instead of large general-purpose ones. This prevents classes from being forced to implement methods they don't need.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// VIOLATES ISP - Large interface with many methods
public interface IWorker
{
    void Work();
    void Eat();
    void Sleep();
    void Drive();
    void Code();
}

public class Developer : IWorker
{
    public void Work() { Console.WriteLine("Coding"); }
    public void Eat() { Console.WriteLine("Eating"); }
    public void Sleep() { Console.WriteLine("Sleeping"); }
    public void Drive() { Console.WriteLine("Driving"); }
    public void Code() { Console.WriteLine("Writing code"); }
}

public class Robot : IWorker
{
    public void Work() { Console.WriteLine("Working"); }
    public void Eat() { throw new NotImplementedException(); } // Robot doesn't eat!
    public void Sleep() { throw new NotImplementedException(); } // Robot doesn't sleep!
    public void Drive() { Console.WriteLine("Moving"); }
    public void Code() { throw new NotImplementedException(); } // Robot might not code!
    
    // Forced to implement methods it doesn't need
}

// FOLLOWS ISP - Small, focused interfaces
public interface IWorker
{
    void Work();
}

public interface IEater
{
    void Eat();
}

public interface ISleeper
{
    void Sleep();
}

public interface IDriver
{
    void Drive();
}

public interface IProgrammer
{
    void Code();
}

public class Developer : IWorker, IEater, ISleeper, IDriver, IProgrammer
{
    public void Work() { Console.WriteLine("Working"); }
    public void Eat() { Console.WriteLine("Eating"); }
    public void Sleep() { Console.WriteLine("Sleeping"); }
    public void Drive() { Console.WriteLine("Driving"); }
    public void Code() { Console.WriteLine("Coding"); }
}

public class Robot : IWorker, IDriver, IProgrammer
{
    // Only implements what it actually needs
    public void Work() { Console.WriteLine("Working"); }
    public void Drive() { Console.WriteLine("Moving"); }
    public void Code() { Console.WriteLine("Programming"); }
}

// Usage
var developer = new Developer();
ProcessWorker(developer); // Works

var robot = new Robot();
ProcessWorker(robot); // Works

public void ProcessWorker(IWorker worker)
{
    worker.Work();
}

public void ProcessProgrammer(IProgrammer programmer)
{
    programmer.Code();
}

// Benefits:
// - Classes only depend on what they use
// - No forced implementations of unnecessary methods
// - More flexible and reusable
// - Easier to understand what a class does
// - Changes to one interface don't affect unrelated classes`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is the Dependency Inversion Principle (DIP)?",
      answer:
        "High-level modules should not depend on low-level modules. Both should depend on abstractions. Depend on interfaces/abstractions, not concrete implementations. This decouples code and makes it more testable and flexible.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// VIOLATES DIP - Direct dependency on concrete classes
public class MySqlDatabase
{
    public void Save(User user)
    {
        // Save to MySQL
    }
}

public class UserService
{
    // High-level module depends on low-level module (MySqlDatabase)
    private MySqlDatabase database = new MySqlDatabase();
    
    public void CreateUser(User user)
    {
        database.Save(user); // Tightly coupled
    }
}

public class UserController
{
    private UserService userService = new UserService();
    
    public void CreateUser(User user)
    {
        userService.CreateUser(user);
    }
}

// Problems:
// - Can't switch databases without changing UserService
// - Hard to test (can't mock MySqlDatabase)
// - Tightly coupled
// - UserService depends on implementation details

// FOLLOWS DIP - Depend on abstractions
public interface IUserRepository
{
    void Save(User user);
}

public class MySqlUserRepository : IUserRepository
{
    public void Save(User user)
    {
        // Save to MySQL
    }
}

public class SqlServerUserRepository : IUserRepository
{
    public void Save(User user)
    {
        // Save to SQL Server
    }
}

public class UserService
{
    // Depends on abstraction, not concrete implementation
    private readonly IUserRepository userRepository;
    
    // Dependency injected through constructor
    public UserService(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }
    
    public void CreateUser(User user)
    {
        userRepository.Save(user); // Works with any repository
    }
}

public class UserController
{
    private readonly UserService userService;
    
    public UserController(UserService userService)
    {
        this.userService = userService; // Injected
    }
    
    public void CreateUser(User user)
    {
        userService.CreateUser(user);
    }
}

// Setup (using dependency injection container)
var repository = new MySqlUserRepository();
var service = new UserService(repository);
var controller = new UserController(service);

// Easy to switch databases
var sqlServerRepo = new SqlServerUserRepository();
var serviceWithSqlServer = new UserService(sqlServerRepo);

// Easy to test with mock
public class MockUserRepository : IUserRepository
{
    public void Save(User user) { } // Mock implementation
}

var testService = new UserService(new MockUserRepository());
// Now can test without actual database!

// Benefits:
// - Decoupled code (can swap implementations)
// - Easy to test (use mocks)
// - Follows Open/Closed Principle
// - More flexible and maintainable
// - Can easily add new repository types`,
        },
      ],
    },
    {
      id: "q7",
      question: "How do SOLID principles relate to each other? Give an example of following all five together.",
      answer:
        "SOLID principles work together to create clean, maintainable code. They complement each other: SRP focuses code, OCP extends it, LSP ensures substitution works, ISP segregates interfaces, and DIP decouples dependencies. Following one often encourages following others.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Example: E-commerce Order Processing System
// Demonstrates all SOLID principles working together

// 1. Single Responsibility - Each class has one job
public class Order
{
    public int Id { get; set; }
    public List<OrderItem> Items { get; set; }
    public decimal TotalAmount { get; set; }
}

// 2. Interface Segregation - Small, focused interfaces
public interface IOrderRepository
{
    void Save(Order order);
    Order GetById(int id);
}

public interface IPaymentProcessor
{
    bool ProcessPayment(Order order, PaymentMethod method);
}

public interface INotificationService
{
    void SendOrderConfirmation(Order order);
}

public interface IInventoryService
{
    void ReserveItems(Order order);
    void ReleaseReservation(Order order);
}

// 3. Liskov Substitution - Derived classes substitute parents correctly
public abstract class PaymentProcessor : IPaymentProcessor
{
    protected decimal Amount { get; set; }
    
    public virtual bool ProcessPayment(Order order, PaymentMethod method)
    {
        // Common logic
        Amount = order.TotalAmount;
        return ValidateAndProcess(method);
    }
    
    protected abstract bool ValidateAndProcess(PaymentMethod method);
}

public class CreditCardProcessor : PaymentProcessor
{
    protected override bool ValidateAndProcess(PaymentMethod method)
    {
        // Process credit card
        return true;
    }
}

public class PayPalProcessor : PaymentProcessor
{
    protected override bool ValidateAndProcess(PaymentMethod method)
    {
        // Process PayPal
        return true;
    }
}

// 4. Dependency Inversion & Open/Closed - Depend on abstractions
public class OrderService
{
    // Dependencies injected, not hardcoded
    private readonly IOrderRepository orderRepository;
    private readonly IPaymentProcessor paymentProcessor;
    private readonly INotificationService notificationService;
    private readonly IInventoryService inventoryService;
    
    public OrderService(
        IOrderRepository orderRepository,
        IPaymentProcessor paymentProcessor,
        INotificationService notificationService,
        IInventoryService inventoryService)
    {
        this.orderRepository = orderRepository;
        this.paymentProcessor = paymentProcessor;
        this.notificationService = notificationService;
        this.inventoryService = inventoryService;
    }
    
    // Single Responsibility - only handles order processing workflow
    public bool ProcessOrder(Order order, PaymentMethod paymentMethod)
    {
        // Reserve inventory first
        inventoryService.ReserveItems(order);
        
        // Process payment
        bool paymentSuccess = paymentProcessor.ProcessPayment(order, paymentMethod);
        
        if (!paymentSuccess)
        {
            // Release inventory if payment fails
            inventoryService.ReleaseReservation(order);
            return false;
        }
        
        // Save order
        orderRepository.Save(order);
        
        // Send notification
        notificationService.SendOrderConfirmation(order);
        
        return true;
    }
}

// 5. Open/Closed - Easy to extend with new implementations
public class EmailNotificationService : INotificationService
{
    public void SendOrderConfirmation(Order order)
    {
        // Send email notification
    }
}

public class SmsNotificationService : INotificationService
{
    public void SendOrderConfirmation(Order order)
    {
        // Send SMS notification
    }
}

public class SqlOrderRepository : IOrderRepository
{
    public void Save(Order order) { }
    public Order GetById(int id) { return new Order(); }
}

public class MongoOrderRepository : IOrderRepository
{
    public void Save(Order order) { }
    public Order GetById(int id) { return new Order(); }
}

// Usage - easy to compose and change implementations
var orderRepository = new SqlOrderRepository();
var paymentProcessor = new CreditCardProcessor();
var notificationService = new EmailNotificationService();
var inventoryService = new InventoryService();

var orderService = new OrderService(
    orderRepository,
    paymentProcessor,
    notificationService,
    inventoryService);

var order = new Order { Id = 1, TotalAmount = 100 };
orderService.ProcessOrder(order, PaymentMethod.CreditCard);

// Easy to change to different implementations
var orderService2 = new OrderService(
    new MongoOrderRepository(),
    new PayPalProcessor(),
    new SmsNotificationService(),
    inventoryService);

// Benefits of applying all SOLID principles:
// - Maintainable: Each class is focused and independent
// - Testable: Can mock any dependency
// - Extensible: Add new processors, repositories, notifications without changing existing code
// - Flexible: Easy to swap implementations
// - Clear: Code is organized and understandable`,
        },
      ],
    },
    {
      id: "q8",
      question: "What are common violations of SOLID principles and how to identify them?",
      answer:
        "Common violations include: classes doing too much (SRP), needing modification for new features (OCP), broken inheritance (LSP), forced interface implementations (ISP), tight coupling to concrete classes (DIP). Identify by looking for classes with multiple reasons to change, if-else statements for variations, unused method implementations, or direct instantiation of dependencies.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Red Flags - Signs of SOLID Violations

// 1. SRP Violation - Class has multiple reasons to change
public class BadUserManager // ❌ Bad name already suggests multiple responsibilities
{
    public void CreateUser(string name) { } // User management
    public void SendWelcomeEmail(string email) { } // Email service
    public void SaveToDatabase(User user) { } // Database service
    public void LogActivity(string message) { } // Logging service
    public void GenerateReport() { } // Reporting service
    
    // Signs:
    // - Class name with "Manager", "Service" (too generic)
    // - Many dependencies
    // - Multiple reasons to modify the class
    // - Hard to unit test
}

// 2. OCP Violation - Need to modify code for new features
public class BadOrderProcessor
{
    public void ProcessOrder(Order order, string paymentType)
    {
        if (paymentType == "CreditCard")
        {
            // Process credit card
        }
        else if (paymentType == "PayPal")
        {
            // Process PayPal
        }
        else if (paymentType == "Bitcoin")
        {
            // Process Bitcoin - NEED TO MODIFY THIS CLASS!
        }
        // Signs:
        // - Many if/else or switch statements
        // - Must modify existing code to add features
        // - Tight coupling to concrete types
    }
}

// 3. LSP Violation - Derived class breaks base contract
public class BadShape
{
    public virtual void Draw() { }
}

public class BadSquareDrawable : BadShape
{
    public override void Draw()
    {
        throw new NotImplementedException("Squares don't draw");
    }
    // Signs:
    // - Throwing NotImplementedException in overrides
    // - Override doesn't fulfill the contract
    // - Base type assumption is broken
}

// 4. ISP Violation - Forces unused methods
public class BadWorkerInterface
{
    public interface IWorker
    {
        void Work();
        void Eat();
        void Sleep();
        void Exercise();
        void GoToSchool();
    }
    
    public class Robot : IWorker
    {
        public void Work() { }
        public void Eat() { throw new NotImplementedException(); } // ❌ Not applicable
        public void Sleep() { throw new NotImplementedException(); } // ❌ Not applicable
        public void Exercise() { throw new NotImplementedException(); } // ❌ Not applicable
        public void GoToSchool() { throw new NotImplementedException(); } // ❌ Not applicable
        
        // Signs:
        // - Throwing NotImplementedException
        // - Empty implementations
        // - Methods that don't make sense for the class
    }
}

// 5. DIP Violation - Tight coupling to concrete classes
public class BadUserService
{
    // Direct instantiation - tight coupling
    private MySqlDatabase database = new MySqlDatabase();
    
    public void CreateUser(User user)
    {
        database.Save(user);
    }
    
    // Signs:
    // - Using 'new' to create dependencies
    // - Can't test without actual objects
    // - Hard to swap implementations
    // - High coupling
}

// How to Refactor (GOOD versions)

// 1. Fix SRP
public class GoodUserService // ✓ Single responsibility
{
    public void CreateUser(User user) { }
}

public class EmailService // ✓ Separate responsibility
{
    public void SendWelcomeEmail(string email) { }
}

// 2. Fix OCP
public interface IPaymentProcessor
{
    void Process(Order order);
}

public class CreditCardProcessor : IPaymentProcessor { }
public class PayPalProcessor : IPaymentProcessor { }
public class BitcoinProcessor : IPaymentProcessor { } // Easy to add

public class GoodOrderProcessor // ✓ Closed for modification
{
    public void ProcessOrder(Order order, IPaymentProcessor processor)
    {
        processor.Process(order); // Works with any processor
    }
}

// 3. Fix LSP
public abstract class GoodShape
{
    public abstract void Draw();
}

public class Circle : GoodShape
{
    public override void Draw() { /* Draw circle */ }
}

public class Square : GoodShape
{
    public override void Draw() { /* Draw square */ }
}

// 4. Fix ISP
public interface IWorker { void Work(); }
public interface IEater { void Eat(); }
public interface ISleeper { void Sleep(); }

public class Person : IWorker, IEater, ISleeper { }
public class Robot : IWorker { } // Only what it needs

// 5. Fix DIP
public class GoodUserService
{
    private readonly IUserRepository repository;
    
    // Dependency injected
    public GoodUserService(IUserRepository repository)
    {
        this.repository = repository;
    }
    
    public void CreateUser(User user)
    {
        repository.Save(user);
    }
}

// Automated Tools to Detect Violations:
// - Code metrics (complexity, coupling)
// - Roslyn analyzers
// - CodeSmell detectors
// - Unit test coverage (hard to test = violation)
// - Regular code reviews

// Key Questions to Ask:
// - Does this class have only one reason to change? (SRP)
// - Can I add new functionality without modifying existing code? (OCP)
// - Can I use derived classes anywhere the base is expected? (LSP)
// - Are all interface methods actually used? (ISP)
// - Can I test this without actual dependencies? (DIP)`,
        },
      ],
    },
    {
      id: "q9",
      question: "How do design patterns relate to SOLID principles?",
      answer:
        "Design patterns are implementations that often encourage following SOLID principles. Strategy pattern follows OCP, Adapter pattern follows ISP, Repository pattern follows DIP. Many design patterns exist specifically to help follow SOLID principles.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Relationship between Design Patterns and SOLID

// 1. Strategy Pattern - Follows OCP (Open/Closed)
public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void Pay(decimal amount) { }
}

public class PayPalPayment : IPaymentStrategy
{
    public void Pay(decimal amount) { }
}

public class ShoppingCart
{
    public void Checkout(IPaymentStrategy paymentMethod)
    {
        paymentMethod.Pay(GetTotal());
        // Open for extension - add new payment methods
        // Closed for modification - this method doesn't change
    }
}

// 2. Repository Pattern - Follows DIP (Dependency Inversion)
public interface IRepository<T>
{
    void Add(T item);
    T GetById(int id);
}

public class SqlRepository<T> : IRepository<T>
{
    public void Add(T item) { }
    public T GetById(int id) { return default; }
}

public class Service
{
    // Depends on abstraction, not concrete SqlRepository
    private readonly IRepository<User> repository;
    
    public Service(IRepository<User> repository)
    {
        this.repository = repository; // DIP
    }
}

// 3. Adapter Pattern - Follows ISP (Interface Segregation)
public interface IEmailSender
{
    void SendEmail(string to, string message);
}

public class ThirdPartyEmailService
{
    public void Send(string recipient, string body) { }
}

// Adapter to fit interface
public class EmailAdapter : IEmailSender
{
    private readonly ThirdPartyEmailService service;
    
    public void SendEmail(string to, string message)
    {
        service.Send(to, message); // Adapts to our interface
    }
}

// 4. Decorator Pattern - Follows OCP
public interface IComponent
{
    void Operation();
}

public class ConcreteComponent : IComponent
{
    public void Operation() { Console.WriteLine("Base operation"); }
}

public abstract class Decorator : IComponent
{
    protected IComponent component;
    
    public virtual void Operation()
    {
        component.Operation();
    }
}

public class ConcreteDecorator : Decorator
{
    public override void Operation()
    {
        Console.WriteLine("Before");
        base.Operation();
        Console.WriteLine("After");
    }
}

// Usage
IComponent component = new ConcreteComponent();
component = new ConcreteDecorator { component = component };
component.Operation();
// Extends functionality without modifying ConcreteComponent (OCP)

// 5. Factory Pattern - Follows DIP
public interface IProductFactory
{
    Product CreateProduct();
}

public class ConcreteFactory : IProductFactory
{
    public Product CreateProduct()
    {
        return new ConcreteProduct();
    }
}

public class Client
{
    private readonly IProductFactory factory;
    
    public Client(IProductFactory factory)
    {
        this.factory = factory; // DIP - depends on abstraction
    }
    
    public void DoSomething()
    {
        var product = factory.CreateProduct();
    }
}

// 6. Observer Pattern - Follows SRP
public interface IObserver
{
    void Update(string message);
}

public class Subject
{
    private List<IObserver> observers = new();
    
    public void Notify(string message)
    {
        foreach (var observer in observers)
        {
            observer.Update(message); // Each observer has one job
        }
    }
}

// 7. Template Method - Follows OCP and LSP
public abstract class DataProcessor
{
    public void ProcessData(string data)
    {
        ValidateData(data);
        TransformData(data);
        SaveData(data);
    }
    
    protected abstract void ValidateData(string data);
    protected abstract void TransformData(string data);
    protected abstract void SaveData(string data);
}

public class JsonProcessor : DataProcessor
{
    protected override void ValidateData(string data) { }
    protected override void TransformData(string data) { }
    protected override void SaveData(string data) { }
}

// Key Connection Points:
// Pattern          SOLID Principles
// Strategy         OCP (extend without modification)
// Repository       DIP (depend on abstraction)
// Adapter          ISP (create focused interfaces)
// Decorator        OCP (add functionality without modification)
// Factory          DIP (abstract object creation)
// Observer         SRP (each observer has one job)
// Template Method  OCP (extend by overriding methods)
// Singleton        SRP (single instance of one thing)`,
        },
      ],
    },
    {
      id: "q10",
      question: "How do you test code that follows SOLID principles?",
      answer:
        "Code following SOLID principles is naturally testable. Use dependency injection to inject mocks/fakes. Single Responsibility makes unit tests focused. Closed Principle with abstractions allows easy mocking. Interface Segregation enables testing specific behaviors. Dependency Inversion allows test doubles.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Xunit;
using Moq;

// Testing code that follows SOLID principles is easy

public interface IEmailService
{
    void SendEmail(string to, string subject, string body);
}

public interface IUserRepository
{
    void Save(User user);
    User GetById(int id);
}

// Service that depends on abstractions (DIP)
public class UserRegistrationService
{
    private readonly IUserRepository userRepository;
    private readonly IEmailService emailService;
    
    public UserRegistrationService(
        IUserRepository userRepository,
        IEmailService emailService)
    {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    
    public void RegisterUser(User user)
    {
        userRepository.Save(user);
        emailService.SendEmail(user.Email, "Welcome", "Welcome to our app");
    }
}

// Easy to test - can mock dependencies
public class UserRegistrationServiceTests
{
    [Fact]
    public void RegisterUser_SavesUserToRepository()
    {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        var mockEmailService = new Mock<IEmailService>();
        
        var service = new UserRegistrationService(
            mockRepository.Object,
            mockEmailService.Object);
        
        var user = new User { Email = "test@example.com", Name = "Test" };
        
        // Act
        service.RegisterUser(user);
        
        // Assert
        // Verify that Save was called with the correct user
        mockRepository.Verify(r => r.Save(It.Is<User>(u => u.Email == "test@example.com")), Times.Once);
    }
    
    [Fact]
    public void RegisterUser_SendsWelcomeEmail()
    {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        var mockEmailService = new Mock<IEmailService>();
        
        var service = new UserRegistrationService(
            mockRepository.Object,
            mockEmailService.Object);
        
        var user = new User { Email = "test@example.com", Name = "Test" };
        
        // Act
        service.RegisterUser(user);
        
        // Assert
        // Verify email was sent
        mockEmailService.Verify(
            e => e.SendEmail(
                It.IsAny<string>(),
                It.IsAny<string>(),
                It.IsAny<string>()),
            Times.Once);
    }
    
    [Fact]
    public void RegisterUser_RepositoryFailure_DoesNotSendEmail()
    {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        mockRepository.Setup(r => r.Save(It.IsAny<User>()))
            .Throws(new Exception("DB Error"));
        
        var mockEmailService = new Mock<IEmailService>();
        
        var service = new UserRegistrationService(
            mockRepository.Object,
            mockEmailService.Object);
        
        var user = new User { Email = "test@example.com" };
        
        // Act & Assert
        Assert.Throws<Exception>(() => service.RegisterUser(user));
        
        // Email should not be sent if save fails
        mockEmailService.Verify(e => e.SendEmail(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Never);
    }
}

// Testing with fake implementations (alternative to mocks)
public class FakeEmailService : IEmailService
{
    public List<string> SentEmails { get; } = new();
    
    public void SendEmail(string to, string subject, string body)
    {
        SentEmails.Add(to);
    }
}

public class FakeUserRepository : IUserRepository
{
    public List<User> SavedUsers { get; } = new();
    
    public void Save(User user)
    {
        SavedUsers.Add(user);
    }
    
    public User GetById(int id)
    {
        return SavedUsers.FirstOrDefault(u => u.Id == id);
    }
}

public class UserRegistrationServiceFakeTests
{
    [Fact]
    public void RegisterUser_WithFakes()
    {
        // Arrange
        var repository = new FakeUserRepository();
        var emailService = new FakeEmailService();
        
        var service = new UserRegistrationService(repository, emailService);
        var user = new User { Email = "test@example.com", Name = "Test" };
        
        // Act
        service.RegisterUser(user);
        
        // Assert
        Assert.Single(repository.SavedUsers);
        Assert.Single(emailService.SentEmails);
        Assert.Equal("test@example.com", emailService.SentEmails[0]);
    }
}

// Benefits of SOLID for Testing:
// 1. Dependency Injection - inject test doubles
// 2. Small Interfaces - test specific behaviors
// 3. Single Responsibility - focused unit tests
// 4. Open/Closed - extend behavior without changing tests
// 5. Liskov Substitution - substitutes work in tests
// 6. Abstraction - can create mocks and fakes

// Anti-pattern - Hard to test without SOLID
public class BadUserRegistrationService
{
    private MySqlDatabase database = new MySqlDatabase(); // Tight coupling
    private SmtpEmailSender emailService = new SmtpEmailSender(); // Tight coupling
    
    public void RegisterUser(User user)
    {
        database.Save(user); // Can't mock
        emailService.SendEmail(user.Email, "Welcome", "Welcome"); // Can't mock
    }
}

// This requires actual database and email service to test!
// No way to inject mocks`,
        },
      ],
    },
  ],
};
