# Topic 2: JavaScript Fundamentals
## Exploring a Flexible, Interpreted Language for Web and Data Applications

### Introduction: Why JavaScript?

JavaScript is unique among programming languages. It's the only language that runs natively inside web browsers, making it essential for anyone building web applications. But it's also evolved into a full-featured language used for servers (Node.js), desktop applications (Electron), and increasingly for everything else.

For someone transitioning into programming, JavaScript is an excellent first language because:

1. **Immediate feedback** — You can write code and see results in seconds
2. **Flexible** — You can learn gradually; JavaScript doesn't force you to understand everything at once
3. **Everywhere** — Learning JavaScript opens doors to web development, which is huge
4. **Forgiving** — JavaScript tries to make your code work rather than throwing errors immediately (this has downsides, but it's beginner-friendly)

This section teaches you the fundamentals: variables, types, operators, control flow, functions, and data structures. These concepts apply to every language you'll learn.

### A Brief History: From Browser Script to Full-Stack Language

In 1995, Brendan Eich created JavaScript in 10 days. It was intended as a simple scripting language to make web pages interactive. For years, it was considered a "toy" language, used only for browser tricks like form validation.

Then two things happened:

1. **AJAX** (2005) — A technique for making web pages feel responsive by communicating with servers without reloading
2. **Node.js** (2009) — A runtime letting you run JavaScript outside browsers

Suddenly, JavaScript could run on both the frontend (in browsers) and backend (on servers). Developers realized JavaScript wasn't limited to toys; it was a full programming language. Modern JavaScript (ES6 and later) added features like classes, arrow functions, and promises, bringing it in line with other mature languages.

Today, JavaScript is used for:
- **Web frontends** — Interactive user interfaces
- **Web backends** — Servers and APIs (Express.js, Fastify)
- **Full-stack applications** — The same language for frontend and backend
- **Mobile applications** — React Native, Ionic
- **Desktop applications** — Electron (VS Code, Discord, Slack)
- **Scripting and automation** — Build tools, testing frameworks
- **Real-time applications** — WebSockets, chat apps, multiplayer games

### Where JavaScript Runs: Browsers, Node.js, and Beyond

#### In Web Browsers

When you load a web page, the browser includes a JavaScript engine that runs any JavaScript in the page. Every modern browser (Chrome, Firefox, Safari, Edge) has one.

**Code in a web page:**
```html
<button id="myButton">Click me</button>
<script>
    document.getElementById("myButton").addEventListener("click", function() {
        alert("You clicked the button!");
    });
</script>
```

When you click the button, JavaScript runs and shows an alert. You're interacting directly with the page's DOM (Document Object Model).

#### In Node.js

Node.js is a runtime that lets you run JavaScript outside the browser, like Python or Java.

**File: hello.js**
```javascript
console.log("Hello from Node.js!");
```

**Running it:**
```
$ node hello.js
Hello from Node.js!
```

Node.js gives JavaScript access to the file system, network, and operating system. It's used for servers, command-line tools, and automation.

#### Electron and Other Platforms

**Electron** packages JavaScript and a browser engine into a desktop application. VS Code, Discord, and Slack are built with Electron.

**React Native** packages JavaScript with native mobile components, letting you build iOS and Android apps in JavaScript.

The pattern: JavaScript + runtime = application. Different runtimes open different possibilities.

### Setting Up: Running JavaScript in the Browser Console and VS Code

#### In the Browser Console

Every browser has a developer console where you can type JavaScript and see results immediately.

**Open the console:**
- **Chrome/Edge:** Press F12, click "Console"
- **Firefox:** Press F12, click "Console"
- **Safari:** Enable developer menu in Preferences, then press Cmd+Option+U

**Try this:**
```javascript
2 + 2
```

Press Enter. You'll see `4` printed. The console evaluates what you type and shows the result.

```javascript
let message = "Hello, world!";
console.log(message);
```

Press Enter. You'll see `Hello, world!` printed.

The console is perfect for experimenting, testing code snippets, and debugging.

#### In VS Code

VS Code is a professional code editor that works with JavaScript (and every other language).

**Install VS Code:** Download from code.visualstudio.com

**Create a project folder:**
```
mkdir my-js-project
cd my-js-project
```

**Create a file: hello.js**
```javascript
console.log("Hello from VS Code!");
```

**Run it with Node.js:**
```
node hello.js
```

You'll see `Hello from VS Code!` in the terminal.

This workflow—write code, run it, see results—is fundamental to programming. You'll do this thousands of times.

### Variables: var, let, const—and Why const/let Are Preferred

A **variable** stores a value so you can use it later.

```javascript
let age = 30;
console.log(age);      // 30
age = 31;
console.log(age);      // 31
```

JavaScript has three keywords for creating variables: `var`, `let`, and `const`. They differ in scope and mutability.

#### `var` (Old Style)

`var` is the original way to create variables, but it has quirks. It's function-scoped (we'll explain scope later), not block-scoped.

```javascript
var x = 5;
if (true) {
    var x = 10;
}
console.log(x);  // 10 (the outer x was changed!)
```

You almost never see `var` in modern JavaScript. Avoid it.

#### `let` (Modern Standard)

`let` creates a block-scoped variable. You can change its value.

```javascript
let x = 5;
if (true) {
    let x = 10;  // This is a different x, in a smaller scope
}
console.log(x);  // 5 (the outer x wasn't changed)
```

`let` is the standard way to create variables that will change.

#### `const` (Constant)

`const` creates a variable you can't reassign. Once you give it a value, it stays that way.

```javascript
const PI = 3.14159;
PI = 3.14;  // TypeError: Assignment to constant variable
```

This prevents accidental changes. Professional code uses `const` by default because it shows your intention: "This value doesn't change."

**But be careful:** `const` prevents reassignment, not mutation. If the variable holds an object or array, you can change its contents:

```javascript
const person = { name: "Alice" };
person.name = "Bob";  // This works; you're changing the object's content, not reassigning the variable
person = { name: "Charlie" };  // TypeError: this is reassignment
```

**Best practices:**
- Use `const` by default (prevents accidental changes)
- Use `let` if you know the variable will change
- Never use `var` in modern code

### Data Types: string, number, boolean, null, undefined, object, array

JavaScript has several data types. The language is dynamically typed, so you don't declare the type—JavaScript infers it.

#### String

Text data, enclosed in quotes (single, double, or backticks).

```javascript
let name = "Alice";
let greeting = 'Hello';
let message = `Hello, ${name}!`;  // Template literal; ${...} inserts values
console.log(message);  // "Hello, Alice!"
```

Template literals (backticks) are powerful because they:
- Allow string interpolation (inserting variables with `${}`)
- Support multi-line strings

```javascript
let multiLine = `
    Line 1
    Line 2
    Line 3
`;
console.log(multiLine);
```

#### Number

Integers and decimals.

```javascript
let age = 30;
let price = 19.99;
let negative = -42;
let big = 1000000;
let scientific = 1.23e5;  // Scientific notation: 123000
```

JavaScript has only one number type. Unlike Java (where `int` and `float` are different), JavaScript treats all numbers the same way. This simplicity helps beginners but can cause precision issues with very large numbers.

#### Boolean

True or false. Often the result of comparisons.

```javascript
let isStudent = true;
let isGraduate = false;
let result = 5 > 3;  // true
```

#### null and undefined

Both represent "no value," but they mean different things.

**`undefined`** means a variable exists but hasn't been assigned a value.

```javascript
let x;
console.log(x);  // undefined
```

**`null`** means "intentionally empty." It's a value you assign when you want to represent emptiness.

```javascript
let data = null;  // Intentionally empty
```

In practice:
- You rarely assign `undefined` yourself; the language does it
- You assign `null` when you want to represent "no value"
- Code often checks `if (x === null || x === undefined)` or `if (!x)` to handle both

#### Object

An object is a collection of key-value pairs. It's fundamental to JavaScript.

```javascript
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

console.log(person.name);  // "Alice"
console.log(person["age"]);  // 30 (bracket notation)
```

Objects are incredibly flexible. They represent real-world things:

```javascript
let book = {
    title: "Learning to Code",
    author: "Jane Smith",
    pages: 450,
    isAvailable: true
};

console.log(book.title);  // "Learning to Code"
```

You can add and change properties:

```javascript
book.year = 2024;
book.pages = 460;
delete book.isAvailable;
```

#### Array

An array is an ordered list of values.

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);  // "apple"
console.log(fruits.length);  // 3
```

Arrays are zero-indexed: the first element is at index 0.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);  // Add to the end; numbers is now [1, 2, 3, 4, 5, 6]
let last = numbers.pop();  // Remove and return the last element; last is 6
```

Arrays can hold any type, and can be mixed:

```javascript
let mixed = [1, "hello", true, { name: "Alice" }, [1, 2, 3]];
```

#### typeof Operator

You can check a value's type with `typeof`:

```javascript
console.log(typeof "hello");       // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof { a: 1 });      // "object"
console.log(typeof [1, 2]);        // "object" (arrays are objects!)
console.log(typeof null);          // "object" (quirk of JavaScript!)
```

**Note:** `typeof null` returns `"object"` due to a quirk in JavaScript. `null` is not an object, but this is how the language works.

### Operators: Arithmetic, Comparison, Logical, Assignment

Operators combine values to produce results.

#### Arithmetic Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b);    // 13 (addition)
console.log(a - b);    // 7 (subtraction)
console.log(a * b);    // 30 (multiplication)
console.log(a / b);    // 3.333... (division)
console.log(a % b);    // 1 (modulo, remainder)
console.log(a ** b);   // 1000 (exponentiation; a to the power of b)
```

#### Comparison Operators

These produce boolean results (true or false).

```javascript
let x = 5;
let y = 10;

console.log(x < y);    // true
console.log(x > y);    // false
console.log(x <= y);   // true
console.log(x >= y);   // false
console.log(x == y);   // false
console.log(x != y);   // true
console.log(x === y);  // false (strict equality; checks type too)
console.log(x !== y);  // true (strict inequality)
```

**Important:** `==` vs `===`

- `==` checks if values are equal (with type coercion)
- `===` checks if values are equal *and* of the same type

```javascript
5 == "5"    // true (JavaScript converts "5" to 5)
5 === "5"   // false (different types)
```

**Always use `===` and `!==`.** They're safer and more predictable.

#### Logical Operators

```javascript
let a = true;
let b = false;

console.log(a && b);   // false (AND: both must be true)
console.log(a || b);   // true (OR: at least one is true)
console.log(!a);       // false (NOT: inverts the boolean)
```

Real-world example:

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can rent a car");
}
```

#### Assignment Operators

```javascript
let x = 5;

x += 3;  // Same as x = x + 3; now x is 8
x -= 2;  // Same as x = x - 2; now x is 6
x *= 2;  // Same as x = x * 2; now x is 12
x /= 3;  // Same as x = x / 3; now x is 4
x++;     // Same as x = x + 1; now x is 5
x--;     // Same as x = x - 1; now x is 4
```

These shortcuts are convenient and common.

### String Operations: Concatenation, Template Literals, Common Methods

Strings are everywhere in programming. You need to manipulate them constantly.

#### Concatenation

Joining strings together with `+`:

```javascript
let first = "John";
let last = "Doe";
let full = first + " " + last;
console.log(full);  // "John Doe"
```

#### Template Literals

Backticks and `${}` are cleaner:

```javascript
let first = "John";
let last = "Doe";
let age = 30;
let message = `${first} ${last} is ${age} years old`;
console.log(message);  // "John Doe is 30 years old"
```

#### Common String Methods

Strings have built-in methods (functions) you can call:

```javascript
let text = "JavaScript";

console.log(text.length);              // 10
console.log(text.charAt(0));           // "J"
console.log(text.indexOf("Script"));   // 4
console.log(text.toUpperCase());       // "JAVASCRIPT"
console.log(text.toLowerCase());       // "javascript"
console.log(text.slice(0, 4));         // "Java" (characters 0-3)
console.log(text.replace("Java", "Type"));  // "TypeScript"
console.log(text.split(""));           // ["J","a","v","a","S","c","r","i","p","t"]
```

These methods don't change the original string (strings are immutable):

```javascript
let word = "hello";
word.toUpperCase();
console.log(word);  // Still "hello"; methods return new strings
```

If you want to change the variable, assign the result:

```javascript
let word = "hello";
word = word.toUpperCase();
console.log(word);  // "HELLO"
```

### Conditionals: if/else, Ternary Operator, Switch

Conditionals let code make decisions.

#### if/else

```javascript
let age = 25;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

With multiple conditions:

```javascript
let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}
```

#### Ternary Operator

A shorthand for simple if/else:

```javascript
let age = 25;
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"
```

Format: `condition ? valueIfTrue : valueIfFalse`

#### Switch Statement

For multiple conditions on the same variable:

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}
// Prints "Wednesday"
```

**Important:** Use `break` to exit each case. Without it, execution "falls through" to the next case.

```javascript
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        // forgot break!
    case 2:
        console.log("Tuesday");
        break;
}
// Prints both "Monday" and "Tuesday"!
```

### Loops: for, while, for...of, forEach

Loops repeat code multiple times.

#### for Loop

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Prints: 0, 1, 2, 3, 4
```

Breakdown:
- `let i = 0` — Initialize counter
- `i < 5` — Condition to continue looping
- `i++` — Increment counter after each iteration

#### while Loop

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
// Prints: 0, 1, 2, 3, 4
```

Use when you don't know in advance how many iterations you need.

#### for...of Loop

Iterates over values in an array:

```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
// Prints: apple, banana, cherry
```

Cleaner than traditional for loops for arrays.

#### forEach Method

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num);
});
// Prints: 1, 2, 3, 4, 5
```

Or with arrow functions (shorter syntax):

```javascript
numbers.forEach(num => {
    console.log(num);
});
```

### Functions: Declaration, Expressions, Arrow Functions, Parameters, Return Values

Functions are reusable blocks of code. You've seen them already; now let's explore variations.

#### Function Declaration

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));  // "Hello, Alice!"
```

#### Function Expression

You can also assign a function to a variable:

```javascript
const greet = function(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Bob"));  // "Hello, Bob!"
```

#### Arrow Functions

A modern, concise syntax:

```javascript
const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Charlie"));  // "Hello, Charlie!"
```

Even shorter for simple functions:

```javascript
const greet = name => "Hello, " + name + "!";
console.log(greet("Diana"));  // "Hello, Diana!"
```

When there's one parameter, you can omit parentheses. When the function body is one line, you can omit braces and the return is implicit.

#### Functions with Multiple Parameters

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(3, 5));  // 8
```

#### Functions with Default Parameters

```javascript
const greet = (name = "Guest") => {
    return `Hello, ${name}!`;
};

console.log(greet());        // "Hello, Guest!"
console.log(greet("Alice"));  // "Hello, Alice!"
```

### Arrays: Creating, Accessing, push, pop, map, filter, reduce

You've seen arrays basics. Let's go deeper with common operations.

#### Creating Arrays

```javascript
let empty = [];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];
```

#### Accessing Elements

```javascript
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);       // "apple"
console.log(fruits[1]);       // "banana"
console.log(fruits.length);   // 3
```

#### Adding and Removing

```javascript
let numbers = [1, 2, 3];

numbers.push(4);              // Add to end; numbers is [1, 2, 3, 4]
let last = numbers.pop();     // Remove from end; last is 4
numbers.unshift(0);           // Add to start; numbers is [0, 1, 2, 3]
let first = numbers.shift();  // Remove from start; first is 0
```

#### Map: Transform Each Element

Map applies a function to each element and returns a new array:

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
```

This is incredibly useful. Instead of:

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}
```

You just:

```javascript
let doubled = numbers.map(num => num * 2);
```

#### Filter: Keep Elements That Match a Condition

Filter keeps elements where a condition is true:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6]
```

#### Reduce: Combine Elements Into a Single Value

Reduce applies a function that takes two arguments (accumulator and current element) and returns a new value:

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15
```

Breakdown:
- `acc` starts at 0 (the second argument to reduce)
- For each number, `acc` becomes `acc + num`
- Final result: 0 + 1 + 2 + 3 + 4 + 5 = 15

More complex example:

```javascript
let transactions = [
    { type: "income", amount: 100 },
    { type: "expense", amount: 50 },
    { type: "income", amount: 200 },
    { type: "expense", amount: 30 }
];

let balance = transactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
}, 0);

console.log(balance);  // 220
```

### Objects: Creating, Accessing Properties, Methods, Destructuring

Objects are fundamental to JavaScript. You create them with curly braces and access properties with dot notation or brackets.

#### Creating Objects

```javascript
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
```

#### Accessing Properties

```javascript
console.log(person.name);       // "Alice"
console.log(person["age"]);     // 30
```

Use dot notation usually. Use bracket notation when:
- The property name is in a variable
- The property name has spaces or special characters

```javascript
let key = "city";
console.log(person[key]);  // "New York"
```

#### Adding and Changing Properties

```javascript
person.country = "USA";      // Add new property
person.age = 31;             // Change existing property
delete person.city;          // Remove property
```

#### Methods: Functions in Objects

Objects can contain functions, called methods:

```javascript
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

console.log(person.greet());  // "Hello, I'm Alice"
```

`this` refers to the object itself. Here, `this.name` accesses the name property of the object.

Shorter syntax with ES6:

```javascript
let person = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(person.greet());  // "Hello, I'm Alice"
```

#### Destructuring

Destructuring extracts values from objects or arrays into separate variables:

```javascript
let person = { name: "Alice", age: 30, city: "New York" };

let { name, age } = person;
console.log(name);  // "Alice"
console.log(age);   // 30
```

This creates variables `name` and `age` from the object's properties. Very convenient:

```javascript
// Without destructuring
function displayPerson(person) {
    console.log(person.name);
    console.log(person.age);
}

// With destructuring
function displayPerson({ name, age }) {
    console.log(name);
    console.log(age);
}
```

Array destructuring:

```javascript
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first);   // "red"
console.log(second);  // "green"
```

### Scope: Global, Function, Block

**Scope** determines where a variable is accessible.

#### Global Scope

Variables declared outside all functions are global; they're accessible everywhere:

```javascript
let globalVar = "I'm global";

function test() {
    console.log(globalVar);  // Can access global variables
}

test();  // Prints "I'm global"
```

#### Function Scope

Variables declared inside a function are local to that function:

```javascript
function test() {
    let localVar = "I'm local";
    console.log(localVar);  // Works
}

console.log(localVar);  // Error: localVar is not defined
```

#### Block Scope

Variables declared with `let` or `const` are scoped to the block (inside `{}`):

```javascript
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar);  // Works
}

console.log(blockVar);  // Error: blockVar is not defined
```

This is why `let` is preferred over `var`: `var` is function-scoped, not block-scoped, which can be confusing.

**Best practice:** Keep variables in the smallest scope possible. If you only need a variable inside a block, declare it there. This prevents accidental use elsewhere.

### The DOM: How JavaScript Interacts with Web Pages (Conceptual Intro)

The **DOM** (Document Object Model) is how JavaScript interacts with HTML. It represents the page as a tree of objects that you can read and modify.

When you load a web page:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello</h1>
    <button id="myButton">Click me</button>
    <script>
        let button = document.getElementById("myButton");
        button.addEventListener("click", function() {
            alert("You clicked!");
        });
    </script>
</body>
</html>
```

Here:
- `document` is a global object representing the entire page
- `getElementById()` finds an HTML element with a specific ID
- `addEventListener()` registers a function to run when something happens

JavaScript can:
- Read HTML elements and their properties
- Change HTML content
- Modify CSS styles
- Create new elements
- Respond to user actions

More examples:

```javascript
// Read content
let heading = document.querySelector("h1");
console.log(heading.textContent);  // Prints the heading's text

// Change content
heading.textContent = "New heading";

// Change styles
heading.style.color = "blue";

// Create elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "A new paragraph";
document.body.appendChild(newParagraph);  // Add to the page
```

### Events: Responding to User Actions

Events are things that happen on the page: clicks, key presses, form submissions, page load, etc.

```javascript
let button = document.getElementById("myButton");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

Common events:
- `click` — User clicked an element
- `submit` — User submitted a form
- `change` — Value in an input changed
- `keypress` — User pressed a key
- `load` — Page finished loading
- `mouseover` — Mouse moved over an element

```javascript
let input = document.getElementById("username");

input.addEventListener("change", function() {
    console.log("User entered: " + input.value);
});
```

### Console.log: Your First Debugging Tool

`console.log()` prints values to the browser console. It's invaluable for understanding what your code is doing.

```javascript
let x = 5;
let y = 10;
console.log("x is " + x);
console.log("y is " + y);
console.log("x + y is " + (x + y));
```

In the browser console, you'll see:
```
x is 5
y is 10
x + y is 15
```

Other console methods:

```javascript
console.error("Something went wrong!");  // Red in console, for errors
console.warn("Be careful!");              // Yellow in console, for warnings
console.table(arrayOrObject);             // Display data in a table
```

### Common Beginner Mistakes and How to Fix Them

#### 1. Using `=` Instead of `===`

```javascript
// Wrong
if (x = 5) {  // This assigns 5 to x instead of comparing!
    // ...
}

// Right
if (x === 5) {  // This compares x to 5
    // ...
}
```

#### 2. Forgetting Parentheses When Calling Functions

```javascript
let text = "hello";
let upper = text.toUpperCase;  // Wrong: upper is the function itself
let upper = text.toUpperCase();  // Right: upper is the result of calling the function
```

#### 3. Confusing Array Index with Value

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);  // "apple"
console.log(fruits);     // The entire array: ["apple", "banana", "cherry"]
```

#### 4. String vs. Number

```javascript
let x = "5";
let y = 5;
x == y;   // true (weak equality, JavaScript converts types)
x === y;  // false (strict equality, types must match)
typeof x;  // "string"
typeof y;  // "number"
```

#### 5. Trying to Access Properties of null or undefined

```javascript
let person = null;
console.log(person.name);  // TypeError: Cannot read property 'name' of null
```

Always check before accessing properties:

```javascript
if (person && person.name) {
    console.log(person.name);
}
```

### Practical Example: A Simple To-Do Application

Let's put it all together. Here's a small to-do app:

```javascript
let todos = [];

function addTodo(text) {
    todos.push({ id: Date.now(), text: text, completed: false });
}

function completeTodo(id) {
    let todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = true;
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
}

function listTodos() {
    todos.forEach(todo => {
        let status = todo.completed ? "✓" : "○";
        console.log(`${status} ${todo.text}`);
    });
}

// Usage
addTodo("Learn JavaScript");
addTodo("Build a project");
addTodo("Get hired");

listTodos();
// ○ Learn JavaScript
// ○ Build a project
// ○ Get hired

completeTodo(todos[0].id);  // Complete the first todo

listTodos();
// ✓ Learn JavaScript
// ○ Build a project
// ○ Get hired
```

This small example uses:
- Arrays and objects to store data
- Functions to organize code
- Methods like `find()` and `filter()`
- Control flow (if statements)
- Loop iteration (forEach)

It's the foundation of real applications—they're just more complex versions of this pattern.

---

## Review and Discussion Questions

1. **Data Types and Type Coercion:** Write JavaScript code that demonstrates:
   - A case where weak typing helps (automatic conversion works well)
   - A case where weak typing causes a bug (automatic conversion does something unexpected)
   - How you would fix the bug

2. **Functions and Scope:** Write a program with:
   - A global variable
   - A function that accesses the global variable
   - A local variable inside the function
   - A block-scoped variable inside an if statement inside the function
   Explain what happens if you try to access each variable from different places.

3. **Array Methods:** You have an array of numbers: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. Write code using `map` and `filter` to:
   - Get all even numbers
   - Multiply all numbers by 2
   - Get all numbers greater than 5, then multiply by 2

4. **Object Design:** Design a JavaScript object to represent a book. It should have:
   - Properties for title, author, year published, pages
   - A method that returns a formatted description like "The Great Gatsby by F. Scott Fitzgerald (1925)"
   - Another method that returns true if the book is "old" (published before 1950)

5. **String and Array Manipulation:** Write a function that:
   - Takes a sentence as input
   - Returns an array of words
   - Filters out words shorter than 4 characters
   - Converts each remaining word to uppercase
   - Example: "The quick brown fox" → ["QUICK", "BROWN"]

6. **Business Logic:** You're building an e-commerce app. Write JavaScript code that:
   - Stores a list of products (objects with name, price, quantity)
   - Calculates the total inventory value (sum of price × quantity for all products)
   - Finds the most expensive product
   - Filters products below a certain price

7. **Debugging Practice:** The following code has bugs. Identify and fix them:
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let sum = numbers.reduce((a, b) => a + b);  // Bug 1: missing initial value
   let doubled = numbers.map(n => n * 2);
   console.log(sum, doubled);

   let person = { name: "Alice", age: 30 };
   person.name = "Bob";
   person = "Bob";  // Bug 2: what's wrong here?
   console.log(person.name);
   ```

