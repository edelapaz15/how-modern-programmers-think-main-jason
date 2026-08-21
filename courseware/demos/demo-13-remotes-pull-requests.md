# Demo 13: Remotes and Pull Requests

**Module:** IV
**Topic:** Hands-On with Git
**Estimated Time:** 18 minutes
**Related reading:** [Hands-On with Git](../docs/Module-04-SDLC-and-Collaboration/03-hands-on-with-git.md)

## Objective
Students will push their local work to GitHub, create a pull request, understand the peer review process, and learn to protect the master branch through collaborative workflows.

![Six steps from a local commit through git push, a pull request, review and merge, back to git pull on your machine.](../diagrams/png/git-remote-pr-flow.png)

*Point at the step you are on as you go. It is the fastest way to keep the room oriented.*

## Setup/Prerequisites

> **This demo is performed by the instructor; students watch.** Everything below is *your* setup, not
> theirs. Students do not create repositories or push code at any point in this course — their Git work
> (Activity 8, Activity 20) is entirely local. Nobody in the room needs push authentication except you.

- A Git repository with several commits (from previous demos)
- GitHub account created and logged in
- Git configured with GitHub credentials (via SSH or HTTPS)
- Terminal open in the repo directory
- A web browser open to GitHub
- VS Code or another text editor ready

## Step-by-Step Script

### Part 1: Check Remote Configuration (2 minutes)

**Talking Point:** "So far, we've been working locally on our machine. Git is great for that, but collaboration happens when we push our work to a central place. That's where remotes come in."

**Talking Point:** "A remote is a reference to a repository somewhere else—usually on GitHub, GitLab, or another server. It's how your local repo stays connected to the team's shared repository."

Check your current remotes:
```bash
git remote -v
```

Expected output (probably empty or showing a prior remote):
```
(no output if no remote is configured)
```

or if one exists:
```
origin  https://github.com/your-username/your-repo.git (fetch)
origin  https://github.com/your-username/your-repo.git (push)
```

**Talking Point:** "If there's no output, we haven't connected to a remote yet. Let's do that now. If there's already a remote, that's because you cloned a repo or added it earlier."

---

### Part 2: Create a Remote Repository on GitHub (3 minutes)

**Talking Point:** "I'm going to open GitHub and create a new repository to serve as our central repository. This is where the whole team will push and pull from."

Open GitHub in your browser and navigate to your profile.

Click "New repository" (usually visible in the top-right corner or in a sidebar).

Fill in the details:
- Repository name: `my-first-project` (or match your local folder name)
- Description: "Demo project for Git course"
- Public (for simplicity in this demo)
- Do NOT initialize with a README, .gitignore, or license (we're pushing existing code)

Click "Create repository."

**Talking Point:** "GitHub shows us instructions for connecting an existing repository. Let's follow those steps."

---

### Part 3: Add the Remote and Push (4 minutes)

**Talking Point:** "We're going to tell our local Git repo about the GitHub repository. Then we'll push our commits up."

Back in your terminal, add the remote:
```bash
git remote add origin https://github.com/your-username/my-first-project.git
```

(Replace `your-username` with your actual GitHub username.)

Verify:
```bash
git remote -v
```

Expected output:
```
origin  https://github.com/your-username/my-first-project.git (fetch)
origin  https://github.com/your-username/my-first-project.git (push)
```

**Talking Point:** "We named the remote 'origin.' That's a Git convention. It's usually the canonical repository everyone works from. You can have multiple remotes (e.g., 'upstream' and 'origin' if you're contributing to open source), but 'origin' is the standard."

Now push your master branch:
```bash
git push -u origin master
```

**Talking Point:** "Heads up—on Windows, the very first time you push to GitHub, Git Credential Manager pops open a browser window asking you to sign in to GitHub and authorize the connection (OAuth). This is normal. It can take a minute or two, and the terminal will appear to hang while it waits. Complete the sign-in in the browser, and the push continues automatically. After this first time, your credentials are cached and pushes are instant."

**Talking Point:** "The `-u` flag sets up tracking. After this, your local master branch is linked to the remote master. You can just run `git push` next time without specifying the remote and branch."

Expected output:
```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using 2 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (15/15), ...
To https://github.com/your-username/my-first-project.git
 * [new branch]      master -> master
```

**Talking Point:** "Your commits are now on GitHub! Let's verify in the browser."

---

### Part 4: Create a Feature Branch and Push It (3 minutes)

**Talking Point:** "In a real workflow, you'd never commit directly to master on a shared repository. Instead, you'd work on a feature branch, push it, and create a pull request for others to review."

Create a new branch:
```bash
git switch -c feature/add-contact-info
```

Create a new file, `contact.html`:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Contact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Contact Us</h1>
    <p>Email: hello@myproject.com</p>
    <p>Phone: 555-0123</p>
    <a href="index.html">Back to Home</a>
</body>
</html>
```

Commit:
```bash
git add contact.html
git commit -m "Add contact page with email and phone"
```

Push the branch to GitHub:
```bash
git push -u origin feature/add-contact-info
```

**Talking Point:** "Notice we're pushing `feature/add-contact-info`, not master. This branch stays separate on GitHub until we decide to merge it in. This is the key to safe collaboration."

---

### Part 5: Create a Pull Request (4 minutes)

**Talking Point:** "Now we're going to GitHub to create a pull request. A pull request is a request to merge your branch into master. It's where code review happens."

Go to GitHub in your browser and refresh the repository page.

**Talking Point:** "You should see a yellow banner offering to create a pull request for the branch you just pushed."

Click "Compare & pull request" (or navigate to the "Pull requests" tab and click "New pull request").

Fill in the PR details:
- **Title:** "Add contact page"
- **Description:**
  ```
  This PR adds a contact page with email and phone number.

  Changes:
  - Created contact.html
  - Includes links back to home page

  Closes #1 (if you had an issue)
  ```

**Talking Point:** "The title should be concise. The description explains what you changed and why. This is where reviewers understand your intent."

Click "Create pull request."

**Talking Point:** "Your PR is now live! In a real team, people would review it, comment on it, request changes, etc. Let's look at what GitHub shows us."

---

### Part 6: Review the PR on GitHub (2 minutes)

**Talking Point:** "Let's explore what's visible on the PR page. This is where collaboration happens."

Point out these elements on the PR page:
- **Conversation tab:** Where people comment and discuss
- **Commits tab:** Shows all commits in the PR. Click it to see the commit message and changes.
- **Files changed tab:** Shows the diff. Reviewers can comment on specific lines here.
- **Merge button:** Usually labeled "Merge pull request." This is how code gets into master.

**Talking Point:** "In a real team, a colleague would review this PR. They might say 'Looks good!' or 'Can you add an address too?' Right now, you're the reviewer. Since you trust yourself, you can merge it. But in a team, a second pair of eyes is crucial."

Click "Files changed" to see the diff:
```html
+ <!DOCTYPE html>
+ <html>
+ <head>
+     <title>Contact</title>
+     <link rel="stylesheet" href="style.css">
+ </head>
+ <body>
+     <h1>Contact Us</h1>
+     <p>Email: hello@myproject.com</p>
+     <p>Phone: 555-0123</p>
+     <a href="index.html">Back to Home</a>
+ </body>
+ </html>
```

**Talking Point:** "GitHub shows the additions in green. If we'd deleted lines, they'd be in red. This makes it easy to scan what changed."

---

### Part 7: Merge the PR and Update Local (2 minutes)

**Talking Point:** "Let's merge this PR. Once we do, the branch gets merged into master on GitHub."

Go back to the "Conversation" tab of the PR.

Click "Merge pull request."

Choose "Create a merge commit" (the default).

Click "Confirm merge."

**Talking Point:** "Done! The branch is merged into master on GitHub. But our local repository doesn't know about this yet. We need to pull the changes from GitHub to stay in sync."

Back in the terminal:
```bash
git switch master
git pull origin master
```

Expected output:
```
remote: Enumerating objects: 3, done.
...
Fast-forward
 contact.html | 13 +++++++++++++
 1 file changed, 13 insertions(+)
 create mode 100644 contact.html
```

**Talking Point:** "Now our local master includes the merged PR. We're in sync with GitHub. This is the rhythm of team development: push branches, create PRs, review, merge, pull."

---

### Part 8: Mention .gitignore (2 minutes)

**Talking Point:** "One more important topic: `.gitignore`. When you push to GitHub, you don't want to push everything. Some files are private, some are generated, some are just clutter."

Create a `.gitignore` file:
```
# Operating System
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Dependencies
node_modules/

# Environment variables
.env
.env.local

# Logs
*.log

# Build artifacts
dist/
build/
```

**Talking Point:** "This file tells Git to ignore certain files. Let's add a few common entries."

Commit it:
```bash
git add .gitignore
git commit -m "Add gitignore with common entries"
git push origin master
```

**Talking Point:** "By committing `.gitignore` and pushing it, everyone on the team gets the same ignored files. It keeps the repository clean and prevents accidental commits of secrets or dependencies."

---

## Key Points to Emphasize

- **Remotes connect local repos to shared repositories.** `git remote add` establishes the connection. `git push` sends your commits. `git pull` brings in others' work.
- **Branches are for features, pull requests are for review.** Push your feature branch, create a PR, get feedback, merge when ready. Master stays stable.
- **Pull requests are collaboration.** They're not just a technical step—they're where code review, discussion, and learning happen.
- **`.gitignore` keeps repos clean.** Ignore generated files, dependencies, secrets, and OS files. Commit and share `.gitignore` so everyone's on the same page.

---

## Common Questions

**Q: Why do I need to `git pull` after merging a PR on GitHub?**
A: Because the PR was merged on GitHub (the remote), but your local machine doesn't know about it yet. `git pull` fetches the merged version and updates your local master. Without it, you'd be out of sync.

**Q: Can I delete the feature branch after merging the PR?**
A: Absolutely! In fact, GitHub offers a button to delete the branch right after merging. The branch is no longer needed—all its commits are in master. Cleaning up keeps your repository tidy.

**Q: What if someone else pushed to master while I was working on my feature branch?**
A: No problem. When you push your feature branch, it doesn't conflict with master. When you create the PR and merge it, Git handles the combination. If there are conflicts (like in Demo 12), you resolve them before merging.
