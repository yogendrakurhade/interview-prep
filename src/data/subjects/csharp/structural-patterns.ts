import type { Topic } from "../../../types";

export const csharpStructuralPatternsTopic: Topic = {
  id: "csharp-structural",
  name: "Structural Patterns",
  questions: [
    {
      id: "q6",
      question: "What is the Adapter pattern and provide a C# example.",
      answer:
        "The Adapter pattern converts the interface of a class into another interface clients expect. It lets classes work together that couldn't otherwise because of incompatible interfaces. It's useful for integrating legacy code or third-party libraries.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Existing interface (third-party)
public interface ILegacySystem
{
    string GetData();
}

// Legacy implementation
public class LegacySystem : ILegacySystem
{
    public string GetData() => "Data from legacy system";
}

// New interface we want to use
public interface IModernSystem
{
    object FetchData();
}

// Adapter
public class LegacyToModernAdapter : IModernSystem
{
    private ILegacySystem _legacySystem;
    
    public LegacyToModernAdapter(ILegacySystem legacySystem)
    {
        _legacySystem = legacySystem;
    }
    
    public object FetchData()
    {
        return new { data = _legacySystem.GetData(), timestamp = DateTime.Now };
    }
}

// Usage
ILegacySystem legacy = new LegacySystem();
IModernSystem modern = new LegacyToModernAdapter(legacy);
var result = modern.FetchData(); // Works seamlessly`,
        },
      ],
    },
    {
      id: "q7",
      question: "Explain the Decorator pattern in C#.",
      answer:
        "The Decorator pattern attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality. It lets you wrap objects in decorators to add features without modifying original classes.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Component interface
public interface ICoffee
{
    string GetDescription();
    decimal GetCost();
}

// Concrete Component
public class SimpleCoffee : ICoffee
{
    public string GetDescription() => "Simple Coffee";
    public decimal GetCost() => 2.00m;
}

// Decorators
public abstract class CoffeeDecorator : ICoffee
{
    protected ICoffee _coffee;
    
    public CoffeeDecorator(ICoffee coffee)
    {
        _coffee = coffee;
    }
    
    public virtual string GetDescription() => _coffee.GetDescription();
    public virtual decimal GetCost() => _coffee.GetCost();
}

public class MilkDecorator : CoffeeDecorator
{
    public MilkDecorator(ICoffee coffee) : base(coffee) { }
    
    public override string GetDescription() => _coffee.GetDescription() + ", Milk";
    public override decimal GetCost() => _coffee.GetCost() + 0.50m;
}

public class ChocolateDecorator : CoffeeDecorator
{
    public ChocolateDecorator(ICoffee coffee) : base(coffee) { }
    
    public override string GetDescription() => _coffee.GetDescription() + ", Chocolate";
    public override decimal GetCost() => _coffee.GetCost() + 0.75m;
}

// Usage
ICoffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new ChocolateDecorator(coffee);

Console.WriteLine(\`\${coffee.GetDescription()}: \${coffee.GetCost()}\`);
// Output: Simple Coffee, Milk, Chocolate: $3.25`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is the Facade pattern and when do you use it?",
      answer:
        "The Facade pattern provides a unified, simplified interface to a set of interfaces in a subsystem. It hides the complexity of the subsystem and makes it easier for clients to use. Use it when you have a complex subsystem and want to provide a simple interface.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Complex subsystem
public class DatabaseService
{
    public void Connect(string connectionString) => Console.WriteLine("Database connected");
    public void Authenticate(string username, string password) => Console.WriteLine("User authenticated");
}

public class CacheService
{
    public void Initialize() => Console.WriteLine("Cache initialized");
}

public class LoggingService
{
    public void Log(string message) => Console.WriteLine($"Log: {message}");
}

// Facade
public class ApplicationFacade
{
    private DatabaseService _db;
    private CacheService _cache;
    private LoggingService _logger;
    
    public ApplicationFacade()
    {
        _db = new DatabaseService();
        _cache = new CacheService();
        _logger = new LoggingService();
    }
    
    public void InitializeApplication(string connectionString, string user, string password)
    {
        _logger.Log("Initializing application...");
        _db.Connect(connectionString);
        _db.Authenticate(user, password);
        _cache.Initialize();
        _logger.Log("Application initialized successfully");
    }
}

// Usage - Simple!
var facade = new ApplicationFacade();
facade.InitializeApplication("Server=localhost", "admin", "password");`,
        },
      ],
    },
    {
      id: "q9",
      question: "Explain the Proxy pattern in C#.",
      answer:
        "The Proxy pattern provides a substitute or placeholder for another object to control access to it. It can add behavior like lazy initialization, logging, access control, or caching without changing the original object.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Subject interface
public interface IDataService
{
    string FetchData(int id);
}

// Real subject - expensive to create/use
public class RealDataService : IDataService
{
    public string FetchData(int id)
    {
        System.Threading.Thread.Sleep(2000); // Simulate delay
        return $"Data for ID: {id}";
    }
}

// Proxy with caching
public class DataServiceProxy : IDataService
{
    private RealDataService _realService;
    private Dictionary<int, string> _cache = new Dictionary<int, string>();
    
    public string FetchData(int id)
    {
        if (_cache.ContainsKey(id))
        {
            Console.WriteLine($"Cache hit for ID: {id}");
            return _cache[id];
        }
        
        Console.WriteLine($"Cache miss for ID: {id}, fetching from real service...");
        _realService ??= new RealDataService();
        
        var data = _realService.FetchData(id);
        _cache[id] = data;
        return data;
    }
}

// Usage
IDataService service = new DataServiceProxy();
Console.WriteLine(service.FetchData(1)); // Slow - fetches from real service
Console.WriteLine(service.FetchData(1)); // Fast - from cache
Console.WriteLine(service.FetchData(2)); // Slow - fetches from real service`,
        },
      ],
    },
    {
      id: "q10",
      question: "What is the Bridge pattern?",
      answer:
        "The Bridge pattern decouples an abstraction from its implementation so they can vary independently. It's useful when you want to avoid permanent binding between abstraction and implementation, allowing both to vary without affecting each other.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Implementor
public interface IRenderer
{
    void RenderCircle(float x, float y, float radius);
}

// Concrete Implementors
public class RasterRenderer : IRenderer
{
    public void RenderCircle(float x, float y, float radius)
        => Console.WriteLine($"Raster rendering circle at ({x}, {y}) with radius {radius}");
}

public class VectorRenderer : IRenderer
{
    public void RenderCircle(float x, float y, float radius)
        => Console.WriteLine($"Vector rendering circle at ({x}, {y}) with radius {radius}");
}

// Abstraction
public abstract class Shape
{
    protected IRenderer _renderer;
    
    public Shape(IRenderer renderer)
    {
        _renderer = renderer;
    }
    
    public abstract void Draw();
}

// Refined Abstraction
public class Circle : Shape
{
    private float _x, _y, _radius;
    
    public Circle(float x, float y, float radius, IRenderer renderer) : base(renderer)
    {
        _x = x;
        _y = y;
        _radius = radius;
    }
    
    public override void Draw() => _renderer.RenderCircle(_x, _y, _radius);
}

// Usage
Circle vectorCircle = new Circle(10, 20, 5, new VectorRenderer());
Circle rasterCircle = new Circle(10, 20, 5, new RasterRenderer());

vectorCircle.Draw(); // Vector rendering circle...
rasterCircle.Draw(); // Raster rendering circle...`,
        },
      ],
    },
  ],
};
