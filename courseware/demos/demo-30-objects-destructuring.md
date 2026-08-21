# Demo 30: Objects and Destructuring

**Module:** VII
**Topic:** JavaScript Fundamentals
**Estimated Time:** 14 minutes
**Related reading:** [JavaScript Fundamentals](../docs/Module-07-Programming-Syntax-and-Logic/02-javascript-fundamentals.md)

## Objective
Students will learn to create and work with JavaScript objects, access properties using dot and bracket notation, call methods on objects, and use destructuring assignment to elegantly extract values.

## Setup/Prerequisites
- Google Chrome with DevTools open and Console tab active
- Students should have completed Demos 27–29
- Blank page at `about:blank`

## Step-by-Step Script

### Creating Object Literals (2 minutes)

**Talking Points:**
"If arrays are ordered lists, objects are collections of labeled data. Each piece of data has a name (called a 'key' or 'property') and a value. Think of an object like a real-world object—a person has a name, age, email, and so on."

1. Create a simple object:
   ```javascript
   const person = {
     name: "Sarah",
     age: 29,
     email: "sarah@example.com",
     city: "Portland"
   }
   ```

2. View the object:
   ```javascript
   person
   ```
   **Result:**
   ```
   {name: 'Sarah', age: 29, email: 'sarah@example.com', city: 'Portland'}
   ```

**Talking Points:**
"See the structure? We use curly braces, list properties as `key: value` pairs separated by commas. This is an object literal—a quick way to create an object right in your code."

### Accessing Properties with Dot Notation (2 minutes)

**Talking Points:**
"Now let's access the data. The most common way is dot notation: you write the object name, a dot, and the property name."

1. Access properties with dot notation:
   ```javascript
   person.name
   ```
   **Result:** `'Sarah'`

   ```javascript
   person.age
   ```
   **Result:** `29`

   ```javascript
   person.city
   ```
   **Result:** `'Portland'`

2. Use a property in an expression:
   ```javascript
   `${person.name} is ${person.age} years old and lives in ${person.city}.`
   ```
   **Result:** `'Sarah is 29 years old and lives in Portland.'`

**Talking Points:**
"Dot notation is clean and readable. Use it when you know the property name ahead of time."

### Accessing Properties with Bracket Notation (2 minutes)

**Talking Points:**
"Sometimes you have a property name as a string or as a variable. That's when bracket notation comes in."

1. Use bracket notation:
   ```javascript
   person["name"]
   ```
   **Result:** `'Sarah'`

   ```javascript
   person["email"]
   ```
   **Result:** `'sarah@example.com'`

2. Show why bracket notation is useful—with a variable:
   ```javascript
   const key = "age"
   person[key]
   ```
   **Result:** `29`

**Talking Points:**
"See? We stored the property name in a variable, then used bracket notation to access it. This is powerful when you don't know the property name until runtime—like when you're looping through keys or accepting input."

3. Try a property that doesn't exist:
   ```javascript
   person.phone
   ```
   **Result:** `undefined`

**Talking Points:**
"If a property doesn't exist, JavaScript returns `undefined` rather than throwing an error. This can be a feature (graceful) or a bug (if you misspelled something). That's why linting tools help catch these issues."

### Adding Methods to Objects (2 minutes)

**Talking Points:**
"Objects can contain functions too! These are called methods. They're actions an object can perform."

1. Create an object with a method:
   ```javascript
   const product = {
     name: "Laptop",
     price: 999,
     inStock: true,
     getPrice: function() {
       return `The ${this.name} costs $${this.price}`
     }
   }
   ```

**Talking Points:**
"Notice the `getPrice` property holds a function. Inside, we use `this.name` and `this.price`—`this` refers to the object itself. So `this.name` means 'this object's name property.'"

2. Call the method:
   ```javascript
   product.getPrice()
   ```
   **Result:** `'The Laptop costs $999'`

3. Show a modern method syntax with an arrow function:
   ```javascript
   const book = {
     title: "Clean Code",
     author: "Robert Martin",
     describe: () => `${book.title} by ${book.author}`
   }
   ```

   ```javascript
   book.describe()
   ```
   **Result:** `'Clean Code by Robert Martin'`

**Talking Points:**
"You'll see both syntaxes in the wild. The traditional `function()` and the modern arrow `=>` both work for methods. (There's a subtle difference with `this`, but we'll skip that detail.)"

### Destructuring Assignment (3 minutes)

**Talking Points:**
"Now here's something elegant. Instead of accessing properties one by one, destructuring lets you extract multiple values at once. It's like unpacking a box."

1. Destructure properties from an object:
   ```javascript
   const { name, age } = person
   ```

   > **If a student remembers Demo 27's "don't use `name`" warning — good catch, and the answer is worth saying out loud.** That caution was about assigning to a bare `name` without `let`/`const`, which writes to the browser's built-in `window.name`. Here, `const` creates its own variable that safely shadows the global, so this is fine — and it's exactly the form you'll see in real code.

2. Use the extracted variables:
   ```javascript
   name
   ```
   **Result:** `'Sarah'`

   ```javascript
   age
   ```
   **Result:** `29`

**Talking Points:**
"This single line extracted `name` and `age` from the `person` object and created variables for them. It's much cleaner than writing `person.name` and `person.age` over and over."

3. Destructure some properties, ignore others:
   ```javascript
   const { name, city } = person
   ```

   ```javascript
   name
   ```
   **Result:** `'Sarah'`

   ```javascript
   city
   ```
   **Result:** `'Portland'`

**Talking Points:**
"You don't have to extract everything. Just grab what you need."

4. Destructure and rename in one step:
   ```javascript
   const { name: personName, age: personAge } = person
   ```

   ```javascript
   personName
   ```
   **Result:** `'Sarah'`

   ```javascript
   personAge
   ```
   **Result:** `29`

**Talking Points:**
"Sometimes you need to rename a property because the original name conflicts with something else in your code. Use the colon syntax: `{ originalName: newName }`."

5. Destructure with default values:
   ```javascript
   const { name, phone = "555-0000" } = person
   ```

   ```javascript
   phone
   ```
   **Result:** `'555-0000'`

**Talking Points:**
"If a property doesn't exist (like `phone`), we can provide a default value. It's a safety net for when data might be incomplete."

### Destructuring Arrays (1 minute)

**Talking Points:**
"Destructuring also works with arrays! Instead of accessing by index, you can unpack values in order."

1. Destructure array values:
   ```javascript
   const colors = ["red", "green", "blue"]
   const [first, second, third] = colors
   ```

   ```javascript
   first
   ```
   **Result:** `'red'`

   ```javascript
   second
   ```
   **Result:** `'green'`

2. Destructure and skip elements:
   ```javascript
   const [primary, , tertiary] = colors
   ```

   ```javascript
   primary
   ```
   **Result:** `'red'`

   ```javascript
   tertiary
   ```
   **Result:** `'blue'`

**Talking Points:**
"Notice the empty space? That skips `green` (the second element). Destructuring is flexible—you pick exactly what you want."

## Key Points to Emphasize

- **Objects are key-value stores:** They're perfect for representing real-world entities with properties. Use dot notation for known properties; bracket notation when the property name is dynamic.
- **Methods are functions inside objects:** They let objects do things. Use `this` to refer to the object itself when needed.
- **Destructuring is clean syntax:** It extracts values in a single line, reducing repetition and making code more readable. It's standard in modern JavaScript.
- **Destructuring works for arrays too:** Use square brackets for arrays, curly braces for objects. You can rename, skip, and provide defaults.

## Common Questions

**Q: "What's the difference between `person.name` and `person["name"]`?"**
A: They do the same thing! Dot notation is simpler and more readable when you know the property name. Bracket notation is necessary when the property name is in a variable or when the name has spaces or special characters (like `person["first-name"]`). Use dot notation as your default.

**Q: "If I create an object and add a property later, is that allowed?"**
A: Yes! JavaScript is flexible. You can do `person.phone = "555-1234"` and the property is added. However, if you want to prevent accidental additions, you can use `Object.freeze()` or use TypeScript (a language that sits on top of JavaScript). For now, just be careful.

**Q: "Why use destructuring instead of just accessing properties normally?"**
A: Destructuring shines when you're using properties multiple times or passing them to functions. Instead of writing `person.name`, `person.age`, `person.email` everywhere, you extract them once and use clean variable names. It's about readability and reducing repetition.

**Q: "Can I destructure nested objects? Like if a person has an address with a city?"**
A: Absolutely! You'd do `const { address: { city } } = person` if the structure is nested. It works, but can get complex. Start simple and nest as needed.

**Q: "What's the difference between `function()` and arrow function `=>` for methods?"**
A: The key difference is how `this` works. In traditional methods, `this` refers to the object. In arrow functions, `this` refers to the surrounding context (usually the global scope). For most methods, use traditional `function()`. Arrow functions are great for callbacks but can be tricky in objects. We'll revisit this later.
