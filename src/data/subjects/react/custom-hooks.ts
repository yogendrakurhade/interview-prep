import type { Topic } from "../../../types";

export const reactCustomHooksTopic: Topic = {
  id: "react-custom-hooks",
  name: "Custom Hooks & Advanced Patterns",
  questions: [
    {
      id: "q1",
      question: "What are Custom Hooks and how do you create them?",
      answer:
        "Custom Hooks are JavaScript functions that use React Hooks (useState, useEffect, etc.) to extract component logic into reusable functions. They allow you to reuse stateful logic without component duplication.\n\nRules for Custom Hooks:\n1. Must be functions that call other hooks\n2. Name must start with 'use' (e.g., useFetch, useForm)\n3. Can only be called from React components or other hooks\n4. Each hook call gets its own state\n\nBenefits:\n• Code reusability across components\n• Separation of concerns (logic vs UI)\n• Reduced component complexity\n• Easier testing of business logic\n• Share logic without render props or HOCs\n\nCommon patterns:\n• Data fetching hooks (useFetch)\n• Form handling hooks (useForm)\n• Local storage hooks (useLocalStorage)\n• Window size hooks (useWindowSize)\n• Debounce/throttle hooks (useDebounce)\n• Previous value hooks (usePrevious)",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Basic Custom Hook - useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; }; // Cleanup
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{user.name}</div>;
}`,
        },
        {
          language: "javascript",
          code: `// Custom Hook - useForm for Form Handling
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, reset, setValues };
}

// Usage
function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    async (values) => {
      await fetch('/api/login', { method: 'POST', body: JSON.stringify(values) });
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" type="password" value={values.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Custom Hook - useLocalStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 14);

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme: {theme}
      </button>
      <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you compose multiple custom hooks together?",
      answer:
        "Hook composition allows you to build complex functionality by combining multiple custom hooks. This is similar to function composition in functional programming.\n\nPatterns:\n1. Sequential hooks: Call multiple hooks one after another\n2. Conditional hooks: Logic that depends on previous hooks\n3. Hook factories: Functions that return hooks\n4. Hook wrappers: Hooks that enhance other hooks\n\nBest practices:\n• Keep hooks focused on single responsibility\n• Return values that consumers need\n• Handle loading/error states\n• Clean up resources properly\n• Consider performance implications\n• Document hook dependencies",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Composed Hooks - Fetch with Pagination
function usePaginatedFetch(baseUrl, itemsPerPage = 10) {
  const [page, setPage] = useState(1);
  const url = \`\${baseUrl}?page=\${page}&limit=\${itemsPerPage}\`;
  
  // Compose multiple hooks
  const { data, loading, error } = useFetch(url);
  const debouncedPage = useDebounce(page, 500);

  const goToPage = useCallback((newPage) => {
    setPage(Math.max(1, newPage));
  }, []);

  const nextPage = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage(prev => Math.max(1, prev - 1));
  }, []);

  return { data, loading, error, page, nextPage, prevPage, goToPage };
}

// Usage
function ProductList() {
  const { data: items, loading, nextPage, prevPage, page } = usePaginatedFetch('/api/products', 20);

  return (
    <div>
      {items?.map(item => <div key={item.id}>{item.name}</div>)}
      <button onClick={prevPage}>Previous</button>
      <span>Page {page}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Hook Factory - Create Custom Hooks Dynamically
function createAsyncHook(asyncFn) {
  return function useAsync(...args) {
    const [state, setState] = useState({ status: 'idle', data: null, error: null });

    useEffect(() => {
      let cancelled = false;
      setState({ status: 'pending', data: null, error: null });

      asyncFn(...args)
        .then(data => {
          if (!cancelled) setState({ status: 'success', data, error: null });
        })
        .catch(error => {
          if (!cancelled) setState({ status: 'error', data: null, error });
        });

      return () => { cancelled = true; };
    }, args);

    return state;
  };
}

// Create specific hooks from the factory
const useFetchUser = createAsyncHook(async (userId) => {
  const res = await fetch(\`/api/users/\${userId}\`);
  return res.json();
});

const useFetchPosts = createAsyncHook(async (userId) => {
  const res = await fetch(\`/api/users/\${userId}/posts\`);
  return res.json();
});

// Usage
function UserDashboard({ userId }) {
  const userState = useFetchUser(userId);
  const postsState = useFetchPosts(userId);

  return (
    <div>
      {userState.status === 'success' && <h1>{userState.data.name}</h1>}
      {postsState.status === 'success' && <div>{postsState.data.length} posts</div>}
    </div>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Hook Composition - useFetchWithCache
function useFetchWithCache(url) {
  const cache = useRef({});
  const { data, loading, error } = useFetch(url);

  const cachedData = useMemo(() => {
    if (!data) return null;
    cache.current[url] = data;
    return data;
  }, [data, url]);

  const getCachedData = useCallback(() => {
    return cache.current[url] || cachedData;
  }, [url, cachedData]);

  const clearCache = useCallback(() => {
    cache.current = {};
  }, []);

  return { data: cachedData || getCachedData(), loading, error, clearCache };
}

// Usage
function API Integration() {
  const { data, loading, clearCache } = useFetchWithCache('/api/data');

  return (
    <div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button onClick={clearCache}>Clear Cache</button>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are common patterns and best practices for custom hooks?",
      answer:
        "Custom hooks follow specific patterns and best practices to ensure they're reusable, maintainable, and performant.\n\nKey patterns:\n1. Separation of concerns: Logic vs UI\n2. Single responsibility: One hook does one thing\n3. Composition over inheritance\n4. Proper cleanup and memory management\n5. Error handling and loading states\n\nBest practices:\n• Use 'use' prefix for custom hooks\n• Document hook parameters and return values\n• Handle edge cases (empty data, errors, etc.)\n• Optimize dependencies in useEffect\n• Avoid creating hooks inside components\n• Test hooks independently\n• Consider performance with useMemo/useCallback\n• Provide reset/clear functions when appropriate\n• Handle async operations properly (cleanup)\n• Return consistent data structures",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Best Practice: useAsync Hook Pattern
function useAsync(asyncFunction, immediate = true, dependencies = []) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setStatus('pending');
    setData(null);
    setError(null);

    try {
      const response = await asyncFunction();
      setData(response);
      setStatus('success');
      return response;
    } catch (err) {
      setError(err);
      setStatus('error');
      throw err;
    }
  }, dependencies);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, data, error };
}

// Usage with proper typing and documentation
/**
 * useAsync Hook
 * @param {Function} asyncFunction - Async function to execute
 * @param {Boolean} immediate - Execute immediately on mount
 * @param {Array} dependencies - Re-execute when deps change
 * @returns {Object} { execute, status, data, error }
 */
function DataFetcher() {
  const { status, data, error, execute } = useAsync(
    async () => {
      const res = await fetch('/api/data');
      return res.json();
    },
    true,
    []
  );

  if (status === 'pending') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {error?.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}`,
        },
        {
          language: "javascript",
          code: `// Best Practice: useDebounce Hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// Usage: Search with Debounce
function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data: results } = useFetch(
    \`/api/users/search?q=\${debouncedSearchTerm}\`
  );

  return (
    <div>
      <input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {results?.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Best Practice: useReducer for Complex State
function useComplexState(initialState, reducer = null) {
  const defaultReducer = (state, action) => {
    switch (action.type) {
      case 'SET': return action.payload;
      case 'UPDATE': return { ...state, ...action.payload };
      case 'RESET': return initialState;
      default: return state;
    }
  };

  const [state, dispatch] = useReducer(
    reducer || defaultReducer,
    initialState
  );

  const setState = useCallback((value) => {
    dispatch({ type: 'SET', payload: value });
  }, []);

  const updateState = useCallback((updates) => {
    dispatch({ type: 'UPDATE', payload: updates });
  }, []);

  const resetState = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return [state, { setState, updateState, resetState }];
}

// Usage
function FormComponent() {
  const [formData, { updateState, resetState }] = useComplexState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <form>
      <input 
        value={formData.name}
        onChange={(e) => updateState({ name: e.target.value })}
      />
      <button onClick={resetState}>Reset Form</button>
    </form>
  );
}`,
        },
      ],
    },
  ],
};
