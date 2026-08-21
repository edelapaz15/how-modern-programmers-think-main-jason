# Demo 1: PowerShell Navigation and File Management

**Module:** III
**Topic:** Windows Essentials
**Estimated Time:** 15 minutes
**Related reading:** [Windows Essentials](../docs/Module-03-Development-Environments-and-Efficiency/02-windows-essentials.md)

## Objective
Demonstrate fundamental PowerShell navigation and file management commands so students understand how to move through the filesystem, inspect contents, and organize project structures using the command line.

## Setup/Prerequisites
- Windows system with PowerShell 5.1+ installed (or PowerShell 7+)
- A clean working directory where you can create demo folders (e.g., `C:\demo` or your Documents folder)
- VS Code or Notepad for creating sample files (optional but helpful)

---

## Step-by-Step Script

### Section 1: Opening PowerShell (1 minute)

1. **Open the Start menu** (press the Windows key) and type `PowerShell`
2. **Click "Windows PowerShell"** in the results to open it
   - **Tip:** You can also press **Win+X** and choose **"Windows PowerShell"** (or **"Terminal"** on Windows 11) from the menu that appears.
3. **Explain what you see:**
   - "This is PowerShell, Microsoft's modern command-line interface. It's more powerful than the old `cmd.exe` because it works with objects instead of just text."
   - Point to the prompt: `PS C:\Users\YourName>`
   - "The prompt tells us our current location. We're starting in our user home directory."

### Section 2: Navigation with Set-Location and Get-ChildItem (3 minutes)

4. **Type the following command:**
   ```powershell
   Get-ChildItem
   ```
   - **Explain:** "This command lists everything in the current folder — both folders and files."
   - "Notice the Mode column: `d` means directory, `a` means archive (regular file)."
   - Point out file sizes and last modified dates.

5. **Move to a specific folder. Type:**
   ```powershell
   Set-Location -Path "Documents"
   ```
   - **Talk point:** "Set-Location is like the `cd` command in other shells. We're now inside the Documents folder."
   - Notice the prompt changed to `PS C:\Users\YourName\Documents>`

6. **List the contents again:**
   ```powershell
   Get-ChildItem
   ```
   - **Explain:** "You can see what's in your Documents folder now. This shows us what we're working with."

### Section 3: Creating a Project Folder Structure (3 minutes)

7. **Create a new directory called `my-first-project`:**
   ```powershell
   New-Item -ItemType Directory -Name "my-first-project"
   ```
   - **Talk point:** "New-Item is the PowerShell way to create files or folders. We specify `-ItemType Directory` because we want a folder, and `-Name` is the folder name."

8. **Navigate into that folder:**
   ```powershell
   Set-Location -Path "my-first-project"
   ```

9. **Create a nested folder structure for a typical project:**
   ```powershell
   New-Item -ItemType Directory -Name "src"
   New-Item -ItemType Directory -Name "tests"
   New-Item -ItemType Directory -Name "docs"
   ```
   - **Explain:** "Many projects have a standard folder layout: `src` for source code, `tests` for test files, and `docs` for documentation."

10. **List everything we created:**
    ```powershell
    Get-ChildItem
    ```

### Section 4: Creating and Moving Files (2 minutes)

11. **Create a sample file using New-Item:**
    ```powershell
    New-Item -ItemType File -Name "README.md"
    ```
    - **Talk point:** "We're creating a file called `README.md` — this is standard in every project as a guide for users."

12. **Create another file:**
    ```powershell
    New-Item -ItemType File -Name "index.js"
    ```

13. **Now copy a file to the `src` folder:**
    ```powershell
    Copy-Item -Path "index.js" -Destination "src\index.js"
    ```
    - **Explain:** "Copy-Item copies files. We're taking `index.js` and putting a copy inside the `src` folder."

14. **Move a file (same as cut and paste):**
    ```powershell
    Move-Item -Path "index.js" -Destination "docs\index.js"
    ```
    - **Talk point:** "Move-Item is different from Copy-Item — it removes the original file from the current directory. Perfect for organizing your work."

15. **Delete a file you don't need:**
    ```powershell
    Remove-Item -Path "docs\index.js"
    ```
    - **Warning:** "Be careful with Remove-Item — deleted files are gone. There's no undo button in PowerShell!"

### Section 5: Tab Completion and Finding Content (2 minutes)

16. **Demonstrate tab completion:**
    - Type: `Set-Location -Path "src`
    - **Press Tab**
    - **Explain:** "PowerShell completed the path for us! Tab completion saves typing and prevents typos. Most modern terminals have this feature."

17. **Search inside files with Select-String:**
    - First, navigate back: `Set-Location ..`
    - Create a sample file with content:
      ```powershell
      "Hello World" | Out-File -FilePath "sample.txt"
      "Goodbye World" | Out-File -FilePath "sample.txt" -Append
      ```
    - Now search for "World":
      ```powershell
      Select-String -Path "sample.txt" -Pattern "World"
      ```
    - **Output will show:** `sample.txt:1:Hello World` and `sample.txt:2:Goodbye World`
    - **Talk point:** "Select-String is like grep in Unix. It searches for text patterns inside files — super useful when you're trying to find where something is defined in your code."

---

## Key Points to Emphasize

- **PowerShell is object-oriented:** Unlike some command-line tools that just return text, PowerShell returns objects with properties. This makes it more powerful for automation.
- **Command naming is consistent:** All PowerShell commands follow a Verb-Noun pattern (Get-ChildItem, Set-Location, New-Item). This makes them easier to remember and guess.
- **Tab completion is your friend:** Always use Tab to autocomplete paths and command names. It speeds up work and reduces typos.
- **Understand your file structure:** Before you start coding, create a logical folder structure. This keeps projects organized as they grow larger.

---

## Common Questions

**Q: Can I use the short names like `cd` and `ls` instead of `Set-Location` and `Get-ChildItem`?**
A: Yes! PowerShell allows aliases. `cd` and `ls` work, but learning the full names first helps you understand what's happening. Once you're comfortable, use whatever is faster for you.

**Q: What's the difference between `Copy-Item` and `Move-Item`?**
A: Copy creates a duplicate and leaves the original in place. Move transfers ownership and removes it from the original location. Think of it like copy-paste vs. cut-paste.

**Q: Is Select-String the only way to search inside files?**
A: It's the built-in PowerShell way. You could also use `findstr` (older) or other tools, but Select-String integrates nicely with PowerShell's object pipeline, making it the professional choice.
