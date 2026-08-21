# Demo 34: HTML + CSS + JS Working Together

**Module:** VII
**Topic:** Modern Web Development Overview
**Estimated Time:** 15 minutes
**Related reading:** [Modern Web Development Overview](../docs/Module-07-Programming-Syntax-and-Logic/04-modern-web-development-overview.md)

## Objective
Students will build a complete, interactive web page that demonstrates how HTML (structure), CSS (presentation), and JavaScript (behavior) work together. They'll also use the Network tab to observe HTTP requests and work with JSON objects.

![Six steps of loading a page, from typing an address through DNS, the request, the server's work, the response with a status code, and the browser drawing the result.](../diagrams/png/web-request-lifecycle.png)

*Use this to place HTML, CSS and JavaScript in step 6 — the part that happens on the user's machine.*

## Setup/Prerequisites
- VS Code with Live Server extension
- A browser with DevTools
- A project folder from previous demos (or create a new one)
- All three technologies running simultaneously

## Step-by-Step Script

### Part 1: Building the HTML & CSS (5 minutes)

**Talking Points:**
"We've seen JavaScript in isolation. Now let's see it in context—with HTML and CSS. HTML gives structure, CSS gives style, JavaScript gives behavior. Together, they make the web work."

#### Creating the HTML File

1. Create `index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Web Development Demo</title>
     <style>
       * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
       }

       body {
         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
         background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
         min-height: 100vh;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 20px;
       }

       .container {
         background: white;
         border-radius: 10px;
         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
         padding: 40px;
         max-width: 500px;
         width: 100%;
       }

       h1 {
         color: #333;
         margin-bottom: 20px;
         text-align: center;
       }

       p {
         color: #666;
         margin-bottom: 20px;
         line-height: 1.6;
       }

       .input-group {
         display: flex;
         gap: 10px;
         margin-bottom: 20px;
       }

       input {
         flex: 1;
         padding: 12px;
         border: 2px solid #ddd;
         border-radius: 5px;
         font-size: 16px;
       }

       input:focus {
         outline: none;
         border-color: #667eea;
       }

       button {
         padding: 12px 24px;
         background-color: #667eea;
         color: white;
         border: none;
         border-radius: 5px;
         font-size: 16px;
         cursor: pointer;
         transition: background-color 0.3s;
       }

       button:hover {
         background-color: #764ba2;
       }

       button:active {
         transform: scale(0.98);
       }

       #output {
         background-color: #f8f9fa;
         border-left: 4px solid #667eea;
         padding: 20px;
         border-radius: 5px;
         min-height: 60px;
         color: #333;
       }

       .message {
         font-weight: bold;
         color: #667eea;
         margin-bottom: 10px;
       }

       .details {
         font-size: 14px;
         color: #666;
         background-color: white;
         padding: 10px;
         border-radius: 3px;
         margin-top: 10px;
         font-family: 'Courier New', monospace;
       }

       .details pre {
         margin: 5px 0 0 0;
         font-family: inherit;
       }
     </style>
   </head>
   <body>
     <div class="container">
       <h1>👋 Welcome to Web Dev</h1>
       <p>Enter your name and click the button to see HTML, CSS, and JavaScript work together!</p>

       <div class="input-group">
         <input type="text" id="nameInput" placeholder="Enter your name...">
         <button id="submitBtn">Go!</button>
       </div>

       <div id="output">
         <p style="color: #999; text-align: center;">Click "Go!" to see the magic</p>
       </div>
     </div>

     <script src="app.js"></script>
   </body>
   </html>
   ```

**Talking Points:**
"Let's break down the HTML and CSS:
- HTML provides the structure: a container, heading, paragraph, input field, button, and output div.
- CSS provides the styling: colors (purple gradient background), shadows, spacing, hover effects, responsive layout using flexbox.
- The `<style>` tag embeds CSS directly. In real projects, CSS often lives in separate files.
- The `<script>` tag loads our JavaScript file.
- Notice the `id` attributes (`nameInput`, `submitBtn`, `output`)—these are how JavaScript finds elements."

### Part 2: Writing the Interactive JavaScript (5 minutes)

**Talking Points:**
"Now for the JavaScript. This is where we listen for clicks, process input, and update the page dynamically."

1. Create `app.js`:

   ```javascript
   // Get references to HTML elements
   const nameInput = document.getElementById("nameInput")
   const submitBtn = document.getElementById("submitBtn")
   const output = document.getElementById("output")

   // Process when the button is clicked
   submitBtn.addEventListener("click", function() {
     const name = nameInput.value.trim()

     if (name === "") {
       output.innerHTML = `
         <p style="color: #e74c3c;">Please enter a name!</p>
       `
       return
     }

     // Create an object (JSON-like) with user data
     const userdata = {
       name: name,
       timestamp: new Date().toLocaleString(),
       messageLength: name.length,
       isLongName: name.length > 5
     }

     // Generate HTML to display the result
     output.innerHTML = `
       <div class="message">Hello, ${userdata.name.toUpperCase()}! 🎉</div>
       <p>Welcome to the world of web development.</p>
       <div class="details">
         <strong>Data Object (JSON):</strong>
         <pre>${JSON.stringify(userdata, null, 2)}</pre>
       </div>
     `

     // Clear the input for the next entry
     nameInput.value = ""
     nameInput.focus()
   })

   // Allow Enter key to submit
   nameInput.addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
       submitBtn.click()
     }
   })

   console.log("Page loaded and JavaScript is running!")
   ```

**Talking Points:**
"Notice several things:
- We get references to HTML elements using `getElementById`.
- We add a `click` event listener to the button.
- When clicked, we get the user's input from the text field.
- We create a JavaScript object with data about the input (name, timestamp, length, etc.).
- We use `JSON.stringify()` to convert the object to readable JSON text. The `2` at the end means "indent it with 2 spaces" so it's pleasant to read.
- We wrap that JSON in a `<pre>` tag. This matters: HTML normally collapses every run of spaces and newlines down into a single space, so without `<pre>` our nicely-indented JSON would slam onto one long line. `<pre>` means "preformatted" — it tells the browser to keep the whitespace exactly as written. It's a good one to remember any time you need to show code or structured text on a page.
- We update the output div's `innerHTML` with formatted HTML.
- We also listen for the Enter key so users don't have to click the button.
- We use `console.log()` to show that JavaScript is running (for debugging)."

2. Save both files

### Part 3: Launching and Interacting (2 minutes)

**Talking Points:**
"Now let's see it all work together. Open the page in a browser."

1. Right-click `index.html` and select **Open with Live Server**

**Visual Result:**
- A beautiful page appears with a purple gradient background
- An input field and button are visible
- The output area shows a placeholder message

2. Type a name (e.g., "Alice") in the input field

3. Click the "Go!" button

**Result:**
- The output updates instantly with a greeting
- The name is converted to uppercase
- A JSON object is displayed showing:
  ```json
  {
    "name": "Alice",
    "timestamp": "3/14/2026, 2:30:45 PM",
    "messageLength": 5,
    "isLongName": false
  }
  ```
- The input field is cleared and focused, ready for another entry

**Talking Points:**
"See what happened?
1. **HTML** provided the structure (input, button, output area).
2. **CSS** made it look professional (colors, spacing, effects).
3. **JavaScript** made it interactive (listened for clicks, processed data, updated the page).

This is the full stack of web development! All three languages working together."

4. Try entering a longer name (e.g., "Alexander"):
   - The `isLongName` flag changes to `true`
   - Everything updates dynamically

5. Try pressing Enter instead of clicking the button:
   - It works! JavaScript's `keydown` listener handles it.

### Part 4: Inspecting Network Requests (2 minutes)

**Talking Points:**
"When your page loads, the browser makes requests for resources—the HTML file, the CSS, the JavaScript, images, fonts, etc. The Network tab shows you all of these."

1. Open DevTools (`F12`)

2. Click the **Network** tab

3. Reload the page (`F5`)

**Visual Result:**
- A list of requests appears
- You see:
  - `index.html` (the main document)
  - `app.js` (your JavaScript file)
  - Possibly some font requests or other resources

4. Click on `index.html`:
   - You see headers, response, timing, etc.
   - Response shows the HTML code

**Talking Points:**
"The Network tab is crucial for understanding how web pages load. Each row is an HTTP request. You can see:
- What resources were loaded
- How long each took
- The size of each file
- Status codes (200 = success, 404 = not found, etc.)

For small projects this is simple, but large websites make hundreds of requests. The Network tab helps you optimize."

5. Type a name and click the button while the Network tab is open:

**Result:**
- No new network requests appear!
- The page updates without talking to the server

**Talking Points:**
"This is key: JavaScript can update the page without making network requests. The page already has all the code and data it needs. This is why modern web apps feel snappy—no network delay for every interaction."

### Part 5: Working with JSON (1 minute)

**Talking Points:**
"We used `JSON.stringify()` to display the object as text. JSON (JavaScript Object Notation) is a universal format for sending data between servers and browsers."

1. Open the Console tab in DevTools

2. Type this:
   ```javascript
   const data = { name: "Bob", age: 30, city: "Seattle" }
   JSON.stringify(data)
   ```

   **Result:** `'{"name":"Bob","age":30,"city":"Seattle"}'`

**Talking Points:**
"JSON converts the object to a string. This is useful for storing data, sending it over the internet, or displaying it."

3. Try the reverse:
   ```javascript
   const jsonString = '{"name":"Charlie","age":25}'
   JSON.parse(jsonString)
   ```

   **Result:** `{name: 'Charlie', age: 25}`

**Talking Points:**
"`JSON.parse()` converts a JSON string back into an object. APIs use JSON to send data. You'll parse JSON constantly in web development."

## Key Points to Emphasize

- **HTML, CSS, and JavaScript are the three layers:** HTML = structure, CSS = style, JavaScript = behavior. All three are essential.
- **JavaScript interacts with HTML:** Through `document`, you find elements, listen for events, and update content dynamically.
- **CSS makes things beautiful:** The same content with no CSS would be ugly. CSS transforms HTML into something professional.
- **The Network tab is your friend:** It shows what resources are loaded and how long everything takes. Essential for debugging and optimization.
- **JSON is universal:** It's how data moves around the web. Understand `JSON.stringify()` and `JSON.parse()`—you'll use them constantly.

## Common Questions

**Q: "Why did we create an object if we only needed the name?"**
A: Great question! In this demo, the object is extra. But in real apps, you might send this object to a server, store it in a database, or validate different parts of it. It's good practice to structure data this way. It also teaches you how real applications work.

**Q: "Can JavaScript modify CSS?"**
A: Absolutely! You can change colors, sizes, visibility, and more. `element.style.color = "red"` changes the color. We didn't do it here, but it's very common. You can also add/remove CSS classes with `element.classList.add()`.

**Q: "What if the Network tab shows an error (404, 500, etc.)?"**
A: That means a resource failed to load. 404 = file not found (maybe you misspelled the filename). 500 = server error. The page will either not work or partially work depending on what failed. This is why the Network tab is so important for debugging.

**Q: "Why use JSON.stringify() if the object displays fine in the console?"**
A: In the console, JavaScript displays objects nicely for you. But if you're sending data to a server, saving to a file, or displaying it on a web page (as text, not as an interactive object), you need the string version. JSON is the standard format.

**Q: "Is it bad that we put CSS in the HTML file instead of a separate file?"**
A: For learning, it's fine. For real projects, separate files are better—they're easier to maintain, reuse, and load. You'll see `.css` and `.js` files as separate files in professional projects. The principles are the same.
