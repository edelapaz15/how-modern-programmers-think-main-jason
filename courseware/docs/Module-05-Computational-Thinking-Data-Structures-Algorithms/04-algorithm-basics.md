# Topic 4: Algorithm Basics

## What Is an Algorithm?

An **algorithm** is a precise, step-by-step procedure for solving a problem or accomplishing a task. It's not some magical or mysterious concept—you use algorithms constantly in everyday life.

A recipe is an algorithm: gather ingredients, mix them in a specific order, heat at a certain temperature, wait a certain time, remove from heat. Follow the steps, and you get the desired result.

Driving directions are an algorithm: turn left at Main Street, go 2 miles, turn right at the light, look for the blue building on the left. Follow the steps, and you reach your destination.

An organizational process is an algorithm: a new employee goes through orientation, is assigned to a team, is paired with a mentor, completes training. Follow the steps, and you have an onboarded employee.

Programming algorithms are the same—they're just more precise and formal. When you write code, you're expressing algorithms in a programming language.

### What Makes Something an Algorithm?

For a procedure to be an algorithm, it must have these properties:

**Well-defined input:** The algorithm knows what information it starts with. "Here's a list of numbers; find the largest."

**Well-defined output:** The algorithm knows what it should produce. "I'll return the largest number."

**Clear, unambiguous steps:** Each step is precise enough that anyone (or any computer) can follow it without guessing. Not "make it better" but "if the value is greater than the current max, replace it."

**Termination:** The algorithm must eventually finish. An algorithm that can loop forever on some input isn't a working algorithm — it's a bug. (Long-running *programs* like a web server do loop indefinitely on purpose, but that's a program waiting for work, not an algorithm failing to finish.)

**Correctness:** The algorithm produces the right answer (or at least a predictable, understandable answer).

### Algorithms in Real Business

Business processes are algorithms:

**Customer onboarding:**
1. Customer fills out registration form
2. Validate email by sending confirmation link
3. IF email confirmed, THEN create account
4. ELSE send failure notification
5. IF account created, THEN set up initial profile
6. Send welcome email
7. Schedule first meeting with account manager

**Expense reimbursement:**
1. Employee submits receipt and business justification
2. System validates receipt amount and date
3. IF amount < $500 AND employee has never exceeded limit, THEN auto-approve
4. ELSE send to manager for manual approval
5. IF approved, THEN process payment
6. ELSE send denial to employee

These are algorithms—precise, unambiguous steps producing a predictable outcome.

## Why Algorithm Efficiency Matters

Here's a profound insight: **there's usually more than one correct algorithm to solve a problem.** The question is: which algorithm is better?

Consider finding a name in a list. Let's say we have a phone book with 100,000 names.

**Approach 1: Check every name**
"I'll look at the first name. Is it the one? No. Look at the second name. Is it the one? No. Keep checking until I find it or reach the end."

For a name near the beginning, this is fast. For a name near the end, or if the name isn't in the list, this requires checking all 100,000 names.

**Approach 2: Use the fact that names are alphabetical**
"What letter does the name start with? Open to roughly that letter. Too early or too late? Narrow the section. Repeat until found."

For any name, this requires checking far fewer entries—maybe 17 checks instead of 100,000.

Both approaches are correct. Both will find the name (or determine it's not there). But one is drastically faster.

This is why **algorithm efficiency matters**: different algorithms solve the same problem with vastly different performance implications. In the real world:
- Slow algorithms might time out and frustrate users
- Slow algorithms might waste server resources and cost money
- Slow algorithms might fail on large datasets
- Fast algorithms delight users with snappy responses

The choice of algorithm affects user experience, system costs, and scalability.

## Linear Search: The Straightforward Approach

**Linear search** is the simplest search algorithm. You check every item in order until you find what you're looking for.

### How Linear Search Works

```
FUNCTION LinearSearch(list, target)
  FOR i = 0 TO LENGTH OF list - 1
    IF list[i] = target THEN
      RETURN i  // Found at position i
    ENDIF
  END FOR
  RETURN -1  // Not found
END

// Example
numbers = [10, 20, 30, 40, 50]
result = LinearSearch(numbers, 30)
PRINT result  // 2 (position of 30)

result = LinearSearch(numbers, 25)
PRINT result  // -1 (not found)
```

The algorithm is straightforward:
1. Start at the first item
2. Check if it matches the target
3. If yes, return the position
4. If no, move to the next item
5. Repeat until found or you reach the end
6. If you reach the end without finding it, return -1

### When Linear Search Is Appropriate

Use linear search when:
- The list is small (a few hundred items or less)
- The list is unsorted (you can't use binary search)
- The items you're searching for are frequently at the beginning of the list
- You only search occasionally

**Example: Checking if a username is in a small list**
```
FUNCTION IsUsernameAvailable(desiredUsername)
  blockedUsernames = ["admin", "system", "root", "test"]

  FOR EACH username IN blockedUsernames
    IF username = desiredUsername THEN
      RETURN false  // Username is blocked
    ENDIF
  END FOR

  RETURN true  // Username is available
END
```

This uses linear search on a small list of reserved names. That's fine.

### Limitations of Linear Search

The main limitation is speed on large datasets. If the list has 1 million items:
- Best case: the item is first; you check 1 item
- Average case: you check 500,000 items
- Worst case: the item is last or doesn't exist; you check 1 million items

For a million-item list, checking millions of items takes time and resources. This is where better algorithms help.

## Binary Search: Divide and Conquer

**Binary search** is a much faster algorithm, but it requires one condition: the list must be sorted. Given that condition, binary search repeatedly cuts the search space in half, so even a very large list takes only a handful of steps.

### How Binary Search Works

Imagine looking for a person in an alphabetically sorted directory.

You don't start at "A" and work forward. Instead:
1. Open the middle. Is your target's name before or after this position?
2. If after, focus on the second half. Throw away the first half.
3. Open the middle of the second half. Before or after?
4. Keep dividing in half until you find it or determine it's not there.

This "divide and conquer" approach eliminates half the remaining search space with each step.

### Binary Search Algorithm

```
FUNCTION BinarySearch(sortedList, target)
  left = 0
  right = LENGTH OF sortedList - 1

  WHILE left <= right
    mid = (left + right) / 2  // integer division: drop any fraction (floor)
    midValue = sortedList[mid]

    IF midValue = target THEN
      RETURN mid  // Found!
    ELSE IF midValue < target THEN
      left = mid + 1  // Search right half
    ELSE
      right = mid - 1  // Search left half
    ENDIF
  END WHILE

  RETURN -1  // Not found
END

// Example
sortedNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
result = BinarySearch(sortedNumbers, 60)
PRINT result  // 5 (position of 60)

// Trace through (mid = floor((left + right) / 2)):
// Step 1: left=0, right=8, mid = 4, sortedNumbers[4] = 50. Target 60 > 50, so search right (left = 5)
// Step 2: left=5, right=8, mid = 6, sortedNumbers[6] = 70. Target 60 < 70, so search left (right = 5)
// Step 3: left=5, right=5, mid = 5, sortedNumbers[5] = 60. Found! Return 5
```

Visualized:

```
Step 1: left=0, right=8, mid=4 -> 60 > 50, search right (left = 5)
             [10, 20, 30, 40, 50, 60, 70, 80, 90]
              left            mid             right

Step 2: left=5, right=8, mid=6 -> 60 < 70, search left (right = 5)
             [10, 20, 30, 40, 50, 60, 70, 80, 90]
                                  leftmid     right
                                  (5) (6)     (8)

Step 3: left=5, right=5, mid=5 -> 60 = 60, found! Return 5
             [10, 20, 30, 40, 50, 60, 70, 80, 90]
                                  left
                                  mid
                                  right
```

### Comparing Linear and Binary Search

For a list of 1,000,000 items:

**Linear search:**
- Best case: 1 check
- Average case: 500,000 checks
- Worst case: 1,000,000 checks

**Binary search:**
- Best case: 1 check
- Average case: ~20 checks
- Worst case: ~20 checks

Binary search checks at most about 20 items! This is because you're halving the search space each time:
- Start: 1,000,000
- After 1st check: 500,000
- After 2nd check: 250,000
- After 3rd check: 125,000
- ...continuing...
- After 20th check: ~1

That's the power of the divide-and-conquer approach.

### The Trade-off: Sorting

Binary search requires sorted data. If your data isn't sorted, you must sort it first. Sorting takes time!

**Question:** If I have to sort before using binary search, when is it worth it?

**Answer:** If you search multiple times, sorting is worth it. For example:
- Search once in unsorted data: 1,000,000 checks with linear search
- Sort (takes ~20 million operations) + search once with binary: ~20 checks total = 20 million total operations (worse than just linear search once)

But:
- Sort once (20 million operations) + search 1000 times (20 checks each): 20 million + 20,000 = 20 million total operations (much better than 1 billion operations with linear search 1000 times)

This is a fundamental tradeoff in algorithm design: invest work upfront (sorting) to make subsequent operations faster.

## Introduction to Big O Notation

How do programmers discuss and compare algorithm efficiency? They use **Big O notation**, a mathematical way of describing how an algorithm's running time grows as the input size increases.

Big O is not about exact numbers. It's about the order of magnitude: does the algorithm run 10 times slower for 10 times more data? 100 times slower? The same speed?

### Common Big O Notations

**O(1) - Constant time**
The algorithm takes the same amount of time regardless of input size.

```
FUNCTION GetFirstElement(list)
  RETURN list[0]
END
```

Whether the list has 10 items or 10 million, getting the first element takes the same amount of time.

**O(n) - Linear time**
The running time grows proportionally with the input size. If you double the input, running time doubles.

```
FUNCTION LinearSearch(list, target)
  FOR i = 0 TO LENGTH OF list - 1
    IF list[i] = target THEN
      RETURN i
    ENDIF
  END FOR
  RETURN -1
END
```

For a list of 1000 items, you might check 500 items on average. For a list of 10,000 items, you might check 5000 items on average. Linear relationship.

**O(log n) - Logarithmic time**
The running time grows logarithmically. Doubling the input size adds just one more step.

```
FUNCTION BinarySearch(sortedList, target)
  // As shown above
END
```

For 1000 items, ~10 steps. For 10,000 items, ~13 steps. For 1,000,000 items, ~20 steps. Much slower growth than linear.

**O(n²) - Quadratic time**
The running time grows with the square of the input size. Double the input, and it takes 4 times longer.

```
FUNCTION HasDuplicates(list)
  FOR i = 0 TO LENGTH OF list - 1
    FOR j = i + 1 TO LENGTH OF list - 1
      IF list[i] = list[j] THEN
        RETURN true
      ENDIF
    END FOR
  END FOR
  RETURN false
END
```

For 10 items, ~50 comparisons. For 100 items, ~5000 comparisons. For 1000 items, ~500,000 comparisons.

**O(n log n) - Linearithmic time**
A middle ground between linear and quadratic. This is the complexity of efficient sorting algorithms.

**O(2^n) - Exponential time**
The running time doubles for each additional input item. This is very slow. Avoid algorithms with this complexity on large inputs.

```
FUNCTION FibonacciNaive(n)
  IF n <= 1 THEN
    RETURN n
  ENDIF
  RETURN FibonacciNaive(n-1) + FibonacciNaive(n-2)
END
```

For n=30, this does ~2^30 = 1 billion operations!

### Big O Comparison

```
                Running Time
Notation    10 items  100 items  1000 items
O(1)             1         1          1
O(log n)         3         7         10
O(n)            10       100       1000
O(n log n)      33       664       9966
O(n²)           100    10000    1000000
O(2^n)        1024    too long    too long
```

As input grows, O(1) is always fastest, O(n²) becomes slow, and O(2^n) becomes impossibly slow.

### Big O Simplifications

Big O ignores constant factors and focuses on growth. So:
- O(2n) is simplified to O(n)
- O(n² + n) is simplified to O(n²)
- O(3 log n) is simplified to O(log n)

Why? Because as n grows large, the dominant term matters most. For small n, constants matter, but Big O is about scaling to large inputs.

### Real-World Big O Examples

**O(1) - Getting a value from an object by key**
```
customer = {"name": "Alice", "id": 101, ...}
print customer["name"]  // Always fast, regardless of how many properties
```

**O(n) - Iterating through a list**
```
FOR EACH item IN itemList
  ProcessItem(item)
END FOR
```

**O(n²) - Sorting with inefficient algorithm (bubble sort)**
For each item, you compare it with every other item. That's n * n comparisons.

**O(log n) - Binary search**
Each step eliminates half the remaining items.

**O(n log n) - Efficient sorting (merge sort, quicksort)**
Much faster than O(n²) for large lists.

## Common Sorting Algorithms (Conceptual Overview)

Sorting is such a common operation that we should understand the main approaches.

### Bubble Sort: The Intuitive but Slow Approach

Bubble sort repeatedly steps through the list, compares adjacent items, and swaps them if they're in the wrong order. Larger items "bubble" to the end.

```
FUNCTION BubbleSort(list)
  length = LENGTH OF list

  FOR i = 0 TO length - 1
    swapped = FALSE

    FOR j = 0 TO length - i - 2
      IF list[j] > list[j + 1] THEN
        // Swap
        temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp
        swapped = TRUE
      ENDIF
    END FOR

    // Nothing moved on this pass, so the list is already in order
    IF swapped = FALSE THEN
      RETURN list
    ENDIF
  END FOR

  RETURN list
END
```

The `swapped` flag is what earns bubble sort its O(n) best case: hand it a list that's already
sorted and the first pass makes no swaps, so it stops after one trip through the data. Without
that flag it would keep grinding through every pass regardless, and its best case would be O(n²)
like its worst.

**Example: Sorting [5, 2, 8, 1, 9]**

```
Pass 1: [5, 2, 8, 1, 9]
        [2, 5, 8, 1, 9] (compared 5 and 2, swapped)
        [2, 5, 1, 8, 9] (compared 8 and 1, swapped)
        [2, 5, 1, 8, 9] (no swap needed)

Pass 2: [2, 5, 1, 8, 9]
        [2, 1, 5, 8, 9]
        [2, 1, 5, 8, 9]

... and so on until sorted
```

**Complexity:** O(n²). With 1000 items, that's ~500,000 comparisons.

### Selection Sort: Find and Place

Selection sort finds the smallest item, places it first, then finds the next smallest, and so on.

```
FUNCTION SelectionSort(list)
  length = LENGTH OF list

  FOR i = 0 TO length - 1
    minIndex = i

    FOR j = i + 1 TO length - 1
      IF list[j] < list[minIndex] THEN
        minIndex = j
      ENDIF
    END FOR

    // Swap
    temp = list[i]
    list[i] = list[minIndex]
    list[minIndex] = temp
  END FOR

  RETURN list
END
```

**Complexity:** O(n²). Same as bubble sort, but often faster in practice because it does fewer swaps.

### Merge Sort: Divide and Conquer

Merge sort divides the list in half, recursively sorts each half, then merges the sorted halves.

```
FUNCTION MergeSort(list)
  IF LENGTH OF list <= 1 THEN
    RETURN list
  ENDIF

  mid = LENGTH OF list / 2   // integer division: drop any fraction (floor)
  left = MergeSort(list[0...mid-1])
  right = MergeSort(list[mid...end])

  RETURN Merge(left, right)
END

FUNCTION Merge(left, right)
  result = []
  leftIndex = 0
  rightIndex = 0

  WHILE leftIndex < LENGTH OF left AND rightIndex < LENGTH OF right
    IF left[leftIndex] <= right[rightIndex] THEN
      ADD left[leftIndex] TO result
      leftIndex = leftIndex + 1
    ELSE
      ADD right[rightIndex] TO result
      rightIndex = rightIndex + 1
    ENDIF
  END WHILE

  // Add remaining items
  WHILE leftIndex < LENGTH OF left
    ADD left[leftIndex] TO result
    leftIndex = leftIndex + 1
  END WHILE

  WHILE rightIndex < LENGTH OF right
    ADD right[rightIndex] TO result
    rightIndex = rightIndex + 1
  END WHILE

  RETURN result
END
```

**Complexity:** O(n log n). Much faster than O(n²) for large lists.

### Sorting Algorithm Comparison

```
Algorithm      Best Case    Average Case   Worst Case   Use When
Bubble Sort    O(n)         O(n²)          O(n²)        Learning; tiny lists
Selection Sort O(n²)        O(n²)          O(n²)        Few swaps needed
Merge Sort     O(n log n)   O(n log n)     O(n log n)   Guaranteed performance needed
Quicksort      O(n log n)   O(n log n)     O(n²)        General-purpose; usually fastest
```

Most real-world sorting is done with quicksort or merge sort, not bubble sort.

## Algorithm Design Strategies

Beyond specific algorithms, there are general strategies for designing good algorithms.

### Brute Force: Try Everything

The simplest approach: try all possible solutions and pick the best.

```
FUNCTION FindMax(numbers)
  max = numbers[0]
  FOR EACH number IN numbers
    IF number > max THEN
      max = number
    ENDIF
  END FOR
  RETURN max
END
```

This is O(n). Brute force is often slow but simple and correct.

### Divide and Conquer: Break Into Subproblems

Divide the problem into smaller subproblems, solve each, and combine results.

Examples: binary search (divide search space), merge sort (divide list), quicksort (partition list).

```
FUNCTION BinarySearch(sortedList, target)
  // Divide: pick middle
  // Conquer: recursively search left or right half
  // Combine: return result
END
```

Divide and conquer often yields O(n log n) or better.

### Greedy: Make Locally Optimal Choices

At each step, make the choice that seems best at that moment, without reconsidering.

Example: Making change with the fewest coins. Use the largest coin possible, then the next largest, etc.

```
FUNCTION MakeChange(amount)
  coins = [25, 10, 5, 1]  // cent values
  coinCount = 0

  FOR EACH coinValue IN coins
    WHILE amount >= coinValue
      amount = amount - coinValue
      coinCount = coinCount + 1
    END WHILE
  END FOR

  RETURN coinCount
END
```

Greedy is often fast but doesn't always produce the optimal answer for all problems.

### Dynamic Programming: Remember Previous Results

If a problem has overlapping subproblems, remember the results instead of recalculating.

Example: calculating Fibonacci numbers

```
// Naive (slow, recalculates the same values)
FUNCTION Fib(n)
  IF n <= 1 THEN
    RETURN n
  ENDIF
  RETURN Fib(n-1) + Fib(n-2)
END

// With dynamic programming (fast, remembers results)
FUNCTION FibDP(n)
  memo = {}

  FUNCTION Helper(n)
    IF n <= 1 THEN
      RETURN n
    ENDIF

    IF n IN memo THEN
      RETURN memo[n]
    ENDIF

    memo[n] = Helper(n-1) + Helper(n-2)
    RETURN memo[n]
  END FUNCTION

  RETURN Helper(n)
END
```

The memoized version remembers previously calculated values, avoiding recalculation.

## Why Algorithm Efficiency Matters in Reality

Let's ground this in real-world impact.

### Example 1: Database Query

A database with 1 million customer records. You need to find a customer by ID.

**Linear search:** Average 500,000 record checks. If those records live on disk rather than in memory, that's a noticeable wait on every single search — and it gets worse every time the table grows.

**Indexed search:** ~20 record checks instead of 500,000. Effectively instant.

An index is a separate, pre-sorted structure the database keeps alongside the table (usually a *B-tree*) so it can narrow the search dramatically at every step, the same way binary search does — not by scanning rows, but by following a path down the tree. The mechanics differ, but the payoff is the same shape: O(log n) instead of O(n).

The index (which requires setup and takes up space) is worthwhile because queries happen constantly.

### Example 2: Data Processing Pipeline

Nightly process: sort 50 million transactions, filter to suspicious ones, send alerts.

**O(n²) sorting:** ~2.5 * 10^15 operations. Even at 1 billion operations per second, that's about a month of processing. The nightly job never finishes — not once, ever.

**O(n log n) sorting:** log₂ of 50 million is about 26, so ~1.3 billion operations. At the same 1 billion per second, that's a second or two. Done before anyone notices it started.

Algorithm choice determines whether this is possible at all.

### Example 3: Real-Time System

A video game needs to find which game objects are near the player (to render) thousands of times per second.

**Linear search through all objects:** O(n). With 10,000 objects, maybe 5000 comparisons per search, 1000 searches per frame, 60 frames per second = 300 million comparisons per second. CPU melts.

**Spatial data structure (like a quadtree):** roughly O(log n) to find the right region, plus the handful of objects actually in it. Maybe 13 comparisons per search, 1000 searches per frame, 60 frames per second = 780,000 comparisons per second. Feasible.

The right algorithm means the game runs smoothly instead of stuttering.

## Practical Algorithm Selection

When facing a problem, how do you choose an algorithm?

1. **Understand the problem.** What's the input? What's the output? What constraints exist?

2. **Consider data size.** Is it thousands, millions, or billions of items? This determines whether O(n²) is acceptable.

3. **Consider frequency.** How often does this run? If rarely, a slower algorithm might be fine. If constantly, optimize.

4. **Research known algorithms.** Is this a classic problem with known solutions? (Searching, sorting, graph traversal, etc.)

5. **Start simple.** A correct, simple algorithm is better than a fast, buggy one. Optimize after proving correctness.

6. **Profile before optimizing.** Measure actual performance. Sometimes the "slow" algorithm is fast enough, or the bottleneck is elsewhere.

7. **Trade-offs.** Is the setup cost (like sorting for binary search) worth the benefit?

## The Reality of Algorithm Performance

An important lesson: in the real world, algorithmic efficiency isn't everything.

**Other factors matter too:**
- **Code clarity:** A somewhat slower but understandable algorithm beats an incomprehensible "optimal" one.
- **Maintainability:** Code you can maintain is better than code that breaks when modified.
- **Real-world data:** Big O is worst-case or average-case analysis. Your actual data might have patterns that make a "slow" algorithm fast enough.
- **Hardware:** Modern computers are fast. Sometimes "good enough" algorithm on fast hardware beats a theoretically better algorithm on slow hardware.
- **Caching and memory:** Big O ignores memory access patterns. Algorithms that access memory sequentially are faster than ones with random access, regardless of Big O.

The best algorithm is the one that solves your specific problem efficiently, is understandable, and is maintainable. Not always the theoretically optimal one.

## Algorithms in Programming Languages

Most programming languages provide built-in algorithms:

**Python:**
- Sorting: `sorted(list)` or `list.sort()`
- Searching: linear search with loops, or use `in` operator, or `list.index()`

**JavaScript:**
- Sorting: `array.sort()`
- Searching: `array.find()`, `array.indexOf()`, `array.includes()`

**Java:**
- Sorting: `Arrays.sort()`, `Collections.sort()`
- Searching: `Arrays.binarySearch()`, `Collections.binarySearch()`

When you use a built-in sort or search, the language handles the algorithmic details. Understanding what algorithm is used helps you understand performance.

## When to Write Your Own Algorithm vs. Use Built-Ins

**Use built-in algorithms:**
- When the built-in is appropriate for your problem
- When the built-in is well-tested and optimized
- When you're not an algorithm expert

**Write your own algorithm:**
- When your problem requires a custom approach
- When the built-in doesn't fit your needs exactly
- When performance profiling shows the built-in is your bottleneck
- For learning and understanding

For this course, you're learning how to think algorithmically. In real work, you'll mostly use built-in algorithms but understand how they work underneath.

---

## Review and Discussion Questions

1. **Algorithm choice:** You have a sorted list of 1 million items. You need to search it once. You need to search it 10,000 times. How does the decision differ for one search vs. many searches? What about the cost of sorting vs. searching?

2. **Real-world Big O:** Find a real application you use regularly (GPS navigation, search engine, social media feed, etc.). What operations does it do frequently? What Big O complexity do you think those operations have, and why does it matter?

3. **Tradeoffs:** Bubble sort is simple to understand and implement. Merge sort is faster but more complex. When might you use bubble sort despite being slower? When is merge sort necessary?

4. **Optimization timing:** A programmer implements a feature and discovers it's slow. Before optimizing the algorithm, what else should they check? (Hint: think about profiling, data size, hardware, etc.)

5. **Problem design:** Describe a problem from your professional background that could be solved with linear search, binary search, or sorting. Which approach would work best? Why? What factors affect the choice?
