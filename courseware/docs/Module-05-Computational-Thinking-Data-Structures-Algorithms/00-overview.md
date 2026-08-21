# Module V: Computational Thinking, Data Structures & Algorithms

## Module Overview

Welcome to Module V—the heart of programming logic. This module bridges the gap between how you think about solving problems and how computers execute those solutions. You'll learn the foundational concepts that every programmer relies on, regardless of programming language, and understand why these concepts matter for building effective software.

Where Modules III and IV set up your tools and showed you how software teams work, Module V takes you deeper into **how to think like a programmer**. You'll explore the mental frameworks that expert programmers use to break down complex problems, organize information efficiently, and write logic that works correctly and performs well.

This module is structured around three core pillars:
1. **Computational Thinking** - the problem-solving framework that underlies all programming
2. **Data Structures** - how to organize information so it's accessible and efficient
3. **Algorithms** - how to design step-by-step solutions that solve problems correctly

By the end of this module, you'll understand not just *how* to write code, but *why* programmers structure code the way they do.

> **🔗 Course Project Thread: CivicTrack**
> You'll apply these pillars to [CivicTrack](../../course-project/README.md), our running citizen service-request example. Decomposing its "submit a request" workflow into clear steps is computational thinking in action; deciding how to model a request, its category, and its status is exactly the data-structure reasoning this module builds. The thinking you practice here is what turns a vague feature request into code that works.

## Learning Objectives

Upon completing Module V, you will be able to:

1. **Define computational thinking** and identify its four pillars (decomposition, pattern recognition, abstraction, algorithm design)
2. **Apply decomposition** to break complex business problems into manageable programming tasks
3. **Recognize patterns** in data and processes to inform algorithm design
4. **Use abstraction** to focus on relevant details while ignoring unnecessary complexity
5. **Choose appropriate data structures** (arrays, objects, stacks, queues, sets) for different problem scenarios
6. **Write control flow logic** using conditionals and loops to handle complex decision-making
7. **Understand algorithm efficiency** through basic Big O notation and know when linear vs. binary search is appropriate
8. **Recognize the relationship** between data structure choice and algorithm efficiency
9. **Translate pseudocode concepts** into understanding of how real programming languages implement these ideas
10. **Apply the problem-solving cycle** (understand, plan, implement, review) to programming tasks

## Topic List

This module consists of four topics:

### **Topic 1: Problem-Solving with Computational Thinking**
- **File:** `01-problem-solving-with-computational-thinking.md`
- **Focus:** The mental framework programmers use *before* they write any code — decomposition, pattern recognition, abstraction, and algorithm design. Also addresses common thinking errors and introduces flowcharts and pseudocode as tools for organizing your thoughts
- **Key concept:** Computational thinking is a universal problem-solving approach used in business, science, and countless other fields — programming is just one application

**Key Concepts:**
- Computational thinking: the four pillars
- Decomposition and problem breakdown
- Pattern recognition and its applications
- Abstraction and relevance
- Algorithm design
- The problem-solving cycle
- Pseudocode and flowcharts as thinking tools

### **Topic 2: Core Data Structures**
- **File:** `02-core-data-structures.md`
- **Focus:** The containers that hold information in your programs — variables, arrays (lists), objects (dictionaries/maps), and an introduction to stacks, queues, and sets
- **Key concept:** Before you can process data, you must decide how to organize it — and that choice drives everything downstream

**Key Concepts:**
- Variables and data types
- Arrays/lists: ordered collections
- Objects/dictionaries: key-value structures
- Nested data structures
- Stacks and queues: specialized structures
- Sets: unique collections
- Choosing structures for efficiency and clarity

### **Topic 3: Control Flow Mastery**
- **File:** `03-control-flow-mastery.md`
- **Focus:** Conditionals (if/else/switch), loops (for/while), and how to combine them to build complex logic — including the pitfalls to avoid, like infinite loops
- **Key concept:** Control flow is the difference between code that runs once, code that makes decisions, and code that repeats until a condition is met

**Key Concepts:**
- Sequential, conditional, and repetitive execution
- If/else/else-if statements
- Comparison and logical operators
- Switch/case statements
- For, while, and do-while loops
- Loop control: break and continue
- Nested conditionals and loops
- Introduction to functions as logic containers

### **Topic 4: Algorithm Basics**
- **File:** `04-algorithm-basics.md`
- **Focus:** Fundamental algorithms (linear search, binary search, basic sorting) and algorithmic efficiency via Big O notation, with real-world examples of why algorithm choice matters
- **Key concept:** *How* you solve a problem matters as much as getting the right answer — efficiency shapes user experience and cost alike

**Key Concepts:**
- What algorithms are and why they matter
- Linear search vs. binary search
- Sorting algorithms (conceptual overview)
- Big O notation: measuring algorithm efficiency
- Time and space complexity
- Algorithm design strategies
- Practical implications of efficiency choices

---

## How to Use This Module

Module V is conceptually dense. We recommend:

1. **Read actively.** Don't just passively read—work through the examples. Trace through pseudocode step-by-step. Draw diagrams. Predict what will happen before reading the explanation.

2. **Think in analogies.** Each concept includes business and real-world analogies. Spend time understanding these analogies; they're not just colorful language, they're a shortcut to intuition.

3. **Review the questions.** At the end of each topic, answer the discussion and review questions. These are designed to deepen your understanding and prepare you for applying these concepts in later modules.

4. **Compare pseudocode to real code.** When notes mention how a concept maps to a real programming language, think about the differences between the pseudocode and real code. What's the same? What's different? Why?

5. **Space your learning.** This module is best learned over multiple days rather than trying to absorb it all at once. Your brain needs time to integrate these concepts.

Each topic in Module V includes **conceptual explanations** with real-world analogies, **pseudocode examples** showing how concepts work, **practical insights** connecting to your professional background, **comparisons to real programming languages** where relevant, and **review and discussion questions** to check your understanding.

You don't need to code along with this module, but you should be able to trace through pseudocode examples and explain what they do.

## Prerequisites

- Completion of Modules I–IV (the programmer's mindset, working habits, a configured environment, and the collaboration workflow this logic will eventually live inside)
- **No coding required.** This module is taught in pseudocode; you don't need to write or run a program to complete it
- Comfort reading step-by-step instructions closely — precision matters more here than speed

## How This Module Builds on Previous Learning

In Modules I and II, you developed a general understanding of what modern programming is and the working habits that make it sustainable. Modules III and IV set up your development environment—the operating system, the command line, and VS Code—and introduced the software development lifecycle, version control with Git, and how teams collaborate on code.

Module V goes deeper. It teaches you the **reasoning** behind programming decisions, not just the mechanics. You'll understand:
- Why programmers choose certain data structures
- How control flow decisions affect program behavior
- Why some solutions are better than others
- How real programming languages implement the pseudocode concepts you've learned

## How This Module Prepares You for Later Learning

The concepts in this module are foundations for everything that follows:

- **Module VI: Data Management** builds on data structure concepts, showing you how these structures scale to real-world data volumes
- **Module VII: Programming Syntax and Logic** expands on control flow and algorithms in real code, using JavaScript and Java
- **Module VIII: Building for the Future** asks you to integrate all of it, and points you toward what comes next

---

## Key Themes Throughout This Module

### **The Transition from Pseudocode to Real Code**
Throughout this module, you'll see extensive use of pseudocode. This is intentional. Pseudocode forces you to focus on the **logic** of what you're doing rather than the **syntax** of a specific language. However, we'll also include notes and examples showing how pseudocode concepts map to real programming languages like Python, JavaScript, and Java.

Think of it this way: pseudocode is the "universal language" of programming logic. Once you master these concepts in pseudocode, learning the syntax of any specific programming language becomes much easier.

### **Precision in Language Is Precision in Thinking**
Throughout this course, we use specific vocabulary:
- **Pseudocode:** Language-independent notation for algorithms (not actual code)
- **Algorithm:** A step-by-step procedure to solve a problem
- **Data structure:** A way of organizing data for efficient access and modification
- **Control flow:** The order in which statements are executed
- **Abstraction:** Focusing on relevant details while hiding unnecessary complexity

When these terms are used, they have specific meanings. Precision in language helps precision in thinking.

### **Structure and Efficiency Are the Same Conversation**
How you organize data determines which algorithms are even available to you. A sorted array makes binary search possible; an unsorted one doesn't. Every data-structure choice is quietly an efficiency choice.

### **Thinking Comes Before Typing**
The most valuable work in this module happens away from the keyboard — on paper, in diagrams, in plain English. Programmers who decompose well write less code and debug less often.

---

## Ready to Begin?

**Ready to think like a programmer?** Let's begin with Topic 1: Problem-Solving with Computational Thinking.
