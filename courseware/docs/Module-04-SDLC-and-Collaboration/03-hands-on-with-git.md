# Topic 3: Hands-On with Git

Now that you understand the concepts behind version control and Git, let's move to the practical side: the actual commands you'll use every day. This topic is hands-on — you'll learn by seeing real Git commands and understanding what they do.

Git has many commands, but you'll use a small set repeatedly. Master these core commands, and you'll be comfortable with Git in most situations.

## Installing and Configuring Git

### Installation

**macOS:**
```bash
brew install git
```

**Windows:**
Download and run the installer from [git-scm.com](https://git-scm.com). Use default settings unless you have preferences.

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install git
```

**Linux (Fedora/RHEL):**
```bash
sudo yum install git
```

After installation, verify it worked:

```bash
git --version
```

You should see output like `git version 2.34.1` (version numbers vary).

### Configuration

Before using Git, configure your identity. Git uses this information to attribute commits to you.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

The `--global` flag applies this to all repositories on your machine. You can also use `--local` (just this repository) or omit the flag for default behavior.

Verify your configuration:

```bash
git config --list
```

You should see your name and email (among other settings).

## git init: Creating a New Repository

To start version-controlling a project, initialize a Git repository:

```bash
cd /path/to/your/project
git init -b master
```

This creates a `.git` directory containing all the Git metadata. Your project is now a repository.

```powershell
Get-ChildItem -Force
```

You'll see the `.git` directory. It's hidden, which is why `-Force` is needed — without it, `Get-ChildItem` skips hidden items. (On Mac or Linux, the equivalent is `ls -la`.)

From this point on, you can start tracking changes.

> **A note on the default branch name.** `git init` starts you on a **default branch**, and its name is configurable, not fixed. Git historically named it `master`, while recent versions of Git and platforms like GitHub default to `main` — the Git for Windows installer commonly sets `main` for you. That means a bare `git init` is **not** guaranteed to give you the same branch name as the person next to you, and it may print a paragraph of advice about the ambiguity. This is why we write `git init -b master` throughout this course: the `-b` flag names the branch explicitly, so every machine in the room matches the outputs below regardless of how Git was installed. You can check your own machine's default with `git config --get init.defaultBranch` and change it with `git config --global init.defaultBranch <name>`. Don't be thrown off if a repository you clone elsewhere uses `main` instead — it's the same concept, just a different label.

## git clone: Copying an Existing Repository

Most of the time, you won't create repositories from scratch. Instead, you'll clone an existing repository from a remote server (like GitHub):

```bash
git clone https://github.com/username/project-name.git
```

This downloads the entire repository (all history, all branches) to your local machine. You're ready to start working immediately.

The command also:
- Creates a directory named `project-name`
- Initializes it as a Git repository
- Sets up a remote called `origin` pointing to the original URL
- Checks out the repository's default branch

After cloning, you have a complete copy of the project, including all history.

## git status: Understanding Your Current State

`git status` is your best friend. It tells you exactly what's happening in your repository:

```bash
git status
```

Output might look like:

```
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to stage)
  (use "git restore <file>..." to discard changes)
        modified:   users.js
        modified:   tests.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        temp_notes.txt

nothing added to commit but untracked changes present (working directory)
```

This tells you:

- You're on the `master` branch
- You have two modified files that aren't staged yet (`users.js`, `tests.js`)
- You have an untracked file (`temp_notes.txt`)
- Your branch is up to date with the remote

Run `git status` frequently. It's not a "verbose" command — it's a diagnostic tool.

## git add: Staging Changes

Once you've made changes, stage them for the next commit:

```bash
git add users.js tests.js
```

This stages both files. You can also use:

```bash
git add .
```

This stages all changes in the current directory and subdirectories. Or:

```bash
git add *.js
```

This stages every JavaScript file.

After staging, `git status` shows:

```
Changes to be committed:
  (use "git commit -m...")
        modified:   users.js
        modified:   tests.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        temp_notes.txt
```

The staged files are ready to commit. The untracked file is still untracked.

### When to Stage Selectively

You might have five modified files but only want to commit three of them right now. Stage only those three:

```bash
git add file1.js file2.js file3.js
```

This keeps your commits focused. A good commit contains changes that are related logically. Mixing unrelated changes into one commit makes history harder to understand and makes reverting selective changes harder.

## git commit: Recording a Snapshot

Once you've staged changes, commit them:

```bash
git commit -m "Add user creation function"
```

The `-m` flag provides the commit message inline. Git creates a commit containing:

- All the staged changes
- Your name and email (from configuration)
- The current timestamp
- Your commit message

The output shows:

```
[master d4e5f6a] Add user creation function
 2 files changed, 45 insertions(+), 3 deletions(-)
```

The commit hash (`d4e5f6a`) is a unique identifier for this commit. The stats show what changed.

### Commit Message Conventions

Write clear, meaningful commit messages. The format has become standardized:

```
Short summary (50 characters or less)

More detailed explanation of the change, if needed.
Explain the why, not just the what.

Fixes issue #42.
```

**Examples:**

- Bad: `Fix bug` — too vague
- Good: `Fix off-by-one error in pagination`

- Bad: `Update user.js` — describes the file, not the change
- Good: `Add email validation to user signup`

- Bad: `WIP stuff` — indicates incomplete, uncommitted work
- Good: `Refactor user authentication to use JWT tokens`

Good commit messages are invaluable when reading history. They explain *why* a change was made.

### Skipping the Staging Area

If you've modified existing files and want to commit everything (not new files), you can skip staging:

```bash
git commit -am "Update user validation"
```

The `-a` flag stages all modified tracked files, then commits. This is faster but less precise. Use it when you're certain you want to commit everything.

## git log: Reading Project History

To see your project's history:

```bash
git log
```

Output shows commits in reverse chronological order (newest first):

```
commit d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7
Author: Your Name <your.email@example.com>
Date:   Wed Mar 12 14:23:45 2026 -0700

    Add user creation function

commit a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0
Author: Your Name <your.email@example.com>
Date:   Wed Mar 12 10:15:22 2026 -0700

    Initial setup

```

Each entry shows the commit hash, author, date, and message.

### Useful `git log` Options

**One-line view (compact):**
```bash
git log --oneline
```

Output:
```
d4e5f6a Add user creation function
a1b2c3d Initial setup
```

**Show statistics (files changed per commit):**
```bash
git log --stat
```

**Show actual changes (diffs):**
```bash
git log -p
```

This shows not just what files changed, but the actual code changes — useful for understanding what happened.

**Filter by author:**
```bash
git log --author="Your Name"
```

**Limit to recent commits:**
```bash
git log -5
```

Shows the last 5 commits.

## git branch: Creating and Listing Branches

To see all branches:

![A commit history: three commits on master, then a branch called fix-status splitting off with two more commits, then a merge commit M rejoining master. M is the only commit with two parents.](../../diagrams/png/git-branch-merge.png)

*Nothing is lost and nothing is overwritten. Branching is how a team works on several things at once.*

```bash
git branch
```

Output:
```
  develop
* master
  feature/auth
```

The asterisk marks your current branch. All three branches exist locally.

To create a new branch:

```bash
git branch feature/new-login
```

This creates a new branch starting from your current commit. But you're still on the old branch. To switch to it, use `git checkout` or `git switch` (below).

### List Remote Branches

To see branches on the remote server:

```bash
git branch -r
```

Output:
```
  origin/develop
  origin/master
  origin/feature/auth
```

To see all branches (local and remote):

```bash
git branch -a
```

## git checkout / git switch: Navigating Branches

To switch to an existing branch:

```bash
git checkout feature/new-login
```

Your working directory updates to reflect the branch. Files change if they're different between branches. You're now on `feature/new-login`.

**Note:** `git switch` is the newer equivalent:

```bash
git switch feature/new-login
```

Both work; `git switch` is more intuitive ("switch to a branch") while `git checkout` is older but more flexible.

### Create and Switch in One Command

```bash
git switch -c feature/password-reset
```

This creates a new branch and switches to it. With `git checkout`, it's:

```bash
git checkout -b feature/password-reset
```

Both create the branch starting from your current commit.

## git merge: Combining Branches

When your feature is complete, merge it into `master`:

```bash
git switch master
git merge feature/new-login
```

First, you switch to the target branch (`master`). Then you merge the feature branch into it.

Output (if no conflicts):
```
Merge made by the 'ort' strategy.
 login.js | 120 +++++++++++++++++++++
 tests.js |  45 ++++++++
 2 files changed, 165 insertions(+)
```

Git has combined your changes. If there were no conflicting edits, this is automatic.

### Handling Merge Conflicts

If both `master` and your feature branch modified the same lines, Git reports a conflict:

![A merge conflict: master's version and the branch's version of the same line, and the conflict markers Git writes into the file, with each marker explained.](../../diagrams/png/git-merge-conflict.png)

*Your job: decide what the line should say, then delete all three marker lines. A conflict is a question, not an error.*

```
Auto-merging users.js
CONFLICT (content): Merge conflict in users.js
Automatic merge failed; fix conflicts and then commit the result.
```

Open the conflicted file (`users.js`). You'll see markers:

```javascript
function validatePassword(password) {
<<<<<<< HEAD
  const minLength = 8;
=======
  const minLength = 10;
>>>>>>> feature-new-login
  return password.length >= minLength;
}
```

The conflict shows:
- `HEAD` (current branch, `master`): `minLength = 8`
- `feature-new-login`: `minLength = 10`

You must choose which to keep, or combine them. Edit the file to resolve — and note that you delete the three marker lines too, not just the version you don't want:

```javascript
function validatePassword(password) {
  const minLength = 10;   // Increased requirement
  return password.length >= minLength;
}
```

Then stage and commit:

```bash
git add users.js
git commit -m "Merge feature/new-login into master"
```

The merge is complete.

## Understanding Remotes: GitHub, GitLab, Bitbucket

A **remote** is a version of your repository hosted on a server. The most common remote is called `origin` and typically points to GitHub, GitLab, or Bitbucket.

When you `git clone`, the remote is automatically configured:

```bash
git remote -v
```

Output:
```
origin  https://github.com/username/project.git (fetch)
origin  https://github.com/username/project.git (push)
```

This shows `origin` points to the GitHub URL. `fetch` is for downloading, `push` is for uploading.

You can have multiple remotes (rarely needed), but `origin` is standard.

## git push: Uploading Your Changes to the Remote

Once you've committed changes, push them to the server:

```bash
git push origin master
```

This uploads commits on `master` to the remote's `master` branch.

For a feature branch:

```bash
git push origin feature/new-login
```

The first time pushing a new branch, you might see:

```
fatal: The current branch feature/new-login has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/new-login
```

This is expected. Use the suggested command:

```bash
git push --set-upstream origin feature/new-login
```

Or the shorthand:

```bash
git push -u origin feature/new-login
```

After this, `git push` (without arguments) will push to `origin/feature/new-login`.

## git pull: Downloading Changes from the Remote

To sync your local branch with the remote:

```bash
git pull origin master
```

This downloads the latest version of `master` from the server and merges it into your local `master`.

`git pull` is actually shorthand for:

```bash
git fetch origin master   # Download changes
git merge origin/master   # Merge them in
```

If the remote has new commits and you have local commits, merging happens. If there are no conflicts, it's automatic.

If the remote has changed and your local has no new commits, it's a "fast-forward" — your branch is simply moved forward.

## Pull Requests / Merge Requests: The Code Review Workflow

This is where collaboration happens. A **pull request** (GitHub term) or **merge request** (GitLab term) is a way to propose changes and get them reviewed before merging.

![Six steps: you commit on a branch, git push sends it to GitHub, you open a pull request, teammates review and approve, it is merged into master, and git pull brings the update back to your machine.](../../diagrams/png/git-remote-pr-flow.png)

*Steps 1 and 6 happen on your computer. Steps 2 to 5 happen where the whole team can see them.*

### The Workflow

1. **Create a feature branch locally:**
   ```bash
   git switch -c feature/user-profiles
   ```

2. **Make commits on your branch:**
   ```bash
   git add profile.js
   git commit -m "Add user profile endpoints"
   ```

3. **Push to the remote:**
   ```bash
   git push -u origin feature/user-profiles
   ```

4. **On GitHub/GitLab, create a pull request:**
   - Navigate to your repository
   - Click "New pull request" or "New merge request"
   - Select your branch as the source, `master` as the target
   - Write a description of your changes
   - Submit the PR

5. **Colleagues review your code:**
   - They see the changes you proposed
   - They can comment on specific lines
   - They can suggest changes
   - They might request changes before approving

6. **Address feedback:**
   - Make additional commits based on feedback
   - Push them to the same branch
   - The PR updates automatically

7. **Get approval:**
   - Once approved, you can merge the PR
   - GitHub/GitLab handles the actual merge

8. **Delete the branch:**
   - After merging, the feature branch is no longer needed
   - Delete it (GitHub offers a button)

### Why Pull Requests Matter

Pull requests are essential for team development because they enable:

- **Code review:** Someone else examines your code before it's merged
- **Discussion:** Questions and suggestions are tied to specific lines
- **Continuous Integration:** Automated tests run on your PR to verify nothing breaks
- **Traceability:** All changes have been reviewed and documented
- **Knowledge sharing:** Reviewers learn what you're doing; you learn from their feedback

Pull requests prevent bugs from reaching production and build code quality into the process.

## Common Mistakes and How to Recover

Mistakes happen. Git provides ways to recover:

### Undoing Uncommitted Changes

You modified a file and regret it:

```bash
git restore users.js
```

This reverts `users.js` to the last committed state. Use carefully — changes are lost.

Or, to see what you're about to lose:

```bash
git diff users.js
```

This shows your changes before restoring.

### Unstaging a Staged File

You staged a file but don't want to commit it yet:

```bash
git restore --staged file.js
```

This removes it from the staging area but keeps your changes. You can stage it later.

### Amending the Last Commit

You committed but want to add a forgotten file or fix the message:

```bash
git add forgottenFile.js
git commit --amend -m "Updated message"
```

This modifies the last commit to include the new file or message. Don't do this if you've already pushed — it rewrites history.

### Reverting a Committed Change

You committed something bad and want to undo it:

```bash
git revert d4e5f6a
```

This creates a new commit that undoes the changes from commit `d4e5f6a`. The history stays intact.

This is preferable to `git reset`, which erases commits from history. `git revert` is safer for shared branches.

### Temporarily Saving Work with `git stash`

You're mid-work on a feature but need to switch branches (to fix a critical bug):

```bash
git stash
```

This saves your uncommitted changes. Your working directory is clean.

Switch branches, fix the bug, commit, and switch back:

```bash
git switch master
# fix bug, commit
git switch feature/your-feature
git stash pop
```

This restores your saved changes. You can continue where you left off.

---

## Real-World Example: Complete Workflow

Here's a realistic example of a day's work using Git:

### Morning: Start a Feature

```bash
# Make sure you're up to date
git switch master
git pull origin master

# Create a feature branch
git switch -c feature/email-notifications

# Modify files
# (editor work)

# Check what changed
git status

# Stage and commit
git add email.js tests.js
git commit -m "Add email notification service"

# Make another change
# (editor work)

git add email.js
git commit -m "Integrate notifications into user signup"

# Push to server
git push -u origin feature/email-notifications
```

### Afternoon: Review and Adjust

On GitHub, you create a pull request. A colleague reviews it and suggests: "Can you add error handling for when the email server is down?"

Back in your terminal:

```bash
# Make the requested change
# (editor work)

git status
git add email.js
git commit -m "Add error handling for SMTP failures"

# Push the new commit
git push origin feature/email-notifications
```

The PR updates automatically. The colleague reviews again and approves.

### End of Day: Merge

On GitHub, you click "Merge pull request." The PR is merged into `master`. GitHub offers to delete the branch — accept it.

Locally:

```bash
# Switch to master and sync
git switch master
git pull origin master

# Clean up local branch
git branch -d feature/email-notifications
```

Your feature is integrated, tested, and documented through the PR. The commit history shows exactly what changed and why.

---

## Bridge from Business: Git and Approval Workflows

Pull requests (code review workflows) parallel approval processes in other contexts:

### Document Approval in Corporations

In many organizations, documents go through approval workflows:

1. Someone drafts a document
2. Colleagues review and comment
3. Changes are made based on feedback
4. Once approved, the document is "published"

Pull requests follow the same pattern:

1. You propose changes in a feature branch
2. Colleagues review the code
3. You make changes based on feedback
4. Once approved, you merge

### Change Control in Manufacturing

Manufacturing often has change control processes:

1. An engineer proposes a change to a process or specification
2. Multiple stakeholders review (operations, quality, cost)
3. The change is discussed and refined
4. Once approved, it's implemented

Again, the principle is similar: changes are reviewed before implementation.

### Medical Peer Review

Before publishing research or implementing a new procedure, medical professionals present their work to peers:

1. Someone proposes a new procedure or study
2. Peers examine the methodology and results
3. Questions and suggestions are discussed
4. Once satisfied, the procedure is adopted or paper is published

The goal in all cases is the same: catch problems early through peer review, improve quality, and distribute knowledge.

---

## Key Takeaways

- **Installation:** Git is available for all major operating systems
- **Configuration:** Set your name and email before committing
- **Daily workflow:** `status` → `add` → `commit` → `push`
- **Branching:** Create branches for features, work independently, merge when done
- **History:** `git log` shows project history; meaningful commit messages matter
- **Remotes:** `push` uploads your changes, `pull` downloads changes from the server
- **Pull requests:** Propose changes, get reviewed, merge after approval
- **Recovery:** Tools exist to undo mistakes — use them wisely
- **The big picture:** Git enables teams to collaborate safely and maintain clear history

---

## Review and Discussion Questions

1. **Configure Git on your machine.** Set your name and email, and verify the configuration. Why is this important?

2. **In the daily workflow section, multiple small commits are shown instead of one big commit.** What advantages does this have for future developers reading the history?

3. **Pull requests involve review by colleagues.** What kinds of things would a code reviewer look for when reviewing your changes?

4. **The `git stash` command temporarily saves work.** When might this be useful in a team environment?

5. **Merge conflicts are described as rare in healthy teams.** What communication or workflow practices help teams avoid conflicts?

6. **Commit messages are described as explaining the "why" not just the "what."** Write a good commit message for a change you might make in your code.

7. **Compare the pull request workflow to approval processes in your previous career.** What are the similarities? What's different about the GitHub/GitLab version?

8. **You made a commit but realized you forgot to include an important file.** How would you fix this using `git commit --amend`?
