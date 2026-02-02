import type { Topic } from "../../../types";

export const copyMethodsTopic: Topic = {
  id: "js-copy-methods",
  name: "Shallow & Deep Copy",
  questions: [
    {
      id: "q1",
      question: "What is the difference between Shallow Copy and Deep Copy in JavaScript?",
      answer:
        "Shallow Copy creates a new object but only copies the first level of properties. Nested objects/arrays are still references to the original. Deep Copy creates a completely independent clone where all nested objects are also copied.\n\nShallow Copy:\n• Copies only the first level of properties\n• Nested objects share the same reference\n• Changes to nested objects affect both copies\n• Faster and uses less memory\n\nDeep Copy:\n• Recursively copies all nested objects\n• Creates completely independent clone\n• Changes don't affect the original\n• Slower and uses more memory\n\nWhen to use:\n• Shallow Copy: When you have flat objects or don't need to modify nested properties\n• Deep Copy: When you need complete independence from the original object",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Original object with nested data
const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001"
  },
  hobbies: ["reading", "gaming"]
};

// SHALLOW COPY - nested objects are still references
const shallowCopy = { ...original };

shallowCopy.name = "Jane";           // ✅ Only changes copy
shallowCopy.address.city = "Boston"; // ⚠️ Changes BOTH!

console.log(original.name);          // "John" (unchanged)
console.log(original.address.city);  // "Boston" (changed!)

// DEEP COPY - completely independent
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Chicago";   // ✅ Only changes copy
console.log(original.address.city);  // "Boston" (unchanged)`,
        },
      ],
    },
    {
      id: "q2",
      question: "What are all the ways to create a Shallow Copy in JavaScript?",
      answer:
        "There are several methods to create shallow copies in JavaScript:\n\n1. Spread Operator (...) - Most common and readable\n2. Object.assign() - Classic method, good browser support\n3. Array.slice() - For arrays only\n4. Array.from() - For arrays and array-like objects\n5. Array.prototype.concat() - For arrays\n\nAll these methods only copy the first level of properties. Nested objects and arrays remain as references to the original.",
      codeSnippets: [
        {
          language: "javascript",
          code: `const original = {
  name: "John",
  scores: [90, 85, 88],
  details: { role: "admin" }
};

// 1. Spread Operator (ES6+) - Recommended
const copy1 = { ...original };

// 2. Object.assign()
const copy2 = Object.assign({}, original);

// 3. For arrays - spread
const arrOriginal = [1, 2, { a: 1 }];
const arrCopy1 = [...arrOriginal];

// 4. Array.slice()
const arrCopy2 = arrOriginal.slice();

// 5. Array.from()
const arrCopy3 = Array.from(arrOriginal);

// 6. Array.concat()
const arrCopy4 = [].concat(arrOriginal);

// All shallow copies share nested references!
copy1.details.role = "user";
console.log(original.details.role); // "user" - also changed!

arrCopy1[2].a = 999;
console.log(arrOriginal[2].a); // 999 - also changed!`,
        },
      ],
    },
    {
      id: "q3",
      question: "What are all the ways to create a Deep Copy in JavaScript?",
      answer:
        "Methods to create deep copies:\n\n1. JSON.parse(JSON.stringify()) - Simple but has limitations\n2. structuredClone() - Modern built-in method (ES2022)\n3. Lodash _.cloneDeep() - Library method, handles edge cases\n4. Custom recursive function - Full control\n\nLimitations of JSON method:\n• Loses functions, undefined, Symbol\n• Doesn't handle circular references\n• Converts Date to string\n• Loses prototype chain\n\nstructuredClone() handles most cases but not functions or DOM nodes.",
      codeSnippets: [
        {
          language: "javascript",
          code: `const original = {
  name: "John",
  date: new Date(),
  nested: { deep: { value: 42 } },
  arr: [1, 2, [3, 4]]
};

// 1. JSON.parse/stringify - Simple cases only
const copy1 = JSON.parse(JSON.stringify(original));
// ⚠️ Date becomes string, loses functions/undefined

// 2. structuredClone() - Modern & Recommended (ES2022)
const copy2 = structuredClone(original);
// ✅ Handles Date, Map, Set, ArrayBuffer, circular refs
// ❌ Can't clone functions, DOM nodes, or Error objects

// 3. Lodash (if using library)
// import _ from 'lodash';
// const copy3 = _.cloneDeep(original);

// Verify deep independence
copy2.nested.deep.value = 100;
console.log(original.nested.deep.value); // 42 (unchanged!)

copy2.arr[2][0] = 999;
console.log(original.arr[2][0]); // 3 (unchanged!)`,
        },
        {
          language: "javascript",
          code: `// 4. Custom Deep Clone Function
function deepClone(obj, hash = new WeakMap()) {
  // Handle primitives and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle circular references
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy);
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item, hash);
    });
    return arrCopy;
  }
  
  // Handle Map
  if (obj instanceof Map) {
    const mapCopy = new Map();
    hash.set(obj, mapCopy);
    obj.forEach((value, key) => {
      mapCopy.set(deepClone(key, hash), deepClone(value, hash));
    });
    return mapCopy;
  }
  
  // Handle Set
  if (obj instanceof Set) {
    const setCopy = new Set();
    hash.set(obj, setCopy);
    obj.forEach(value => {
      setCopy.add(deepClone(value, hash));
    });
    return setCopy;
  }
  
  // Handle Object
  const objCopy = Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, objCopy);
  
  for (const key of Reflect.ownKeys(obj)) {
    objCopy[key] = deepClone(obj[key], hash);
  }
  
  return objCopy;
}

// Usage
const complex = {
  date: new Date(),
  map: new Map([['key', 'value']]),
  set: new Set([1, 2, 3]),
  nested: { a: { b: { c: 1 } } }
};

const cloned = deepClone(complex);
cloned.nested.a.b.c = 999;
console.log(complex.nested.a.b.c); // 1 (unchanged!)`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you handle circular references when deep copying?",
      answer:
        "Circular references occur when an object references itself directly or indirectly. JSON.stringify() fails with circular refs, throwing 'Converting circular structure to JSON' error.\n\nSolutions:\n1. structuredClone() - Handles circular refs automatically\n2. WeakMap tracking - Track visited objects in custom function\n3. Lodash _.cloneDeep() - Handles circular refs\n\nThe WeakMap approach stores each object as it's cloned, and if encountered again, returns the already-cloned version instead of recursing infinitely.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Object with circular reference
const obj = {
  name: "Circular",
  data: { value: 42 }
};
obj.self = obj;           // Points to itself
obj.data.parent = obj;    // Nested circular ref

// ❌ JSON.stringify fails!
try {
  JSON.parse(JSON.stringify(obj));
} catch (e) {
  console.log(e.message); // "Converting circular structure to JSON"
}

// ✅ structuredClone handles it
const copy1 = structuredClone(obj);
console.log(copy1.self === copy1); // true (circular ref preserved)
console.log(copy1.self === obj);   // false (independent copy)

// ✅ Custom function with WeakMap
function deepCloneWithCircular(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  
  // Return cached copy if already visited (handles circular)
  if (visited.has(obj)) {
    return visited.get(obj);
  }
  
  const copy = Array.isArray(obj) ? [] : {};
  visited.set(obj, copy); // Cache before recursing
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCloneWithCircular(obj[key], visited);
    }
  }
  
  return copy;
}

const copy2 = deepCloneWithCircular(obj);
console.log(copy2.self === copy2);    // true
console.log(copy2.data.parent === copy2); // true`,
        },
      ],
    },
    {
      id: "q5",
      question: "What are the limitations of JSON.parse(JSON.stringify()) for deep copying?",
      answer:
        "JSON.parse(JSON.stringify()) has several limitations:\n\n1. Functions are lost (become undefined)\n2. undefined values are lost\n3. Symbol keys/values are lost\n4. Date objects become ISO strings\n5. Map, Set become empty objects {}\n6. RegExp becomes empty object {}\n7. Infinity, NaN become null\n8. Circular references throw error\n9. Prototype chain is lost\n10. Non-enumerable properties are lost\n11. BigInt throws error\n\nUse structuredClone() or custom functions for complex objects.",
      codeSnippets: [
        {
          language: "javascript",
          code: `const original = {
  // ✅ Works correctly
  string: "hello",
  number: 42,
  boolean: true,
  null: null,
  array: [1, 2, 3],
  object: { nested: true },
  
  // ❌ Problems with these:
  func: function() { return "hi"; },  // Lost!
  arrow: () => "hi",                   // Lost!
  undefined: undefined,                // Lost!
  symbol: Symbol("id"),                // Lost!
  date: new Date("2024-01-01"),       // Becomes string
  map: new Map([["a", 1]]),           // Becomes {}
  set: new Set([1, 2, 3]),            // Becomes {}
  regex: /pattern/gi,                  // Becomes {}
  infinity: Infinity,                  // Becomes null
  nan: NaN,                            // Becomes null
  // bigint: 123n,                     // Throws error!
};

const copy = JSON.parse(JSON.stringify(original));

console.log(copy.func);      // undefined
console.log(copy.undefined); // key doesn't exist
console.log(copy.symbol);    // undefined
console.log(copy.date);      // "2024-01-01T00:00:00.000Z" (string!)
console.log(copy.map);       // {}
console.log(copy.set);       // {}
console.log(copy.regex);     // {}
console.log(copy.infinity);  // null
console.log(copy.nan);       // null

// Comparing with structuredClone
const better = structuredClone({
  date: new Date("2024-01-01"),
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3]),
});

console.log(better.date instanceof Date);  // true ✅
console.log(better.map instanceof Map);    // true ✅
console.log(better.set instanceof Set);    // true ✅`,
        },
      ],
    },
    {
      id: "q6",
      question: "How does Object.assign() differ from spread operator for copying?",
      answer:
        "Both Object.assign() and spread operator (...) create shallow copies, but they have subtle differences:\n\nSimilarities:\n• Both create shallow copies\n• Both copy enumerable own properties\n• Both can merge multiple sources\n\nDifferences:\n• Object.assign() modifies target object, spread creates new one\n• Spread is more readable and concise\n• Object.assign() can target existing objects\n• Spread can't be used with non-object targets\n• Object.assign() triggers setters, spread doesn't\n• Performance is nearly identical in modern engines",
      codeSnippets: [
        {
          language: "javascript",
          code: `const source1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };

// Spread - Always creates NEW object
const spread = { ...source1, ...source2 };
console.log(spread); // { a: 1, b: 3, c: 4 }

// Object.assign - Modifies FIRST argument
const target = { x: 0 };
const assigned = Object.assign(target, source1, source2);
console.log(assigned); // { x: 0, a: 1, b: 3, c: 4 }
console.log(target === assigned); // true (same reference!)

// Key difference: Setter behavior
const objWithSetter = {
  _value: 0,
  set value(v) {
    console.log('Setter called with:', v);
    this._value = v;
  }
};

// Object.assign triggers setters
Object.assign(objWithSetter, { value: 42 });
// Logs: "Setter called with: 42"

// Spread does NOT trigger setters (creates new object)
const spreadCopy = { ...objWithSetter, value: 100 };
// No setter log - it's a new property on new object

// Merging patterns
const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark' };

// Both work for merging
const merged1 = { ...defaults, ...userPrefs };
const merged2 = Object.assign({}, defaults, userPrefs);
// Both: { theme: 'dark', lang: 'en' }`,
        },
      ],
    },
    {
      id: "q7",
      question: "How do you deep copy objects with special types like Date, Map, Set, and RegExp?",
      answer:
        "Special types require custom handling because JSON methods lose their type information:\n\n• Date: Use new Date(original.getTime())\n• Map: Create new Map and clone entries\n• Set: Create new Set and clone values\n• RegExp: Use new RegExp(source, flags)\n• ArrayBuffer: Use slice()\n• TypedArray: Use slice() or new constructor\n\nstructuredClone() handles most of these automatically except RegExp and functions.",
      codeSnippets: [
        {
          language: "javascript",
          code: `// Deep clone function handling special types
function deepCloneSpecial(value, visited = new WeakMap()) {
  // Primitives
  if (value === null || typeof value !== 'object') {
    return value;
  }
  
  // Circular reference check
  if (visited.has(value)) {
    return visited.get(value);
  }
  
  let clone;
  
  // Date
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  
  // RegExp
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }
  
  // Map
  if (value instanceof Map) {
    clone = new Map();
    visited.set(value, clone);
    value.forEach((v, k) => {
      clone.set(
        deepCloneSpecial(k, visited),
        deepCloneSpecial(v, visited)
      );
    });
    return clone;
  }
  
  // Set
  if (value instanceof Set) {
    clone = new Set();
    visited.set(value, clone);
    value.forEach(v => {
      clone.add(deepCloneSpecial(v, visited));
    });
    return clone;
  }
  
  // ArrayBuffer
  if (value instanceof ArrayBuffer) {
    return value.slice(0);
  }
  
  // TypedArray (Int8Array, Uint8Array, etc.)
  if (ArrayBuffer.isView(value)) {
    return new value.constructor(value);
  }
  
  // Array
  if (Array.isArray(value)) {
    clone = [];
    visited.set(value, clone);
    value.forEach((item, index) => {
      clone[index] = deepCloneSpecial(item, visited);
    });
    return clone;
  }
  
  // Object
  clone = Object.create(Object.getPrototypeOf(value));
  visited.set(value, clone);
  
  for (const key of Reflect.ownKeys(value)) {
    clone[key] = deepCloneSpecial(value[key], visited);
  }
  
  return clone;
}

// Test
const original = {
  date: new Date('2024-06-15'),
  regex: /hello/gi,
  map: new Map([['name', 'John'], ['age', 30]]),
  set: new Set([1, 2, 3]),
  buffer: new ArrayBuffer(8),
  nested: { arr: [1, { x: 2 }] }
};

const cloned = deepCloneSpecial(original);

// Verify independence
cloned.date.setFullYear(2025);
cloned.map.set('name', 'Jane');
cloned.nested.arr[1].x = 999;

console.log(original.date.getFullYear()); // 2024 ✅
console.log(original.map.get('name'));    // "John" ✅
console.log(original.nested.arr[1].x);    // 2 ✅`,
        },
      ],
    },
  ],
};
