import type { Topic } from "../../../types";

export const reactRouterTopic: Topic = {
  id: "react-router",
  name: "React Router & Navigation",
  questions: [
    {
      id: "q1",
      question: "What is React Router and how does it work?",
      answer:
        "React Router is a library that enables client-side routing in React applications. It allows you to build single-page applications (SPAs) with multiple views without full page reloads.\n\nKey concepts:\n• BrowserRouter: Wrapper component that provides routing context\n• Routes: Container for Route components\n• Route: Maps URL paths to components\n• Link/NavLink: Navigation without full page reload\n• useNavigate: Hook for programmatic navigation\n• Dynamic routing: Routes can be defined based on conditions\n• Lazy loading: Code splitting with React.lazy and Suspense\n• Nested routes: Routes within routes for hierarchical navigation\n\nHow it works:\n1. BrowserRouter listens to URL changes in browser\n2. Routes component checks current URL against defined routes\n3. Matching component is rendered\n4. Navigation updates URL without page reload\n5. Browser history is maintained for back/forward buttons",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Basic React Router Setup
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Welcome to Home</div>; }
function About() { return <div>About Us</div>; }
function Products() { return <div>Products List</div>; }
function NotFound() { return <div>404 - Page Not Found</div>; }`,
        },
        {
          language: "javascript",
          code: `// Dynamic Routing with URL Parameters
import { useParams, useSearchParams } from 'react-router-dom';

// Route definition
<Route path="/product/:id" element={<ProductDetail />} />

function ProductDetail() {
  const { id } = useParams(); // Get path parameter
  const [searchParams] = useSearchParams(); // Get query parameters
  const category = searchParams.get('category');

  return (
    <div>
      <h1>Product {id}</h1>
      <p>Category: {category}</p>
    </div>
  );
}

// Navigation examples
// /product/123
// /product/123?category=electronics&sort=price`,
        },
        {
          language: "javascript",
          code: `// Nested Routes and Layout Patterns
import { Outlet } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>

function Layout() {
  return (
    <div>
      <header>Header</header>
      <aside>Sidebar</aside>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you implement lazy loading and code splitting with React Router?",
      answer:
        "Lazy loading allows you to split your bundle and load components on demand, improving initial load time. React provides React.lazy() for code splitting.\n\nImplementation:\n1. Use React.lazy() to wrap component import\n2. Use Suspense to handle loading state\n3. Provide fallback UI while component loads\n4. Routes load only when accessed\n\nBenefits:\n• Reduced initial bundle size\n• Faster initial page load\n• Improved performance on slow networks\n• Better resource utilization\n\nBest practices:\n• Lazy load route components, not utilities\n• Provide meaningful loading UI (spinner, skeleton)\n• Handle error boundaries\n• Use preloading for predictable navigation\n• Monitor bundle sizes with webpack analysis",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Lazy Loading with React.lazy and Suspense
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
      <Route path="/products" element={<Suspense fallback={<Loading />}><Products /></Suspense>} />
      <Route path="/admin" element={<ProtectedRoute><Suspense fallback={<Loading />}><Admin /></Suspense></ProtectedRoute>} />
    </Routes>
  );
}

function Loading() {
  return <div className="spinner">Loading...</div>;
}`,
        },
        {
          language: "javascript",
          code: `// Custom Loading Component with Suspense
function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<lazy.Home />} />
        <Route path="/dashboard" element={<lazy.Dashboard />} />
      </Routes>
    </Suspense>
  );
}

function Skeleton() {
  return (
    <div className="skeleton-container">
      <div className="skeleton skeleton-header"></div>
      <div className="skeleton skeleton-content"></div>
      <div className="skeleton skeleton-content"></div>
    </div>
  );
}

// CSS for skeleton loading
const skeletonCSS = \`
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
\`;`,
        },
        {
          language: "javascript",
          code: `// Error Boundary with Lazy Loading
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Failed to load component. Please refresh.</div>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/admin" element={<Suspense fallback={<Loading />}><Admin /></Suspense>} />
      </Routes>
    </ErrorBoundary>
  );
}`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you implement protected/private routes in React Router?",
      answer:
        "Protected routes restrict access to certain pages based on authentication status, user roles, or permissions. They redirect unauthorized users to login or error pages.\n\nImplementation approaches:\n1. Route wrapper component: Create ProtectedRoute component\n2. Check authentication status in wrapper\n3. Redirect to login if not authenticated\n4. Check user permissions/roles\n5. Handle role-based access control (RBAC)\n\nCommon patterns:\n• Authentication check: Verify user is logged in\n• Role-based access: Check user permissions\n• Token validation: Verify JWT token validity\n• Redirect to login: Send unauthorized users to auth page\n• Loading state: Handle auth check in progress\n\nBest practices:\n• Validate on both client and server\n• Don't expose sensitive routes to unauthorized users\n• Provide clear error messages\n• Implement proper logout handling\n• Refresh tokens before expiry",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Protected Route Component
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage in Routes
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
</Routes>`,
        },
        {
          language: "javascript",
          code: `// Role-Based Protected Route
function RoleProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.roles.includes(requiredRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// Usage
<Routes>
  <Route path="/admin" element={<RoleProtectedRoute requiredRole="admin"><AdminPanel /></RoleProtectedRoute>} />
  <Route path="/editor" element={<RoleProtectedRoute requiredRole="editor"><EditorPanel /></RoleProtectedRoute>} />
</Routes>`,
        },
        {
          language: "javascript",
          code: `// Advanced Protected Route with Token Validation
async function validateToken(token) {
  try {
    const response = await fetch('/api/validate-token', {
      headers: { Authorization: \`Bearer \${token}\` }
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

function ProtectedRoute({ children }) {
  const [authStatus, setAuthStatus] = useState('loading');
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!token) {
      setAuthStatus('unauthenticated');
      return;
    }

    validateToken(token).then(isValid => {
      setAuthStatus(isValid ? 'authenticated' : 'unauthenticated');
    });
  }, [token]);

  if (authStatus === 'loading') {
    return <Spinner />;
  }

  if (authStatus === 'unauthenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}`,
        },
      ],
    },
  ],
};
