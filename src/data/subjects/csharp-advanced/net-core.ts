import type { Topic } from "../../../types";

export const csharpNetCoreTopic: Topic = {
  id: "csharp-net-core",
  name: ".NET Core",
  questions: [
    {
      id: "q1",
      question: "What is .NET Core and how is it different from .NET Framework?",
      answer:
        ".NET Core is a cross-platform, open-source runtime for building modern applications. .NET Framework is Windows-only, older, not open-source. .NET Core runs on Windows, Linux, macOS. .NET Core is faster, lighter, modular. .NET Core 5+ is now called just '.NET'. Use .NET Core for new projects.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// .NET Core Program.cs - Minimal hosting setup
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

// Check .NET version at runtime
Console.WriteLine($".NET Version: {System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription}");
// Output: .NET Version: .NET 7.0.0

// Simple .NET Core console app
var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddScoped<IGreeter, Greeter>();
    })
    .Build();

using (host)
{
    var greeter = host.Services.GetRequiredService<IGreeter>();
    greeter.Greet("World");
}

public interface IGreeter
{
    void Greet(string name);
}

public class Greeter : IGreeter
{
    public void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
}

// Key differences comparison
Console.WriteLine("Comparison: .NET Core vs .NET Framework");
Console.WriteLine("Feature              .NET Core              .NET Framework");
Console.WriteLine("Cross-platform       Yes                    No (Windows only)");
Console.WriteLine("Open source          Yes                    No");
Console.WriteLine("Performance          Faster                 Slower");
Console.WriteLine("Size                 Lightweight            Heavy");
Console.WriteLine("NuGet                Modern                 Older");
Console.WriteLine("async/await          First class            Added later");
Console.WriteLine("Dependency inject    Built-in               Requires package");
Console.WriteLine("Latest version       .NET 8                 4.8 (legacy)");
Console.WriteLine("LTS                  .NET 8 (Nov 2024)      Not applicable");
Console.WriteLine("Active support       Yes                    Limited");

// .NET Core projects are simpler
// .NET Framework:
// <Project Sdk="Microsoft.NET.Sdk">
//   <TargetFramework>net472</TargetFramework>
// </Project>

// .NET Core (modern):
// <Project Sdk="Microsoft.NET.Sdk">
//   <TargetFramework>net8.0</TargetFramework>
// </Project>

// Package format changed
// .NET Framework: packages.config (XML)
// .NET Core: PackageReference in .csproj (cleaner)

// NuGet package restoration is automatic in .NET Core
// No need for "Update-Package" command`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Dependency Injection (DI) and how does it work in .NET Core?",
      answer:
        "DI is a pattern where dependencies are injected rather than created internally. .NET Core has built-in DI in IServiceCollection. Register services (singleton, scoped, transient). Inject via constructor. Singleton - one instance forever. Scoped - one per request. Transient - new instance each time.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

// ========== SERVICE REGISTRATION ==========
var services = new ServiceCollection();

// 1. SINGLETON - One instance for entire application
services.AddSingleton<IConfiguration>(new ConfigurationBuilder().Build());
// Expensive to create, stateless services

// 2. SCOPED - New instance per request (web apps)
services.AddScoped<IUserRepository, UserRepository>();
// Default for web apps, perfect for DbContext

// 3. TRANSIENT - New instance every time
services.AddTransient<ILogger, ConsoleLogger>();
// Lightweight, stateless objects

// ========== SERVICE INJECTION ==========
public class UserService
{
    private readonly IUserRepository repository;
    private readonly ILogger logger;
    
    // Constructor injection
    public UserService(IUserRepository repository, ILogger logger)
    {
        this.repository = repository;
        this.logger = logger;
    }
    
    public User GetUser(int id)
    {
        logger.Log($"Fetching user {id}");
        return repository.GetById(id);
    }
}

// ========== REAL EXAMPLE ==========
public interface IUserRepository
{
    User GetById(int id);
    void Save(User user);
}

public class UserRepository : IUserRepository
{
    public User GetById(int id)
    {
        return new User { Id = id, Name = "Alice" };
    }
    
    public void Save(User user)
    {
        Console.WriteLine($"Saving user: {user.Name}");
    }
}

public interface ILogger
{
    void Log(string message);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"[LOG] {message}");
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
}

// ========== SETUP PROGRAM ==========
var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        // Register dependencies
        services.AddSingleton<ILogger, ConsoleLogger>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<UserService>();
    })
    .Build();

// Get service and use it
using (host)
{
    var userService = host.Services.GetRequiredService<UserService>();
    var user = userService.GetUser(1);
    Console.WriteLine(user.Name);
}

// ========== LIFETIME COMPARISON ==========
Console.WriteLine("Lifetime Comparison:");
Console.WriteLine("Lifetime    Instance   Use Case");
Console.WriteLine("Singleton   1 total    Config, logging factory, cache");
Console.WriteLine("Scoped      1/request  DbContext, unit of work");
Console.WriteLine("Transient   Always new Stateless utilities");

// ========== FACTORY PATTERN ==========
services.AddScoped<IUserRepository>(provider =>
{
    var logger = provider.GetRequiredService<ILogger>();
    return new UserRepository(); // Custom creation logic
});

// ========== IServiceProvider USAGE ==========
var serviceProvider = services.BuildServiceProvider();

// Resolve service
var logger = serviceProvider.GetRequiredService<ILogger>();
logger.Log("Application started");

// Try get service (doesn't throw if not found)
if (serviceProvider.GetService(typeof(IUserRepository)) is IUserRepository repo)
{
    Console.WriteLine("Repository found");
}

// ========== COMMON PITFALL: Captive dependency ==========
// BAD: Scoped dependency injected into Singleton
// services.AddSingleton<MySingleton>(); // Holds reference
// services.AddScoped<MyScoped>(); // Can't be scoped if singleton needs it

// GOOD: Inject IServiceProvider instead
public class BadSingleton
{
    private readonly IUserRepository repository; // WRONG!
    
    public BadSingleton(IUserRepository repository)
    {
        this.repository = repository; // Holds scoped object forever
    }
}

public class GoodSingleton
{
    private readonly IServiceProvider provider;
    
    public GoodSingleton(IServiceProvider provider)
    {
        this.provider = provider; // Can create new scopes
    }
    
    public User GetUser(int id)
    {
        using var scope = provider.CreateScope();
        var repo = scope.ServiceProvider.GetRequiredService<IUserRepository>();
        return repo.GetById(id);
    }
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the middleware pipeline in ASP.NET Core and how does it work?",
      answer:
        "Middleware is a component that processes HTTP requests/responses. They form a pipeline where each middleware can modify request/response or pass to next. Order matters - added in Program.cs in order. Request flows through, response comes back through (onion model). Common: logging, auth, CORS, error handling.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

// ========== MIDDLEWARE PIPELINE SETUP ==========
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Middleware order is important (top to bottom)
// 1. Exception handler must be FIRST
app.UseExceptionHandler("/error");

// 2. HTTPS redirect
app.UseHttpsRedirection();

// 3. Static files (before routing)
app.UseStaticFiles();

// 4. Routing
app.UseRouting();

// 5. Authentication
app.UseAuthentication();

// 6. Authorization
app.UseAuthorization();

// 7. Custom middleware
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Path}");
    await next(); // Pass to next middleware
    Console.WriteLine($"Response: {context.Response.StatusCode}");
});

// 8. Endpoint mapping
app.MapGet("/", () => "Hello World");

app.Run();

// ========== CUSTOM MIDDLEWARE CLASS ==========
public class LoggingMiddleware
{
    private readonly RequestDelegate next;
    
    public LoggingMiddleware(RequestDelegate next)
    {
        this.next = next;
    }
    
    public async Task InvokeAsync(HttpContext context)
    {
        // Before request
        Console.WriteLine($"Incoming: {context.Request.Method} {context.Request.Path}");
        var startTime = DateTime.UtcNow;
        
        try
        {
            // Call next middleware
            await next(context);
        }
        finally
        {
            // After request (even if exception)
            var duration = DateTime.UtcNow - startTime;
            Console.WriteLine($"Outgoing: {context.Response.StatusCode} ({duration.TotalMilliseconds}ms)");
        }
    }
}

// Register custom middleware
app.UseMiddleware<LoggingMiddleware>();

// ========== MIDDLEWARE PIPELINE FLOW (ONION MODEL) ==========
// Request comes in
// ↓ ExceptionHandler
// ↓ HttpsRedirection
// ↓ StaticFiles
// ↓ Routing
// ↓ Authentication
// ↓ Authorization
// ↓ Custom middleware
// ↓ Endpoint handler
// ↑ Response flows back up through same pipeline
// Response sent

// ========== INLINE MIDDLEWARE ==========
app.Use(async (context, next) =>
{
    // Modify request
    if (context.Request.Path == "/admin")
    {
        if (!context.User.Identity.IsAuthenticated)
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("Unauthorized");
            return; // Don't call next - stop pipeline
        }
    }
    
    await next(); // Pass to next middleware
});

// ========== CONDITIONAL MIDDLEWARE ==========
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/error");
}

// ========== SHORT-CIRCUIT MIDDLEWARE ==========
app.MapGet("/health", () => Results.Ok("Healthy"));
// Short-circuits - doesn't go through endpoint handler

// ========== MIDDLEWARE WITH OPTIONS ==========
app.UseCors(policy =>
{
    policy.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader();
});

// ========== TERMINAL MIDDLEWARE ==========
// Middleware that doesn't call next()
app.Run(async context =>
{
    // This terminates the pipeline
    await context.Response.WriteAsync("This is the end");
});

// Anything after app.Run() won't execute

// ========== BEST PRACTICES ==========
Console.WriteLine("Middleware Best Practices:");
Console.WriteLine("1. Exception handler FIRST");
Console.WriteLine("2. HTTPS before routing");
Console.WriteLine("3. Static files before routing");
Console.WriteLine("4. Auth/Authorization in order");
Console.WriteLine("5. Custom middleware before endpoints");
Console.WriteLine("6. Use try-finally to ensure cleanup");
Console.WriteLine("7. Call next() to pass to next middleware");
Console.WriteLine("8. Don't call next() to terminate pipeline");`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is configuration management in .NET Core? How do you read app settings?",
      answer:
        "Configuration in .NET Core comes from multiple sources: appsettings.json, environment variables, command-line args. Use IConfiguration interface. Access nested values with ':' separator. Environment-specific files like appsettings.Development.json override defaults. Options pattern provides type-safe configuration access.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

// ========== BASIC CONFIGURATION SETUP ==========
var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true)
    .AddEnvironmentVariables()
    .AddCommandLine(args)
    .Build();

// appsettings.json
/*
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=mydb;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  },
  "AppSettings": {
    "ApiUrl": "https://api.example.com",
    "Timeout": 30,
    "EnableCache": true
  }
}
*/

// ========== READING CONFIGURATION ==========
// Access top-level keys
string? apiUrl = configuration["AppSettings:ApiUrl"];

// Access connection string
string? connString = configuration.GetConnectionString("DefaultConnection");

// Get nested value
string logLevel = configuration["Logging:LogLevel:Default"];

// Get with default value
string? cache = configuration["AppSettings:EnableCache"] ?? "false";

// ========== TYPE-SAFE CONFIGURATION (OPTIONS PATTERN) ==========
public class AppSettings
{
    public string ApiUrl { get; set; }
    public int Timeout { get; set; }
    public bool EnableCache { get; set; }
}

public class DatabaseSettings
{
    public string Host { get; set; }
    public int Port { get; set; }
    public string Database { get; set; }
}

// Register options in DI
var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<AppSettings>(configuration.GetSection("AppSettings"));
builder.Services.Configure<DatabaseSettings>(configuration.GetSection("Database"));

var app = builder.Build();

// ========== INJECTING OPTIONS ==========
public class MyService
{
    private readonly AppSettings settings;
    
    // Inject IOptions<T>
    public MyService(IOptions<AppSettings> options)
    {
        settings = options.Value; // Get typed settings
    }
    
    public void DoSomething()
    {
        Console.WriteLine($"API URL: {settings.ApiUrl}");
        Console.WriteLine($"Timeout: {settings.Timeout}");
    }
}

// Or use IOptionsMonitor for live reload
public class MyServiceWithMonitor
{
    private readonly IOptionsMonitor<AppSettings> monitor;
    
    public MyServiceWithMonitor(IOptionsMonitor<AppSettings> monitor)
    {
        this.monitor = monitor;
    }
    
    public void DoSomething()
    {
        var settings = monitor.CurrentValue; // Gets latest value
    }
}

// ========== ENVIRONMENT-SPECIFIC SETTINGS ==========
// appsettings.json (base)
// appsettings.Development.json (overrides)
// appsettings.Production.json (overrides)

// appsettings.Development.json
/*
{
  "Logging": {
    "LogLevel": {
      "Default": "Debug"
    }
  },
  "AppSettings": {
    "ApiUrl": "https://localhost:5001"
  }
}
*/

// Get current environment
var environment = builder.Environment;
Console.WriteLine($"Environment: {environment.EnvironmentName}");

if (environment.IsDevelopment())
{
    // Development-only setup
}
else if (environment.IsProduction())
{
    // Production-only setup
}

// ========== ENVIRONMENT VARIABLES ==========
// Set in system or via .env file
// var value = configuration["MyEnvVariable"];

// Override JSON with env vars
// Docker: Set environment variables
// Windows: setx MYKEY myvalue

// ========== COMMAND-LINE ARGUMENTS ==========
// dotnet run --AppSettings:ApiUrl="https://custom-api.com"
var customUrl = configuration["AppSettings:ApiUrl"];

// ========== CONFIGURATION VALIDATION ==========
public class ValidatedSettings
{
    [Range(1, 100)]
    public int Timeout { get; set; }
    
    [Required]
    public string ApiUrl { get; set; }
    
    [EmailAddress]
    public string AdminEmail { get; set; }
}

// Validate on startup
builder.Services.AddOptions<ValidatedSettings>()
    .BindConfiguration("AppSettings")
    .ValidateDataAnnotations()
    .ValidateOnStart(); // Fail fast

// ========== KEY VAULT INTEGRATION ==========
// For production secrets
var keyVaultUrl = new Uri("https://myvault.vault.azure.net/");
builder.Configuration.AddAzureKeyVault(
    keyVaultUrl,
    new DefaultAzureCredential()
);

// Secrets in Key Vault override JSON

// ========== CONFIGURATION BINDING ==========
var appSettings = configuration.GetSection("AppSettings").Get<AppSettings>();

// Now appSettings has typed values
Console.WriteLine($"URL: {appSettings.ApiUrl}");
Console.WriteLine($"Timeout: {appSettings.Timeout}");

// ========== RELOAD ON CHANGE ==========
// Set reloadOnChange: true
configuration.GetReloadToken().RegisterChangeCallback(_ =>
{
    Console.WriteLine("Configuration changed!");
}, null);`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is Entity Framework Core (EF Core) and how does it differ from EF 6?",
      answer:
        "EF Core is a lightweight ORM for .NET Core. EF 6 is older ORM for .NET Framework. EF Core is faster, modular, supports multiple databases. EF Core has DbSet/DbContext for accessing databases. Use DbContext for queries and CRUD. EF Core supports LINQ-to-database queries.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

// ========== DBCONTEXT ==========
public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Order> Orders { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // Configure database
        options.UseSqlServer("Server=localhost;Database=mydb;");
    }
}

// ========== MODELS ==========
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    
    // Navigation property
    public ICollection<Order> Orders { get; set; } = new List<Order>();
}

public class Order
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public decimal Amount { get; set; }
    public DateTime CreatedDate { get; set; }
    
    // Foreign key relationship
    public User User { get; set; }
}

// ========== DEPENDENCY INJECTION SETUP ==========
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

var app = builder.Build();

// ========== CRUD OPERATIONS ==========
public class UserRepository
{
    private readonly ApplicationDbContext context;
    
    public UserRepository(ApplicationDbContext context)
    {
        this.context = context;
    }
    
    // CREATE
    public async Task<User> CreateUserAsync(User user)
    {
        context.Users.Add(user);
        await context.SaveChangesAsync();
        return user;
    }
    
    // READ
    public async Task<User> GetUserAsync(int id)
    {
        return await context.Users.FindAsync(id);
    }
    
    // READ ALL
    public async Task<List<User>> GetAllUsersAsync()
    {
        return await context.Users.ToListAsync();
    }
    
    // UPDATE
    public async Task<User> UpdateUserAsync(User user)
    {
        context.Users.Update(user);
        await context.SaveChangesAsync();
        return user;
    }
    
    // DELETE
    public async Task DeleteUserAsync(int id)
    {
        var user = await context.Users.FindAsync(id);
        if (user != null)
        {
            context.Users.Remove(user);
            await context.SaveChangesAsync();
        }
    }
}

// ========== LINQ QUERIES ==========
public class QueryExamples
{
    private readonly ApplicationDbContext context;
    
    public QueryExamples(ApplicationDbContext context)
    {
        this.context = context;
    }
    
    // Simple query
    public async Task<List<User>> GetActiveUsers()
    {
        return await context.Users
            .Where(u => u.Email.Contains("@example.com"))
            .ToListAsync();
    }
    
    // Join query
    public async Task<List<(User user, int orderCount)>> GetUsersWithOrderCount()
    {
        return await context.Users
            .Include(u => u.Orders)
            .Select(u => new ValueTuple<User, int>(u, u.Orders.Count))
            .ToListAsync();
    }
    
    // Aggregation
    public async Task<decimal> GetTotalOrderAmount()
    {
        return await context.Orders
            .SumAsync(o => o.Amount);
    }
    
    // Grouping
    public async Task<List<(int userId, decimal totalAmount)>> GetUserTotalOrders()
    {
        return await context.Orders
            .GroupBy(o => o.UserId)
            .Select(g => new ValueTuple<int, decimal>(g.Key, g.Sum(o => o.Amount)))
            .ToListAsync();
    }
}

// ========== MIGRATIONS ==========
// dotnet ef migrations add InitialCreate
// dotnet ef database update

// Migration file (auto-generated)
/*
public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Users",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Name = table.Column<string>(nullable: true),
                Email = table.Column<string>(nullable: true)
            }
        );
    }
}
*/

// ========== RELATIONSHIPS ==========
// One-to-Many: User has many Orders
public class UserWithOrders
{
    public int Id { get; set; }
    public string Name { get; set; }
    
    // One user, many orders
    public ICollection<Order> Orders { get; set; }
}

// Many-to-Many
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    
    // Many students, many courses
    public ICollection<StudentCourse> StudentCourses { get; set; }
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; }
    
    public ICollection<StudentCourse> StudentCourses { get; set; }
}

public class StudentCourse
{
    public int StudentId { get; set; }
    public Student Student { get; set; }
    
    public int CourseId { get; set; }
    public Course Course { get; set; }
}

// ========== COMPARISON: EF 6 vs EF CORE ==========
Console.WriteLine("EF 6 vs EF Core:");
Console.WriteLine("Feature              EF 6                EF Core");
Console.WriteLine("Platform             .NET Framework      .NET Core/.NET");
Console.WriteLine("Performance          Slower              Faster");
Console.WriteLine("LINQ support         Full                Most features");
Console.WriteLine("Database support     SQL Server mainly   Multiple databases");
Console.WriteLine("Async                Limited             First-class");
Console.WriteLine("Lightweight          Heavy               Lightweight");
Console.WriteLine("Open source          No                  Yes");
Console.WriteLine("Active development   Limited             Active");

// ========== BEST PRACTICES ==========
// 1. Use async operations
await userRepository.GetAllUsersAsync();

// 2. Use Include for eager loading
context.Users.Include(u => u.Orders).ToList();

// 3. Use Select for projection (reduce data)
context.Users
    .Select(u => new { u.Id, u.Name })
    .ToList();

// 4. Avoid N+1 queries
// BAD:
foreach (var user in context.Users)
{
    var orders = context.Orders.Where(o => o.UserId == user.Id);
}

// GOOD:
var users = context.Users.Include(u => u.Orders);

// 5. Use DbContextFactory for multi-tenancy or complex scenarios
var factory = new PooledDbContextFactory<ApplicationDbContext>(options);`,
        },
      ],
    },
    {
      id: "q6",
      question: "What is ASP.NET Core and how is it different from ASP.NET Framework?",
      answer:
        "ASP.NET Core is modern, cross-platform web framework for .NET Core. ASP.NET Framework is older, Windows-only. ASP.NET Core is faster, unified platform (MVC, Web API, SignalR together), supports microservices. ASP.NET Core uses Kestrel web server (lightweight). Built on dependency injection and middleware.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

// ========== ASPNET CORE PROJECT SETUP ==========
var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
    );
});

var app = builder.Build();

// Configure middleware pipeline
app.UseCors("AllowAll");
app.UseRouting();
app.MapControllers();

app.Run();

// ========== MINIMAL API (ASP.NET Core 6+) ==========
var builder2 = WebApplication.CreateBuilder(args);
var app2 = builder2.Build();

// Define API without controllers
app2.MapGet("/api/users/{id}", async (int id, IUserService service) =>
{
    var user = await service.GetUserAsync(id);
    return user is null ? Results.NotFound() : Results.Ok(user);
});

app2.MapPost("/api/users", async (CreateUserRequest request, IUserService service) =>
{
    var user = await service.CreateUserAsync(request.Name, request.Email);
    return Results.Created($"/api/users/{user.Id}", user);
});

app2.Run();

// ========== CONTROLLER-BASED API ==========
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService userService;
    
    public UsersController(IUserService userService)
    {
        this.userService = userService;
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await userService.GetUserAsync(id);
        if (user is null)
            return NotFound();
        
        return Ok(user);
    }
    
    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAllUsers()
    {
        var users = await userService.GetAllUsersAsync();
        return Ok(users);
    }
    
    [HttpPost]
    public async Task<ActionResult<User>> CreateUser(CreateUserRequest request)
    {
        var user = await userService.CreateUserAsync(request.Name, request.Email);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, UpdateUserRequest request)
    {
        var user = await userService.UpdateUserAsync(id, request.Name, request.Email);
        if (user is null)
            return NotFound();
        
        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var success = await userService.DeleteUserAsync(id);
        if (!success)
            return NotFound();
        
        return NoContent();
    }
}

// ========== SERVICES ==========
public interface IUserService
{
    Task<User> GetUserAsync(int id);
    Task<List<User>> GetAllUsersAsync();
    Task<User> CreateUserAsync(string name, string email);
    Task<User> UpdateUserAsync(int id, string name, string email);
    Task<bool> DeleteUserAsync(int id);
}

public class UserService : IUserService
{
    private readonly ApplicationDbContext context;
    
    public UserService(ApplicationDbContext context)
    {
        this.context = context;
    }
    
    public async Task<User> GetUserAsync(int id)
    {
        return await context.Users.FindAsync(id);
    }
    
    public async Task<List<User>> GetAllUsersAsync()
    {
        return await context.Users.ToListAsync();
    }
    
    public async Task<User> CreateUserAsync(string name, string email)
    {
        var user = new User { Name = name, Email = email };
        context.Users.Add(user);
        await context.SaveChangesAsync();
        return user;
    }
    
    public async Task<User> UpdateUserAsync(int id, string name, string email)
    {
        var user = await context.Users.FindAsync(id);
        if (user is null)
            return null;
        
        user.Name = name;
        user.Email = email;
        await context.SaveChangesAsync();
        return user;
    }
    
    public async Task<bool> DeleteUserAsync(int id)
    {
        var user = await context.Users.FindAsync(id);
        if (user is null)
            return false;
        
        context.Users.Remove(user);
        await context.SaveChangesAsync();
        return true;
    }
}

// ========== REQUEST/RESPONSE MODELS ==========
public record User(int Id, string Name, string Email);

public record CreateUserRequest(string Name, string Email);

public record UpdateUserRequest(string Name, string Email);

// ========== COMPARISON: ASP.NET Core vs ASP.NET Framework ==========
Console.WriteLine("ASP.NET Core vs ASP.NET Framework:");
Console.WriteLine("Feature              ASP.NET Core        ASP.NET Framework");
Console.WriteLine("Cross-platform       Yes                 No (Windows only)");
Console.WriteLine("Performance          Faster              Slower");
Console.WriteLine("Web server           Kestrel             IIS");
Console.WriteLine("Framework unification Yes (MVC/API)      Separate");
Console.WriteLine("DI built-in          Yes                 No");
Console.WriteLine("Middleware pipeline  Modern              Limited");
Console.WriteLine("Microservices        Built for it        Not ideal");
Console.WriteLine("Latest version       Latest              4.8 (legacy)");
Console.WriteLine("Active development   Yes                 Limited");

// ========== KEY FEATURES ==========
// 1. Kestrel - lightweight, cross-platform web server
// 2. Dependency Injection - built-in
// 3. Middleware - powerful request pipeline
// 4. Unified platform - MVC, Web API, SignalR together
// 5. Configuration - multiple sources
// 6. Logging - built-in
// 7. Health checks - built-in
// 8. Authentication/Authorization - integrated
// 9. CORS - integrated
// 10. Async/await - first class`,
        },
      ],
    },
    {
      id: "q7",
      question: "What are the different hosting models in .NET Core? Console, Web, Windows Service, Docker?",
      answer:
        "Console app - simple command-line app. Web app - ASP.NET Core with Kestrel. Windows Service - runs in background on Windows. Docker - containerized app for any platform. Cloud - Azure App Service, AWS. Each model uses Host.CreateDefaultBuilder() for dependency injection and configuration.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

// ========== 1. CONSOLE APPLICATION ==========
// Program.cs for console app
var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddScoped<IGreeterService, GreeterService>();
    })
    .Build();

using (host)
{
    var greeter = host.Services.GetRequiredService<IGreeterService>();
    greeter.Greet("World");
}

Console.WriteLine("Console app finished");

// ========== 2. BACKGROUND SERVICE / WORKER SERVICE ==========
// Program.cs for worker service
var builder = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<MyBackgroundWorker>();
    });

var host2 = builder.Build();
await host2.RunAsync(); // Runs indefinitely

public class MyBackgroundWorker : BackgroundService
{
    private readonly ILogger<MyBackgroundWorker> logger;
    
    public MyBackgroundWorker(ILogger<MyBackgroundWorker> logger)
    {
        this.logger = logger;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            logger.LogInformation("Worker executing at: {time}", DateTimeOffset.Now);
            
            // Do background work
            await Task.Delay(1000, stoppingToken);
        }
    }
    
    public override async Task StartAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Worker starting");
        await base.StartAsync(cancellationToken);
    }
    
    public override async Task StopAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Worker stopping");
        await base.StopAsync(cancellationToken);
    }
}

// ========== 3. WEB APPLICATION (ASP.NET Core) ==========
// Program.cs for web app
var builder3 = WebApplication.CreateBuilder(args);

builder3.Services.AddControllers();

var app = builder3.Build();

app.UseRouting();
app.MapControllers();

await app.RunAsync();

// ========== 4. WINDOWS SERVICE ==========
// Program.cs for Windows Service
var builder4 = Host.CreateDefaultBuilder(args)
    .UseWindowsService()
    .ConfigureServices(services =>
    {
        services.AddHostedService<MyWindowsService>();
    });

var host4 = builder4.Build();
await host4.RunAsync();

public class MyWindowsService : BackgroundService
{
    private readonly ILogger<MyWindowsService> logger;
    
    public MyWindowsService(ILogger<MyWindowsService> logger)
    {
        this.logger = logger;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            logger.LogInformation("Windows Service running");
            await Task.Delay(5000, stoppingToken);
        }
    }
}

// Install as Windows Service:
// sc create MyService binPath= "C:\\path\\to\\app.exe"
// net start MyService

// ========== 5. DOCKER CONTAINER ==========
// Dockerfile
/*
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "."]
RUN dotnet restore "MyApp.csproj"
COPY . .
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM mcr.microsoft.com/dotnet/runtime:8.0
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "MyApp.dll"]
*/

// docker build -t myapp:latest .
// docker run myapp:latest

// ========== 6. CLOUD HOSTING (AZURE) ==========
// Deploy to Azure App Service
// dotnet publish -c Release -o ./publish
// Upload publish folder to Azure

// appsettings.json - read from Azure Key Vault
var builder5 = WebApplication.CreateBuilder(args);

var keyVaultUrl = new Uri(builder5.Configuration["KeyVault:Url"]);
builder5.Configuration.AddAzureKeyVault(
    keyVaultUrl,
    new DefaultAzureCredential()
);

// ========== HOSTING COMPARISON ==========
Console.WriteLine("Hosting Models Comparison:");
Console.WriteLine("Model               Lifetime      Use Case");
Console.WriteLine("Console             Finite        One-off tasks, utilities");
Console.WriteLine("Worker Service      Infinite      Background jobs, processing");
Console.WriteLine("Web App             Infinite      REST APIs, web sites");
Console.WriteLine("Windows Service     Infinite      Long-running Windows tasks");
Console.WriteLine("Docker              Container     Microservices, cloud");
Console.WriteLine("Cloud               Managed       Scalable production apps");

// ========== TYPICAL WEB APP STRUCTURE ==========
// Program.cs (entry point)
// appsettings.json (config)
// Startup.cs (optional - alternative to Program.cs)
// Controllers/ (request handlers)
// Services/ (business logic)
// Models/ (data models)
// Data/ (DbContext)
// Middleware/ (custom)

// ========== CHECKING HOSTING ENVIRONMENT ==========
var env = builder3.Environment;

if (env.IsDevelopment())
{
    // Development setup
}
else if (env.IsStaging())
{
    // Staging setup
}
else if (env.IsProduction())
{
    // Production setup
}

var customEnv = env.IsEnvironment("CustomEnv");

// Set environment variable:
// Windows: set ASPNETCORE_ENVIRONMENT=Production
// Linux: export ASPNETCORE_ENVIRONMENT=Production
// Docker: ENV ASPNETCORE_ENVIRONMENT=Production`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is logging in .NET Core and how do you configure it?",
      answer:
        "Logging is built into .NET Core using ILogger interface. Configure in Program.cs with AddLogging(). Multiple providers: Console, Debug, EventLog, Trace, Application Insights. Log levels: Trace, Debug, Information, Warning, Error, Critical, None. Use dependency injection to inject ILogger into classes.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.Extensions.Logging;

// ========== LOGGING SETUP IN PROGRAM.CS ==========
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLogging(config =>
{
    config.ClearProviders(); // Remove default providers
    config.AddConsole(); // Console output
    config.AddDebug(); // Debug output
    config.AddEventLog(); // Windows Event Log
    
    // Set minimum log level
    config.SetMinimumLevel(LogLevel.Information);
});

var app = builder.Build();

// Configuration via appsettings.json (preferred)
/*
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "System": "Error"
    }
  }
}
*/

// ========== USING LOGGER ==========
public class UserService
{
    private readonly ILogger<UserService> logger;
    
    public UserService(ILogger<UserService> logger)
    {
        this.logger = logger;
    }
    
    public void CreateUser(string name)
    {
        // Log levels (severity)
        logger.LogTrace("Trace: Very detailed info");
        logger.LogDebug($"Debug: Creating user: {name}");
        logger.LogInformation($"Information: User created: {name}");
        logger.LogWarning("Warning: Potential issue");
        logger.LogError(new Exception(), "Error: Something failed");
        logger.LogCritical("Critical: System failure");
    }
}

// ========== LOG LEVELS EXPLAINED ==========
Console.WriteLine("Log Levels (Severity Order):");
Console.WriteLine("1. Trace - Very detailed diagnostic info");
Console.WriteLine("2. Debug - Debug information");
Console.WriteLine("3. Information - General informational messages");
Console.WriteLine("4. Warning - Warning messages (don't fail)");
Console.WriteLine("5. Error - Error messages (operation fails)");
Console.WriteLine("6. Critical - Critical errors (system may fail)");
Console.WriteLine("7. None - No logging");

// ========== STRUCTURED LOGGING ==========
public class OrderService
{
    private readonly ILogger<OrderService> logger;
    
    public OrderService(ILogger<OrderService> logger)
    {
        this.logger = logger;
    }
    
    public void ProcessOrder(int orderId, string customerName, decimal amount)
    {
        // Log with named parameters (structured)
        logger.LogInformation(
            "Processing order {OrderId} for customer {Customer} with amount {Amount}",
            orderId,
            customerName,
            amount
        );
        
        // Structured logging is searchable and filterable
    }
}

// ========== EXCEPTION LOGGING ==========
public class PaymentService
{
    private readonly ILogger<PaymentService> logger;
    
    public PaymentService(ILogger<PaymentService> logger)
    {
        this.logger = logger;
    }
    
    public void ProcessPayment(decimal amount)
    {
        try
        {
            // Process payment
            if (amount <= 0)
                throw new InvalidOperationException("Invalid amount");
        }
        catch (Exception ex)
        {
            // Log exception with details
            logger.LogError(ex, "Payment processing failed for amount {Amount}", amount);
            throw;
        }
    }
}

// ========== LOGGING WITH SCOPE ==========
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate next;
    private readonly ILogger logger;
    
    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        this.next = next;
        this.logger = logger;
    }
    
    public async Task InvokeAsync(HttpContext context)
    {
        // Create scope with request ID
        var requestId = context.TraceIdentifier;
        
        using (logger.BeginScope(new Dictionary<string, object>
        {
            { "RequestId", requestId },
            { "User", context.User?.Identity?.Name ?? "Anonymous" }
        }))
        {
            logger.LogInformation("Request started: {Method} {Path}", 
                context.Request.Method, 
                context.Request.Path);
            
            try
            {
                await next(context);
                logger.LogInformation("Request completed: {StatusCode}", 
                    context.Response.StatusCode);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Request failed with exception");
                throw;
            }
        }
    }
}

// ========== CUSTOM LOGGER PROVIDER ==========
public class CustomLoggerProvider : ILoggerProvider
{
    public ILogger CreateLogger(string categoryName)
    {
        return new CustomLogger(categoryName);
    }
    
    public void Dispose() { }
}

public class CustomLogger : ILogger
{
    private readonly string categoryName;
    
    public CustomLogger(string categoryName)
    {
        this.categoryName = categoryName;
    }
    
    public IDisposable BeginScope<TState>(TState state) => null;
    
    public bool IsEnabled(LogLevel logLevel) => true;
    
    public void Log<TState>(
        LogLevel logLevel,
        EventId eventId,
        TState state,
        Exception exception,
        Func<TState, Exception, string> formatter)
    {
        var message = formatter(state, exception);
        File.AppendAllText("logs.txt", 
            $"[{DateTime.UtcNow:O}] [{logLevel}] {categoryName}: {message}\n");
    }
}

// Register custom provider
builder.Services.AddLogging(config =>
{
    config.AddProvider(new CustomLoggerProvider());
});

// ========== THIRD-PARTY LOGGING (SERILOG) ==========
// Install: dotnet add package Serilog.AspNetCore

using Serilog;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

try
{
    Log.Information("Application starting");
    var builder2 = WebApplication.CreateBuilder(args);
    builder2.Host.UseSerilog();
    
    var app2 = builder2.Build();
    await app2.RunAsync();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    await Log.CloseAndFlushAsync();
}

// ========== BEST PRACTICES ==========
Console.WriteLine("Logging Best Practices:");
Console.WriteLine("1. Use appropriate log levels");
Console.WriteLine("2. Use structured logging with parameters");
Console.WriteLine("3. Log exceptions with context");
Console.WriteLine("4. Use scopes for correlation IDs");
Console.WriteLine("5. Don't log sensitive data");
Console.WriteLine("6. Use centralized logging (Application Insights, ELK)");
Console.WriteLine("7. Set appropriate minimum log levels per environment");
Console.WriteLine("8. Use correlation IDs for request tracing");
Console.WriteLine("9. Don't log in hot paths (performance)");
Console.WriteLine("10. Use async logging for production");`,
        },
      ],
    },
    {
      id: "q9",
      question: "What is a hosted service in .NET Core? How do you create background tasks?",
      answer:
        "Hosted service implements IHostedService, runs when app starts. Use BackgroundService abstract class (simpler). Methods: StartAsync (when app starts), StopAsync (when app stops). Use ExecuteAsync for the work loop. Register in DI with AddHostedService<T>(). Perfect for background jobs, timers, message consumers.",
      codeSnippets: [
        {
          language: "csharp",
          code: `using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

// ========== SIMPLE BACKGROUND SERVICE ==========
public class TimerBackgroundService : BackgroundService
{
    private readonly ILogger<TimerBackgroundService> logger;
    private Timer timer;
    
    public TimerBackgroundService(ILogger<TimerBackgroundService> logger)
    {
        this.logger = logger;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Timer service starting");
        
        timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromSeconds(10));
        
        // Keep running until cancellation requested
        await Task.Delay(Timeout.Infinite, stoppingToken);
    }
    
    private void DoWork(object state)
    {
        logger.LogInformation("Timer work executing at: {time}", DateTimeOffset.Now);
        
        // Do background work
    }
    
    public override async Task StopAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Timer service stopping");
        timer?.Dispose();
        await base.StopAsync(cancellationToken);
    }
}

// Register in Program.cs
var builder = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<TimerBackgroundService>();
    });

var host = builder.Build();
await host.RunAsync();

// ========== QUEUE PROCESSING SERVICE ==========
public class QueueProcessingService : BackgroundService
{
    private readonly ILogger<QueueProcessingService> logger;
    private readonly IServiceProvider serviceProvider;
    private readonly Channel<QueueItem> queue;
    
    public QueueProcessingService(ILogger<QueueProcessingService> logger, IServiceProvider serviceProvider)
    {
        this.logger = logger;
        this.serviceProvider = serviceProvider;
        queue = Channel.CreateUnbounded<QueueItem>();
    }
    
    public async ValueTask EnqueueAsync(QueueItem item)
    {
        await queue.Writer.WriteAsync(item);
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Queue processor starting");
        
        await foreach (var item in queue.Reader.ReadAllAsync(stoppingToken))
        {
            try
            {
                // Create scope for processing
                using var scope = serviceProvider.CreateScope();
                var processor = scope.ServiceProvider.GetRequiredService<IQueueItemProcessor>();
                
                await processor.ProcessAsync(item);
                logger.LogInformation("Processed queue item: {ItemId}", item.Id);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error processing queue item: {ItemId}", item.Id);
            }
        }
    }
}

public class QueueItem
{
    public string Id { get; set; }
    public string Data { get; set; }
}

public interface IQueueItemProcessor
{
    Task ProcessAsync(QueueItem item);
}

public class QueueItemProcessor : IQueueItemProcessor
{
    private readonly ILogger<QueueItemProcessor> logger;
    
    public QueueItemProcessor(ILogger<QueueItemProcessor> logger)
    {
        this.logger = logger;
    }
    
    public async Task ProcessAsync(QueueItem item)
    {
        logger.LogInformation("Processing item: {ItemId}", item.Id);
        await Task.Delay(100); // Simulate work
    }
}

// Register
builder.Services.AddSingleton<QueueProcessingService>();
builder.Services.AddHostedService(provider => provider.GetRequiredService<QueueProcessingService>());
builder.Services.AddScoped<IQueueItemProcessor, QueueItemProcessor>();

// ========== PERIODIC TASK SERVICE ==========
public class PeriodicTaskService : BackgroundService
{
    private readonly ILogger<PeriodicTaskService> logger;
    private readonly IServiceProvider serviceProvider;
    
    public PeriodicTaskService(ILogger<PeriodicTaskService> logger, IServiceProvider serviceProvider)
    {
        this.logger = logger;
        this.serviceProvider = serviceProvider;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Periodic task service starting");
        
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                // Calculate next execution time (e.g., next midnight)
                var now = DateTime.UtcNow;
                var nextRun = now.Date.AddDays(1); // Tomorrow midnight
                var delay = nextRun - now;
                
                await Task.Delay(delay, stoppingToken);
                
                // Execute periodic task
                using var scope = serviceProvider.CreateScope();
                var taskExecutor = scope.ServiceProvider.GetRequiredService<IPeriodicTaskExecutor>();
                
                await taskExecutor.ExecuteAsync();
                logger.LogInformation("Periodic task executed successfully");
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error executing periodic task");
            }
        }
    }
}

public interface IPeriodicTaskExecutor
{
    Task ExecuteAsync();
}

// ========== LONG-RUNNING TASK SERVICE ==========
public class DataSyncService : BackgroundService
{
    private readonly ILogger<DataSyncService> logger;
    private readonly IDataRepository repository;
    private readonly IExternalDataService externalService;
    
    public DataSyncService(ILogger<DataSyncService> logger, IDataRepository repository, IExternalDataService externalService)
    {
        this.logger = logger;
        this.repository = repository;
        this.externalService = externalService;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("Data sync service starting");
        
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                // Sync data
                var externalData = await externalService.FetchDataAsync();
                await repository.UpdateAsync(externalData);
                
                logger.LogInformation("Data sync completed. Records: {Count}", externalData.Count());
                
                // Wait before next sync
                await Task.Delay(TimeSpan.FromHours(1), stoppingToken);
            }
            catch (OperationCanceledException)
            {
                logger.LogInformation("Data sync cancelled");
                break;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error during data sync");
                // Wait before retry
                await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);
            }
        }
    }
    
    public override async Task StopAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("Data sync service stopping");
        await base.StopAsync(cancellationToken);
    }
}

public interface IDataRepository
{
    Task UpdateAsync(IEnumerable<dynamic> data);
}

public interface IExternalDataService
{
    Task<IEnumerable<dynamic>> FetchDataAsync();
}

// ========== BEST PRACTICES ==========
Console.WriteLine("Hosted Service Best Practices:");
Console.WriteLine("1. Always use CancellationToken for graceful shutdown");
Console.WriteLine("2. Create scopes for dependency injection");
Console.WriteLine("3. Log start and stop events");
Console.WriteLine("4. Handle exceptions gracefully");
Console.WriteLine("5. Implement backoff for retries");
Console.WriteLine("6. Use async/await for all I/O operations");
Console.WriteLine("7. Don't block in ExecuteAsync");
Console.WriteLine("8. Monitor service health");
Console.WriteLine("9. Use configuration for intervals/settings");
Console.WriteLine("10. Test services independently");`,
        },
      ],
    },
    {
      id: "q10",
      question: "What is an extension method in C#? How do you create and use them?",
      answer:
        "Extension method adds functionality to existing types without inheritance. Must be in static class, first parameter has 'this' keyword. Allows calling like instance method. Useful for adding helpers to built-in types. Cannot access private members. Used extensively in LINQ (Where, Select, etc.).",
      codeSnippets: [
        {
          language: "csharp",
          code: `using System;
using System.Collections.Generic;
using System.Linq;

// ========== BASIC EXTENSION METHOD ==========
public static class StringExtensions
{
    // Extension method adds method to string
    public static string Reverse(this string str)
    {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
    
    public static string ToTitleCase(this string str)
    {
        return System.Globalization.CultureInfo.CurrentCulture
            .TextInfo.ToTitleCase(str.ToLower());
    }
    
    public static bool IsPalindrome(this string str)
    {
        var cleaned = System.Text.RegularExpressions.Regex.Replace(str, "[^a-zA-Z0-9]", "").ToLower();
        return cleaned == cleaned.Reverse();
    }
    
    public static string RepeatString(this string str, int times)
    {
        return string.Concat(Enumerable.Repeat(str, times));
    }
}

// Usage
var text = "Hello World";
Console.WriteLine(text.Reverse()); // dlroW olleH
Console.WriteLine(text.ToTitleCase()); // Hello World
Console.WriteLine("racecar".IsPalindrome()); // true
Console.WriteLine("x".RepeatString(5)); // xxxxx

// ========== EXTENSION ON COLLECTIONS ==========
public static class ListExtensions
{
    public static List<T> AddRange<T>(this List<T> list, params T[] items)
    {
        foreach (var item in items)
        {
            list.Add(item);
        }
        return list; // Fluent
    }
    
    public static bool IsNullOrEmpty<T>(this IEnumerable<T> source)
    {
        return source == null || !source.Any();
    }
    
    public static T GetRandom<T>(this IList<T> list)
    {
        var random = new Random();
        return list[random.Next(list.Count)];
    }
    
    public static List<T> Shuffle<T>(this List<T> list)
    {
        var random = new Random();
        for (int i = list.Count - 1; i > 0; i--)
        {
            int randomIndex = random.Next(i + 1);
            // Swap
            (list[i], list[randomIndex]) = (list[randomIndex], list[i]);
        }
        return list;
    }
    
    public static void ForEach<T>(this IEnumerable<T> source, Action<T> action)
    {
        foreach (var item in source)
        {
            action(item);
        }
    }
}

// Usage
var numbers = new List<int> { 1, 2, 3 };
numbers.AddRange(4, 5, 6);
Console.WriteLine(numbers.Count); // 6

var random = numbers.GetRandom();

numbers.Shuffle();

var names = new List<string> { "Alice", "Bob", "Charlie" };
names.ForEach(n => Console.WriteLine(n)); // Print each

// ========== EXTENSION ON NUMERIC TYPES ==========
public static class NumericExtensions
{
    public static bool IsEven(this int number)
    {
        return number % 2 == 0;
    }
    
    public static bool IsOdd(this int number)
    {
        return number % 2 != 0;
    }
    
    public static int Square(this int number)
    {
        return number * number;
    }
    
    public static bool IsPrime(this int number)
    {
        if (number < 2) return false;
        for (int i = 2; i <= Math.Sqrt(number); i++)
        {
            if (number % i == 0) return false;
        }
        return true;
    }
    
    public static TimeSpan Days(this int days)
    {
        return TimeSpan.FromDays(days);
    }
}

// Usage
Console.WriteLine(5.IsEven()); // false
Console.WriteLine(5.IsOdd()); // true
Console.WriteLine(5.Square()); // 25
Console.WriteLine(17.IsPrime()); // true

var futureDate = DateTime.Now.Add(7.Days());

// ========== EXTENSION ON DATETIME ==========
public static class DateTimeExtensions
{
    public static bool IsWeekend(this DateTime date)
    {
        return date.DayOfWeek == DayOfWeek.Saturday || 
               date.DayOfWeek == DayOfWeek.Sunday;
    }
    
    public static DateTime StartOfDay(this DateTime date)
    {
        return date.Date;
    }
    
    public static DateTime EndOfDay(this DateTime date)
    {
        return date.Date.AddDays(1).AddTicks(-1);
    }
    
    public static int GetAge(this DateTime birthDate)
    {
        var today = DateTime.Today;
        var age = today.Year - birthDate.Year;
        if (birthDate.Date > today.AddYears(-age)) age--;
        return age;
    }
}

// Usage
var today = DateTime.Now;
Console.WriteLine(today.IsWeekend()); // Depends on day
Console.WriteLine(today.StartOfDay()); // Today at 00:00:00
Console.WriteLine(today.EndOfDay()); // Today at 23:59:59

var birthDate = new DateTime(1990, 5, 15);
Console.WriteLine(birthDate.GetAge()); // Age in years

// ========== CHAINABLE (FLUENT) EXTENSIONS ==========
public static class FluentExtensions
{
    public static T Also<T>(this T obj, Action<T> action)
    {
        action(obj);
        return obj;
    }
    
    public static TResult Apply<T, TResult>(this T obj, Func<T, TResult> func)
    {
        return func(obj);
    }
}

// Usage
var result = new List<int> { 1, 2, 3 }
    .Also(list => Console.WriteLine($"Count: {list.Count}"))
    .Also(list => list.Add(4))
    .Apply(list => list.Sum()); // 10

// ========== LINQ EXTENSION METHODS (BUILT-IN EXAMPLES) ==========
// These are all extension methods on IEnumerable<T>
var nums = new[] { 1, 2, 3, 4, 5 };

var evens = nums.Where(n => n.IsEven()); // Extension
var squares = nums.Select(n => n.Square()); // Extension
var sum = nums.Sum(); // Extension
var count = nums.Count(); // Extension
var first = nums.First(); // Extension
var ordered = nums.OrderBy(n => n); // Extension

// ========== LIMITATIONS ==========
// Cannot:
// - Override existing methods
// - Access private/protected members
// - Be used for operators
// - Replace instance methods
// - Work on static classes

// Can:
// - Add to sealed classes
// - Add to built-in types
// - Be used in LINQ
// - Improve fluency
// - Reduce code duplication

// ========== BEST PRACTICES ==========
Console.WriteLine("Extension Method Best Practices:");
Console.WriteLine("1. Put in static class with Related Name + Extensions");
Console.WriteLine("2. Use only for true extensions, not replacements");
Console.WriteLine("3. Keep logic simple");
Console.WriteLine("4. Avoid conflicting with existing methods");
Console.WriteLine("5. Document with XML comments");
Console.WriteLine("6. Use namespacing to avoid pollution");
Console.WriteLine("7. Don't abuse - keep code readable");
Console.WriteLine("8. Consider performance for frequently called methods");`,
        },
      ],
    },
  ],
};
