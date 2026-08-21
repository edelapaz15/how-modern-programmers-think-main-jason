# Instructor Demo List

**How Modern Programmers Think — PT28604**

This document lists the technical demonstrations the instructor should perform during the five-day course. Demos are consolidated to fit the schedule alongside lectures and 20 student activities. Each demo runs roughly 12–20 minutes depending on difficulty — foundational and setup-heavy demos (Git internals, SQL JOINs, and the Java/JavaScript toolchain) run longer for an audience new to programming. Modules I and II are conceptual and require no technical demos.

**Time budget:** the 38 demos come to **~9.5 hours** (9 hrs 32 min exactly, at ~12–20 min each depending on difficulty). That is one line item in a week that is deliberately over-subscribed — the full accounting, including how much of the material you are expected to *not* get to, lives in the Time Budget table in [TEACHING-GUIDE.md](../instructor/TEACHING-GUIDE.md). Read that before planning a day; don't budget from this page alone.

---

## Module III — Development Environments & Technical Efficiency

### Topic: Windows Essentials (02)

| # | Demo | What to Show |
|---|------|-------------|
| 1 | PowerShell navigation and file management | Open PowerShell. Navigate directories with `Set-Location` and `Get-ChildItem`. Create a project folder structure with `New-Item`. Copy, move, and delete files. Show tab completion and `Select-String` for searching inside files. |
| 2 | Environment variables and PATH | Display `$env:PATH` and `Get-ChildItem env:`. Set a temporary variable. Open System Properties to show where permanent variables are configured. Explain why PATH matters for running tools like `node` or `git`. |
| 3 | Windows Terminal and WSL | Open Windows Terminal with multiple tabs (PowerShell, WSL). In WSL, run `ls`, `pwd`, `cat`. Navigate to `/mnt/c/Users/` to show cross-OS file access. Briefly mention `winget` for installing dev tools. |

### Topic: Text Editors and IDEs (03)

| # | Demo | What to Show |
|---|------|-------------|
| 4 | VS Code setup and tour | Open VS Code. Walk through the interface: sidebar, editor area, integrated terminal (`` Ctrl+` ``), status bar. Install Prettier, ESLint, and Live Server extensions. Select a theme. Change `editor.fontSize` and `editor.formatOnSave` in Settings. |
| 5 | VS Code productivity features | Open a sample file. Demonstrate the Command Palette (`Ctrl+Shift+P`), quick file open (`Ctrl+P`), go to line (`Ctrl+G`). Show IntelliSense autocomplete in a `.js` file. Show syntax highlighting across different file types. |
| 6 | Keyboard shortcuts and multi-cursor | In a file with repeated text, use `Ctrl+D` to select occurrences one at a time, then `Ctrl+Shift+L` to select all. Show `Alt+Up/Down` to move lines, `Ctrl+/` to toggle comments, and `Alt+Click` for manual multi-cursor placement. |

### Topic: Smart Research Practices (04)

| # | Demo | What to Show |
|---|------|-------------|
| 7 | Searching for programming help | In a browser, search an error message in quotes. Use `site:stackoverflow.com` and `site:developer.mozilla.org`. Open a Stack Overflow result and point out vote counts, accepted answer, dates, and comments. Navigate to MDN and walk through a documentation page (e.g., `Array.map()`). |
| 8 | Browser developer tools | Open DevTools with `F12`. Show the Console (type `2 + 2`), the Elements tab (inspect an element), and the Network tab (reload and watch requests). This is a preview — revisited in depth in Module VII. |

---

## Module IV — SDLC & Collaboration

### Topic: Hands-On with Git (03)

| # | Demo | What to Show |
|---|------|-------------|
| 9 | Git setup and first commit | Configure with `git config --global`. Create a folder, run `git init -b master` (the `-b` names the branch so every machine matches), show the `.git` directory. Create a file, walk through `git status` → `git add` → `git status` → `git commit` → `git status`. Emphasize the staging area concept. |
| 10 | Viewing history and diffs | Make 3-4 commits with different changes. Show `git log`, `git log --oneline`, and `git log --stat`. Run `git diff` on an uncommitted change to show what's about to be staged. |
| 11 | Branching and merging | Create a branch with `git switch -c feature/add-bio`. Make a commit on it. Switch back to `master` — show that files revert. Merge the branch. Show `git log --oneline --graph` to visualize history. |
| 12 | Merge conflict resolution | Set up a conflict by editing the same line on two branches. Attempt the merge. Open the file and walk through the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). Resolve, stage, and complete the merge. |
| 13 | Remotes and pull requests | Show `git remote -v`. Push a branch to GitHub. In the browser, create a pull request. Walk through the PR description, diff view, and merge button. Mention `.gitignore` and add common entries. |
| 14 | Git recovery essentials | Show `git restore` to discard changes, `git restore --staged` to unstage, `git stash` / `git stash pop` to shelve work, and `git revert` to undo a commit safely. |

### Topic: Writing in Markdown (04)

| # | Demo | What to Show |
|---|------|-------------|
| 15 | Markdown syntax and preview | Create a `.md` file in VS Code. Write headings, bold/italic, bullet and numbered lists, a link, a fenced code block with syntax highlighting, and a table. Open the side-by-side preview with `Ctrl+Shift+V`. |
| 16 | Write a project README | Build a `README.md` for a fictional project: title, description, features list, installation instructions in a code block, usage section, and contributing guidelines. Preview the result. |

---

## Module V — Computational Thinking, Data Structures & Algorithms

### Topic: Core Data Structures (02)

| # | Demo | What to Show |
|---|------|-------------|
| 17 | Arrays, objects, and indexing | In the browser console or on a whiteboard, create an array, access elements by index (zero-based), and iterate with a loop. Create an object with key-value pairs, access properties, and add a new property. |
| 18 | Stacks and queues | Simulate a stack (push/pop — like browser back button) and a queue (enqueue/dequeue — like a print queue). Walk through the operations step by step using a visual list on screen. |

### Topic: Control Flow Mastery (03)

| # | Demo | What to Show |
|---|------|-------------|
| 19 | Conditionals and loops | Trace through an if/else-if/else chain with a specific input value. Change the value and show a different branch executing. Then trace a `for` loop iteration by iteration, showing the variable at each step. |

### Topic: Algorithm Basics (04)

| # | Demo | What to Show |
|---|------|-------------|
| 20 | Linear vs. binary search | Use a sorted list of 16 items. Perform linear search for an item near the end — count steps. Perform binary search for the same item — count steps. Compare results. Ask: "What if the list had 1 million items?" |

---

## Module VI — Data Management

### Topic: Practical Tools — CSVs and Spreadsheets (02)

| # | Demo | What to Show |
|---|------|-------------|
| 21 | CSV file anatomy | Open the CivicTrack `service-requests-raw.csv` (`../course-project/data/`) in a text editor to show raw comma-separated data, then the same file in a spreadsheet for the tabular view. Point out how commas map to columns and line breaks to rows — and the messy-data issues hiding in the raw export. |
| 22 | Spreadsheet formulas and data issues | Open the cleaned CivicTrack `service-requests-clean.csv` in a spreadsheet and demonstrate COUNT / COUNTIF (requests by status, category, department) and IF. Then contrast the raw export's inconsistent dates, missing values, and duplicates, and why each breaks automated processing. |

### Topic: Introduction to Databases (03)

| # | Demo | What to Show |
|---|------|-------------|
| 23 | SQL basics: SELECT, WHERE, ORDER BY | In an online SQL sandbox (SQLite Online or DB Fiddle), query the CivicTrack `requests` table. Show `SELECT *`, column selection, `WHERE` filtering (by status/priority), and `ORDER BY` sorting. |
| 24 | SQL JOIN and aggregation | Join the CivicTrack `requests`, `categories`, and `departments` tables with `INNER JOIN`. Then demonstrate `GROUP BY` with `COUNT` (open requests per department) and `HAVING` to filter groups. |
| 25 | CREATE TABLE and INSERT | Write `CREATE TABLE` statements for the CivicTrack `departments`, `categories`, and `requests` tables (valid inline `INTEGER REFERENCES` foreign keys). Insert seed rows with `INSERT INTO` and query them back — the full create/populate/query cycle. |
| 26 | Open data and APIs | Show the same CivicTrack data served over HTTP as JSON: hit a free, no-key open-data 311 endpoint in the browser and via `fetch()` in the console, mapping query params to SQL. Close by showing that behind the URL is a query, a join, and JSON — the same three pieces from this week. (Verify the live endpoint before class.) |

---

## Module VII — Programming Syntax & Logic

### Topic: JavaScript Fundamentals (02)

| # | Demo | What to Show |
|---|------|-------------|
| 27 | Browser console and variables | Open Chrome DevTools Console. Type expressions (`2 + 2`, string concatenation). Declare variables with `let` and `const`. Show data types with `typeof`. Demonstrate template literals with backticks. |
| 28 | Conditionals, loops, and functions | Write an `if/else` that evaluates a grade. Write a `for` loop over an array and a `for...of` loop. Write a function declaration and an arrow function that do the same thing. Run each live. |
| 29 | Arrays and array methods | Create an array. Show `push`, `pop`, `length`. Demonstrate `map`, `filter`, and `forEach` with arrow functions. Show method chaining (`array.filter(...).map(...)`). |
| 30 | Objects and destructuring | Create an object literal with properties and a method. Access with dot notation and bracket notation. Demonstrate destructuring: `const { name, age } = person`. |

### Topic: Hands-On Practice in VS Code (03)

| # | Demo | What to Show |
|---|------|-------------|
| 31 | Create and run JS in VS Code and the browser | Create `app.js`, write `console.log()` statements, and run with `node app.js` in the terminal. Then create `index.html` with a `<script>` tag, add a button with an event listener, and launch with Live Server. |
| 32 | VS Code debugger | Set a breakpoint in a `.js` file. Launch the debugger. Show execution pausing, the Variables panel, Step Over/Into, and watching an expression. Then deliberately trigger a `TypeError` and a `ReferenceError` — read and interpret the error output. |
| 33 | Prettier and ESLint in action | Write messy, poorly formatted code. Save and show Prettier auto-format. Introduce a linting issue (unused variable, missing semicolon) and show ESLint highlighting it. |

### Topic: Modern Web Development Overview (04)

| # | Demo | What to Show |
|---|------|-------------|
| 34 | HTML + CSS + JS working together | Build a small page with HTML structure, CSS styling, and a JavaScript button that changes content on click. Show how the three languages each handle structure, presentation, and behavior. Use the Network tab to show HTTP requests when the page loads. Show a JSON object in the console with `JSON.parse()` and `JSON.stringify()`. |

### Topic: Introduction to Java (05)

| # | Demo | What to Show |
|---|------|-------------|
| 35 | Java compile-and-run cycle | Write `HelloWorld.java` with `public static void main`. Compile with `javac`. Show the `.class` file. Run with `java`. Declare typed variables (`int`, `String`). Assign the wrong type and show the compilation error. |
| 36 | Java classes and JavaScript comparison | Create a simple `Product` class with fields, a constructor, and a getter. Instantiate in `main`. Then show the same program in JavaScript side by side. Point out type declarations, `System.out.println` vs `console.log`, and the `main` method requirement. |

---

## Module VIII — Building for the Future

| # | Demo | What to Show |
|---|------|-------------|
| 37 | Reading an unfamiliar codebase | Open a small open-source project on GitHub. Walk through the file structure, find the entry point, read the README, and trace one feature from UI to data. Model how developers orient themselves in new code. |
| 38 | AI coding assistant | Show a brief interaction with an AI coding tool (Copilot, ChatGPT, or similar). Give it a prompt, review the output, identify what it got right and wrong, and edit the result. Emphasize that AI assists but doesn't replace understanding. |

---

## Summary

| Module | Topic Area | Demos | Est. Time |
|--------|-----------|-------|-----------|
| III | Command line, VS Code, research | 8 | 1 hr 50 min |
| IV | Git, Markdown | 8 | 2 hrs 3 min |
| V | Data structures, control flow, algorithms | 4 | 1 hr |
| VI | CSV, spreadsheets, SQL, APIs | 6 | 1 hr 30 min |
| VII | JavaScript, debugging, web dev, Java | 10 | 2 hrs 39 min |
| VIII | Code reading, AI tools | 2 | 30 min |
| **Total** | | **38** | **9 hrs 32 min** |

---

## Suggested Daily Schedule

| Day | Modules | Lectures | Demos | Activities |
|-----|---------|----------|-------|------------|
| 1 | I, II | Intro, Productivity, Well-Being | — | 1–5 |
| 2 | III | Dev Environments, Windows, VS Code, Research | 1–8 | 6–7 |
| 3 | IV | SDLC, Git, Markdown, Collaboration | 9–16 | 8–10 |
| 4 | V, VI | Computational Thinking, Data Management | 17–26 | 11–15 |
| 5 | VII, VIII | Syntax & Logic, Building for the Future | 27–38 | 16–20 |
