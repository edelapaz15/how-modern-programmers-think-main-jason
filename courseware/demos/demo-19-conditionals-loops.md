# Demo 19: Conditionals and Loops — Control Flow Mastery

**Module:** V (Computational Thinking, Data Structures & Algorithms)
**Topic:** Control Flow Mastery
**Estimated Time:** 16 minutes
**Related reading:** [Control Flow Mastery](../docs/Module-05-Computational-Thinking-Data-Structures-Algorithms/03-control-flow-mastery.md)

---

## Objective

Students will understand how programs make decisions (conditional branching) and repeat actions (loops). By tracing through code step-by-step with specific inputs, they'll see that code execution isn't magic — it's a predictable sequence of decisions and iterations based on simple rules.

![A worked trace table beside a short loop, showing the value of i and total after each of five passes and the final printed result.](../diagrams/png/loop-trace-table.png)

*Project this as the *template*, then fill in a blank copy live. The filling-in is the demo.*

---

## Setup & Prerequisites

- **Browser with Developer Tools open** (F12 or right-click → Inspect → Console)
- **A whiteboard, notepad, or digital drawing tool** to manually trace values (this visual reinforcement is critical)
- **JavaScript console ready** — clear any previous output
- **Highlighter or different colored markers** to show variable changes across steps
- **Optional:** Have the code pre-written in a text editor so you can copy/paste if demo timing gets tight

---

## Step-by-Step Script

### Part 1: Introduction — How Computers Make Decisions (1 minute)

**Talking Points:**
> "At the heart of every program is a simple question: 'Should I do this, or that?' Conditional statements like `if`, `else if`, and `else` are how we program answers to that question. And loops — `for`, `while` — are how we repeat actions. Together, these two concepts are the scaffold of almost every algorithm you'll ever write."

> "Let's trace through a real example step by step. I'm going to walk you through the exact values of variables as the program runs. No guessing, no abstractions — just following the logic."

---

## Part 2: Conditional Branching with if/else if/else (6 minutes)

**On your whiteboard, set up a trace table:**

```
Line    condition          result      score    message
────────────────────────────────────────────────────────
```

**Type in the console:**

```javascript
const score = 78;
```

**Talking Points:**
> "I'm setting a variable `score` to 78. This represents a student's test score. Now let's write some logic that assigns a grade based on this score."

**Type the following code (or paste it):**

```javascript
let grade;

if (score >= 90) {
  grade = 'A';
  console.log('Entered the >= 90 block. Grade A.');
} else if (score >= 80) {
  grade = 'B';
  console.log('Entered the >= 80 block. Grade B.');
} else if (score >= 70) {
  grade = 'C';
  console.log('Entered the >= 70 block. Grade C.');
} else {
  grade = 'F';
  console.log('Entered the else block. Grade F.');
}

console.log('Final grade:', grade);
```

**Output:**
```text
Entered the >= 70 block. Grade C.
Final grade: C
```

**Talking Points (trace along on your whiteboard):**
> "Before we look at the output — how many 'Entered the...' lines do you expect to see? There are four blocks. Take a guess."

> "Let's walk through it together. We start with `score = 78`. The program checks the first condition: 'Is 78 greater than or equal to 90?' No, so we skip that entire block and move on. Nothing prints — the `console.log` for that grade lives *inside* the block, and we never went in."

> "Next: 'Is 78 greater than or equal to 80?' No again, skip it. Still nothing prints. Keep going."

> "Third condition: 'Is 78 greater than or equal to 70?' Yes! This is true, so we enter this block. We set `grade = 'C'` and run its `console.log` — and *that's* the one line you see. Now the important part: once we enter a block, we skip all the remaining `else if` and `else` blocks. We go straight to the end."

> "This is the key insight, and the output proves it: **exactly one** 'Entered' line printed, out of four possible blocks. `else if` chains are mutually exclusive. As soon as a condition is true, we execute that block and skip everything else. If you'd expected to see the skipped blocks announce themselves, that's the mental model to correct — a skipped block runs *no* code at all."

**Now change the input and re-run:**

> **Note:** This block re-declares `const score` and `let grade`. Browser consoles generally allow this at the top level (Chrome and Firefox both relax the rule as a convenience for exactly this kind of re-pasting), so you can usually just paste and go. If your console does object that `score` has already been declared, reload the page (F5) for a fresh session. In a real `.js` file you genuinely *cannot* declare the same `const` twice — that's a `SyntaxError: Identifier 'score' has already been declared`. We're only getting away with it because the console is a scratchpad.

```javascript
const score = 92;
let grade;

if (score >= 90) {
  grade = 'A';
  console.log('Entered the >= 90 block. Grade A.');
} else if (score >= 80) {
  grade = 'B';
  console.log('Entered the >= 80 block. Grade B.');
} else if (score >= 70) {
  grade = 'C';
  console.log('Entered the >= 70 block. Grade C.');
} else {
  grade = 'F';
  console.log('Entered the else block. Grade F.');
}

console.log('Final grade:', grade);
```

**Output:**
```text
Entered the >= 90 block. Grade A.
Final grade: A
```

**Talking Points:**
> "Same structure, but different input. Now with `score = 92`, the very first condition is true, so we set `grade = 'A'` and skip everything else. Again — exactly one 'Entered' line, but a *different* one. Same code, different path through it."

> "This shows the importance of order in `if/else if/else` chains. If you put a weaker condition first, you might never reach the stronger one. Ask them: what if `score >= 70` came first? Then 92 would match it and we'd hand out a C to a student who earned an A."

**Update your whiteboard trace to show both runs side-by-side.**

---

## Part 3: Loops — Iteration with Predictable Patterns (7 minutes)

**Talking Points:**
> "Now let's look at loops. A loop repeats a block of code multiple times. Instead of writing the same line over and over, we write it once and let the computer repeat it. Let's trace through a simple `for` loop step by step, watching how the loop variable changes."

**Type in the console:**

```javascript
console.log('--- FOR LOOP TRACE ---');
console.log('Goal: Print the first 5 numbers and their squares.\n');

for (let i = 0; i < 5; i++) {
  console.log('Iteration ' + i + ': i = ' + i + ', i squared = ' + (i * i));
}

console.log('\nLoop complete!');
```

**Output:**
```text
--- FOR LOOP TRACE ---
Goal: Print the first 5 numbers and their squares.

Iteration 0: i = 0, i squared = 0
Iteration 1: i = 1, i squared = 1
Iteration 2: i = 2, i squared = 4
Iteration 3: i = 3, i squared = 9
Iteration 4: i = 4, i squared = 16

Loop complete!
```

**Draw on your whiteboard:**

```
FOR Loop Anatomy: for (let i = 0; i < 5; i++)

Initialization: i = 0       ← Where do we start?
Condition:      i < 5       ← When do we stop?
Increment:      i++         ← How do we move forward?

┌─────────────────────────────────────────┐
│ Before loop: i = 0, check i < 5 (YES)   │
├─────────────────────────────────────────┤
│ Iteration 1: execute block, then i++    │
│ i = 0 → 1, check i < 5 (YES)            │
├─────────────────────────────────────────┤
│ Iteration 2: execute block, then i++    │
│ i = 1 → 2, check i < 5 (YES)            │
├─────────────────────────────────────────┤
│ Iteration 3: execute block, then i++    │
│ i = 2 → 3, check i < 5 (YES)            │
├─────────────────────────────────────────┤
│ Iteration 4: execute block, then i++    │
│ i = 3 → 4, check i < 5 (YES)            │
├─────────────────────────────────────────┤
│ Iteration 5: execute block, then i++    │
│ i = 4 → 5, check i < 5 (NO) ← EXIT!     │
└─────────────────────────────────────────┘
```

**Talking Points:**
> "Every `for` loop has three parts. First, initialization: `let i = 0` sets up the loop counter. Second, condition: `i < 5` decides when to stop. Third, increment: `i++` updates the counter after each iteration."

> "Here's what happens: We start with `i = 0`. We check, 'Is 0 less than 5?' Yes. Execute the block — we print stuff. Then increment: `i` becomes 1. Go back to the condition. 'Is 1 less than 5?' Yes. Execute again. Keep repeating until the condition is false."

> "When `i` becomes 5, we check, 'Is 5 less than 5?' No. The loop stops. We never execute the block with `i = 5`. This is crucial: the condition determines when we *stop*, not when we continue."

### Part 4: Nested Loops — Iterations Inside Iterations (3 minutes)

**Type in the console:**

```javascript
console.log('--- NESTED LOOP: Multiplication Table ---\n');

for (let row = 1; row <= 3; row++) {
  console.log('Row ' + row + ':');
  for (let col = 1; col <= 3; col++) {
    console.log('  Row ' + row + ' × Col ' + col + ' = ' + (row * col));
  }
}
```

**Output:**
```text
--- NESTED LOOP: Multiplication Table ---

Row 1:
  Row 1 × Col 1 = 1
  Row 1 × Col 2 = 2
  Row 1 × Col 3 = 3
Row 2:
  Row 2 × Col 1 = 2
  Row 2 × Col 2 = 4
  Row 2 × Col 3 = 6
Row 3:
  Row 3 × Col 1 = 3
  Row 3 × Col 2 = 6
  Row 3 × Col 3 = 9
```

**Talking Points:**
> "Here's something powerful: loops inside loops. The outer loop iterates once (row 1), and before moving to the next row, the inner loop completes all its iterations (col 1, 2, 3). Then the outer loop moves to row 2, and the inner loop repeats. This is how you build 2D patterns, tables, and grids in code."

> "Don't get intimidated by nesting. It's the same principle: check condition, execute block, increment, repeat. Just at two levels at once."

---

## Part 5: Quick Interactive Check (1 minute)

**Ask the students (give them 15-20 seconds to think):**

> "If I run this loop: `for (let x = 10; x > 5; x--) { }`, how many times does it execute, and what are the values of `x` each time?"

**Expected answer:** 5 times (x = 10, 9, 8, 7, 6). The condition is `x > 5`, so we stop when x becomes 5.

**Then show them:**

```javascript
for (let x = 10; x > 5; x--) {
  console.log('x = ' + x);
}
```

**Output:**
```javascript
x = 10
x = 9
x = 8
x = 7
x = 6
```

**Talking Points:**
> "Exactly. The loop runs 5 times. The condition `x > 5` means we continue as long as x is strictly greater than 5. When x equals 5, the condition is false, so we exit. This reinforces the principle: the condition determines when we *stop*."

---

## Key Points to Emphasize

- **Conditionals (if/else if/else) are mutually exclusive** — only one branch executes. The order matters. As soon as a condition is true, the program skips all remaining branches.
- **Loops have three critical parts** — initialization (where to start), condition (when to stop), and increment (how to move forward). Understand these, and you understand the loop.
- **Conditions are checked at the beginning of each iteration** — if the condition is false, the loop body doesn't execute, even once. This is why off-by-one errors exist — the boundary matters.
- **Tracing through code manually is a superpower** — you don't need to memorize syntax. You just need to follow the rules: check condition, execute block, increment, repeat. Do that enough times, and the pattern becomes intuitive.

---

## Common Questions

**Q: Why do we use `i++` in loops instead of `i = i + 1`?**
> A: They do the exact same thing. `i++` is shorthand — it's the "increment operator." Programmers use it because it's faster to type and is an industry convention. You'll see it everywhere. Both work; `i++` is just the professional standard.

**Q: Can I have a loop that runs a different number of times based on a condition?**
> A: Yes! You could use a `while` loop instead of a `for` loop. Or you could break out of a loop early using `break`. For now, `for` loops are predictable — you know exactly how many times they'll run. `while` loops are more flexible but require more careful setup to avoid infinite loops.

**Q: What happens if I accidentally write `i < 5` and it's never true — like if I started with `i = 10`?**
> A: The loop body never executes. The condition is checked before each iteration, including the first one. If it's false from the start, the block is skipped entirely. This is the safety mechanism that prevents infinite loops — but it's also why paying attention to your initial values is critical.
