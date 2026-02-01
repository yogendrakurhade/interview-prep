import type { Topic } from "../../../types";

export const reactPerformanceTopic: Topic = {
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
};
