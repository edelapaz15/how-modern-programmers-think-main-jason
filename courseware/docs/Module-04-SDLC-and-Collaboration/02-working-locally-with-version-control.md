# Topic 2: Working Locally with Version Control

## The Problem Version Control Solves

Before diving into version control systems, let's understand why they're essential by acknowledging a universal experience: the "final_v2_FINAL_real.docx" problem.

If you've ever worked on a document with others — a proposal, a report, a spreadsheet — you know what happens:

1. You start with `report.docx`
2. You make changes and save it as `report_v2.docx`
3. A colleague sends you `report_v2_edits.docx` with conflicting changes
4. You merge them into `report_v3_FINAL.docx`
5. The boss suggests changes, resulting in `report_v3_FINAL_revised.docx`
6. You need to track which version has which changes
7. You want to recover a sentence that was deleted three versions ago
8. Someone accidentally overwrites the wrong version

Software development faces the same problem, but magnified. A typical software project involves:

- Thousands of files (not one document)
- Hundreds of changes per day (not monthly edits)
- Multiple developers working simultaneously (not back-and-forth edits)
- Need to revert entire features without losing other work
- Need to track who made what change and why
- Need to maintain multiple versions (production, staging, development)
- Need to work offline and sync when reconnected

The "save as" approach of word processors completely breaks down. You need something more powerful.

**Version control systems** solve this by:

- **Tracking every change:** Who changed what, when, and why
- **Enabling safe branching:** Multiple developers can work independently without stepping on each other
- **Providing history:** You can see the entire evolution of a file or the entire project
- **Enabling recovery:** You can revert to any previous state if something goes wrong
- **Facilitating merging:** Combining work from multiple developers without losing changes
- **Distributing responsibility:** Multiple copies can exist in sync (distributed version control)

Once you've used version control, going back to "save as" feels medieval. It's not an advanced tool for experts — it's a fundamental enabler of professional software development.

## What Is Version Control? Snapshots, History, and Branches

At its core, version control answers the question: "How do I keep track of all the versions of my code?"

### The Snapshot Model

Traditional version control (and modern systems like Git) work on the **snapshot model**. Imagine you're taking a photograph of your entire project at a specific moment in time. This photograph captures the state of every file. If you take another photograph later, and then later still, you build up a history of snapshots.

Each snapshot is called a **commit**. A commit includes:

- The state of all files in your project at that moment
- Metadata: who made the commit, when, and a message describing the change
- A reference to the previous commit (building a chain of history)

This is different from some older systems that tracked *changes* (diffs) rather than complete snapshots. Snapshots are conceptually cleaner and enable powerful features.

### Repositories

A **repository** (or "repo") is a collection of snapshots and the metadata that ties them together. It's stored in a special directory (usually called `.git` in Git) that tracks all the history.

Importantly, the repository lives *with your code*. It's not a separate server (though it can also be synced to a server). This enables working offline.

### Branches

A **branch** is an independent line of development. Every repository starts with a single **default branch**, created for you automatically, and you can create new branches that diverge from it.

The default branch's name is a *convention*, not a rule. Git originally named it `master`, and that name is still widely used. Many platforms (like GitHub and GitLab) and recent versions of Git now default to `main` instead, and a team is free to pick whatever name fits its workflow. Don't let the different names confuse you — they all refer to the same idea: the primary line your project builds on. **This course uses `master`**, the name your lab machines create by default, so the examples below use it.

For example:

- You're on the `master` branch with code you know works
- You create a new branch called `feature/new-login` to build a new login system
- You make commits on `feature/new-login` without affecting `master`
- Meanwhile, a colleague creates `feature/password-reset` from `master`
- Both of you commit independently
- When you're done, you **merge** your branch back into `master`

Branches are one of version control's killer features. They enable:

- Multiple developers working on different features simultaneously
- Isolation: a developer can experiment in a branch without breaking the shared `master` branch
- Easy recovery: if you mess up a branch, you just abandon it — `master` is untouched
- Feature-based organization: understanding what each branch is for at a glance

### Merging

Merging is combining work from two branches. Git is usually quite smart about this:

- If you modified a function and a colleague modified a different function, Git combines your changes automatically
- If you both modified the same lines, Git can't automatically decide — it flags this as a **conflict** that requires human judgment

## Centralized vs. Distributed Version Control

There are two main architectures for version control: centralized and distributed.

### Centralized Model

In a centralized system (like Subversion or CVS), there's a single server that holds the complete history. Developers check out code from the server, make changes locally, and commit back to the server.

**Advantages:**
- Simple to understand: one source of truth
- Easy to manage permissions (control who can see what)
- Natural for teams in one location

**Disadvantages:**
- Can't work offline (no history on your local machine)
- Server is a bottleneck
- Slow for distributed teams
- Hard to experiment safely — branches exist on the server

### Distributed Model

In a distributed system (like Git, Mercurial, or Bazaar), every developer has a complete copy of the repository, including all history. Developers can commit locally and syncing happens separately.

**Advantages:**
- Works offline — full history is local
- Fast — operations don't require server roundtrips
- Safe experimentation — branches are cheap and local
- Enables multiple workflows (not forced to use one central server)
- Better for distributed teams (no server latency)

**Disadvantages:**
- Slightly more conceptual complexity
- Requires discipline to keep things organized (anyone can change anything)

Distributed systems are now dominant in modern software development. Git, which is distributed, has effectively won the market for version control.

## Git: Why It Won and Became the Industry Standard

Git emerged in 2005, created by Linus Torvalds (who also created Linux) to manage the Linux kernel. The kernel is developed by thousands of developers across the world, which meant that earlier version control systems simply didn't scale.

### Why Git Succeeded

**Speed:** Git is *fast*, even on large projects. Most operations are local (no server roundtrips), and Git is highly optimized.

**Distributed nature:** Each developer has the full history. This is essential for large, geographically distributed projects. It's also great for small teams.

**Branching model:** Git branches are lightweight and cheap. Creating a branch is nearly free, which enables a different development workflow entirely.

**Staging area:** Git introduced the concept of a "staging area" — a place where you prepare changes before committing. This might seem minor, but it's powerful for controlling exactly what you commit.

**Flexible workflows:** Git doesn't enforce a single workflow. You can use centralized workflows (one shared server), distributed workflows (peer-to-peer), or hybrid approaches.

**Open source and community:** Git became the de facto standard for open source development, which bred familiarity and adoption.

**GitHub (2008):** GitHub emerged as a hosting platform for Git repositories and made it trivially easy to share code. This was transformative. Git + GitHub + free hosting created an ecosystem that other systems couldn't match.

Today, Git is used by the vast majority of professional software teams. You'll encounter it everywhere — GitHub, GitLab, Bitbucket, and private servers all run Git. Learning Git is essentially mandatory for modern programming.

## Core Git Concepts: Repository, Commit, Branch, Merge, Staging Area

Let's establish clear definitions of Git's central concepts:

### Repository (Repo)

A repository is a Git project. It's stored in a directory (usually the root of your project) in a subdirectory called `.git`. This `.git` directory contains all the history and metadata. The rest of the directory (your actual code files) is called the **working directory**.

When someone says "clone the repository," they mean "copy the entire project including all history from a remote server to your local machine."

### Commit

A commit is a snapshot of your entire project at a specific moment. It includes:

- The state of every file
- A unique identifier (a hash like `a1b2c3d`)
- Metadata: author, timestamp, commit message
- A reference to the parent commit (building a chain)

A good commit message is essential. It explains *why* a change was made, not just what was changed. For example:

- Bad: `Fixed bug`
- Good: `Fixed off-by-one error in pagination that showed one extra page`

Commits are the unit of history in Git. You can understand what happened by reading commit messages. You can revert to any previous commit.

### Working Directory, Staging Area, and Repository

This is the core Git workflow, and it's important to understand:

![Git's three areas side by side: the working directory where you edit files, the staging area holding what you have chosen for the next commit, and the repository holding committed history. git add moves changes right into staging, git commit moves them into the repository, and git restore brings a committed version back.](../../diagrams/png/git-three-areas.png)

*A change moves left to right, and nothing skips a step. Until you add and commit, Git is not protecting your work.*

1. **Working directory:** The files on your computer that you edit
2. **Staging area:** A holding area for changes you're preparing to commit
3. **Repository:** The stored history of commits

The flow is:

- You edit files (working directory changes)
- You stage the changes you want to commit (`git add`)
- You commit the staged changes (`git commit`)
- Your commit is now in the repository (history)

Why have a staging area? Because you might have five modified files, but you only want to commit three of them right now. The staging area lets you choose exactly what goes into each commit. This is powerful for keeping commits focused and logical.

### Branch

A branch is an independent line of development. At its core, a branch is just a name that points to a specific commit.

When you create a branch called `feature/login`:

- Git creates a pointer to your current commit
- You can make new commits on this branch
- These commits build on top of the commit you were on
- Meanwhile, the `master` branch hasn't moved
- Your `feature/login` branch and the `master` branch have independent histories

Branches let you organize work. You might have:

- `master` — the production-ready code
- `develop` — the latest development version (bleeding edge)
- `feature/user-profiles` — a developer building user profiles
- `feature/password-reset` — another developer building password reset
- `bugfix/login-error` — someone fixing a specific bug

This organization is tremendously valuable. You can see at a glance what work is in progress.

### Merge

Merging combines work from two branches. Git's merge algorithm is smart:

1. Find the **common ancestor** — the commit where the two branches diverged
2. Identify changes in each branch since the divergence
3. Combine the changes

If the branches modified different files or different parts of files, this usually works automatically. If both branches modified the same lines, Git can't decide, and you have a **merge conflict** that requires human judgment.

## The Git Workflow: Working Directory → Staging → Commit

Let's trace a typical Git workflow to cement these concepts:

### Starting State

You have a Git repository on your machine. You're on the `master` branch. The last commit is:

```
Commit a1b2c3d: Initial setup
```

The working directory matches this commit exactly.

### Make Changes

You edit a file called `users.js` to add a new function. You also edit `tests.js` to add tests for that function. The working directory now has changes:

- `users.js`: modified (new function)
- `tests.js`: modified (new tests)
- Everything else: unchanged

But the repository still points to commit `a1b2c3d`. The changes exist only in your working directory.

### Stage Changes

You're happy with your changes. You run:

```
git add users.js tests.js
```

This stages both files. The staging area now contains:

- `users.js` with your new function
- `tests.js` with your new tests

The repository still points to commit `a1b2c3d`. If you accidentally deleted other files from your working directory, they wouldn't be affected — they're not staged.

(Alternatively, you could do `git add .` to stage all changes, or stage files selectively.)

### Create a Commit

You're satisfied with the staged changes. You run:

```
git commit -m "Add user creation function"
```

Git creates a new snapshot that includes:

- All the files from the previous commit
- Plus your changes to `users.js` and `tests.js`
- With the message "Add user creation function"

This new commit gets a unique identifier (let's say `d4e5f6a`). It has a parent pointer to `a1b2c3d`, building a chain of history.

The repository now points to commit `d4e5f6a`. All three areas now agree: your working directory, the staging area, and the latest commit hold the same content, so `git status` reports nothing to commit. (The staging area isn't *emptied* — it's never empty. It always holds a full picture of the project; right now that picture just matches the commit you made.)

### Repeat

You make another change, stage it, and commit it. Now you have:

```
a1b2c3d -> d4e5f6a -> b7c8d9e -> ...
```

Each arrow represents a commit. This is your project's history.

## Understanding Commits: Snapshots, Not Diffs (Conceptually)

This is worth emphasizing because it's conceptually important and sometimes confusing.

Some older version control systems stored **diffs** — records of what changed from one version to another. If you had versions 1 and 2, the system stored version 1 complete and version 2 as "change this line, delete that line, add this section."

Git stores **snapshots**. Each commit contains the complete state of every file. This might seem wasteful, but:

1. **Compression:** Git is smart about compression. If a file hasn't changed, it doesn't store it again — it references the previous version internally.
2. **Speed:** Checking out a commit is fast because you have the complete snapshot.
3. **Conceptual clarity:** Understanding what a commit contains is straightforward.

When you `git log` and see the history, you're seeing a series of snapshots, not a series of diffs.

## Branching Strategies: Why Branches Matter and Feature Branches

Branches are powerful, but they only work well if you have a strategy for using them. Different teams use different strategies:

### Git Flow

Git Flow is a branching strategy popular in larger teams and projects with scheduled releases.

**Key branches:**

- `master` — Always production-ready. Every commit is a release.
- `develop` — The integration branch. Features are merged here.
- Feature branches like `feature/user-profiles` — Individual features branch from `develop`, merge back when done.
- Release branches like `release/1.2.0` — Created when preparing a release, for final tweaks.
- Hotfix branches like `hotfix/critical-security-fix` — Branch from `master` for emergency fixes to production.

Git Flow enforces discipline and is great for managing releases, but it's more complex than simpler strategies.

### GitHub Flow

GitHub Flow is a simpler strategy popular in smaller teams and projects with continuous deployment.

**Key branches:**

- `master` — Always production-ready (or very close). Deploy from here.
- Feature branches like `feature/user-profiles` — Create a branch, make changes, submit a pull request, get reviewed, merge.

That's it. Everything is a feature branch. This is simpler but requires confidence in your testing and deployment process (so you can push frequently).

### Trunk-Based Development

The most extreme: most developers work on `master`. Feature flags (code that enables/disables features) are used to hide incomplete features.

This requires:
- Strong automated testing
- Confident developers
- Frequent deploys

But it eliminates merge complexity and enables very rapid iteration.

### Feature Branches (General Concept)

All these strategies use **feature branches** — branches created to develop a specific feature. The feature branch:

- Starts from a stable point (usually `master` or `develop`)
- Contains work in progress for a single feature
- Is merged back when complete
- Is deleted after merging (it's served its purpose)

Feature branches solve several problems:

1. **Isolation:** A developer can work independently without breaking the master branch
2. **Easy review:** When done, the feature is reviewed (in a pull request) before merging
3. **Easy recovery:** If the feature is abandoned, the branch is just deleted — no trace
4. **Clear organization:** Looking at active branches tells you what features are in progress

## Merging and Conflict Resolution (Conceptual Overview)

Merging is combining work from two branches. Let's understand how it works:

### The Three-Way Merge

When merging a feature branch into master, Git performs a three-way merge:

1. **Find the merge base:** The commit where the two branches diverged
2. **Compare branch A changes:** What changed from the merge base to the feature branch?
3. **Compare branch B changes:** What changed from the merge base to master?
4. **Combine:** If changes don't overlap, Git combines them automatically

Example:

```
Merge base (commit A):
  file.js:
    line 1: x = 1
    line 2: y = 2
    line 3: z = 3

Feature branch (commit B) modified line 1:
  file.js:
    line 1: x = 10  <-- CHANGED
    line 2: y = 2
    line 3: z = 3

Master branch (commit C) modified line 3:
  file.js:
    line 1: x = 1
    line 2: y = 2
    line 3: z = 30  <-- CHANGED

Merge result:
  file.js:
    line 1: x = 10  <-- from feature branch
    line 2: y = 2
    line 3: z = 30  <-- from master branch
```

Git automatically combines non-conflicting changes—an **automatic merge** that produces a merge commit. (When the target branch hasn't moved at all, Git can take a simpler shortcut called a **fast-forward**: it just slides the branch pointer forward, with no merge commit.)

### Merge Conflicts

Conflicts occur when both branches modified the same lines. Git can't automatically decide which change to keep. For example:

```
Merge base:
  passwordValidator.js, line 5: MIN_LENGTH = 6

Feature branch changes:
  passwordValidator.js, line 5: MIN_LENGTH = 10

Master branch changes:
  passwordValidator.js, line 5: MIN_LENGTH = 8

Conflict: Which value is correct? 10, or 8?
```

When a conflict occurs, Git marks the conflicted lines and waits for human judgment:

```
<<<<<<< HEAD
MIN_LENGTH = 8
=======
MIN_LENGTH = 10
>>>>>>> feature-branch
```

A developer must resolve this: pick one value, merge them into a new value, or keep both with logic. Once resolved and staged, the merge completes.

**In practice:** Good developers minimize conflicts by:

- Keeping branches short-lived (few days, not weeks)
- Communicating about what they're working on
- Avoiding two people modifying the same files simultaneously
- Merging frequently into master to avoid divergence

Conflicts are rare in healthy teams, and when they occur, they're usually quick to resolve.

## The .gitignore File: What Not to Track

Not everything in your project directory should be version-controlled. Some files are:

- Generated during the build process (compiled code, dependencies installed locally)
- User-specific settings (IDE configuration, personal notes)
- Sensitive data (passwords, API keys, credentials)
- Temporary files (cache, logs, swap files)
- Large files that aren't code (videos, datasets, archived binaries)

The `.gitignore` file tells Git to ignore certain file patterns. For example:

```
# Dependencies — downloaded fresh with "npm install", never committed
node_modules/

# Environment variables with secrets (API keys, passwords)
.env
.env.local

# Build output — generated from the source, so it doesn't belong in history
dist/
build/

# Editor settings — personal preference, not project configuration
.vscode/
.idea/

# Operating system clutter
Thumbs.db
.DS_Store

# Logs
*.log
```

Each of those lines is there for a reason, and the reasons fall into four groups:

- **`node_modules/` — regenerable.** It can hold tens of thousands of files, and any teammate can
  recreate it exactly by running `npm install`. Committing it would bloat the repository for no gain.
- **`.env` — secret.** Anything committed to Git is in the history essentially forever, and if the
  repository is ever made public, so is the key.
- **`dist/`, `build/` — generated.** These are outputs of your source, not source. Committing them
  guarantees they'll drift out of sync with the code that produced them.
- **`.vscode/`, `Thumbs.db`, `*.log` — noise.** Yours, not the project's, and nobody wants them
  showing up as changes in a code review.

When you run `git status`, Git won't report these ignored files. When you run `git add .`, it won't stage them. They're invisible to Git.

**Important:** `.gitignore` prevents files from being added in the future, but it doesn't remove files already committed. If you accidentally committed a file with sensitive data, you need to remove it from history (a more advanced operation).

Different projects have different `.gitignore` files. Many repositories on GitHub include them, and there are standard templates for different languages and frameworks.

## Bridge from Business: Version Control in Other Contexts

You may have experience with version control concepts in non-software contexts:

### Document Management Systems

Corporate document management systems (like SharePoint, Confluence, or document repositories) are trying to solve similar problems:

- **Track versions:** Saves of a document are versions
- **Track history:** See who changed what and when
- **Enable review:** Documents go through approval workflows

The main differences from Git:

- **Intent:** Document systems are usually designed for business documents, not code
- **Merging:** They don't handle simultaneous edits well (one person locks the file)
- **Branching:** Traditional systems don't have branching; Git's branching is a major advantage

If you've worked with SharePoint versioning or Google Docs' version history, the concepts are similar — Git is just optimized for code.

### Track Changes in Word

Microsoft Word's "Track Changes" feature is version control for documents:

- You enable tracking
- Every edit is marked and attributed to the editor
- You can accept or reject individual changes
- You can see the complete change history

Git is similar in spirit: every change is tracked and attributed. The main difference is that Git operates at the project level (entire codebase) while Track Changes operates at the document level.

### Architectural and Engineering Drawings

In architecture and engineering, versioning is critical:

- A building blueprint might be "Revision A," "Revision B," etc.
- Each revision is carefully dated and logged
- If a change is made, the previous revision is preserved
- Builders need to work from the correct revision

Git serves the same purpose for code: tracked versions, clear revision history, ability to reference previous versions.

---

## Key Takeaways

- Version control systems solve the "final_v2_FINAL.docx" problem by tracking every change, enabling safe branching and experimentation, and providing complete history.
- The **snapshot model** stores complete project states at each commit, building a chain of history.
- **Repositories** contain all the code and history. In distributed systems like Git, each developer has a complete copy.
- **Branches** enable independent lines of development, allowing multiple developers to work simultaneously without interfering.
- **Merging** combines work from different branches. Git is usually smart enough to combine non-conflicting changes automatically.
- The **staging area** lets you prepare exactly what you want to commit before creating a commit.
- Git's combination of speed, distributed nature, and powerful branching made it the industry standard.
- **Feature branches** are a common pattern: create a branch for a feature, work independently, merge when complete.
- **Merge conflicts** occur when both branches modify the same lines. They're resolved by human judgment.
- `.gitignore` prevents certain files from being tracked (generated files, secrets, dependencies).

---

## Review and Discussion Questions

1. **Before learning Git, how did you manage versions of documents or projects?** What problems did you encounter?

2. **The staging area is described as a holding area.** Why do you think this feature is useful? Can you think of a scenario where staging some changes but not others matters?

3. **Branching is called a "killer feature" of Git.** Based on the description, why do you think this is so powerful for teams?

4. **Merge conflicts are described as rare in healthy teams.** What team practices do you think lead to fewer conflicts?

5. **`.gitignore` prevents files from being tracked.** What files do you think your own projects would need to ignore? Why shouldn't those be version-controlled?

6. **Distributed version control means everyone has the complete history locally.** What advantages does this offer compared to a centralized server?

7. **How does the workflow of version control (editing → staging → committing) differ from how you typically save documents?**
