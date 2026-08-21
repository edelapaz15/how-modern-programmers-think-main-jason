# Topic 2: Core Data Structures

## Why Data Structures Matter

Before you can write algorithms to solve problems, you need to decide how to organize your data. This decision is fundamental. The right data structure makes your algorithm efficient, understandable, and easy to maintain. The wrong one makes it slow, confusing, and difficult to work with.

Consider two scenarios:

**Scenario 1:** You're building a customer support application. You need to store customer information and be able to find a customer quickly by their customer ID. Would you store customers in a single long list and search through it one by one every time you need to find one? Or would you use a structure optimized for looking up by ID?

**Scenario 2:** You're managing a to-do list application. Users can add tasks, mark them complete, and see their remaining tasks. Should the list be alphabetical? In the order entered? By priority? The structure you choose affects how naturally the user can interact with their data.

These scenarios illustrate that **data structures aren't just containers for information; they're choices about what operations will be fast and natural, and what operations will be slow or awkward.**

In business, you use data structures all the time without calling them that:
- A **spreadsheet** is a structured way to organize data in rows and columns
- An **address book** is a structure for organizing contact information
- An **org chart** is a structure showing reporting relationships
- A **filing cabinet** with labeled drawers is a structure for organizing documents

Programming has its own set of fundamental structures. These are used in virtually every program, regardless of programming language or application domain. Understanding these structures is like understanding the basic tools in a toolbox—you'll use them constantly.

## Variables: Named Containers for Single Values

Before discussing complex structures, we need to review the simplest structure: the variable.

A **variable** is a named container for a single value. Think of it as a labeled box: the label is the variable name, the contents are the value.

```
variable: age
value: 28

variable: customerName
value: "Sarah Johnson"

variable: isActive
value: true
```

Variables store individual data points. They're the building blocks of more complex structures.

### Data Types

Variables have types that specify what kind of data they hold. The main types are:

**Numbers:** Used for quantities, calculations, measurements
```
age = 28
salary = 75000.50
temperature = -5
```

**Strings:** Text data, like names, addresses, messages
```
name = "Sarah Johnson"
email = "sarah@example.com"
address = "123 Main Street, Springfield"
```

**Booleans:** True or false values, used for flags and conditions
```
isActive = true
isPremiumCustomer = false
hasVerifiedEmail = true
```

**Null/Undefined:** Special values meaning "no value" or "unknown"
```
middleName = null  // Customer has no middle name
lastLoginTime = undefined  // We don't know when they last logged in
```

In real programming languages, these types are enforced strictly. If you try to put a number where a string is expected, the language either prevents it or automatically converts it. Pseudocode is less strict, but the concept is the same.

### Variables in Real Languages

In Python:
```python
age = 28
name = "Sarah"
is_active = True
```

In JavaScript:
```javascript
let age = 28;
let name = "Sarah";
let isActive = true;
```

In Java:
```java
int age = 28;
String name = "Sarah";
boolean isActive = true;
```

The concept is identical across languages; only the syntax differs.

## Arrays/Lists: Ordered Collections

An **array** (also called a **list**) is an ordered collection of values. Instead of one labeled box, imagine a row of numbered boxes: position 0, position 1, position 2, etc. Each box holds a value, and you access boxes by their position (called an **index**).

### Working with Arrays

**Creating an array:**
```
numbers = [10, 20, 30, 40, 50]
names = ["Alice", "Bob", "Charlie"]
mixed = [1, "hello", true]  // Can mix types
empty = []  // Empty array
```

**Accessing elements by index:**
```
numbers = [10, 20, 30, 40, 50]

PRINT numbers[0]  // 10 (first element)
PRINT numbers[2]  // 30 (third element)
PRINT numbers[4]  // 50 (last element)
```

Note: In most programming languages, indexing starts at 0. The first element is at index 0, the second at index 1, etc. This is called "zero-based indexing."

**Adding elements:**
```
fruits = ["apple", "banana"]
ADD "orange" TO fruits
// fruits is now ["apple", "banana", "orange"]
```

**Removing elements:**
```
fruits = ["apple", "banana", "orange"]
REMOVE fruit at index 1
// fruits is now ["apple", "orange"]
// "banana" is gone, and "orange" moves to index 1
```

**Finding the length:**
```
fruits = ["apple", "banana", "orange"]
length = LENGTH OF fruits  // 3
```

**Iterating through an array:**
```
fruits = ["apple", "banana", "orange"]

FOR i = 0 TO LENGTH OF fruits - 1
  PRINT fruits[i]
END FOR
```

This prints each fruit in order. A more natural way in modern pseudocode:

```
FOR EACH fruit IN fruits
  PRINT fruit
END FOR
```

### Array Real-World Analogy

Think of an array like a numbered list:
- To-do list: item 1, item 2, item 3...
- Spreadsheet column: cell A1, A2, A3...
- Ranked list: 1st place, 2nd place, 3rd place...

The order matters, and you access items by their position.

### When to Use Arrays

Arrays are ideal when:
- **Order matters:** You care about the sequence (like a to-do list or ranking)
- **You iterate frequently:** You often need to go through all items
- **You need positional access:** You often access items by position ("give me the 3rd item")
- **Items might be duplicates:** You're okay with the same value appearing multiple times

### Multidimensional Arrays

Arrays can contain other arrays, creating a grid or matrix:

```
// 2D array: a table with rows and columns
grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

PRINT grid[0][0]  // 1 (row 0, column 0)
PRINT grid[1][2]  // 6 (row 1, column 2)
PRINT grid[2][1]  // 8 (row 2, column 1)
```

This is how spreadsheets, game boards, and image data are organized.

### Limitations of Arrays

Arrays have a limitation: **accessing by position is fast, but searching is slow.**

```
students = ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// Fast: give me the first student
PRINT students[0]  // Alice

// Slow: find "Charlie"
FOR i = 0 TO LENGTH OF students - 1
  IF students[i] = "Charlie" THEN
    PRINT "Found at position " + i
  ENDIF
END FOR
// You had to check each student in order
```

This limitation is why we have other data structures.

## Objects/Dictionaries: Key-Value Pairs

An **object** (also called a **dictionary**, **map**, or **hash table**) is a collection of key-value pairs. Instead of accessing data by position like an array, you access it by a meaningful key.

Think of an object like a real dictionary: you don't look up the 5th word in the dictionary; you look up a specific word by name. The key is the word, the value is the definition.

### Working with Objects

**Creating an object:**
```
customer = {
  "name": "Sarah Johnson",
  "email": "sarah@example.com",
  "age": 28,
  "isPremium": true
}
```

**Accessing values by key:**
```
PRINT customer["name"]  // Sarah Johnson
PRINT customer["email"]  // sarah@example.com
PRINT customer["age"]  // 28
```

**Adding or updating values:**
```
customer["phone"] = "555-1234"  // Add new key-value pair
customer["age"] = 29  // Update existing value
```

**Removing a value:**
```
REMOVE customer["phone"]
// The phone key and value are gone
```

**Checking if a key exists:**
```
IF "email" IN customer THEN
  PRINT customer["email"]
ENDIF
```

**Getting all keys:**
```
keys = KEYS OF customer  // ["name", "email", "age", "isPremium"]
```

**Iterating through an object:**
```
FOR EACH key IN customer
  PRINT key + ": " + customer[key]
END FOR

// Output:
// name: Sarah Johnson
// email: sarah@example.com
// age: 28
// isPremium: true
```

### Object Real-World Analogy

Objects are like forms or database records:
- **Customer record:** Customer ID → all their information
- **Employee profile:** Employee ID → name, department, salary, etc.
- **Contact card:** Name, phone, email, address all together

You look things up by a meaningful identifier (the key), not by position.

### When to Use Objects

Objects are ideal when:
- **You look up by name:** You'll access data using meaningful keys, not positions
- **You have multiple attributes:** You're grouping related data together
- **Keys are unique:** Each key appears only once
- **Fast lookup by key is important:** You need quick access to specific data

### Objects vs. Arrays: Comparison

```
// Array: good if you need to process everything in order
studentIds = [101, 102, 103, 104, 105]
FOR EACH id IN studentIds
  ProcessStudent(id)
END FOR

// Object: good if you need to look up by key
studentGrades = {
  "101": "A",
  "102": "B",
  "103": "A",
  "104": "C",
  "105": "B"
}
// Find Alice's grade quickly
IF "101" IN studentGrades THEN
  PRINT studentGrades["101"]  // A
ENDIF
```

## Nested Structures: Combining Arrays and Objects

Real-world data is often complex. A single customer doesn't have just a name and email; they have a name, email, billing address, shipping addresses, order history, etc. This is where nested structures come in.

### Arrays of Objects

One of the most common patterns: an array where each element is an object.

```
// Array of customers, each customer is an object
customers = [
  {"id": 101, "name": "Alice", "email": "alice@example.com"},
  {"id": 102, "name": "Bob", "email": "bob@example.com"},
  {"id": 103, "name": "Charlie", "email": "charlie@example.com"}
]

// Access the first customer
firstCustomer = customers[0]  // {"id": 101, "name": "Alice", ...}

// Access a property of the first customer
firstName = customers[0]["name"]  // "Alice"
```

This is how databases work: a table is an array of rows, where each row is an object with properties.

### Objects Containing Arrays

An object can have an array as one of its values:

```
order = {
  "orderId": 5001,
  "customer": "Alice",
  "items": ["laptop", "mouse", "keyboard"],
  "quantities": [1, 2, 1],
  "prices": [999.99, 29.99, 79.99]
}

// Access the items array
itemsOrdered = order["items"]  // ["laptop", "mouse", "keyboard"]

// Access the first item
firstItem = order["items"][0]  // "laptop"
```

### Complex Nested Structures

Structures can be deeply nested:

```
company = {
  "name": "TechCorp",
  "departments": [
    {
      "name": "Engineering",
      "employees": [
        {"name": "Alice", "role": "Senior Engineer", "salary": 120000},
        {"name": "Bob", "role": "Engineer", "salary": 100000}
      ]
    },
    {
      "name": "Sales",
      "employees": [
        {"name": "Charlie", "role": "Sales Manager", "salary": 110000},
        {"name": "Diana", "role": "Sales Rep", "salary": 80000}
      ]
    }
  ]
}

// Access Alice's salary
aliceSalary = company["departments"][0]["employees"][0]["salary"]  // 120000
```

This looks complex, but it mirrors how real data is organized: company contains departments, departments contain employees, employees have properties.

## Stacks and Queues: Specialized Structures

Stacks and queues are specialized structures useful for specific problems. We'll introduce them conceptually here; you'll use them in algorithms later.

### Stacks: Last-In-First-Out (LIFO)

A **stack** is a collection where items are added and removed from the same end—like a stack of plates. You add a plate on top and remove from the top. The last plate you put on is the first one you take off.

**Operations:**
```
stack = empty

PUSH 1 onto stack  // stack: [1]
PUSH 2 onto stack  // stack: [1, 2]
PUSH 3 onto stack  // stack: [1, 2, 3]

value = POP from stack  // value: 3, stack: [1, 2]
value = POP from stack  // value: 2, stack: [1]
value = POP from stack  // value: 1, stack: []
```

**Real-world example:** Browser back button
- User visits page A → pushed onto stack
- User visits page B → pushed onto stack
- User visits page C → pushed onto stack
- User clicks back → pops page C, returns to B
- User clicks back → pops page B, returns to A

When you visit C, then B, then A and hit back, you go back to the last page you visited (the one most recently pushed onto the stack).

### Queues: First-In-First-Out (FIFO)

A **queue** is a collection where items are added at one end and removed from the other—like a line at a store. The first person in line is the first one served.

**Operations:**
```
queue = empty

ENQUEUE 1  // queue: [1]
ENQUEUE 2  // queue: [1, 2]
ENQUEUE 3  // queue: [1, 2, 3]

value = DEQUEUE  // value: 1, queue: [2, 3]
value = DEQUEUE  // value: 2, queue: [3]
value = DEQUEUE  // value: 3, queue: []
```

**Real-world example:** Customer support tickets
- Ticket A arrives (10:00) → added to queue
- Ticket B arrives (10:05) → added to queue
- Ticket C arrives (10:10) → added to queue
- Agent is free → handles Ticket A (first one that arrived)
- Agent is free → handles Ticket B (next one that arrived)

Tickets are handled in the order they arrived.

### When to Use Stacks and Queues

**Stacks:**
- Browser history (back button)
- Undo/redo functionality
- Function call stack (how function calls are managed internally)
- Evaluating mathematical expressions

**Queues:**
- Customer service queues
- Print job queues
- Message processing (messages processed in order received)
- Breadth-first search algorithm

## Sets: Unique Collections

A **set** is a collection of unique values—no duplicates allowed. Unlike arrays where [1, 2, 2, 3] is valid, a set with the same values would automatically remove duplicates.

**Operations:**
```
fruits = SET []  // Empty set

ADD "apple" TO fruits  // fruits: {apple}
ADD "banana" TO fruits  // fruits: {apple, banana}
ADD "apple" TO fruits  // Still {apple, banana}, apple not added again

IF "apple" IN fruits THEN
  PRINT "We have apples"
ENDIF

REMOVE "banana" FROM fruits  // fruits: {apple}

SIZE of fruits = 1
```

**When to use sets:**
- Tracking unique items (unique visitors, unique email addresses)
- Membership checking (is this item in our inventory?)
- Removing duplicates from a list
- Set operations (intersection, union, difference)

## Choosing the Right Data Structure

Different problems call for different structures. Here's guidance on choosing:

| Need | Best Structure | Why |
|------|---|---|
| Ordered list; access by position | Array | Fast positional access |
| Look up by meaningful key | Object | Fast key lookup |
| No duplicates; just checking membership | Set | Efficient membership testing |
| Last-in-first-out; like stack of items | Stack | Natural for this pattern |
| First-in-first-out; like line of items | Queue | Natural for this pattern |
| Related data together (like a database row) | Object | Groups related properties |
| Multiple records, same structure | Array of Objects | Like database table |

### Decision Tree Example

**Problem:** "Track which students have submitted their homework"

Option 1: Array of students
```
submittedStudents = ["Alice", "Bob", "Diana"]
// To check if Charlie submitted:
FOR EACH student IN submittedStudents
  IF student = "Charlie" THEN
    PRINT "Charlie submitted"
  ENDIF
END FOR
// Slow for large classes; must check each name
```

Option 2: Set of students
```
submittedStudents = SET {"Alice", "Bob", "Diana"}
// To check if Charlie submitted:
IF "Charlie" IN submittedStudents THEN
  PRINT "Charlie submitted"
ELSE
  PRINT "Charlie has not submitted"
ENDIF
// Fast; just a membership check
```

For this problem, a set is better because membership checking is the main operation.

### Problem: "Track every student's grade"

Option 1: Two parallel arrays (error-prone)
```
students = ["Alice", "Bob", "Charlie"]
grades = ["A", "B", "C"]
// Who got an A? Must manually match positions
```

Option 2: Object
```
studentGrades = {
  "Alice": "A",
  "Bob": "B",
  "Charlie": "C"
}
// Fast lookup: studentGrades["Alice"] = "A"
```

Option 3: Array of objects
```
gradeRecords = [
  {"name": "Alice", "grade": "A", "id": 101},
  {"name": "Bob", "grade": "B", "id": 102},
  {"name": "Charlie", "grade": "C", "id": 103}
]
// If you need multiple properties per student
```

For this problem, an object is simplest if you only need name→grade mapping. An array of objects is better if you need multiple properties per student.

## Data Structures and Efficiency

Different structures have different efficiency characteristics for different operations:

| Operation | Array | Object | Set | Stack | Queue |
|-----------|-------|--------|-----|-------|-------|
| Add at end | Fast | Fast | Fast | Fast (push) | Fast (enqueue) |
| Find specific item | Slow | Fast | Fast | Slow | Slow |
| Access by position | Fast | — | — | — | — |
| Remove specific | Slow | Fast | Fast | Fast (pop) | Fast (dequeue) |
| Check if empty | Fast | Fast | Fast | Fast | Fast |

When choosing a structure, consider not just what data you have, but what operations you'll perform most frequently.

## Data Structures and Programming Languages

Different languages have different names for these structures, but the concepts are the same:

**Arrays:**
- Python: `list` (but also has `array` module)
- JavaScript: `Array`
- Java: `Array` or `ArrayList`

**Objects/Dictionaries:**
- Python: `dict`
- JavaScript: `Object` or `Map`
- Java: `HashMap` or `TreeMap`

**Sets:**
- Python: `set`
- JavaScript: `Set`
- Java: `HashSet`

**Stacks:**
- Most languages don't have built-in stacks; you use an array and treat it as a stack
- Java: `Stack` class

**Queues:**
- Most languages don't have built-in queues; you use an array and treat it as a queue
- Java: `Queue` interface

In pseudocode, we use the conceptual names (stack, queue, set) because we're not tied to a specific language.

## Real-World Data Structure Example: Building a Library System

Let's design data structures for a simple library system.

**Requirements:**
- Store information about books (title, author, ISBN, available copies)
- Track which books are currently checked out
- Look up books by ISBN quickly
- List all available books
- Track which member has which books

**Design:**

```
books = {  // Object for fast ISBN lookup
  "978-0061120084": {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "copiesAvailable": 3,
    "checkoutHistory": [
      {"memberId": 101, "checkoutDate": "2024-01-15", "dueDate": "2024-02-15"},
      {"memberId": 203, "checkoutDate": "2024-01-20", "dueDate": "2024-02-20"}
    ]
  },
  "978-0451524935": {
    "title": "1984",
    "author": "George Orwell",
    "copiesAvailable": 2,
    "checkoutHistory": [...]
  },
  ...
}

members = {  // Object for fast member lookup
  "101": {
    "name": "Alice",
    "email": "alice@example.com",
    "checkedOutBooks": ["978-0061120084", "978-0451524935"],
    "memberSince": "2020-03-15"
  },
  "203": {
    "name": "Bob",
    "email": "bob@example.com",
    "checkedOutBooks": ["978-0451524935"],
    "memberSince": "2021-07-20"
  },
  ...
}
```

This structure allows:
- Fast book lookup by ISBN: `books["978-0061120084"]`
- Fast member lookup by ID: `members["101"]`
- Finding all books a member has: `members["101"]["checkedOutBooks"]`
- Finding checkout history: `books["978-0061120084"]["checkoutHistory"]`

## Connection to Databases

Data structures in programming closely mirror how databases organize data. Understanding these structures prepares you for Module VI (Databases and Data Management):

- An **array of objects** mirrors a database table (rows and columns)
- Each **object** mirrors a database record
- Each **key in an object** mirrors a database field/column
- An **object** optimized for key lookup mirrors a database index

When you learn about actual databases, you'll recognize these patterns immediately.

## Common Data Structure Patterns

### The Collection Pattern

Often you have multiple instances of the same type:

```
// Array of customers
customers = [
  {"id": 1, "name": "Alice"},
  {"id": 2, "name": "Bob"},
  ...
]

// Object of customers by ID
customersById = {
  "1": {"id": 1, "name": "Alice"},
  "2": {"id": 2, "name": "Bob"},
  ...
}
```

Use the first when you need to process all customers; use the second when you need to look up by ID.

### The Lookup Pattern

When you need to answer "what's associated with X?":

```
// Departments by name
departments = {
  "Engineering": {...},
  "Sales": {...},
  "Marketing": {...}
}

// Employees by ID
employees = {
  "101": {...},
  "102": {...}
}
```

### The Relationship Pattern

When objects are related to each other:

```
orders = [
  {
    "id": 5001,
    "customerId": 101,  // Link to customer
    "items": ["ABC123", "DEF456"]  // Links to products
  },
  ...
]

// To find a customer's orders:
FOR EACH order IN orders
  IF order["customerId"] = 101 THEN
    PRINT order
  ENDIF
END FOR
```

## Data Structure Anti-Patterns

**Parallel Arrays (dangerous):**
```
// BAD: Synchronizing two arrays is error-prone
names = ["Alice", "Bob", "Charlie"]
ages = [28, 35, 42]
// If you remove Bob from names, you must remember to remove from ages too
```

**Mixed Types in Inconsistent Ways:**
```
// BAD: Sometimes strings, sometimes numbers
items = ["apple", 5, "banana", true, 3.99]
// Hard to process; don't know what type to expect
```

**Deeply Nested Without Reason:**
```
// BAD: Unnecessarily complex nesting
data = {
  "outer": {
    "middle": {
      "inner": {
        "value": 42
      }
    }
  }
}
// Hard to navigate; wastes cognitive load
```

**Better:**
```
// GOOD: Flatten where possible
data = {
  "value": 42,
  "timestamp": "2024-01-15"
}
```

---

## Review and Discussion Questions

1. **Choosing structures:** You're building an inventory system for a warehouse with 10,000 items. For each item, you need to store the SKU, name, quantity on hand, reorder level, and supplier. How would you structure this data? Which operations are most important? Why did you choose that structure?

2. **Real-world structures:** Think about an organizational system from your previous work (customer database, project tracking system, inventory management). How would you represent that data using the structures from this topic? What relationships need to be captured?

3. **Nested data:** Give an example of real-world data that requires nested structures (arrays of objects, objects containing arrays). Why is nesting necessary? Could you flatten it, and what would be the tradeoffs?

4. **Efficiency tradeoffs:** An array lets you access any element by position very quickly. An object lets you look up by key very quickly. When would you use each, and what operation is slow in each case? Can you think of a situation where you'd use both structures for the same data?

5. **Stack or queue:** Describe a business or technical problem that naturally fits a stack (LIFO) and one that naturally fits a queue (FIFO). Why does each structure fit its problem better than the other?
