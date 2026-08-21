# Demo 31: Create and Run JS in VS Code and the Browser

**Module:** VII
**Topic:** Hands-On Practice in VS Code
**Estimated Time:** 18 minutes
**Related reading:** [Hands-On Practice in VS Code](../docs/Module-07-Programming-Syntax-and-Logic/03-hands-on-practice-in-vs-code.md)

## Objective
Students will create a JavaScript file, run it with Node.js in the terminal, then create an HTML file that loads JavaScript, add interactivity with event listeners, and preview it in a browser using Live Server.

## Setup/Prerequisites
- VS Code installed
- Node.js installed (verify with `node --version` in terminal)
- Live Server extension installed in VS Code (or willingness to install it)
- A project folder ready (or we'll create one)

## Step-by-Step Script

### Part 1: Node.js & Terminal Execution (6 minutes)

**Talking Points:**
"So far we've been typing in the browser console. Let's step up: we'll write a file, save it, and run it from the command line using Node.js. This is how you'd write real server-side JavaScript."

#### Creating a Project Folder (1 minute)

1. Open VS Code
2. Click **File** → **Open Folder**
3. Create a new folder called `js-demo` on your desktop or documents:
   - Windows: Right-click → New Folder
   - Mac/Linux: Create a folder via Finder or terminal
4. Open that folder in VS Code

**Talking Points:**
"Every project lives in a folder. This keeps your files organized and makes them easy to find."

#### Creating and Running node-demo.js (4 minutes)

1. In VS Code, right-click in the Explorer panel (left sidebar) and create a new file: `node-demo.js`

2. Type the following code:
   ```javascript
   const greeting = "Hello from Node.js!"
   console.log(greeting)

   const numbers = [1, 2, 3, 4, 5]
   const doubled = numbers.map(n => n * 2)
   console.log("Doubled:", doubled)

   function greet(name) {
     return `Hi, ${name}! Welcome to JavaScript.`
   }

   console.log(greet("Alice"))
   console.log(greet("Bob"))
   ```

**Talking Points:**
"This looks just like what we've been typing in the console, except now it's saved in a file. Let's run it."

3. Open the terminal in VS Code: **Terminal** → **New Terminal** (or `Ctrl+`` backtick)

4. Run the file with Node.js:
   ```bash
   node node-demo.js
   ```

**Result:**
```
Hello from Node.js!
Doubled: [ 2, 4, 6, 8, 10 ]
Hi, Alice! Welcome to JavaScript.
Hi, Bob! Welcome to JavaScript.
```

**Talking Points:**
"See? The code runs, and we see output. This is the same JavaScript engine that runs in your browser, but here it's running on your computer. Node.js is perfect for learning, testing ideas, and building servers."

5. Edit the file and run again:
   ```javascript
   console.log("What's 10 + 5?", 10 + 5)
   ```

   Save and run:
   ```bash
   node node-demo.js
   ```

**Talking Points:**
"Edit, save, run. That's your development cycle. It's quick and tight feedback."

### Part 2: HTML, JavaScript, and the Browser (9 minutes)

**Talking Points:**
"Node.js is great for learning and server work, but JavaScript's original home is the browser. Let's create an HTML page with JavaScript that runs in your browser, with real interactivity."

#### Creating the HTML File (2 minutes)

1. In VS Code, create a new file: `index.html`

2. Type this HTML:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Interactive Demo</title>
     <style>
       body {
         font-family: Arial, sans-serif;
         max-width: 600px;
         margin: 50px auto;
         padding: 20px;
       }
       button {
         padding: 10px 20px;
         font-size: 16px;
         cursor: pointer;
       }
       #output {
         margin-top: 20px;
         padding: 20px;
         background-color: #f0f0f0;
         border-radius: 5px;
       }
     </style>
   </head>
   <body>
     <h1>Welcome to JavaScript!</h1>
     <p>Click the button below to see JavaScript in action.</p>
     <button id="myButton">Click Me!</button>
     <div id="output"></div>

     <script src="script.js"></script>
   </body>
   </html>
   ```

**Talking Points:**
"This is standard HTML. Notice the `<script src="script.js"></script>` tag at the bottom—that tells the browser to load and run our JavaScript file. We use a separate file from the Node demo (`node-demo.js`) because this code uses `document`, which only exists in the browser—running it with `node script.js` would throw `ReferenceError: document is not defined`. The `<button>` and `<div>` give us elements to interact with."

#### Creating the JavaScript File for the Browser (3 minutes)

1. Create a **new** file called `script.js` (keep `node-demo.js` as-is—this browser code is separate). In `script.js`, type:
   ```javascript
   // This code runs when the page loads
   console.log("JavaScript file loaded!")

   // Get references to HTML elements
   const button = document.getElementById("myButton")
   const output = document.getElementById("output")

   // Define what happens when the button is clicked
   button.addEventListener("click", function() {
     const names = ["Alice", "Bob", "Charlie", "Diana"]
     const randomName = names[Math.floor(Math.random() * names.length)]

     output.innerHTML = `<p>Hello, <strong>${randomName}</strong>! Random number: ${Math.floor(Math.random() * 100)}</p>`
   })
   ```

**Talking Points:**
"Let's break this down:
- `document.getElementById()` finds an element by its id.
- `addEventListener()` listens for clicks on the button.
- When clicked, we pick a random name and random number.
- `innerHTML` sets the content of the output div.
- `Math.random()` gives a decimal between 0 and 1; multiply by 100 and floor it to get 0–99."

2. Save both files (`index.html` and `script.js`)

#### Launching with Live Server (3 minutes)

**Talking Points:**
"Now let's open this in a browser. VS Code has an extension called Live Server that serves your files over a local web server and automatically reloads when you save. It's perfect for development."

1. Right-click `index.html` in the Explorer and select **Open with Live Server**

**Alternative (if Live Server isn't installed):**
   - Install Live Server: Click Extensions in VS Code, search "Live Server," and install the one by Ritwick Dey
   - Then right-click `index.html` and Open with Live Server

**What happens:**
- A browser opens to `http://localhost:5500/index.html` (or similar port)
- You see your HTML page with a button and output area
- Open DevTools (`F12`) and look at the Console; you should see "JavaScript file loaded!"

**Talking Points:**
"You've created a live development environment. Every time you save, the browser reloads automatically. This is how professional JavaScript developers work."

#### Testing the Interactivity (1.5 minutes)

1. Click the **"Click Me!"** button

**Result:**
- The output div shows a message like "Hello, Bob! Random number: 47"
- Click again and you get a different name and number

**Talking Points:**
"JavaScript is responding to your click! Your code detected the click, ran a function, and updated the page. That's the core of interactive web development."

2. Open DevTools Console (`F12`) and try:
   ```javascript
   Math.random()
   ```

**Talking Points:**
"Notice we can still use the console while our page is running. This is powerful for debugging."

3. Edit `script.js` in VS Code:
   - Change the names array to include your own name
   - Save the file

**Result:**
- The browser automatically reloads
- Click the button again; your name might appear!

**Talking Points:**
"Live Server watches for changes. Edit, save, instant feedback. This is the modern development workflow."

### Summary: Where Does Your Code Run?

**Talking Points:**
"Important realization: JavaScript runs in two places:
1. **Node.js** (on your computer, server-side)—perfect for learning, testing, building APIs
2. **Browser** (in web pages)—perfect for interactive user interfaces

The language is the same, but the tools and libraries available are different. In the browser, you have `document`, `window`, and DOM manipulation. In Node.js, you have file access, networking, and server capabilities."

## Key Points to Emphasize

- **Files and the terminal are essential:** Real development happens in editors and terminals, not just the browser console. Get comfortable saving files and running commands.
- **`node filename.js` executes code:** Use this for testing, learning, and running server-side scripts.
- **HTML, CSS, and JavaScript work together:** HTML is structure, CSS is style, JavaScript adds behavior. The browser brings them all together.
- **Event listeners connect user actions to code:** `addEventListener` is how you make pages respond to clicks, inputs, and other user interactions.
- **Live Server streamlines development:** Auto-reloading saves time and lets you iterate fast.

## Common Questions

**Q: "Why do I need Node.js if JavaScript runs in the browser?"**
A: Great question! Node.js lets you run JavaScript outside the browser—on your computer, on servers, for command-line tools, etc. It's JavaScript for everything, not just web pages. Plus, you can test JavaScript code without opening a browser.

**Q: "What's the `document` object and where does it come from?"**
A: `document` is a global object that only exists in browsers. It represents the HTML page and lets you interact with it—finding elements, creating new ones, changing content. In Node.js, there's no `document` because there's no web page. Different environments, different tools.

**Q: "Do I have to use `innerHTML`? It sounds dangerous."**
A: You're right to be cautious! `innerHTML` can be risky if you're inserting user input (it can enable hacking). For learning, it's fine. Later, you'll use safer methods. For now, know it sets the HTML content of an element.

**Q: "Can I use console.log in the browser version?"**
A: Absolutely! And it works exactly the same. Open DevTools Console and you'll see any `console.log` statements from your code. This is how you debug browser JavaScript.

**Q: "Why did the button require an `id` attribute?"**
A: The `id` is a unique identifier. JavaScript uses it to find the element with `getElementById()`. Without it, JavaScript doesn't know which button you're talking about. IDs are how JavaScript and HTML communicate.
