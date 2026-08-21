# Module III Exit Ticket — Development Environments & Technical Efficiency

**Module III** · The command line / PowerShell, VS Code, and smart research practices
**~5 minutes · Not graded · Anonymous is fine**

> A quick check on this module's tools. If a command or feature didn't click yet, say so — that's exactly what we want to know.

---

## Quick Recap (3 questions)

**1. (Multiple choice)** You open PowerShell and want to know *what folder you are currently in*, and then *what's in it*. Which pair does that?

- A. `Get-Location`, then `Get-ChildItem`
- B. `Get-ChildItem`, then `Get-Location`
- C. `Set-Location`, then `Get-ChildItem`
- D. `Get-Content`, then `Get-Location`

**2. (Short answer)** Name **one** VS Code feature or shortcut from this module that makes editing faster (for example: the integrated terminal, multi-cursor, the command palette, extensions, or a keyboard shortcut).

**3. (Explain in your own words)** We said "about half of programming is knowing how to look things up." Describe one *smart research* habit for getting un-stuck (e.g., how to read an error message, write a good search query, or evaluate a Stack Overflow answer).

---

## Muddiest Point

What's the **one thing** from this module that's still fuzzy? (A command, a VS Code feature, the terminal, PATH — anything.)

---

## Connect It

A CivicTrack developer sets up a workspace just like the one we built: a terminal, VS Code, and an organized project folder. Describe one piece of *your* setup — a folder structure, an extension, a shortcut — and how it would help you stay organized on a real project.

---

<details>
<summary><strong>Instructor Answer Key</strong> (review before building on this module — collapsed for in-class use)</summary>

**1.** A — `Get-Location` answers "where am I" (it's `pwd` on macOS/Linux), then `Get-ChildItem` lists what's there (`ls`/`dir`). The distractors are all real cmdlets doing the wrong job, which is the useful part: C's `Set-Location` *changes* the folder rather than reporting it, and D's `Get-Content` reads a file's contents, not a folder's. If someone picks C, they've got the right mental model and the wrong verb — worth naming the Get/Set pattern, since it runs through all of PowerShell.

**2.** Any real feature: integrated terminal, multi-cursor editing, the command palette (Ctrl/Cmd+Shift+P), the file explorer, search across files, extensions, IntelliSense, or a specific shortcut. Reward a concrete, correctly described one.

**3.** *Listen for:* reading the actual error message text, searching with specific keywords / the error string, including language/tool and version, checking dates and accepted answers, preferring official docs, and not blindly pasting code. Any one solid habit is enough.

**Muddiest Point / Connect It:** Not graded. PATH and the terminal are the usual fuzzy spots — if they recur, demo them again in a warm-up. Note that later modules depend on toolchains set up here (Node, JDK, Git auth); a muddy "PATH" signal is worth resolving early.

</details>
