# Demo 12: Merge Conflict Resolution

**Module:** IV
**Topic:** Hands-On with Git
**Estimated Time:** 18 minutes
**Related reading:** [Hands-On with Git](../docs/Module-04-SDLC-and-Collaboration/03-hands-on-with-git.md)

## Objective
Students will intentionally create a merge conflict, understand conflict markers, and resolve the conflict manually—building confidence in handling the most common Git challenge they'll face in real projects.

![A merge conflict: master's version and the branch's version of the same line, and the conflict markers Git writes into the file, with each marker explained.](../diagrams/png/git-merge-conflict.png)

*Show this the moment the conflict appears. A conflict is a question, not an error.*

## Setup/Prerequisites
- A Git repository with at least one commit on master (from previous demos)
- Terminal open in the repo directory
- VS Code or another text editor ready
- Understanding of `git switch`, `git merge`, and commit workflows

## Step-by-Step Script

### Part 1: Set Up the Conflict Scenario (3 minutes)

**Talking Point:** "Merge conflicts happen when two branches edit the same part of the same file. Git can't automatically decide which version is correct, so it asks you to choose. This looks scary the first time, but it's totally manageable."

**Talking Point:** "Let's intentionally create a conflict so you can see what it looks like and learn to fix it."

Start by checking your current state:
```bash
git status
```

Ensure you're on master with a clean working tree.

Create a file called `about.txt`:
```
This is the About section.
Our team has been coding since 2020.
We love Python and JavaScript.
Our favorite framework is React.
```

Commit it:
```bash
git add about.txt
git commit -m "Add initial about section"
```

**Talking Point:** "This is our baseline. Now I'm going to create two branches that both edit the same lines. When we try to merge them, Git will complain."

---

### Part 2: Create and Edit Branch 1 (3 minutes)

**Talking Point:** "Let's create the first branch and make changes."

Create a branch:
```bash
git switch -c update/team-since-2019
```

Edit `about.txt`:
```
This is the About section.
Our team has been coding since 2019.
We love Python and JavaScript.
Our favorite framework is React.
```

Notice: we changed "2020" to "2019" on the second line.

Commit:
```bash
git add about.txt
git commit -m "Update team founding year to 2019"
```

Switch back to master:
```bash
git switch master
```

**Talking Point:** "Now we have a commit on `update/team-since-2019` that changes line 2. Let's create a second branch that also changes line 2 in a different way."

---

### Part 3: Create and Edit Branch 2 (3 minutes)

**Talking Point:** "Here's the setup for conflict. I'm creating another branch from master (before we made the 2019 change), and I'm going to edit the same line differently."

Create a new branch:
```bash
git switch -c update/team-location
```

Edit `about.txt`:
```
This is the About section.
Our team has been coding since 2020 in San Francisco.
We love Python and JavaScript.
Our favorite framework is React.
```

Notice: we modified line 2 to add "in San Francisco."

Commit:
```bash
git add about.txt
git commit -m "Add team location to about section"
```

**Talking Point:** "Now we have two branches, each with different edits to line 2. When we try to merge them, Git won't know which version is right. Let's trigger the conflict."

---

### Part 4: Attempt the Merge (2 minutes)

**Talking Point:** "I'm going to merge the first branch into master, then try to merge the second branch. That's where the conflict happens."

Switch back to master:
```bash
git switch master
```

Merge the first branch:
```bash
git merge update/team-since-2019
```

Expected output:
```
Updating 3a4b5c6..7d8e9f0
Fast-forward
 about.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

**Talking Point:** "That merged cleanly. Now master has the '2019' version. Let's try to merge the other branch."

Attempt the second merge:
```bash
git merge update/team-location
```

Expected output:
```
Auto-merging about.txt
CONFLICT (content): Merge conflict in about.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**Talking Point:** "There it is! Git detected a conflict. Let's look at what it did."

---

### Part 5: Examine the Conflict Markers (4 minutes)

**Talking Point:** "Git left conflict markers in the file. These show both versions so you can decide which is right."

Open `about.txt` in your editor:
```
This is the About section.
<<<<<<< HEAD
Our team has been coding since 2019.
=======
Our team has been coding since 2020 in San Francisco.
>>>>>>> update/team-location
We love Python and JavaScript.
Our favorite framework is React.
```

**Talking Point:** "Let me break down what you're seeing:"

**Talking Point:** "The `<<<<<<<` marker shows the start of the conflict. Below that is the version from HEAD—that's the current branch (master). This is the '2019' version."

**Talking Point:** "The `=======` in the middle is the divider. Below it is the incoming version from `update/team-location`—the version we're trying to merge in. This is the '2020 in San Francisco' version."

**Talking Point:** "The `>>>>>>>` marker shows the end of the conflict and names the branch being merged."

**Talking Point:** "Git is saying: 'I see both versions. I don't know which one is right. You decide.' And that's your job."

Check git status:
```bash
git status
```

Expected output:
```
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   about.txt
```

**Talking Point:** "Git is very clear: the merge is incomplete. We have unmerged paths. We need to fix the conflict and then commit."

**Talking Point:** "Notice that second line — `git merge --abort`. Git is telling us there's an undo button. If a conflict ever looks overwhelming, that command puts everything back the way it was before you typed `git merge`. Nothing is stuck. That's worth remembering the first time a conflict scares you."

---

### Part 6: Resolve the Conflict (2 minutes)

**Talking Point:** "How do we fix it? We need to decide what the final version should be. In a real project, you'd talk to your teammate. For this demo, let's keep both pieces of information."

Edit `about.txt` to combine the best of both versions:
```
This is the About section.
Our team has been coding since 2019 in San Francisco.
We love Python and JavaScript.
Our favorite framework is React.
```

**Talking Point:** "I removed the conflict markers and created a version that incorporates both the 2019 founding year and the San Francisco location. This is the resolved version."

Save the file.

---

### Part 7: Complete the Merge (2 minutes)

**Talking Point:** "Now we stage the resolved file and commit. This tells Git that the conflict is fixed."

Stage the resolved file:
```bash
git add about.txt
```

Check status:
```bash
git status
```

Expected output:
```
On branch master
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   about.txt
```

**Talking Point:** "Git confirms: all conflicts are fixed. Now we commit to complete the merge."

Commit:
```bash
git commit -m "Merge update/team-location: combine founding year and location"
```

Expected output:
```
[master 2f3a4b5] Merge update/team-location: combine founding year and location
```

**Talking Point:** "The merge is complete. The conflict is resolved. The history now includes both branches coming together."

Verify the final state:
```bash
git status
```

Expected output:
```
On branch master
nothing to commit, working tree clean
```

Check the final content:
```bash
cat about.txt
```

Shows the resolved version with both "2019" and "San Francisco."

---

### Part 8: View the Merge in the Commit Graph (1 minute)

**Talking Point:** "Let's look at the commit history to see how the branches merged."

```bash
git log --oneline --graph --all
```

Expected output (your hashes will differ):
```
*   2f3a4b5 (HEAD -> master) Merge update/team-location: combine founding year and location
|\
| * 5c6d7e8 (update/team-location) Add team location to about section
* | 7d8e9f0 (update/team-since-2019) Update team founding year to 2019
|/
* 3a4b5c6 Add initial about section
```

**Talking Point:** "Notice the graph shows the two branches diverging and then coming back together at the merge commit. This visualization helps you understand the history."

---

## Key Points to Emphasize

- **Merge conflicts are normal.** They happen when two people (or two branches) edit the same lines. They're not a disaster—they're an opportunity to integrate work carefully.
- **Conflict markers show both versions.** `<<<<<<<` to `=======` is the current branch. `=======` to `>>>>>>>` is the incoming branch. You delete the markers and keep the version(s) you want.
- **Resolve conflicts by editing the file.** Delete the markers, combine the versions intelligently, and save. Then `git add` and `git commit` to complete the merge.
- **Communication matters.** In a real team, you'd talk to the person on the other branch before resolving conflicts. Don't guess—ask what they intended.

---

## Common Questions

**Q: What if there are conflicts in multiple files?**
A: Fix each file by removing conflict markers and resolving the content. Then `git add` all of them. You only commit once, when all conflicts are resolved.

**Q: Can I abort the merge if I realize we should do it differently?**
A: Yes! Run `git merge --abort` to cancel the merge and go back to the state before you started merging. This gives you time to talk to your teammate about the right approach.

**Q: How do I know which version is "right" when there's a conflict?**
A: That's often a human decision, not a technical one. Sometimes you want both versions. Sometimes you want one. Read the context, understand what each branch was trying to do, and make an informed choice. When in doubt, ask the person who wrote the conflicting code.
