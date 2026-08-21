# Topic 3: Control Flow Mastery

## What Is Control Flow?

**Control flow** is the order in which statements in a program execute. By default, programs execute statements one after another, top to bottom. But that's boring and limiting. Real programs need to make decisions (conditional execution) and repeat actions (loops). Control flow is how you direct the computer to skip some statements, repeat others, and jump around based on conditions.

In business, you understand control flow intuitively:
- **Sequential:** "First do A, then do B, then do C"
- **Conditional:** "If the order is large, apply a discount. Otherwise, don't."
- **Repetitive:** "For each customer, send them a reminder email"

Programming control flow is the same. You're specifying when statements execute and when they're skipped.

## Sequential Execution: The Default

By default, statements execute in order, one after another.

```
PRINT "Step 1"
PRINT "Step 2"
PRINT "Step 3"

// Output:
// Step 1
// Step 2
// Step 3
```

This is straightforward. Statements execute in the order they appear. No magic.

## Conditionals: Making Decisions

**Conditionals** let your program make decisions. They ask a question (a condition) and execute different code based on the answer.

### If Statement

The simplest conditional: "If this condition is true, do this."

```
age = 25

IF age >= 18 THEN
  PRINT "You are an adult"
ENDIF
```

If the condition is true, the statements inside are executed. If the condition is false, they're skipped.

```
age = 15

IF age >= 18 THEN
  PRINT "You are an adult"  // This doesn't execute
ENDIF

PRINT "Done"  // This always executes
```

### If-Else Statement

Often you want to do one thing if a condition is true, and something else if it's false.

```
age = 15

IF age >= 18 THEN
  PRINT "You are an adult"
ELSE
  PRINT "You are a minor"
ENDIF

// Output: You are a minor
```

The program checks the condition. If true, it executes the first block. If false, it executes the else block. Only one block executes; never both.

### If-Else-If-Else Statement

Sometimes you have multiple conditions to check.

```
score = 75

IF score >= 90 THEN
  PRINT "Grade: A"
ELSE IF score >= 80 THEN
  PRINT "Grade: B"
ELSE IF score >= 70 THEN
  PRINT "Grade: C"
ELSE IF score >= 60 THEN
  PRINT "Grade: D"
ELSE
  PRINT "Grade: F"
ENDIF

// Output: Grade: C
```

The program checks conditions in order. As soon as one is true, that block executes and the rest are skipped. If none are true, the final else block executes (if present).

### Comparison Operators

Conditions use comparison operators to create true/false statements.

| Operator | Meaning | Example |
|----------|---------|---------|
| = | Equal to | age = 18 |
| ≠ or != | Not equal to | name ≠ "Admin" |
| > | Greater than | score > 100 |
| < | Less than | count < 10 |
| >= | Greater than or equal | balance >= 0 |
| <= | Less than or equal | temperature <= 32 |

```
age = 25

IF age = 25 THEN
  PRINT "You are 25"
ENDIF

IF age > 18 THEN
  PRINT "You are an adult"
ENDIF

IF score >= 60 THEN
  PRINT "Passing"
ENDIF
```

## Logical Operators: Combining Conditions

Often you need to check multiple conditions together. Logical operators let you combine them.

### AND (All conditions must be true)

```
age = 25
hasLicense = true

IF age >= 18 AND hasLicense = true THEN
  PRINT "You can drive"
ENDIF
```

Both conditions must be true for the whole expression to be true. If either is false, the whole thing is false.

```
// AND truth table
true AND true = true
true AND false = false
false AND true = false
false AND false = false
```

Use AND when you need **all conditions** to be satisfied.

### OR (At least one condition must be true)

```
paymentMethod = "credit_card"

IF paymentMethod = "credit_card" OR paymentMethod = "debit_card" THEN
  PRINT "Payment accepted"
ENDIF
```

At least one condition must be true. If any condition is true, the whole expression is true.

```
// OR truth table
true OR true = true
true OR false = true
false OR true = true
false OR false = false
```

Use OR when you need **at least one** condition to be satisfied.

### NOT (Reverse true/false)

NOT reverses a condition's truth value.

```
isBlocked = true

IF NOT isBlocked THEN
  PRINT "Account is active"
ELSE
  PRINT "Account is blocked"
ENDIF

// Output: Account is blocked
```

```
IF NOT (age >= 18) THEN  // Equivalent to: IF age < 18 THEN
  PRINT "You are a minor"
ENDIF
```

### Combining Logical Operators

You can combine multiple logical operators.

```
// Allow checkout if:
// - Customer is not blocked AND
// - Order amount > 0 AND
// - (Customer is premium OR order amount > $100)

IF NOT isBlocked AND orderAmount > 0 AND (isPremium OR orderAmount > 100) THEN
  PRINT "Proceed with checkout"
ENDIF
```

Note the parentheses—they matter! They group conditions to control evaluation order.

```
// Without parentheses, AND binds tighter than OR
A OR B AND C = A OR (B AND C)

// With parentheses, you can change it
(A OR B) AND C
```

### Common Logic Errors

**Confusing AND and OR:**
```
// WRONG: Find customers in California OR Oregon
IF state = "CA" AND state = "OR" THEN  // Impossible! State can't be both
  PRINT "Target customer"
ENDIF

// CORRECT:
IF state = "CA" OR state = "OR" THEN
  PRINT "Target customer"
ENDIF
```

**Over-parenthesizing (though it's safe):**
```
// Confusing:
IF x > 5 AND y < 10 OR z = 0 THEN

// Clearer:
IF (x > 5 AND y < 10) OR z = 0 THEN
```

### De Morgan's Laws

These laws help you simplify or rewrite logical expressions:
- NOT (A AND B) = (NOT A) OR (NOT B)
- NOT (A OR B) = (NOT A) AND (NOT B)

```
// These two are equivalent:
IF NOT (age < 18 AND isStudent) THEN
  PRINT "Not a student under 18"
ENDIF

IF age >= 18 OR NOT isStudent THEN
  PRINT "Not a student under 18"
ENDIF
```

Rewriting expressions this way sometimes makes them clearer.

## Switch/Case: Multiple Options

When you have many conditions to check, if-else-if chains get verbose. A switch statement is cleaner.

```
dayOfWeek = 3

SWITCH dayOfWeek
  CASE 1:
    PRINT "Monday"
  CASE 2:
    PRINT "Tuesday"
  CASE 3:
    PRINT "Wednesday"
  CASE 4:
    PRINT "Thursday"
  CASE 5:
    PRINT "Friday"
  CASE 6:
    PRINT "Saturday"
  CASE 7:
    PRINT "Sunday"
  DEFAULT:
    PRINT "Invalid day"
END SWITCH

// Output: Wednesday
```

The switch statement checks the value and jumps to the matching case. Think of it as a more readable way to write many if-else-if statements.

**Important:** Each case needs a BREAK statement (in most languages) to prevent "falling through" to the next case:

```
SWITCH dayOfWeek
  CASE 1:
    PRINT "Monday"
    BREAK
  CASE 2:
    PRINT "Tuesday"
    BREAK
  ...
END SWITCH
```

Without BREAK, after printing "Monday," the program would also execute "Tuesday" and beyond. This is rarely what you want (though there are exceptions).

### Switch vs. If-Else

Use switch when:
- You're checking one value against many possibilities
- The possibilities are discrete (exact matches, not ranges)

Use if-else when:
- You're checking multiple different conditions
- Conditions involve ranges or complex logic

```
// Good use of switch
status = "active"
SWITCH status
  CASE "active": ...
  CASE "inactive": ...
  CASE "suspended": ...
END SWITCH

// Bad use of switch (ranges)
age = 25
SWITCH age
  CASE 0-17: ...  // This doesn't work in most languages
  CASE 18-65: ...
  CASE 65+: ...
END SWITCH

// Better with if-else
IF age < 18 THEN
  ...
ELSE IF age <= 65 THEN
  ...
ELSE
  ...
ENDIF
```

## Nested Conditionals

You can put conditionals inside other conditionals. This handles more complex logic.

```
IF user.isLoggedIn THEN
  IF user.isPremium THEN
    PRINT "Show premium content"
  ELSE
    PRINT "Show free content"
  ENDIF
ELSE
  PRINT "Please log in first"
ENDIF
```

This works, but deep nesting becomes hard to read. **Rule of thumb:** If you nest more than 3 levels deep, your logic is probably too complex. Refactor into multiple functions.

**Problem (too deeply nested):**
```
IF condition1 THEN
  IF condition2 THEN
    IF condition3 THEN
      IF condition4 THEN
        PRINT "Finally!"
      ENDIF
    ENDIF
  ENDIF
ENDIF
```

**Solution (flatter, clearer):**
```
IF NOT condition1 THEN
  RETURN
ENDIF
IF NOT condition2 THEN
  RETURN
ENDIF
IF NOT condition3 THEN
  RETURN
ENDIF
IF NOT condition4 THEN
  RETURN
ENDIF
PRINT "Finally!"
```

Or better yet, extract into functions:
```
FUNCTION ProcessData(data)
  IF NOT ValidateInput(data) THEN
    RETURN error
  ENDIF
  IF NOT AuthorizeUser(data) THEN
    RETURN error
  ENDIF
  IF NOT ProcessTransaction(data) THEN
    RETURN error
  ENDIF
  PRINT "Success"
END
```

## Loops: Repeating Actions

Loops let you repeat a block of code multiple times. This is essential for processing collections of data or repeating an action until a condition is met.

### For Loops: Known Repetitions

Use a for loop when you know exactly how many times you want to repeat.

**Basic for loop:**
```
FOR i = 1 TO 5
  PRINT i
END FOR

// Output:
// 1
// 2
// 3
// 4
// 5
```

The variable `i` starts at 1 and increments by 1 each iteration until it reaches 5 (inclusive).

**For loop over an array:**
```
fruits = ["apple", "banana", "orange"]

FOR i = 0 TO LENGTH OF fruits - 1
  PRINT fruits[i]
END FOR

// Output:
// apple
// banana
// orange
```

**For-each loop (iterating over values):**
```
fruits = ["apple", "banana", "orange"]

FOR EACH fruit IN fruits
  PRINT fruit
END FOR

// Output:
// apple
// banana
// orange
```

This is cleaner when you don't need the index; you just want each value.

### While Loops: Unknown Repetitions

Use a while loop when you don't know in advance how many times you'll loop—you loop until a condition becomes false.

```
count = 1
WHILE count <= 5
  PRINT count
  count = count + 1
END WHILE

// Output:
// 1
// 2
// 3
// 4
// 5
```

The loop checks the condition before each iteration. If true, it executes the body. If false, it exits.

**Practical example:**
```
FUNCTION BinarySearch(sortedList, target)
  left = 0
  right = LENGTH OF sortedList - 1

  WHILE left <= right
    mid = (left + right) / 2  // integer division: drop any fraction (floor)
    midValue = sortedList[mid]

    IF midValue = target THEN
      RETURN mid
    ELSE IF midValue < target THEN
      left = mid + 1
    ELSE
      right = mid - 1
    ENDIF
  END WHILE

  RETURN -1  // Not found
END
```

Here, we don't know in advance how many iterations we need. We loop until we find the target or exhaust all options.

### Do-While Loops

A do-while loop is like a while loop, but it checks the condition at the end, so the body executes at least once.

```
count = 1
DO
  PRINT count
  count = count + 1
WHILE count <= 5
```

Use do-while when you need the body to execute at least once. For example:

```
FUNCTION GetValidInput()
  DO
    PRINT "Enter a number between 1 and 10:"
    input = READ user input
  WHILE input < 1 OR input > 10

  RETURN input
END
```

The user gets the prompt at least once, even if no valid input is ever given (though the loop continues until valid input arrives).

## Loop Control: Breaking Out and Skipping

Sometimes you need more control over loops than just the condition.

### Break: Exit the Loop

BREAK immediately exits the loop, even if the condition is still true.

```
FOR i = 1 TO 10
  IF i = 5 THEN
    BREAK
  ENDIF
  PRINT i
END FOR

// Output:
// 1
// 2
// 3
// 4
```

When i reaches 5, BREAK exits the loop. The remaining iterations (5-10) don't execute.

**Practical use:** Searching
```
FUNCTION FindCustomer(customerList, targetID)
  FOR EACH customer IN customerList
    IF customer.id = targetID THEN
      RETURN customer
    ENDIF
  END FOR
  RETURN null  // Not found
END
```

Or more explicitly with BREAK:
```
FUNCTION FindCustomer(customerList, targetID)
  found = null
  FOR EACH customer IN customerList
    IF customer.id = targetID THEN
      found = customer
      BREAK
    ENDIF
  END FOR
  RETURN found
END
```

### Continue: Skip to Next Iteration

CONTINUE skips the rest of the current iteration and jumps to the next one.

```
FOR i = 1 TO 5
  IF i = 3 THEN
    CONTINUE
  ENDIF
  PRINT i
END FOR

// Output:
// 1
// 2
// 4
// 5
```

When i equals 3, CONTINUE skips the PRINT and goes to the next iteration.

**Practical use:** Processing with filters
```
FOR EACH order IN orders
  IF order.isPending THEN
    CONTINUE  // Skip pending orders
  ENDIF
  ProcessOrder(order)
END FOR
```

## Infinite Loops: A Common Mistake

An infinite loop never terminates—it runs forever (or until the program crashes).

```
// DANGER: Infinite loop
count = 1
WHILE count <= 10
  PRINT count
  // Oops! Forgot to increment count
  // count is always 1, so count <= 10 is always true
END WHILE
```

The loop never terminates because count never changes.

**How to avoid:**
1. Make sure your loop has a termination condition
2. Make sure that condition will eventually become false
3. Make sure something inside the loop moves toward making the condition false

```
// CORRECT
count = 1
WHILE count <= 10
  PRINT count
  count = count + 1  // Moving toward condition
END WHILE
```

## Nested Loops

Loops can contain other loops. This is useful for processing multi-dimensional data.

```
FOR row = 1 TO 3
  FOR col = 1 TO 3
    PRINT "(" + row + "," + col + ")"
  END FOR
END FOR

// Output:
// (1,1) (1,2) (1,3)
// (2,1) (2,2) (2,3)
// (3,1) (3,2) (3,3)
```

For each row, the inner loop iterates through all columns. This creates a grid.

**Practical example: Checking for duplicates**
```
FUNCTION HasDuplicates(list)
  FOR i = 0 TO LENGTH OF list - 1
    FOR j = i + 1 TO LENGTH OF list - 1
      IF list[i] = list[j] THEN
        RETURN true  // Found a duplicate
      ENDIF
    END FOR
  END FOR
  RETURN false  // No duplicates
END
```

This checks every pair of elements to see if any two are the same.

**Warning:** Nested loops can be slow for large data. An outer loop of 1000 items and inner loop of 1000 items runs 1,000,000 times!

## Combining Conditionals and Loops

Real-world logic often combines both.

**Filtering a list:**
```
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evenNumbers = []

FOR EACH number IN numbers
  IF number MOD 2 = 0 THEN  // MOD gives remainder; 0 means even
    ADD number TO evenNumbers
  ENDIF
END FOR

PRINT evenNumbers  // [2, 4, 6, 8, 10]
```

**Searching with conditions:**
```
customers = [...]
targetName = "Alice"
found = false

FOR EACH customer IN customers
  IF customer.name = targetName THEN
    PRINT "Found: " + customer
    found = true
    BREAK
  ENDIF
END FOR

IF NOT found THEN
  PRINT "Customer not found"
ENDIF
```

**Transforming data:**
```
temperatures_celsius = [0, 10, 20, 30, 40]
temperatures_fahrenheit = []

FOR EACH celsius IN temperatures_celsius
  fahrenheit = celsius * 9/5 + 32
  ADD fahrenheit TO temperatures_fahrenheit
END FOR

PRINT temperatures_fahrenheit  // [32, 50, 68, 86, 104]
```

## Introduction to Functions: Encapsulating Logic

Before we finish control flow, we need to introduce **functions** because they're the next step in organizing control flow into reusable chunks.

A **function** (also called a **procedure**, **subroutine**, or **method**) is a named block of code that performs a specific task. You define it once, then call it many times.

### Defining and Calling Functions

```
FUNCTION Greet(name)
  PRINT "Hello, " + name + "!"
END

// Call the function
Greet("Alice")  // Output: Hello, Alice!
Greet("Bob")    // Output: Hello, Bob!
```

The function `Greet` takes a parameter (name) and uses it in its logic. Every time you call it, the logic executes with the provided argument.

### Functions with Return Values

Functions can return a value to the caller.

```
FUNCTION Add(a, b)
  sum = a + b
  RETURN sum
END

result = Add(3, 5)
PRINT result  // 8
```

### Functions Organizing Control Flow

Functions are where the four pillars of computational thinking (decomposition, pattern recognition, abstraction, algorithm design) all come together.

```
// Main program
FUNCTION ProcessOrders(orders)
  FOR EACH order IN orders
    IF IsValid(order) THEN
      CalculateTotal(order)
      ApplyDiscount(order)
      ProcessPayment(order)
      SendConfirmation(order)
    ELSE
      LogError(order)
    ENDIF
  END FOR
END

// Support functions
FUNCTION IsValid(order)
  IF order.items is empty THEN
    RETURN false
  ENDIF
  IF order.customer is null THEN
    RETURN false
  ENDIF
  RETURN true
END

FUNCTION CalculateTotal(order)
  total = 0
  FOR EACH item IN order.items
    total = total + item.price
  END FOR
  order.total = total
END

// ... other functions ...
```

Notice how the main function reads at a high level of abstraction: "For each order, validate it, calculate total, apply discount, etc." The details of validation, calculation, etc., are hidden in other functions.

This is how real programs are structured: a hierarchy of functions, each handling one piece of the puzzle, all combining to solve the big problem.

## Pseudocode to Real Programming Languages

Control flow concepts map directly to all programming languages, with syntax differences:

**Python:**
```python
if age >= 18:
    print("Adult")
else:
    print("Minor")

for i in range(1, 6):
    print(i)

while count < 10:
    print(count)
    count += 1
```

**JavaScript:**
```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

while (count < 10) {
    console.log(count);
    count++;
}
```

**Java:**
```java
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

while (count < 10) {
    System.out.println(count);
    count++;
}
```

The logic is identical; only syntax differs. This is why understanding pseudocode and control flow conceptually is so valuable—it transfers to any language.

## Control Flow Anti-Patterns

**Excessive nesting:**
```
// Hard to read and maintain
IF condition1 THEN
  IF condition2 THEN
    IF condition3 THEN
      DoSomething()
    ENDIF
  ENDIF
ENDIF
```

**Solution:** Use early returns or refactor
```
IF NOT condition1 THEN
  RETURN
ENDIF
IF NOT condition2 THEN
  RETURN
ENDIF
IF NOT condition3 THEN
  RETURN
ENDIF
DoSomething()
```

**Using assignment in conditions (confusing):**
```
// Hard to read; easy to confuse = with =
IF (x = 5) THEN  // Assignment, not comparison!
```

**Always use clear comparison:**
```
IF x = 5 THEN  // Comparison
```

**Magic values (no meaning):**
```
IF status = 2 THEN  // What does 2 mean?
```

**Better:**
```
STATUS_ACTIVE = 2
IF status = STATUS_ACTIVE THEN
```

---

## Review and Discussion Questions

1. **Conditional logic design:** You're building an approval system where orders over $1000 require approval from a manager, unless the customer is premium (in which case they're auto-approved). Orders under $1000 are always approved. Write the conditional logic for this. How would you handle the edge case of a missing customer record?

2. **Loop performance:** You have a list of 10,000 customers and want to find a specific customer by ID. Would you use a for loop checking each customer, or would you use a different approach? Why? (Think ahead to next topic's discussion of search algorithms.)

3. **Nested loops:** A common task is removing duplicates from a list. Using nested loops and conditionals, write pseudocode for this. What are the performance implications for a large list?

4. **Control flow in business:** Describe a business process you're familiar with (hiring, expense approval, customer service, etc.) as a series of control flow statements (if/else, loops, etc.). What decisions are made? What actions repeat?

5. **Function decomposition:** Take a complex control flow logic with multiple nested if statements and refactor it using functions. How does breaking it into functions affect readability? Which approach would be easier to test or debug?
