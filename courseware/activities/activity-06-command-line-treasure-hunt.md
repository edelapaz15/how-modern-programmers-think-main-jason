# Activity 06: Command-Line Treasure Hunt

**Module:** III (Development Environments)
**Related reading:** [Windows Essentials](../docs/Module-03-Development-Environments-and-Efficiency/02-windows-essentials.md)

---

## Objective

By the end of this activity, you will confidently navigate your file system using the command line, create a realistic project directory structure, and understand how developers organize their work before writing a single line of code.

---

## Background

Modern programmers spend a significant portion of their day in the command line (Terminal on Mac/Linux, PowerShell or Command Prompt on Windows). While graphical file managers exist, the command line offers speed, precision, and scriptability that developers rely on daily.

In this activity, you'll take on the role of setting up a project workspace—something you'll do repeatedly throughout your career. The "treasure hunt" metaphor transforms this practical skill into a guided exploration. You're not just learning commands; you're learning *why* developers organize their projects in specific, intentional ways.

---

## Instructions

**Before You Start:** Open your terminal or command prompt. If you're using Windows, PowerShell is recommended over Command Prompt (it's more powerful). If you're on Mac or Linux, use Terminal.

**Pro Tip:** When a step says "use the command to...", you should look up the command if you don't know it. For example, "navigate to a directory" typically uses `cd`. Searching "how to navigate directories in [your OS]" is a real skill—developers do this constantly.

### The Treasure Hunt: Project Alpha Setup

**Task 1: Navigate Home**
Move to your home directory. (Hint: On Mac/Linux, this is often `~` or `/home/yourusername`. On Windows PowerShell, it's `~` as well.)

**Task 2: Create the Main Project Folder**
Create a new folder called `project-alpha` in your home directory. This will be your project's root.

**Task 3: Navigate Into Your Project**
Move into the `project-alpha` folder you just created.

**Task 4: Build the Directory Structure**
Create three subfolders inside `project-alpha`:
- `src` (source code goes here)
- `docs` (documentation)
- `tests` (automated tests)

Hint: You might create these one at a time, or you could create all three in a single command. (Advanced: search "create multiple directories at once".)

**Task 5: Create a README File**
Create a file called `README.md` in the root of `project-alpha`. This file will be seen first when someone opens your project. (Hint: Use `touch` on Mac/Linux, or `New-Item` on PowerShell.)

**Task 6: Create Source Files**
Create these files inside the `src` folder:
- `main.py`
- `utils.py`
- `config.json`

Navigate into `src`, create the files, and return to the project root.

**Task 7: Create a Tests File**
Create a file called `test_main.py` inside the `tests` folder.

**Task 8: Create a .gitignore File**
In the root of `project-alpha`, create a `.gitignore` file. (This tells Git which files to ignore—you'll learn more about this soon.) Leave it empty for now.

**Task 9: List Your Complete Structure**
From the root of `project-alpha`, list the contents recursively to see your entire directory tree — **folders and files**. (Hint: On Windows PowerShell, try `Get-ChildItem -Recurse` or `tree /F`. On Mac/Linux, try `find .` or `tree`.)

> Note: On Windows, plain `tree` shows **folders only** — your files won't appear, which isn't enough for the deliverable below. Add the `/F` switch (`tree /F`) to include files. On macOS, `tree` is **not** installed by default (install it with Homebrew: `brew install tree`). `Get-ChildItem -Recurse` (Windows PowerShell) and `find .` (Mac/Linux) need no switches and list everything.

**Task 10: Check Your Environment**
View your system's PATH variable. This tells your computer where to find executable programs.
- On Mac/Linux: `echo $PATH`
- On Windows PowerShell: `$env:Path`

**Task 11: Confirm File Locations**
Use the `pwd` (print working directory) command to confirm you're in the right place, and use `ls` (Mac/Linux) or `dir` (Windows) to verify all files exist.

**Task 12: Create a Summary**
Create a file called `SETUP-LOG.txt` in the root of `project-alpha` and add a single line: "Project Alpha directory structure initialized on [today's date]." Use the date command to insert today's date. (Hint: `date` on Mac/Linux, `Get-Date` on Windows PowerShell.)

---

## Expected Deliverable

Take a screenshot of your command-line window showing the complete directory structure of `project-alpha`. The screenshot should clearly show:
- The folder path (via `pwd` or `cd` confirmation)
- A recursive list of all folders and files you created
- Evidence of at least one of your files containing the expected content

Save this screenshot as `project-alpha-setup-complete.png` and keep it for your portfolio.

---

## Reflection Questions

1. **Why Structure Matters:** Why do you think developers create separate folders for `src`, `docs`, and `tests` instead of keeping everything in one folder? What problems might arise if they didn't organize this way?

2. **Command-Line Confidence:** Which command was most unfamiliar to you when you started? How did it feel to search for it, try it, and get it right?

3. **Real-World Application:** Imagine you're starting a new web development project next week. What directory structure might you need, and how would you create it differently than Project Alpha?

---

## Tips for Success

- **Don't panic if you make a mistake.** You can delete a folder with `rmdir` (empty folder) or `rm -r` (with contents). Use carefully!
- **Tab completion is your friend.** Press Tab while typing a file or folder name to auto-complete it. This is a massive time-saver.
- **Take notes.** Write down the commands you learn. You'll use them again, and repetition builds muscle memory.
- **Experiment.** After completing the treasure hunt, try creating another project structure. Play with it.

Good luck, and welcome to the command line!
