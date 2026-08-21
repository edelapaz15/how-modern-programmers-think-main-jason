# Demo 10: Viewing History and Diffs

**Module:** IV
**Topic:** Hands-On with Git
**Estimated Time:** 13 minutes
**Related reading:** [Hands-On with Git](../docs/Module-04-SDLC-and-Collaboration/03-hands-on-with-git.md)

## Objective
Students will explore Git's history viewing tools and understand how to inspect what changed between commits, building confidence in reading their own (and others') work.

## Setup/Prerequisites
- A Git repository initialized (from Demo 9, or create a fresh one)
- At least one commit already made
- Terminal open in the repo directory
- VS Code or another text editor ready

## Step-by-Step Script

### Part 1: Review the Starting Point (1 minute)

**Talking Point:** "Let's start by checking what we have. We're picking up from where we left off with our first commits."

Run:
```bash
git status
```

Confirm you're on the master branch with a clean working tree.

**Talking Point:** "Good. Now let's look at the commits we've made so far."

---

### Part 2: The `git log` Command (4 minutes)

**Talking Point:** "Git log is your project's biography. Every commit tells a story. Let's read it."

Run:
```bash
git log
```

> **Instructor note — warn the room about the pager BEFORE you press Enter.** If the history is longer than the window, Git opens it in a pager and the terminal stops accepting normal commands. To a beginner this looks exactly like a frozen machine, and someone will start closing windows. Say this up front:
>
> **"If your terminal fills up and you see a colon (`:`) at the bottom, you're not stuck — Git is just showing you one page at a time. Arrow keys or the spacebar scroll. Press `q` to quit back to the prompt. `q` for quit."**
>
> Then demonstrate pressing `q` yourself. This costs 15 seconds and saves several hands going up. The same applies to `git log --stat` later in this demo. If you'd rather sidestep the pager entirely, `git --no-pager log` prints straight to the terminal.

Expected output (your commit hashes and dates will differ):
```
commit 7e3a1f9c4b8d2e6a0f5c3b1d9e8a7c6b5d4f3e2a
Author: Your Name <your.email@example.com>
Date:   Fri Mar 14 10:30:00 2026 +0000

    Add enthusiasm to welcome message

commit c6d5e4f3a2b1908877665544332211ffeeddccbb
Author: Your Name <your.email@example.com>
Date:   Fri Mar 14 10:25:00 2026 +0000

    Add initial HTML template
```

**Talking Point:** "Each commit gets a unique identifier—that long string of letters and numbers. It's a hash. The hash is generated from the commit's content. If even one character in the commit changed, the hash would be completely different. This is how Git ensures no one tampered with history."

**Talking Point:** "We see the author, the date, and the commit message. The message is what we wrote with `-m` when we committed. This is why good commit messages matter—they're the story of your project."

---

### Part 3: Make More Commits (3 minutes)

**Talking Point:** "To really show off the power of git log, let's create a few more commits with intentional changes."

Edit your `index.html` file:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Project</title>
    <style>
        body { font-family: Arial, sans-serif; }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first commit to Git.</p>
    <p>Git is awesome!</p>
</body>
</html>
```

Commit it:
```bash
git add index.html
git commit -m "Add basic CSS styling"
```

Now make another change. Create a new file, `style.css`:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
}

h1 {
    color: #333;
}
```

Commit it:
```bash
git add style.css
git commit -m "Create separate stylesheet"
```

One more edit to `index.html` to link the stylesheet:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first commit to Git.</p>
    <p>Git is awesome!</p>
</body>
</html>
```

Commit:
```bash
git add index.html
git commit -m "Link stylesheet to HTML"
```

---

### Part 4: View the Full History (3 minutes)

**Talking Point:** "Now we have five commits in our history—the two from Demo 9 plus the three we just made. Let's view them in different ways."

Run the full log again:
```bash
git log
```

**Talking Point:** "That's verbose, but sometimes you need the full details. For a quick glance, try the oneline format."

```bash
git log --oneline
```

Expected output (hashes shortened):
```
9b4f2a1 (HEAD -> master) Link stylesheet to HTML
3d8c6e0 Create separate stylesheet
5a1e7f4 Add basic CSS styling
7e3a1f9 Add enthusiasm to welcome message
c6d5e4f Add initial HTML template
```

**Talking Point:** "Much easier to read! This format shows each commit on one line, with a short hash and the message. The `(HEAD -> master)` indicates where you are right now—the latest commit on the master branch."

Now try the stat view:
```bash
git log --stat
```

Expected output:
```
commit 9b4f2a1d7c3e508642f9a1b3c5d7e9f0a2b4c6d8
Author: Your Name <your.email@example.com>
Date:   Fri Mar 14 10:45:00 2026 +0000

    Link stylesheet to HTML

 index.html | 4 +---
 1 file changed, 1 insertion(+), 3 deletions(-)

commit 3d8c6e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d
...
```

**Talking Point:** "The `--stat` flag shows a summary of what changed in each commit. You see which files were modified and how many lines were added or removed. It's perfect when you want to get a sense of the scope of changes without seeing every single line."

**Talking Point:** "Look at the numbers on that commit: one insertion, three deletions. Does that seem like a lot for 'link the stylesheet'? It's right—we deleted the three-line `<style>` block and added one `<link>` line in its place. Git doesn't understand that we *moved* the styling into another file; it just sees lines leaving and lines arriving. That's a useful thing to internalize: Git tracks lines of text, not intent. The intent is what your commit message is for."

---

### Part 5: Inspect Uncommitted Changes with `git diff` (2 minutes)

**Talking Point:** "Now let's make a change but NOT commit it yet. Then we'll use `git diff` to see exactly what's about to go into the next commit."

Edit your `style.css` file:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
    margin: 0;
}

h1 {
    color: #333;
    text-align: center;
}
```

Now run:
```bash
git diff
```

Expected output (the two hashes on the `index` line will differ on your machine—they're generated from the file contents):
```
diff --git a/style.css b/style.css
index 37c04f1..2b31029 100644
--- a/style.css
+++ b/style.css
@@ -2,8 +2,10 @@ body {
     font-family: Arial, sans-serif;
     background-color: #f0f0f0;
     padding: 20px;
+    margin: 0;
 }

 h1 {
     color: #333;
+    text-align: center;
 }
```

**Talking Point:** "The `+` sign shows lines we added. If we deleted lines, they'd show with a `-`. Red background for deletions, green for additions. This is exactly what will be committed if you run `git add style.css` and then `git commit`."

**Talking Point:** "Don't skip past that `@@ -2,8 +2,10 @@` line—it looks like noise, but it's a summary of the change. It reads: 'starting around line 2, the old version had 8 lines in this region; the new version has 10.' We added two lines, so 8 became 10. Git also shows a few unchanged lines around each edit for context, which is why it starts at line 2 rather than line 1. You'll see these `@@` markers in every diff and every code review for the rest of your career, so it's worth thirty seconds now."

**Talking Point:** "This is incredibly useful for reviewing your own work before you commit. It catches typos, accidental changes, and helps you write thoughtful commit messages because you can see exactly what you're about to lock in."

Now stage the change:
```bash
git add style.css
```

And try:
```bash
git diff
```

**Talking Point:** "After staging, `git diff` shows nothing. That's because `git diff` only shows unstaged changes. To see staged changes, use `git diff --staged`."

```bash
git diff --staged
```

Shows the same additions.

**Talking Point:** "This is your safety net. Before you commit, check `git diff --staged` to confirm everything is what you intended. Then commit with confidence."

Finish by committing:
```bash
git commit -m "Improve CSS styling with margins and centering"
```

---

## Key Points to Emphasize

- **`git log` is the history book of your project.** Every commit has a unique hash, author, date, and message. Read it to understand what happened and why.
- **Use `--oneline` for a quick overview**, `--stat` to see the scope of changes, and the full `git log` when you need all the details.
- **`git diff` is your pre-commit checklist.** Use it to review your changes before staging. Use `git diff --staged` to review staged changes before committing.
- **Commit messages should be meaningful.** Future you (and your teammates) will read them. "Fix bug" is less helpful than "Fix off-by-one error in loop counter."

---

## Common Questions

**Q: Why are those hashes so long? Do I have to type the whole thing?**
A: Great question! The full hash is about 40 characters, but Git only needs the first 7-10 characters to be unique. Most commands accept abbreviated hashes. So `9b4f2a1` works fine instead of `9b4f2a1d7c3e508642f9a1b3c5d7e9f0a2b4c6d8`.

**Q: Can I see the diff between two specific commits, not just the uncommitted changes?**
A: Absolutely! Use `git diff commit1 commit2` to compare any two commits. For example, `git diff HEAD~2 HEAD` shows the difference between the commit two steps back and now.

**Q: What if I made a change, didn't stage it, and now I'm looking at `git diff` but I've forgotten what the original file looked like?**
A: That's where version control shines. Git always has a copy of the committed version. Run `git checkout filename` to revert to the last committed version. Don't worry—we'll go deeper into undoing changes in a future demo.
