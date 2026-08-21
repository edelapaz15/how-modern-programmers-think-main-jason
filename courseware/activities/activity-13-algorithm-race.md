# Activity 13: Algorithm Race—Linear Search vs. Binary Search

**Module:** V (Computational Thinking, Data Structures & Algorithms)
**Related reading:** [Algorithm Basics](../docs/Module-05-Computational-Thinking-Data-Structures-Algorithms/04-algorithm-basics.md)

---

## Objective

You'll manually execute linear search and binary search on the same dataset to understand how different algorithms solve the same problem with vastly different efficiency. By the end, you'll be able to explain when each approach is better and how to predict performance using Big O notation.

---

## Background

An **algorithm** is a step-by-step procedure for solving a problem. Two different algorithms can solve the same problem but take very different amounts of time.

![Binary search shown as shrinking bars from 16 candidates down to one, with a comparison against linear search at larger sizes.](../diagrams/png/binary-search-halving.png)

*You are about to do this by hand. Try it first, then check yourself against the diagram.*

**Linear Search** is simple: check every item one by one from the beginning until you find what you're looking for.

**Binary Search** is clever: if your list is sorted, keep dividing it in half. With each comparison, you eliminate half the remaining items.

For small datasets, the difference barely matters. For large datasets (thousands or millions of items), binary search is dramatically faster.

Today, you'll experience this difference firsthand by doing the searching manually, counting every step.

---

## The Sorted List

Below is an alphabetical list of 32 fictional company names. You'll search this list by hand.

```
1. Apex Analytics
2. Blue River Tech
3. CloudScale Inc
4. DataFlow Systems
5. Evergreen Solutions
6. Forge Innovations
7. GreenTech Labs
8. Horizon Systems
9. Illuminate Digital
10. Jasper Networks
11. KineticAI Corp
12. LumiousCode
13. MindShift Labs
14. NextGen Studios
15. Orion Ventures
16. PrimeLogic
17. Quantum Leap
18. Radius Intelligence
19. Stellar Data
20. TechVision Group
21. UniCore Systems
22. VenturePlex
23. WaveGen Analytics
24. XcelTech Solutions
25. YieldMax
26. ZenithAI Labs
27. Zephyr Dynamics
28. Zeppelin Cloud
29. Zerogap Systems
30. Zillion Data
31. Zodiac Labs
32. Zylo Networks
```

---

## Step-by-Step Instructions

### Part 1: Linear Search (15 minutes)

You will search for **"Stellar Data"** (item #19) using linear search.

**How linear search works:** Start at the beginning of the list. Check each item one by one. Count every comparison until you find the target or reach the end.

**Your task:**
1. Begin at item 1 (Apex Analytics).
2. Is it "Stellar Data"? No. Count: 1.
3. Move to item 2 (Blue River Tech).
4. Is it "Stellar Data"? No. Count: 2.
5. Continue this process.
6. **Stop when you find "Stellar Data" and record your count.**

**Linear search for "Stellar Data":**

- Item checked: _____________ | Is it "Stellar Data"? _____________ | Running count: _______
- Item checked: _____________ | Is it "Stellar Data"? _____________ | Running count: _______
- Item checked: _____________ | Is it "Stellar Data"? _____________ | Running count: _______
- *(Continue until found)*
- Item checked: _____________ | Is it "Stellar Data"? **YES** | **Total steps: _______**

### Part 2: Binary Search (15 minutes)

Now search for **the same item, "Stellar Data"**, using binary search.

**How binary search works:**
1. Start with the full list.
2. Find the middle item.
3. Is the target item before or after the middle?
4. Eliminate the half that doesn't contain the target.
5. Repeat with the remaining half.
6. Count every comparison.

**Your task:**

**The middle index rule:** each step, take the *floor* of the average of the low and high indices — `mid = floor((low + high) / 2)`. "Floor" just means round down to the nearest whole number (for example, `floor(33 / 2) = floor(16.5) = 16`).

**Worked example — binary search for "Stellar Data" (#19):**

Study this completed trace, then fill in the blank table below on your own for practice.

| Step | Low Index | High Index | Middle Index | Middle Item | Target Before or After? | Comparisons So Far |
|------|-----------|-----------|--------------|-------------|----------------------|--------------------|
| 1 | 1 | 32 | **16** | **PrimeLogic** | After (Stellar Data > PrimeLogic) → low becomes 17 | 1 |
| 2 | 17 | 32 | **24** | **XcelTech Solutions** | Before (Stellar Data < XcelTech) → high becomes 23 | 2 |
| 3 | 17 | 23 | **20** | **TechVision Group** | Before (Stellar Data < TechVision) → high becomes 19 | 3 |
| 4 | 17 | 19 | **18** | **Radius Intelligence** | After (Stellar Data > Radius) → low becomes 19 | 4 |
| 5 | 19 | 19 | **19** | **Stellar Data** | Found! | **Total: 5** |

Binary search reaches "Stellar Data" in **5 comparisons**, versus 19 for linear search.

**Now try it yourself.** Fill in the blank table below by working through the same search step by step (you should arrive at the same answer):

| Step | Low Index | High Index | Middle Index | Middle Item | Decision | Comparisons |
|------|-----------|-----------|--------------|-------------|----------|-------------|
| 1 | 1 | 32 | _________ | _________________ | _________________ | 1 |
| 2 | _________ | _________ | _________ | _________________ | _________________ | 2 |
| 3 | _________ | _________ | _________ | _________________ | _________________ | 3 |
| 4 | _________ | _________ | _________ | _________________ | _________________ | 4 |
| 5 | _________ | _________ | _________ | _________________ | Found! | **Total: ____** |

### Part 3: Comparison Table (8 minutes)

Now compare your results:

| Metric | Linear Search | Binary Search |
|--------|---------------|---------------|
| Target item | Stellar Data (#19) | Stellar Data (#19) |
| **Steps taken** | _________ | _________ |
| **Efficiency** | Very inefficient; had to check 19 items | Much faster; eliminated half each step |

### Part 4: Analysis (7 minutes)

Now answer these questions:

**Question 1:** If the list had 1,000 names instead of 32, how many steps would linear search take in the **worst case** (target is last or not found)?

*Answer:* ___________

**Question 2:** If the list had 1,000 names, how many steps would binary search take in the **worst case**?

*Hint:* How many times can you divide 1,000 by 2 before reaching 1?
- 1,000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1
- Count the arrows: _________ steps

*Answer:* ___________

**Question 3:** With 1 million names, linear search worst case: _________ steps. Binary search worst case: _________ steps.

---

## Expected Deliverable

A completed worksheet showing:
1. **Your step-by-step linear search work** (all items checked until "Stellar Data" found)
2. **Your binary search table** (all steps and decisions)
3. **Your comparison table** (linear vs. binary for the 32-item list)
4. **Your written answers** to the Big O analysis questions above

You can format this as a filled-in copy of this activity, a markdown file, or a document of your choice.

---

## Big O Notation: The Big Picture

Programmers use **Big O notation** to describe how an algorithm's performance scales as the input size grows.

- **Linear search = O(n)**: In the worst case, you check every item. If n = 1,000, you might check all 1,000.
- **Binary search = O(log n)**: You halve the problem size with each step. If n = 1,000, you need about 10 steps.

For large datasets, O(log n) is *dramatically* faster than O(n). This is why sorted data and binary search are so valuable.

---

## Reflection Questions

1. **What surprised you about the difference between linear and binary search?** Did the number of steps surprise you? Why do you think binary search is so much faster?

2. **When would linear search actually be the right choice, despite being slower?** (Hint: Think about data that isn't sorted, or very small datasets.)

3. **How do you think this lesson applies to real programming?** Have you used a search function in a tool or website? Do you think it uses linear or binary search? Why?

---

## Tips for Success

- **Slow down and count carefully.** Off-by-one errors are easy when counting manually. Double-check your work.
- **Understand the binary search logic.** It's not magic—each step eliminates half the remaining options. Visualize it.
- **Don't memorize Big O answers.** Derive them by thinking through the pattern. How many times can you halve 1,000?
- **Binary search requires sorted data.** If your list wasn't sorted, binary search wouldn't work. This is an important limitation.

---

## Going Deeper

Once you've completed this activity:
- **Research other search algorithms.** Interpolation search and exponential search exist for specific cases.
- **Explore sorting algorithms.** Before you can binary search, you need sorted data. Different sorting algorithms (bubble sort, quicksort, merge sort) have different efficiencies.
- **Test this in code.** In your programming language of choice, write both search algorithms and time them on large datasets. Seeing the performance difference in code is powerful.
- **Think about real-world databases.** Databases use **indexes** (like book indices) to enable fast searches without checking every row. This is binary search thinking applied to millions of records.
