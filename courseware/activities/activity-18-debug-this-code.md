# Activity 18: Debug This Code

**Module:** VII (Programming Syntax & Logic)
**Related reading:** [JavaScript Fundamentals](../docs/Module-07-Programming-Syntax-and-Logic/02-javascript-fundamentals.md), [Hands-On Practice in VS Code](../docs/Module-07-Programming-Syntax-and-Logic/03-hands-on-practice-in-vs-code.md)

---

## Objective

Identify, fix, and explain five bugs in JavaScript code snippets. Debugging is one of the most important skills a programmer develops—in fact, experienced programmers spend more time fixing broken code than writing new code. By the end of this activity, you'll understand how to approach a broken program systematically, find the problem, and fix it without guessing.

---

## Background

Code breaks in predictable ways. Sometimes you'll write code that has a syntax error (the computer can't understand it). Sometimes the code runs, but the logic is wrong (it does something, just not what you intended). Sometimes a variable doesn't exist, or a function doesn't return what you expect. These bugs range from trivial to tricky, but they all follow patterns.

In your programming career, you'll spend about 70% of your time reading code and debugging it. So this skill—the ability to read broken code, identify the problem, and fix it—is worth developing carefully. You'll get faster at this as you practice.

In this activity, you're given five buggy code snippets. For each one, you'll:
1. Read the code and understand what it's supposed to do
2. Identify the bug
3. Explain why it's a bug
4. Fix it
5. Test it to prove your fix works

This is real debugging work.

---

## Step-by-Step Instructions

### Setup

1. **Create a new file** called `debug-practice.js`.
2. **Copy each buggy snippet below into the file**, one at a time.
3. **For each snippet:**
   - Run it in Node.js: `node debug-practice.js`
   - Observe the error or incorrect output
   - Identify the bug
   - Fix the code
   - Run it again to confirm
4. **Keep your fixed version** and move to the next snippet

---

## The Five Bugs

### Bug #1: Syntax Error (Missing Bracket)

**The Buggy Code:**
```javascript
function countToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    // Missing closing brace!
}

countToTen();
```

**What it's supposed to do:**
Print the numbers 1 through 10, one per line.

**Expected output:**
```
1
2
3
4
5
6
7
8
9
10
```

**Your Task:**
1. Identify the bug (it's a syntax error).
2. Explain what's missing.
3. Fix the code and run it.
4. Record your answer below in your deliverable.

---

### Bug #2: Logic Error (Off-by-One)

**The Buggy Code:**
```javascript
function getGrades() {
    const grades = [85, 92, 78, 95, 88, 91];

    for (let i = 1; i <= grades.length; i++) {
        console.log("Grade " + i + ": " + grades[i]);
    }
}

getGrades();
```

**What it's supposed to do:**
Print each grade in the array with its position (Grade 1: 85, Grade 2: 92, etc.).

**Expected output:**
```
Grade 1: 85
Grade 2: 92
Grade 3: 78
Grade 4: 95
Grade 5: 88
Grade 6: 91
```

**Your Task:**
1. Run the code and compare its output to the expected output above, line by line. Only the *last* line is obviously broken (`Grade 6: undefined`) — the five lines above it look perfectly reasonable, but every one of them reports the wrong grade. This is the dangerous kind of bug: it mostly *looks* like it works.
2. Identify the bug (hint: arrays are zero-indexed, not one-indexed).
3. Explain why starting at `i = 1` causes a problem.
4. Fix the code. (There are two ways to fix this—either adjust the loop or adjust the array access.)
5. Verify it works.

---

### Bug #3: Type Comparison Error

**The Buggy Code:**
```javascript
function checkAge(userAge) {
    const ageFromForm = "21"; // This comes from a web form as a string

    if (userAge == ageFromForm) {
        console.log("You are 21!");
    } else {
        console.log("Your age is: " + userAge);
    }
}

checkAge(21);
```

**What it's supposed to do:**
Check if the user's age is 21. If so, print "You are 21!". Otherwise, print their age.

**Expected output when checkAge(21) is called:**
```
You are 21!
```

> **This one is different from the others.** The code above already prints the expected output. That's exactly what makes it interesting — this is a bug that *hasn't bitten yet*. Work through the steps in order and don't skip ahead.

**Your Task:**
1. Run the code. Notice it prints `You are 21!` — the output we wanted. So is there even a bug here?
2. Look at the types, not the output. `userAge` is the **number** `21`. `ageFromForm` is the **string** `"21"`. Those are not the same value — but `==` says they are, because it silently converts one type into the other before comparing.
3. Explain the difference between `==` (loose, converts types first) and `===` (strict, compares type *and* value).
4. Change `==` to `===` and run it again. **The output changes to `Your age is: 21`.** Your "fix" appears to have broken the code. Stop here and think about why before moving on.
5. Here's the insight: `===` did not create a bug. It **exposed** one that `==` was papering over. The real defect was there all along — you're comparing a number to a string. Loose equality was hiding it, and it would have surprised you later with a value like `"21abc"` or `""`.
6. Now fix it properly: convert the form value to a number with `Number()` so both sides are genuinely the same type, and keep `===`. Verify you get `You are 21!` again — this time for the right reason.

**Reflection for this bug:** Why is a bug that produces the *correct* output still a bug? What would have to change about the input for it to start failing?

---

### Bug #4: Undefined Variable Reference

**The Buggy Code:**
```javascript
function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const taxRate = 0.08;

    // Oops, typo in variable name:
    const tax = subtotal * taxrate; // Should be 'taxRate'
    const total = subtotal + tax;

    return total;
}

console.log(calculateTotal(25, 4)); // Should print 108
```

**What it's supposed to do:**
Calculate the total cost of an item after 8% sales tax.

**Expected output:**
```
108
```

**Your Task:**
1. Run the code. You'll get an error about `taxrate` not being defined.
2. Identify the bug (case sensitivity).
3. Explain why JavaScript cares about uppercase vs. lowercase.
4. Fix the typo.
5. Verify it prints the correct total.

---

### Bug #5: Function Return Issue

**The Buggy Code:**
```javascript
function filterExpensiveItems(items) {
    const expensive = [];

    for (let i = 0; i < items.length; i++) {
        if (items[i].price > 100) {
            expensive.push(items[i]);
        }
    }

    // The function doesn't return anything!
}

const products = [
    { name: "Widget", price: 45 },
    { name: "Gadget", price: 150 },
    { name: "Tool", price: 200 },
    { name: "Part", price: 30 }
];

const result = filterExpensiveItems(products);
console.log(result); // Should print array of expensive items, but prints undefined
```

**What it's supposed to do:**
Filter an array of products to find only those over $100 and return them.

**Expected output:**
```
[ { name: 'Gadget', price: 150 }, { name: 'Tool', price: 200 } ]
```

(Exactly how this is laid out depends on where you run it — Node prints it on one line when it's short enough to fit, while the browser console shows a collapsed `▶ (2) [{…}, {…}]` you can click to expand. The *contents* are what matter: two products, Gadget and Tool.)

**Your Task:**
1. Run the code. Notice it prints `undefined`.
2. Identify the bug (missing `return` statement).
3. Explain why the function builds the `expensive` array but the caller doesn't get it.
4. Add a `return` statement.
5. Verify it prints the correct result.

---

## Expected Deliverable

A document (can be a `.txt`, `.md`, or even a comment in your `debug-practice.js`) that includes:

**For each of the 5 bugs:**
1. **The Bug Name** (e.g., "Bug #1: Syntax Error")
2. **What the code was trying to do** (in your own words)
3. **The actual bug** (describe it clearly)
4. **Why it's a problem** (explain the consequence)
5. **The fixed code** (write out the corrected lines)
6. **Verification** (the correct output you got when you ran it)

**Example format:**

---
**Bug #1: Missing Closing Brace**

What it's supposed to do: Print numbers 1-10.

The actual bug: The function is missing a closing brace `}`.

Why it's a problem: JavaScript can't parse the code. The interpreter doesn't know where the function ends.

The fixed code:
```javascript
function countToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
```

Verification: Ran the code and got output 1 through 10.

---

Also include your corrected `debug-practice.js` file with all five bugs fixed and running without errors.

---

## Reflection Questions

1. **Which bug was easiest to find?** Which was hardest? Why? What does that tell you about debugging strategies?

2. **Think about a time in this course when your code didn't work.** Did you encounter any of these types of bugs? How would you recognize them faster next time?

3. **Debugging is often called "reading error messages."** For the bugs that produced error messages, what did the error tell you? Did it point you straight to the problem, or did you have to interpret it?

---

## Tips for Success

- **Read the error message first.** JavaScript's error messages tell you the line number and what went wrong. Pay attention to them.
- **Test in small pieces.** If a function isn't working, test the individual lines inside it using `console.log()`.
- **Compare to working code.** Look at other code you've written that works. What's different about the broken version?
- **Rubber duck debugging.** Sometimes, just reading the code out loud to yourself (or even to a rubber duck) helps you spot the problem.
- **Don't get frustrated.** Every programmer spends time debugging. This is skill-building, not failure.

You're learning one of the most valuable skills in programming: the ability to fix things. That's what being a programmer actually is, most of the time.

---

> ### 🚀 If you finish early (stretch)
>
> - **Break it on purpose.** Write a sixth buggy snippet of your own (e.g., a function that mutates an array when it shouldn't), then hand it to a classmate to find the bug.
> - **Predict before you run.** For each fixed snippet, write down the *exact* output you expect, then run it. Were you right? A correct mental model is the real goal.
> - **Generalize Bug #3.** Add a few more `checkAge()` test calls — `"21"`, `21.0`, `" 21 "` — and note which ones pass with `===` and why.

> ### 🆘 If you get stuck
>
> - **Read the error message, line number first.** Bug #1 and Bug #4 throw real errors that name the line and the problem (`SyntaxError`, `ReferenceError: taxrate is not defined`). Start exactly there.
> - **`console.log()` the suspect value.** For the silent bugs (#2 and #5, which print `undefined`), log the variable or array index right before it's used — `console.log(grades[i])` or `console.log(expensive)` — to see what the code actually has.
> - **Compare against the "supposed to do" output.** Each snippet states its expected output. Diff your actual output against it line by line; the first line that differs points at the bug.
> - **Ask an AI assistant to *explain* the error, then verify.** Paste the error or the wrong output and ask "why does this happen?" Read the explanation, make the fix yourself, and re-run to confirm — don't just paste back its code.

---

<details>
<summary><strong>Instructor Answer Key</strong> (click to expand)</summary>

The corrected version of each snippet, with a one-line note on the bug and its fix.

**Bug #1 — Missing closing brace.** The `for` loop's block is never closed, so the function brace is consumed by the loop and the program fails to parse. *Fix:* add the closing `}` for the loop.

```javascript
function countToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    } // <-- added: close the for loop
}

countToTen();
// Prints 1 through 10, one per line
```

**Bug #2 — Off-by-one loop bounds.** Arrays are zero-indexed, so starting at `i = 1` and running while `i <= grades.length` skips `grades[0]` and reads `grades[6]` (which is `undefined`). *Fix:* start at `i = 0` and run while `i < grades.length`; use `i + 1` for the human-readable position.

```javascript
function getGrades() {
    const grades = [85, 92, 78, 95, 88, 91];

    for (let i = 0; i < grades.length; i++) {
        console.log("Grade " + (i + 1) + ": " + grades[i]);
    }
}

getGrades();
// Grade 1: 85 ... Grade 6: 91
```

**Bug #3 — Loose vs. strict equality.** `==` coerces types, so the number `21` and the string `"21"` compare as equal — which hides a real type mismatch.

**Instructor note — this one is deliberately counterintuitive, and students will get stuck at step 4.** The starting code already prints the correct output, and swapping `==` for `===` makes the output *wrong*:

```javascript
if (userAge === ageFromForm) {   // 21 === "21" is false
    ...
}
checkAge(21);
// Your age is: 21     <-- looks broken!
```

That is the intended experience, not a mistake in the exercise. Let them sit in it for a moment — the teaching point is that `===` **revealed** a latent defect rather than causing one. Listen for students who conclude "so `==` was better" and redirect: `==` was hiding a real type mismatch that would eventually bite with a value like `"21abc"` (which `Number()` turns into `NaN`) or `""` (which loosely equals `0`).

*Complete fix:* convert the form value to a number **and** use `===`, so the comparison is both strict and correct.

```javascript
function checkAge(userAge) {
    const ageFromForm = Number("21"); // convert string -> number

    if (userAge === ageFromForm) {     // strict comparison
        console.log("You are 21!");
    } else {
        console.log("Your age is: " + userAge);
    }
}

checkAge(21);
// You are 21!
```

**Bug #4 — Variable name typo (case sensitivity).** `taxrate` is not the same identifier as `taxRate`, so referencing it throws a `ReferenceError`. *Fix:* match the case exactly — `taxRate`.

```javascript
function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const taxRate = 0.08;

    const tax = subtotal * taxRate; // fixed: taxRate, not taxrate
    const total = subtotal + tax;

    return total;
}

console.log(calculateTotal(25, 4)); // 108
```

**Bug #5 — Missing return statement.** The function builds the `expensive` array but never returns it, so the caller receives `undefined`. *Fix:* return `expensive` at the end.

```javascript
function filterExpensiveItems(items) {
    const expensive = [];

    for (let i = 0; i < items.length; i++) {
        if (items[i].price > 100) {
            expensive.push(items[i]);
        }
    }

    return expensive; // fixed: actually return the result
}

const products = [
    { name: "Widget", price: 45 },
    { name: "Gadget", price: 150 },
    { name: "Tool", price: 200 },
    { name: "Part", price: 30 }
];

const result = filterExpensiveItems(products);
console.log(result);
// [ { name: 'Gadget', price: 150 }, { name: 'Tool', price: 200 } ]
```

</details>
