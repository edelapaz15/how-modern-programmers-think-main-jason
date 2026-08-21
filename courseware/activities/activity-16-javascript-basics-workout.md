# Activity 16: JavaScript Basics Workout

**Module:** VII (Programming Syntax & Logic)
**Related reading:** [JavaScript Fundamentals](../docs/Module-07-Programming-Syntax-and-Logic/02-javascript-fundamentals.md)

---

## Objective

Complete a structured series of 10 JavaScript challenges that build progressively from variables and console output, through strings, conditionals, loops, arrays, functions, and objects, to a final integrated program. By the end, you'll have written real, working code that demonstrates mastery of JavaScript fundamentals—and you'll have a working file you can look back on with pride.

---

## Background

Throughout this course, you've been learning how programmers think: breaking problems into steps, naming things clearly, testing assumptions, and building toward larger solutions. JavaScript basics are your foundation. In this workout, you'll prove to yourself that you can write code that runs, code that does what you expect, and code that works together as a system.

This isn't busywork. Each challenge reinforces a concept you'll use in every program you write, whether in JavaScript, Java, or any language. And you'll complete all 10 challenges in a single file, which means you'll see how smaller pieces of code can coexist and build on each other—exactly how real applications are built.

---

## Step-by-Step Instructions

### Setup

1. **Create a new file** called `javascript-workout.js` in your projects folder.
2. **Open it in VS Code**.
3. **Open a terminal** in VS Code (Ctrl+` on Windows, Cmd+` on Mac).
4. **Run Node.js** on your file as you complete each challenge: `node javascript-workout.js`

### The 10 Challenges

> **A note on timing:** The per-challenge minutes below are *focused coding time* for someone who already knows the syntax. As a true beginner, expect to spend more — looking things up, fixing typos, and re-running counts. Plan for **90–120 minutes** overall, and don't rush. **Challenges 9 and 10 are stretch goals: do them if you have time, but it's completely fine to stop after Challenge 8 in a time-limited session.**

**Challenge 1: Variables and Console Output** (5 min)

Create variables for:
- Your name (string)
- Your age (number)
- Whether you've programmed before (boolean)

Log each to the console with a label, like: `"My name is Sarah"`

Expected output:
```
My name is Sarah
My age is 34
I have programmed before: false
```

---

**Challenge 2: Strings and Template Literals** (5 min)

Using the same variables from Challenge 1, create a single template literal that outputs:
```
Sarah is 34 years old and is new to programming.
```

(Tip: use backticks and `${}` syntax.)

---

**Challenge 3: Conditionals** (5 min)

Create a variable `score` with a value between 0 and 100. Use an if/else statement to log:
- "Pass" if the score is 50 or above
- "Fail" if the score is below 50

Test it with at least two different values.

---

**Challenge 4: Loops** (5 min)

Use a `for` loop to print the numbers 1 through 10, each on its own line.

Expected output:
```
1
2
3
...
10
```

---

**Challenge 5: Arrays and Methods** (7 min)

Create an array called `fruits` with at least 4 fruit names. Then:
- Log the array
- Use `.push()` to add a new fruit
- Use `.filter()` to create a new array with only fruits containing the letter 'a'
- Use `.map()` to create an array of the length of each fruit name
- Log all three results

Example (starting from `['apple', 'banana', 'orange', 'kiwi']` and pushing `'grape'`):
```
[ 'apple', 'banana', 'orange', 'kiwi', 'grape' ]
[ 'apple', 'banana', 'orange', 'grape' ]
[ 5, 6, 6, 4, 5 ]
```

Note that `'apple'` **is** in the filtered list — it contains an 'a'. Only `'kiwi'` is filtered out. If your filtered array has three items instead of four, you probably dropped `'apple'` by testing `indexOf('a') > 0` — apple's 'a' sits at index `0`, so that test excludes it. Use `includes('a')` instead (or `indexOf('a') !== -1`).

---

**Challenge 6: Functions** (5 min)

Write a function called `greet` that takes a name as a parameter and returns a personalized greeting:
```javascript
greet("Alex") // should return "Hello, Alex! Welcome to programming."
```

Call it three times with different names and log the results.

---

**Challenge 7: Objects** (5 min)

Create an object called `programmer` with these properties:
- `name` (your name)
- `yearsInCareer` (years before programming)
- `favoriteLanguage` (a language you've learned)
- `stillLearning` (boolean)

Log the object, then log a single property using dot notation.

---

**Challenge 8: Combining Objects and Arrays** (5 min)

Create an array of three objects, where each object represents a programming concept:
```javascript
[
  { name: 'Variables', difficulty: 'Easy' },
  { name: 'Functions', difficulty: 'Medium' },
  ...
]
```

Use `.filter()` to create a new array with only "Easy" concepts. Log the result.

---

**Challenge 9: Array of Objects with Methods** (7 min) — *Stretch / optional if time-limited*

Create an array of 4-5 student objects. Each should have:
- `name` (string)
- `moduleNumber` (1-8)
- `completed` (boolean)

Use `.filter()` to find all students who completed their module. Use `.map()` to create a new array with just the names of completed students. Log both results.

Example output:
```
Completed students: ['Sarah', 'Marcus', 'Yuki']
```

---

**Challenge 10: Integration Challenge** (6 min) — *Stretch / optional if time-limited*

Write a small program that:
1. Defines an array of 4-5 product objects (each with `name`, `price`, `inStock` properties)
2. Uses `.filter()` to find only in-stock items
3. Uses `.map()` to get an array of prices for those items
4. Uses a `for` loop to sum all the prices
5. Logs the total in a readable way: `"Total value of in-stock items: $245.50"`

---

## Expected Deliverable

A single `javascript-workout.js` file containing:
- Completed code for all 10 challenges
- Comments indicating which challenge is which
- Code that runs without errors when you execute `node javascript-workout.js`
- Console output showing the results of each challenge

---

## Reflection Questions

1. **Which challenge felt easiest?** Which felt hardest? What does that tell you about which concepts you might want to practice more?

2. **Why does Challenge 10 matter more than the others?** How is it different from Challenges 1-9, and why would a programmer care about writing code that works together like that?

3. **If you were to teach Challenge 5 (arrays and methods) to a friend, how would you explain `.filter()` and `.map()` in simple terms?** What real-world analogy could you use?

---

## Tips for Success

- **Run your code frequently.** After each challenge, run the file and see the output. This is how you learn.
- **Add comments.** Use `//` to label each challenge in your code. Future-you will appreciate it.
- **Don't memorize.** Keep the syntax reference open. Real programmers look things up constantly.
- **Break early.** If a challenge stumps you, move forward and come back to it. Sometimes a fresh perspective helps.

You've got this. By the end, you'll have written real, working JavaScript—the same language used to build the interactive web.

---

> ### 🚀 If you finish early (stretch)
>
> - **Turn Challenge 6 into a calculator.** Write a function that takes two numbers and an operator (`"+"`, `"-"`, `"*"`, `"/"`) and returns the result. Handle divide-by-zero gracefully.
> - **Sort instead of filter.** In Challenge 8, sort the concepts array by difficulty (Easy → Medium → Hard) using `.sort()` with a custom comparator, then log the names in order.
> - **Add `.reduce()` to Challenge 10.** Replace the manual `for` loop that sums prices with a single `.reduce()` call and confirm you get the same total.

> ### 🆘 If you get stuck
>
> - **Read the error, top line first.** Node prints the *file and line number* — go straight there. `SyntaxError` usually means a missing `)`, `}`, or backtick a line or two above.
> - **`console.log()` the value, not just the result.** If `.filter()` or `.map()` returns something unexpected, log the array *before* and *after* the call to see what changed.
> - **Check the method spelling and the docs.** It's `.push()`, `.filter()`, `.map()` — case-sensitive, with parentheses. When unsure what a method returns, look it up on MDN (search "MDN Array filter").
> - **Ask an AI assistant to *explain* the error — then verify.** Paste the error and ask "what does this mean?" Don't paste back the suggested fix blindly: read the explanation, change the code yourself, and re-run to confirm.

---

<details>
<summary><strong>Instructor Answer Key / Solutions</strong> (click to expand)</summary>

These are reference solutions. There are many valid ways to solve each challenge — a student's code is correct if it runs and produces the described output. Variable values (names, ages, etc.) will differ per student; the examples below use the same sample values shown in the activity. The whole file runs with `node javascript-workout.js`.

```javascript
// ===== Challenge 1: Variables and Console Output =====
const name = "Sarah";
const age = 34;
const hasProgrammed = false;

console.log("My name is " + name);
console.log("My age is " + age);
console.log("I have programmed before: " + hasProgrammed);
// My name is Sarah
// My age is 34
// I have programmed before: false

// ===== Challenge 2: Strings and Template Literals =====
console.log(`${name} is ${age} years old and is new to programming.`);
// Sarah is 34 years old and is new to programming.

// ===== Challenge 3: Conditionals =====
let score = 72;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

score = 38;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// Pass
// Fail

// ===== Challenge 4: Loops =====
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 1 2 3 ... 10, each on its own line

// ===== Challenge 5: Arrays and Methods =====
const fruits = ["apple", "banana", "orange", "kiwi"];
fruits.push("grape");
console.log(fruits);
// [ 'apple', 'banana', 'orange', 'kiwi', 'grape' ]

const withA = fruits.filter(fruit => fruit.includes("a"));
console.log(withA);
// [ 'apple', 'banana', 'orange', 'grape' ]
// Note: "apple" also contains the letter 'a', so it is correctly included.

const lengths = fruits.map(fruit => fruit.length);
console.log(lengths);
// [ 5, 6, 6, 4, 5 ]

// ===== Challenge 6: Functions =====
function greet(name) {
  return `Hello, ${name}! Welcome to programming.`;
}
console.log(greet("Alex"));
console.log(greet("Sarah"));
console.log(greet("Marcus"));
// Hello, Alex! Welcome to programming.
// Hello, Sarah! Welcome to programming.
// Hello, Marcus! Welcome to programming.

// ===== Challenge 7: Objects =====
const programmer = {
  name: "Sarah",
  yearsInCareer: 12,
  favoriteLanguage: "JavaScript",
  stillLearning: true
};
console.log(programmer);
console.log(programmer.favoriteLanguage);
// { name: 'Sarah', yearsInCareer: 12, favoriteLanguage: 'JavaScript', stillLearning: true }
// JavaScript

// ===== Challenge 8: Combining Objects and Arrays =====
const concepts = [
  { name: "Variables", difficulty: "Easy" },
  { name: "Functions", difficulty: "Medium" },
  { name: "Loops", difficulty: "Easy" }
];
const easyConcepts = concepts.filter(concept => concept.difficulty === "Easy");
console.log(easyConcepts);
// [ { name: 'Variables', difficulty: 'Easy' }, { name: 'Loops', difficulty: 'Easy' } ]

// ===== Challenge 9: Array of Objects with Methods (Stretch) =====
const students = [
  { name: "Sarah", moduleNumber: 7, completed: true },
  { name: "Marcus", moduleNumber: 5, completed: true },
  { name: "Priya", moduleNumber: 4, completed: false },
  { name: "Yuki", moduleNumber: 8, completed: true }
];
const completedStudents = students.filter(student => student.completed);
const completedNames = completedStudents.map(student => student.name);
console.log("Completed students:", completedNames);
// Completed students: [ 'Sarah', 'Marcus', 'Yuki' ]

// ===== Challenge 10: Integration Challenge (Stretch) =====
const products = [
  { name: "Notebook", price: 4.50, inStock: true },
  { name: "Pen", price: 1.00, inStock: false },
  { name: "Backpack", price: 240.00, inStock: true },
  { name: "Stapler", price: 12.00, inStock: false }
];
const inStock = products.filter(product => product.inStock);
const prices = inStock.map(product => product.price);
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log(`Total value of in-stock items: $${total.toFixed(2)}`);
// Total value of in-stock items: $244.50
```

</details>
