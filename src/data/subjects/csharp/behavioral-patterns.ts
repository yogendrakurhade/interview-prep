import type { Topic } from "../../../types";

export const csharpBehavioralPatternsTopic: Topic = {
  id: "csharp-behavioral",
  name: "Behavioral Patterns",
  questions: [
    {
      id: "q11",
      question: "What is the Observer pattern and how do you implement it in C#?",
      answer:
        "The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically. In C#, you can use delegates, events, or implement IObserver/IObservable.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Using Events and Delegates
public class StockPrice
{
    private decimal _price;
    
    public decimal Price
    {
        get => _price;
        set
        {
            if (_price != value)
            {
                _price = value;
                OnPriceChanged(_price);
            }
        }
    }
    
    // Event
    public event EventHandler<PriceChangedEventArgs> PriceChanged;
    
    protected virtual void OnPriceChanged(decimal newPrice)
    {
        PriceChanged?.Invoke(this, new PriceChangedEventArgs { NewPrice = newPrice });
    }
}

public class PriceChangedEventArgs : EventArgs
{
    public decimal NewPrice { get; set; }
}

// Observer
public class Investor
{
    public string Name { get; set; }
    
    public void OnPriceChanged(object sender, PriceChangedEventArgs e)
    {
        Console.WriteLine($"{Name} received notification: Price changed to {e.NewPrice}");
    }
}

// Usage
var stock = new StockPrice();
var investor1 = new Investor { Name = "Alice" };
var investor2 = new Investor { Name = "Bob" };

stock.PriceChanged += investor1.OnPriceChanged;
stock.PriceChanged += investor2.OnPriceChanged;

stock.Price = 100.50m; // Both investors are notified`,
        },
      ],
    },
    {
      id: "q12",
      question: "Explain the Strategy pattern in C#.",
      answer:
        "The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it, making code flexible and testable.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Strategy interface
public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

// Concrete Strategies
public class CreditCardStrategy : IPaymentStrategy
{
    private string _cardNumber;
    
    public CreditCardStrategy(string cardNumber) => _cardNumber = cardNumber;
    
    public void Pay(decimal amount)
        => Console.WriteLine(\`Paid \${amount} using Credit Card \${_cardNumber}\`);
}

public class PayPalStrategy : IPaymentStrategy
{
    private string _email;
    
    public PayPalStrategy(string email) => _email = email;
    
    public void Pay(decimal amount)
        => Console.WriteLine(\`Paid \${amount} using PayPal account \${_email}\`);
}

public class CryptoStrategy : IPaymentStrategy
{
    private string _walletAddress;
    
    public CryptoStrategy(string walletAddress) => _walletAddress = walletAddress;
    
    public void Pay(decimal amount)
        => Console.WriteLine(\`Paid \${amount} using Crypto wallet \${_walletAddress}\`);
}

// Context
public class ShoppingCart
{
    private IPaymentStrategy _paymentStrategy;
    
    public void SetPaymentStrategy(IPaymentStrategy strategy)
        => _paymentStrategy = strategy;
    
    public void Checkout(decimal total)
        => _paymentStrategy.Pay(total);
}

// Usage
var cart = new ShoppingCart();

cart.SetPaymentStrategy(new CreditCardStrategy("1234-5678-9012-3456"));
cart.Checkout(99.99m);

cart.SetPaymentStrategy(new PayPalStrategy("user@example.com"));
cart.Checkout(49.99m);`,
        },
      ],
    },
    {
      id: "q13",
      question: "What is the Command pattern and when should you use it?",
      answer:
        "The Command pattern encapsulates a request as an object, allowing you to parameterize clients with different requests, queue requests, and support undoable operations. Use it for undo/redo, task scheduling, or request logging.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Command interface
public interface ICommand
{
    void Execute();
    void Undo();
}

// Receiver
public class TextEditor
{
    private string _content = "";
    
    public void InsertText(string text)
    {
        _content += text;
        Console.WriteLine($"Content: {_content}");
    }
    
    public void DeleteText(int length)
    {
        if (_content.Length >= length)
        {
            _content = _content.Substring(0, _content.Length - length);
            Console.WriteLine($"Content: {_content}");
        }
    }
    
    public string GetContent() => _content;
}

// Concrete Commands
public class InsertCommand : ICommand
{
    private TextEditor _editor;
    private string _text;
    
    public InsertCommand(TextEditor editor, string text)
    {
        _editor = editor;
        _text = text;
    }
    
    public void Execute() => _editor.InsertText(_text);
    public void Undo() => _editor.DeleteText(_text.Length);
}

// Invoker
public class CommandHistory
{
    private Stack<ICommand> _history = new Stack<ICommand>();
    
    public void Execute(ICommand command)
    {
        command.Execute();
        _history.Push(command);
    }
    
    public void Undo()
    {
        if (_history.Count > 0)
        {
            var command = _history.Pop();
            command.Undo();
        }
    }
}

// Usage
var editor = new TextEditor();
var history = new CommandHistory();

history.Execute(new InsertCommand(editor, "Hello "));
history.Execute(new InsertCommand(editor, "World"));
history.Undo(); // Undo "World"
history.Undo(); // Undo "Hello "`,
        },
      ],
    },
    {
      id: "q14",
      question: "Explain the State pattern in C#.",
      answer:
        "The State pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class. It's useful for objects with state-dependent behavior.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// State interface
public interface ILightState
{
    void TurnOn(Light light);
    void TurnOff(Light light);
}

// Concrete States
public class OnState : ILightState
{
    public void TurnOn(Light light) => Console.WriteLine("Light is already on");
    public void TurnOff(Light light)
    {
        Console.WriteLine("Turning light off");
        light.SetState(new OffState());
    }
}

public class OffState : ILightState
{
    public void TurnOn(Light light)
    {
        Console.WriteLine("Turning light on");
        light.SetState(new OnState());
    }
    
    public void TurnOff(Light light) => Console.WriteLine("Light is already off");
}

// Context
public class Light
{
    private ILightState _state;
    
    public Light() => _state = new OffState();
    
    public void SetState(ILightState state) => _state = state;
    
    public void TurnOn() => _state.TurnOn(this);
    public void TurnOff() => _state.TurnOff(this);
}

// Usage
var light = new Light();
light.TurnOn();  // Turning light on
light.TurnOn();  // Light is already on
light.TurnOff(); // Turning light off
light.TurnOff(); // Light is already off`,
        },
      ],
    },
    {
      id: "q15",
      question: "What is the Chain of Responsibility pattern?",
      answer:
        "The Chain of Responsibility pattern allows passing requests along a chain of handlers. Each handler decides whether to process the request or pass it to the next handler. It's useful for request handling, logging, validation pipelines.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Handler interface
public abstract class ApprovalHandler
{
    protected ApprovalHandler _nextHandler;
    
    public void SetNext(ApprovalHandler next) => _nextHandler = next;
    
    public abstract void Handle(ExpenseRequest request);
}

// Concrete Handlers
public class ManagerApproval : ApprovalHandler
{
    public override void Handle(ExpenseRequest req)
    {
        if (req.Amount <= 1000)
        {
            Console.WriteLine(\`Manager approved expense of \${req.Amount}\`);
        }
        else if (_nextHandler != null)
        {
            _nextHandler.Handle(req);
        }
    }
}

public class DirectorApproval : ApprovalHandler
{
    public override void Handle(ExpenseRequest req)
    {
        if (req.Amount <= 5000)
        {
            Console.WriteLine(\`Director approved expense of \${req.Amount}\`);
        }
        else if (_nextHandler != null)
        {
            _nextHandler.Handle(req);
        }
    }
}

public class CEOApproval : ApprovalHandler
{
    public override void Handle(ExpenseRequest req)
    {
        if (req.Amount <= 100000)
        {
            Console.WriteLine(\`CEO approved expense of \${req.Amount}\`);
        }
        else
        {
            Console.WriteLine(\`Expense of \${req.Amount} rejected\`);
        }
    }
}

public class ExpenseRequest
{
    public decimal Amount { get; set; }
    public string Description { get; set; }
}

// Usage
var manager = new ManagerApproval();
var director = new DirectorApproval();
var ceo = new CEOApproval();

manager.SetNext(director);
director.SetNext(ceo);

manager.Handle(new ExpenseRequest { Amount = 500 });   // Manager approves
manager.Handle(new ExpenseRequest { Amount = 3000 });  // Director approves
manager.Handle(new ExpenseRequest { Amount = 50000 }); // CEO approves`,
        },
      ],
    },
  ],
};
