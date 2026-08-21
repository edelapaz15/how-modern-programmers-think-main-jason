# Demo 18: Stacks and Queues

**Module:** V (Computational Thinking, Data Structures & Algorithms)
**Topic:** Core Data Structures
**Estimated Time:** 14 minutes
**Related reading:** [Core Data Structures](../docs/Module-05-Computational-Thinking-Data-Structures-Algorithms/02-core-data-structures.md)

---

## Objective

Students will understand the behavior and real-world applications of stacks (LIFO: Last-In, First-Out) and queues (FIFO: First-In, First-Out) through simulation and visualization. They'll recognize how these patterns appear in everyday software like browser navigation and print spooling.

![A stack of four browser history entries with push and pop acting on the top, beside a queue of four print jobs with dequeue at the front and enqueue at the rear.](../diagrams/png/stack-and-queue.png)

*This replaces the three whiteboard sketches below. Keep it up and point at it as the console output changes.*

---

## Setup & Prerequisites

- **Browser with Developer Tools open** (F12, right-click → Inspect → Console)
- **Optional but recommended:** Have a whiteboard, flipchart, or digital drawing tool to draw visual representations of stack and queue operations
- **Optional:** Print or display a simple diagram showing the difference between LIFO and FIFO
- **JavaScript capable console** — all code runs in the browser console
- **Clear the console** before starting the demo

---

## Step-by-Step Script

### Part 1: Introduction & Real-World Context (2 minutes)

**Talking Points:**
> "Have you ever used the back button in your browser? That's a stack in action. When you visit Page A, then Page B, then Page C, and hit back, you go back to Page C, then B, then A. The most recent page you visited is the first one you go back to. That's Last-In, First-Out — a stack."

> "Now, imagine you're at the post office and there's a queue for service. The first person in line gets served first. Everyone waits their turn in order. That's First-In, First-Out — a queue. It feels intuitive because we experience queues every day."

> "These aren't just abstract ideas — they're patterns built into the core of how software works. Today, we're going to simulate both and see them in action."

---

## Part 2: Simulate a Stack (5 minutes)

**Type in the console:**

```javascript
const browserHistory = [];
```

**Talking Points:**
> "I'm creating an empty array called `browserHistory`. We'll use an array to simulate a browser back button. Arrays have built-in methods `push()` and `pop()` that make them perfect for implementing stacks."

**Now type:**

```javascript
// User visits pages in order
browserHistory.push('www.google.com');
browserHistory.push('www.wikipedia.org');
browserHistory.push('www.github.com');
browserHistory.push('www.stackoverflow.com');

console.log('History:', browserHistory);
```

**Output:**
```javascript
History: ['www.google.com', 'www.wikipedia.org', 'www.github.com', 'www.stackoverflow.com']
```

**Talking Points:**
> "The user has visited four sites in order. Each `push()` adds a new page to the end of the stack. The most recent page, `stackoverflow.com`, is at the top of the stack — or in array terms, at the last index."

**On your whiteboard, draw:**
```
Stack (Browser History):
┌─────────────────────────┐
│ stackoverflow.com ← Top  │ (Most recent)
├─────────────────────────┤
│ github.com              │
├─────────────────────────┤
│ wikipedia.org           │
├─────────────────────────┤
│ google.com              │
└─────────────────────────┘ (Oldest)
```

**Continue typing in the console:**

```javascript
// User clicks back button
const lastPage = browserHistory.pop();
console.log('Back button clicked. User goes to:', lastPage);
console.log('Current history:', browserHistory);
```

**Output:**
```text
Back button clicked. User goes to: stackoverflow.com
Current history: ['www.google.com', 'www.wikipedia.org', 'www.github.com']
```

**Talking Points:**
> "When we call `pop()`, we remove and return the item from the top of the stack — the most recent page. The user is now viewing `github.com`, the page they visited before `stackoverflow.com`. If they hit back again, `github.com` will be popped next."

**Type again:**

```javascript
// Click back a few more times
browserHistory.pop();  // removes github.com
browserHistory.pop();  // removes wikipedia.org

console.log('After two more back clicks:', browserHistory);
```

**Output:**
```text
After two more back clicks: ['www.google.com']
```

**Talking Points:**
> "Notice how we always remove from the same end — the top. That's the defining characteristic of a stack. The last item added is the first item removed. This matches how browser back buttons work, and it's why it's called LIFO: Last-In, First-Out."

---

## Part 3: Simulate a Queue (5 minutes)

**Type in the console:**

```javascript
const printQueue = [];
```

**Talking Points:**
> "Now let's simulate a print queue — like when multiple users send documents to a printer. The printer processes them in the order they arrived. First come, first served. Let's watch this unfold."

**Type:**

```javascript
// Users send print jobs
printQueue.push('Document1.pdf');
printQueue.push('Document2.docx');
printQueue.push('Document3.xls');
printQueue.push('Document4.pptx');

console.log('Print queue:', printQueue);
```

**Output:**
```text
Print queue: ['Document1.pdf', 'Document2.docx', 'Document3.xls', 'Document4.pptx']
```

**On your whiteboard, draw:**
```
Queue (Print Jobs):

  Front                                                      Rear
(next out)                                              (just added)
┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐
│ Document1 │ ← │ Document2 │ ← │ Document3 │ ← │ Document4 │
└───────────┘   └───────────┘   └───────────┘   └───────────┘
      ↓                                               ↑
   dequeue                                         enqueue
 (shift: out the front)                       (push: in the back)
```

**Continue typing:**

```javascript
// Printer processes the first job (dequeue)
const nextJob = printQueue.shift();
console.log('Printing:', nextJob);
console.log('Remaining queue:', printQueue);
```

**Output:**
```text
Printing: Document1.pdf
Remaining queue: ['Document2.docx', 'Document3.xls', 'Document4.pptx']
```

**Talking Points:**
> "Here's the key difference from a stack. In a queue, we remove from the *front*, not the back. `shift()` removes the first item in the array. The user who sent Document1 first gets their job printed first. That's fair, orderly, and predictable — just like a real queue at the bank."

**Type again:**

```javascript
// Printer processes more jobs
printQueue.shift();  // removes Document2.docx
printQueue.shift();  // removes Document3.xls

console.log('After two jobs printed:', printQueue);

// A new job arrives while others are printing
printQueue.push('Document5.jpg');
console.log('New job added, queue is now:', printQueue);
```

**Output:**
```text
After two jobs printed: ['Document4.pptx']
New job added, queue is now: ['Document4.pptx', 'Document5.jpg']
```

**Talking Points:**
> "Notice something important? Even though we're removing from the front, new jobs can arrive and be added to the back. The queue is dynamic. Jobs are always processed in the order they arrived. That's FIFO: First-In, First-Out. And it matches our intuition of fairness."

---

## Part 4: Side-by-Side Comparison (2 minutes)

**On your whiteboard or visually on screen:**

```
STACK (LIFO)              vs.    QUEUE (FIFO)

push → [A][B][C]                 push → [A][B][C]
              ↑                              ↑
              pop                    A ← shift

Remove from end          vs.    Remove from front
Last one added                   First one added
Browser back button             Print queue
Undo functionality              Task scheduler
Function call stack             Customer support
```

**Talking Points:**
> "Here's the mental model: Stacks are like a stack of plates — you add and remove from the top. Queues are like a line at a ticket window — you add to the back and remove from the front. Both are incredibly common patterns in software design. Learning to recognize them will help you understand how systems work and will inform the data structures you choose in your own code."

---

## Part 5: Quick Verification Exercise (1 minute)

**Ask the students (before giving answers):**

> "If I have a stack with `['task1', 'task2', 'task3']` and I pop it twice, what's left?"

**Expected answer:** `['task1']`

> "If I have a queue with `['order1', 'order2', 'order3']` and I shift twice, what's next to be processed?"

**Expected answer:** `'order3'`

**Then show them by typing:**

```javascript
const stack = ['task1', 'task2', 'task3'];
stack.pop();
stack.pop();
console.log('Stack after 2 pops:', stack);  // ['task1']

const queue = ['order1', 'order2', 'order3'];
queue.shift();
queue.shift();
console.log('Next order to process:', queue[0]);  // 'order3'
```

---

## Key Points to Emphasize

- **Stacks = LIFO (Last-In, First-Out)** — perfect for operations that naturally reverse, like undo, back buttons, and function call management. Add and remove from the same end.
- **Queues = FIFO (First-In, First-Out)** — perfect for fairness and order, like print jobs, customer service, and event processing. Add to the back, remove from the front.
- **These aren't just theory** — they appear everywhere in real software. Every time you use a back button or wait in a virtual queue online, these data structures are working behind the scenes.
- **Arrays in JavaScript have the methods we need** — `push()` and `pop()` for stacks; `push()` and `shift()` for queues. Understanding these methods as the building blocks of these patterns gives you a powerful toolkit.

---

## Common Questions

**Q: Can you use the same array for both a stack and a queue?**
> A: Technically yes, and there are two separate reasons not to.
>
> The first is clarity. An array that's a stack on Tuesday and a queue on Thursday confuses you and everyone reading your code. In professional code you'd choose the right structure upfront, or write a wrapper class that makes the intent obvious: a `Stack` class exposes only `push()` and `pop()`; a `Queue` class exposes `push()` and `shift()`. The limitation is the point — it enforces the pattern.
>
> The second is speed, and it's the one nobody expects. `pop()` removes from the *end* of the array, which is one step no matter how long the array is. `shift()` removes from the *front*, which means every remaining item has to slide down one position — so it takes longer the bigger the array gets. In the language we'll meet in Demo 20, `pop()` is O(1) and `shift()` is O(n). With four print jobs it doesn't matter at all. With a queue of half a million events, it's the difference between a system that keeps up and one that doesn't — which is exactly why real high-volume queues aren't built on plain arrays.

**Q: Why does browser history use a stack and not a queue?**
> A: Because the user's *most recent* action is what they want to undo. If you visited A, then B, then C, you're going to want to go back to B next, not A. It makes intuitive sense — the "back" button reverses your most recent decision. A queue would feel backwards (no pun intended) because you'd jump all the way back to your oldest page first.

**Q: Are there other operations besides push/pop and push/shift?**
> A: In production systems, yes — you might want to peek (check what's on top without removing it), check if it's empty, or clear the entire stack/queue. But the core operations are what we've shown. Most of the time, push and pop (or shift) are all you need.
