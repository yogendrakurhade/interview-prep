import type { Topic } from "../../../types";

export const reactContextStateManagementTopic: Topic = {
  id: "react-context-state-management",
  name: "Context API & State Management",
  questions: [
    {
      id: "q1",
      question: "What is Context API and how does it solve prop drilling?",
      answer:
        "Context API is a built-in React feature for managing and sharing state across components without prop drilling. It allows you to pass data through the component tree without explicitly passing props at each level.\n\nProp drilling problem:\n• Passing props through multiple nested components\n• Middle components don't use the props\n• Makes code hard to maintain\n• Increases component coupling\n\nContext API solution:\n1. Create context: React.createContext()\n2. Create provider component to wrap tree\n3. Provide state value\n4. Consume context in any nested component with useContext()\n\nComponents:\n• Context: Created with createContext()\n• Provider: Wraps components and provides value\n• Consumer: Accesses context value (hooks or render props)\n\nUse cases:\n• Theme management (dark/light mode)\n• Authentication state\n• User preferences\n• Global notifications\n• Multi-language support\n• App configuration",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Creating and Using Context
import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook to Use Context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. Application Setup
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

// 5. Consume Context in Components
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </header>
  );
}

function MainContent() {
  const { theme } = useTheme();

  return (
    <main style={{ color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Content here</p>
    </main>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Complex Context: Authentication
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem('authToken', data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const value = { user, loading, error, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// Usage
function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Multiple Contexts Composition
const ThemeContext = createContext();
const LanguageContext = createContext();
const NotificationContext = createContext();

function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

// Usage in App
function App() {
  return (
    <AppProviders>
      <MainApp />
    </AppProviders>
  );
}

function MainApp() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { notify } = useNotification();

  return (
    <div style={{ theme: theme }}>
      <button onClick={() => notify('Hello!')}>Notify</button>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you optimize Context API to prevent unnecessary re-renders?",
      answer:
        "When context value changes, all consumers re-render even if they don't use the changed part. Optimization strategies prevent unnecessary re-renders and improve performance.\n\nOptimization techniques:\n1. Split contexts: Separate state and dispatch\n2. Memoize context value: useMemo() for complex values\n3. Use useCallback: Memoize callback functions\n4. Context selectors: Use libraries or custom hooks\n5. Multiple providers: Separate concerns\n6. Combine with useReducer: For complex state\n\nWhen to use each:\n• Small apps: Simple Context API works\n• Medium apps: Optimize with memoization\n• Large apps: Consider Redux or Zustand\n\nBest practices:\n• Don't put too much state in one context\n• Keep context value stable\n• Use dev tools to monitor re-renders\n• Profile performance with React DevTools",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Non-Optimized: Causes Unnecessary Re-renders
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  // This object is recreated on every render
  const value = {
    theme,
    setTheme,
    notifications,
    setNotifications
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Optimized: Using useMemo
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const addNotification = useCallback((message) => {
    setNotifications(prev => [...prev, message]);
  }, []);

  // Memoize context value to prevent re-renders
  const value = useMemo(() => ({
    theme,
    toggleTheme,
    notifications,
    addNotification
  }), [theme, toggleTheme, notifications, addNotification]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Split Contexts: State and Dispatch
const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const stateValue = useMemo(() => ({ theme }), [theme]);
  
  const dispatchValue = useMemo(() => ({
    toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }), []);

  return (
    <ThemeStateContext.Provider value={stateValue}>
      <ThemeDispatchContext.Provider value={dispatchValue}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useThemeState() {
  return useContext(ThemeStateContext);
}

function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

// Usage: Component only re-renders if theme changes, not if dispatch changes
function Component1() {
  const { theme } = useThemeState(); // Re-renders on theme change
  return <div>Theme: {theme}</div>;
}

function Component2() {
  const { toggleTheme } = useThemeDispatch(); // Never re-renders
  return <button onClick={toggleTheme}>Toggle</button>;
}`,
        },
        {
          language: "javascript",
          code: `// Context with useReducer for Complex State
const AppStateContext = createContext();
const AppDispatchContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME': return { ...state, theme: action.payload };
    case 'SET_LANGUAGE': return { ...state, language: action.payload };
    case 'SET_USER': return { ...state, user: action.payload };
    default: return state;
  }
}

function AppProvider({ children }) {
  const initialState = { theme: 'light', language: 'en', user: null };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const stateValue = useMemo(() => state, [state]);
  const dispatchValue = useMemo(() => dispatch, []);

  return (
    <AppStateContext.Provider value={stateValue}>
      <AppDispatchContext.Provider value={dispatchValue}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  return useContext(AppStateContext);
}

function useAppDispatch() {
  return useContext(AppDispatchContext);
}

// Usage
function App() {
  const { theme } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'SET_THEME', payload: 'dark' })}>
        Change Theme
      </button>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are the differences between Context API, Redux, and other state management solutions?",
      answer:
        "Different state management solutions have different trade-offs. Choose based on app complexity and requirements.\n\nContext API:\n• Pros: Built-in, simple, no dependencies\n• Cons: Can cause re-renders, limited DevTools, not optimized for complex state\n• Best for: Small to medium apps, global settings\n\nRedux:\n• Pros: Predictable state, excellent DevTools, time-travel debugging\n• Cons: Boilerplate, steep learning curve, overkill for simple apps\n• Best for: Large apps, team projects, complex state logic\n\nMobX:\n• Pros: Minimal boilerplate, reactive, great performance\n• Cons: Less popular, less predictable than Redux\n• Best for: Complex state with lots of computations\n\nZustand:\n• Pros: Lightweight, simple API, good DevTools\n• Cons: Smaller ecosystem than Redux\n• Best for: Medium to large apps seeking simplicity\n\nRecoil/Jotai:\n• Pros: Atomic state, granular reactivity\n• Cons: Still experimental\n• Best for: Fine-grained reactivity needs",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Context API Example
const AppContext = createContext();

function AppProvider({ children }) {
  const [state, setState] = useState(initialState);
  const value = useMemo(() => [state, setState], [state]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useApp() {
  const [state, setState] = useContext(AppContext);
  return { state, setState };
}

// Usage: Simple but no middleware, DevTools, or time-travel
function Component() {
  const { state, setState } = useApp();
  return <button onClick={() => setState(newState)}>Update</button>;
}`,
        },
        {
          language: "javascript",
          code: `// Redux Example (simplified)
import { createStore, connect } from 'redux';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    case 'DECREMENT': return { ...state, count: state.count - 1 };
    default: return state;
  }
}

const store = createStore(counterReducer);

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);`,
        },
        {
          language: "javascript",
          code: `// Zustand Example
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  theme: 'light',
  user: null,
  
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setTheme: (theme) => set({ theme }),
  setUser: (user) => set({ user }),
  reset: () => set({ count: 0, theme: 'light', user: null })
}));

// Usage: Simple and clean
function Counter() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// Selectors to optimize re-renders
function Theme() {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Theme: {theme}
    </button>
  );
}`,
        },
      ],
    },
  ],
};
