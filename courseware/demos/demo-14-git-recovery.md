# Demo 14: Git Recovery Essentials

**Module:** IV
**Topic:** Hands-On with Git
**Estimated Time:** 15 minutes
**Related reading:** [Hands-On with Git](../docs/Module-04-SDLC-and-Collaboration/03-hands-on-with-git.md)

## Objective
Students will learn the safe ways to undo work in Git—discarding uncommitted changes, unstaging files, shelving work temporarily, and safely undoing commits without rewriting history.

## Setup/Prerequisites
- A Git repository with at least 5-6 commits (from previous demos)
- Terminal open in the repo directory
- VS Code or another text editor ready
- Understanding of staging, committing, and branching

## Step-by-Step Script

### Part 1: Introduction to Recovery (1 minute)

**Talking Point:** "One of Git's superpowers is the ability to undo almost anything safely. No matter what you do, your committed work is rarely lost. Today we'll explore the main recovery techniques."

**Talking Point:** "There are four main scenarios: discarding uncommitted changes, unstaging files, shelving work temporarily, and undoing commits. Let's tackle each one."

---

### Part 2: Discard Uncommitted Changes with `git restore` (3 minutes)

**Talking Point:** "Scenario 1: You edited a file, realized it's wrong, and want to throw away your changes and go back to the last committed version."

Edit an existing file (e.g., `index.html`):
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Project - BROKEN</title>
</head>
<body>
    <h1>This is broken!</h1>
    <p>I made a mistake.</p>
</body>
</html>
```

Save it and check status:
```bash
git status
```

Expected output:
```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html
```

**Talking Point:** "Git is offering us the solution right there, on that second line: `git restore ... to discard changes in working directory`. That command says 'throw away my changes to this file and give me back the last committed version.' Notice Git lists both roads out — `git add` to keep the change and move it toward a commit, or `git restore` to throw it away. Today we want the second one."

But first, let's see what we'd lose:
```bash
git diff index.html
```

Shows all the incorrect changes.

Now discard them:
```bash
git restore index.html
```

No output on success. Check the file:
```bash
cat index.html
```

**Talking Point:** "The changes are gone. The file is back to its last committed state. This is a one-way operation—once you restore, the uncommitted changes are lost forever. So be sure before you run it."

Verify status:
```bash
git status
```

Expected output:
```
On branch master
nothing to commit, working tree clean
```

---

### Part 3: Unstage Files with `git restore --staged` (3 minutes)

**Talking Point:** "Scenario 2: You staged a file with `git add`, but then realized you don't want to commit it yet. How do you unstage it without losing the changes?"

Edit two files. First, edit `index.html` again:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Project</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>We added more content.</p>
</body>
</html>
```

And edit `style.css` (it already exists from Demo 10). Change the background color from `#f0f0f0` to `#fff`, leaving every other line exactly as it is:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    padding: 20px;
    margin: 0;
}

h1 {
    color: #333;
    text-align: center;
}
```

Stage both files:
```bash
git add index.html style.css
```

Check status:
```bash
git status
```

Expected output:
```
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html
        modified:   style.css
```

**Talking Point:** "Both files are staged. But let's say we're not ready to commit the style.css changes yet. We can unstage it without losing the edits."

Unstage style.css:
```bash
git restore --staged style.css
```

Check status:
```bash
git status
```

Expected output:
```
On branch master
Changes to be committed:
        modified:   index.html

Changes not staged for commit:
        modified:   style.css
```

**Talking Point:** "Perfect! `index.html` is still staged and ready to commit. `style.css` is unstaged but unchanged—we keep the edits. We can refine style.css more, or commit it in a separate commit later."

You can verify style.css still has your edits:
```bash
cat style.css
```

Now commit just the staged file:
```bash
git commit -m "Update index.html with more content"
```

**Talking Point:** "Only `index.html` was committed. `style.css` is still sitting there with uncommitted changes. We can finish it later."

---

### Part 4: Shelve Work with `git stash` (3 minutes)

**Talking Point:** "Scenario 3: You're in the middle of something, but you need to switch branches or work on something urgent. You don't want to commit incomplete work. Enter stash."

**Talking Point:** "`git stash` temporarily sets aside your uncommitted changes. It's like putting your work on a shelf. You can come back to it later."

You currently have `style.css` with uncommitted changes. Add a new change to it—make the heading blue:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    padding: 20px;
    margin: 0;
}

h1 {
    color: #0066cc;
    text-align: center;
}
```

Check status:
```bash
git status
```

Expected output:
```
On branch master
Changes not staged for commit:
        modified:   style.css
```

Now stash it:
```bash
git stash
```

Expected output (the commit hash and message will be whatever your last commit was):
```
Saved working directory and index state WIP on master: c15444e Update index.html with more content
```

**Talking Point:** "The changes are gone from your working directory, but they're saved. Let's verify."

Check status:
```bash
git status
```

Expected output:
```
On branch master
nothing to commit, working tree clean
```

Check the file:
```bash
cat style.css
```

Shows the last committed version—the Demo 10 stylesheet, with the grey `#f0f0f0` background and the `#333` heading. Both of your uncommitted edits are gone from the file (but safely on the shelf).

**Talking Point:** "Now you could switch branches, fix an urgent bug, whatever. Your incomplete work is safe. When you're ready, you pop it back with `git stash pop`."

Get your work back:
```bash
git stash pop
```

Expected output:
```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   style.css

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (fc8a9704a046e7e2080de19500085c95c8e952ae)
```

**Talking Point:** "That last line—`Dropped refs/stash@{0}`—is Git telling us it took the work off the shelf and removed it from the stash. `pop` means 'apply it and delete the stash entry.'"

Verify:
```bash
cat style.css
```

Shows both of your changes again—the white background and the blue heading.

**Talking Point:** "There's your work! `git stash pop` reapplies the last stashed change and removes it from the stash. If you have multiple stashes, you can view them all with `git stash list` and apply specific ones."

---

### Part 5: Undo Commits with `git revert` (3 minutes)

**Talking Point:** "Scenario 4: You committed something, but now realize it was wrong. How do you undo a commit? The safe way is `git revert`."

First, commit the style.css changes:
```bash
git add style.css
git commit -m "Update CSS with color styling"
```

Check the log:
```powershell
git log --oneline | Select-Object -First 5
```

Shows recent commits. (`Select-Object -First 5` is PowerShell's way of saying "just the first five lines"—the Unix equivalent you'll see online is `head -5`, which isn't available in PowerShell.)

**Talking Point:** "Let's say this commit was a mistake. With `git revert`, we create a NEW commit that undoes the changes. This is different from deleting the commit—we preserve history."

Run:
```bash
git revert HEAD
```

**Talking Point:** "HEAD means the current commit. This will open your editor with a default commit message. You can leave it or customize it."

> **Note (Windows):** On a fresh Git for Windows install, this opens the **Vim** editor right inside the terminal—which traps a lot of beginners because typing doesn't seem to do anything. To accept the default message and finish: press `Esc`, then type `:wq` and press `Enter` (that's "write and quit"). To bail out without committing, press `Esc`, then type `:q!` and press `Enter`.
>
> Two ways to avoid Vim entirely:
> - **Skip the editor this time:** run `git revert --no-edit HEAD`, which uses the default message and commits immediately—no editor opens.
> - **Switch your default editor for good:** `git config --global core.editor "code --wait"` makes Git open VS Code for commit messages instead of Vim.

Expected editor shows:
```
Revert "Update CSS with color styling"

This reverts commit abc123def456...
```

Save and close the editor.

Expected output:
```
[master 9189b6c] Revert "Update CSS with color styling"
 Date: Thu Jul 16 11:49:24 2026 -0400
 1 file changed, 2 insertions(+), 2 deletions(-)
```

**Talking Point:** "A new commit was created that undoes the previous one. Two insertions and two deletions—because our commit changed two lines (the background and the heading color), so undoing it changes those same two lines back. Check the file:"

```bash
cat style.css
```

Shows `style.css` back to the Demo 10 version: the grey `#f0f0f0` background and the `#333` heading are restored, and our white background and blue heading are gone.

Check the log:
```powershell
git log --oneline | Select-Object -First 5
```

Shows both the original commit and the new revert commit.

**Talking Point:** "This is the key difference from `git reset` or `git rebase`. We didn't erase history. We added a new commit that documents the undo. This is safer for shared repositories because it doesn't rewrite history. Everyone else's copies of the repo remain valid."

---

### Part 6: Summary of Recovery Techniques (2 minutes)

**Talking Point:** "Let's recap the four scenarios and commands."

Create a quick reference table in the terminal or on screen:

| Scenario | Command | Behavior |
|----------|---------|----------|
| Discard uncommitted changes | `git restore <file>` | Throws away edits, reverts to last commit |
| Unstage a file | `git restore --staged <file>` | Removes file from staging, keeps edits |
| Shelve work temporarily | `git stash` | Saves uncommitted changes, clears working dir |
| Retrieve shelved work | `git stash pop` | Reapplies the last stashed changes |
| Undo a commit safely | `git revert HEAD` | Creates a new commit that undoes the previous one |

**Talking Point:** "Each has its purpose. Remember: `restore` and `restore --staged` are for uncommitted work. `stash` is for when you need to set something aside temporarily. `revert` is for safely undoing commits without rewriting history."

---

## Key Points to Emphasize

- **`git restore` is dangerous.** It throws away changes permanently. Use `git diff` first to confirm what you're discarding.
- **`git restore --staged` is safe.** It unstages without losing edits. You keep the changes; they just move from staged to unstaged.
- **`git stash` is for temporary shelving.** Use it when you need to switch contexts. `git stash pop` brings work back. `git stash list` shows all stashes.
- **`git revert` is the safe undo.** It creates a new commit that documents the undo. It doesn't rewrite history, so it's safe to use on shared branches.

---

## Common Questions

**Q: What's the difference between `git restore` and `git reset`?**
A: `git restore` discards changes to working files. `git reset` moves the HEAD pointer. They're often used together, but they do different things. For now, use `git restore` to discard changes. We don't recommend `git reset --hard` for beginners.

**Q: Can I recover a file after running `git restore`?**
A: Once you restore, the uncommitted changes are truly gone. But if you had committed the file before, the commit is still there in history. You can check out the file from an older commit with `git checkout HEAD~1 <file>` to get the previous version.

**Q: What if I stashed work and forgot where I stashed it?**
A: Run `git stash list` to see all stashes. They're labeled `stash@{0}`, `stash@{1}`, etc. Use `git stash show stash@{0}` to see the changes in a specific stash. Use `git stash pop stash@{0}` to apply a specific stash.

**Q: Is `git revert` the only way to undo a commit on a shared branch?**
A: For shared branches, yes, `git revert` is the safe choice. It doesn't rewrite history. On your own branch before pushing, you could use `git reset`, but once you've shared the commit with others, `revert` is the way to go. Never force-push a rewritten history to a branch others depend on—it breaks their work.
