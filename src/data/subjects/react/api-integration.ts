import type { Topic } from "../../../types";

export const reactAPIIntegrationTopic: Topic = {
  id: "react-api-integration",
  name: "API Integration with Axios & Fetch",
  questions: [
    {
      id: "q1",
      question: "How do you fetch data in React using Fetch API and Axios?",
      answer:
        "Fetching data from APIs is a core part of React applications. Both Fetch API and Axios are common approaches with different advantages.\n\nFetch API:\n• Built-in browser API\n• No dependencies\n• Lower-level control\n• Requires manual JSON parsing\n• More verbose error handling\n\nAxios:\n• Third-party library\n• Higher-level abstraction\n• Automatic JSON serialization\n• Request/response interceptors\n• Better error handling\n• Request cancellation built-in\n\nCommon patterns:\n1. Fetch on component mount\n2. Handle loading/error states\n3. Clean up on unmount\n4. Prevent race conditions\n5. Handle timeouts\n6. Retry logic\n\nBest practices:\n• Use useEffect for data fetching\n• Set loading state\n• Handle errors properly\n• Clean up requests on unmount\n• Use AbortController for cancellation\n• Avoid fetching in render\n• Consider custom hooks for reusability",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Fetch API Example
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(\`Error: \${response.status}\`);
        }

        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Cleanup: Cancel request on unmount
    return () => controller.abort();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{user?.name}</div>;
}`,
        },
        {
          language: "javascript",
          code: `// Axios Example
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(\`/api/users/\${userId}\`);
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{user?.name}</div>;
}

// Axios is cleaner: No need for manual JSON parsing`,
        },
        {
          language: "javascript",
          code: `// Axios with Request Interceptor
import axios from 'axios';

// Create instance
const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000
});

// Request interceptor: Add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: Handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post('/refresh-token');
        localStorage.setItem('authToken', data.token);
        originalRequest.headers.Authorization = \`Bearer \${data.token}\`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Usage: Token automatically added and refreshed
export default apiClient;`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you handle loading states, errors, and race conditions in API calls?",
      answer:
        "Proper handling of async operations is crucial for robust React applications. Race conditions, loading states, and error handling must be managed carefully.\n\nCommon issues:\n1. Race conditions: Multiple simultaneous requests\n2. Memory leaks: Setting state after unmount\n3. Network errors: No internet or server down\n4. Timeouts: Slow or unresponsive servers\n5. Stale data: Using outdated cached results\n\nSolutions:\n• AbortController: Cancel outdated requests\n• Cleanup functions: Prevent memory leaks\n• Error boundaries: Catch component errors\n• Retry logic: Handle temporary failures\n• Caching: Reduce unnecessary requests\n• Loading states: Provide user feedback\n• Debounce/throttle: Limit request frequency\n\nBest practices:\n• Always cleanup in useEffect\n• Check isMounted before setState\n• Use AbortController for cancellation\n• Implement proper error UI\n• Add request timeout\n• Show loading indicator\n• Handle edge cases",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Handling Race Conditions
function SearchUsers({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If query is empty, don't fetch
    if (!query) {
      setResults([]);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    const searchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/search?q=\${query}\`, {
          signal: controller.signal
        });
        
        const data = await response.json();

        // Only update if this is the latest request
        // Prevents race condition where newer request finishes before older one
        if (isMounted) {
          setResults(data);
          setError(null);
        }
      } catch (err) {
        if (err.name !== 'AbortError' && isMounted) {
          setError(err.message);
          setResults([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    searchUsers();

    // Cleanup: Cancel outdated requests
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [query]); // Re-fetch when query changes

  return (
    <div>
      {loading && <span>Searching...</span>}
      {error && <div className="error">{error}</div>}
      <ul>
        {results.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Retry Logic with Exponential Backoff
async function fetchWithRetry(url, options = {}, retries = 3) {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      return response.json();
    } catch (error) {
      lastError = error;
      if (i < retries - 1) {
        // Exponential backoff: 1s, 2s, 4s
        const backoffMs = Math.pow(2, i) * 1000;
        await delay(backoffMs);
      }
    }
  }

  throw new Error(\`Failed after \${retries} retries: \${lastError.message}\`);
}

function DataFetcher() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  const loadData = async () => {
    setStatus('loading');
    try {
      const result = await fetchWithRetry('/api/data', {}, 3);
      setData(result);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.error('Failed to fetch:', error);
    }
  };

  return (
    <div>
      <button onClick={loadData}>Load Data</button>
      {status === 'loading' && <span>Loading...</span>}
      {status === 'success' && <pre>{JSON.stringify(data)}</pre>}
      {status === 'error' && <span>Failed to load data</span>}
    </div>
  );
}`,
        },
        {
          language: "javascript",
          code: `// Request Debouncing to Prevent Race Conditions
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

function SearchWithDebounce() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce search term (wait 500ms after user stops typing)
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    let isMounted = true;

    const search = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          \`/api/search?q=\${debouncedSearchTerm}\`,
          { signal: controller.signal }
        );
        const data = await response.json();
        
        if (isMounted) {
          setResults(data);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Search failed:', error);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    search();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [debouncedSearchTerm]); // Only fetch when debounced term changes

  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      {loading && <span>Searching...</span>}
      <ul>
        {results.map((result, i) => <li key={i}>{result}</li>)}
      </ul>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are best practices for API integration in production React apps?",
      answer:
        "Production applications require robust API integration with proper error handling, caching, performance optimization, and security.\n\nKey practices:\n1. Environment configuration: Separate endpoints for dev/prod\n2. Request interceptors: Add auth, logging, error handling\n3. Response caching: Reduce API calls\n4. Error handling: User-friendly error messages\n5. Loading states: Skeleton screens, spinners\n6. Request timeout: Prevent hanging requests\n7. Circuit breaker: Fail fast on repeated failures\n8. Monitoring: Log errors and analytics\n9. Rate limiting: Respect API limits\n10. Security: HTTPS, token management, CORS\n\nAuthentication:\n• Store tokens securely (not localStorage)\n• Refresh token before expiry\n• Handle 401 responses\n• Logout on auth failure\n\nPerformance:\n• Lazy load data\n• Pagination for large datasets\n• Batch requests when possible\n• Use request deduplication\n• Implement caching strategies\n\nTesting:\n• Mock API responses\n• Test error scenarios\n• Test loading states\n• Test race conditions\n• Test retry logic",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Production API Client Setup
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }

    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log(\`[API Request] \${config.method.toUpperCase()} \${config.url}\`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(\`[API Response] \${response.status} \${response.config.url}\`);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401: Try to refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post(
          \`\${process.env.REACT_APP_API_URL}/refresh-token\`,
          { refreshToken: localStorage.getItem('refreshToken') }
        );

        localStorage.setItem('authToken', data.token);
        originalRequest.headers.Authorization = \`Bearer \${data.token}\`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed: logout user
        localStorage.clear();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    if (process.env.NODE_ENV === 'development') {
      console.error('[API Error]', error.response?.data || error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;`,
        },
        {
          language: "javascript",
          code: `// Request Caching Layer
class APICache {
  constructor(ttl = 5 * 60 * 1000) { // 5 minutes default
    this.cache = new Map();
    this.ttl = ttl;
  }

  set(key, value) {
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  clear() {
    this.cache.clear();
  }
}

const cache = new APICache();

async function cachedFetch(url) {
  // Check cache first
  const cached = cache.get(url);
  if (cached) {
    console.log('Cache hit:', url);
    return cached;
  }

  // Fetch if not cached
  const response = await fetch(url);
  const data = await response.json();

  // Cache response
  cache.set(url, data);

  return data;
}

// Usage in hook
function useCachedData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cachedFetch(url)
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}`,
        },
        {
          language: "javascript",
          code: `// Circuit Breaker Pattern
class CircuitBreaker {
  constructor(threshold = 5, timeout = 60000) {
    this.failureCount = 0;
    this.threshold = threshold;
    this.timeout = timeout;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.nextAttempt = Date.now();
  }

  async call(fn) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}

const breaker = new CircuitBreaker(5, 30000);

function useCircuitBreakerAPI(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    breaker.call(() => fetch(url).then(r => r.json()))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}`,
        },
      ],
    },
  ],
};
