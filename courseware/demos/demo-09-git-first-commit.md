# Demo 9: Git Setup and First Commit

**Module:** IV
**Topic:** Hands-On with Git
**Estimated Time:** 18 minutes
**Related reading:** [Hands-On with Git](../docs/Module-04-SDLC-and-Collaboration/03-hands-on-with-git.md)

## Objective
Students will configure Git, initialize a repository, and make their first commit while understanding the staging area concept—the critical intermediate step between workspace and permanent history.

![Git's three areas: working directory, staging area and repository, connected by git add and git commit, with git restore going back the other way.](../diagrams/png/git-three-areas.png)

*Keep this on screen for the whole demo. Point at the box each command is acting on as you type it.*

## Setup/Prerequisites
- Git installed on instructor's machine
- A terminal or command prompt open
- VS Code or another text editor open
- A clean working directory (no prior git repos for this demo)

## Step-by-Step Script

### Part 1: Configure Git (2 minutes)

**Talking Point:** "Before we commit anything to Git, we need to introduce ourselves to it. Git tracks who made each change, so it needs to know your name and email."

Open a terminal and run:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Then verify it worked:
```bash
git config --global user.name
git config --global user.email
```

**Talking Point:** "The `--global` flag means this setting applies to every repo on this machine. If you ever wanted different settings for one specific project, you could run the same commands without `--global` inside that project folder."

---

### Part 2: Initialize a Repository (2 minutes)

**Talking Point:** "Now let's create a brand-new project and turn it into a Git repository."

Create a new folder:
```bash
mkdir my-first-project
cd my-first-project
```

Initialize Git:
```bash
git init -b master
```

You'll see output like: `Initialized empty Git repository in /path/to/my-first-project/.git/`

**Talking Point:** "That `.git` directory is Git's brain. It contains every commit, every branch, every piece of history for this project. If you delete `.git`, you lose the history—but your actual files stay safe."

**Talking Point:** "The `-b master` part names our first branch `master`. If you leave it off, different installations of Git pick different names—some say `master`, some say `main`—and Git may print a paragraph of advice about it. We're naming it explicitly so everyone in the room sees the same thing on screen. You'll meet both names in the wild; they're just labels for 'the main line of work,' and we'll talk about branches properly in a few minutes."

Let's peek at what Git created:
```powershell
Get-ChildItem -Force
```

You should see the hidden `.git` folder. Show the contents:
```powershell
Get-ChildItem -Force .git
```

**Talking Point:** "Inside are objects, refs, hooks, and a config file. We won't touch these directly—Git manages them for us. This is just to demystify what's happening behind the scenes."

---

### Part 3: Create a File (1 minute)

**Talking Point:** "Let's add some content to our project."

Using VS Code or your editor, create a file called `index.html`:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Project</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first commit to Git.</p>
</body>
</html>
```

Save the file.

---

### Part 4: The Three-Step Commit Dance (5 minutes)

**Talking Point:** "Now we're going to see one of Git's most important concepts: the staging area. Think of it like a movie studio. The director says 'okay, we're filming this scene now'—that's staging. Then the film gets developed—that's the commit. Before staging, you might have stuff lying around the set that isn't part of the movie yet."

**Step 1: Check Status**
```bash
git status
```

Expected output shows:
- `On branch master`
- Untracked files: `index.html`

**Talking Point:** "Git is saying 'I see you have an `index.html` file, but you haven't told me to track it yet.' It's waiting for instructions."

**Step 2: Add the File (Stage It)**
```bash
git add index.html
```

No output means success. Now check status again:
```bash
git status
```

**Talking Point:** "See the difference? Now `index.html` is shown in green, under 'Changes to be committed.' We've staged it. Git is ready to commit, but it hasn't locked it in yet. This is the staging area at work."

**Talking Point:** "Why have a staging area? Because sometimes you're working on lots of files, but you only want to commit some of them right now. The staging area lets you be selective. You might have 10 changed files, but only commit 3 of them. The other 7 stay uncommitted."

**Step 3: Commit**
```bash
git commit -m "Add initial HTML template"
```

Expected output shows something like:
```
[master (root-commit) c6d5e4f] Add initial HTML template
 1 file changed, 10 insertions(+)
 create mode 100644 index.html
```

**Talking Point:** "Your hash—that `c6d5e4f`—will be different from mine. Git generates it from the contents, so every commit anywhere in the world gets its own. Also, `10 insertions` is just the ten lines of our HTML file. Git counts lines, not files."

**Talking Point:** "We did it! That message in quotes—'Add initial HTML template'—is our commit message. It describes what we changed and why. Good commit messages are short, present tense, and descriptive."

**Step 4: Check Status Again**
```bash
git status
```

Expected output:
```
On branch master
nothing to commit, working tree clean
```

**Talking Point:** "Notice how the output changed. The working tree is 'clean.' Everything is committed. There's nothing waiting to be staged or committed. If you made a change to `index.html` right now, Git would show it as unstaged again. The cycle continues."

---

### Part 5: Quick Review (2 minutes)

**Talking Point:** "Let's make one more change and commit it so the pattern sinks in."

Edit `index.html` and add a line:
```html
<p>Git is awesome!</p>
```

Now do the dance again:
```bash
git status
```

Shows: one file modified, nothing staged.

```bash
git add index.html
```

```bash
git status
```

Shows: changes to be committed.

```bash
git commit -m "Add enthusiasm to welcome message"
```

```bash
git status
```

Clean working tree.

**Talking Point:** "You just did it twice. By the third time you do this, it becomes automatic. This cycle—modify, stage, commit—is the heartbeat of Git development."

---

## Key Points to Emphasize

- **Git configuration is a one-time setup.** You run `git config --global` once per machine, and it applies to every repo you work on.
- **The staging area is intentional.** Not every change is ready to commit. You choose what to stage and commit together as one logical unit.
- **`git status` is your friend.** Run it often. It tells you exactly what Git sees and what's waiting for your next move.
- **A good commit message describes the "why"**, not just the "what." "Add feature X" is better than "fixed stuff" or "update."

---

## Common Questions

**Q: Why do I need to stage files? Can't I just commit everything?**
A: You can use `git add .` to stage all changes at once, but staging lets you be selective. Imagine you're fixing a bug AND working on a new feature in the same session. You might want to commit the bug fix first, then the feature in a separate commit. That makes your history clearer and easier to review.

**Q: What if I committed something I didn't mean to?**
A: Don't panic! We'll cover ways to undo commits safely later in the course. For now, just remember: commits are never lost. You can always get them back.

**Q: Do I have to use `git add` for every file, or can I add a whole folder?**
A: Good question! `git add .` adds everything in your current folder and all subfolders. `git add folder/` adds everything in that folder. `git add *.html` adds all HTML files. You have lots of flexibility.
