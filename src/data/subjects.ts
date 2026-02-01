import type { Subject } from "../types";
import { csharpSubject } from "./subjects/csharp";

export const subjects: Subject[] = [
  {
    id: "javascript",
    name: "JavaScript",
    topics: [
      {
        id: "js-basics",
        name: "Basics",
        questions: [
          {
            id: "q1",
            question: "What are the different data types in JavaScript?",
            answer:
              "JavaScript has 8 data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt, and Object. Primitive types are immutable, while objects are mutable reference types.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// Primitive types
const num = 42;
const str = "Hello";
const bool = true;
const sym = Symbol("id");
const bigInt = 123n;
const nul = null;
const undef = undefined;

// Non-primitive (Reference types)
const obj = { name: "John" };
const arr = [1, 2, 3];
const func = () => {}; // Functions are objects`,
              },
            ],
          },
          {
            id: "q2",
            question: "What is the difference between var, let, and const?",
            answer:
              "var is function-scoped and hoisted. let and const are block-scoped and not hoisted. const cannot be reassigned, but object properties can be modified.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// var - function scoped, hoisted
function test() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1
}

// let - block scoped, temporal dead zone
function test2() {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 2;
}

// const - block scoped, cannot reassign
const z = 3;
z = 4; // TypeError: Assignment to constant variable
const obj = { a: 1 };
obj.a = 2; // OK - object properties can change`,
              },
            ],
          },
          {
            id: "q3",
            question: "What is hoisting in JavaScript?",
            answer:
              "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// var hoisting
console.log(x); // undefined (hoisted but not initialized)
var x = 5;

// let/const hoisting with temporal dead zone
console.log(y); // ReferenceError
let y = 10;

// Function hoisting
sayHi(); // "Hello" - function works before declaration
function sayHi() {
  console.log("Hello");
}

// Function expression not hoisted
greet(); // TypeError: greet is not a function
const greet = () => console.log("Hi");`,
              },
            ],
          },
          {
            id: "q4",
            question: "What is the difference between == and ===?",
            answer:
              "== performs type coercion before comparison, while === compares both value and type without coercion. Use === in production code to avoid unexpected results.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// == (loose equality) - type coercion
0 == false;        // true
"0" == 0;          // true
null == undefined; // true
"5" == 5;          // true

// === (strict equality) - no type coercion
0 === false;       // false
"0" === 0;         // false
null === undefined;// false
"5" === 5;         // false

// Best practice: Always use ===
if (value === null) { }
if (value === undefined) { }
if (value === true) { }`,
              },
            ],
          },
          {
            id: "q5",
            question: "What is NaN and how to check for it?",
            answer:
              "NaN (Not-a-Number) is a special value representing an undefined or unrepresentable mathematical result. Use Number.isNaN() or Object.is() for checking, not the global isNaN().",
            codeSnippets: [
              {
                language: "javascript",
                code: `// NaN creation
const result = parseInt("hello"); // NaN
const calc = 0 / 0;              // NaN

// WRONG way to check
isNaN("hello");  // true (coerces to number first)
NaN === NaN;     // false (NaN is not equal to itself)

// CORRECT ways to check
Number.isNaN(result);   // true
Object.is(result, NaN); // true
typeof result === 'number' && isNaN(result);

// Safe arithmetic
const num = 0 / 0;
if (Number.isNaN(num)) {
  console.log("Invalid calculation");
}`,
              },
            ],
          },
        ],
      },
      {
        id: "js-async",
        name: "Asynchronous Programming",
        questions: [
          {
            id: "q6",
            question: "What is a Promise in JavaScript?",
            answer:
              "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, or rejected.",
            codeSnippets: [
              {
                language: "javascript",
                code: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done"));`,
              },
            ],
          },
          {
            id: "q7",
            question: "What is async/await?",
            answer:
              "Async/await is syntactic sugar over promises that allows you to write asynchronous code that looks synchronous. async functions always return a Promise.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// async/await example
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) throw new Error('Not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
  }
}

// Using async function
const user = await fetchUserData(1);
console.log(user);

// Parallel requests
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json())
]);`,
              },
            ],
          },
          {
            id: "q8",
            question: "What is the difference between Promise.all, Promise.race, and Promise.allSettled?",
            answer:
              "Promise.all waits for all promises to resolve or any to reject. Promise.race returns the first settled promise. Promise.allSettled waits for all to settle regardless of outcome.",
            codeSnippets: [
              {
                language: "javascript",
                code: `const p1 = Promise.resolve(1);
const p2 = new Promise(r => setTimeout(() => r(2), 100));
const p3 = Promise.reject("error");

// Promise.all - rejects if any promise rejects
Promise.all([p1, p2])
  .then(results => console.log(results)) // [1, 2]
  .catch(err => console.log("Error:", err));

// Promise.race - returns first settled
Promise.race([p1, p2])
  .then(result => console.log(result)); // 1

// Promise.allSettled - waits for all
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'rejected', reason: 'error' }
  // ]`,
              },
            ],
          },
          {
            id: "q9",
            question: "What is the event loop in JavaScript?",
            answer:
              "The event loop is JavaScript's mechanism for handling asynchronous operations. It monitors the call stack and callback queue, executing callbacks when the stack is empty.",
            codeSnippets: [
              {
                language: "javascript",
                code: `console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve()
  .then(() => console.log('Promise'));

console.log('End');

// Output:
// Start
// End
// Promise (microtask queue runs before macrotask queue)
// Timeout

// Macrotasks: setTimeout, setInterval, setImmediate
// Microtasks: Promise, MutationObserver, queueMicrotask`,
              },
            ],
          },
          {
            id: "q10",
            question: "What are callbacks and what is callback hell?",
            answer:
              "Callbacks are functions passed as arguments to other functions. Callback hell (pyramid of doom) occurs with deeply nested callbacks, making code hard to read and maintain.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// Callback Hell - hard to read and maintain
getData(id, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    getUser(data.userId, function(err, user) {
      if (err) {
        console.error(err);
      } else {
        getPosts(user.id, function(err, posts) {
          if (err) {
            console.error(err);
          } else {
            console.log(posts);
          }
        });
      }
    });
  }
});

// Better approach with Promises
getData(id)
  .then(data => getUser(data.userId))
  .then(user => getPosts(user.id))
  .then(posts => console.log(posts))
  .catch(err => console.error(err));

// Best approach with async/await
async function displayPosts(id) {
  try {
    const data = await getData(id);
    const user = await getUser(data.userId);
    const posts = await getPosts(user.id);
    console.log(posts);
  } catch (err) {
    console.error(err);
  }
}`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "react",
    name: "React",
    topics: [
      {
        id: "react-basics",
        name: "Basics",
        questions: [
          {
            id: "q11",
            question: "What are React hooks?",
            answer:
              "Hooks are functions that let you use state and other React features in functional components. Common hooks are useState, useEffect, useContext, and useReducer.",
            codeSnippets: [
              {
                language: "jsx",
                code: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
    return () => {
      // Cleanup
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
              },
            ],
          },
          {
            id: "q12",
            question: "What is the virtual DOM?",
            answer:
              "The virtual DOM is a lightweight JavaScript representation of the real DOM. React compares virtual DOM trees to identify changes and updates only the necessary parts in the real DOM.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// Simplified virtual DOM concept
const vdom = {
  type: 'div',
  props: { className: 'container' },
  children: [
    {
      type: 'h1',
      props: {},
      children: 'Hello World'
    }
  ]
};

// React's reconciliation algorithm:
// 1. Create new VDOM
// 2. Compare with old VDOM (diffing)
// 3. Identify changes
// 4. Update only changed parts in real DOM (patching)
// This makes updates efficient!`,
              },
            ],
            diagrams: [
              {
                title: "Virtual DOM Process",
                imageUrl: "https://via.placeholder.com/500x300?text=Virtual+DOM+Flow",
                description: "Shows how Virtual DOM compares changes and updates the real DOM",
              },
            ],
          },
          {
            id: "q13",
            question: "What is JSX?",
            answer:
              "JSX is a syntax extension to JavaScript that looks like HTML. It gets compiled to JavaScript function calls (React.createElement) by Babel.",
            codeSnippets: [
              {
                language: "jsx",
                code: `// JSX syntax
const element = (
  <div className="greeting">
    <h1>Hello {name}</h1>
    <p>Welcome to React</p>
  </div>
);

// Compiled to:
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello ', name),
  React.createElement('p', null, 'Welcome to React')
);

// JSX is NOT valid JavaScript
// It needs to be transpiled by Babel`,
              },
            ],
          },
          {
            id: "q14",
            question: "What is the difference between state and props?",
            answer:
              "Props are read-only inputs passed from parent to child components. State is mutable data managed within a component and can be changed using setState or hooks.",
            codeSnippets: [
              {
                language: "jsx",
                code: `// Parent component
function App() {
  const [message, setMessage] = useState('Hello');

  return (
    <>
      <Greeting message={message} name="John" />
      <button onClick={() => setMessage('Hi')}>
        Update Message
      </button>
    </>
  );
}

// Child component
function Greeting({ message, name }) {
  // Props are read-only
  // message and name cannot be changed here
  
  return (
    <div>
      <p>{message}, {name}!</p>
      {/* This would cause error: */}
      {/* message = 'Goodbye'; // ❌ Wrong! */}
    </div>
  );
}

// Props are passed down
// State is local to component
// Use props for parent-to-child communication`,
              },
            ],
          },
          {
            id: "q15",
            question: "What are the different lifecycle methods in class components?",
            answer:
              "Lifecycle methods are special methods that run at different stages: mounting (constructor, render, componentDidMount), updating (componentDidUpdate), and unmounting (componentWillUnmount).",
            codeSnippets: [
              {
                language: "jsx",
                code: `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // Mounting phase
  }

  componentDidMount() {
    // Called after component mounts
    // Good place for API calls
  }

  componentDidUpdate(prevProps, prevState) {
    // Called after update
    // Runs on every state/prop change
  }

  componentWillUnmount() {
    // Called before component removes
    // Good place for cleanup
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Return true to render, false to skip
    return nextState.count !== this.state.count;
  }

  render() {
    return <div>Count: {this.state.count}</div>;
  }
}

// Modern approach with hooks:
function MyComponent() {
  useEffect(() => {
    // componentDidMount & componentDidUpdate
    return () => {
      // componentWillUnmount
    };
  }, []);
}`,
              },
            ],
          },
        ],
      },
      {
        id: "react-hooks",
        name: "Hooks Deep Dive",
        questions: [
          {
            id: "q16",
            question: "What is the useState hook and how does it work?",
            answer:
              "useState is a React hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.",
            codeSnippets: [
              {
                language: "jsx",
                code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => {
    setCount(count + 1); // Simple update
  };

  const decrementIfEven = () => {
    setCount(prevCount => {
      // Use previous state when new state depends on old state
      if (prevCount % 2 === 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <button onClick={increment}>+</button>
      <button onClick={decrementIfEven}>- (if even)</button>
    </div>
  );
}`,
              },
            ],
          },
          {
            id: "q17",
            question: "What is the useEffect hook?",
            answer:
              "useEffect is a hook that performs side effects (data fetching, subscriptions, DOM updates). It runs after render and accepts a dependency array to control when it runs.",
            codeSnippets: [
              {
                language: "jsx",
                code: `import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs after every render
  useEffect(() => {
    console.log('Runs after every render');
  });

  // Runs only on mount (empty dependency array)
  useEffect(() => {
    console.log('Runs once on mount');
    
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);

  // Runs when dependencies change
  useEffect(() => {
    console.log('Runs when id changes');
    fetchUserData(id);
  }, [id]); // Dependency array

  // Cleanup function - runs before unmount or before re-running effect
  useEffect(() => {
    const subscription = subscribe();
    
    return () => {
      // Cleanup
      subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}`,
              },
            ],
          },
          {
            id: "q18",
            question: "What is the useContext hook?",
            answer:
              "useContext allows you to consume context values without prop drilling. It takes a context object and returns the current context value.",
            codeSnippets: [
              {
                language: "jsx",
                code: `import { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consume context - without prop drilling
function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ 
        background: theme === 'light' ? '#fff' : '#222',
        color: theme === 'light' ? '#222' : '#fff'
      }}
    >
      Toggle Theme
    </button>
  );
}

// App
function App() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}`,
              },
            ],
          },
          {
            id: "q19",
            question: "What is the useReducer hook?",
            answer:
              "useReducer is a hook for managing complex state logic. It takes a reducer function and initial state, returning current state and a dispatch function.",
            codeSnippets: [
              {
                language: "jsx",
                code: `import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
}

// useReducer is better than useState when:
// - State has multiple sub-values
// - Next state depends on previous state
// - You have complex state transitions`,
              },
            ],
          },
          {
            id: "q20",
            question: "What are custom hooks?",
            answer:
              "Custom hooks are JavaScript functions that use other hooks. They let you extract component logic into reusable functions. Their names must start with 'use'.",
            codeSnippets: [
              {
                language: "jsx",
                code: `// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Using custom hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return <div>{user.name}</div>;
}

// Another custom hook for form handling
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
}`,
              },
            ],
          },
        ],
      },
      {
        id: "react-performance",
        name: "Performance Optimization",
        questions: [
          {
            id: "q21",
            question: "What is React.memo and when should you use it?",
            answer:
              "React.memo is a higher-order component that memoizes a component. It prevents re-renders if props haven't changed. Use it for expensive components that receive same props frequently.",
            codeSnippets: [
              {
                language: "jsx",
                code: `// Without memo - re-renders even if props are same
function Button({ label, onClick }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{label}</button>;
}

// With memo - only re-renders if props change
const MemoButton = React.memo(function Button({ label, onClick }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{label}</button>;
});

// Parent component
function App() {
  const [count, setCount] = useState(0);
  
  // Without memo, MemoButton re-renders even though its props didn't change
  // With memo, it doesn't re-render
  return (
    <>
      <p>Count: {count}</p>
      <MemoButton label="Click me" onClick={() => setCount(count + 1)} />
    </>
  );
}

// Custom comparison function
const ExpensiveComponent = React.memo(
  function Component({ data, count }) {
    return <div>{data.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (don't re-render)
    // Return false if props are different (re-render)
    return prevProps.data.id === nextProps.data.id;
  }
);`,
              },
            ],
          },
          {
            id: "q22",
            question: "What is useMemo and useCallback?",
            answer:
              "useMemo memoizes expensive calculations. useCallback memoizes function references. Both take a dependency array and recompute only when dependencies change.",
            codeSnippets: [
              {
                language: "jsx",
                code: `import { useMemo, useCallback } from 'react';

function ExpensiveComponent({ items }) {
  // useMemo - memoize expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value');
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]); // Only recompute when items change

  // useCallback - memoize function reference
  const handleClick = useCallback((id) => {
    console.log('Item clicked:', id);
    // Do something with id
  }, []); // No dependencies - same function always

  // With dependencies
  const handleDelete = useCallback((id) => {
    deleteItem(id);
    setItems(prev => prev.filter(item => item.id !== id));
  }, []); // Empty because deleteItem and setItems don't change

  return (
    <div>
      <p>Total: {expensiveValue}</p>
      <List items={items} onClickItem={handleClick} />
      <List items={items} onClickItem={handleDelete} />
    </div>
  );
}

// When to use:
// useMemo - expensive calculations, array/object that affects child renders
// useCallback - function passed to memoized child components`,
              },
            ],
          },
        ],
      },
      {
        id: "js-closures",
        name: "Closures & Scope",
        questions: [
          {
            id: "q23",
            question: "What is a closure in JavaScript?",
            answer:
              "A closure is a function that has access to variables in its outer scope even after the outer function has returned. Functions form closures around the data they need.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// Simple closure
function outer() {
  const message = 'Hello'; // Variable in outer scope

  function inner() {
    console.log(message); // inner has access to message
  }

  return inner;
}

const fn = outer();
fn(); // 'Hello' - closure retains access to message

// Practical example: Counter
function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1

// count is private and only accessible through returned methods
// This is data encapsulation through closure

// Closure in loops
const functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(() => console.log(i));
}
functions[0](); // 3 (var is function-scoped)
functions[1](); // 3
functions[2](); // 3

// Fix with closure
const functions2 = [];
for (let i = 0; i < 3; i++) {
  functions2.push(() => console.log(i));
}
functions2[0](); // 0 (let is block-scoped)
functions2[1](); // 1
functions2[2](); // 2`,
              },
            ],
          },
          {
            id: "q24",
            question: "What is scope and how many types of scope are there?",
            answer:
              "Scope determines where variables are accessible. Types: Global scope (whole program), Function scope (inside function), Block scope (inside {}, for, if), and Lexical scope (inner functions access outer variables).",
            codeSnippets: [
              {
                language: "javascript",
                code: `// Global scope
const global = 'I am global';

function functionScope() {
  // Function scope
  const local = 'I am local';
  
  if (true) {
    // Block scope
    const blockLocal = 'I am block scoped';
    console.log(blockLocal); // Accessible
  }
  
  console.log(blockLocal); // ReferenceError - not accessible
  console.log(global); // Accessible - lexical scope
}

console.log(local); // ReferenceError - not accessible outside function

// Lexical scope example
function outer() {
  const x = 10;

  function middle() {
    const y = 20;

    function inner() {
      const z = 30;
      console.log(x, y, z); // 10 20 30 - access parent scopes
    }

    inner();
  }

  middle();
}

// Scope chain - JavaScript looks up the scope chain
// inner -> middle -> outer -> global`,
              },
            ],
          },
        ],
      },
      {
        id: "js-this",
        name: "'this' Binding & Objects",
        questions: [
          {
            id: "q25",
            question: "What is 'this' in JavaScript and how is it determined?",
            answer:
              "'this' is a keyword that refers to the object context. Its value is determined by HOW a function is called: as method (object), function, constructor, or with call/apply/bind.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// 1. Method call - 'this' is the object
const obj = {
  name: 'Alice',
  greet() {
    console.log('Hello, ' + this.name);
  }
};
obj.greet(); // 'Hello, Alice'

// 2. Regular function call - 'this' is undefined (strict) or global
function sayName() {
  console.log(this.name);
}
sayName(); // undefined or window.name

// 3. Constructor call - 'this' is the new object
function Person(name) {
  this.name = name;
}
const person = new Person('Bob');
console.log(person.name); // 'Bob'

// 4. call/apply/bind - explicitly set 'this'
function introduce() {
  console.log('I am ' + this.name);
}
const user = { name: 'Charlie' };
introduce.call(user); // 'I am Charlie'
introduce.apply(user); // 'I am Charlie'

const bound = introduce.bind(user);
bound(); // 'I am Charlie'

// 5. Arrow function - 'this' from enclosing scope
const team = {
  name: 'Dev Team',
  members: ['Alice', 'Bob'],
  list() {
    this.members.forEach(member => {
      console.log(this.name + ': ' + member); // 'this' is team
    });
  }
};
team.list();`,
              },
            ],
          },
          {
            id: "q26",
            question: "What is the difference between call, apply, and bind?",
            answer:
              "call and apply invoke the function immediately and set 'this'. call takes arguments separately, apply takes an array. bind returns a new function with 'this' set but doesn't invoke it.",
            codeSnippets: [
              {
                language: "javascript",
                code: `function introduce(greeting, punctuation) {
  return greeting + ', ' + this.name + punctuation;
}

const person = { name: 'Alice' };

// call - invoke immediately, args separated
introduce.call(person, 'Hello', '!');
// 'Hello, Alice!'

// apply - invoke immediately, args in array
introduce.apply(person, ['Hi', '?']);
// 'Hi, Alice?'

// bind - return new function, doesn't invoke
const boundIntroduce = introduce.bind(person, 'Hey');
boundIntroduce('!!!');
// 'Hey, Alice!!!'

// Real-world example: Borrowing methods
const array = [1, 2, 3];
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// Borrow Array.prototype.join
Array.prototype.join.call(arrayLike, '-');
// 'a-b-c'

// Borrow Array.prototype.forEach
Array.prototype.forEach.call(arrayLike, item => console.log(item));`,
              },
            ],
          },
        ],
      },
      {
        id: "js-prototypes",
        name: "Prototypes & Inheritance",
        questions: [
          {
            id: "q27",
            question: "What are prototypes in JavaScript?",
            answer:
              "Prototypes are objects that other objects can inherit properties and methods from. Every object has a prototype ([[Prototype]]). Objects delegate to their prototype when a property is not found.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// Prototype chain
const person = {
  greet() {
    console.log('Hello');
  }
};

const alice = Object.create(person);
alice.name = 'Alice';

alice.greet(); // 'Hello' - inherited from prototype

// Constructor function and prototype
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' speaks');
};

const dog = new Animal('Dog');
dog.speak(); // 'Dog speaks'

// Prototype chain lookup
console.log(dog.hasOwnProperty('name')); // true - own property
console.log(dog.hasOwnProperty('speak')); // false - on prototype
console.log('speak' in dog); // true - found in chain

// Check prototype
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
console.log(dog instanceof Animal); // true

// Modify prototype
Animal.prototype.move = function() {
  console.log(this.name + ' moves');
};
dog.move(); // 'Dog moves' - new method available`,
              },
            ],
          },
          {
            id: "q28",
            question: "What is the difference between inheritance with prototypes and classes?",
            answer:
              "Prototypal inheritance uses prototype objects and Object.create. Class inheritance uses the class syntax (ES6), which is syntactic sugar over prototypal inheritance.",
            codeSnippets: [
              {
                language: "javascript",
                code: `// Prototypal Inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' speaks');
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log(this.name + ' barks');
};

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // 'Rex speaks'
dog.bark();  // 'Rex barks'

// Class Inheritance (ES6 - much cleaner!)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' speaks');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + ' barks');
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // 'Rex speaks'
dog.bark();  // 'Rex barks'

// Both are equivalent - classes are syntactic sugar over prototypes`,
              },
            ],
          },
        ],
      },
    ],
  },
  csharpSubject,
];
