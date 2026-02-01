import type { Topic } from "../../../types";

export const reactHooksTopic: Topic = {
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
};
