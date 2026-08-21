# Demo 29: Arrays and Array Methods

**Module:** VII
**Topic:** JavaScript Fundamentals
**Estimated Time:** 15 minutes
**Related reading:** [JavaScript Fundamentals](../docs/Module-07-Programming-Syntax-and-Logic/02-javascript-fundamentals.md)

## Objective
Students will learn to create arrays, use essential array methods (`push`, `pop`, `length`), and understand higher-order array methods (`map`, `filter`, `forEach`) with arrow functions. They'll also see method chaining in action.

## Setup/Prerequisites
- Google Chrome with DevTools open and Console tab active
- Students should have completed Demos 27 and 28
- Blank page at `about:blank`

## Step-by-Step Script

### Creating Arrays and Basic Properties (2 minutes)

**Talking Points:**
"An array is an ordered list of values. Think of it as a box with numbered slots, each holding something. In JavaScript, you create an array with square brackets."

1. Create an array of numbers:
   ```javascript
   const numbers = [10, 20, 30, 40, 50]
   ```

2. View the array:
   ```javascript
   numbers
   ```
   **Result:** `(5) [10, 20, 30, 40, 50]`

3. Access individual items by index:
   ```javascript
   numbers[0]
   ```
   **Result:** `10`

   ```javascript
   numbers[2]
   ```
   **Result:** `30`

**Talking Points:**
"Remember, indexing starts at 0. The first item is at index 0, the second at index 1, and so on. This is standard across almost all programming languages."

4. Check the length:
   ```javascript
   numbers.length
   ```
   **Result:** `5`

**Talking Points:**
"The `length` property tells us how many items are in the array. It's incredibly useful for loops and validations."

### The Push and Pop Methods (2 minutes)

**Talking Points:**
"Arrays are dynamic—they can grow and shrink. Two fundamental methods are `push` (add to the end) and `pop` (remove from the end)."

1. Use `push` to add an item:
   ```javascript
   numbers.push(60)
   ```
   **Result:** `6` (returns the new length)

2. View the updated array:
   ```javascript
   numbers
   ```
   **Result:** `(6) [10, 20, 30, 40, 50, 60]`

3. Use `pop` to remove the last item:
   ```javascript
   numbers.pop()
   ```
   **Result:** `60` (returns the removed value)

4. View the array again:
   ```javascript
   numbers
   ```
   **Result:** `(5) [10, 20, 30, 40, 50]`

**Talking Points:**
"Notice that `push` returns the new length, and `pop` returns the value that was removed. This is useful if you want to capture what was deleted or know the new size after adding."

### The forEach Method (2 minutes)

**Talking Points:**
"Now we get into powerful array methods. `forEach` runs a function on each item in the array. It's like a loop, but with a function built in."

1. Use `forEach` with an arrow function:
   ```javascript
   numbers.forEach((num) => {
     console.log(num * 2)
   })
   ```
   **Result:**
   ```
   20
   40
   60
   80
   100
   ```

**Talking Points:**
"Here, we give `forEach` an arrow function. For each item (we call it `num`), the function runs and logs that number times 2. The beauty is we don't need to manually manage the loop variable—`forEach` handles it."

2. Use `forEach` with an index:
   ```javascript
   numbers.forEach((num, index) => {
     console.log(`Index ${index}: ${num}`)
   })
   ```
   **Result:**
   ```
   Index 0: 10
   Index 1: 20
   Index 2: 30
   Index 3: 40
   Index 4: 50
   ```

**Talking Points:**
"If you need the index, `forEach` passes it as a second parameter. Notice we didn't change our array—`forEach` is for doing something with each item, not transforming the array itself."

### The Map Method (3 minutes)

**Talking Points:**
"Now here's something cool: `map` is like `forEach`, but instead of just doing something with each item, it creates a new array with transformed values. It's for transformation."

1. Create a new array by doubling each value:
   ```javascript
   const doubled = numbers.map((num) => num * 2)
   ```
   **Result:** `undefined` (the assignment returns undefined)

2. View the new array:
   ```javascript
   doubled
   ```
   **Result:** `(5) [20, 40, 60, 80, 100]`

3. Note that the original is unchanged:
   ```javascript
   numbers
   ```
   **Result:** `(5) [10, 20, 30, 40, 50]`

**Talking Points:**
"This is key: `map` doesn't change the original array. It creates a brand new one with the transformed values. This is called 'immutability,' and it's a big deal in modern JavaScript because it prevents bugs."

4. Use map with strings:
   ```javascript
   const names = ["alice", "bob", "charlie"]
   ```

   ```javascript
   const capitalized = names.map((name) => name.toUpperCase())
   ```

   ```javascript
   capitalized
   ```
   **Result:** `(3) ['ALICE', 'BOB', 'CHARLIE']`

**Talking Points:**
"See? `map` works on any array. Here we transformed strings to uppercase. The general pattern is: `map` takes your array, does something to each item, and gives you a new array back."

### The Filter Method (3 minutes)

**Talking Points:**
"If `map` is about transformation, `filter` is about selection. It keeps only the items that pass a test."

1. Create an array of numbers:
   ```javascript
   const scores = [45, 67, 92, 34, 88, 71, 95]
   ```

2. Filter for passing grades (70 or above):
   ```javascript
   const passing = scores.filter((score) => score >= 70)
   ```

3. View the result:
   ```javascript
   passing
   ```
   **Result:** `(4) [92, 88, 71, 95]`

**Talking Points:**
"The `filter` method runs the condition `score >= 70` on each item. If it's true, the item is kept. If it's false, it's excluded. The result is a new array with only the passing scores."

4. Filter for students in a specific age range:
   ```javascript
   const people = [
     { name: "Alice", age: 25 },
     { name: "Bob", age: 32 },
     { name: "Charlie", age: 28 },
     { name: "Diana", age: 35 }
   ]
   ```

   ```javascript
   const twenties = people.filter((person) => person.age >= 20 && person.age < 30)
   ```

   ```javascript
   twenties
   ```
   **Result:**
   ```
   (2) [
     { name: 'Alice', age: 25 },
     { name: 'Charlie', age: 28 }
   ]
   ```

**Talking Points:**
"Notice we used an object with properties and an `&&` (AND) operator. `filter` is incredibly flexible—your condition can be as complex as you need."

### Method Chaining (3 minutes)

**Talking Points:**
"Here's where it gets elegant. Since `map` and `filter` both return arrays, you can chain them together—run one after another on the same line."

1. Chain filter and map:
   ```javascript
   const result = scores
     .filter((score) => score >= 70)
     .map((score) => Math.round(score * 1.1 * 10) / 10)
   ```

2. View the result:
   ```javascript
   result
   ```
   **Result:** `(4) [101.2, 96.8, 78.1, 104.5]`

**Talking Points:**
"This reads like a recipe: 'Take scores, filter for those 70 or above, then map over those to boost them by 10%.' Each method passes its result to the next. It's powerful and reads like you're describing what you want to do with the data."

**Talking Points:**
"One heads-up: if we'd written `.map((score) => score * 1.1)` without rounding, you'd see values like `96.80000000000001` instead of `96.8`. That's not a bug—it's how computers store decimals in binary (floating-point). The `Math.round(...* 10) / 10` trick rounds to one decimal place to keep the output clean."

3. Show a more complex chain:
   ```javascript
   const complex = people
     .filter((person) => person.age >= 30)
     .map((person) => person.name)
   ```

   ```javascript
   complex
   ```
   **Result:** `(2) ['Bob', 'Diana']`

**Talking Points:**
"We filtered for people aged 30 or older—just Bob (32) and Diana (35) qualify—then mapped to just their names. This is how real JavaScript code works—building up complex operations by chaining simple methods. It's clean, readable, and efficient."

## Key Points to Emphasize

- **Arrays are fundamental:** They're how you store and manage collections of data. Arrays in JavaScript are flexible and can contain mixed types.
- **`forEach` is for side effects:** Use it when you want to do something with each item (logging, updating, etc.) but don't need a new array back.
- **`map` is for transformation:** Use it when you want to create a new array with modified values. Always returns a new array.
- **`filter` is for selection:** Use it to pick items that pass a condition. Works with any boolean test.
- **Method chaining is elegant:** Because these methods return arrays, you can chain them together. It reads naturally and solves complex problems in a single expression.

## Common Questions

**Q: "Why use `map` instead of a `for` loop? They both iterate over arrays."**
A: Both work! `map` is more about intent and less error-prone. When someone sees `map`, they immediately know you're transforming data. A `for` loop requires reading the entire loop body to understand what you're doing. Also, `map` returns a new array, making your code safer—you're less likely to accidentally modify the original data.

**Q: "Can I combine `map` and `filter` in any order?"**
A: Yes! Though the order affects the result. If you filter first, you do less work (fewer items to transform). If you map first, you transform everything and then filter. For performance, filter first. For logic, it depends on what you're trying to do.

**Q: "What if my array is empty? Do these methods break?"**
A: Nope! They just don't run the function or return empty results. `[].map(x => x)` gives you `[]`. `[].filter(x => true)` gives you `[]`. Empty arrays are handled gracefully.

**Q: "Do `map`, `filter`, and `forEach` work the same way on objects?"**
A: Objects are different from arrays. Arrays are for lists; objects are for key-value pairs. If you need these methods on object properties, you'd convert to an array first (like `Object.values()` or `Object.entries()`), then use the methods. We'll see more about objects in the next demo!
