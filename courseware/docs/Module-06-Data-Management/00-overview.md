# Module VI: Data Management: From Spreadsheets to Databases

## Module Overview

Data is the lifeblood of modern business and technology. Whether you're working at a startup, a Fortune 500 company, or building your own applications, you'll spend a significant portion of your time working with data—collecting it, organizing it, querying it, and presenting insights from it. This module introduces you to how data is structured, stored, retrieved, and used in real-world programming and business contexts.

![The same CivicTrack service requests in four shapes across one day: a messy raw CSV export, a cleaned CSV, three related database tables, and JSON returned by an API.](../../diagrams/png/data-journey.png)

*Nothing new is invented at any step. It is the same service requests the whole way across.*

Unlike many programming courses that treat data as an afterthought, we're treating it as a first-class concern. You'll learn not just *how* to store data, but *why* certain approaches are used in different situations. You'll understand the tradeoffs between spreadsheets and databases, between different database paradigms, and how to think about data in ways that bridge your previous business experience with your new programming skills.

> **🔗 Course Project Thread: CivicTrack**
> This module follows [CivicTrack](../../course-project/README.md)'s data through its whole journey: the raw service-request export as a CSV, the same data analyzed in a spreadsheet, then modeled and queried as a relational database, and finally served to applications through an API as JSON. The CivicTrack [datasets](../../course-project/data/) and mini-database activity are how you'll see each of these layers firsthand.

### Who This Module Is For

This module is designed for career-changers who've already seen data in business contexts—perhaps you've worked with spreadsheets, managed inventory, worked in finance, marketing, operations, or sales. You've probably used tools like Excel, Google Sheets, or even submitted data to larger systems without fully understanding what happens behind the scenes. This module builds on that practical experience and shows you how programmers think about organizing, storing, and retrieving data at scale.

### Why Data Matters

Before diving into technical details, let's establish why data management is central to modern programming:

- **Everything requires data**: Web applications, mobile apps, machine learning models, analytics dashboards—they all depend on organizing and retrieving data efficiently
- **Data bridges business and technology**: Understanding data structures helps you translate between what business stakeholders need and what programmers can build
- **Data problems are expensive**: Poor database design can slow down applications, cause errors, and create maintenance nightmares. Good design scales elegantly
- **Your career path**: Most programming jobs involve working with data systems. Understanding these concepts deeply will make you more valuable and more effective

## Learning Objectives

By the end of this module, you should be able to:

1. **Understand data structures**: Explain the differences between structured, unstructured, and semi-structured data, and recognize examples of each
2. **Design with data in mind**: Think about how to organize information logically, using concepts like tables, relationships, and primary keys
3. **Work with practical tools**: Use spreadsheets for analysis, create and parse CSV files, and understand when these tools are sufficient
4. **Know when to use databases**: Recognize situations where spreadsheets aren't adequate and understand why databases exist
5. **Read and write basic SQL**: Understand SELECT, FROM, WHERE, JOIN, and other fundamental SQL operations
6. **Compare database paradigms**: Understand the fundamental differences between relational (SQL) and NoSQL databases and when each is appropriate
7. **Understand APIs as a data source**: Explain in plain terms what an API is, how REST and JSON let applications request data over the web, and how APIs sit in front of databases
8. **Bridge business and technical language**: Translate between how business users think about data and how programmers organize it in systems

## Topic List

This module is organized into three topics that build on each other:

### **Topic 1: Foundations of Data Systems**
- **File:** `01-foundations-of-data-systems.md`
- **Focus:** The fundamental concepts that apply everywhere—what makes data "structured," how data is organized in records and fields, and why primary keys matter
- **Key concept:** How programmers think about data independently of any particular tool or technology — the conceptual foundation everything else builds on

### **Topic 2: Practical Tools—CSVs and Spreadsheets**
- **File:** `02-practical-tools-csvs-and-spreadsheets.md`
- **Focus:** The spreadsheet tools you probably already know, seen the way a programmer sees them, plus CSV files — the simple, universal format sitting at the intersection of spreadsheets and databases
- **Key concept:** Understanding CSV mechanics deeply illuminates why better tools are needed at scale

### **Topic 3: Introduction to Databases**
- **File:** `03-introduction-to-databases.md`
- **Focus:** Purpose-built data systems — the relational model and **normalization** (storing each fact exactly once), real SQL queries against the CivicTrack tables, NoSQL alternatives, and the tradeoffs between paradigms. Also introduces **APIs**: how REST and JSON let applications request data over the web, and how APIs sit in front of databases
- **Key concept:** Why splitting data across related tables — and paying for it with a JOIN — buys you data you can trust, and why certain systems choose relational databases while others choose document stores or key-value caches

---

## How to Use This Module

This module differs from many technical courses in an important way: **conceptual understanding comes before syntax**. You'll encounter real SQL queries and code examples, but the goal isn't to memorize syntax. It's to understand the *ideas* behind how data is organized and retrieved.

Here's how to get the most from this module:

1. **Read actively**: These aren't just explanations to passively consume. As you read examples and analogies, pause and think about how they relate to data systems you've already worked with
2. **Engage with examples**: The real SQL queries, spreadsheet formulas, and CSV examples aren't optional details. Work through them mentally and understand why they're structured that way
3. **Answer the discussion questions**: Each topic ends with review and discussion questions. These aren't tests to pass—they're opportunities to deepen your understanding and see where you might need to re-read something
4. **Connect to your experience**: Actively think about places you've encountered these concepts in your previous career. How would you organize a particular business problem using these data principles?
5. **Don't memorize syntax**: You won't need to remember the exact SQL syntax from this module. What you *will* carry forward is understanding when to use SELECT vs INSERT, when you need a JOIN, and why relationships between tables matter

### Topic Checklist

As you work through this module, check off each topic as you complete it:

- [ ] **Topic 1: Foundations of Data Systems**
- [ ] **Topic 2: Practical Tools—CSVs and Spreadsheets**
- [ ] **Topic 3: Introduction to Databases**

## Prerequisites

- Completion of Modules I–V — in particular Module V's data-structure reasoning, which this module scales up to real storage systems
- Familiarity with a spreadsheet (Excel or Google Sheets) from any prior career is helpful but not required
- **No database or SQL experience assumed** — SQL is introduced from first principles, and you won't be asked to memorize its syntax

### What's Not Covered (And Why)

This module is foundational, not exhaustive. You won't become a database expert by the end. Topics not covered here include:

- **Advanced SQL**: Window functions, stored procedures, complex transactions
- **Database administration**: Backups, disaster recovery, user permissions, performance tuning
- **Big data systems**: Hadoop, Spark, data lakes designed for petabyte-scale data
- **Machine learning infrastructure**: Feature stores, data pipelines for ML
- **Data warehousing**: Design specifically for analytics rather than operational systems

These are important topics, but they build on the foundation you're establishing here. Once you understand how basic databases work, you'll have a much easier time learning these specialized areas.

---

## Key Themes Across the Module

Three big ideas will recur throughout this module. Keep them in mind:

### **Data Reflects Reality**
Every data structure is an attempt to represent some part of the real world—customers, products, transactions, or any entity that matters to the business. How well your data structure matches reality determines how effectively you can use that data.

### **Tradeoffs Are Everywhere**
Spreadsheets are easy to use but don't scale well. Databases are powerful but require more setup. SQL excels at complex queries but requires structured data. NoSQL offers flexibility but loses some guarantees. Understanding these tradeoffs helps you choose the right tool for the job.

### **Programmers Think Differently About Data**
Business users think about data in individual files or spreadsheets. Programmers think about data systems—considering concurrency (multiple people accessing data simultaneously), consistency (all copies of data are synchronized), scalability (handling growth), and queryability (answering complex questions efficiently).

### Connecting Across Your Learning

Throughout this module, you'll see **"Bridge from Business"** sections that explicitly connect programming concepts to business realities you've likely encountered. These sections are there to help you see that you're not learning something completely foreign—you're learning how to think about familiar concepts in new ways.

Similarly, **"Programmer's Perspective"** sections will highlight how programmers think about these topics differently than business users, helping you develop the mental habits of a professional programmer.

---

## Ready to Begin?

You're about to enter one of the most important domains in programming. Data management skills will make you valuable in virtually any role—whether you become a backend developer, data analyst, full-stack engineer, or technical founder. The concepts you're about to learn aren't trendy or temporary; they're foundational ideas that have remained central to computing for decades and will continue to be important for decades to come.

Let's begin by understanding what data actually is and why it matters.
