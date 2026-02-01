import type { Topic } from "../../../types";

export const asyncTopic: Topic = {
  id: "js-async",
  name: "Asynchronous Programming",
  questions: [
    {
      id: "q6",
      question: "What is a Promise in JavaScript?",
      answer:
        "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, or rejected.",
      codeSnippets: [
        {
          language: "javascript",
          code: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done"));`,
        },
      ],
    },
    {
      id: "q7",
      question: "What is async/await?",
      answer:
        "Async/await is syntactic sugar over promises that allows you to write asynchronous code that looks synchronous. async functions always return a Promise.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// async/await example
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) throw new Error('Not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
  }
}

// Using async function
const user = await fetchUserData(1);
console.log(user);

// Parallel requests
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json())
]);`,
        },
      ],
    },
    {
      id: "q8",
      question: "What is the difference between Promise.all, Promise.race, and Promise.allSettled?",
      answer:
        "Promise.all waits for all promises to resolve or any to reject. Promise.race returns the first settled promise. Promise.allSettled waits for all to settle regardless of outcome.",
      codeSnippets: [
        {
          language: "javascript",
          code: `const p1 = Promise.resolve(1);
const p2 = new Promise(r => setTimeout(() => r(2), 100));
const p3 = Promise.reject("error");

// Promise.all - rejects if any promise rejects
Promise.all([p1, p2])
  .then(results => console.log(results)) // [1, 2]
  .catch(err => console.log("Error:", err));

// Promise.race - returns first settled
Promise.race([p1, p2])
  .then(result => console.log(result)); // 1

// Promise.allSettled - waits for all
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'rejected', reason: 'error' }
  // ]`,
        },
      ],
    },
    {
      id: "q9",
      question: "What is the event loop in JavaScript?",
      answer:
        "The event loop is JavaScript's mechanism for handling asynchronous operations. It monitors the call stack and callback queue, executing callbacks when the stack is empty.",
      codeSnippets: [
        {
          language: "javascript",
          code: `console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve()
  .then(() => console.log('Promise'));

console.log('End');

// Output:
// Start
// End
// Promise (microtask queue runs before macrotask queue)
// Timeout

// Macrotasks: setTimeout, setInterval, setImmediate
// Microtasks: Promise, MutationObserver, queueMicrotask`,
        },
      ],
    },
    {
      id: "q10",
      question: "What are callbacks and what is callback hell?",
      answer:
        "Callbacks are functions passed as arguments to other functions. Callback hell (pyramid of doom) occurs with deeply nested callbacks, making code hard to read and maintain.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Callback Hell - hard to read and maintain
getData(id, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    getUser(data.userId, function(err, user) {
      if (err) {
        console.error(err);
      } else {
        getPosts(user.id, function(err, posts) {
          if (err) {
            console.error(err);
          } else {
            console.log(posts);
          }
        });
      }
    });
  }
});

// Better approach with Promises
getData(id)
  .then(data => getUser(data.userId))
  .then(user => getPosts(user.id))
  .then(posts => console.log(posts))
  .catch(err => console.error(err));

// Best approach with async/await
async function displayPosts(id) {
  try {
    const data = await getData(id);
    const user = await getUser(data.userId);
    const posts = await getPosts(user.id);
    console.log(posts);
  } catch (err) {
    console.error(err);
  }
}`,
        },
      ],
    },
  ],
};
