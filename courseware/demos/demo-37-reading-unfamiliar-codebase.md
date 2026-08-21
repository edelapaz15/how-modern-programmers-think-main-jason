# Demo 37: Reading an Unfamiliar Codebase

**Module:** VIII
**Topic:** Bridging Theory to Practice
**Estimated Time:** 15 minutes
**Related reading:** [Bridging Theory to Practice](../docs/Module-08-Building-for-the-Future/01-bridging-theory-to-practice.md)

## Objective

Students will learn how to orient themselves in a new, unfamiliar codebase by examining file structure, locating the entry point, reading documentation, and tracing a feature from the user interface through to the data layer. This demo models the developer's mindset when approaching code you didn't write.

## Setup/Prerequisites

- A web browser open
- GitHub accessible
- A text editor (VS Code) ready to view code
- Familiarity with basic file structures and basic HTML/JavaScript

**Recommended Project:** https://github.com/tastejs/todomvc/tree/master/examples/javascript-es5 — TodoMVC written in plain ES5 JavaScript: an `index.html` at the root, plain `<script>` tags, and no compiler or bundler.

> **Instructor note — use `javascript-es5`, not `javascript-es6`.** The sibling `javascript-es6` example is a **webpack** build with no `index.html` at its root, so the "no build step, open the HTML file" framing below does not fit it. This demo is written against `javascript-es5` and every file path, code excerpt, and talking point matches that example as it stands today.
>
> **Re-check the repo before you teach.** This is live open-source code and it can change. Open the example and confirm the file tree in Part 2 and the excerpts in Parts 3–4 still match. If they've drifted, the *method* is the lesson — narrate what you actually see and let the room watch you orient in real time. That is the demo.

---

## Step-by-Step Script

### Part 1: The First Instinct—Read the README (2 minutes)

**Talking Point:** "When you land on a project you've never seen before, your first instinct should be to read the README. It's like the instruction manual. Someone took the time to tell you what this project does and how to get it running. That's a gift—use it."

Open the browser and navigate to the project on GitHub. Show the top of the repository page.

**Talking Point:** "Look what we see here: a title, a description, and right below it, a file called README.md. Every good open-source project starts with this. It answers: 'What is this?' 'How do I use it?' and 'How do I contribute?'"

Scroll down and read aloud the key sections of the README:
- **What the project does:** *"This application uses JavaScript with ES5 language features to implement a todo application."*
- **Implementation Details:** *"This implementation uses an explicit MVC pattern, with a clear file structure to reflect the architecture. The storage solution uses an in-memory data object that implements a simple array to hold the todos."*
- **Local Preview:** `npm install`, then `npm run dev`, then open `http://localhost:7001/`.

**Talking Point:** "Look how much we just learned without opening a single line of code. It's a to-do app. It's plain JavaScript—no framework. It uses something called MVC, and the file structure reflects that. And notice this line: 'the storage solution uses an in-memory data object.' Hold onto that. We're going to come back to it in a few minutes and check whether the code actually does what the README says."

**Talking Point:** "That last move is the habit I want you to steal today: the README is a claim, not a guarantee. It's written by a human, and humans forget to update docs. So we read it for context, then we verify it against the code. Trust, then check."

---

### Part 2: Scan the File Structure (2 minutes)

**Talking Point:** "Next, we look at the file structure. How are the files organized? This tells us a lot about how the developer thinks and where to find things."

Show the file tree of the project. Point out:

```
├── README.md
├── index.html          <-- the entry point
├── package.json
├── src/                <-- the source we care about
│   ├── app.js
│   ├── controller.js
│   ├── helpers.js
│   ├── model.js
│   ├── store.js
│   ├── template.js
│   └── view.js
├── dist/               <-- a built copy; ignore it
└── scripts/
    └── build.js
```

**Talking Point:** "There's an `index.html` at the root. For a web app that's almost always the entry point—that's where we start."

**Talking Point:** "Then there's a `src/` folder. `src` is short for 'source,' and it's one of the most common folder names in all of software. When you see `src/`, that's the human-written code—the stuff that matters. Learn that one convention and you can find your footing in thousands of projects."

**Talking Point:** "Now look at the *names* inside `src/`: `model.js`, `view.js`, `controller.js`. Remember what the README said? 'An explicit MVC pattern, with a clear file structure to reflect the architecture.' Model, View, Controller. The README told us the architecture, and the filenames confirm it. The docs and the code agree—that's a good sign about this project."

**Talking Point:** "And notice `dist/`. That's short for 'distribution'—a *generated* copy, built by that `scripts/build.js`. You don't edit `dist/`; a script overwrites it. Whenever you see `dist/` or `build/`, that's output, not input. Ignore it and stay in `src/`."

> **Instructor note:** knowing which folders are *generated* is a genuinely useful beginner skill and it pays off immediately — it's the same reason this course's own `slides/pdf/` folder is never hand-edited. Feel free to make that connection out loud.

---

### Part 3: Find and Open the Entry Point (2 minutes)

**Talking Point:** "Let's open the entry point. For a web app, that's usually `index.html`. Let's see what it looks like."

Click on `index.html` or open it in the editor view. Show the full file.

```html
<!DOCTYPE html>
<html lang="en" data-framework="javascript-es5">
    <head>
        <title>TodoMVC: JavaScript Es5</title>
        <link rel="stylesheet" href="node_modules/todomvc-common/base.css" />
        <link rel="stylesheet" href="node_modules/todomvc-app-css/index.css" />
    </head>
    <body>
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input class="new-todo" placeholder="What needs to be done?" autofocus>
            </header>
            <!-- more markup here -->
        </section>

        <script src="node_modules/todomvc-common/base.js"></script>
        <script src="src/helpers.js"></script>
        <script src="src/store.js"></script>
        <script src="src/model.js"></script>
        <script src="src/template.js"></script>
        <script src="src/view.js"></script>
        <script src="src/controller.js"></script>
        <script src="src/app.js"></script>
    </body>
</html>
```

**Talking Point:** "Here's the entry point, and it's a plain HTML file—no compiler, no bundler. Look at the bottom: seven `<script>` tags, loading our `src/` files one at a time, in order. That's it. That's the whole 'build.' This is about as simple as a web app gets."

**Talking Point:** "The *order* is a clue. `helpers.js` and `store.js` load first; `app.js` loads last. Why? Because `app.js` is the one that uses all the others, so everything it depends on has to exist first. You're reading the dependency order right off the page."

**Talking Point:** "Up in the `<header>`, find `<input class=\"new-todo\">`. That's the box you type a to-do into. Remember that class name—`new-todo`. We're about to go find it in the JavaScript. That's our thread, and we're going to pull it."

> **Instructor note:** the stylesheets point at `node_modules/`, so the page only *renders* properly after `npm install`. That doesn't matter here — this demo reads code on GitHub rather than running the app. If you do want it running live, do `npm install && npm run dev` before class, not during it.

---

### Part 4: Trace a Feature from UI to Data (6 minutes)

**Talking Point:** "Let's trace what happens when a user types a to-do and hits Enter. We'll follow the code from the HTML input, through the JavaScript logic, and down to where the data is stored. This is how you understand any codebase: you pick one feature and follow the trail."

#### Step 4a: Start at app.js — the wiring

Open `src/app.js`. It's short. That's a clue in itself.

```javascript
function Todo(name) {
    this.storage = new app.Store(name);
    this.model = new app.Model(this.storage);
    this.template = new app.Template();
    this.view = new app.View(this.template);
    this.controller = new app.Controller(this.model, this.view);
}

var todo = new Todo("javascript-es5");
```

**Talking Point:** "This is not where the work happens—this is the wiring. It builds five objects and hands each one to the next. Store goes into Model, Template goes into View, and Model plus View go into Controller. It's an assembly line."

**Talking Point:** "This is really common in real code, and it surprises beginners: the file named `app.js` often doesn't *do* anything. It just connects the pieces. If you came here looking for the to-do logic, you'd feel lost—and you'd be tempted to conclude you're not smart enough to read this. No. You're just in the wrong file. The names tell you where to go next."

#### Step 4b: Follow the thread — view.js and controller.js

**Talking Point:** "Our thread was the class name `new-todo`. Let's search the project for it. In VS Code that's `Ctrl+Shift+F`—search across all files. On GitHub, press `t` to search files, or use the search box. This one shortcut is the single most useful tool for reading unfamiliar code."

Search for `new-todo`. It surfaces `src/view.js`:

```javascript
this.$newTodo = qs(".new-todo");
```

**Talking Point:** "Found it. The View grabs that input box and stores it. So the View is the layer that touches the page. Now—who reacts when you press Enter?"

Open `src/controller.js` and show the top of the `Controller` function:

```javascript
function Controller(model, view) {
    var self = this;
    self.model = model;
    self.view = view;

    self.view.bind("newTodo", function (title) {
        self.addItem(title);
    });
```

**Talking Point:** "There's the handoff. The Controller says: 'View, when a *newTodo* happens, call my `addItem`.' The View watches the page; the Controller decides what to do. That's the C and the V in MVC, and you can see the seam between them right here."

Now show `addItem`, further down the same file:

```javascript
Controller.prototype.addItem = function (title) {
    var self = this;

    if (title.trim() === "")
        return;

    self.model.create(title, function () {
        self.view.render("clearNewTodo");
        self._filter(true);
    });
};
```

**Talking Point:** "Read it in plain English: if you typed nothing but spaces, stop—that's a guard clause. Otherwise, tell the Model to create it, and *then* clear the input box and redraw the list. Notice the Controller never touches the page directly and never touches storage directly. It coordinates. Every layer has one job."

**Talking Point:** "So our chain so far: you type → View sees it → Controller's `addItem` runs → Model creates it. One more layer to go. Where does it actually land?"

#### Step 4c: Check for persistence — store.js

**Talking Point:** "The Model hands off to the Store, so `store.js` is the last stop. This is where we find out where your to-do actually *lives*. And remember—the README made a claim about this. Let's go check it."

Open `src/store.js` and show the top:

```javascript
(function (window) {
    "use strict";

    var MemoryStorage = {};
    var ID = 1;

    function Store(name, callback) {
        callback = callback || function () {};

        this._dbName = name;

        if (!MemoryStorage[name]) {
            var data = {
                todos: [],
            };

            MemoryStorage[name] = JSON.stringify(data);
        }

        callback.call(this, JSON.parse(MemoryStorage[name]));
    }
```

**Talking Point:** "There's our answer, and it's one line: `var MemoryStorage = {};`. It's a plain JavaScript object. That's the whole database. The README said 'an in-memory data object,' and it was telling the truth—the code matches the docs."

**Talking Point:** "Now, what does 'in memory' actually *mean* for a user? It means when you refresh this page, every to-do is gone. Nothing is written to disk, nothing is saved in the browser, nothing goes to a server. Close the tab and it never existed."

**Ask the room:** *"Is that a bug?"*

**Talking Point:** "It's not. And this is the most valuable thing in this demo. TodoMVC exists to demonstrate *how you structure an app*—it's a teaching project, the same way CivicTrack is for us. Persistence isn't the point, so they faked it deliberately. Look at the comment they left in the code: 'our fake DB uses callbacks because in real life you probably would be making AJAX calls.' They're telling you, right in the source, that this is a stand-in for a real database."

**Talking Point:** "So when you read unfamiliar code and something looks *wrong*, hold that thought before you file a bug. Ask what the project is *for*. A choice that looks broken in a production app is often exactly right in a teaching one. Reading code well means reading intent, not just syntax."

**Talking Point:** "The full chain is now complete, and every link is a file we opened: `index.html` (input) → `view.js` (sees the keypress) → `controller.js` (`addItem` decides) → `model.js` (creates) → `store.js` (holds it in memory) → back to the View to redraw. Six files. One feature. That's a trace."

> **🤖 Working with AI:** This is a natural spot to mention that an AI assistant is genuinely good at this exact task — paste an unfamiliar file in and ask "what does this do?" and you'll usually get a decent orientation in seconds. But notice what you'd have missed here. An AI summarizing `store.js` will tell you it stores todos in memory. It will *not* tell you whether that's a deliberate teaching shortcut or a real defect — that judgment came from reading the README, the comments, and knowing what the project is for. **Use AI to orient faster; verify it against the code, and keep the judgment for yourself.**

---

### Part 5: Identify the Patterns You've Learned (2 minutes)

**Talking Point:** "Let's step back. What patterns did we just identify that will help us understand any codebase?"

Summarize on screen or on a whiteboard:

1. **Start with the README — then verify it.** It gave us the architecture (MVC) and the storage model (in-memory) before we read a line of code. Then we checked both against the source. Docs are a claim; code is the truth.
2. **Examine the file structure.** `src/` is human-written source; `dist/` and `build/` are generated output you never edit. Filenames like `model.js` / `view.js` / `controller.js` announce the architecture.
3. **Find the entry point.** For web apps it's usually `index.html`. For Node.js it's often `index.js`, or whatever `package.json` lists under `main`.
4. **Pick one feature and pull the thread.** We started with a class name we could see on the page (`new-todo`) and searched for it. Project-wide search (`Ctrl+Shift+F`) is how you actually navigate unfamiliar code.
5. **Expect wiring files.** `app.js` didn't contain the logic — it connected the pieces. Being in the wrong file feels exactly like being too inexperienced to understand. It isn't the same thing.
6. **Read for intent, not just syntax.** In-memory storage looked like a bug until we asked what the project was *for*.

**Talking Point:** "These patterns apply to big projects too. The first time you open a real-world codebase, you'll feel overwhelmed. But you're not reading everything. You're following one trail, like Hansel and Gretel following breadcrumbs. Once you understand one feature end-to-end, the rest of the code makes more sense."

---

## Key Points to Emphasize

- **Start with the README, not the code.** Context is your best friend when diving into unfamiliar projects — and then check what it told you against the source. That verify step is the professional habit.
- **File structure reveals design philosophy.** `src/` versus `dist/`, and names like `model`/`view`/`controller`, tell you how the developer thinks about modularity before you read any logic.
- **Tracing one feature end-to-end builds confidence.** One complete trace teaches more than scanning fifty files. Pick a string you can see on screen and search for it.
- **Feeling lost is usually structural, not personal.** Landing in a wiring file and finding no logic is the normal experience of reading real code — not evidence that you can't do this. Say this part out loud; it's the whole reason this demo is in the course.
- **Real code has more layers than tutorial code.** Six files for "add a to-do" looks like overkill until an app grows. That's the trade this pattern is making.

---

## Common Questions

**Q: What if the README is missing or unhelpful?**
A: Great question! Some projects have poor documentation. In that case, look for a `CONTRIBUTING.md` file or check the project's wiki. If that fails, look at the file structure and pick a feature to trace. You'll often understand the project better by reading the code than by reading old docs anyway.

**Q: How do I know which file to open first if there's no clear entry point?**
A: Look for `index.html`, `index.js`, `main.js`, or `app.js`. If the project has a `package.json`, check the `main` field—that tells Node.js which file to start with. If it's a Python project, look for `main.py` or `app.py`. Entry points follow conventions, and learning these conventions is half the battle.

**Q: What if I get lost tracing the code and don't understand a function?**
A: That's completely normal. Leave a comment in the code ("need to understand this part") and come back to it. Or search for how that function is used elsewhere in the codebase—sometimes seeing it in context helps. You don't have to understand everything right away. Understanding 80% is enough to be productive.

**Q: Why does adding one to-do need six files? That seems like a lot.**
A: For an app this small, it honestly is—you could write the whole thing in one file. But this project's job is to *demonstrate the pattern*, and the pattern pays off as apps grow. When a bug appears in how todos are saved, you know to open `store.js` and nowhere else. When ten developers work on one app, they can work in different layers without colliding. You're seeing the structure of a large app at the scale of a small one. That's what makes it good to read.

**Q: The README said the storage is "in-memory." How would I know that's unusual?**
A: You wouldn't yet, and that's fine. What you *can* do is exactly what we did: notice the claim, go find the code, and confirm they agree. As you see more projects you'll build a sense for what's typical—real apps usually talk to a database or an API here. Curiosity plus verification gets you there faster than memorizing rules.

**Q: Is it cheating to use an AI assistant to explain a codebase to me?**
A: No—it's a legitimate and fast way to orient. But treat its answer the way we treated the README: as a claim to verify, not a fact. Ask it what a file does, then open the file and confirm. The risk isn't that AI explains code to you; it's that you stop checking, and then can't tell when it's confidently wrong.
