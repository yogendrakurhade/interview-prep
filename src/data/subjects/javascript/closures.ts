import type { Topic } from "../../../types";

export const closuresTopic: Topic = {
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
};
