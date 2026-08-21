# Demo 27: Browser Console and Variables

**Module:** VII
**Topic:** JavaScript Fundamentals
**Estimated Time:** 15 minutes
**Related reading:** [JavaScript Fundamentals](../docs/Module-07-Programming-Syntax-and-Logic/02-javascript-fundamentals.md)

## Objective
Students will learn how to use the browser's JavaScript console as a live coding environment, declare variables with `let` and `const`, understand data types, and use modern template literals.

## Setup/Prerequisites
- Google Chrome (or Chromium-based browser) installed and open
- A blank tab ready (can visit `about:blank`)
- Developer Tools keyboard shortcut memorized: `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)

## Step-by-Step Script

### Opening DevTools (2 minutes)

**Talking Points:**
"The browser console is where JavaScript lives and breathes. Think of it as your interactive JavaScript playground. Every webpage you visit is running JavaScript in the background, and the console lets you talk directly to it."

1. Open Chrome and navigate to `about:blank` (a blank page)
2. Press `F12` (or `Ctrl+Shift+I` on Windows/Linux, `Cmd+Option+I` on Mac)
3. Click the **Console** tab at the top of DevTools
4. You should see a prompt `>` ready for input

**What students see:** The console panel opens at the bottom or side of the browser, showing a blinking cursor ready for commands.

### Simple Math Expressions (3 minutes)

**Talking Points:**
"JavaScript can do math just like a calculator. Let's start with something simple. When you type an expression and press Enter, JavaScript evaluates it and shows you the result."

1. Type and press Enter:
   ```javascript
   2 + 2
   ```
   **Result:** `4` appears below

2. Show another expression:
   ```javascript
   10 * 5
   ```
   **Result:** `50`

3. Try something with decimals:
   ```javascript
   100 / 3
   ```
   **Result:** `33.333333333333336` (students should notice floating-point numbers!)

**Talking Points:**
"Notice how division gives us a decimal? That's important. JavaScript stores numbers with decimal places, and sometimes you get more digits than you expect due to how computers represent decimals internally. That's a detail we'll revisit later!"

### Strings and Concatenation (3 minutes)

**Talking Points:**
"Now let's work with text, which we call strings. In JavaScript, you wrap text in quotes—either single or double quotes."

1. Type a string:
   ```javascript
   "Hello, World!"
   ```
   **Result:** `'Hello, World!'` (note: console shows single quotes, but both work)

2. Concatenate strings with `+`:
   ```javascript
   "Hello, " + "Alice"
   ```
   **Result:** `'Hello, Alice'`

3. Mix text and numbers:
   ```javascript
   "I am " + 25 + " years old"
   ```
   **Result:** `'I am 25 years old'`

**Talking Points:**
"See how the plus sign does something different here? With numbers it adds, but with strings it glues them together. That's called concatenation, and it's super useful when you're building messages."

### Declaring Variables with `let` (2 minutes)

**Talking Points:**
"Instead of typing the same value over and over, we can save it in a variable—think of a variable as a labeled box that holds a value."

1. Declare and assign a variable:
   ```javascript
   let userName = "Jordan"
   ```
   **Result:** `undefined` (declaring a variable returns `undefined`; that's normal)

   > **Note:** We use `userName` rather than `name` on purpose. In the browser, `name` is a built-in global (`window.name`) that is always forced to be a string. Declaring `let name` or `const name` shadows it harmlessly — but a bare `name = "Jordan"` (no `let`/`const`) writes straight to `window.name`, and if you assign a number you'll get the *string* `"42"` back. Steering clear of built-in global names avoids the whole question. (You'll see `const { name } = person` in Demo 30 — that one's safe, because `const` makes its own binding.)

2. Use the variable:
   ```javascript
   userName
   ```
   **Result:** `'Jordan'`

3. Reassign the variable:
   ```javascript
   userName = "Morgan"
   ```
   **Result:** `'Morgan'`

4. Use it in an expression:
   ```javascript
   "Hello, " + userName
   ```
   **Result:** `'Hello, Morgan'`

**Talking Points:**
"Variables declared with `let` can be reassigned. That's the whole point—they're flexible. You'll use `let` most of the time when you know a value might change."

### Declaring Variables with `const` (2 minutes)

**Talking Points:**
"Sometimes you want a value that never changes. That's where `const` comes in. `const` stands for 'constant'—once you set it, it stays set."

1. Declare a constant:
   ```javascript
   const birthYear = 1990
   ```
   **Result:** `undefined`

2. Try to reassign it:
   ```javascript
   birthYear = 1991
   ```
   **Result:**
   ```
   Uncaught TypeError: Assignment to constant variable.
   ```

**Talking Points:**
"See that error? JavaScript stops us from changing a `const` variable. This is actually a feature, not a bug. By using `const` for values that shouldn't change, we protect our code from accidents."

3. Show a const that won't error:
   ```javascript
   const pi = 3.14159
   ```

### Understanding Data Types with `typeof` (2 minutes)

**Talking Points:**
"JavaScript needs to know what kind of value something is. Is it a number? Text? Something else? The `typeof` operator tells us."

1. Check the type of a number:
   ```javascript
   typeof 42
   ```
   **Result:** `'number'`

2. Check a string:
   ```javascript
   typeof "Hello"
   ```
   **Result:** `'string'`

3. Check a boolean (true/false):
   ```javascript
   typeof true
   ```
   **Result:** `'boolean'`

4. Check our variables:
   ```javascript
   typeof userName
   ```
   **Result:** `'string'`

   ```javascript
   typeof birthYear
   ```
   **Result:** `'number'`

**Talking Points:**
"This `typeof` trick is incredibly handy for debugging. When something goes wrong, you can check what type a variable is and spot the problem."

### Template Literals (2 minutes)

**Talking Points:**
"Now here's something modern and powerful. Instead of using plus signs to concatenate, you can use backticks and put variables right inside with `${}`."

1. Type a template literal:
   ```javascript
   `Hello, ${userName}!`
   ```
   **Result:** `'Hello, Morgan!'`

2. Use it with multiple variables:
   ```javascript
   const age = 28
   ```
   **Result:** `undefined`

   ```javascript
   `${userName} is ${age} years old.`
   ```
   **Result:** `'Morgan is 28 years old.'`

3. Even put expressions inside:
   ```javascript
   `In 10 years, ${userName} will be ${age + 10} years old.`
   ```
   **Result:** `'In 10 years, Morgan will be 38 years old.'`

**Talking Points:**
"Template literals are so much cleaner than concatenation! Notice the backticks—those are different from regular quotes. This is the modern JavaScript way, and once you start using them, you'll never go back to plus signs."

## Key Points to Emphasize

- **The console is a playground:** It's the fastest way to test JavaScript ideas without writing a full program. Encourage students to experiment and not fear errors.
- **Variables are flexible containers:** `let` for changing values, `const` for fixed ones. `const` is actually the modern default; most code uses `const` until you know you need `let`.
- **JavaScript is dynamically typed:** Unlike some languages (which we'll see later!), you don't declare "this is a number"—JavaScript figures it out. Use `typeof` when you need to check.
- **Template literals are modern and powerful:** They read like natural language and make combining values feel natural. This is what professional JavaScript code looks like today.

## Common Questions

**Q: "Why does the console sometimes show `undefined`?"**
A: Variables that are just declared (not outputting anything) return `undefined`. It's JavaScript's way of saying "this action didn't produce a value." When you type just a variable name, it returns the value stored in it—but declare a new one, and you get `undefined`. It's totally normal.

**Q: "Can I use single or double quotes for strings? Does it matter?"**
A: Both work fine in JavaScript. Pick one and be consistent in your code. Many teams use a tool called Prettier (which we'll see later) that auto-formats this for you. The important thing is that template literals use backticks, which is different.

**Q: "Why can't I reassign a `const` variable? That seems limiting."**
A: Great question! It actually prevents bugs. If you use `const` for a value that truly shouldn't change, JavaScript protects you from accidentally changing it. Most modern code uses `const` by default. If you later realize you need to change a value, you switch to `let`. It's a good discipline that makes code safer.
