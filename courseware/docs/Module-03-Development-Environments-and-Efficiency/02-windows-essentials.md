# Topic 2: Windows Essentials — Command-line Tools, Environment Variables, and Basic Scripting

## Introduction: Why the Command Line Matters in a GUI World

Windows has a graphical user interface (GUI) that most users interact with daily. You point at things, click buttons, and drag files. It's intuitive and approachable. So why, as a programmer, would you ever open a command-line interface (CLI) that looks like it's from 1985?

The answer: the command line is vastly more powerful and efficient than the GUI for many tasks.

Consider organizing your financial reports. You could rename 500 files one by one using a GUI file explorer—a task that would take hours. Or, you could use a command-line tool to rename all 500 files in seconds based on a pattern you specify. You could search for a specific phrase across thousands of files simultaneously. You could automate tasks that run nightly without any human intervention.

Programmers use the command line because:

1. **Speed:** Once you learn the tools, command-line operations are often faster than GUI equivalents
2. **Automation:** You can write scripts to do repetitive work automatically
3. **Power:** Some operations are simply not available through the GUI
4. **Consistency:** Command-line tools work the same way across different machines
5. **Remote work:** If you're working on a server in the cloud, the GUI isn't available—only command line

For programmers, the command line is as essential as a spreadsheet is to accountants. It's not an optional advanced feature; it's a core tool.

## The Command-Line Landscape on Windows

Windows actually has multiple command-line environments, and understanding each helps you choose the right tool for the job.

### Command Prompt (CMD)

The original Windows command line is Command Prompt (also called CMD.EXE). It's been around since the DOS era and it shows its age. The syntax is different from Unix-like systems, and it lacks many modern features.

Example commands in CMD:
```
dir                    # List files in a directory
cd Documents           # Change to the Documents folder
copy file.txt copy.txt # Copy a file
del file.txt          # Delete a file
```

**When to use CMD:** Rarely, in a modern workflow. Most modern tasks are better handled with PowerShell.

### PowerShell

PowerShell is Microsoft's modern command-line framework, released in 2006. It's built on top of the .NET framework and brings modern programming concepts to the command line.

Example commands in PowerShell:
```
Get-ChildItem                              # List files in a directory
Set-Location Documents                      # Change to Documents folder
Copy-Item -Path file.txt -Destination copy.txt  # Copy a file
Remove-Item file.txt                       # Delete a file
```

PowerShell outputs *objects*, not just text. This means you can pipe output from one command to another and work with structured data, not just text strings. This is powerful and aligns with modern programming principles.

**Why PowerShell?** It's the modern, recommended command-line environment for Windows development. If you're learning Windows command-line skills, focus on PowerShell.

**A note on naming:** PowerShell Core (the open-source version) runs on Windows, macOS, and Linux. Windows PowerShell is the original Windows-only version. For modern development, both work, but PowerShell Core is increasingly standard.

### Windows Terminal

Windows Terminal is a modern terminal application—the window that holds the command line. Previously, PowerShell, CMD, and other command-line tools ran in separate, dated-looking windows. Windows Terminal is a single, modern application that can host multiple command-line shells.

**To use Windows Terminal:** Download it from the Microsoft Store or GitHub (it's free and often comes pre-installed on Windows 11).

Windows Terminal is particularly useful because you can:
- Have multiple tabs, each running a different shell
- Run bash/Linux commands via Windows Subsystem for Linux
- Customize colors, fonts, and appearance
- Use modern features like split panes (two command lines side-by-side)

**When you open Windows Terminal, you're probably running PowerShell inside it.** The Terminal is the container; PowerShell is the shell.

## Essential Commands: Navigation and File Management

Let's learn the core commands you'll use constantly. We'll present PowerShell commands, as that's the modern standard.

### Navigating the File System

```
Get-Location                    # Print the current directory (like pwd on Unix)
Set-Location C:\Users\Sarah\Documents   # Change to a specific folder (like cd)
Set-Location ..                 # Move up one folder level
Get-ChildItem                   # List files and folders in current directory (like ls)
Get-ChildItem -Recurse          # List files recursively (including subdirectories)
```

**Real-world scenario:** You open Windows Terminal and want to navigate to your projects folder:

```
Set-Location C:\Users\Sarah\Documents\projects
Get-ChildItem
```

This shows you all the projects in your projects folder.

### Creating and Viewing Files

```
New-Item -Path test.txt -ItemType File      # Create a new empty file
Get-Content myfile.txt                       # Display file contents
Get-Content myfile.txt -TotalCount 20        # Show first 20 lines
Get-Content myfile.txt -Tail 10              # Show last 10 lines
```

### Copying, Moving, and Deleting

```
Copy-Item source.txt destination.txt                    # Copy a file
Copy-Item -Path source.txt -Destination C:\Backup\     # Copy to a folder
Move-Item oldname.txt newname.txt                       # Rename or move a file
Remove-Item oldfile.txt                                 # Delete a file
Remove-Item -Path folder -Recurse                       # Delete a folder and contents
```

**Caution:** `Remove-Item` permanently deletes files. There's no undelete. Be careful, especially when using `-Recurse` (which deletes everything inside a folder).

### Searching and Filtering

```
Get-ChildItem -Filter *.txt                 # List only .txt files
Get-ChildItem -Recurse -Filter *.js         # Find all .js files recursively
Select-String "error" logfile.txt           # Search for "error" in a file
Get-ChildItem -Recurse | Select-String "TODO"  # Search all files for "TODO"
```

### Piping: Connecting Commands

One of PowerShell's powerful features is piping. The pipe (`|`) takes the output of one command and passes it as input to the next. This lets you build sophisticated operations by chaining simple commands.

**Example:** List all `.txt` files larger than 1MB:

```
Get-ChildItem -Recurse -Filter *.txt | Where-Object { $_.Length -gt 1MB }
```

Breaking this down:
- `Get-ChildItem -Recurse -Filter *.txt` finds all `.txt` files
- `|` pipes the results to the next command
- `Where-Object { $_.Length -gt 1MB }` filters to only files larger than 1MB

## Environment Variables: The Configuration that Makes Everything Work

An environment variable is a named value that programs can access. You can think of it like a setting in a program—it's a piece of configuration that programs use.

### Why Environment Variables Matter

When you type a command like `python`, how does the computer know where the Python program is located? When a program needs a database password, where does it get it? When you want multiple versions of a tool installed, how does the computer know which one to use? Environment variables are the answer to these questions.

### Common Environment Variables

**PATH:** The most important environment variable. PATH is a list of folders. When you type a command, the operating system searches through the folders in PATH to find the program.

For example, if PATH includes `C:\Python311\`, then typing `python` will find and run `C:\Python311\python.exe`.

**PYTHONPATH:** Used by Python to know where to find installed libraries

**NODE_PATH:** Used by Node.js to find installed packages

**DATABASE_URL:** A custom variable a program might use to connect to a database

**API_KEY:** A custom variable holding an API key that shouldn't be in your code

### Viewing Environment Variables

In PowerShell:

```
$env:PATH                          # View the PATH variable
$env:PYTHONPATH                    # View PYTHONPATH
Get-ChildItem env:                 # List all environment variables
```

**Understanding PATH:** The PATH variable contains multiple folders separated by semicolons. On Windows, it might look like:

```
C:\Python311;C:\Program Files\Git\cmd;C:\Windows\System32;C:\Users\Sarah\bin
```

When you type `python`, the system searches:
1. `C:\Python311` — found! Run it
2. (if not found, continue to next folder)

### Setting Environment Variables

You can set an environment variable temporarily (just for the current terminal session) or permanently (for all future terminal sessions).

**Temporarily (in current PowerShell session):**

```
$env:MY_VAR = "hello"
$env:MY_VAR                        # This will print "hello"
```

When you close PowerShell, `MY_VAR` disappears.

**Permanently (using the GUI):**

This is where you need to step out to Windows' graphical settings. The fastest reliable route on
Windows 11:
1. Click **Start**, type **"Edit the system environment variables"**, and press Enter — this opens
   the **System Properties** dialog directly
2. On the **Advanced** tab, click the **Environment Variables** button near the bottom
3. Under "User variables" or "System variables", click "New"
4. Enter the variable name and value
5. Click OK
6. **Restart** any open terminals (important!)

You may see older tutorials tell you to right-click **This PC → Properties** first. On Windows 11
that lands you in **Settings → System → About**, which has no Environment Variables button — you'd
still have to click through to "Advanced system settings" from there. The Start-menu search above
skips that detour.

**Why restart?** Programs read environment variables when they start. If you change an environment variable and don't restart your terminal, it won't see the new value.

**In PowerShell (advanced permanent method):**

You can also set variables permanently by editing PowerShell's profile file, but this is more advanced and we won't cover it here.

### A Real-World Scenario

You install Python, but it's not in your PATH. When you type `python`, you get:

```
'python' is not recognized as the name of a cmdlet, function, script file, or operable program.
```

The solution: add Python's installation directory to PATH. After doing this and restarting PowerShell:

```
python --version     # Now this works!
```

## Basic PowerShell Scripting

A script is a text file containing PowerShell commands. Instead of typing commands one by one, you can write them to a file and run the file. This is powerful for automation.

### Creating a Simple Script

1. Open Notepad or your code editor
2. Write PowerShell commands:

```
Write-Host "Starting backup..."
Get-ChildItem -Path C:\Users\Sarah\Documents -Recurse | Measure-Object
Write-Host "Backup complete!"
```

3. Save as `backup.ps1` (the `.ps1` extension means PowerShell Script)

4. Run it in PowerShell:

```
.\backup.ps1
```

(The `.\` means "in the current directory")

### Script Basics: Variables and Loops

**Variables** store values:

```
$name = "Sarah"
$files = Get-ChildItem
Write-Host "Found $($files.Count) files"
```

**If statements** make decisions:

```
$count = (Get-ChildItem).Count

if ($count -gt 100) {
  Write-Host "Lots of files here"
} else {
  Write-Host "Not many files"
}
```

**Loops** repeat actions:

```
$files = Get-ChildItem -Filter *.txt

foreach ($file in $files) {
  Write-Host "Processing $($file.Name)"
}
```

### A Real Script Example

Here's a script that backs up files modified in the last day:

```
$backupFolder = "C:\Backup"
$sourceFolder = "C:\Users\Sarah\Documents"
$oneDayAgo = (Get-Date).AddDays(-1)

# Create backup folder if it doesn't exist
if (!(Test-Path $backupFolder)) {
  New-Item -Path $backupFolder -ItemType Directory
}

# Find and copy files modified in the last day
$recentFiles = Get-ChildItem -Path $sourceFolder -Recurse |
               Where-Object { $_.LastWriteTime -gt $oneDayAgo }

foreach ($file in $recentFiles) {
  Write-Host "Backing up $($file.Name)"
  Copy-Item $file.FullName -Destination $backupFolder
}

Write-Host "Backup complete!"
```

This script:
1. Defines backup and source folders
2. Calculates a date from one day ago
3. Creates the backup folder if it doesn't exist
4. Finds all files modified in the last day
5. Copies them to the backup folder
6. Reports completion

This task would take 30+ minutes manually, but the script does it in seconds.

## Windows Subsystem for Linux (WSL): Bridging Windows and Linux

WSL is one of the most important tools for Windows developers working with modern development stacks. It allows you to run Linux directly on Windows, without a separate virtual machine.

### What is WSL?

WSL is a Microsoft technology that lets you install and run a Linux distribution on Windows. When you're in WSL, you're in a Linux environment with a real Linux kernel, Linux file systems, and Linux tools—all running on Windows.

### Why This Matters

Many development tools were designed for Linux and work best on Linux. If you develop on native Windows, you might encounter issues with:
- File permissions
- Path conventions (forward slashes vs. backslashes)
- Shell scripting (bash vs. PowerShell)
- Container tools (Docker)
- Package managers (npm, pip usually work better on Linux)

WSL solves these problems by letting you develop in a Linux environment while still using Windows as your primary OS.

### Installing WSL

WSL comes built-in on Windows 11 and newer versions. On Windows 10, you can enable it manually:

```
wsl --install
```

This command installs WSL and Ubuntu by default.

### Using WSL

Once installed, you can open an Ubuntu terminal from Windows Terminal. You'll then have a Linux command line:

```
cd /home/sarah/projects
ls -la
bash
```

You're now in a Linux bash shell, not PowerShell. The commands are Linux commands, not PowerShell commands.

### WSL vs. Native Windows

- **Develop in WSL:** Use Linux tools, bash scripts, and containerized development
- **Run native Windows apps from WSL:** You can still use Windows applications like VS Code
- **Access Windows files from WSL:** Your Windows `C:\Users\` folder is accessible at `/mnt/c/Users/` in WSL

This integration is quite elegant: you can develop with Linux tools and simultaneously use Windows applications.

## File Permissions and User Accounts on Windows

Windows uses a permission system to control who can read, write, and execute files.

### Users and Groups

Every Windows computer has multiple users. Each user has:
- A username
- A home directory (`C:\Users\username\`)
- Permissions (what they can read, write, execute)

Groups are collections of users. For example, the "Administrators" group has full system access, while regular users have limited access.

### Permission Model

Windows uses Access Control Lists (ACLs) to define permissions. You can right-click a file, go to Properties → Security, and see (and modify) detailed permissions:

- **Read:** Can open and view the file
- **Write:** Can modify the file
- **Execute:** Can run the file (for programs)
- **Delete:** Can delete the file
- **Full Control:** Complete access

**For development:** Usually, your user account has sufficient permissions. You might occasionally need admin access to:
- Install system-wide software
- Modify Windows system files
- Access protected directories

If a command fails with "Access Denied," you might need to run PowerShell as Administrator:
1. Right-click Windows Terminal or PowerShell
2. Select "Run as administrator"
3. Click "Yes" in the User Account Control prompt

## Installing Software for Development: Package Managers

Historically, installing software on Windows meant:
1. Visit the vendor's website
2. Download an installer (`.exe` or `.msi` file)
3. Click through an installation wizard
4. Restart your computer

This is slow and tedious. Package managers automate this process.

### What is a Package Manager?

A package manager is a tool that automatically downloads, installs, configures, and manages software. One command installs a program and all its dependencies.

### winget: Windows Package Manager

Windows includes `winget` (Windows Package Manager), built into Windows 11 and installable on Windows 10. It's like a built-in app store for command-line tools.

```
winget install python                  # Install Python
winget install nodejs                  # Install Node.js
winget install git                     # Install Git
winget install microsoft.vscode        # Install VS Code
```

The program is downloaded, installed, and ready to use—often without restarting.

### Chocolatey: The Community Alternative

Chocolatey is a community-maintained package manager for Windows. Before winget existed, Chocolatey was the standard.

To install Chocolatey, you run a PowerShell script (from the Chocolatey website). Then:

```
choco install python
choco install nodejs
choco install git
```

**winget vs. Chocolatey:** winget is Microsoft's official tool and is built into newer Windows versions. Chocolatey is community-driven and has more packages. Most modern development can be done with winget.

### Real-World Scenario

You're setting up a new computer for web development. Instead of:
1. Download Python installer, run it, click through wizards (5 min)
2. Download Node.js installer, run it, click through wizards (5 min)
3. Download Git installer, run it, click through wizards (5 min)
4. Download VS Code, install, configure (10 min)
5. Total: 25+ minutes

You instead run one command per tool, using each package's exact ID:

```
winget install Python.Python.3.12
winget install OpenJS.NodeJS
winget install Git.Git
winget install Microsoft.VisualStudioCode
```

(`winget` installs one package per command, so you run these four in sequence—often just a few seconds each. Using the full package ID, like `Python.Python.3.12`, avoids ambiguity when several packages share a similar name.)

In a few minutes, everything is installed—no wizards to click through. The difference compounds over a career.

## A Bridge from Your Business Experience

In your previous career, you've likely managed software systems. In enterprise environments, you might have used:

- **ERP systems** with command-line utilities for administration and data loading
- **Database systems** with command-line tools for querying and maintenance
- **Reporting systems** with automation capabilities
- **Cloud platforms** (AWS, Azure) accessed primarily through the command line

The Windows command line and scripting concepts are the same tools those systems use. Just as you learned to automate reporting processes or data loads, you'll learn to automate development tasks.

Similarly, package managers are like software licensing and distribution systems you've encountered. Instead of hunting for individual installers, you use a centralized system that manages versions and dependencies. This is familiar to IT and operations professionals.

## Key Takeaways

1. The command line is essential for modern programming, offering speed, power, and automation capabilities
2. PowerShell is the modern Windows command-line environment; CMD is legacy
3. Windows Terminal is the modern terminal application that hosts PowerShell and other shells
4. Essential commands for file navigation, creation, deletion, and searching form the foundation of command-line work
5. Environment variables are named values that configure how programs behave; PATH is the most important
6. PowerShell scripting automates repetitive tasks and enables complex operations
7. Windows Subsystem for Linux brings Linux tools and environments to Windows, essential for modern development
8. File permissions and user accounts control access to files and system resources
9. Package managers like winget automate software installation and configuration
10. These Windows development tools have equivalents and parallels to systems you've likely used in your previous career

---

## Review and Discussion Questions

1. **Why the Command Line?** A colleague says, "I can do everything I need through Windows File Explorer and the GUI. Why bother with the command line?" How would you respond? What tasks are genuinely easier on the command line?

2. **PATH and Dependencies:** You install Python, but when you type `python`, you get "command not found." Explain what PATH is, why this error occurred, and how to fix it. Why does this matter for development?

3. **Environment Variables in Real Development:** You're joining a team that develops web applications. The team lead says, "Save your database connection string as an environment variable, not in your code." Why is this a best practice? What risks does it mitigate?

4. **Scripting for Automation:** You have 200 project folders, each containing a `config.txt` file that needs to be updated with the same new setting. Would you edit each file manually or write a PowerShell script? Why? What would the script do?

5. **WSL as a Bridge:** Why might Microsoft create WSL (Windows Subsystem for Linux)? What developers does it target? What problems does it solve for Windows developers?

6. **Your Workflow:** Based on what you've learned about Windows command-line tools, package managers, and WSL, sketch out how you would set up a new Windows computer for development. What would you install first? What would you configure?

---

**Next: [Text Editors and IDEs](03-text-editors-and-ides.md)**
