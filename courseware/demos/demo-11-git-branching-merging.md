# Demo 11: Branching and Merging

**Module:** IV
**Topic:** Hands-On with Git
**Estimated Time:** 16 minutes
**Related reading:** [Hands-On with Git](../docs/Module-04-SDLC-and-Collaboration/03-hands-on-with-git.md)

## Objective
Students will understand the power of branches for parallel work, create and switch branches, and merge changes back into the master branch, visualizing the commit graph to see how history branches and rejoins.

![A commit history with three commits on master, a branch of two commits, and a merge commit with two parents.](../diagrams/png/git-branch-merge.png)

*Project this before you type anything, so the room knows what the commands are building.*

## Setup/Prerequisites
- A Git repository with at least 5-6 commits (from Demo 9 and 10)
- Terminal open in the repo directory
- VS Code or a text editor ready
- An understanding of `git status`, `git add`, and `git commit`

## Step-by-Step Script

### Part 1: Understanding Branches (2 minutes)

**Talking Point:** "So far, we've been committing to 'master.' But what if you wanted to work on something experimental without affecting the master branch? That's what branches are for."

**Talking Point:** "Think of a branch as a parallel universe. You can experiment in that universe, and nothing affects the master branch. When you're happy with your work, you merge it back. Master stays stable, and your feature work is isolated."

Show the current branch:
```bash
git branch
```

Expected output:
```
* master
```

**Talking Point:** "The `*` marks the branch you're currently on. Right now, we only have 'master.' Let's create a new branch."

---

### Part 2: Create a Feature Branch (2 minutes)

**Talking Point:** "I'm going to add a bio section to our HTML. But instead of working on master, I'll work on a separate branch. This keeps master clean."

Create and switch to a new branch:
```bash
git switch -c feature/add-bio
```

Expected output:
```
Switched to a new branch 'feature/add-bio'
```

**Talking Point:** "The `-c` flag means 'create.' We're creating a new branch called `feature/add-bio` and immediately switching to it. The branch name describes the work we're doing."

Verify:
```bash
git branch
```

Expected output:
```
* feature/add-bio
  master
```

**Talking Point:** "Notice we're now on `feature/add-bio` (the `*` marks it). Git lists branches alphabetically, so `feature/add-bio` appears above `master`. The master branch is safe. Any commits we make from here go onto this branch, not master."

---

### Part 3: Work on the Branch (3 minutes)

**Talking Point:** "Let's add some content on this branch."

Create a new file called `bio.html`:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bio Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>About Me</h1>
    <p>Hi! I'm learning to program and use Git.</p>
    <p>I'm excited about version control!</p>
    <a href="index.html">Back to Home</a>
</body>
</html>
```

Commit this work:
```bash
git add bio.html
git commit -m "Add bio page with introduction"
```

**Talking Point:** "This commit is on the `feature/add-bio` branch. If someone else is working on master, they don't see this work yet."

Make one more change on this branch:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bio Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>About Me</h1>
    <p>Hi! I'm learning to program and use Git.</p>
    <p>I'm excited about version control!</p>
    <p>My favorite languages are Python and JavaScript.</p>
    <a href="index.html">Back to Home</a>
</body>
</html>
```

Commit:
```bash
git add bio.html
git commit -m "Add programming preferences to bio"
```

---

### Part 4: Switch Back to Master (3 minutes)

**Talking Point:** "Now watch what happens when we switch back to master. The files on master haven't changed—they're frozen in time. The bio.html file we just created doesn't exist here."

Switch back:
```bash
git switch master
```

Expected output:
```
Switched to branch 'master'
```

Check your files:
```powershell
Get-ChildItem -Force
```

**Talking Point:** "Notice that `bio.html` is gone! It's not deleted—it exists on the `feature/add-bio` branch. When we switch branches, Git switches the files too. The working directory matches the branch you're on."

Open your text editor and look at the project folder. The bio.html file is truly not there.

**Talking Point:** "This is the isolation I mentioned. Master is clean and unaffected by our experimental work. If we decided the bio wasn't a good idea, we could just delete the branch and move on."

---

### Part 5: Merge the Branch (4 minutes)

**Talking Point:** "But we like the bio! Let's merge it back into master. This brings all the commits from `feature/add-bio` into the master branch."

While on master, run:
```bash
git merge feature/add-bio
```

Expected output:
```
Updating 3f4b2c1..a9b8c7d
Fast-forward
 bio.html | 14 ++++++++++++++
 1 file changed, 14 insertions(+)
 create mode 100644 bio.html
```

**Talking Point:** "That 'Fast-forward' message means there were no conflicting changes on master—nothing got in the way. Git simply replayed our branch commits on top of master. Other times, git is smarter about merging, but this is the simplest case."

Check your files now:
```powershell
Get-ChildItem -Force
```

**Talking Point:** "There's `bio.html`! It's back. The commits from `feature/add-bio` are now part of master's history."

---

### Part 6: Visualize the Commit Graph (2 minutes)

**Talking Point:** "Let's look at the commit history in a way that shows how branches connect."

Run:
```bash
git log --oneline --graph
```

Expected output (your hashes will differ):
```
* a9b8c7d (HEAD -> master) Add programming preferences to bio
* c8d9e0f Add bio page with introduction
* 3f4b2c1 Improve CSS styling with margins and centering
* 2e3f4a5 Link stylesheet to HTML
* 1d2e3f4 Create separate stylesheet
* 0c1d2e3 Add basic CSS styling
* (earlier commits...)
```

**Talking Point:** "This view shows the timeline of commits. Each `*` is a commit. When a branch splits off and merges back, you'd see a graph structure, but since we did a fast-forward merge, it's a straight line. On a team project with multiple branches, this view gets more interesting—you'd see commits branching off in multiple directions and then coming back together."

Let's see what happens with a more complex history:
```bash
git log --oneline --graph --all
```

**Talking Point:** "The `--all` flag shows every branch, not just the one you're standing on. (It does *not* show deleted branches; once a branch is deleted, its label is gone.) `--graph` visualizes the structure with ASCII art. In a real project with parallel features, this diagram helps you understand the flow of work."

**Talking Point:** "Right now our repository only lives on this machine, so `--all` just means our local branches. Once we connect to GitHub in a little while, `--all` will also show *remote-tracking* branches with names like `origin/master` — that's your local record of where the shared copy is. Park that; it'll make sense when we have a remote to point at."

---

### Part 7: Clean Up (1 minute)

**Talking Point:** "Once a feature branch is merged, we can delete it. It's not needed anymore—the commits are safely in master."

Delete the branch:
```bash
git branch -d feature/add-bio
```

Expected output:
```
Deleted branch feature/add-bio (was a9b8c7d).
```

Verify:
```bash
git branch
```

Expected output:
```
* master
```

**Talking Point:** "It's gone from the branch list. But the commits are still in master's history. We didn't lose any work. Deleting a branch just removes the label. The commits live on in master."

---

## Key Points to Emphasize

- **Branches let you work in isolation.** Create a branch for each feature or bugfix. The master branch stays stable while you experiment.
- **Branch names should be descriptive.** Use `feature/add-bio`, `bugfix/login-error`, or `refactor/api-client`. This makes it clear what the branch is for.
- **Switching branches changes your files.** When you run `git switch`, Git updates your working directory to match the branch. Files from other branches temporarily disappear.
- **`git merge` brings branches back together.** The commits from your feature branch are replayed onto master. Fast-forward merges are simple; more complex merges happen when both branches have conflicting changes (we'll see that next).

---

## Common Questions

**Q: What if I switch branches and I have uncommitted changes?**
A: Git will usually prevent the switch and tell you to commit or stash your changes first. This protects your work. Always commit (or stash—we'll cover that) before switching.

**Q: How do I know which branch I'm on?**
A: Run `git branch` to see all branches with the current one marked with `*`. Or look at your prompt if it's configured to show the branch. Or run `git status`—it always tells you which branch you're on.

**Q: Can I merge multiple branches into master?**
A: Absolutely! You can merge as many branches as you want. Each merge is independent. Run `git merge branch1`, then `git merge branch2`, etc. They all flow into master.
