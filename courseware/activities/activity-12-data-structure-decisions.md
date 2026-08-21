# Activity 12: Data Structure Decisions

**Module:** V (Computational Thinking, Data Structures & Algorithms)
**Related reading:** [Core Data Structures](../docs/Module-05-Computational-Thinking-Data-Structures-Algorithms/02-core-data-structures.md)

---

## Objective

You'll analyze eight real-world scenarios and select the most appropriate data structure for each, explaining why that structure fits the problem better than others. By the end, you'll understand how choosing the right data structure makes code clearer, faster, and more intuitive.

---

## Background

A **data structure** is a way of organizing and storing data so that a program can access and modify it efficiently. Think of it as choosing the right container for the job:

![A stack of browser history entries beside a queue of print jobs, showing last-in-first-out against first-in-first-out.](../diagrams/png/stack-and-queue.png)

*Several scenarios below turn on exactly this difference.*

- **Array/List**: An ordered collection. Great for "get the 5th item" or iterating through everything.
- **Object/Dictionary**: Key-value pairs. Perfect for "look up value by name."
- **Stack**: Last-in, first-out (LIFO). Ideal for "undo" or tracing back through nested operations.
- **Queue**: First-in, first-out (FIFO). Perfect for "process in the order received."
- **Set**: Unique items with no order. Excellent for "does this item exist?" and eliminating duplicates.

The right choice depends on what data you're storing and what operations you'll perform most often. Let's practice making these decisions.

---

## Step-by-Step Instructions

### Step 1: Read Each Scenario (2 minutes)

Below are eight scenarios. For each, you'll decide which data structure to use. You're not limited to using each structure only once—some scenarios might share the same answer, and that's fine.

### Step 2: Analyze and Decide (25 minutes)

For each scenario, work through these questions:

1. **What data needs to be stored?**
2. **What operations will be performed most often?** (looking up, inserting, removing, checking membership, etc.)
3. **Does order matter?**
4. **Do we care about duplicates?**
5. **Which structure handles this best and why?**

Write down your reasoning for each. Clarity and logic matter more than getting a "correct" answer—there are sometimes multiple good choices depending on your perspective.

---

## The Scenarios

### Scenario 1: Browser Back Button History

A web browser needs to remember the pages you've visited so you can click "back" and return to the previous page. Each time you visit a new page, the browser records it. Clicking back removes the most recent page and displays the one before it.

**What structure would you choose?** ___________________________

**Your reasoning:**

---

### Scenario 2: Print Queue at an Office

A busy office has one printer connected to many computers. When employees send documents to print, they enter a queue. The printer always processes the oldest job first (first come, first served). New jobs are added to the back of the queue, and the printer takes jobs from the front.

**What structure would you choose?** ___________________________

**Your reasoning:**

---

### Scenario 3: Contact List

You want to store contact information: names, phone numbers, and email addresses. You often search by name to pull up someone's phone number. You might have hundreds of contacts.

**What structure would you choose?** ___________________________

**Your reasoning:**

---

### Scenario 4: Shopping Cart

An online store tracks items in your shopping cart. You can add items, remove items, change quantities, and view the full list. You want to know the order in which you added things (most recent items appear at the bottom).

**What structure would you choose?** ___________________________

**Your reasoning:**

---

### Scenario 5: Unique Visitor Tracking

A website wants to count how many unique visitors it has had today. When someone visits, their IP address is recorded. The site doesn't care about order or how many times the same person visited—it only needs to know: "Has this IP address visited before?"

**What structure would you choose?** ___________________________

**Your reasoning:**

---

### Scenario 6: Deck of Cards

A card game needs a deck of 52 playing cards. Cards are drawn from the top of the deck and removed. New cards are never added during play. The order matters (you always draw from the top). The player needs to see what card was drawn.

**What structure would you choose?** ___________________________

**Your reasoning:**

---

### Scenario 7: Employee Records

A company has 500 employees. HR needs to look up an employee by their ID number to see salary, department, hire date, and performance ratings. Records are added when new employees join and removed when they leave.

**What structure would you choose?** ___________________________

**Your reasoning:**

---

### Scenario 8: Undo Feature in a Text Editor

A text editor lets users undo their last action. When you type, delete, or format text, that action is recorded. Pressing Ctrl+Z (or Cmd+Z) undoes the most recent action and returns the document to its state before that action. Pressing undo multiple times goes back multiple steps.

**What structure would you choose?** ___________________________

**Your reasoning:**

---

## Expected Deliverable

A completed worksheet with your answers and reasoning for all eight scenarios. You can:
- Fill in this document directly and save it as a markdown or PDF file.
- Rewrite it in a document editor of your choice.
- Handwrite it and photograph it.

The key is that your reasoning is clear and shows you've thought through the operations and constraints of each scenario.

---

## Answer Guide & Discussion

Here's how an experienced programmer might approach each scenario. **Your answer may differ, and that's okay** if your reasoning is sound.

| Scenario | Likely Choice | Why |
|----------|---------------|-----|
| Browser Back Button | **Stack** | Last page visited is accessed first (LIFO). You pop off the stack when clicking back. |
| Print Queue | **Queue** | First job submitted is processed first (FIFO). Jobs wait in order, fairly. |
| Contact List | **Object/Dictionary** | Fast lookup by name. Unordered data organized by a key is ideal. |
| Shopping Cart | **Array/List** | Order matters (insertion order). Needs easy insertion, removal, and iteration. |
| Unique Visitor Tracking | **Set** | Only cares about membership (did this IP visit?). Duplicates are irrelevant. Efficient checks. |
| Deck of Cards | **Stack** | Cards are drawn from the top—last placed, first drawn (LIFO). Fixed set of items, strict ordering. |
| Employee Records | **Object/Dictionary** | Fast lookup by ID. Unordered data accessed by key. Adding/removing is efficient. |
| Undo Feature | **Stack** | Most recent action is undone first (LIFO). Operations nest: undo the last thing added. |

**Note**: Some scenarios have defensible alternate answers. For instance, a shopping cart could use a Queue if you only care about processing items in order, not viewing specific items by position.

---

## Reflection Questions

1. **Which scenario's answer surprised you most?** Why did your choice differ from the answer guide, or why did the guide's choice make sense once you thought about it?

2. **How does understanding data structures help you write better code?** Think about a scenario where choosing the wrong structure would make the problem harder. What would go wrong?

3. **In your previous career, can you identify a real process that uses a data structure?** For example, does a ticket-tracking system use a queue-like structure? Does a phone contact app use a dictionary-like structure?

---

## Tips for Success

- **Think about operations, not just data.** A data structure is useful based on what you do with it, not just what you store.
- **Order and uniqueness matter.** Ask yourself: "Do I care what order items appear? Do I care about duplicates?" These questions guide you.
- **Real-world analogy helps.** A physical queue at a bank (first in, first out) is much like a computer queue. A stack of dinner plates (last on, first off) mirrors a computer stack.
- **There's rarely one "wrong" answer.** Different choices have tradeoffs. A thoughtful explanation is better than a "correct" guess.

---

## Going Deeper

Once you've completed this activity:
- Research **Big O notation** for different data structures. How fast is lookup, insertion, and deletion for each?
- Think about **hybrid structures**. Could you combine structures for a complex scenario? (For example, employee records could use a dictionary of arrays to group employees by department.)
- Explore your chosen programming language's built-in data structures. How do they implement these concepts?
