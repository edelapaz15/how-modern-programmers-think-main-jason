# Topic 3: Hands-On Practice in VS Code
## Writing and Debugging Simple Programs

### Introduction: Environment Matters

You could write JavaScript in Notepad and run it in a browser. You could write Java with a text editor and compile from the command line. But it would be slow and painful. Professional developers use specialized tools called IDEs (Integrated Development Environments) that make writing code faster, safer, and more enjoyable.

VS Code is one of the most popular, modern code editors. It's free, lightweight, and works with any programming language. Learning to use it effectively is as important as learning the language itself.

In this section, you'll set up VS Code, create your first project, write code, run it, debug it, and understand the workflow you'll use thousands of times.

### Setting Up VS Code for JavaScript Development

#### Installation

1. Download VS Code from https://code.visualstudio.com
2. Install for your operating system (Windows, macOS, Linux)
3. Open it

You'll see the welcome screen. VS Code is extensible—you add features through extensions.

#### Essential Extensions

VS Code has thousands of extensions. Start with these:

1. **ESLint** — Checks your code for errors and style issues
   - Open Extensions (left sidebar, icon with four squares)
   - Search for "ESLint"
   - Click Install
   - ESLint scans your code and alerts you to problems in real-time

2. **Prettier** — Automatically formats your code beautifully
   - Search for "Prettier - Code Formatter"
   - Click Install

3. **Live Server** — Runs a local web server so you can test HTML/JavaScript in a browser
   - Search for "Live Server"
   - Click Install

4. **Node.js Extension Pack** — Tools for Node.js development
   - Search for "Node.js Extension Pack"
   - Click Install

You don't need these immediately, but they make development faster.

### Creating Your First Project Folder and Files

#### Create a Folder

1. On your computer, create a folder: `my-javascript-project`
2. Open VS Code
3. File → Open Folder
4. Select `my-javascript-project`

VS Code now shows the folder in the left sidebar. You're ready to create files.

#### Create Your First File

1. Click the "New File" icon (+ symbol) in the Explorer sidebar
2. Name it `hello.js`
3. Type this code:

```javascript
console.log("Hello, world!");
```

4. Save (Ctrl+S or Cmd+S)

Congratulations—you've created your first JavaScript file.

### Writing and Running JavaScript: Node.js in the Terminal

JavaScript used to run only in browsers. **Node.js** lets you run JavaScript on your computer like any other language.

#### Install Node.js

1. Visit https://nodejs.org
2. Download the LTS (Long-Term Support) version
3. Install it
4. Verify: Open a terminal and type `node --version`. You should see a version number

#### Running Your Script

1. In VS Code, open the integrated terminal: Terminal → New Terminal (or Ctrl+`)
2. You'll see a command prompt
3. Type: `node hello.js`
4. You'll see: `Hello, world!`

That's it. You wrote code, you ran it, you saw results. This is the fundamental cycle of programming.

### Read Before You Write

Beginners often rush to write code. But reading code—and being able to predict what it will do—is a first-class skill, and it usually comes *before* writing well. Professional developers spend far more time reading existing code than writing new code. Practicing prediction now builds the mental model you'll lean on for the rest of your career.

The habit is simple: before you run a snippet, read it line by line and predict the output out loud or on paper. Then run it and compare. When your prediction is wrong, that gap is exactly where the learning happens.

Try it with this snippet before you run it. What does each line print?

```javascript
let count = 3;
count = count + 1;
console.log("count is " + count);

let doubled = count * 2;
console.log("doubled is " + doubled);
```

Predict first. Line 1 sets `count` to `3`. Line 2 adds 1, so `count` becomes `4`. So the first log prints `count is 4`. Then `doubled` is `4 * 2`, which is `8`, so the second log prints `doubled is 8`. Now create a file, paste it in, run it with `node`, and check whether the output matches your prediction.

This predict-then-run loop is exactly what the "reading an unfamiliar codebase" demo (Demo 37) exercises, and it's a skill real projects lean on heavily—when you join a real CivicTrack-style project, you'll read far more code than you write before you change a single line.

#### More Practice: A Simple Calculation

Create a new file `calculator.js`:

```javascript
// A simple calculation program
let a = 10;
let b = 20;
let sum = a + b;
let product = a * b;

console.log("Sum: " + sum);
console.log("Product: " + product);
```

Run it:
```
node calculator.js
```

Output:
```
Sum: 30
Product: 200
```

#### Interactive Program with Input

Create `greet.js`:

```javascript
// Get command-line arguments
let name = process.argv[2];  // Third argument (0 is 'node', 1 is filename)

if (name) {
    console.log("Hello, " + name + "!");
} else {
    console.log("Hello, stranger!");
}
```

Run it:
```
node greet.js Alice
```

Output:
```
Hello, Alice!
```

Or:
```
node greet.js
```

Output:
```
Hello, stranger!
```

You've written a program that responds to input. This is how command-line tools work.

### Writing HTML + JavaScript: Running in the Browser

Node.js is great for server-side scripts and command-line tools. But JavaScript's superpower is making web pages interactive.

#### Create an HTML File

Create `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web App</title>
</head>
<body>
    <h1>Welcome to my app</h1>
    <button id="clickButton">Click me!</button>
    <p id="message"></p>

    <script src="app.js"></script>
</body>
</html>
```

This HTML file:
- Defines a button with id `clickButton`
- Defines a paragraph with id `message` (initially empty)
- Loads `app.js` (your JavaScript file)

#### Create the JavaScript File

Create `app.js`:

```javascript
// Get the button element
let button = document.getElementById("clickButton");

// Add a click handler
button.addEventListener("click", function() {
    let message = document.getElementById("message");
    message.textContent = "You clicked the button!";
});
```

This code:
- Gets the button element from the HTML
- Attaches a function that runs when clicked
- The function updates the message paragraph

#### Run It in the Browser

1. Right-click on `index.html` in the Explorer
2. Select "Open with Live Server"
3. Your browser opens with the page
4. Click the button—the message appears!

Try modifying the message text in `app.js` and refresh the browser. The changes appear immediately.

### VS Code Features for Writing Code: IntelliSense, Auto-completion, Error Highlighting

VS Code helps you write code faster and catch mistakes early.

#### IntelliSense and Auto-completion

As you type, VS Code suggests what to type next.

Type this in a file:
```javascript
let colors = ["red", "green", "blue"];
colors.
```

When you type the period after `colors`, VS Code shows all available methods:
- `.push()`
- `.pop()`
- `.map()`
- `.filter()`
- etc.

Select one and press Tab or Enter to auto-complete.

Press Ctrl+Space to trigger suggestions manually.

#### Error Highlighting

If you make a syntax error, VS Code underlines it in red:

```javascript
let x = ;  // Red underline; syntax error
```

Hover over it to see the error message.

If ESLint is installed, it also flags style issues (missing semicolons, unused variables, etc.).

#### Quick Fixes

Click the lightbulb icon (or press Ctrl+.) to see suggestions for fixing errors:

```javascript
let unusedVariable = 5;  // ESLint: variable never used
// Lightbulb appears; click it for options to fix
```

#### Go to Definition

Press Ctrl+Click (or Cmd+Click) on a function or variable to jump to where it's defined. This is invaluable in large codebases.

#### Find and Replace

- Ctrl+F to find text
- Ctrl+H to find and replace
- Type what you're looking for, then what to replace it with

### Using the Integrated Terminal

The integrated terminal in VS Code is your command prompt. You use it to:
- Run programs (`node filename.js`)
- Install packages (`npm install`)
- Run build tools
- Manage git

#### Basic Terminal Commands

```bash
# List files in current directory
ls          # macOS/Linux
dir         # Windows

# Change directory
cd folder-name

# Go up one directory
cd ..

# Create a file
New-Item -ItemType File filename.js   # Windows (PowerShell)
touch filename.js                     # macOS/Linux

# Show current directory
pwd
```

You don't need to be a terminal expert, but getting comfortable with basic commands helps.

### Installing Useful Extensions: ESLint, Prettier, Live Server

You've already installed the big three. Let's understand what they do.

#### ESLint

ESLint analyzes your code and warns about:
- Syntax errors
- Style issues (inconsistent spacing, missing semicolons)
- Potential bugs (unused variables, unreachable code)
- Security issues

**How to use it:**

1. Create a file `.eslintrc.json` in your project root:

```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-unused-vars": "warn",
        "semi": ["error", "always"]
    }
}
```

This configuration:
- Enables browser and Node.js environments
- Uses ESLint's recommended rules
- Warns about unused variables
- Requires semicolons (error if missing)

2. Now ESLint watches your code and shows problems in the Problems tab (View → Problems).

#### Prettier

Prettier automatically formats your code. It enforces consistent style so you don't have to think about it.

**How to use it:**

1. Right-click any `.js` file
2. Select "Format Document"
3. Prettier reformats the entire file

Or set it to auto-format on save:

File → Preferences → Settings, search for "Format On Save" and enable it.

Now your code is automatically formatted every time you save. No more arguments about style.

#### Live Server

Live Server runs a local web server and auto-refreshes your browser when you change files.

**How to use it:**

1. Create an HTML file
2. Right-click it
3. Select "Open with Live Server"
4. Browser opens with your page
5. Edit your HTML or JavaScript
6. Browser automatically refreshes

This is infinitely faster than manually refreshing.

### Debugging Basics: console.log Debugging

The simplest debugging technique is sprinkling `console.log()` throughout your code to see what's happening.

```javascript
function calculateTotal(items) {
    console.log("Input items:", items);

    let total = 0;
    for (let item of items) {
        console.log("Adding:", item.price);
        total += item.price;
    }

    console.log("Final total:", total);
    return total;
}

let items = [
    { name: "Apple", price: 1.50 },
    { name: "Banana", price: 0.75 },
    { name: "Orange", price: 2.00 }
];

calculateTotal(items);
```

Open the browser console (F12) and you'll see:
```
Input items: [{name: "Apple", price: 1.5}, {name: "Banana", price: 0.75}, {name: "Orange", price: 2}]
Adding: 1.5
Adding: 0.75
Adding: 2
Final total: 4.25
```

You can see exactly what the code is doing at each step. This helps you understand where bugs are.

**Good practices for console.log debugging:**

- Label your logs so you know where they came from:
  ```javascript
  console.log("Before loop:", total);  // Not just console.log(total);
  ```

- Log at key points: function entry, inside loops, after calculations

- Remove logs when you're done or use console.log's second parameter:
  ```javascript
  if (DEBUG) console.log("Debug info:", x);  // Only if DEBUG is true
  ```

### The VS Code Debugger: Breakpoints, Stepping Through Code, Watching Variables

For complex bugs, the visual debugger is more powerful than console.log.

#### Setting Breakpoints

A **breakpoint** is a line where execution pauses so you can examine the state.

1. Click the left margin (gutter) next to a line number:

```javascript
function add(a, b) {
    let result = a + b;  // Click here to set a breakpoint (red dot appears)
    return result;
}
```

2. Run your code in debug mode: Press F5 or Run → Start Debugging
3. When that line executes, the debugger pauses
4. You can now inspect variables, step through code, etc.

#### Stepping Through Code

Once paused, you can:
- **Step Over** (F10) — Execute the current line and move to the next
- **Step Into** (F11) — Enter the function on this line
- **Step Out** (Shift+F11) — Exit the current function
- **Continue** (F5) — Resume execution

This lets you watch how your code executes line by line, seeing variable values change.

#### Watching Variables

In the debugger sidebar, you can add variables to "Watch" and see their values in real-time:

1. In the Debug sidebar, expand "Watch"
2. Click "+" to add a variable
3. Type the variable name
4. As you step through, you see its value

Example:
```javascript
let x = 5;
let y = 10;
let z = x + y;  // Pause here; watch x, y, and z
```

When paused at that line:
- `x: 5`
- `y: 10`
- `z: undefined` (hasn't been assigned yet)

Step forward, and `z` becomes `15`.

### Reading Error Messages: Understanding What Went Wrong

Error messages are your friends. They tell you exactly what's wrong.

#### SyntaxError

```javascript
let x = ;  // SyntaxError: Unexpected token ';'
```

The computer couldn't parse your code. The error message points to the problem location. In this case, you've got `=` with nothing after it.

**Fix:** Give `x` a value.

#### ReferenceError

```javascript
console.log(nonexistentVariable);  // ReferenceError: nonexistentVariable is not defined
```

You're using a variable that doesn't exist. Either:
- You misspelled the variable name
- You declared it in a different scope
- You forgot to declare it

**Fix:** Declare the variable or check the spelling.

#### TypeError

```javascript
let text = "hello";
text.toUpperCase;  // No error here
console.log(text.toUpperCase());  // Should work

let obj = null;
console.log(obj.name);  // TypeError: Cannot read property 'name' of null
```

You're trying to do something invalid with a value:
- Calling a method on something that's not an object
- Accessing a property of `null` or `undefined`
- Treating a non-function as a function

**Fix:** Check the type of the value before using it.

#### Common Error Messages and Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Unexpected token` | Syntax error (wrong character, missing bracket) | Check syntax near the error location |
| `is not defined` | Variable doesn't exist | Declare the variable or check spelling |
| `Cannot read property X of null` | Accessing property of null | Check if value is null before accessing |
| `Unexpected end of input` | Missing closing bracket | Count opening/closing brackets, braces |
| `is not a function` | Calling something that isn't a function | Check if it's a function before calling |

### Common Errors and How to Troubleshoot Them

#### TypeError: Cannot read property 'name' of undefined

```javascript
let user = { name: "Alice" };
console.log(user.profile.age);  // profile doesn't exist!
```

**Problem:** `user.profile` is undefined, so accessing `.age` on it fails.

**Fix:** Check before accessing:
```javascript
if (user && user.profile) {
    console.log(user.profile.age);
}

// Or use optional chaining (modern JavaScript):
console.log(user?.profile?.age);
```

#### ReferenceError: Variable not defined

```javascript
function test() {
    console.log(x);  // x is declared below, but not yet
}

let x = 5;
test();
```

**Problem:** You're using `x` before it's declared.

**Fix:** Declare the variable before using it.

#### The Function Doesn't Run

```javascript
let myFunction = function() {
    console.log("This runs");
};

myFunction;  // Wrong: you're accessing the function, not calling it
myFunction();  // Right: parentheses call it
```

**Problem:** Forgot parentheses when calling the function.

**Fix:** Add `()` to call the function.

#### Strange Numbers

```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004 (not 0.3!)
```

**Problem:** Floating-point precision. Computers represent decimals as binary, which doesn't match decimal perfectly.

**Fix:** Understand this is a computer limitation. For currency, use integers (cents instead of dollars):
```javascript
let cents = 10 + 20;  // 30 cents = $0.30
```

#### Infinite Loops

```javascript
while (true) {
    console.log("Hi");
}
```

Your program never stops. Ctrl+C in the terminal kills it.

**Problem:** Loop condition never becomes false.

**Fix:** Ensure your loop will eventually exit:
```javascript
let count = 0;
while (count < 5) {
    console.log("Hi");
    count++;  // Eventually count reaches 5, loop exits
}
```

> **🤖 Working with AI:** When an error message is confusing, an AI assistant (ChatGPT, Claude, or an in-editor tool like GitHub Copilot) can be a fast way to make sense of it. Paste the exact error message and the relevant code, and ask "what does this mean and why is it happening?"—you'll usually get a plain-English explanation and a suggested fix. AI assistants are also good for suggesting how to write a small piece of code you're stuck on.
>
> Treat this as a tool to learn *with*, not a replacement for understanding. Read the explanation, make sure you understand *why* the fix works, and verify it by running your code—don't just paste suggestions in until the error disappears. The goal is to come out of each error understanding something you didn't before, so next time you can solve it yourself.

### Formatting Code: Why It Matters and How Prettier Helps

Poorly formatted code is hard to read:

```javascript
function calculate(a,b){return a+b;}let result=calculate(5,10);console.log(result);
```

Well-formatted code is much clearer:

```javascript
function calculate(a, b) {
    return a + b;
}

let result = calculate(5, 10);
console.log(result);
```

Formatting doesn't change what the code does, but it affects readability. In a team, different people have different style preferences. Prettier removes this issue: everyone's code is formatted the same way, automatically.

**Why it matters:**
- You read code more than you write it
- Consistent style makes code easier to understand
- Automated formatting saves time
- Your team can focus on logic, not style arguments

### Saving and Organizing Your Practice Files

As you practice, create a clear folder structure:

```
my-javascript-learning/
├── basics/
│   ├── variables.js
│   ├── loops.js
│   ├── functions.js
│   └── arrays.js
├── exercises/
│   ├── calculator.js
│   ├── todo-app.js
│   └── data-processor.js
├── web-apps/
│   ├── index.html
│   ├── app.js
│   └── style.css
└── README.md
```

This organization:
- Groups related files
- Makes it easy to find things
- Scales as you learn more
- Shows progression

Create a README.md in the root to describe each folder:

```markdown
# My JavaScript Learning Journey

## basics/
Fundamental concepts: variables, loops, functions, arrays

## exercises/
Practice problems and small projects

## web-apps/
HTML + JavaScript projects

## Progress
- [x] Variables and data types
- [x] Control flow
- [ ] Objects and methods
- [ ] Asynchronous programming
```

### Version Controlling Your Practice Work with Git

**Git** is a version control system. It tracks changes to your files, lets you revert if you mess up, and lets you collaborate.

If you're not familiar with git, here's the basics:

```bash
# Initialize a git repository in your project folder
# (-b master names the first branch, so it matches what we use in class)
git init -b master

# See what's changed
git status

# Add files to be committed
git add .

# Create a snapshot of your code
git commit -m "Initial commit"

# See history
git log
```

After each practice session, commit your work:

```bash
git add .
git commit -m "Add calculator exercise"
```

Later, if you want to see what you wrote last week:

```bash
git log
```

Git is essential in professional programming but optional for personal learning. It's good to get comfortable with it early.

### Building Confidence Through Practice: Suggested Exercises

You learn programming by doing. Here are exercises to build skills:

#### Exercise 1: Temperature Converter

Write a program that:
- Asks for a temperature in Celsius
- Converts to Fahrenheit (F = C × 9/5 + 32)
- Displays the result

**File: converter.js**
```javascript
let celsius = 25;
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);
```

Extend it: Try different temperatures. What's the conversion for absolute zero (-273.15°C)?

#### Exercise 2: Grade Calculator

Write a program that:
- Stores test scores in an array
- Calculates the average
- Determines the letter grade (A: 90+, B: 80-89, etc.)
- Displays the results

#### Exercise 3: Contact List

Create an object-based contact list:

```javascript
let contacts = [
    { name: "Alice", email: "alice@example.com", phone: "555-1234" },
    { name: "Bob", email: "bob@example.com", phone: "555-5678" },
];

// Function to add a contact
// Function to find a contact by name
// Function to list all contacts
```

#### Exercise 4: Interactive To-Do List (Web)

Create `index.html` and `app.js` that:
- Display a list of to-dos
- Let you add new to-dos
- Let you mark to-dos as complete
- Show count of completed vs. remaining

Start simple:
```html
<input id="todoInput" type="text" placeholder="Enter a todo">
<button id="addButton">Add</button>
<ul id="todoList"></ul>
```

#### Exercise 5: Data Processing

Write functions that:
- Take an array of numbers
- Filter out even numbers
- Multiply remaining numbers by 2
- Return the sum

Use map, filter, and reduce.

### Real Code Examples and VS Code Workflows

#### Example 1: Debugging a Calculation

Create `order.js`:

```javascript
let items = [
    { name: "Laptop", price: 999.99, quantity: 1 },
    { name: "Mouse", price: 29.99, quantity: 2 },
    { name: "Keyboard", price: 79.99, quantity: 1 }
];

// Calculate total
let total = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log("Total: $" + total.toFixed(2));
```

Run it:
```
node order.js
```

Output:
```
Total: $1189.97
```

If something's wrong, add console.log to debug:

```javascript
let total = items.reduce((sum, item) => {
    let itemTotal = item.price * item.quantity;
    console.log(`${item.name}: $${itemTotal}`);
    return sum + itemTotal;
}, 0);
```

Now you see the breakdown and can spot errors.

#### Example 2: Building a Small Web App

Create `quiz.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Quiz App</title>
    <style>
        body { font-family: Arial; }
        .hidden { display: none; }
    </style>
</head>
<body>
    <h1>Quick Quiz</h1>
    <div id="question"></div>
    <div id="options"></div>
    <button id="nextButton">Next</button>
    <p id="score"></p>
    <script src="quiz.js"></script>
</body>
</html>
```

Create `quiz.js`:

```javascript
let questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correct: 1
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question").textContent = "Quiz Complete!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;
}

showQuestion();
```

Right-click `quiz.html` and "Open with Live Server." You have a working quiz app.

### Bridge from Business: Professional Development Workflow

In a real company, this process scales:

1. **Requirements** — What should the software do? (Specified by product managers or clients)
2. **Design** — Plan the architecture and data structures
3. **Development** — Write the code (what you're learning)
4. **Testing** — Verify it works (automated tests and manual testing)
5. **Debugging** — Fix bugs found in testing
6. **Code Review** — Other developers review your code
7. **Deployment** — Release to users

You're learning the **Development** and **Debugging** steps. As you advance, you'll learn the others. But the fundamentals—writing code, reading error messages, stepping through code—are the same whether you're a intern or a senior engineer.

---

## Review and Discussion Questions

1. **Debugging Strategy:** Write a program that:
   - Creates an array of 5 numbers
   - Calculates the sum and average
   - Finds the maximum and minimum

   Deliberately introduce a bug (e.g., calculate average incorrectly). Use `console.log()` to debug it. Explain what the bug was and how you found it.

2. **Error Messages:** Run each of these code snippets and describe the error:
   ```javascript
   // 1
   let x = 5
   console.log(x)

   // 2
   let arr = [1, 2, 3];
   console.log(arr[10]);

   // 3
   let obj = null;
   console.log(obj.name);

   // 4
   function test(a, b) {
       return a + b;
   }
   test(5);  // Called with only 1 argument
   ```
   What does each error tell you?

3. **VS Code Workflow:** Create a small project with:
   - A folder structure (e.g., `js-practice/basics/` and `js-practice/exercises/`)
   - At least 3 JavaScript files with different programs
   - A README.md describing the project
   - Initialize git and make commits as you develop

   Practice the full workflow: write, run, debug, format, commit.

4. **Scope and Debugging:** Write a program where a variable changes in unexpected ways due to scope issues. Use the debugger (breakpoints and stepping) to understand what's happening. Explain how the scope worked and how you fixed it.

5. **Professional Practices:** Compare writing code in:
   - A text editor (Notepad) with no syntax highlighting
   - VS Code with extensions

   How does the environment affect development speed and error catching?

6. **Building Confidence:** You've now written code, run it, debugged it, and fixed errors. Reflect on:
   - What's easier than you expected?
   - What's harder than you expected?
   - What surprised you most about programming?

