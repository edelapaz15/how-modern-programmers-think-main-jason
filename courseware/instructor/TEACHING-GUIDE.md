# Teaching Guide — How Modern Programmers Think

**Course Code:** PT28604
**Duration:** Five Days (35 hours)
**Audience:** Professionals new to computer programming

---

## Time Budget

| Category | Estimated Hours |
|----------|----------------|
| Lectures / Slides | ~9.5 hrs |
| Activities (20 total) | **~18.25–23.5 hrs** at the Est. Times listed in this guide |
| Demos (38 total) | ~9.5 hrs (9 hrs 32 min exactly) |
| Breaks / Transitions / Q&A / Exit tickets | ~3 hrs |
| **Total** | **~40–46 hrs of material against ~35 hrs of scheduled class time** |

> **Read this before you plan the week — the material does not fit the week, by design.**
>
> The scheduled day is 8:30–4:30 with an hour for lunch and four 10-minute breaks: about **6 hrs 20 min of teachable time per day, ~31 hrs 40 min across the week.**
>
> The activity Est. Times in this guide are generous upper bounds that absorb setup, discussion, and debrief. Where an activity annotates its own parts with minutes, those internal timings sum **considerably lower** than the Est. Time here — roughly two-thirds of it. (Seven activities carry no per-part timings at all, so this is a feel, not a computed figure.) The honest range for activities is somewhere between the two, depending on your cohort.
>
> **Under either reading, this is more material than the week holds, and it is not meant to be delivered end to end.** Days 4 and 5 overrun even on the most optimistic timings. Triage is an expected part of teaching this course, not a sign something went wrong — see [Pacing Notes and Delivery Risks](#pacing-notes-and-delivery-risks) for what to cut and where the real slack is.

---

## Progression Model

The course uses a three-phase approach to code examples:

- **Modules I–III** — Conceptual foundations using plain English and pseudocode
- **Modules IV–VI** — Transitional, introducing real commands (Git, SQL) alongside pseudocode
- **Modules VII–VIII** — Real code in JavaScript and Java with full explanations

These bands describe the *primary* teaching vehicle of each phase, not a hard rule. Two deliberate exceptions appear earlier: brief, clearly-labeled *"same idea in a real language"* previews (so learners see where pseudocode is heading), and code-*reading* exercises — reading and critiquing real code is a first-class beginner skill, distinct from writing it (e.g., Activity 10's code-review simulation).

---

## Supporting Materials and Threads

Beyond the module docs, demos, and activities, the course includes connective materials that tie the week together:

- **[Course Project Thread: CivicTrack](../course-project/README.md)** — one running example (a 311-style citizen service-request system for the fictional City of Rivervale) threaded through all five days, so every module is another lens on the same application. Sample [datasets](../course-project/data/) (a messy CSV, a clean CSV, and a relational schema with JSON) back the Day 4 data work. Day 1 (Activity 1) takes CivicTrack apart; Day 4 models and queries its data (Activities 14–15, Demos 21–26); Day 5 (Module VIII) steps back and sees CivicTrack as one whole system.
- **[Glossary — The Decoder Ring](../docs/glossary.md)** — plain-English definitions of the week's jargon. Point students to it whenever a new term lands.
- **[Per-Module Exit Tickets](../assessments/)** — short, non-graded checks for understanding at the end of each module (~5 minutes); review them before building on the module to catch gaps early.
- **Unplugged warm-up** — Activity 11 opens with "The Human Robot," a kinesthetic decomposition exercise (no computer required).
- **Read before you write** — Module VII includes a code-reading-first subsection; reading code is treated as a first-class beginner skill (revisited in Demo 37).
- **AI woven throughout** — a consistent "🤖 Working with AI" motif appears across Modules III, V, VI, and VII (and Demos 7, 37, 38), always paired with a verify-the-output discipline.

---

## Day 1 — Foundations and Mindset

**Modules I & II | No demos — lecture and activity driven**

### Module I — Introduction to Modern Programming

This module sets context for everything that follows: what modern programming looks like, how we got here, and why the course is designed this way.

#### Lecture Topics

| # | Topic | File |
|---|-------|------|
| 1 | Defining the Modern Programmer | `01-defining-the-modern-programmer.md` |
| 2 | Who This Course Is For | `02-who-this-course-is-for.md` |

#### Activities

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 1 | Anatomy of an Application | 45–60 min | Reverse-engineer a familiar app to identify technology layers, team roles, and programming disciplines |
| 2 | Decode a Software Team | 30–45 min | Analyze team roles in a fictional company, compare to prior career experience |

#### Exit Ticket

[module-01-exit-ticket.md](../assessments/module-01-exit-ticket.md) — ~5-minute formative check at the close of Module I.

---

### Module II — Productivity, Focus, and Developer Well-Being

Establishes sustainable habits and practices before any coding begins. Treats programming as an endurance sport requiring consistent practice.

#### Lecture Topics

| # | Topic | File |
|---|-------|------|
| 1 | Organizing Your Workflow | `01-organizing-your-workflow.md` |
| 2 | Sharpening Focus and Attention to Detail | `02-sharpening-focus-and-attention-to-detail.md` |
| 3 | Staying Healthy in Tech | `03-staying-healthy-in-tech.md` |

#### Activities

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 3 | Design Your Developer Workspace | 90–120 min | Audit and plan physical/digital workspace, create folder structure |
| 4 | The Focus Challenge | 60–75 min | Practice Pomodoro Technique, research a topic, track focus patterns |
| 5 | Tech Health Plan | 45–60 min | Create a personal well-being plan for sustainable learning |

#### Exit Ticket

[module-02-exit-ticket.md](../assessments/module-02-exit-ticket.md) — ~5-minute formative check at the close of Module II.

---

## Day 2 — Tools of the Trade

**Module III | 8 demos**

### Module III — Development Environments & Technical Efficiency

Addresses the practical tools and systems that separate experienced programmers from novices. Emphasizes that roughly half of programming involves knowing how to look things up.

#### Topic: Operating Systems Overview

| # | Topic | File |
|---|-------|------|
| 1 | Operating Systems Overview | `01-operating-systems-overview.md` |

*(No demos or activities for this topic — conceptual overview)*

---

#### Topic: Windows Essentials

| # | Topic | File |
|---|-------|------|
| 2 | Windows Essentials | `02-windows-essentials.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 1 | PowerShell Navigation and File Management | 15 min |
| 2 | Demo | 2 | Environment Variables and PATH | 15 min |
| 3 | Demo | 3 | Windows Terminal and WSL | 13 min |

---

#### Topic: Text Editors and IDEs

| # | Topic | File |
|---|-------|------|
| 3 | Text Editors and IDEs | `03-text-editors-and-ides.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 4 | VS Code Setup and Tour | 15 min |
| 2 | Demo | 5 | VS Code Productivity Features | 13 min |
| 3 | Demo | 6 | Keyboard Shortcuts and Multi-Cursor | 13 min |

---

#### Topic: Smart Research Practices

| # | Topic | File |
|---|-------|------|
| 4 | Smart Research Practices | `04-smart-research-practices.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 7 | Searching for Programming Help | 14 min |
| 2 | Demo | 8 | Browser Developer Tools | 12 min |

---

#### Topic: Leveraging Online Coding Resources

| # | Topic | File |
|---|-------|------|
| 5 | Leveraging Online Coding Resources | `05-leveraging-online-coding-resources.md` |

*(No demos for this topic — covered in lecture)*

---

#### Day 2 Activities

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 6 | Command-Line Treasure Hunt | 45–60 min | Navigate directories, create files, explore environment variables |
| 7 | VS Code Power User | 45–60 min | Install extensions, customize settings, master keyboard shortcuts |

#### Exit Ticket

[module-03-exit-ticket.md](../assessments/module-03-exit-ticket.md) — ~5-minute formative check at the close of Module III.

---

## Day 3 — Version Control and Teamwork

**Module IV | 8 demos**

### Module IV — Software Development Lifecycle & Collaboration

Explores how professional teams build software together. Draws parallels between SDLC and processes students know from prior careers.

#### Topic: The Big Picture — SDLC

| # | Topic | File |
|---|-------|------|
| 1 | The Big Picture: SDLC | `01-the-big-picture.md` |

*(No demos — conceptual lecture on methodologies: Waterfall, Agile/Scrum, Kanban, Lean, DevOps)*

---

#### Topic: Working Locally with Version Control

| # | Topic | File |
|---|-------|------|
| 2 | Working Locally with Version Control | `02-working-locally-with-version-control.md` |

*(Conceptual introduction — demos follow in the next topic)*

---

#### Topic: Hands-On with Git

| # | Topic | File |
|---|-------|------|
| 3 | Hands-On with Git | `03-hands-on-with-git.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 9 | Git Setup and First Commit | 18 min |
| 2 | Demo | 10 | Viewing History and Diffs | 13 min |
| 3 | Demo | 11 | Branching and Merging | 16 min |
| 4 | Demo | 12 | Merge Conflict Resolution | 18 min |
| 5 | Demo | 13 | Remotes and Pull Requests | 18 min |
| 6 | Demo | 14 | Git Recovery Essentials | 15 min |

---

#### Topic: Writing in Markdown

| # | Topic | File |
|---|-------|------|
| 4 | Writing in Markdown | `04-writing-in-markdown.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 15 | Markdown Syntax and Preview | 12 min |
| 2 | Demo | 16 | Write a Project README | 13 min |

---

#### Topic: Collaboration and Code Quality

| # | Topic | File |
|---|-------|------|
| 5 | Collaboration and Code Quality | `05-collaboration-and-code-quality.md` |

*(No demos — lecture on code review, technical debt, and team dynamics)*

---

#### Day 3 Activities

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 8 | Your First Git Repository | 45–60 min | Initialize a repo, commit, branch, merge, and view history |
| 9 | Write a Project README | 45–60 min | Write a professional README.md using full Markdown syntax |
| 10 | Code Review Simulation | 45–60 min | Review code snippets, identify issues, write professional feedback |

#### Exit Ticket

[module-04-exit-ticket.md](../assessments/module-04-exit-ticket.md) — ~5-minute formative check at the close of Module IV.

---

## Day 4 — Logic and Data

**Modules V & VI | 10 demos**

### Module V — Computational Thinking, Data Structures & Algorithms

The heart of programming logic — bridging how we think about solving problems with how computers execute solutions.

#### Topic: Problem-Solving with Computational Thinking

| # | Topic | File |
|---|-------|------|
| 1 | Problem-Solving with Computational Thinking | `01-problem-solving-with-computational-thinking.md` |

*(No demos — introduces decomposition, pattern recognition, abstraction, and algorithm design)*

---

#### Topic: Core Data Structures

| # | Topic | File |
|---|-------|------|
| 2 | Core Data Structures | `02-core-data-structures.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 17 | Arrays, Objects, and Indexing | 15 min |
| 2 | Demo | 18 | Stacks and Queues | 14 min |

---

#### Topic: Control Flow Mastery

| # | Topic | File |
|---|-------|------|
| 3 | Control Flow Mastery | `03-control-flow-mastery.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 19 | Conditionals and Loops | 16 min |

---

#### Topic: Algorithm Basics

| # | Topic | File |
|---|-------|------|
| 4 | Algorithm Basics | `04-algorithm-basics.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 20 | Linear vs. Binary Search | 15 min |

---

#### Module V Activities

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 11 | Decompose a Real-World Process | 45–60 min | Apply four pillars of computational thinking to a familiar process |
| 12 | Data Structure Decisions | 45–60 min | Match real-world scenarios to appropriate data structures |
| 13 | Algorithm Race | 45–60 min | Compare linear and binary search by hand, analyze performance |

#### Exit Ticket

[module-05-exit-ticket.md](../assessments/module-05-exit-ticket.md) — ~5-minute formative check at the close of Module V.

---

### Module VI — Data Management: From Spreadsheets to Databases

Introduces how data is structured, stored, retrieved, and used in programming and business contexts.

#### Topic: Foundations of Data Systems

| # | Topic | File |
|---|-------|------|
| 1 | Foundations of Data Systems | `01-foundations-of-data-systems.md` |

*(No demos — conceptual lecture on data types, storage paradigms, and when databases are needed)*

---

#### Topic: Practical Tools — CSVs and Spreadsheets

| # | Topic | File |
|---|-------|------|
| 2 | Practical Tools: CSVs and Spreadsheets | `02-practical-tools-csvs-and-spreadsheets.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 21 | CSV File Anatomy | 12 min |
| 2 | Demo | 22 | Spreadsheet Formulas and Data Issues | 15 min |

---

#### Topic: Introduction to Databases

| # | Topic | File |
|---|-------|------|
| 3 | Introduction to Databases | `03-introduction-to-databases.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 23 | SQL Basics: SELECT, WHERE, ORDER BY | 16 min |
| 2 | Demo | 24 | SQL JOIN and Aggregation | 17 min |
| 3 | Demo | 25 | CREATE TABLE and INSERT | 15 min |
| 4 | Demo | 26 | Open Data and APIs | 15 min |

---

#### Module VI Activities

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 14 | Build a Mini Database on Paper | 60–75 min | Design the CivicTrack tables (departments, categories, requests), relationships, sample data, and SQL queries |
| 15 | CSV Data Detective | 45–60 min | Find and fix data-quality issues in the messy CivicTrack service-request export |

#### Exit Ticket

[module-06-exit-ticket.md](../assessments/module-06-exit-ticket.md) — ~5-minute formative check at the close of Module VI.

---

## Day 5 — Real Code and Next Steps

**Modules VII & VIII | 12 demos**

### Module VII — Programming Syntax & Logic

The critical transition from understanding concepts to writing real code with actual syntax and execution environments.

#### Topic: Anatomy of a Programming Language

| # | Topic | File |
|---|-------|------|
| 1 | Anatomy of a Programming Language | `01-anatomy-of-a-programming-language.md` |

*(No demos — lecture on syntax vs. semantics, compiled vs. interpreted, language categories)*

---

#### Topic: JavaScript Fundamentals

| # | Topic | File |
|---|-------|------|
| 2 | JavaScript Fundamentals | `02-javascript-fundamentals.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 27 | Browser Console and Variables | 15 min |
| 2 | Demo | 28 | Conditionals, Loops, and Functions | 16 min |
| 3 | Demo | 29 | Arrays and Array Methods | 15 min |
| 4 | Demo | 30 | Objects and Destructuring | 14 min |

---

#### Topic: Hands-On Practice in VS Code

| # | Topic | File |
|---|-------|------|
| 3 | Hands-On Practice in VS Code | `03-hands-on-practice-in-vs-code.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 31 | Create and Run JS in VS Code and the Browser | 18 min |
| 2 | Demo | 32 | VS Code Debugger | 16 min |
| 3 | Demo | 33 | Prettier and ESLint in Action | 15 min |

---

#### Topic: Modern Web Development Overview

| # | Topic | File |
|---|-------|------|
| 4 | Modern Web Development Overview | `04-modern-web-development-overview.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 34 | HTML + CSS + JS Working Together | 15 min |

---

#### Topic: Introduction to Java

| # | Topic | File |
|---|-------|------|
| 5 | Introduction to Java | `05-introduction-to-java.md` |

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 35 | Java Compile-and-Run Cycle | 20 min |
| 2 | Demo | 36 | Java Classes and JavaScript Comparison | 15 min |

---

#### Module VII Activities

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 16 | JavaScript Basics Workout | 90–120 min | Complete 10 progressive JavaScript coding challenges |
| 17 | Build a Personal Webpage | 90 min | Create an HTML/CSS/JS "About Me" page with interactivity |
| 18 | Debug This Code | 45–60 min | Find and fix bugs in 5 JavaScript snippets |
| 19 | Java Meets JavaScript | 75–90 min | Implement the same program in both languages, compare side by side |

#### Exit Ticket

[module-07-exit-ticket.md](../assessments/module-07-exit-ticket.md) — ~5-minute formative check at the close of Module VII.

---

### Module VIII — Building for the Future

The capstone module — crystallizes foundational concepts into integrated practice and launches students toward specialization.

#### Lecture Topics

| # | Topic | File |
|---|-------|------|
| 1 | Bridging Theory to Practice | `01-bridging-theory-to-practice.md` |
| 2 | Next Steps | `02-next-steps.md` |

#### Topic: Bridging Theory to Practice (01)

| Order | Type | # | Title | Est. Time |
|-------|------|---|-------|-----------|
| 1 | Demo | 37 | Reading an Unfamiliar Codebase | 15 min |
| 2 | Demo | 38 | AI Coding Assistant | 15 min |

#### Activity

| # | Activity | Est. Time | Description |
|---|----------|-----------|-------------|
| 20 | My Learning Roadmap | 60–75 min | Create a 90-day plan, choose a specialization, set up a portfolio |

#### Exit Ticket

[module-08-exit-ticket.md](../assessments/module-08-exit-ticket.md) — ~5-minute formative check at the close of Module VIII.

---

## Activity Progression Summary

| Phase | Activities | Modules | Character |
|-------|-----------|---------|-----------|
| Foundations and Self-Awareness | 1–5 | I–II | Reflective exercises, no coding required |
| Tools and Teamwork | 6–10 | III–IV | Hands-on with command line, VS Code, Git, Markdown, code review |
| Thinking Like a Programmer | 11–15 | V–VI | Computational thinking, data structures, algorithms, SQL, data analysis |
| Writing Real Code | 16–20 | VII–VIII | JavaScript, Java, debugging, web development, personal roadmap |

---

## Demo Summary by Module

| Module | Topic Area | Demos | Est. Time |
|--------|-----------|-------|-----------|
| III | Command line, VS Code, research | 1–8 | 1 hr 50 min |
| IV | Git, Markdown | 9–16 | 2 hrs 3 min |
| V | Data structures, control flow, algorithms | 17–20 | 1 hr |
| VI | CSV, spreadsheets, SQL, APIs | 21–26 | 1 hr 30 min |
| VII | JavaScript, debugging, web dev, Java | 27–36 | 2 hrs 39 min |
| VIII | Code reading, AI tools | 37–38 | 30 min |
| **Total** | | **38 demos** | **9 hrs 32 min** |

---

## Assessments by Module

One formative exit ticket per module — 3–4 recap questions plus a Muddiest Point and a Connect It, run at the end of the module (~5 minutes, or ~7 for the four-question tickets in Modules IV–VII; not graded). See [assessments/](../assessments/).

| Module | Exit Ticket | Focus |
|--------|-------------|-------|
| I | [module-01](../assessments/module-01-exit-ticket.md) | Modern programmer, team roles, app layers |
| II | [module-02](../assessments/module-02-exit-ticket.md) | Workflow habits, focus, well-being |
| III | [module-03](../assessments/module-03-exit-ticket.md) | Command line/PowerShell, VS Code, smart research |
| IV | [module-04](../assessments/module-04-exit-ticket.md) | SDLC; Git commit/branch/merge; code review |
| V | [module-05](../assessments/module-05-exit-ticket.md) | Decomposition, data structures, search |
| VI | [module-06](../assessments/module-06-exit-ticket.md) | Relational tables, SQL, APIs/JSON |
| VII | [module-07](../assessments/module-07-exit-ticket.md) | JavaScript syntax, JS vs. Java, the web trio |
| VIII | [module-08](../assessments/module-08-exit-ticket.md) | Bridging to practice, AI tools, next steps |
| **Total** | **8 tickets** | **~40 min across the week** |

---

## Daily Overview

| Day | Modules | Lectures | Demos | Activities | Exit Tickets | Theme |
|-----|---------|----------|-------|------------|--------------|-------|
| 1 | I, II | Intro, Productivity, Well-Being | — | 1–5 | I, II | Foundations and Mindset |
| 2 | III | Dev Environments, Windows, VS Code, Research | 1–8 | 6–7 | III | Tools of the Trade |
| 3 | IV | SDLC, Git, Markdown, Collaboration | 9–16 | 8–10 | IV | Version Control and Teamwork |
| 4 | V, VI | Computational Thinking, Data Management | 17–26 | 11–15 | V, VI | Logic and Data |
| 5 | VII, VIII | Syntax & Logic, Building for the Future | 27–38 | 16–20 | VII, VIII | Real Code and Next Steps |

---

## Pacing Notes and Delivery Risks

The material listed in this guide exceeds the teachable week. **Days 1, 4, and 5 are over-subscribed at the listed estimates; Days 4 and 5 overrun even at the activities' own lower internal timings.** Decide what flexes *before* you walk in — these notes tell you where the pressure is and where the room is.

### How each day actually fits

Measured against **~6 hrs 20 min** of teachable time per day (8:30–4:30, less lunch and four 10-minute breaks), with lecture at ~1.25 hrs per module (Module VIII at ~0.9 — see the note below the table) and activities at their listed Est. Times. Exit tickets are included at 5 minutes each, or 7 for the four-question tickets in Modules IV–VII:

| Day | Modules | Demos | Activities | Day total | Fit |
|-----|---------|-------|------------|-----------|-----|
| 1 | I, II | — | 4.5–6.0 hrs | 7.2–8.7 hrs | **Over.** Two modules of lecture and five activities, with no demos to trim. Activities 3 (90–120 min) and 4 (60–75 min) are the flex. |
| 2 | III | 1.8 hrs | 1.5–2.0 hrs | 4.7–5.2 hrs | **Fits — this is the week's only real slack (~1–1.5 hrs).** |
| 3 | IV | 2.1 hrs | 2.25–3.0 hrs | 5.7–6.5 hrs | Fits, but with no margin at the upper end. |
| 4 | V, VI | 2.5 hrs | 4.0–5.25 hrs | 9.2–10.5 hrs | **Over by 2–4 hrs.** See below. |
| 5 | VII, VIII | 3.15 hrs | 6.0–7.25 hrs | 11.5–12.75 hrs | **Over by 5–6.5 hrs.** The tightest day by far. |

Even on the most optimistic reading — every activity run at its own internal part timings — **Day 4 still runs ~2 hrs long and Day 5 ~4.5 hrs long.** Days 1 and 3 come in at roughly a full day each. Treat Days 4 and 5 as triage days from the outset.

> **Module VIII's Topic 1 was restructured to take pressure off Day 5.** It previously walked the same
> scope → data → back end → front end → version control → testing → deploy arc **three times** — as a
> lifecycle walkthrough, again as an e-commerce case study, and again as "build your first project" —
> roughly 1,100 lines of it. The arc now appears **once**, in *A Real Project Lifecycle*. What
> followed it is now *Choosing and Scoping Your First Project*, which covers only the part that
> wasn't already said: picking a problem small enough to finish and writing a scope you can hold
> yourself to. Topic 1 is about 30% shorter, and Module VIII's lecture share drops from ~1.25 hrs to
> **~0.9 hrs** — which is where Day 5's improvement above comes from. It does not rescue the day;
> triage below is still required.

### Day 5 is the tightest day — plan to triage

Day 5 carries **12 demos (27–38), 5 activities (16–20), and 2 modules of lecture**. Run as-is, it overflows. Decide in advance what is core and what flexes:

| Priority | Demos | Rationale |
|----------|-------|-----------|
| **Core (always run)** | 27, 28, 31, 32, 35, 38 | Variables/console, control flow + functions, creating and running real JS in VS Code, the debugger, the Java compile-run cycle, and the AI assistant — the load-bearing "writing and running real code" demos. |
| **Flex (shorten, or assign as self-study if behind)** | 29, 30, 33, 34, 36, 37 | Array methods (29) overlap Module V; objects/destructuring (30), Prettier/ESLint (33, needs npm setup), HTML+CSS+JS (34), Java-vs-JS (36), and reading an unfamiliar codebase (37) are valuable but survivable as take-home. |

- **Activities 16 (~90–120 min) and 17 (~90 min) are large.** Start them in class, finish asynchronously, or assign as take-home with an answer key (both now ship one).
- The **Java topic (demos 35–36, Activity 19)** is preview-level. If the cohort is struggling with JavaScript, trim Java rather than cutting core JS practice.
- **Module VIII's reading is now the cheapest thing on Day 5 to assign rather than lecture.** With the arc de-duplicated, Topic 1 has one walkthrough (*A Real Project Lifecycle*) and then four self-contained skill sections — reading unfamiliar code, debugging, refactoring, and scoping a first project. Deliver the walkthrough live, since it's the payoff that ties all eight modules together, and let the rest be read. The AI sections pair with Demo 38 and land better as a live discussion than as a lecture.

### Day 4 also overruns — it is not the place to absorb Day 5

Day 4 carries **2 modules of lecture, 10 demos (17–26), and 5 activities (11–15)**, and runs 2–4 hrs long on its own. It has several short demos, which makes it *look* recoverable — it isn't. A suggested starting point:

| Priority | Items | Rationale |
|----------|-------|-----------|
| **Core (always run)** | Demos 17, 19, 20, 21, 23, 24 · Activities 11, 14, 15 | Arrays/indexing (17) and conditionals/loops (19) feed Module VII directly; search (20) backs Activity 13's reasoning; 21 → 23 → 24 is the CivicTrack data story, and Demo 24 (JOIN + GROUP BY) is its payoff. Activity 11 is the kinesthetic opener; 14 and 15 are the CivicTrack backbone. |
| **Flex (shorten or assign as self-study)** | Demos 18, 25, 26 · Activities 12, 13 | Stacks/queues (18) is conceptual background rather than a skill students apply this week; CREATE/INSERT (25) builds tables students have already queried, so it reinforces rather than introduces; Open Data/APIs (26) is a preview. Activities 12 and 13 are paper exercises that survive as take-home. |

> **Demo 22 (spreadsheet) is load-bearing despite looking optional.** Demos 23 and 24 explicitly reconcile their SQL results back to Demo 22's COUNTIF answers ("the 5 New are Demo 22's five"). Cutting 22 breaks that callback — if you must drop it, drop the reconciliation talking points in 23–24 too, or the class will be asked to remember numbers they never saw.

### Module VII is the heaviest module

It introduces JavaScript **and** Java **and** the web stack **and** object orientation. Keep the Java OOP material (`05-introduction-to-java.md`) light — it is a preview, not a mastery target. Watch for cognitive overload and prioritize JavaScript fluency.

### Toolchain setup is a hidden time cost on Windows

Each of these can cost a beginner 10–15 minutes of unplanned time:

- **JDK install + PATH** (demos 35–36, Activity 19) — the #1 Windows failure point. Verify `javac -version` works *before* the Java session.
- **Node.js** (Activity 16, demos 31, 33).
- **First GitHub push auth** (demo 13) — triggers a browser OAuth popup via Git Credential Manager.

Verify toolchains during the Day 2 environment setup (Module III) so Day 5 isn't spent installing software. An online compiler/REPL is a good fallback for any student whose local setup fails.

### Prerequisites that cannot be fixed in the room

These are not "10–15 minutes of unplanned time" — they are unrecoverable if the VM image lacks them, because each needs administrator rights, an external account, or outbound network access. Confirm all of them against the actual image **before Day 1**; see [SETUP_STUDENT_MACHINE.md](../setup/SETUP_STUDENT_MACHINE.md).

- **WSL 2 + Ubuntu** (Demo 3, Day 2) — `wsl --install` needs admin, a reboot, a 1–2 GB download, and virtualization enabled on the VM. Roughly half of Demo 3 runs inside the Linux shell. It must be decided at image-build time; it cannot be added later. **(Skipped for the current cohort — see below.)**
- **GitHub — read access for students, push access for you.** Students need an account only to read and clone the course repository, so have them created before Day 1 (email verification does not go well live with a full room). **No student pushes code at any point in this course**; Activity 20 builds each portfolio as a *local* repository with the Activity 8 commands. What does need to work is **your** account and push authentication for Demo 13 on Day 3 — including 2FA and the Git Credential Manager OAuth popup. Test that from the classroom machine before Wednesday, because Demo 13 is the one place a push happens live.
- **The VS Code Marketplace** (`marketplace.visualstudio.com`) — **Demo 4 on Day 2 installs Live Server, Prettier, and ESLint live.** If the Marketplace is blocked, that failure doesn't surface on Day 2; it surfaces on **Day 5**, when Demos 31, 33, and 34 all need those extensions. Verify reachability during Day 2's setup, which is exactly what the slack is for.
- **An AI assistant account** (Demo 38, Day 5) — the demo runs against a live tool (ChatGPT/Claude/Gemini/Copilot) and has no offline fallback. Corporate filtering commonly blocks these. Confirm at minimum the *instructor's* account works from the classroom network, and find out which tools are permitted — that answer also shapes the honest version of Module VIII's "how you'll actually use AI at work" conversation.

### WSL 2 — skipped for the current cohort only

The VMs for the current class were **already built without WSL**, and it is not being retrofitted. For this delivery only, Demo 3's Sections 2–3 run as a **projected walkthrough on the instructor machine**; Sections 1 and 4 (Windows Terminal, `winget`) stay hands-on. [Demo 3](../demos/demo-03-windows-terminal-wsl.md) carries the section-by-section plan, the framing to use with the room, and a warning about which distro `wsl` opens if you run podman or Docker Desktop.

This costs nothing on the schedule — Day 2 is the week's slack day. **WSL remains a standing requirement for every subsequent delivery**, where Demo 3 runs in full and students work in the Linux shell themselves; the setup doc records what to install and why it has to happen at image-build time.

### Where the slack is

**Day 2 is the only day with genuine recoverable time (~1–1.5 hrs)** — one module, eight short demos, two activities. Day 3 fits, but with no margin to lend.

**Day 4 is not slack.** It overruns by 2–4 hrs on its own (see above), so do not plan to relieve Day 5 by pushing work into it — that was this guide's earlier advice and it makes both days worse. Day 5 has to be triaged **in place**, using the table above.

If you want to buy time for Day 5, the realistic levers are: use Day 2's slack to get every toolchain verified (a failed `javac` on Day 5 costs more than any demo you'd move), and assign the large Day 5 activities (16, 17) as take-home — both ship an instructor answer key. Moving the Module VII web-dev or Java demos earlier doesn't work: they run too far ahead of Module VII's lecture to land.
