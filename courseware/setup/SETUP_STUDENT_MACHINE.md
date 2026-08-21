# Setup Instructions for How Modern Programmers Think

Please complete the following on each student's virtual machine **before Day 1**. Items are grouped by
how they fail: software installs are routine, but everything under *Requires admin, a reboot, or an
account* needs lead time and can't be fixed during class.

## Software to install

- Chrome Web Browser [https://www.google.com/chrome](https://www.google.com/chrome)
- Visual Studio Code [https://code.visualstudio.com](https://code.visualstudio.com)
- Latest LTS version of Node.js [https://www.nodejs.org](https://www.nodejs.org)
- Latest Temurin JDK 25: [https://adoptium.net/temurin/releases](https://adoptium.net/temurin/releases)
- Latest Version of Git: [https://git-scm.com/](https://git-scm.com/)
- Latest Maven: [https://maven.apache.org/install.html](https://maven.apache.org/install.html) — *not used by this
  course* (every Java demo compiles with bare `javac`/`java`). Include it only if the same image is
  reused for other Java work; otherwise it is safe to omit.

Also, students will need permission to install Visual Studio Code extensions and NPM packages.

### Network access these installs depend on

The VM must be able to reach these, or the affected sessions fail with no local fallback:

| Host | Needed for | Day |
|------|-----------|-----|
| `marketplace.visualstudio.com` | **All VS Code extensions below.** Demo 4 installs them live. | 2 |
| `registry.npmjs.org` | `npm install` in Demo 33 and Activity 16 | 5 |
| `github.com` | Reading/cloning the course repository (all students); Demo 13's push + PR (instructor only) | 1–5 |
| `data.cityofnewyork.us` | Demo 26's open-data API call (has an offline fallback) | 4 |

## Required VS Code extensions

Four extensions are used by name. **Demo 4 (Day 2) installs the first three live from the Marketplace** —
which makes Demo 4 a single point of failure for three Day 5 demos. If extensions are provisioned
centrally on the image rather than by students, please include all four.

| Extension | Extension ID | Used by |
|-----------|--------------|---------|
| **Live Server** (Ritwick Dey) | `ritwickdey.LiveServer` | Demos 31, 34; Activity 7; optional in Activity 17 |
| **Prettier — Code formatter** | `esbenp.prettier-vscode` | Demo 33; Activity 7 |
| **ESLint** | `dbaeumer.vscode-eslint` | Demo 33 |
| **SpreadJS XLSX Editor** (*MESCIUS inc*) | `Mescius.spreadjs-xlsx-editor` | Demos 21, 22; Activity 15 — see below |

```powershell
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension Mescius.spreadjs-xlsx-editor
```

## The course's spreadsheet — a note on SpreadJS

Day 4 (Module VI) needs a spreadsheet: Demo 21 opens a CSV as a table, **Demo 22 has students type
`COUNTA`, `COUNTIF`, and `IF` formulas**, and Activity 15 cleans a messy export. **No Excel license is
required** — the SpreadJS XLSX Editor listed above opens `.csv` and `.xlsx` in a full spreadsheet grid
inside VS Code and carries an Excel-compatible formula engine, so the Module VI formulas work as written.

> **Note for the instructor, not the imaging team:** once installed, this extension becomes the
> **default editor for `.csv` files** — a plain click opens the spreadsheet grid, not the text. That is
> what Demo 22 and Activity 15 want, but Demo 21 Part 1 and the whitespace hunt in Activity 15 need the
> **raw text** view: right-click the file → **Open With… → Text Editor**. Both demos and the activity
> now say so at the point of use.

## Requires admin, a reboot, or an account — please provision ahead of time

These two are hard prerequisites for specific demos. Neither can be set up on the fly during class:
one needs administrator rights and a reboot, the other needs an external account and outbound
authentication.

### WSL 2 with Ubuntu — needed Day 2 (Demo 3)

> **Status for the current cohort: NOT INSTALLED, and not being retrofitted.** These VMs were already
> built without WSL. Demo 3 has been re-planned around that — its Linux sections run as an
> instructor-projected walkthrough, and the hands-on sections don't need WSL. See
> [demos/demo-03-windows-terminal-wsl.md](../demos/demo-03-windows-terminal-wsl.md) for the delivery plan
> and [TEACHING-GUIDE.md](../instructor/TEACHING-GUIDE.md#wsl-2--skipped-for-the-current-cohort-only) for the pacing
> impact (there is none — Day 2 has slack).
>
> **The section below is the standing requirement for every *subsequent* delivery**, where Demo 3 runs
> in full and students work in the Linux shell themselves. It is kept here because it must be decided at
> image-build time; it cannot be added the week before class.

Demo 3 (*Windows Terminal and WSL*) spends roughly half its runtime inside a Linux shell. Without WSL,
students can watch but cannot follow along.

- Install from an **administrator** PowerShell: `wsl --install`
- This downloads roughly 1–2 GB and **requires a reboot**.
- Verify afterward: `wsl --list --verbose` should show a distribution (typically `Ubuntu`) at version 2.
- **Virtualization must be enabled in the VM's settings** — nested virtualization is required if these
  are guest VMs, and it is off by default on many hypervisors. This is the most common blocker; please
  confirm it early, at image-build time rather than the week before class.

Windows Terminal itself ships built-in on Windows 11 and needs no action.

### GitHub accounts — read access for everyone, push access for the instructor only

**Students never create a repository or push code in this course.** They read and clone the course
repository, and that is the whole extent of it. Please provision accordingly — the two needs are
different sizes.

**Every student needs a GitHub account, for *reading* the course repository.**

- Created and signed in **before Day 1**. Account creation requires email verification, which is slow
  to do live with a full room.
- The VM must allow **outbound HTTPS to github.com**.
- If the course repository is private, each student's account needs to be **granted access ahead of
  time** — please confirm with the instructor who is doing that and when.
- Nothing beyond read access is required. No repository creation, no pushing, no pull requests.

**The instructor needs a GitHub account with working push authentication**, for Demo 13 on Day 3.

- Demo 13 (*Remotes and Pull Requests*) is performed at the front of the room: the instructor creates a
  repository, pushes to it, and opens a pull request while students watch. Only the instructor's
  account is involved.
- The first `git push` opens a **browser OAuth popup** via Git Credential Manager. Please confirm this
  popup is not blocked by VM policy and that the instructor can complete the sign-in.
- GitHub requires **two-factor authentication** for accounts that push code, so the instructor should
  have 2FA already enrolled (a TOTP app, GitHub Mobile, or a passkey) and confirm it works from the
  classroom before Day 3.

> **Why this is smaller than it looks.** An earlier version of this document asked for working push
> authentication on every student machine. That is not needed: Activity 20 builds each student's
> learning portfolio as a **local** Git repository on their own machine using the same
> `git init` / `add` / `commit` commands they practice in Activity 8. Nothing in the course requires a
> student to push.

### An AI assistant account — needed Day 5 (Demo 38)

Demo 38 (*AI Coding Assistant*) is performed by the instructor against a live AI tool — a chat assistant
(ChatGPT, Claude, Gemini) in the browser, or an in-editor assistant (GitHub Copilot, Cursor).

- **At minimum, the instructor** needs a working account and must confirm the tool is **reachable from
  the classroom network** — corporate filtering commonly blocks these, and Demo 38 has no offline
  fallback.
- Students following along need their own account; if that isn't feasible, the demo still works as a
  projected walkthrough.
- Please confirm before Day 5 which AI tools (if any) are permitted on these VMs — that answer also
  shapes the honest version of the "how you'll actually use AI at work" conversation in Module VIII.

> If any item in this section cannot be provisioned on the VM image, please tell the instructor
> **before Day 1** so the affected demos can be re-planned as instructor-only walkthroughs rather than
> discovered live.

## Please also confirm

- **Windows 11.** The Module III demos target the Windows 11 UI (notably Demo 2's route to the
  Environment Variables dialog).
- **OneDrive Known Folder Move.** If OneDrive redirection is enabled on the image, `C:\Users\<name>\Documents`
  may not exist at the expected path, which stalls Demo 1 and Activity 6. If redirection is on, please
  let the instructor know the actual Documents path.
- **`javac -version` works from a fresh terminal.** The JDK install must be on `PATH`. This is the most
  common Windows failure point and it surfaces on Day 5 (Demos 35–36, Activity 19), where there is no
  time to fix it.
- **Internet access to the public web** for Day 2 research demos and the Markdown image example in
  Demo 15.
- **The Environment Variables dialog opens for a standard user.** Demo 2 (Day 2) walks students to
  *System Properties → Environment Variables*. The demo only *views* system variables and edits
  user-level ones, so elevation shouldn't be needed — but if VM policy blocks the dialog outright for
  non-admins, please let the instructor know, since the demo is built around opening it.
