# Activity 08: Your First Git Repository

**Module:** IV (SDLC and Collaboration)
**Related reading:** [Hands-On with Git](../docs/Module-04-SDLC-and-Collaboration/03-hands-on-with-git.md)

---

## Objective

By the end of this activity, you will understand Git's fundamental workflow: creating a repository, making commits, creating branches, merging changes, and viewing history. You'll have created your first real Git project with a meaningful commit history that demonstrates your understanding of version control.

---

## Background

Git is the version control system that enables modern software development. It solves a fundamental problem: how do you track changes to code, collaborate with teammates, and safely experiment with new ideas without losing previous work?

![Git's three areas: working directory, staging area and repository, connected by git add and git commit.](../diagrams/png/git-three-areas.png)

*Keep this beside you as you work. After every command, ask yourself which box just changed.*

Think of Git like a detailed diary of your project. Every meaningful change is recorded with a message explaining *why* the change was made. You can go back in time, see who changed what and why, and merge multiple people's work together.

In this activity, you'll build a Git workflow from scratch. While the commands might look intimidating, each one is simple and logical. We'll walk through the reasoning behind each step—this is far more valuable than just copying commands.

---

## Part 1: Initialize Your Repository

### Step 1: Create a Project Folder
Open your terminal and navigate to a place where you keep projects. Create a new folder:

```bash
mkdir my-first-project
cd my-first-project
```

### Step 2: Initialize Git
Tell Git to start tracking this folder:

```bash
git init -b master
```

**What happened:** Git created a hidden `.git` folder inside your project. This folder stores all your history, branches, and metadata. Never edit this folder directly—Git manages it for you.

The `-b master` part names your first branch `master`. Without it, different Git installations choose different default names (`master` on some, `main` on others), and the rest of this activity assumes `master`. Naming it explicitly keeps everyone's screen matching.

### Step 3: Verify Git Is Active
Check the status of your repository:

```bash
git status
```

You should see output saying "On branch master" and "No commits yet". This confirms Git is active.

---

## Part 2: Create Your First Commit

### Step 4: Create a README File
Create a README file (this is the first file people see when they look at your project):

```powershell
New-Item -ItemType File README.md
```

(On Mac or Linux, the equivalent is `touch README.md`.)

Open the file in your editor and add this content:

```markdown
# My First Project

This is my first Git project! I'm learning version control.

## What's Inside
- A simple project structure
- A demonstration of commits and branches
- A realistic workflow

## Author
[Your Name]

## License
MIT
```

Save the file.

### Step 5: Check Git Status Again
```bash
git status
```

You'll see that `README.md` is listed as "Untracked"—Git sees it, but you haven't told Git to start tracking it yet.

### Step 6: Stage Your Changes
Staging is like saying "I want these changes included in my next commit." Think of it as gathering items before taking a snapshot:

```bash
git add README.md
```

Run `git status` again. Now `README.md` appears under "Changes to be committed" in green. It's staged.

### Step 7: Make Your First Commit
A commit is a snapshot of your project at a moment in time, with a message explaining what changed and why:

```bash
git commit -m "Initial commit: Add README with project description"
```

**What happened:** Git created your first snapshot with the message you provided. The `-m` flag means you're providing the message inline (instead of opening an editor).

### Step 8: Verify the Commit
```bash
git log --oneline
```

You should see one line showing your commit. This is your project history. You can always come back to this moment in time.

---

## Part 3: Create a Branch and Merge

Branches are how developers experiment safely. Instead of risking changes on `master` (your stable codebase), you create a branch, try your ideas, and only merge them back when you're confident.

### Step 9: Create a New Branch
Create a branch called `add-bio`:

```bash
git branch add-bio
```

This creates a branch, but you're still on `master`. To move to your new branch:

```bash
git checkout add-bio
```

(Newer Git versions allow: `git switch add-bio`)

### Step 10: Verify Your Location
```bash
git status
```

You should see "On branch add-bio". You're now in a parallel version of your project.

### Step 11: Create a New File
Create a file called `BIO.md`:

```powershell
New-Item -ItemType File BIO.md
```

Open it and add your biographical information:

```markdown
# About Me

**Name:** [Your Name]

**Background:** I'm transitioning into programming from [previous career].

**Why Programming:** [A sentence or two about why you're learning to code.]

**Current Skills:** Command line, VS Code, Git basics

**Learning Goals:**
- Get comfortable writing real code
- Build a working web application
- [Add a goal of your own]

**Interests:** [List 2-3 programming topics you're curious about]
```

Save the file.

### Step 12: Stage and Commit on Your Branch
```bash
git add BIO.md
git commit -m "Add bio: Document career transition and learning goals"
```

Your changes are committed, but only on the `add-bio` branch. `master` is unchanged.

### Step 13: Switch Back to Master
```bash
git checkout master
```

Notice that `BIO.md` doesn't exist here. That's because it only exists on the `add-bio` branch. This is the power of branches—different versions of your code can coexist.

### Step 14: Merge Your Changes
Now you're confident in your bio file, so you merge it into `master`:

```bash
git merge --no-ff -m "Merge branch 'add-bio'" add-bio
```

**What happened:** Git combined the commits from `add-bio` into `master`, and your `BIO.md` file now exists on `master`. The `--no-ff` flag ("no fast-forward") tells Git to record the merge as its own **merge commit**, even though it could have simply slid the changes in—this keeps a clear, visible record in history that a branch was merged. (The `-m` supplies the merge-commit message so Git doesn't pop open a text editor.)

### Step 15: Verify the Merge
```bash
git status
```

You should be on `master` with no uncommitted changes.

```bash
git log --oneline --graph
```

This shows your commit history with a visual representation of the branch and merge. You should see something like:

```
*   abc1234 Merge branch 'add-bio'
|\
| * def5678 Add bio: Document career transition and learning goals
|/
* ghi9012 Initial commit: Add README with project description
```

---

## Part 4: Create a .gitignore File

### Step 16: Create .gitignore
Not everything in a project should be tracked by Git. Temporary files, secrets, and dependencies can be ignored. Create a `.gitignore` file:

```powershell
New-Item -ItemType File .gitignore
```

Open it and add common entries:

```
# Python
__pycache__/
*.pyc
.venv/
venv/

# Node.js
node_modules/
.npm

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

### Step 17: Commit .gitignore
```bash
git add .gitignore
git commit -m "Add .gitignore: Exclude common temporary and secret files"
```

---

## Expected Deliverable

Run this command and capture the output:

```bash
git log --oneline --graph --all
```

Save this output as a text file called `my-first-project-history.txt`. It should show:

1. Your initial commit
2. Your bio commit on the `add-bio` branch
3. The merge commit
4. Your .gitignore commit

You should also have these actual files in your project:
- `README.md` (with project description)
- `BIO.md` (with your biography)
- `.gitignore` (with common exclusions)

Take a screenshot of your project folder (using `Get-ChildItem -Force`, which lists hidden files like `.gitignore` too) showing all files and the Git history output. This demonstrates a complete Git workflow.

---

## Reflection Questions

1. **Why Branches Matter:** Why would a team of programmers use branches instead of all working directly on `master`? What problems does this solve?

2. **Commit Messages:** Good commit messages are crucial. Why is "Add bio" better than "stuff" or "changes"? How do commit messages serve the team and your future self?

3. **Merge Conflicts (Looking Ahead):** When two people change the same file, Git can't automatically merge. How do you think this should be resolved, and why might this be important to handle carefully?

---

## Tips for Success

- **Commit Early and Often:** Don't wait until you've changed 20 files to commit. Small, focused commits are easier to understand and debug.
- **Meaningful Messages:** Imagine reading your message six months from now. Will it make sense? Is it clear what changed and why?
- **Explore Safely:** Branches are cheap. Use them whenever you want to try something experimental—you can always delete them if things don't work out.
- **Save Everything:** Once you commit something, it's very hard to lose. Git is incredibly forgiving. Don't be afraid to experiment.

Congratulations! You've completed your first Git workflow. These skills form the foundation of professional development. Use them daily, and they'll become second nature.
