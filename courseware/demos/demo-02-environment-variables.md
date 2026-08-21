# Demo 2: Environment Variables and PATH

**Module:** III
**Topic:** Windows Essentials
**Estimated Time:** 15 minutes
**Related reading:** [Windows Essentials](../docs/Module-03-Development-Environments-and-Efficiency/02-windows-essentials.md)

## Objective
Teach students what environment variables are, how to view and set them temporarily in PowerShell, and understand why PATH is critical for running tools like Node.js, Git, and Python from the command line.

## Setup/Prerequisites
- Windows system with PowerShell 5.1+ installed
- A text editor (VS Code or Notepad) for viewing/editing (optional)
- Administrator access to System Properties (for the permanent environment variables demo)
- At least one developer tool installed (Node.js, Git, or Python recommended, but not required)

---

## Step-by-Step Script

### Section 1: What Are Environment Variables? (2 minutes)

1. **Open PowerShell**

2. **Explain the concept before showing anything:**
   - "Environment variables are like global settings that your computer and all programs can access."
   - "Think of them as configuration values stored in memory — like a dictionary of key-value pairs."
   - "Every program running on your system can read these variables to find out where tools are installed, what language to use, or other configuration details."
   - "The most important one for programmers is PATH — it tells Windows where to find executables."

### Section 2: Viewing Environment Variables (2 minutes)

3. **Display all environment variables:**
   ```powershell
   Get-ChildItem env:
   ```
   - **Talk point:** "These are ALL the environment variables currently loaded. There are a lot! Let's look at a few important ones."
   - Let students see the list scroll by.

4. **View the PATH variable specifically:**
   ```powershell
   $env:PATH
   ```
   - **Explain:** "The `$env:` prefix means we're accessing an environment variable. PATH is separated by semicolons (`;`) on Windows."
   - "Each item in PATH is a folder where Windows looks for programs. When you type a command, Windows searches these folders in order."
   - Point out typical paths like `C:\Program Files\Git\cmd` or `C:\Program Files\nodejs`

5. **Make PATH more readable with line breaks:**
   ```powershell
   $env:PATH -split ";" | ForEach-Object { Write-Host $_ }
   ```
   - **Talk point:** "Now we can see each folder on its own line, which is much easier to read."
   - "Notice how there are many paths — Node.js, Git, Python installers all add themselves here."

6. **View a few other useful environment variables:**
   ```powershell
   $env:COMPUTERNAME
   ```
   - Shows your computer's network name.

   ```powershell
   $env:USERNAME
   ```
   - Shows your Windows login name.

   ```powershell
   $env:USERPROFILE
   ```
   - Shows your home directory (usually `C:\Users\YourName`)

### Section 3: Setting Temporary Environment Variables (2 minutes)

7. **Set a custom temporary variable:**
   ```powershell
   $env:MY_COURSE = "How Modern Programmers Think"
   ```
   - **Explain:** "We just created a custom environment variable called `MY_COURSE` with a value. Let's verify it exists:"

8. **Check that it was created:**
   ```powershell
   $env:MY_COURSE
   ```
   - Output: `How Modern Programmers Think`

9. **Use the variable in a command:**
   ```powershell
   Write-Host "Welcome to $env:MY_COURSE"
   ```
   - **Talk point:** "We can reference this variable anywhere. When PowerShell sees `$env:MY_COURSE`, it replaces it with the actual value."

10. **Close PowerShell and reopen it:**
    - Close the current PowerShell window.
    - Open a new PowerShell window.
    - Type: `$env:MY_COURSE`
    - **Result:** Nothing — the variable is gone!
    - **Explain:** "Temporary variables only exist while PowerShell is running. Once you close it, they disappear. For permanent variables, we need to use System Properties."

### Section 4: Viewing Permanent Environment Variables in System Properties (3 minutes)

11. **Open System Properties to show where permanent variables live.** On Windows 11, the reliable route is the Start menu search:
    - Click **Start**, type **"Edit the system environment variables"**, and press Enter.
    - This opens the **System Properties** dialog directly, on its **Advanced** tab.

    > **Instructor note:** Two older routes still circulate and are worth knowing, because students will find them in tutorials — but on Windows 11 **neither lands on this dialog**. Right-clicking **This PC → Properties** and pressing **Win+Pause** both open **Settings → System → About**, which has no "Environment Variables" button. From that Settings page you must click the **Advanced system settings** link to reach System Properties. The Start-menu search above skips that detour — use it.

12. **In the System Properties window:**
    - Click the **"Environment Variables"** button (near the bottom of the **Advanced** tab)
    - **Explain:** "This dialog shows two sections — 'User variables' (personal to your login) and 'System variables' (for all users on the computer)."

13. **Scroll through and highlight important variables:**
    - Point out **PATH** — this is the most critical one
    - **Talk point:** "When you install Node.js or Python, the installer adds entries to PATH automatically. That's how you can type `node` or `python` from any folder and it works. Importantly, the installers add to PATH—they do *not* automatically create variables like `PYTHON_HOME` or `NODE_HOME`. Those names aren't standard, so don't expect to find them here."
    - **Talk point:** "You'll sometimes hear about `JAVA_HOME`. That's a *convention*—lots of Java tools look for it—but the JDK installer doesn't set it for you. If a tool needs `JAVA_HOME`, you create it yourself in this very dialog, pointing it at your JDK folder. `PYTHON_HOME` and `NODE_HOME` are the same idea: example variables *you* would set if a specific tool asked for them, not something an installer puts here."

14. **Look at a PATH entry in detail:**
    - Click on **PATH** in the "System variables" section
    - Click **Edit**
    - **Show the list:** "Here are all the folders Windows searches. You can add more manually if needed."
    - Don't make changes — just observe and cancel out.

### Section 5: Why PATH Matters for Programmers (2 minutes)

15. **Demonstrate PATH in action. Verify Node.js or Git is installed:**
    ```powershell
    node --version
    ```
    or
    ```powershell
    git --version
    ```
    - **Explain:** "This works because Node or Git was added to PATH during installation. Windows found the executable in one of those PATH folders."

16. **Show what happens if a tool is NOT in PATH.** First, try the bare name:
    ```powershell
    random-tool
    ```
    - **Result:** `The term 'random-tool' is not recognized as a name of a cmdlet, function, script file, or ...` (the tail of that sentence reads "operable program" on Windows PowerShell 5.1 and "executable program" on PowerShell 7 — same meaning)
    - **Talk point:** "That error is the single most common thing you'll Google in your first month. It almost never means the tool is missing — it means Windows doesn't know *where* to look. PATH is that list of places."
    - Now show the workaround — running it by its full path:
    ```powershell
    & "C:\Program Files\SomeRandomApp\random-tool.exe"
    ```
    - **Talk point:** "If a tool isn't in PATH, you have to spell out exactly where it lives. Two things to notice. The quotes are needed because `Program Files` has a space in it — without them PowerShell reads `C:\Program` as the command and the rest as arguments. And the `&` at the front is PowerShell's 'call operator': it tells PowerShell that this quoted string is a command to run, not just a piece of text to print. Typing all that every time is exactly why we add tools to PATH instead."
    - *(Note: this is an illustrative path — `SomeRandomApp` doesn't exist on your machine, so you'll get a "not recognized" error rather than a running tool. That's fine; the point is the shape of the command, not the result. If you'd rather run something real, `& "C:\Program Files\Git\bin\git.exe" --version` works on a standard Git for Windows install.)*

17. **Quick example — create a script file and discuss how PATH would let you run it:**
    - **Scenario:** "If we put a PowerShell script in a folder that's in PATH, we could run it from anywhere without typing the full path."
    - "This is why organization tools and utilities are usually installed in Program Files — it's already in PATH."

---

## Key Points to Emphasize

- **PATH is the key to everything:** Most tool installation problems come down to PATH not being set correctly. When a tool "isn't found," it's almost always a PATH issue.
- **Environment variables are global:** Any program running on your computer can see these values. This makes them perfect for configuration that many tools need to share.
- **Temporary vs. permanent:** Understand the difference. PowerShell sessions are temporary; System Properties are permanent and survive reboots.
- **Installers manage PATH for you:** Professional tools like Node.js, Git, and Python automatically add themselves to PATH during installation. This is a sign of quality software.

---

## Common Questions

**Q: Can I break my computer by editing environment variables?**
A: It's possible but unlikely if you're careful. Never delete the entire PATH — just add or modify individual entries. If something breaks, you can always restore the defaults or manually fix it. Always make changes slowly and test after each change.

**Q: Why does PATH use semicolons instead of commas?**
A: That's just a Windows convention. Linux and Mac use colons (`:`) instead. It's historical — Windows chose semicolons to distinguish them from commas in folder names. Just remember: Windows = semicolons.

**Q: If I set a variable in PowerShell, can other programs see it?**
A: Yes, but only while PowerShell is running. Any child processes spawned by PowerShell inherit that variable. Other unrelated applications won't see it unless it's set permanently in System Properties.

**Q: What if I install a tool and it doesn't automatically add itself to PATH?**
A: You can add it manually through System Properties, Environment Variables. Copy the folder path to the tool's executable and add it to your PATH. This is rare with modern tools, but happens with older or less polished software.
