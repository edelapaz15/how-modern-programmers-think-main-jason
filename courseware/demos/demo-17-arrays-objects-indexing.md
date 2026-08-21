# Demo 17: Arrays, Objects, and Indexing

**Module:** V (Computational Thinking, Data Structures & Algorithms)
**Topic:** Core Data Structures
**Estimated Time:** 15 minutes
**Related reading:** [Core Data Structures](../docs/Module-05-Computational-Thinking-Data-Structures-Algorithms/02-core-data-structures.md)

---

## Objective

Students will understand how to create and manipulate arrays (ordered, indexed collections) and objects (key-value stores), and grasp the zero-based indexing convention that underpins modern programming languages. They'll see the practical difference between accessing data by position versus by meaningful names.

![A five-element array with index numbers 0 to 4 above each value and ordinal positions below, plus what fruits[0], fruits[4], fruits.length and fruits[5] each return.](../diagrams/png/array-indexing.png)

*Project this instead of sketching the array by hand — then use the console to prove every line of it.*

---

## Setup & Prerequisites

- **Browser with Developer Tools open** (Chrome, Firefox, Safari, or Edge)
  - Open the browser console (F12 or right-click → Inspect → Console tab)
  - Clear any previous content in the console
  - Ensure a blank line is ready for input
- **Optional:** Have a whiteboard or screen-sharing tool available to sketch the array structure as you go
- **No external files or setup** — everything runs in the console

---

## Step-by-Step Script

### Part 1: Introduction & Context (1 minute)

**Talking Points:**
> "Let's talk about how computers organize and access data efficiently. Every time you search a contact, pull up a photo, or access a specific page in a document, the program is using indexing — a concept borrowed from how libraries catalog books. Today we're going to see how arrays and objects are the two fundamental containers we use every day."

### Part 2: Create and Index an Array (5 minutes)

**Type in the console:**

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
```

**Talking Points:**
> "I've just created an array called `fruits`. It holds five items in a specific order. The key insight here is that arrays are ordered, and every position has a number — starting from zero. That's the 'zero-based' part, and it's really important to internalize."

**On screen or whiteboard, sketch:**
```
Index:    0        1       2        3       4
Value:  'apple'  'banana' 'cherry' 'date' 'elderberry'
```

**Then type in the console:**

```javascript
fruits[0]     // Output: 'apple'
```

**Talking Points:**
> "When I ask for `fruits[0]`, I get the first item. Not the second — the first. That's because we start counting from zero. Why zero? It's a historical convention in computer science that dates back to low-level memory addressing. Once you get used to it, it becomes second nature."

**Continue in console:**

```javascript
fruits[2]     // Output: 'cherry'
fruits[4]     // Output: 'elderberry'
fruits[10]    // Output: undefined
```

**Talking Points:**
> "When I access an index that doesn't exist — like index 10 — I get `undefined`. That's JavaScript's way of saying, 'there's nothing there.' It doesn't crash; it just tells us the value doesn't exist."

### Part 3: Iterate Over an Array (4 minutes)

**Type in the console:**

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ': ' + fruits[i]);
}
```

**Output will be:**
```
0: apple
1: banana
2: cherry
3: date
4: elderberry
```

**Talking Points:**
> "Here's a `for` loop that walks through each index. We start with `i = 0`, and we keep going while `i` is less than `fruits.length` (which is 5). After each iteration, `i` increments by 1. At each step, we're accessing `fruits[i]` — first `fruits[0]`, then `fruits[1]`, and so on. This is the classic pattern for iterating over arrays in many languages."

> "Notice I'm printing both the index and the value. That helps us see how indexing works in practice."

### Part 4: Create and Access an Object (4 minutes)

**Type in the console:**

```javascript
const person = {
  name: 'Alice',
  age: 28,
  city: 'San Francisco',
  job: 'Software Engineer'
};
```

**Talking Points:**
> "Now let's create an object. Objects are different from arrays. Instead of relying on numeric indices, objects use meaningful keys — names, if you will. So instead of asking 'what's at position 2?', I can ask 'what's the job?' and get back a meaningful answer."

**Type in the console:**

```javascript
person.name              // Output: 'Alice'
person['age']            // Output: 28
person.city              // Output: 'San Francisco'
```

**Talking Points:**
> "There are two ways to access object properties: dot notation (`person.name`) or bracket notation (`person['age']`). Both work. The bracket notation is useful if your key has spaces or special characters, but for clean, readable code, we usually use dot notation."

### Part 5: Add a New Property (2 minutes)

**Type in the console:**

```javascript
person.phone = '555-1234';
console.log(person);
```

**Output will show the updated object:**
```text
{
  name: 'Alice',
  age: 28,
  city: 'San Francisco',
  job: 'Software Engineer',
  phone: '555-1234'
}
```

**Talking Points:**
> "Objects are dynamic — we can add new properties on the fly. Just assign a value to a key that doesn't exist yet, and boom, it's part of the object. This flexibility is one reason objects are so powerful for modeling real-world entities."

---

## Key Points to Emphasize

- **Zero-based indexing is a foundational convention** — arrays start at index 0, not 1. This is consistent across almost all modern programming languages.
- **Arrays are ordered; objects are keyed** — arrays preserve order and are accessed by position; objects map names to values and are accessed by key.
- **Both are essential containers** — arrays are perfect for lists of similar items (a to-do list, sensor readings, search results); objects are perfect for modeling entities with multiple properties (a person, a book, a configuration).
- **Access patterns differ but both are O(1)** — whether you're accessing by index or key, modern systems retrieve the value instantly (constant time). This speed is one reason these structures are so foundational.

---

## Common Questions

**Q: Why do we use zero-based indexing? Couldn't we just start at 1?**
> A: Great question. Historically, it comes from how computer memory works — the first byte in a block of memory is at offset 0. While some languages (like Lua and R) do use 1-based indexing, the vast majority use zero-based for performance and memory reasons. Switching languages is easier than fighting the convention, so it's worth learning it well.

**Q: Can I mix arrays and objects together?**
> A: Absolutely. You could have an array of objects — for example, an array of person objects. Or an object containing arrays as properties. In fact, most real-world data structures combine these in various ways. We'll explore that more as we build bigger systems.

**Q: What's the difference between `fruits[2]` and `fruits['2']`?**
> A: In JavaScript, they're actually the same! The language coerces the string `'2'` to the number 2 when accessing an array. However, it's best practice to always use a number for array indices and a string (or variable) for object keys. It keeps your intent clear and your code more maintainable.
