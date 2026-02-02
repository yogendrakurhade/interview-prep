import type { Topic } from "../../../types";

export const reactVirtualDOMTopic: Topic = {
  id: "react-virtual-dom-advanced",
  name: "Virtual DOM, Shadow DOM & Advanced Concepts",
  questions: [
    {
      id: "q1",
      question: "What is the Virtual DOM and how does React use it for rendering?",
      answer:
        "Virtual DOM is an in-memory representation of the actual DOM. React uses it to optimize rendering performance by comparing changes and only updating the necessary parts of the real DOM.\n\nHow it works:\n1. Render component → Creates Virtual DOM tree\n2. Compare new Virtual DOM with previous version (diffing)\n3. Calculate minimal changes (reconciliation)\n4. Update only changed parts in real DOM (patching)\n\nDiffing algorithm:\n• Compares elements at same level\n• If element type changed, recreates entire subtree\n• If element type same, updates attributes\n• Uses keys for list items to maintain identity\n\nReconciliation process:\n1. Traverse both trees simultaneously\n2. Mark differences\n3. Batch updates for efficiency\n4. Apply batch to real DOM\n\nBenefits:\n• Faster than direct DOM manipulation\n• Reduces layout thrashing\n• Batches updates\n• Abstracts browser differences\n• Enables cross-platform rendering",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Virtual DOM Concept Illustration
// Initial render
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <ul>
        <li key="1">Item 1</li>
        <li key="2">Item 2</li>
      </ul>
    </div>
  );
}

// First render: Creates Virtual DOM
/* Virtual DOM Tree:
{
  type: 'div',
  props: { className: 'container' },
  children: [
    { type: 'h1', props: {}, children: ['Hello'] },
    {
      type: 'ul',
      props: {},
      children: [
        { type: 'li', props: { key: '1' }, children: ['Item 1'] },
        { type: 'li', props: { key: '2' }, children: ['Item 2'] }
      ]
    }
  ]
}
*/

// After state change: New Virtual DOM created
function App() {
  return (
    <div className="container">
      <h1>Hello World</h1> {/* Changed text */}
      <ul>
        <li key="1">Item 1</li>
        <li key="2">Item 2 Updated</li> {/* Changed text */}
        <li key="3">Item 3</li> {/* New item */}
      </ul>
    </div>
  );
}

// React diffs and finds:
// 1. h1 text changed from "Hello" to "Hello World"
// 2. li with key="2" text changed
// 3. New li with key="3" added
// Real DOM updates only these 3 elements`,
        },
        {
          language: "javascript",
          code: `// Why Keys are Important in Lists
// Without keys: React compares by position
function BadList() {
  const [items, setItems] = useState(['A', 'B', 'C']);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}> {/* DON'T USE INDEX AS KEY */}
          <input placeholder={item} />
        </div>
      ))}
      <button onClick={() => setItems(['X', ...items])}>Add Item</button>
    </div>
  );
}
// Problem: When adding 'X', React thinks:
// Position 0: 'A' -> 'X' (update input value)
// Position 1: 'B' -> 'A' (update input value)
// Position 2: 'C' -> 'B' (update input value)
// Position 3: (empty) -> 'C' (add new)
// Input focus and state gets mixed up!

// With stable keys: React tracks identity
function GoodList() {
  const [items, setItems] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
  ]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}> {/* Stable key */}
          <input placeholder={item.name} />
        </div>
      ))}
      <button onClick={() => setItems([{ id: 0, name: 'X' }, ...items])}>
        Add Item
      </button>
    </div>
  );
}
// React correctly identifies:
// ID 0: New item 'X' (add new input)
// ID 1: 'A' stays in same position
// ID 2: 'B' stays in same position
// ID 3: 'C' stays in same position`,
        },
        {
          language: "javascript",
          code: `// Understanding Reconciliation
import React from 'react';

// Old render
<div>
  <Component key="a" id={1} />
  <Component key="b" id={2} />
</div>

// New render (props changed)
<div>
  <Component key="a" id={1} /> {/* Props: id=1 */}
  <Component key="b" id={3} /> {/* Props: id changed to 3 */}
</div>

// Reconciliation process:
// 1. Key 'a': Same key, same component type -> Update props (id stayed 1)
// 2. Key 'b': Same key, same component type -> Update props (id changed from 2 to 3)
// Result: 2 updates, 0 unmounts/remounts

// Compare with no keys:
<div>
  <Component id={1} />
  <Component id={2} />
</div>

<div>
  <Component id={1} />
  <Component id={3} />
</div>

// Without keys, React compares by position:
// Position 0: id={1} -> id={1} (props match, no update)
// Position 1: id={2} -> id={3} (props changed, update)
// Same result but less efficient when reordering`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Shadow DOM and how does it differ from Virtual DOM?",
      answer:
        "Shadow DOM and Virtual DOM are completely different concepts, often confused because of similar names.\n\nVirtual DOM:\n• JavaScript representation of UI\n• Created by React for rendering optimization\n• Not actual DOM\n• Used for diffing and reconciliation\n• Part of React's implementation\n\nShadow DOM:\n• Actual DOM API (Web Components standard)\n• Encapsulated subtree of real DOM\n• Provides style and DOM encapsulation\n• Prevents style leakage\n• Allows creating reusable components\n• Browser feature, not framework-specific\n\nUse cases:\n• Virtual DOM: Framework rendering optimization\n• Shadow DOM: Component encapsulation and reusability\n\nComparison:\n| Feature | Virtual DOM | Shadow DOM |\n|---------|-------------|----------|\n| What is it | JS abstraction | Real DOM |\n| Purpose | Optimization | Encapsulation |\n| Framework | React-specific | Browser API |\n| Performance | Improves rendering | No direct impact |\n| CSS scoping | No | Yes |\n| DOM traversal | Not accessible | Encapsulated |\n\nThey can work together: React can render into Shadow DOM",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Shadow DOM: Web Components Example
class CustomButton extends HTMLElement {
  constructor() {
    super();
    // Attach shadow DOM
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = \`
      <style>
        button {
          background-color: blue;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
        }
        
        button:hover {
          background-color: darkblue;
        }
      </style>
      <button>
        <slot></slot> {/* Placeholder for slotted content */}
      </button>
    \`;

    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('button-clicked', { bubbles: true }));
    });
  }
}

customElements.define('custom-button', CustomButton);

// Usage: CSS doesn't leak in or out
\`
<custom-button>Click me</custom-button>

<style>
  button { color: red; } /* Doesn't affect custom-button */
</style>
\``,
        },
        {
          language: "javascript",
          code: `// Shadow DOM Style Encapsulation Benefits
// Regular HTML/CSS (no encapsulation)
function RegularComponent() {
  return (
    <div className="component">
      <button className="btn">Click</button>
      <style>{css\`
        .btn { background: blue; } /* Affects all .btn globally */
      \`}</style>
    </div>
  );
}

// Problem: Global style conflicts
// If parent also has .btn style, they conflict!

// Shadow DOM (encapsulated)
class EncapsulatedComponent extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = \`
      <style>
        .btn { background: blue; } /* Only affects this component's button */
      </style>
      <button class="btn">Click</button>
    \`;
  }
}

// Benefit: Styles are scoped
// .btn in parent document doesn't affect this component
// .btn in this component doesn't affect parent`,
        },
        {
          language: "javascript",
          code: `// React with Shadow DOM
function ReactWebComponent() {
  const containerRef = useRef(null);

  useEffect(() => {
    const host = containerRef.current;
    const shadow = host.attachShadow({ mode: 'open' });

    // Render React into shadow DOM
    const root = ReactDOM.createRoot(shadow);
    root.render(
      <>
        <style>{\`
          :host {
            display: block;
            padding: 20px;
            border: 1px solid #ccc;
          }
          
          h1 { color: blue; }
          p { color: gray; }
        \`}</style>
        <h1>Encapsulated Component</h1>
        <p>Content is isolated</p>
      </>
    );

    return () => root.unmount();
  }, []);

  return <div ref={containerRef} />;
}

// Usage: Styles and DOM are encapsulated
\`
<ReactWebComponent></ReactWebComponent>

<style>
  h1 { color: red; } /* Doesn't affect ReactWebComponent's h1 */
</style>
\``,
        },
      ],
    },
    {
      id: "q3",
      question: "What are React Fibers and how do they improve rendering?",
      answer:
        "React Fibers are the internal architecture that powers React's reconciliation algorithm. They enable incremental rendering, prioritized updates, and better performance.\n\nWhat are Fibers:\n• Lightweight JavaScript objects representing work units\n• Each component instance gets a fiber\n• Fibers form a tree structure\n• Contain information about component and its work\n\nHow Fibers improve rendering:\n1. Incremental rendering: Split work into small chunks\n2. Prioritized updates: High-priority updates first (user input)\n3. Pausable: Can pause/resume rendering\n4. Reclaimable: Can restart rendering if needed\n5. Yielding: Yield to browser for frame work\n\nBefore Fibers (Stack Reconciler):\n• Rendered entire tree synchronously\n• Blocking the main thread\n• Could cause frame drops and janky UI\n\nWith Fibers (Fiber Reconciler):\n• Renders incrementally\n• Works within frame budgets\n• Prioritizes important updates\n• Smooth 60 FPS possible\n\nKey Fiber features:\n• Time slicing: Break work into time slices\n• Suspense: Pause rendering while data loads\n• Priority levels: Different update priorities\n• Error boundaries: Catch errors during render",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Fiber Update Priorities
import { useState } from 'react';

function PriorityDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleUrgentUpdate = () => {
    // High priority: User input (clicks, typing)
    // Fiber prioritizes this
    setCount(prev => prev + 1);
  };

  const handleDeferredUpdate = () => {
    // Low priority: Non-urgent updates
    // Fiber can defer this
    setText('This can wait');
  };

  return (
    <div>
      <button onClick={handleUrgentUpdate}>
        Urgent: {count}
      </button>
      <button onClick={handleDeferredUpdate}>
        Deferred
      </button>
      <p>{text}</p>
      {/* Expensive render: Fiber breaks into chunks */}
      {Array.from({ length: 1000 }).map((_, i) => (
        <div key={i} style={{ height: '1px' }}>•</div>
      ))}
    </div>
  );
}

// React Fiber priority levels:
// 1. Immediate (user input, layout)
// 2. User-blocking (animations within 250ms)
// 3. Normal (updates without specific timing)
// 4. Low (deferred work)
// 5. Idle (non-urgent background work)`,
        },
        {
          language: "javascript",
          code: `// Time Slicing with Fibers
function ExpensiveList({ items }) {
  // Rendering 10000 items synchronously = janky UI
  // With Fibers: React renders in time slices
  
  return (
    <div>
      <h1>Items: {items.length}</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <ExpensiveComponent item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExpensiveComponent({ item }) {
  // Simulate expensive computation
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  return <span>{item.name}: {sum}</span>;
}

// Without Fibers: Blocks main thread, dropping frames
// With Fibers: 
// - Fiber breaks rendering into chunks (~5ms each)
// - After each chunk, yields to browser
// - Browser can handle user input
// - Smooth UI despite expensive rendering`,
        },
        {
          language: "javascript",
          code: `// Concurrent Features with Fibers
import { Suspense, useState, useTransition } from 'react';

function ConcurrentDemo() {
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // High priority: Update input immediately
    setInput(e.target.value);

    // Low priority: Search results (deferred update)
    startTransition(() => {
      // This update is lower priority
      // If urgent updates come in, this can be interrupted
      performSearch(e.target.value);
    });
  };

  return (
    <div>
      <input 
        value={input}
        onChange={handleChange}
        placeholder="Search..."
      />
      
      {isPending && <span>Searching...</span>}
      
      <Suspense fallback={<div>Loading results...</div>}>
        <SearchResults query={input} />
      </Suspense>
    </div>
  );
}

// Fiber allows:
// 1. Input to update immediately (user sees typing)
// 2. Search to run in background (lower priority)
// 3. Results to load with Suspense (pause rendering if needed)
// 4. Smooth experience despite multiple concurrent updates`,
        },
      ],
    },
  ],
};
