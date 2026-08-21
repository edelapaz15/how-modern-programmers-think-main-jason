# Demo 36: Java Classes and JavaScript Comparison

**Module:** VII
**Topic:** Introduction to Java
**Estimated Time:** 15 minutes
**Related reading:** [Introduction to Java](../docs/Module-07-Programming-Syntax-and-Logic/05-introduction-to-java.md)

## Objective
Students will build the same program in Java and JavaScript side by side, see how both handle objects, methods, constructors, and output, and understand the key differences between a statically-typed compiled language and a dynamically-typed interpreted language.

## Setup/Prerequisites
- Java JDK installed and working
- Node.js installed
- VS Code or a text editor
- A terminal/command prompt
- Understanding of JavaScript and Java basics from previous demos

## Step-by-Step Script

### Part 1: Introduction (1 minute)

**Talking Points:**
"You've learned JavaScript and touched on Java. Now let's build the same program in both languages and see side by side how they differ. We'll create a simple `Product` class with a constructor, fields, and a method. Same logic, two languages."

### Part 2: Writing Java (6 minutes)

**Talking Points:**
"Let's start with Java. This will show you object-oriented programming the 'strict' way, with explicit types and structure."

1. Create `Product.java`:

   ```java
   public class Product {
       // Fields (properties) with explicit types
       private String name;
       private double price;
       private int quantity;

       // Constructor—runs when you create a new Product
       public Product(String name, double price, int quantity) {
           this.name = name;
           this.price = price;
           this.quantity = quantity;
       }

       // Getter for name
       public String getName() {
           return this.name;
       }

       // Getter for price
       public double getPrice() {
           return this.price;
       }

       // Getter for quantity
       public int getQuantity() {
           return this.quantity;
       }

       // A method that calculates total value
       public double getTotalValue() {
           return this.price * this.quantity;
       }

       // A method that returns a string description
       public String getDescription() {
           return "Product: " + this.name +
                  " | Price: $" + this.price +
                  " | Quantity: " + this.quantity +
                  " | Total Value: $" + this.getTotalValue();
       }

       // Main method—entry point for the program
       public static void main(String[] args) {
           // Create objects
           Product laptop = new Product("Laptop", 999.99, 5);
           Product mouse = new Product("Mouse", 29.99, 25);

           // Call methods
           System.out.println(laptop.getDescription());
           System.out.println(mouse.getDescription());

           // Access individual values via getters
           System.out.println("\nLaptop name: " + laptop.getName());
           System.out.println("Laptop price: $" + laptop.getPrice());
           System.out.println("Laptop quantity: " + laptop.getQuantity());
       }
   }
   ```

**Talking Points:**
"Notice several things:
- **Fields** at the top (`name`, `price`, `quantity`) are explicit: type name
- **Constructor** (`public Product(...)`) initializes the object. It has the same name as the class.
- **Getters** are methods that return a value. They follow the pattern `getFieldName()`.
- **Methods** like `getTotalValue()` do work and return results.
- **`this`** refers to the current object's fields.
- **Types everywhere:** parameters have types, return values have types, fields have types.
- **`private`** means the fields can't be accessed directly from outside; you use getters instead (encapsulation).
- **`System.out.println()`** is Java's print method."

2. Compile and run:

   ```bash
   javac Product.java
   java Product
   ```

**Output:**
```
Product: Laptop | Price: $999.99 | Quantity: 5 | Total Value: $4999.95
Product: Mouse | Price: $29.99 | Quantity: 25 | Total Value: $749.75

Laptop name: Laptop
Laptop price: 999.99
Laptop quantity: 5
```

**Talking Points:**
"The program runs! We created objects, called methods, and got results. Now let's do the exact same thing in JavaScript."

### Part 3: Writing JavaScript (5 minutes)

**Talking Points:**
"Now the same program in JavaScript. Watch how it's more flexible but also less structured."

1. Create `product.js`:

   ```javascript
   class Product {
     // Constructor—runs when you create a new Product
     constructor(name, price, quantity) {
       this.name = name
       this.price = price
       this.quantity = quantity
     }

     // Getter for name
     getName() {
       return this.name
     }

     // Getter for price
     getPrice() {
       return this.price
     }

     // Getter for quantity
     getQuantity() {
       return this.quantity
     }

     // A method that calculates total value
     getTotalValue() {
       return this.price * this.quantity
     }

     // A method that returns a string description
     getDescription() {
       return `Product: ${this.name} | Price: $${this.price} | Quantity: ${this.quantity} | Total Value: $${this.getTotalValue()}`
     }
   }

   // Create objects
   const laptop = new Product("Laptop", 999.99, 5)
   const mouse = new Product("Mouse", 29.99, 25)

   // Call methods
   console.log(laptop.getDescription())
   console.log(mouse.getDescription())

   // Access individual values via getters
   console.log("\nLaptop name: " + laptop.getName())
   console.log("Laptop price: $" + laptop.getPrice())
   console.log("Laptop quantity: " + laptop.getQuantity())
   ```

**Talking Points:**
"The structure is similar! But notice differences:
- **No type declarations:** We don't declare that `name` is a `String`. JavaScript figures it out.
- **Constructor method:** In JavaScript, it's called `constructor` and is part of the class.
- **No `private` keyword:** JavaScript's fields are public by default (though you can use `#` for private). We use getters by convention, not enforcement.
- **Template literals:** We use backticks and `${}` instead of string concatenation.
- **No `main` method:** We just write code at the top level. JavaScript runs it directly.
- **`console.log()` instead of `System.out.println()`** (and no semicolons required)."

2. Run it with Node.js:

   ```bash
   node product.js
   ```

**Output:**
```
Product: Laptop | Price: $999.99 | Quantity: 5 | Total Value: $4999.95
Product: Mouse | Price: $29.99 | Quantity: 25 | Total Value: $749.75

Laptop name: Laptop
Laptop price: 999.99
Laptop quantity: 5
```

**Talking Points:**
"Identical output! The logic is the same. The syntax and philosophy are different."

### Part 4: Side-by-Side Comparison (2 minutes)

**Talking Points:**
"Let's compare key aspects directly."

#### Type Declarations

| Aspect | Java | JavaScript |
|--------|------|-----------|
| **Field declaration** | `private String name;` | `this.name` (no type) |
| **Parameter type** | `public Product(String name, double price, int quantity)` | `constructor(name, price, quantity)` |
| **Return type** | `public String getName()` | `getName()` (no type) |

**Talking Points:**
"Java forces you to declare types everywhere. JavaScript doesn't. Both approaches have pros and cons."

#### Object Creation

| Aspect | Java | JavaScript |
|--------|------|-----------|
| **Instantiation** | `Product laptop = new Product(...);` | `const laptop = new Product(...)` |
| **Variable type** | `Product laptop` (must be `Product` type) | `const laptop` (can be any type) |

**Talking Points:**
"Java requires the variable to be declared as the correct type. JavaScript is flexible—the same variable could hold a Product, a string, or anything else."

#### Output

| Aspect | Java | JavaScript |
|--------|------|-----------|
| **Print statement** | `System.out.println("Hello");` | `console.log("Hello")` |
| **String building** | `"Price: $" + price` | `` `Price: $${price}` `` (or `+` concatenation) |

**Talking Points:**
"`System.out.println()` is verbose; `console.log()` is simpler. JavaScript's template literals read more naturally."

#### Encapsulation

| Aspect | Java | JavaScript |
|--------|------|-----------|
| **Privacy** | `private` fields, `public` getters enforce access control | No enforcement; getters by convention |
| **Compile-time check** | Compiler prevents direct field access | No prevention; relies on discipline |

**Talking Points:**
"Java uses `private` to enforce rules. JavaScript trusts the developer. Large teams benefit from Java's structure; small projects benefit from JavaScript's flexibility."

### Part 5: Practical Differences (1 minute)

**Talking Points:**
"Let's talk about what these differences mean in practice."

1. **Compile time vs. Runtime:** Java checks everything before running. JavaScript finds errors as it executes. Example:

   Java: If you try `name = 123;` (assigning a number to a String field), the compiler rejects it immediately.

   JavaScript: `this.name = 123;` works fine. The field holds a number now. You find the bug when the code misbehaves.

**Talking Points:**
"This is why Java is popular for large, complex systems where you want early error detection. JavaScript is popular for web development where quick iteration matters more."

2. **Verbosity vs. Simplicity:** Java requires more boilerplate (getters, type declarations). JavaScript is leaner.

   Java needs explicit getters because of `private`. JavaScript can just access `laptop.name` directly (though good practice still uses getters).

**Talking Points:**
"For a small program, JavaScript is faster to write. For a large system with many developers, Java's structure helps prevent misunderstandings."

3. **What language solves what problem:**

   - **Java:** Enterprise applications, large systems, teams, where reliability is critical.
   - **JavaScript:** Web development, interactive applications, rapid prototyping, anywhere you need flexibility.

   Both are powerful. Both have their place.

### Part 6: Modern JavaScript with TypeScript (1 minute)

**Talking Points:**
"Interestingly, the JavaScript community felt the pain of missing types. A tool called TypeScript adds type checking to JavaScript, combining both worlds."

**Brief example (don't run, just show):**

```typescript
class Product {
  name: string
  price: number
  quantity: number

  constructor(name: string, price: number, quantity: number) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  getDescription(): string {
    return `Product: ${this.name}`
  }
}
```

**Talking Points:**
"TypeScript looks like a mix—the JavaScript syntax with Java-like type declarations. It compiles to JavaScript and runs in the browser or Node.js. This shows you that the industry recognizes both approaches have value. However, for this course, we're sticking with pure JavaScript and Java, which is perfect for learning the fundamentals."

## Key Points to Emphasize

- **Structure and safety matter:** Java's types and visibility modifiers (`private`, `public`) enforce good practices. This scales well.
- **Flexibility enables quick iteration:** JavaScript's dynamic typing and simpler syntax let you experiment fast. Perfect for web development and learning.
- **The core concepts are the same:** Both have objects, methods, constructors, and state. The language differences are about how you express and enforce these concepts.
- **Different languages for different jobs:** Neither is "better"—they're suited to different problems. A senior developer chooses the right tool for the job.
- **Modern tools blend the best of both:** TypeScript exists because the JavaScript community wanted type safety without Java's verbosity.

## Common Questions

**Q: "Which language is better?"**
A: Neither! They're optimized for different goals. Java prioritizes safety and large-team collaboration. JavaScript prioritizes speed and flexibility. For web development, JavaScript is standard. For enterprise systems, Java is common. A well-rounded programmer knows both.

**Q: "Why does Java require so much boilerplate (getters, types, main method)?"**
A: Boilerplate enforces consistency and catches errors early. Yes, it's more typing, but it prevents a whole class of bugs. For large projects with many developers, that trade-off is worthwhile. For small scripts, it's overkill—which is why JavaScript exists!

**Q: "Can you use objects in JavaScript the same way as Java?"**
A: Absolutely! Modern JavaScript (ES6+) classes work exactly like Java classes. The differences are optional. You can write JavaScript that looks a lot like Java if you want to, but you don't have to.

**Q: "Is JavaScript less professional than Java because it's more flexible?"**
A: Not at all! JavaScript powers major companies and complex systems. The flexibility is a feature, not a weakness. Professional JavaScript uses discipline (linters, type checkers, testing) to maintain quality. Java uses the language itself to enforce rules. Different philosophies.

**Q: "Should I learn TypeScript instead of JavaScript?"**
A: No. Learn JavaScript first to understand the language, then TypeScript if you need type safety. TypeScript is a layer on top; you need to know JavaScript to use it well. Same advice with Java: start with the basics, then learn frameworks and patterns.

**Q: "Can Java programs run in the browser like JavaScript?"**
A: Not directly. Java runs on the Java Virtual Machine (JVM), which typically runs on servers or desktop computers. JavaScript is specifically designed for browsers. There are ways to run Java in browsers (like GWT or J2CL), but they're niche. For the web, it's JavaScript (or TypeScript that compiles to JavaScript). For servers, Java is very common.
