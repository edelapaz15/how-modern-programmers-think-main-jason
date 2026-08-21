# Demo 32: VS Code Debugger

**Module:** VII
**Topic:** Hands-On Practice in VS Code
**Estimated Time:** 16 minutes
**Related reading:** [Hands-On Practice in VS Code](../docs/Module-07-Programming-Syntax-and-Logic/03-hands-on-practice-in-vs-code.md)

## Objective
Students will learn to set breakpoints, step through code execution, inspect variables during execution, and understand error messages by intentionally triggering TypeError and ReferenceError.

## Setup/Prerequisites
- VS Code installed and open
- Node.js installed
- The `js-demo` folder from Demo 31 (or create a new one)
- A simple JavaScript file ready to debug

## Step-by-Step Script

### Part 1: Creating a File to Debug (2 minutes)

**Talking Points:**
"Debugging is about understanding what your code is doing. When something doesn't work, you need to see inside the execution—watch variables change, pause at key points, step through line by line. That's what debugging tools do."

1. In VS Code, create a file called `debug.js`:

   ```javascript
   function calculateTotal(items) {
     let total = 0

     for (const item of items) {
       console.log(`Processing: ${item.name} - $${item.price}`)
       total += item.price
     }

     return total
   }

   const cartItems = [
     { name: "Laptop", price: 999 },
     { name: "Mouse", price: 25 },
     { name: "Keyboard", price: 75 }
   ]

   const total = calculateTotal(cartItems)
   console.log(`Total: $${total}`)
   ```

2. Save the file

**Talking Points:**
"This simple program calculates a cart total. We're going to debug it step by step, even though it works. Understanding how it works is the point."

### Part 2: Setting Breakpoints (2 minutes)

**Talking Points:**
"A breakpoint is a stop sign in your code. When JavaScript reaches it, execution pauses so you can inspect everything—variables, the call stack, everything frozen in time."

1. Click the line number area (left margin) of line 2 (`let total = 0`):

   **Visual Result:**
   - A red circle appears in the left margin on line 2
   - This is your breakpoint

**Talking Points:**
"Click the margin and the breakpoint appears. Click again to remove it. You can set as many as you want."

2. Set another breakpoint on line 6 (the `total += item.price` line)

**Talking Points:**
"Now we have two stop signs. The debugger will pause at each one."

### Part 3: Launching the Debugger (2 minutes)

**Talking Points:**
"In VS Code, you launch the debugger from the Run menu. It will start your program and pause at the first breakpoint."

1. Go to **Run** → **Start Debugging** (or press `F5`)

   **Dialog appears:**
   - "Select environment"
   - Choose **Node.js**

**Visual Result:**
- The debugger UI appears on the left side
- Execution pauses at your first breakpoint (line 2)
- A yellow highlight shows the current line

**Talking Points:**
"The program is frozen at the breakpoint. The yellow highlight shows exactly where we are. You can now inspect everything without the program moving."

### Part 4: Inspecting Variables (2 minutes)

**Talking Points:**
"The Variables panel on the left shows what every variable contains right now. Let's use it."

1. Look at the **Variables** panel (left side):
   - Expand **Local**
   - You'll see `items` already holding its array of 3, `total` sitting at `undefined`, and `this`.
   - **Talk point:** "Look at `total` — it says `undefined`. The line that assigns it hasn't run yet. We're paused *before* it. That's the whole idea of a breakpoint: the program is frozen mid-thought, and we get to look inside. Watch `total` change as we step."

2. Look for the **Watch** panel below Variables

3. Click the **+** icon to add a watch expression:
   ```javascript
   cartItems
   ```

**Visual Result:**
- The `cartItems` array appears in the Watch panel
- Click the arrow to expand it and see each item

**Talking Points:**
"Watching variables is powerful. As you step through code, you'll see these values change. It's like having X-ray vision into your program."

### Part 5: Stepping Through Code (3 minutes)

**Talking Points:**
"Now let's step through. You have buttons at the top of the debugger panel: Step Over, Step Into, Step Out, and Continue. These control how the debugger moves."

1. Click the **Step Over** button (or press `F10`):
   - Line 2 executes
   - The cursor moves to line 4 (the `for` loop)

**Talking Points:**
"Step Over means 'execute this line and move to the next.' Use it for normal stepping."

2. Step Over again (line 4):
   - The cursor moves inside the loop, to the `console.log` line

3. Look at the Variables panel again:
   - Expand **Local**
   - You should see `total: 0` and `item: { name: 'Laptop', price: 999 }`

**Talking Points:**
"Now we can see the variables! `total` is 0 (just initialized), and `item` is the first item in the array. The loop has started."

4. Step Over the `console.log` line

5. Step Over the `total += item.price` line (line 6):
   - Look at the Variables panel: `total` should now be `999`

**Talking Points:**
"The first item's price (999) has been added. Watch how variables change as you step."

6. Click **Continue** (or press `F5`):
   - The debugger runs until the next breakpoint (line 6, next iteration)
   - `item` is now the Mouse, `total` is 999

**Talking Points:**
"Continue lets you jump to the next breakpoint instead of stepping one line at a time. Mix stepping and continuing to debug efficiently."

**Talking Points:**
"Here's the thing to notice: our breakpoint is *inside* the loop, and there are three items in the cart. So the debugger is going to stop here three separate times — once per item. A breakpoint isn't 'stop once,' it's 'stop every single time execution reaches this line.' Ask them: how many more times will we have to hit Continue?"

7. Click **Continue** again:
   - The debugger stops at line 6 a **third** time — it has *not* finished
   - `item` is now the Keyboard, `total` is 1024 (999 + 25)

8. Click **Continue** one more time:
   - Now there are no more items, so no more breakpoint hits
   - The program completes and the debugger disconnects

**Console Output:**
```
Processing: Laptop - $999
Processing: Mouse - $25
Processing: Keyboard - $75
Total: $1099
```

### Part 6: Intentional Errors (3 minutes)

**Talking Points:**
"Now let's break the code on purpose so we can see what errors look like. Understanding error messages is crucial."

#### TypeError Example

1. Create a new file called `errors.js`:

   ```javascript
   const person = {
     name: "Alice",
     age: 30
   }

   // This will cause an error
   const upperName = person.toUpperCase()
   ```

2. Run it with Node.js in the terminal:
   ```bash
   node errors.js
   ```

**Error Output:**
```
TypeError: person.toUpperCase is not a function
    at Object.<anonymous> (/path/to/errors.js:7:26)
    ...
```

**Talking Points:**
"Let's read this error:
- **TypeError** is the type (wrong type of operation)
- **'person.toUpperCase is not a function'** is the message—we tried to call `toUpperCase()` on an object, but it's not a function
- The error occurred on line 7
- In reality, `toUpperCase()` is a string method, not an object method. The code should be `person.name.toUpperCase()`"

3. Fix it:
   ```javascript
   const upperName = person.name.toUpperCase()
   console.log(upperName)  // ALICE
   ```

   Run again:
   ```bash
   node errors.js
   ```

**Result:**
```
ALICE
```

**Talking Points:**
"The fix is simple—call the method on the string, not the object. Error messages tell you what went wrong. Learn to read them carefully."

#### ReferenceError Example

1. Modify `errors.js`:

   ```javascript
   // This will cause an error
   console.log(undefinedVariable)
   ```

2. Run it:
   ```bash
   node errors.js
   ```

**Error Output:**
```
ReferenceError: undefinedVariable is not defined
    at Object.<anonymous> (/path/to/errors.js:2:13)
    ...
```

**Talking Points:**
"**ReferenceError** means we're trying to use a variable that doesn't exist. This usually happens from:
- Typos (you meant `total` but wrote `totla`)
- Variables declared in a different scope (declared with `const` inside an if-block, used outside)
- Variables used before they're declared

Always check your variable names carefully."

3. Fix it:
   ```javascript
   const undefinedVariable = "Now it exists!"
   console.log(undefinedVariable)
   ```

   Run again:
   ```bash
   node errors.js
   ```

**Result:**
```
Now it exists!
```

#### Syntax Error Example

1. Modify `errors.js`:

   ```javascript
   const person = {
     name: "Alice"
     age: 30
   }
   ```

   Notice the missing comma after `name: "Alice"`

2. Run it:
   ```bash
   node errors.js
   ```

**Error Output:**
```
SyntaxError: Unexpected identifier 'age'
    at wrapSafe (node:internal/modules/cjs/loader:1804:18)
    ...
```

**Talking Points:**
"**SyntaxError** means the code isn't valid JavaScript. The parser (the thing reading your code) doesn't understand it. VS Code usually catches these with red squiggles before you even run the code. This is why linting tools (like ESLint, which we'll see next) are so useful—they catch errors before execution."

3. Fix it by adding the comma:
   ```javascript
   const person = {
     name: "Alice",
     age: 30
   }
   console.log(person)
   ```

   Run:
   ```bash
   node errors.js
   ```

**Result:**
```
{ name: 'Alice', age: 30 }
```

### Summary: Reading Error Messages

**Talking Points:**
"Errors are not the enemy. They're your friend—they tell you exactly what went wrong. When you see an error:
1. **Read the error type** (TypeError, ReferenceError, SyntaxError, etc.)
2. **Read the message** (it describes the problem)
3. **Look at the line number** (that's where the error was detected)
4. **Think about the cause** (typo? wrong method? missing variable?)
5. **Fix it and try again**

Every programmer reads error messages dozens of times a day. It's a core skill."

## Key Points to Emphasize

- **Breakpoints pause execution:** Set them in the margin. When the program reaches a breakpoint, it freezes so you can inspect everything.
- **The Variables and Watch panels show state:** These are your windows into what your program is doing at any moment.
- **Step Over vs Continue:** Step Over goes one line at a time (slow). Continue jumps to the next breakpoint (fast). Mix them strategically.
- **Errors are information:** TypeError, ReferenceError, SyntaxError—each tells you something specific. Learn to read them. They're not scary; they're helpful.
- **The debugger is your best friend:** When code doesn't work, the debugger shows you exactly what's happening. Use it!

## Common Questions

**Q: "Is debugging better than using console.log everywhere?"**
A: Both have their place! `console.log` is quick for simple checks. Debugging is powerful when you need to see everything at once or step through complex logic. For production code (code running on servers), you rely on logging. For development, use the debugger—it's faster than adding and removing logs.

**Q: "If I set a breakpoint and the line never executes, what happens?"**
A: The breakpoint just sits there, ignored. This is actually useful for debugging—if you expect a line to run but it doesn't, that tells you something is wrong with your logic. Set the breakpoint earlier to see why the code isn't reaching that point.

**Q: "Can I change variables in the debugger to test different values?"**
A: In some debuggers you can (more advanced IDEs). In VS Code's Node debugger, it's trickier. For now, the best practice is to pause, observe, understand, stop the debugger, modify your code, and run again.

**Q: "What if I have hundreds of console.log statements mixed in my code?"**
A: Great reason to use a debugger instead! Debugging is cleaner. But in real projects, you'll also see structured logging (frameworks handle logging automatically) and log files. For learning, the debugger is your best tool.
