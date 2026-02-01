import type { Topic } from "../../../types";

export const thisBindingTopic: Topic = {
  id: "js-this",
  name: "'this' Binding & Objects",
  questions: [
    {
      id: "q25",
      question: "What is 'this' in JavaScript and how is it determined?",
      answer:
        "'this' is a keyword that refers to the object context. Its value is determined by HOW a function is called: as method (object), function, constructor, or with call/apply/bind.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// 1. Method call - 'this' is the object
const obj = {
  name: 'Alice',
  greet() {
    console.log('Hello, ' + this.name);
  }
};
obj.greet(); // 'Hello, Alice'

// 2. Regular function call - 'this' is undefined (strict) or global
function sayName() {
  console.log(this.name);
}
sayName(); // undefined or window.name

// 3. Constructor call - 'this' is the new object
function Person(name) {
  this.name = name;
}
const person = new Person('Bob');
console.log(person.name); // 'Bob'

// 4. call/apply/bind - explicitly set 'this'
function introduce() {
  console.log('I am ' + this.name);
}
const user = { name: 'Charlie' };
introduce.call(user); // 'I am Charlie'
introduce.apply(user); // 'I am Charlie'

const bound = introduce.bind(user);
bound(); // 'I am Charlie'

// 5. Arrow function - 'this' from enclosing scope
const team = {
  name: 'Dev Team',
  members: ['Alice', 'Bob'],
  list() {
    this.members.forEach(member => {
      console.log(this.name + ': ' + member); // 'this' is team
    });
  }
};
team.list();`,
        },
      ],
    },
    {
      id: "q26",
      question: "What is the difference between call, apply, and bind?",
      answer:
        "call and apply invoke the function immediately and set 'this'. call takes arguments separately, apply takes an array. bind returns a new function with 'this' set but doesn't invoke it.",
      codeSnippets: [
        {
          language: "javascript",
          code: `function introduce(greeting, punctuation) {
  return greeting + ', ' + this.name + punctuation;
}

const person = { name: 'Alice' };

// call - invoke immediately, args separated
introduce.call(person, 'Hello', '!');
// 'Hello, Alice!'

// apply - invoke immediately, args in array
introduce.apply(person, ['Hi', '?']);
// 'Hi, Alice?'

// bind - return new function, doesn't invoke
const boundIntroduce = introduce.bind(person, 'Hey');
boundIntroduce('!!!');
// 'Hey, Alice!!!'

// Real-world example: Borrowing methods
const array = [1, 2, 3];
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// Borrow Array.prototype.join
Array.prototype.join.call(arrayLike, '-');
// 'a-b-c'

// Borrow Array.prototype.forEach
Array.prototype.forEach.call(arrayLike, item => console.log(item));`,
        },
      ],
    },
  ],
};
