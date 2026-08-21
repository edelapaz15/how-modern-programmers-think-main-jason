# Demo 28: Conditionals, Loops, and Functions

**Module:** VII
**Topic:** JavaScript Fundamentals
**Estimated Time:** 16 minutes
**Related reading:** [JavaScript Fundamentals](../docs/Module-07-Programming-Syntax-and-Logic/02-javascript-fundamentals.md)

## Objective
Students will learn to write conditional logic with `if/else`, iterate over arrays with `for` and `for...of` loops, and define functions both as declarations and arrow functions. All examples will be typed and executed live in the console.

## Setup/Prerequisites
- Google Chrome with DevTools open and Console tab active
- Students should have completed Demo 27 (Console & Variables)
- Blank page at `about:blank`

## Step-by-Step Script

### If/Else Conditionals (3 minutes)

**Talking Points:**
"Programs need to make decisions. 'If this is true, do that. Otherwise, do this.' That's the foundation of all conditional logic. Let's write a simple grade evaluator."

1. Declare a variable for a grade:
   ```javascript
   const grade = 85
   ```

2. Write a simple if/else:
   ```javascript
   if (grade >= 90) {
     console.log("A - Excellent!")
   } else if (grade >= 80) {
     console.log("B - Good!")
   } else if (grade >= 70) {
     console.log("C - Okay")
   } else {
     console.log("F - Need to improve")
   }
   ```
   **Result:** Prints `B - Good!` to the console

**Talking Points:**
"Notice the structure: `if` the condition is true, we run the code in curly braces. If not, we check the next condition with `else if`. Finally, `else` handles everything that doesn't match. Let's test it with a different grade."

3. Change the grade and run the logic again:
   ```javascript
   const grade2 = 95
   ```

   ```javascript
   if (grade2 >= 90) {
     console.log("A - Excellent!")
   } else if (grade2 >= 80) {
     console.log("B - Good!")
   } else if (grade2 >= 70) {
     console.log("C - Okay")
   } else {
     console.log("F - Need to improve")
   }
   ```
   **Result:** Prints `A - Excellent!`

**Talking Points:**
"See how the logic is reusable? We change the input and the program makes the right decision. That's how most software works—conditions and decisions based on data."

### For Loop Over an Array (3 minutes)

**Talking Points:**
"Now let's loop through a collection of values. A `for` loop runs code repeatedly, often to process each item in a list."

1. Create an array of numbers:
   ```javascript
   const scores = [72, 88, 91, 76, 95]
   ```

2. Write a traditional for loop:
   ```javascript
   for (let i = 0; i < scores.length; i++) {
     console.log(`Score ${i}: ${scores[i]}`)
   }
   ```
   **Result:**
   ```
   Score 0: 72
   Score 1: 88
   Score 2: 91
   Score 3: 76
   Score 4: 95
   ```

**Talking Points:**
"This loop has three parts in the parentheses: initialize `i` to 0, keep looping while `i < scores.length`, and increment `i` by 1 each iteration. It's a pattern you'll see everywhere. Notice that array indices start at 0—that's a JavaScript tradition."

### For...Of Loop (2 minutes)

**Talking Points:**
"Honestly? Modern JavaScript offers something cleaner. If you just want each item without caring about the index, use `for...of`. It's more readable."

1. Use a for...of loop:
   ```javascript
   for (const score of scores) {
     console.log(`Score: ${score}`)
   }
   ```
   **Result:**
   ```
   Score: 72
   Score: 88
   Score: 91
   Score: 76
   Score: 95
   ```

**Talking Points:**
"See how much simpler that reads? 'For each score in scores, log it.' It's more like natural English. This is the modern, preferred way unless you specifically need the index."

### Function Declaration (3 minutes)

**Talking Points:**
"Functions are reusable blocks of code. You write them once, then call them whenever you need them. Let's write a function that calculates the average of an array."

1. Define a function with the `function` keyword:
   ```javascript
   function calculateAverage(numbers) {
     let sum = 0
     for (const num of numbers) {
       sum += num
     }
     return sum / numbers.length
   }
   ```
   **Result:** `undefined` (declaring a function returns undefined)

**Talking Points:**
"Notice the parts: the `function` keyword, the name `calculateAverage`, parameters in parentheses (`numbers`), and the body in curly braces. Inside, we loop through each number, add them up, and `return` the average. When we `return`, the function stops and gives us the result."

2. Call the function:
   ```javascript
   calculateAverage(scores)
   ```
   **Result:** `84.4`

3. Call it with a different array:
   ```javascript
   const testScores = [100, 95, 92]
   calculateAverage(testScores)
   ```
   **Result:** `95.66666666666667`

**Talking Points:**
"See? We wrote the logic once, and now we can use it on any array of numbers. That's the power of functions—they're the building blocks of reusable code."

### Arrow Functions (3 minutes)

**Talking Points:**
"JavaScript also has a modern syntax called 'arrow functions'—they're shorter and feel more like mathematical functions. Let's write the same function in this newer style."

1. Write the same function as an arrow function:
   ```javascript
   const calculateAverageArrow = (numbers) => {
     let sum = 0
     for (const num of numbers) {
       sum += num
     }
     return sum / numbers.length
   }
   ```
   **Result:** `undefined`

**Talking Points:**
"Instead of the `function` keyword, we use `const`, a name, an equals sign, parentheses for parameters, an arrow `=>`, and then the body. They do the same thing, but this syntax is more modern and concise."

2. Call it:
   ```javascript
   calculateAverageArrow(scores)
   ```
   **Result:** `84.4`

**Talking Points:**
"Same result! When you're reading code, you'll see both. The old `function` declaration and modern arrow functions both appear in real codebases. They're mostly interchangeable, though arrow functions have some subtle differences we'll skip for now."

3. Show a really concise arrow function (for contrast):
   ```javascript
   const double = (x) => x * 2
   ```

   ```javascript
   double(5)
   ```
   **Result:** `10`

**Talking Points:**
"When a function is super simple and returns one value, you can skip the curly braces and write it in a single line. That's JavaScript being flexible—you can be verbose and clear, or short and pithy."

## Key Points to Emphasize

- **Conditionals make decisions:** `if`, `else if`, and `else` let your program respond to different data and situations. This is how programs "think."
- **Loops automate repetition:** Manually processing each item in a list is error-prone. Loops handle it reliably. Prefer `for...of` unless you specifically need the index.
- **Functions are reusable logic:** Write once, use many times. A good function has one clear job and can be called with different inputs to produce different outputs.
- **Arrow functions are modern JavaScript:** You'll see both function declarations and arrow functions in real code. They're equivalent for most purposes, but arrow functions are increasingly the norm.

## Common Questions

**Q: "Why do we use `let i = 0` and `i++` in a for loop? Can't we just say 'do this 5 times'?"**
A: Great observation! Some languages do have a simpler syntax. JavaScript's `for` loop gives you complete control: you decide where to start, when to stop, and how to increment. This flexibility is powerful, but it does take practice. If you just want to loop through a list, that's why `for...of` exists—it's simpler.

**Q: "When should I use a function declaration versus an arrow function?"**
A: Both work! Most modern JavaScript code leans toward arrow functions because they're shorter. If you're reading older code or working on a team with a specific style, follow what's there. The important thing is knowing what both do so you can read any code.

**Q: "What does `sum += num` mean?"**
A: It's shorthand for `sum = sum + num`. The `+=` operator adds the right side to the variable and stores the result back. It saves typing and is very common. You'll also see `-=`, `*=`, `/=`, and others.

**Q: "If `for...of` is simpler, when would I ever use a traditional `for` loop?"**
A: `for...of` works great for just accessing values, but if you need the index (position) of each item, or if you need more control over the iteration, the traditional `for` loop is better. For example, if you want to skip every other item or start from the middle of the array, you'd use a traditional `for` loop.
