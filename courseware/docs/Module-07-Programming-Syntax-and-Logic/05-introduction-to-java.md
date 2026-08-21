# Topic 5: Introduction to Java
## Learning the Principles of a Strongly Typed, Compiled Language

### Introduction: Why Java?

You've learned JavaScript—a flexible, dynamically typed, interpreted language. Now we're learning Java, which represents a completely different philosophy: explicit structure, strong typing, compilation, and performance.

JavaScript lets you write quickly with minimal boilerplate. Java requires more upfront code, but that code scales to large systems. Banks, insurance companies, governments, and large retailers run on Java. It's not trendy, but it's everywhere.

Why should you learn Java if you already know JavaScript?

1. **Perspective** — Seeing how a different language approaches the same problems deepens your understanding
2. **Type safety** — Static typing catches entire categories of bugs before you run code
3. **Performance** — Java scales to high-traffic, mission-critical systems
4. **Job market** — Java developers are in high demand at enterprises
5. **Compilation** — Understanding how compilation works is foundational knowledge

This section teaches Java fundamentals: the structure, types, control flow, and object-oriented programming basics.

### Why Java? Enterprise Computing, Android, Longevity, Job Market

Java was created by Sun Microsystems in 1995 with a revolutionary promise: "Write once, run anywhere." You compile code once, and it runs on any system with a JVM.

This promise has held for nearly 30 years. A Java program written in 1997 can still compile and run on today's Java releases (Java 21+, with Java 25 as the current LTS). That longevity is unique and invaluable in enterprise environments where systems run for decades.

#### Enterprise Computing

Enterprise means large organizations with complex, mission-critical systems. Banks must process trillions of dollars. Insurance companies must calculate premiums accurately. Governments must provide services to millions.

These systems require:
- **Reliability** — The system must not crash
- **Performance** — Must handle massive load
- **Maintainability** — Teams of developers work on it for years
- **Integration** — Connect to many other systems

Java excels at all of these.

#### Android

Android, the dominant mobile OS, is built on Java. If you want to develop Android apps professionally, you need Java (or Kotlin, which runs on the JVM and is designed to work with Java libraries).

#### Longevity

Companies invest millions in Java systems. They can't afford to rewrite everything when a new language becomes trendy. Java's backward compatibility means code written decades ago still works. This stability is a feature, not a limitation.

#### Job Market

There are more Java jobs than JavaScript jobs in enterprise environments. Senior Java developers command high salaries. The job market for Java is stable and large.

### Java's Philosophy: "Write Once, Run Anywhere" and the JVM

The **Java Virtual Machine (JVM)** is the innovation that made Java special.

Instead of compiling to machine code (which is specific to your CPU and OS), Java compiles to **bytecode**, which is CPU-independent. The JVM then interprets or JIT-compiles the bytecode to machine code at runtime.

```
Java Source Code (.java files)
    ↓
Java Compiler (javac)
    ↓
Bytecode (.class files)
    ↓
Java Virtual Machine (JVM)
    ↓ (interprets or JIT-compiles)
    ↓
Machine Code
    ↓
CPU executes
```

The brilliant part: the same bytecode runs on Windows, macOS, Linux, Android, etc. Each platform has its own JVM; the bytecode is universal.

This "write once, run anywhere" philosophy changed how software was distributed.

### Compiled vs. Interpreted: How Java Does Both

Java is technically compiled (bytecode compilation) and interpreted (JVM interprets bytecode), but not in the way you might think.

1. **Compilation Phase** (fast, happens once)
   - You run `javac HelloWorld.java`
   - Compiler translates to bytecode: `HelloWorld.class`
   - This happens before running

2. **Runtime Phase** (slightly slower, but leverages JIT)
   - You run `java HelloWorld`
   - JVM loads the bytecode
   - JVM interprets bytecode OR JIT-compiles hot paths to machine code
   - Execution is fast because of JIT optimization

Advantages:
- Get compilation benefits (error checking, optimization)
- Get interpretation benefits (portability, flexibility)
- JVM optimizes code based on actual runtime behavior (JIT can be smarter than static compilers)

### Setting Up: JDK Installation and Running Java Programs

The **JDK** (Java Development Kit) includes:
- `javac` — The Java compiler
- `java` — The JVM (runtime)
- Standard library and tools

#### Installing the JDK

1. Visit oracle.com/java or openjdk.java.net
2. Download the latest LTS JDK (Java 25, or Java 21+ if your environment standardizes on it)
3. Install for your OS
4. Verify: Open a terminal and type `java --version`. You should see the version you installed (for example, 25.x.x).

#### Your First Java Program

Create a file `HelloWorld.java`:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

Compile:
```
javac HelloWorld.java
```

A new file `HelloWorld.class` appears (the bytecode).

Run:
```
java HelloWorld
```

Output:
```
Hello, world!
```

You've written and executed Java code. The concepts are the same as JavaScript; the syntax is different.

### Java's Structure: Classes, Methods, the main Method

Everything in Java lives inside a **class**. A class is a template for creating objects, but for now, think of it as a container for code.

```java
public class MyProgram {
    // Code goes here
}
```

Inside a class, you have **methods**—which are functions.

```java
public class MyProgram {
    public static void sayHello() {
        System.out.println("Hello!");
    }

    public static void main(String[] args) {
        sayHello();
    }
}
```

The `main` method is special. When you run the program, the JVM automatically calls `main`. It's the entry point.

### The public static void main(String[] args) Explained Piece by Piece

This is the most important line in Java to understand:

```java
public static void main(String[] args)
```

Let's dissect it:

- **`public`** — This method can be called from anywhere (access modifier)
- **`static`** — This method belongs to the class, not to instances of the class. You call it as `ClassName.methodName()`, not by creating an object first
- **`void`** — This method doesn't return a value (returns nothing)
- **`main`** — The method name. The JVM looks for this specific name to start the program
- **`String[] args`** — The method accepts one parameter: an array of strings. These are command-line arguments passed to the program

Example with command-line arguments:

```java
public class Greeter {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("Hello, " + args[0] + "!");
        } else {
            System.out.println("Hello, stranger!");
        }
    }
}
```

Compile and run:
```
javac Greeter.java
java Greeter Alice
```

Output:
```
Hello, Alice!
```

- `args[0]` is "Alice" (the first command-line argument)
- `args.length` is 1 (one argument was passed)

### Variables and Data Types: int, double, boolean, char, String

Java is **strongly typed**. Every variable must have a declared type. You can't change its type.

```java
int age = 25;
age = 26;      // OK: 26 is an int
age = "old";   // Error: can't put a String in an int variable
```

#### Primitive Types

**int** — Integer numbers

```java
int count = 42;
int negative = -10;
int large = 1000000;
```

**double** — Floating-point numbers

```java
double price = 19.99;
double pi = 3.14159;
```

**boolean** — True or false

```java
boolean isStudent = true;
boolean isPaid = false;
```

**char** — Single character

```java
char grade = 'A';
char symbol = '$';
```

Note: chars use single quotes; strings use double quotes.

**String** — Text

```java
String name = "Alice";
String sentence = "Hello, world!";
```

Unlike primitive types, `String` is an object. It has methods:

```java
String text = "hello";
System.out.println(text.toUpperCase());  // "HELLO"
System.out.println(text.length());       // 5
System.out.println(text.charAt(0));      // 'h'
```

#### Type Casting

Sometimes you need to convert between types:

```java
int x = 5;
double y = (double) x;  // Convert int to double; y is 5.0

double price = 19.99;
int cents = (int) price;  // Convert double to int; cents is 19 (truncated)
```

Widening (small type to large) is automatic:

```java
int x = 5;
double y = x;  // Automatic; y is 5.0
```

Narrowing (large type to small) requires explicit casting:

```java
double y = 5.5;
int x = (int) y;  // Must cast; x is 5
```

### Operators: Arithmetic, Comparison, Logical

Same as JavaScript, with identical syntax.

#### Arithmetic

```java
int a = 10;
int b = 3;

System.out.println(a + b);    // 13
System.out.println(a - b);    // 7
System.out.println(a * b);    // 30
System.out.println(a / b);    // 3 (integer division; no decimal)
System.out.println(a % b);    // 1 (modulo)
System.out.println(a * a);    // 100 (multiplication; Java has no ** operator — use Math.pow(a, 2) for exponentiation)
```

Note: `a / b` is integer division. `10 / 3` is `3`, not `3.33`. If you want the decimal, one operand must be a double:

```java
double result = 10 / 3.0;  // 3.3333...
```

#### Comparison

```java
int x = 5;
int y = 10;

System.out.println(x < y);    // true
System.out.println(x > y);    // false
System.out.println(x <= y);   // true
System.out.println(x >= y);   // false
System.out.println(x == y);   // false
System.out.println(x != y);   // true
```

#### Logical

```java
boolean a = true;
boolean b = false;

System.out.println(a && b);   // false (AND)
System.out.println(a || b);   // true (OR)
System.out.println(!a);       // false (NOT)
```

### Conditionals: if/else, switch

Identical to JavaScript in concept, slightly different syntax.

#### if/else

```java
int age = 25;

if (age >= 18) {
    System.out.println("You are an adult");
} else {
    System.out.println("You are a minor");
}
```

With multiple branches:

```java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
```

#### Ternary Operator

```java
int age = 25;
String status = age >= 18 ? "adult" : "minor";
System.out.println(status);  // "adult"
```

#### switch Statement

```java
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Unknown");
}
// Prints "Wednesday"
```

Remember `break`! Without it, execution falls through to the next case.

### Loops: for, while, do-while, enhanced for

#### for Loop

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// Prints: 0, 1, 2, 3, 4
```

Same structure as JavaScript: `for (init; condition; increment)`

#### while Loop

```java
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}
// Prints: 0, 1, 2, 3, 4
```

#### do-while Loop

The body executes at least once:

```java
int count = 0;
do {
    System.out.println(count);
    count++;
} while (count < 5);
// Prints: 0, 1, 2, 3, 4
```

The difference: if condition is false from the start, `while` never executes, but `do-while` executes once.

#### Enhanced for Loop (for-each)

Iterate over arrays and collections:

```java
int[] numbers = {1, 2, 3, 4, 5};

for (int num : numbers) {
    System.out.println(num);
}
// Prints: 1, 2, 3, 4, 5
```

The syntax `for (type variable : collection)` is cleaner than traditional for loops.

### Arrays in Java: Declaration, Initialization, Accessing Elements

Arrays are fixed-size collections of a single type.

#### Declaration and Initialization

```java
// Declaration: specify type and size
int[] numbers = new int[5];  // Array of 5 integers, all initially 0

// Declaration with values
int[] numbers = {1, 2, 3, 4, 5};

// String array
String[] fruits = {"apple", "banana", "cherry"};

// Accessing elements
System.out.println(numbers[0]);    // 1
System.out.println(fruits[1]);     // "banana"

// Array length
System.out.println(numbers.length);  // 5

// Modifying elements
numbers[0] = 100;
```

#### Multidimensional Arrays

```java
// 2D array (matrix)
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[0][0]);  // 1
System.out.println(matrix[1][2]);  // 6
```

#### ArrayLists (Dynamic Arrays)

Arrays are fixed-size. **ArrayList** is a resizable array:

```java
import java.util.ArrayList;

ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(1);
numbers.add(2);
numbers.add(3);

System.out.println(numbers.get(0));  // 1
System.out.println(numbers.size());   // 3

numbers.remove(1);  // Remove element at index 1
System.out.println(numbers.size());   // 2
```

The `<Integer>` syntax (generics) specifies what type the ArrayList holds.

### Methods: Defining, Parameters, Return Types, Calling

A **method** is a reusable function inside a class.

```java
public class Calculator {
    // Method that takes parameters and returns a value
    public static int add(int a, int b) {
        return a + b;
    }

    // Method that doesn't return a value
    public static void printSum(int a, int b) {
        System.out.println("Sum: " + (a + b));
    }

    public static void main(String[] args) {
        int result = add(5, 3);        // 8
        printSum(5, 3);                // Prints: Sum: 8
    }
}
```

#### Method Signature

```java
public static int add(int a, int b)
```

- **`public`** — Accessible from other classes
- **`static`** — Belongs to the class, not instances
- **`int`** — Return type (what the method gives back)
- **`add`** — Method name
- **`(int a, int b)`** — Parameters (inputs the method accepts)

#### Overloading

You can have multiple methods with the same name if they have different parameters:

```java
public class Printer {
    public static void print(int x) {
        System.out.println("Integer: " + x);
    }

    public static void print(String x) {
        System.out.println("String: " + x);
    }

    public static void print(double x) {
        System.out.println("Double: " + x);
    }

    public static void main(String[] args) {
        print(5);        // Calls first version
        print("hello");  // Calls second version
        print(3.14);     // Calls third version
    }
}
```

Java figures out which method to call based on the argument types.

### Object-Oriented Programming Introduction: Classes and Objects

Java is object-oriented. A **class** is a template; an **object** is an instance of that class.

```java
public class Person {
    // Fields (properties)
    String name;
    int age;

    // Constructor (creates objects)
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    public void greet() {
        System.out.println("Hello, I'm " + name);
    }

    public static void main(String[] args) {
        // Create objects (instances of the Person class)
        Person alice = new Person("Alice", 30);
        Person bob = new Person("Bob", 25);

        alice.greet();  // "Hello, I'm Alice"
        bob.greet();    // "Hello, I'm Bob"

        System.out.println(alice.age);  // 30
    }
}
```

#### Key Concepts

- **`new`** — Creates a new object
- **Constructor** — The `Person(String name, int age)` method that initializes objects
- **`this`** — Refers to the current object (`this.name` means "this object's name field")
- **Method call** — `alice.greet()` calls the `greet` method on the `alice` object

### Encapsulation: Private Fields, Public Methods, Getters/Setters

**Encapsulation** is hiding internal details and exposing only what's necessary.

```java
public class BankAccount {
    // Private: only accessible within this class
    private double balance;
    private String accountNumber;

    // Constructor
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // Public: accessible from other classes
    // Getter: read the balance
    public double getBalance() {
        return balance;
    }

    // Setter: modify the balance with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

// Usage
BankAccount account = new BankAccount("12345", 1000);
System.out.println(account.getBalance());  // 1000
account.deposit(500);
System.out.println(account.getBalance());  // 1500
// account.balance = -1000;  // ERROR: balance is private; can't access
```

Why encapsulation?

1. **Validation** — The `deposit` method ensures you can't add negative amounts
2. **Hide complexity** — Internal details don't need to be exposed
3. **Controlled changes** — If internal representation changes, the public interface stays the same
4. **Safety** — Prevent misuse and data corruption

### Constructors: Creating Objects

A **constructor** is a special method that runs when you create an object. It initializes fields.

```java
public class Dog {
    String name;
    String breed;

    // Constructor
    public Dog(String name, String breed) {
        this.name = name;
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + " barks: Woof!");
    }

    public static void main(String[] args) {
        Dog dog = new Dog("Rex", "Labrador");
        dog.bark();  // "Rex barks: Woof!"
    }
}
```

You can have multiple constructors (overloading):

```java
public class Dog {
    String name;
    String breed;

    // Constructor 1: requires both parameters
    public Dog(String name, String breed) {
        this.name = name;
        this.breed = breed;
    }

    // Constructor 2: requires only name (breed defaults)
    public Dog(String name) {
        this.name = name;
        this.breed = "Unknown";
    }

    public static void main(String[] args) {
        Dog dog1 = new Dog("Rex", "Labrador");   // Uses first constructor
        Dog dog2 = new Dog("Buddy");              // Uses second constructor
    }
}
```

### Java vs. JavaScript: Key Differences That Trip Up Beginners

You know JavaScript. Here's how Java differs:

| Aspect | JavaScript | Java |
|--------|-----------|------|
| **Typing** | Dynamic (inferred) | Static (declared) |
| **Compilation** | Interpreted | Compiled to bytecode |
| **Classes** | Optional; objects are flexible | Required; everything is in classes |
| **Variable Declaration** | `let`, `const` | Type required: `int x = 5;` |
| **Functions** | Functions are first-class; can exist outside objects | Methods exist inside classes |
| **Type Safety** | Weak; can do surprising things | Strong; prevented at compile time |
| **Null Check** | `if (x)` checks if x is truthy | `if (x != null)` checks specifically for null |
| **Semicolons** | Optional | Required |
| **Braces** | Optional for single-statement blocks | Required |

#### Common Mistakes Coming from JavaScript

**Mistake 1: Forgetting types**
```javascript
// JavaScript: fine
let x = 5;

// Java: ERROR
let x = 5;  // Let doesn't exist; must specify type
int x = 5;  // Correct
```

**Mistake 2: Forgetting to create objects**
```java
// Wrong: methods are on classes, not in thin air
System.out.println(toUpperCase("hello"));

// Right: create a String object first
String text = "hello";
System.out.println(text.toUpperCase());
```

**Mistake 3: Not understanding static vs. instance methods**
```java
public class Greeter {
    public void greet() {  // Instance method
        System.out.println("Hello");
    }
}

// Wrong: can't call instance method on the class
Greeter.greet();

// Right: create an object first
Greeter greeter = new Greeter();
greeter.greet();
```

Unless the method is `static`:

```java
public class Greeter {
    public static void greet() {  // Static method
        System.out.println("Hello");
    }
}

// Right: call on the class
Greeter.greet();
```

### Java's Ecosystem: Maven/Gradle, Spring Framework

**Maven** and **Gradle** are build tools. They manage dependencies, compile code, and run tests.

A `pom.xml` file specifies dependencies:

```xml
<project>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

Each `<dependency>` names a library to pull in: the group that publishes it, the specific artifact,
and (usually) a version. Spring Boot projects let you leave the version off, because the project
inherits a curated set of versions that are known to work together — one less thing to get wrong.

Run `mvn package` and Maven downloads dependencies, compiles code, and packages it.

**Spring Framework** is Java's most popular framework for building applications. It handles:
- Web servers (Spring Boot)
- Database connections (Spring Data)
- Authentication (Spring Security)
- Testing (Spring Test)

A minimal Spring Boot web application:

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
public class HelloController {
    @GetMapping("/")
    public String hello() {
        return "Hello, world!";
    }
}
```

Run this and visit `http://localhost:8080/` to see "Hello, world!". Spring handles the web server, routing, and HTTP.

### Reading Java Error Messages: Compilation Errors vs. Runtime Exceptions

#### Compilation Errors

Caught before running. The compiler tells you exactly what's wrong:

```
HelloWorld.java:5: error: cannot find symbol
    System.out.println(notDeclared);
                       ^
  symbol:   variable notDeclared
  location: class HelloWorld
1 error
```

This says: Line 5, column 23, you're using a variable `notDeclared` that doesn't exist. This happens during `javac`.

#### Runtime Exceptions

Happen while running. The JVM prints a stack trace:

```java
public class Crash {
    public static void main(String[] args) {
        String text = null;
        System.out.println(text.length());  // NullPointerException!
    }
}
```

Running this prints:

```
Exception in thread "main" java.lang.NullPointerException
    at Crash.main(Crash.java:4)
```

"At Crash.java:4, you tried to call `.length()` on a null reference." Stack traces tell you exactly where and why the program crashed.

### A Complete Example: Banking System

Let's write a small, realistic Java program:

```java
import java.util.ArrayList;

public class BankingSystem {
    static class Account {
        private String accountNumber;
        private String holderName;
        private double balance;

        // Constructor
        public Account(String accountNumber, String holderName, double initialBalance) {
            this.accountNumber = accountNumber;
            this.holderName = holderName;
            this.balance = initialBalance;
        }

        // Getters
        public String getAccountNumber() {
            return accountNumber;
        }

        public String getHolderName() {
            return holderName;
        }

        public double getBalance() {
            return balance;
        }

        // Methods
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                System.out.println("Deposited: $" + amount);
            } else {
                System.out.println("Deposit amount must be positive");
            }
        }

        public void withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                System.out.println("Withdrawn: $" + amount);
            } else if (amount > balance) {
                System.out.println("Insufficient funds");
            } else {
                System.out.println("Withdrawal amount must be positive");
            }
        }

        public void printStatement() {
            System.out.println("=== Account Statement ===");
            System.out.println("Account #: " + accountNumber);
            System.out.println("Holder: " + holderName);
            System.out.println("Balance: $" + String.format("%.2f", balance));
        }
    }

    public static void main(String[] args) {
        // Create accounts
        Account account1 = new Account("12345", "Alice", 1000);
        Account account2 = new Account("67890", "Bob", 500);

        // ArrayList of accounts
        ArrayList<Account> accounts = new ArrayList<>();
        accounts.add(account1);
        accounts.add(account2);

        // Perform transactions
        account1.deposit(500);
        account1.withdraw(200);
        account1.printStatement();

        System.out.println();

        account2.deposit(1000);
        account2.withdraw(300);
        account2.printStatement();

        // Show all accounts
        System.out.println("\n=== All Accounts ===");
        for (Account account : accounts) {
            System.out.println(account.getHolderName() + ": $" + account.getBalance());
        }
    }
}
```

Run it:

```
javac BankingSystem.java
java BankingSystem
```

Output:

```
Deposited: $500.0
Withdrawn: $200.0
=== Account Statement ===
Account #: 12345
Holder: Alice
Balance: $1300.00

Deposited: $1000.0
Withdrawn: $300.0
=== Account Statement ===
Account #: 67890
Holder: Bob
Balance: $1200.00

=== All Accounts ===
Alice: $1300.0
Bob: $1200.0
```

This example shows:
- Classes and constructors
- Private fields and public methods (encapsulation)
- Validation (checking conditions before acting)
- Objects and collections (ArrayList)
- Control flow and loops
- String formatting

It's a realistic mini-application.

### Bridge from Business: Java's Role in Enterprise Systems

Why is Java used in banks, insurance companies, and large corporations?

1. **Stability** — Code written 20 years ago still works
2. **Performance** — Scales to millions of transactions per second
3. **Maturity** — Thousands of battle-tested libraries
4. **Team Scaling** — Large teams can work on the same codebase
5. **Integration** — Connects to mainframes, databases, and legacy systems

When a bank processes trillions of dollars daily, reliability is paramount. Java's type system and exception handling catch bugs early. The JVM's optimization means code runs fast at massive scale.

This is why Java is enterprise standard, even if it's not trendy for startups.

---

## Review and Discussion Questions

1. **Compilation vs. Interpretation:** Write a simple Java program and:
   - Compile it with `javac`
   - Observe the `.class` file created
   - Run it with `java`

   Compare this to running a JavaScript file with `node`. What are the differences? What are the advantages of each approach?

2. **Type System:** Write a Java program that attempts to:
   - Assign a String to an int variable
   - Call a method that doesn't exist on a String
   - Access an array element out of bounds

   Capture the error messages. How do they help you understand what went wrong?

3. **Objects and Classes:** Design a Java class to represent a `Book`. It should have:
   - Private fields: title, author, ISBN, price, quantity in stock
   - Constructor to initialize all fields
   - Public methods: getTitle(), getPrice(), updatePrice(), addStock(), removeStock()
   - Validation: price and quantity can't be negative

   Write a complete implementation.

4. **Arrays vs. ArrayLists:** Write two versions of a program that:
   - Stores a list of product names and prices

   First version using arrays (fixed size), second using ArrayList (dynamic size). Which is easier? Which is more flexible?

5. **Encapsulation:** Explain why this is bad design:
   ```java
   public class Person {
       public String name;
       public int age;
   }
   ```

   Then rewrite it with proper encapsulation, including validation (age can't be negative).

6. **Java vs. JavaScript:** Write the same program (e.g., calculating factorial or summing an array) in both JavaScript and Java. Compare:
   - Code length and complexity
   - Type declarations
   - Syntax differences
   - How long it took to understand the error messages

7. **Career Perspective:** Imagine you're at a company choosing between JavaScript and Java for a critical backend system that will run for 10+ years and scale to millions of users. What factors would influence your choice? What are the tradeoffs?

