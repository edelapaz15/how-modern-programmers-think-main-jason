# Demo 35: Java Compile-and-Run Cycle

**Module:** VII
**Topic:** Introduction to Java
**Estimated Time:** 20 minutes
**Related reading:** [Introduction to Java](../docs/Module-07-Programming-Syntax-and-Logic/05-introduction-to-java.md)

## Objective
Students will write a Java program, compile it with `javac`, see the compiled `.class` file, run it with `java`, understand Java's type system, and witness type-checking errors at compile time.

![Java compiled through javac into bytecode that the JVM runs, beside JavaScript read and run directly by an engine, with a note on when mistakes are caught in each.](../diagrams/png/compiled-vs-interpreted.png)

*This is the point of the whole demo. Project it, then let javac prove the top row by rejecting a deliberate typo.*

## Setup/Prerequisites
- Java Development Kit (JDK) installed (verify with `java --version` and `javac --version` in terminal)
- VS Code or any text editor
- A terminal/command prompt open in a project folder
- Understanding of basic programming concepts from previous JavaScript demos

## Step-by-Step Script

### Part 1: Introduction to Java (2 minutes)

**Talking Points:**
"JavaScript is dynamically typed—you don't declare types, and the language figures them out at runtime. Java is different. Java is statically typed—you declare the type of every variable, parameter, and return value when you write the code. The compiler checks everything before the program runs. This prevents a whole category of bugs."

### Part 2: Writing Your First Java Program (3 minutes)

**Talking Points:**
"Let's write a classic first program: Hello, World! In Java, every program is organized into classes, and we need a `main` method to start."

#### Creating the Java File

1. Create a file named `HelloWorld.java`:

   ```java
   public class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```

**Talking Points:**
"Let's decode this:
- `public class HelloWorld` declares a class named `HelloWorld`. The filename must match the class name: `HelloWorld.java`. Java is strict about this.
- `public static void main(String[] args)` is the entry point—the method that runs when you execute the program. Every Java program needs this exact signature.
- `System.out.println()` prints text to the console. It's Java's version of JavaScript's `console.log()`.
- Notice the semicolons! Java requires them at the end of statements."

2. Save the file as `HelloWorld.java`

### Part 3: Compiling the Code (3 minutes)

**Talking Points:**
"Here's the Java difference: we can't just run the file. First, we compile it. The compiler (`javac`) reads your Java code and produces compiled bytecode (a `.class` file). This bytecode is what actually runs on the Java Virtual Machine (JVM)."

> **Note (the #1 Windows beginner failure):** Before anything else, confirm the JDK is installed **and on your PATH**. In the terminal, run:
>
> ```powershell
> javac --version
> ```
>
> If you see a version number (e.g., `javac 25.0.2` — the exact number doesn't matter), you're good. If instead you get `'javac' is not recognized as an internal or external command` (Command Prompt) or `javac : The term 'javac' is not recognized...` (PowerShell), the JDK either isn't installed or isn't on your PATH. Note that having `java` work but `javac` fail is a classic sign you installed only a JRE, not a full JDK—install the JDK and reopen the terminal so the updated PATH takes effect.

1. In the terminal, navigate to the folder with `HelloWorld.java`:

   ```bash
   cd /path/to/your/project
   ```

2. Compile with `javac`:

   ```bash
   javac HelloWorld.java
   ```

**Result:**
- No output (success!)
- A new file appears: `HelloWorld.class`

**Talking Points:**
"See that `.class` file? That's compiled bytecode. It's not human-readable—it's optimized for the JVM. You don't edit it; the compiler creates it."

3. Look at the files in your directory:

   On Windows (PowerShell or Command Prompt):

   ```powershell
   dir
   ```

   or on macOS/Linux:

   ```bash
   ls
   ```

**Result (Windows PowerShell):**
```
    Directory: C:\path\to\your\project

Mode                 LastWriteTime         Length Name
----                 -------------   ------------ ----
-a---           6/21/2026 10:14 AM            427 HelloWorld.class
-a---           6/21/2026 10:12 AM            123 HelloWorld.java
```

(On macOS/Linux, `ls` simply lists `HelloWorld.class  HelloWorld.java`.)

> **Instructor note:** Two things will differ on your machine. First, the **exact byte counts** vary with the JDK version and line endings — don't read them aloud as if they're fixed. Second, the **output format depends on your shell**: in PowerShell (the course default, and VS Code's default terminal on Windows) `dir` is `Get-ChildItem` and prints the `Mode / LastWriteTime / Length / Name` table above. In Command Prompt, the same `dir` prints an entirely different listing (`Directory of ...`, `<DIR>` rows, and a `N File(s)` byte summary). Both are correct; only the presentation changes. The one thing that matters here is that a **new `.class` file now exists alongside the `.java` file**, and that the `.class` is the bigger of the two.

**Talking Points:**
"Your `.java` file (source code) stays unchanged. The `.class` file (compiled code) is new. Java's philosophy is 'write once, run anywhere'—you compile on any machine, and the `.class` files run on any machine with a JVM."

### Part 4: Running the Program (2 minutes)

**Talking Points:**
"Now let's run it. We use the `java` command (different from `javac`) and pass the class name (without the `.class` extension)."

1. Run the program:

   ```bash
   java HelloWorld
   ```

**Result:**
```
Hello, World!
```

**Talking Points:**
"It works! The JVM loaded the `.class` file and executed it. You'll always use this pattern: compile with `javac`, run with `java`."

2. Make a change to the `.java` file:

   ```java
   System.out.println("Hello from Java!");
   ```

3. Recompile:

   ```bash
   javac HelloWorld.java
   ```

4. Run again:

   ```bash
   java HelloWorld
   ```

**Result:**
```
Hello from Java!
```

**Talking Points:**
"Edit the source, recompile, run. This is the Java development cycle."

### Part 5: Understanding Types (3 minutes)

**Talking Points:**
"Now the big difference: Java's type system. Let's declare variables with explicit types and see what happens."

1. Create a file `Types.java`:

   ```java
   public class Types {
       public static void main(String[] args) {
           int count = 5;
           String name = "Alice";
           double price = 19.99;
           boolean isValid = true;

           System.out.println("Count: " + count);
           System.out.println("Name: " + name);
           System.out.println("Price: " + price);
           System.out.println("Valid: " + isValid);

           // Show type-based operations
           int total = count * 2;
           System.out.println("Double count: " + total);

           String greeting = "Hello, " + name;
           System.out.println(greeting);
       }
   }
   ```

**Talking Points:**
"Each variable has a type:
- `int` = integer (whole numbers)
- `String` = text (note the capital S—it's a class)
- `double` = decimal numbers
- `boolean` = true or false

You must declare the type when you create the variable. Java enforces this."

2. Compile and run:

   ```bash
   javac Types.java
   java Types
   ```

**Result:**
```
Count: 5
Name: Alice
Price: 19.99
Valid: true
Double count: 10
Hello, Alice
```

**Talking Points:**
"The output looks similar to JavaScript, but notice the discipline: every variable has a known type. Java uses this information for optimization and safety."

### Part 6: Type Checking—The Compiler Catches Errors (3 minutes)

**Talking Points:**
"Here's the power of Java's type system: the compiler catches type errors before you run the program. Let's cause an error on purpose and see."

1. Create a file `TypeError.java`:

   ```java
   public class TypeError {
       public static void main(String[] args) {
           int number = 10;
           String text = "Hello";

           // This line has an error—assigning a String to an int variable
           number = text;
       }
   }
   ```

2. Try to compile:

   ```bash
   javac TypeError.java
   ```

**Compiler Error:**
```
TypeError.java:7: error: incompatible types: String cannot be converted to int
        number = text;
                 ^
1 error
```

**Talking Point:** "Read that first line like an address: file name, then `:7`, which is the line number, then what went wrong. And notice the little `^` caret underneath — the compiler is literally pointing at the exact spot it got confused. Compiler errors look intimidating, but they're mostly just very precise directions to the problem."

**Talking Points:**
"The compiler caught it! You can't assign a string to an integer variable. This is impossible without conversion. In JavaScript, this would 'work' (with weird results), but Java says 'no way.' The compiler prevents the error before it happens. This is huge for safety."

3. Fix it with a proper assignment:

   ```java
   int number = 10;
   String text = "Hello";
   String combinedMessage = "The number is " + number + " and the text is " + text;
   System.out.println(combinedMessage);
   ```

4. Recompile and run:

   ```bash
   javac TypeError.java
   java TypeError
   ```

**Result:**
```
The number is 10 and the text is Hello
```

### Part 7: Comparing to JavaScript (1 minute)

**Talking Points:**
"Let's contrast: In JavaScript, you could do `let x = 10; x = "hello";` and it would work (no error). Java prevents this. Different philosophies:
- JavaScript = flexible, catches errors at runtime
- Java = strict, catches errors at compile time

Neither is 'better'—they're tools for different jobs. JavaScript is great for quick prototyping and web development. Java is great for large systems where you need that compile-time safety."

## Key Points to Emphasize

- **Java requires compilation:** `javac` compiles `.java` files to `.class` bytecode. `java` runs the bytecode. Write once, compile once, run anywhere.
- **Every variable must have a type:** `int`, `String`, `double`, `boolean`, etc. Declare the type when you create the variable. The compiler checks that you use it correctly.
- **The compiler is your friend:** It catches type errors before the program runs. Errors at compile time are safer than errors at runtime.
- **Java's main method is required:** Every Java program needs `public static void main(String[] args)`. This is the entry point.
- **Semicolons are mandatory:** Java requires semicolons at the end of statements. The compiler enforces this.

## Common Questions

**Q: "Why does Java make you declare types if JavaScript doesn't?"**
A: Type declarations make code safer and faster. The compiler can optimize better when it knows types. Large teams benefit because misunderstandings are caught early. JavaScript's flexibility is useful for quick scripts, but Java's strictness pays off in larger systems. Different tools for different jobs.

**Q: "What's the difference between compilation and interpretation?"**
A: Interpretation (like JavaScript) reads and executes code on the fly. Compilation (like Java) reads code once, converts it to machine-optimized form, then executes that. Compiled code usually runs faster, but it takes a compilation step first. Java splits the difference with bytecode—it compiles to an intermediate form, then the JVM interprets or JIT-compiles (just-in-time) it for speed.

**Q: "Why is it `java ClassName` not `java ClassName.class`?"**
A: Java convention. You specify the class name without the extension. The JVM knows to look for `ClassName.class`. It's just how Java was designed.

**Q: "Can I have multiple classes in one file?"**
A: You can, but the filename must match the public class. If a file has `public class Foo`, the filename must be `Foo.java`. Private classes in the same file don't have this restriction. For simplicity, one public class per file is the standard practice.

**Q: "Is Java harder than JavaScript?"**
A: Different, not harder. Java requires more upfront setup and strictness, but it teaches you discipline. Many professional programmers learn JavaScript first, then Java, because Java's constraints help you understand best practices that apply everywhere. Stick with it!

**Q: "What happens if I don't include the main method?"**
A: The program won't run. `java ClassName` looks for `public static void main(String[] args)`. If it's not there, you get an error. You can create classes without a main method (helper classes), but something needs a main to start.
