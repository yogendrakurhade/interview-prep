import type { Topic } from "../../../types";

export const reactBasicsTopic: Topic = {
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
};
