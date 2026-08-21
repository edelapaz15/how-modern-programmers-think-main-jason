# Demo 3: Windows Terminal and WSL (Windows Subsystem for Linux)

**Module:** III
**Topic:** Windows Essentials
**Estimated Time:** 13 minutes
**Related reading:** [Windows Essentials](../docs/Module-03-Development-Environments-and-Efficiency/02-windows-essentials.md)

## Objective
Introduce students to Windows Terminal as a modern unified command-line experience and demonstrate WSL as a way to run Linux commands directly on Windows, showing the power of having both environments available and how to access Windows files from within Linux.

## Setup/Prerequisites
- Windows 10 (version 2004+) or Windows 11
- Windows Terminal (ships built-in and is the default terminal on Windows 11, so installation is usually unnecessary; on Windows 10 install it from the Microsoft Store or with `winget install microsoft.windowsterminal`)
- WSL 2 installed with a Linux distribution (typically Ubuntu) — `wsl --install` from PowerShell as admin — **on the instructor machine only for this delivery; see the note below**
- A few files in your Windows Documents folder for demonstration

> ### ⚠️ Current cohort only: WSL is **not** on the student machines — Sections 2–3 are projected
>
> **This demo normally runs hands-on**, with students working in the Linux shell themselves — that's how it's written, and how it should run whenever the VMs have WSL.
>
> **For the current cohort only, the VMs were built without WSL and it isn't being retrofitted** (see [SETUP_STUDENT_MACHINE.md](../setup/SETUP_STUDENT_MACHINE.md)). Do **not** ask this room to follow along in a Linux shell — they can't, and finding that out live costs you the demo.
>
> Deliver it this way instead:
>
> | Section | This delivery |
> |---|---|
> | 1 — Windows Terminal tour | **Students follow along.** Everything but the Ubuntu tab (step 3) works on their machines. |
> | 2 — Linux commands | **Projected on your machine.** Say plainly: "watch this one, don't type." |
> | 3 — Windows files from WSL | **Projected on your machine.** |
> | 4 — winget | **Students follow along.** Pure PowerShell, no WSL. |
> | 5 — Summary / tab switching | **Projected** for the tab-switching motion; the takeaways are discussion. |
>
> **Before you start, check which distro `wsl` opens.** If you use podman or Docker Desktop, a
> `podman-machine-default` or `docker-desktop` distro may be registered *ahead of Ubuntu* as your
> default — in which case a bare `wsl` drops you into a container VM with an unfamiliar prompt and no
> home directory, in front of the room. Verify and pin it:
>
> ```powershell
> wsl --list --verbose        # confirm Ubuntu is present; note which distro has the *
> wsl -d Ubuntu               # always launch Ubuntu explicitly
> ```
>
> In Windows Terminal, pick **Ubuntu** from the dropdown by name (step 3) rather than trusting the default profile.
>
> **Frame the switch honestly** — it's a teaching moment, not an apology: *"Linux isn't installed on your VMs this week, so watch rather than type. What matters isn't the commands — it's that the same machine can run two operating systems at once, and that professionals move between them constantly."* Then flag that Section 4's `winget` work **is** hands-on, so they know when to put hands back on keyboards.

---

## Step-by-Step Script

### Section 1: Opening and Touring Windows Terminal (2 minutes)

1. **Open Windows Terminal:**
   - Search for **"Windows Terminal"** in the Start menu
   - **Click to open it**
   - **Explain:** "Windows Terminal is Microsoft's modern command-line experience. It replaces the old cmd.exe and puts PowerShell front and center. It's lightweight, fast, and beautiful."

2. **Point out the interface:**
   - **Tab bar at the top:** "Each tab can be a different shell — PowerShell, Command Prompt, or WSL."
   - **The current shell prompt:** "Notice we're in PowerShell by default."
   - **Menu (down arrow icon):** "Here we can switch between different shells, create new tabs, or change settings."

3. **Open a new tab with WSL:**
   - **Click the down arrow** (or `Ctrl+Shift+2` if the keyboard shortcut is set)
   - **Select "Ubuntu"** (or your installed Linux distribution)
   - **A new tab opens** showing the Linux prompt (usually `user@computer:~$`)
   - **Explain:** "Now we're in Linux! WSL lets us run a real Linux environment on Windows. The same tools Linux developers use are available right here."

### Section 2: Basic Linux Commands in WSL (3 minutes)

4. **List files in the current directory:**
   ```bash
   ls
   ```
   - **Output:** A list of folders and files (similar to Get-ChildItem in PowerShell)
   - **Explain:** "`ls` is the Linux equivalent of Get-ChildItem. It lists directory contents."

5. **Print the current working directory:**
   ```bash
   pwd
   ```
   - **Output:** Something like `/home/username`
   - **Talk point:** "`pwd` stands for 'print working directory.' On Linux, paths use forward slashes (`/`), not backslashes."

6. **View the contents of a file:**
   - First, let's create a sample file:
     ```bash
     echo "Hello from Linux!" > hello.txt
     ```
   - Now read it:
     ```bash
     cat hello.txt
     ```
   - **Output:** `Hello from Linux!`
   - **Explain:** "`cat` displays file contents. It's a common tool for quickly viewing files without opening an editor."

7. **Navigate using Linux path syntax:**
   ```bash
   cd /home
   ls
   pwd
   ```
   - **Talk point:** "Notice the forward slashes. Linux paths always use `/` instead of `\`. It's just a convention difference."

### Section 3: Accessing Windows Files from WSL (3 minutes)

8. **The magic: accessing Windows from Linux:**
   - Navigate to the Windows file system:
     ```bash
     cd /mnt/c/Users
     ```
   - **Explain:** "WSL mounts your Windows C: drive at `/mnt/c`. This gives us access to all Windows files from within Linux!"

9. **List your Documents folder:**
   ```bash
   ls /mnt/c/Users/YourUsername/Documents
   ```
   - **Replace `YourUsername` with your actual username**
   - **Talk point:** "We're now looking at the Windows Documents folder using Linux commands. This is incredibly powerful — you can work with Windows files using Linux tools."

10. **Navigate to your Documents:**
    ```bash
    cd /mnt/c/Users/YourUsername/Documents
    pwd
    ls
    ```
    - **Explain:** "We're in Windows' Documents folder, but accessed through the Linux filesystem. Both worlds are accessible."

11. **Create a file in Windows from Linux:**
    ```bash
    echo "Created from Linux!" > my-windows-file.txt
    ```

12. **Go back to the PowerShell tab and verify the file exists:**
    - **Click the PowerShell tab** at the top
    - **Type:**
      ```powershell
      Get-ChildItem -Path "Documents" | Where-Object { $_.Name -like "*windows-file*" }
      ```
    - **Or simply:**
      ```powershell
      ls Documents/my-windows-file.txt
      ```
    - **Output:** The file appears in Windows!
    - **Talk point:** "This demonstrates seamless interoperability. We created a file from Linux, but Windows sees it immediately. They share the same filesystem."

### Section 4: Installing Dev Tools with winget (2 minutes)

13. **Go back to the PowerShell tab**
    - **Click the PowerShell tab**

14. **Show winget (Windows Package Manager):**
    - **Explain:** "`winget` is like `apt` on Linux or `npm` for Node packages — it's a package manager for Windows tools."
    - Type:
      ```powershell
      winget search git
      ```
    - **Output:** Shows available Git versions
    - **Talk point:** "Instead of hunting down installers and running setup wizards, `winget` automates the installation process."

15. **Show another example (don't actually install to save time):**
    ```powershell
    winget search nodejs
    ```
    - **Explain:** "You can install Node.js with a single command: `winget install OpenJS.NodeJS`."
    - "This is much faster than manually downloading and clicking through a setup wizard."

16. **Show one more useful command:**
    ```powershell
    winget list
    ```
    - **Output:** All installed applications
    - **Talk point:** "This shows everything you've installed. In larger organizations, IT teams use `winget` to manage software across many computers."

### Section 5: Summary and Switching Between Shells (2 minutes)

17. **Demonstrate tab switching:**
    - **Click between the PowerShell and Ubuntu tabs** to show how easy it is to switch
    - **Use keyboard shortcuts:**
      - `Ctrl+Tab` to switch to the next tab
      - `Ctrl+Shift+Tab` to switch to the previous tab

18. **Explain the practical benefits:**
    - **"If you're doing web development, you might use WSL for Node.js and npm, but PowerShell for Windows system administration."**
    - **"With Windows Terminal, you don't need multiple windows open. Everything is in one place."**

19. **Quick mention of configuration:**
    - **"You can customize Windows Terminal's appearance — colors, fonts, transparency. Right-click and select Settings to explore."**

---

## Key Points to Emphasize

- **WSL bridges two worlds:** You get the power of Linux tools and the convenience of Windows. Many professional developers use this exact setup.
- **Windows Terminal unifies everything:** Rather than juggling multiple windows, you have PowerShell and Linux in tabs. Clean, organized, and efficient.
- **The filesystem is shared:** `/mnt/c` on Linux is the same as `C:\` on Windows. They're literally the same files, just accessed differently.
- **winget is growing in importance:** Modern Windows development relies less on manual installers and more on package managers. Learn to use `winget` early.

---

## Common Questions

**Q: Do I need WSL if I'm only developing for Windows?**
A: Not necessarily, but it's still useful. Many tools and libraries have better support on Linux. Even Windows-focused developers often use WSL for database servers, build tools, or testing in a Linux environment before deploying.

**Q: Is WSL slower than running Linux on its own machine?**
A: WSL 2 (the current version) is very fast — nearly equivalent to native Linux. Performance is rarely a concern for typical development work. The convenience of running Linux on Windows usually outweighs any minor performance difference.

**Q: Can I run GUI applications in WSL?**
A: WSL traditionally works best with command-line tools. However, WSL 2 now supports graphical applications through Windows' X11 implementation. It's becoming more capable, but CLI-based development is still the primary use case.

**Q: What if I use a Mac instead of Windows?**
A: Macs come with a Unix-based terminal (zsh or bash) built-in, so you don't need WSL. You'll use the Terminal app directly. The commands are largely the same, though some Mac-specific tools (Homebrew for package management) differ. The fundamental concepts we're teaching apply everywhere.
