import type { Topic } from "../../../types";

export const csharpCreationalPatternsTopic: Topic = {
  id: "csharp-creational",
  name: "Creational Patterns",
  questions: [
    {
      id: "q1",
      question: "What is the Singleton pattern and how do you implement it in C#?",
      answer:
        "The Singleton pattern ensures a class has only one instance and provides a global point of access to it. It's useful for centralized management of resources like database connections, logging, or configuration. There are multiple implementation approaches with different thread-safety guarantees.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Eager initialization - Thread-safe
public class Singleton
{
    private static readonly Singleton _instance = new Singleton();
    
    private Singleton() { }
    
    public static Singleton Instance => _instance;
}

// Lazy initialization - Thread-safe with Lazy<T>
public class SingletonLazy
{
    private static readonly Lazy<SingletonLazy> _instance = 
        new Lazy<SingletonLazy>(() => new SingletonLazy());
    
    private SingletonLazy() { }
    
    public static SingletonLazy Instance => _instance.Value;
}

// Usage
var singleton1 = Singleton.Instance;
var singleton2 = Singleton.Instance;
Console.WriteLine(ReferenceEquals(singleton1, singleton2)); // true`,
        },
      ],
    },
    {
      id: "q2",
      question: "Explain the Factory Method pattern with a C# example.",
      answer:
        "The Factory Method pattern defines an interface for creating objects, but lets subclasses decide which class to instantiate. It promotes loose coupling by eliminating the need to bind application-specific classes into the code.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Abstract Creator
public abstract class DatabaseFactory
{
    public abstract IDatabase CreateDatabase();
    
    public void InitializeDatabase()
    {
        var db = CreateDatabase();
        db.Connect();
    }
}

// Concrete Creators
public class SqlServerFactory : DatabaseFactory
{
    public override IDatabase CreateDatabase() => new SqlServerDatabase();
}

public class MySqlFactory : DatabaseFactory
{
    public override IDatabase CreateDatabase() => new MySqlDatabase();
}

// Product Interface
public interface IDatabase
{
    void Connect();
    void ExecuteQuery(string query);
}

// Concrete Products
public class SqlServerDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connected to SQL Server");
    public void ExecuteQuery(string query) => Console.WriteLine($"Executing: {query}");
}

public class MySqlDatabase : IDatabase
{
    public void Connect() => Console.WriteLine("Connected to MySQL");
    public void ExecuteQuery(string query) => Console.WriteLine($"Executing: {query}");
}

// Usage
DatabaseFactory factory = new SqlServerFactory();
factory.InitializeDatabase();`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the Abstract Factory pattern and when should you use it?",
      answer:
        "The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. Use it when you need to create multiple related objects that must work together, such as UI elements for different platforms (Windows, macOS) or database providers with different drivers.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Abstract Factory
public interface IUIFactory
{
    IButton CreateButton();
    ITextBox CreateTextBox();
}

// Product Interfaces
public interface IButton { void Click(); }
public interface ITextBox { void Type(string text); }

// Concrete Factories
public class WindowsUIFactory : IUIFactory
{
    public IButton CreateButton() => new WindowsButton();
    public ITextBox CreateTextBox() => new WindowsTextBox();
}

public class MacUIFactory : IUIFactory
{
    public IButton CreateButton() => new MacButton();
    public ITextBox CreateTextBox() => new MacTextBox();
}

// Concrete Products
public class WindowsButton : IButton { public void Click() => Console.WriteLine("Windows Button clicked"); }
public class MacButton : IButton { public void Click() => Console.WriteLine("Mac Button clicked"); }
public class WindowsTextBox : ITextBox { public void Type(string text) => Console.WriteLine($"Windows TextBox: {text}"); }
public class MacTextBox : ITextBox { public void Type(string text) => Console.WriteLine($"Mac TextBox: {text}"); }

// Client Code
public class Application
{
    private IButton _button;
    private ITextBox _textBox;
    
    public Application(IUIFactory factory)
    {
        _button = factory.CreateButton();
        _textBox = factory.CreateTextBox();
    }
    
    public void Run()
    {
        _button.Click();
        _textBox.Type("Hello");
    }
}

// Usage
IUIFactory factory = Environment.OSVersion.Platform == PlatformID.Win32NT 
    ? new WindowsUIFactory() : new MacUIFactory();
var app = new Application(factory);
app.Run();`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the Builder pattern and why is it useful?",
      answer:
        "The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations. It's useful for objects with many optional parameters and makes code more readable than multiple constructor overloads.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Product
public class Computer
{
    public string CPU { get; set; }
    public string RAM { get; set; }
    public string Storage { get; set; }
    public string GPU { get; set; }
    public bool HasWiFi { get; set; }
    
    public override string ToString()
    {
        return $"CPU: {CPU}, RAM: {RAM}, Storage: {Storage}, GPU: {GPU}, WiFi: {HasWiFi}";
    }
}

// Builder
public class ComputerBuilder
{
    private Computer _computer = new Computer();
    
    public ComputerBuilder WithCPU(string cpu)
    {
        _computer.CPU = cpu;
        return this;
    }
    
    public ComputerBuilder WithRAM(string ram)
    {
        _computer.RAM = ram;
        return this;
    }
    
    public ComputerBuilder WithStorage(string storage)
    {
        _computer.Storage = storage;
        return this;
    }
    
    public ComputerBuilder WithGPU(string gpu)
    {
        _computer.GPU = gpu;
        return this;
    }
    
    public ComputerBuilder WithWiFi(bool hasWiFi = true)
    {
        _computer.HasWiFi = hasWiFi;
        return this;
    }
    
    public Computer Build() => _computer;
}

// Usage
var computer = new ComputerBuilder()
    .WithCPU("Intel i7")
    .WithRAM("16GB")
    .WithStorage("512GB SSD")
    .WithGPU("RTX 3080")
    .WithWiFi()
    .Build();
    
Console.WriteLine(computer);`,
        },
      ],
    },
    {
      id: "q5",
      question: "Explain the Prototype pattern in C#.",
      answer:
        "The Prototype pattern creates new objects by cloning an existing object rather than creating from scratch. It's useful when object creation is expensive or complex. In C#, you implement the ICloneable interface or use a Clone method.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Prototype interface
public interface IPrototype
{
    IPrototype Clone();
}

// Concrete Prototype
public class User : IPrototype
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<string> Roles { get; set; }
    
    public IPrototype Clone()
    {
        return new User
        {
            Id = this.Id,
            Name = this.Name,
            Roles = new List<string>(this.Roles) // Deep copy
        };
    }
}

// Usage
var originalUser = new User 
{ 
    Id = 1, 
    Name = "John", 
    Roles = new List<string> { "Admin", "User" } 
};

var clonedUser = (User)originalUser.Clone();
clonedUser.Name = "Jane";
clonedUser.Roles.Add("Manager");

Console.WriteLine($"Original: {originalUser.Name}, Roles: {string.Join(", ", originalUser.Roles)}");
Console.WriteLine($"Cloned: {clonedUser.Name}, Roles: {string.Join(", ", clonedUser.Roles)}");`,
        },
      ],
    },
  ],
};
