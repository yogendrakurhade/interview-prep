import type { Topic } from "../../../types";

export const basicsTopics: Topic = {
  id: "js-basics",
  name: "Basics",
  questions: [
    {
      id: "q1",
      question: "What are the different data types in JavaScript?",
      answer:
        "JavaScript has 8 data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt, and Object. Primitive types are immutable, while objects are mutable reference types.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Primitive types
const num = 42;
const str = "Hello";
const bool = true;
const sym = Symbol("id");
const bigInt = 123n;
const nul = null;
const undef = undefined;

// Non-primitive (Reference types)
const obj = { name: "John" };
const arr = [1, 2, 3];
const func = () => {}; // Functions are objects`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is the difference between var, let, and const?",
      answer:
        "var is function-scoped and hoisted. let and const are block-scoped and not hoisted. const cannot be reassigned, but object properties can be modified.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// var - function scoped, hoisted
function test() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1
}

// let - block scoped, temporal dead zone
function test2() {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 2;
}

// const - block scoped, cannot reassign
const z = 3;
z = 4; // TypeError: Assignment to constant variable
const obj = { a: 1 };
obj.a = 2; // OK - object properties can change`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is hoisting in JavaScript?",
      answer:
        "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// var hoisting
console.log(x); // undefined (hoisted but not initialized)
var x = 5;

// let/const hoisting with temporal dead zone
console.log(y); // ReferenceError
let y = 10;

// Function hoisting
sayHi(); // "Hello" - function works before declaration
function sayHi() {
  console.log("Hello");
}

// Function expression not hoisted
greet(); // TypeError: greet is not a function
const greet = () => console.log("Hi");`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is the difference between == and ===?",
      answer:
        "== performs type coercion before comparison, while === compares both value and type without coercion. Use === in production code to avoid unexpected results.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// == (loose equality) - type coercion
0 == false;        // true
"0" == 0;          // true
null == undefined; // true
"5" == 5;          // true

// === (strict equality) - no type coercion
0 === false;       // false
"0" === 0;         // false
null === undefined;// false
"5" === 5;         // false

// Best practice: Always use ===
if (value === null) { }
if (value === undefined) { }
if (value === true) { }`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is NaN and how to check for it?",
      answer:
        "NaN (Not-a-Number) is a special value representing an undefined or unrepresentable mathematical result. Use Number.isNaN() or Object.is() for checking, not the global isNaN().",
      codeSnippets: [
        {
          language: "javascript",
          code: `// NaN creation
const result = parseInt("hello"); // NaN
const calc = 0 / 0;              // NaN

// WRONG way to check
isNaN("hello");  // true (coerces to number first)
NaN === NaN;     // false (NaN is not equal to itself)

// CORRECT ways to check
Number.isNaN(result);   // true
Object.is(result, NaN); // true
typeof result === 'number' && isNaN(result);

// Safe arithmetic
const num = 0 / 0;
if (Number.isNaN(num)) {
  console.log("Invalid calculation");
}`,
        },
      ],
    },
  ],
};
