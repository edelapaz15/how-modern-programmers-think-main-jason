# Glossary — The Decoder Ring

Programming has a lot of jargon, and most of it sounds more intimidating than it is. This is your plain-English decoder ring for the terms used this week. Keep it open; add your own notes as terms click into place.

Terms are grouped by where you first meet them. A 🤖 marks terms about working with AI assistants.

---

## Mindset & the field (Module I–II)

- **Software** — Instructions that tell a computer what to do. Everything you "use" on a device is software.
- **Programmer / Developer / Engineer** — Used loosely to mean the same thing: someone who writes and maintains software. Titles vary by company.
- **Front end** — The part of an application a user sees and interacts with (screens, buttons, forms).
- **Back end** — The part users don't see: the logic, rules, and data handling that run behind the scenes, usually on a server.
- **Full-stack** — Comfortable working on both the front end and the back end.
- **Bug** — A mistake in code that makes it behave incorrectly. Fixing them is **debugging**.
- **Technical debt** — Shortcuts in code that save time now but cost more time later, like a loan you eventually repay.
- **Imposter syndrome** — The common feeling of "everyone else gets this but me." Nearly every developer feels it; it is not a measure of ability.
- **Pomodoro Technique** — A focus method: work in a timed block (commonly 25 minutes), then take a short break. Used in Module II to build sustainable focus.

## Environment & tools (Module III)

- **Operating system (OS)** — The base software that runs your computer (Windows, macOS, Linux).
- **File system** — How files and folders are organized and stored.
- **Command line / terminal / shell** — A text window where you type commands to control the computer instead of clicking. On Windows the default shell on modern setups is **PowerShell** (older systems used Command Prompt, `cmd`).
- **CLI (command-line interface)** — Any tool you drive by typing commands rather than clicking.
- **Path** — The address of a file or folder (e.g., `C:\Users\you\project`). The **PATH** (all caps) is a list of folders the system searches for programs.
- **Environment variable** — A named setting the system or your programs can read (e.g., `JAVA_HOME`).
- **Text editor / IDE** — A program for writing code. An **IDE** (Integrated Development Environment) adds extras like debugging and autocomplete. **VS Code** is the editor used in this course.
- **Extension** — An add-on that gives your editor new abilities.
- **Documentation ("docs")** — The official written reference for a tool or language.
- **Container / Docker** — A way to package an application together with everything it needs to run, so it behaves the same on your laptop as on the server. **Docker** is the best-known tool for it. You'll meet containers properly once you work on real deployments; for now, "it runs in a container" means "its environment travels with it."
- **localhost** — Your own machine, addressed as if it were a website. When a tool says it's running at `http://localhost:5500`, that page is being served by a program on your computer — nothing is going out to the internet.

## Version control & collaboration (Module IV)

- **SDLC (Software Development Lifecycle)** — The stages software goes through: plan, build, test, release, maintain.
- **Waterfall** — The older approach: finish each SDLC stage completely before starting the next. Predictable on paper, but it discovers problems late.
- **Agile / Scrum / Kanban** — Popular ways teams organize work into small, frequent increments.
- **Sprint** — A short, fixed stretch of work (often two weeks) that a Scrum team plans and finishes as a unit.
- **Backlog** — The prioritized list of everything the team might build. Work is pulled from the top.
- **Standup** — A short daily meeting where each person says what they did, what they're doing, and what's blocking them. Fifteen minutes, standing up so it stays that way.
- **Retrospective ("retro")** — A meeting at the end of a sprint about *how the team worked*, not what it built. What to keep doing, what to change.
- **DevOps** — The practice of treating building software and running it in production as one job rather than two teams throwing work over a wall.
- **CI/CD (continuous integration / continuous delivery)** — Automation that builds and tests every change as it lands, and can push the passing ones to users. It's why teams can release weekly instead of yearly.
- **Unit test** — A small automated check that one piece of code does what it should. Run them all after a change and you learn quickly if you broke something.
- **Regression** — Something that used to work and now doesn't. The main thing tests are there to catch.
- **Staging area (Git)** — The in-between space where you gather the changes you want in your next commit. `git add` puts a change there; `git commit` records what's in it. It's what lets you commit three of your five edits.
- **Version control** — A system that records the history of changes to your files so you can review, undo, and collaborate. **Git** is the standard tool.
- **Repository ("repo")** — A project tracked by Git, including all its history.
- **Commit** — A saved snapshot of your changes, with a message describing them.
- **Branch** — A parallel line of work, so you can change things without disturbing the stable version. Every repo has a **default branch** (its name is a convention — Git's original `master`, or `main` on many platforms; this course uses `master`).
- **Merge** — Combining the changes from one branch into another.
- **Merge conflict** — When two changes touch the same lines and Git needs you to decide which to keep.
- **Remote / GitHub** — A copy of a repo hosted online so a team can share it. **GitHub** is a popular host.
- **Clone / push / pull** — Copy a repo down (**clone**), send your commits up (**push**), bring others' commits down (**pull**).
- **Pull request (PR)** — A proposal to merge your branch, where teammates review the change first.
- **Code review** — Teammates reading your change and giving feedback before it merges.
- **Refactoring** — Improving the structure of code without changing what it does — the main way teams pay down technical debt.
- **Deployment** — Releasing software so people can actually use it (e.g., pushing a website live). One of the phases of the SDLC.
- **Markdown** — A simple way to format plain text (headings, lists, links) used for READMEs and docs.
- **README** — The front-page document that explains what a project is and how to use it.

## Thinking & data (Module V–VI)

- **Computational thinking** — Solving problems in steps a computer could follow: break it down, spot patterns, ignore irrelevant detail, write the steps.
- **Decomposition** — Breaking a big problem into smaller, solvable pieces.
- **Abstraction** — Hiding detail behind a simple name or interface so you can think at a higher level.
- **Algorithm** — A precise, step-by-step procedure to solve a problem.
- **Linear search** — Checking items one by one from the start until you find what you want. Simple, but slow on big lists.
- **Binary search** — Repeatedly halving a *sorted* list to find an item fast (like guessing a number "higher/lower"). Far fewer checks than linear search.
- **Big O notation** — A shorthand for how an algorithm's work grows as the data grows (e.g., linear search is O(n), binary search is O(log n)). It's about scaling, not stopwatch time.
- **Pseudocode** — Plain-language "code" used to plan logic before writing the real thing.
- **Data structure** — A way of organizing data so it's easy to use (e.g., a **list/array**, an **object**).
- **Array / list** — An ordered collection of items, accessed by position (**index**), starting at 0.
- **Recursion** — A function that solves a big problem by calling *itself* on smaller pieces, until the pieces are trivial. Merge sort and binary search both work this way.
- **Object / record** — A bundle of named values (keys and values), like a row with labeled columns.
- **Stack** — A collection where the last item added is the first removed (LIFO — last in, first out), like a stack of plates. Think browser "back" button.
- **Queue** — A collection where the first item added is the first removed (FIFO — first in, first out), like a line at a checkout.
- **Set** — A collection of unique items with no duplicates; great for fast "is this already in here?" checks.
- **Control flow** — The order code runs in: **conditionals** (if/else) and **loops** (repeat).
- **CSV** — "Comma-separated values," a plain-text table format spreadsheets and programs both read.
- **Database** — Organized storage built for querying large amounts of data reliably.
- **Table / row / column** — A database table holds rows (records) with columns (fields), like a spreadsheet.
- **Primary key** — The column whose value uniquely identifies each row in a table (e.g., a request ID). No two rows share it.
- **Foreign key** — A column that points to another table's primary key, linking related rows together (e.g., a request's category).
- **SQL** — The language for asking relational databases questions (SELECT, WHERE, JOIN…).
- **Query** — A request for data from a database.
- **JOIN** — Combining related rows from two tables.
- **Aggregate** — A function that squashes many rows into one number: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.
- **GROUP BY / HAVING** — `GROUP BY` splits rows into groups and computes an aggregate for each one ("count the requests per department"). `HAVING` then filters those groups — it's `WHERE` for the summary rows rather than the original ones.
- **Schema** — The defined structure of a database: its tables, columns, and relationships.
- **Normalization** — Organizing tables so each fact is stored exactly once, and everything else points at it. It's why the department name lives in a `departments` table instead of being retyped on every request. **Denormalization** is deliberately going the other way — duplicating data to make reads faster, accepting the update risk.
- **Database index** — A pre-sorted structure the database keeps alongside a table so it can find rows without scanning all of them, turning O(n) lookups into O(log n). (Unrelated to an *array* index, which is a position — same word, different idea.)
- **Transaction** — A group of database changes treated as one all-or-nothing unit. Either every change lands or none does, so you can't half-finish a transfer.
- **ACID** — The four guarantees a relational database makes about transactions: **A**tomicity (all or nothing), **C**onsistency (rules are never violated), **I**solation (concurrent work doesn't interfere), **D**urability (once committed, it survives a crash).
- **ORM (Object-Relational Mapper)** — A library that lets you query the database using your programming language's objects instead of writing SQL by hand. Convenient, but you still need to know what SQL it generates.
- **SQL injection** — A security hole where user-supplied text is pasted into a query and gets executed as SQL. The fix is to never build queries by gluing strings together.
- **ETL (extract, transform, load)** — The routine of pulling data out of one system, cleaning it up, and loading it into another. Activity 15 is a hand-done ETL.
- **Cache** — A fast copy of data you'd otherwise have to recompute or re-fetch. Fast, and always at risk of being out of date.
- **NoSQL** — Databases that don't use the relational table model; good for flexible or very large data.
- **API (Application Programming Interface)** — A defined way for one program to request data or actions from another.
- **Endpoint** — One specific address an API answers on, like `/api/requests/SR-1005`. An API is the set of its endpoints.
- **HTTP** — The request-and-response protocol the web runs on. A client sends a request (`GET`, `POST`, `PUT`, `DELETE`) to a URL; the server sends back a status code and usually some data. **HTTPS** is the same thing encrypted.
- **REST** — A common style for web APIs built on standard web requests.
- **JSON** — A lightweight text format for sending structured data between programs (the usual API format).

## Programming & the web (Module VII–VIII)

- **Syntax** — The grammar rules of a language (where the semicolons and braces go).
- **Semantics** — What the code actually *means* and does.
- **Variable** — A named container for a value (`let count = 0`).
- **Data type** — The kind of a value: text (**string**), **number**, true/false (**boolean**), etc.
- **Template literal** — A JavaScript string written with backticks that can embed values with `${...}` and span multiple lines (e.g., `` `Hello, ${name}` ``).
- **Function** — A reusable, named block of code that takes inputs and returns a result.
- **Parameter / argument** — The named inputs a function expects (**parameters**) and the actual values you pass (**arguments**).
- **Scope** — Where in your code a variable can be seen. A variable declared inside a function exists only inside it, which is a feature: it keeps unrelated parts of a program from stepping on each other's names.
- **REPL (read–eval–print loop)** — A prompt where you type one line of code, press Enter, and immediately see the result. The browser console is a REPL; it's the fastest way to test an idea.
- **npm** — The package manager for JavaScript: the command that downloads libraries other people wrote (`npm install`) and the registry it downloads them from.
- **Dependency** — A library your project needs in order to run. `package.json` lists them; `node_modules/` is where they land (and why it's in `.gitignore`).
- **Asynchronous ("async")** — Code that starts something slow — a network request, a file read — and lets the program keep going instead of freezing until it finishes. A **promise** is the placeholder object standing in for the answer that hasn't arrived yet; `await` is how you say "wait here for it."
- **Stack trace** — The list of function calls that led to an error, innermost first. It's the error telling you exactly where it happened and how it got there — read it from the top.
- **Class** — A blueprint for creating objects that bundles related data and behavior together (central to Java and object-oriented programming).
- **Method** — A function that belongs to a class or object (e.g., `array.push(...)`).
- **Constructor** — The special method that runs when you create a new object from a class, setting up its starting values.
- **Compiled vs. interpreted** — Compiled languages are translated before running — **Java**, for example, compiles to **bytecode** that runs on the JVM; interpreted languages (like **JavaScript**) run line by line. A related but separate distinction: **Java** is **statically typed** (types checked before the program runs) while **JavaScript** is **dynamically typed** (types checked as it runs).
- **Runtime** — The environment that runs your code (a **browser** or **Node.js** for JavaScript; the **JVM** for Java).
- **HTML / CSS / JavaScript** — The three front-end web languages: structure, style, and behavior.
- **DOM (Document Object Model)** — The browser's live, in-memory representation of a web page that JavaScript can read and change.
- **Framework / library** — Pre-written code you build on top of (e.g., **Angular**, **Spring Boot**).
- **Linter / formatter** — Tools that flag likely mistakes (**linter**, e.g., ESLint) and auto-style your code (**formatter**, e.g., Prettier).

## 🤖 Working with AI (woven throughout)

- 🤖 **AI coding assistant** — A tool (in your editor or a chat window) that can explain code, draft snippets, and suggest fixes from a plain-language request.
- 🤖 **Prompt** — The instruction you give an AI assistant. Clear, specific prompts get better answers.
- 🤖 **Hallucination** — When an AI states something confidently that is wrong or made up. This is why you **always verify** AI output — run it, read it, and check it against the docs before trusting it.
- 🤖 **Inline completion vs. chat** — Assistants can either auto-suggest code as you type (**inline**) or answer questions in a conversation (**chat**). Both are tools to learn *with*, not substitutes for understanding.

---

*Don't try to memorize this list. Skim it now, refer back when a term shows up, and it will stick through use as you keep programming.*
