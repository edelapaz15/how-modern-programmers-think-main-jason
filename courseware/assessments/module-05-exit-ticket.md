# Module V Exit Ticket — Computational Thinking, Data Structures & Algorithms

**Module V** · Breaking problems down; core data structures; control flow; searching and performance
**~5–7 minutes · Not graded · Anonymous is fine**

> This module is the "thinking like a programmer" core. If any piece is still fuzzy, say which — we can revisit it.

---

## Quick Recap (4 questions)

**1. (Multiple choice)** **Decomposition**, one of the pillars of computational thinking, means:

- A. Breaking a big problem into smaller, manageable parts
- B. Spotting that two problems have the same underlying shape
- C. Ignoring the details that don't matter for the problem at hand
- D. Writing out the precise steps to solve the problem

**2. (Multiple choice)** You need a collection where **order matters and you look items up by position** (item 0, item 1, item 2...). Which data structure fits best?

- A. An array (list)
- B. A stack, which only lets you reach the most recently added item
- C. A queue, which only lets you reach the oldest item
- D. A set, which stores unique items with no particular order

**3. (Short answer)** A program needs to do the same thing to every request in a list of 500. Would you write that as a **conditional** or a **loop** — and why? (One sentence.)

**4. (Short answer)** In one sentence, what's the difference between a **linear search** and a **binary search**? (When can you use binary search?) And roughly why does the difference get *bigger* as the list gets longer?

---

## Muddiest Point

What's the **one thing** from this module that's still fuzzy? (Computational thinking, a data structure, loops/conditionals, or an algorithm — anything.)

---

## Connect It

Think of a task from your **prior work** that you had to break into steps (processing an application, onboarding a hire, closing the books). Describe how you'd **decompose** it into a short, ordered list of smaller steps — the same move we use to turn a big problem into something a computer (or a new teammate) could follow.

---

<details>
<summary><strong>Instructor Answer Key</strong> (review before building on this module — collapsed for in-class use)</summary>

**1.** A. Note that every distractor here is a *real* pillar of computational thinking — B is pattern recognition, C is abstraction, D is algorithm design. Someone who confuses two of the four hasn't wasted the question; find out which pair and clarify that one.

**2.** A — an array/list: ordered and accessed by index. Every other option is a genuine data structure the module covered, each ruled out for a specific reason: a stack and a queue both preserve order but restrict *which end* you can reach, and a set doesn't promise order at all. Listen for someone who says "a queue, because order matters" — that's the right instinct hitting the wrong constraint, and it's worth thirty seconds.

**3.** A loop. *Listen for:* "the same steps repeated for each item" — a conditional makes one decision once; a loop is what repeats. Bonus if they note the loop works whether the list has 500 items or 5, which is the actual reason you'd write it that way.

**4.** Linear search checks items one by one from the start (works on any list). Binary search repeatedly halves a **sorted** list to find the target far faster. Key condition: the data must be **sorted** to use binary search. On the "why bigger": doubling the list doubles linear search's work, but adds only **one** step to binary search — which is what O(n) versus O(log n) is saying. Don't require the notation; listen for the idea.

**Muddiest Point / Connect It:** Not graded. Algorithm performance (why binary search is faster) and the difference between data structures are the common fuzzy spots — re-demo with a small sorted list if they recur. Strong "Connect it" answers (a clean, ordered breakdown) show the decomposition habit is transferring from prior experience.

</details>
