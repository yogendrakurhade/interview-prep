import type { Topic } from "../../../types";

export const prototypesTopic: Topic = {
  id: "js-prototypes",
  name: "Prototypes & Inheritance",
  questions: [
    {
      id: "q27",
      question: "What are prototypes in JavaScript?",
      answer:
        "Prototypes are objects that other objects can inherit properties and methods from. Every object has a prototype ([[Prototype]]). Objects delegate to their prototype when a property is not found.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Prototype chain
const person = {
  greet() {
    console.log('Hello');
  }
};

const alice = Object.create(person);
alice.name = 'Alice';

alice.greet(); // 'Hello' - inherited from prototype

// Constructor function and prototype
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' speaks');
};

const dog = new Animal('Dog');
dog.speak(); // 'Dog speaks'

// Prototype chain lookup
console.log(dog.hasOwnProperty('name')); // true - own property
console.log(dog.hasOwnProperty('speak')); // false - on prototype
console.log('speak' in dog); // true - found in chain

// Check prototype
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
console.log(dog instanceof Animal); // true

// Modify prototype
Animal.prototype.move = function() {
  console.log(this.name + ' moves');
};
dog.move(); // 'Dog moves' - new method available`,
        },
      ],
    },
    {
      id: "q28",
      question: "What is the difference between inheritance with prototypes and classes?",
      answer:
        "Prototypal inheritance uses prototype objects and Object.create. Class inheritance uses the class syntax (ES6), which is syntactic sugar over prototypal inheritance.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Prototypal Inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' speaks');
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log(this.name + ' barks');
};

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // 'Rex speaks'
dog.bark();  // 'Rex barks'

// Class Inheritance (ES6 - much cleaner!)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' speaks');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + ' barks');
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // 'Rex speaks'
dog.bark();  // 'Rex barks'

// Both are equivalent - classes are syntactic sugar over prototypes`,
        },
      ],
    },
  ],
};
