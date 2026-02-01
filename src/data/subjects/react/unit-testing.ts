import type { Topic } from "../../../types";

export const reactUnitTestingTopic: Topic = {
  id: "react-unit-testing",
  name: "Unit Testing",
  questions: [
    {
      id: "q31",
      question: "What is React Testing Library and how does it differ from Enzyme?",
      answer:
        "React Testing Library is a modern testing utility that encourages testing components from a user's perspective. It queries the DOM using user-facing selectors (text, roles, labels). Enzyme tests component internals (state, props) and implementation details. React Testing Library is now the recommended approach as it prevents testing implementation details and ensures your tests resemble actual user interactions.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// React Testing Library - User-centric approach
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('should display and update counter', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  
  await userEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});`,
        },
        {
          language: "javascript",
          code: `// Enzyme - Component implementation testing (less recommended)
import { shallow } from 'enzyme';

test('should update state on button click', () => {
  const wrapper = shallow(<Counter />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('count')).toBe(1);
});`,
        },
      ],
    },
    {
      id: "q32",
      question: "How do you test asynchronous operations in React components?",
      answer:
        "Use async/await with React Testing Library. Import waitFor to wait for elements to appear or changes to complete. Use screen queries like getByText or getByRole with waitFor for elements that appear after async operations.",
      codeSnippets: [
        {
          language: "javascript",
          code: `import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('should fetch and display user data', async () => {
  render(<UserProfile userId="123" />);
  
  // Component starts loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for the user name to appear
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});

// Alternative with findBy
test('should display user name', async () => {
  render(<UserProfile userId="123" />);
  
  // findBy automatically waits for element
  const userName = await screen.findByText('John Doe');
  expect(userName).toBeInTheDocument();
});`,
        },
      ],
    },
    {
      id: "q33",
      question: "What are some best practices for writing React component tests?",
      answer:
        "1) Test user behavior, not implementation details. 2) Use semantic queries (getByRole, getByLabelText) over getByTestId. 3) Avoid testing internal state directly. 4) Test component interactions like clicks and form submissions. 5) Mock external dependencies (APIs, timers). 6) Keep tests focused and readable. 7) Use beforeEach for setup and afterEach for cleanup. 8) Test accessibility with proper roles and labels.",
      codeSnippets: [
        {
          language: "javascript",
          code: `import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Good: Test user interactions
test('should submit form with user data', async () => {
  render(<LoginForm />);
  
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });
  
  await userEvent.type(emailInput, 'user@example.com');
  await userEvent.type(passwordInput, 'password123');
  await userEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});

// Bad: Testing implementation details
test('should set state', () => {
  const wrapper = shallow(<LoginForm />);
  wrapper.setState({ email: 'user@example.com' });
  expect(wrapper.state('email')).toBe('user@example.com');
});`,
        },
      ],
    },
    {
      id: "q34",
      question: "How do you mock API calls in React tests?",
      answer:
        "Use jest.mock() to mock modules, or use libraries like MSW (Mock Service Worker) for API mocking. You can mock fetch or axios globally, or mock specific modules. For testing hooks that fetch data, mock the fetch/axios call and test the component's response to the mocked data.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Using jest.mock
jest.mock('axios');

test('should display fetched posts', async () => {
  const mockPosts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ];
  
  axios.get.mockResolvedValue({ data: mockPosts });
  
  render(<PostList />);
  
  await waitFor(() => {
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });
  
  expect(axios.get).toHaveBeenCalledWith('/api/posts');
});

// Using Mock Service Worker (MSW)
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/api/posts', (req, res, ctx) => {
    return res(ctx.json([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());`,
        },
      ],
    },
    {
      id: "q35",
      question: "How do you test custom React hooks?",
      answer:
        "Use the renderHook utility from @testing-library/react-hooks (or @testing-library/react in v13+). This allows you to test hooks in isolation without rendering a component. Use act() to wrap state updates and waitFor() to test async behavior.",
      codeSnippets: [
        {
          language: "javascript",
          code: `import { renderHook, act, waitFor } from '@testing-library/react';
import { useCounter } from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});

test('should fetch data', async () => {
  const { result } = renderHook(() => useFetchUser('123'));
  
  expect(result.current.loading).toBe(true);
  
  await waitFor(() => {
    expect(result.current.loading).toBe(false);
    expect(result.current.user.name).toBe('John');
  });
});`,
        },
      ],
    },
    {
      id: "q36",
      question: "What is snapshot testing and when should you use it?",
      answer:
        "Snapshot testing captures the rendered output of a component and stores it. On future runs, new output is compared against the snapshot. It's useful for detecting unintended UI changes but should not be the primary testing strategy. Use sparingly for stable, large components. Always review snapshot changes carefully before updating them, as they can hide real bugs.",
      codeSnippets: [
        {
          language: "javascript",
          code: `import { render } from '@testing-library/react';

test('should match snapshot', () => {
  const { container } = render(<Button variant="primary">Click Me</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

/* Generated snapshot file:
exports[\`should match snapshot\`] = \`
<button class="btn btn-primary">
  Click Me
</button>
\`;
*/

// Update snapshot when intentional change is made
// Run: jest --updateSnapshot or jest -u`,
        },
      ],
    },
    {
      id: "q37",
      question: "How do you test context providers in React?",
      answer:
        "Wrap the component under test with the context provider. You can create a wrapper component for renderHook or render to reduce boilerplate. This allows testing components that consume context without directly testing the context object.",
      codeSnippets: [
        {
          language: "javascript",
          code: `import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';

// Option 1: Wrap component directly
test('should use theme from context', () => {
  render(
    <ThemeProvider initialTheme="dark">
      <ThemedComponent />
    </ThemeProvider>
  );
  
  expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
});

// Option 2: Create reusable wrapper
const renderWithTheme = (component, initialTheme = 'light') => {
  return render(
    <ThemeProvider initialTheme={initialTheme}>
      {component}
    </ThemeProvider>
  );
};

test('should update theme on button click', async () => {
  renderWithTheme(<ThemedComponent />);
  const button = screen.getByRole('button', { name: /toggle/i });
  
  await userEvent.click(button);
  
  expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
});`,
        },
      ],
    },
    {
      id: "q38",
      question: "What are the differences between getByXxx, queryByXxx, and findByXxx?",
      answer:
        "getByXxx: Returns element or throws error if not found. Use for elements that should exist immediately. queryByXxx: Returns element, null if not found, or throws error if multiple match. Use to assert element is NOT in document. findByXxx: Returns promise that resolves to element. Waits for element to appear. Use for async rendering or after user interactions.",
      codeSnippets: [
        {
          language: "javascript",
          code: `import { render, screen } from '@testing-library/react';

test('query method examples', () => {
  render(<Component />);
  
  // getByRole - throws if not found
  const button = screen.getByRole('button', { name: /submit/i });
  
  // queryByText - returns null if not found
  const loading = screen.queryByText('Loading...');
  expect(loading).not.toBeInTheDocument();
  
  // findByText - returns promise, waits for element
  const result = await screen.findByText('Success!');
  expect(result).toBeInTheDocument();
});`,
        },
      ],
    },
  ],
};
