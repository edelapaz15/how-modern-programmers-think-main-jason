# Activity 07: VS Code Power User — Customize and Master Keyboard Shortcuts

**Module:** III (Development Environments)
**Related reading:** [Text Editors and IDEs](../docs/Module-03-Development-Environments-and-Efficiency/03-text-editors-and-ides.md)

---

## Objective

By the end of this activity, you will have a personalized VS Code setup and be proficient with keyboard shortcuts. You'll complete a series of real editing tasks using only your keyboard—a skill that dramatically increases your coding speed and confidence.

---

## Background

VS Code (Visual Studio Code) has become the de facto code editor for most modern programmers. It's free, extensible, and incredibly fast once you learn its keyboard shortcuts. While new developers often rely on the mouse, experienced programmers rarely touch it—they use keyboard shortcuts to navigate, edit, and run code in seconds.

Customizing VS Code isn't just about aesthetics; it's about creating an environment where you can focus on thinking about code rather than struggling with your tools. Installing extensions (small add-ons that extend VS Code's functionality) and learning shortcuts are investments that pay dividends every single day.

In this activity, you'll set up VS Code for success and then prove your mastery by completing a keyboard-only editing challenge.

---

## Part 1: Installation and Setup

### Step 1: Install VS Code
If you don't have VS Code installed, download it from [https://code.visualstudio.com/](https://code.visualstudio.com/) and follow the installation instructions for your operating system. Launch it when complete.

### Step 2: Install Three Essential Extensions
Extensions are mini-programs that add functionality to VS Code. You'll install three that are universally useful:

1. **Live Server** (by Ritwick Dey)
   - Allows you to launch a live development server to preview HTML files in real-time.
   - In VS Code, click the Extensions icon (or press `Ctrl+Shift+X` / `Cmd+Shift+X`) and search "Live Server". Click Install.

2. **Prettier** (by Prettier)
   - Automatically formats your code to a consistent style.
   - Search "Prettier" in Extensions and install it.

3. **A Theme of Your Choice**
   - A color theme makes VS Code visually appealing and reduces eye strain.
   - Try "One Dark Pro", "Dracula", or "Nord". Install one.
   - After installing, go to Preferences > Color Theme (or press `Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`) and select your new theme.

### Step 3: Customize Your Settings
Personalize VS Code by adjusting these settings:

- **Font Size:** Open Settings (`Ctrl+,` / `Cmd+,`) and search "Font Size". Set it to a comfortable size (14-16 is common).
- **Word Wrap:** Search "Word Wrap" and enable it. This prevents long lines from disappearing off-screen.
- **Auto-Save:** Search "Auto Save" and set it to "onFocusChange". Your work is automatically saved when you switch away from a file.
- **Format on Save:** Search "Format on Save" and enable it. Prettier will automatically format your code when you save.

Take a screenshot of your Settings page showing your customizations. Save this as `vs-code-settings.png`.

---

## Part 2: The Keyboard Shortcut Challenge

### Create Your Challenge File
Create a new file in VS Code by pressing `Ctrl+N` (or `Cmd+N` on Mac). Paste the following text into it:

```
function calculateTotal(price, tax, discount) {
  let total = price + tax;
  total = total - discount;
  return total;
}

let user_name = "Alice";
let userEmail = "alice@example.com";
let user_phone = "555-1234";

const API_KEY = "abc123xyz";
const api_url = "https://api.example.com";
const api_timeout = 5000;

// This function adds two numbers
function add(a, b) {
  return a + b;
}

// This function subtracts two numbers
function subtract(a, b) {
  return a - b;
}
```

Save this file as `challenge.js` by pressing `Ctrl+S` (or `Cmd+S`) and typing the filename.

### Complete These Editing Tasks (Keyboard Only—No Mouse!)

**Challenge 1: Select All Instances of a Word**
Select all occurrences of the text `user` in the file.
- Shortcut: **Select just the four characters `user`** inside `user_name` (click before the `u` and shift-arrow across, or double-click `user_name` and then shrink the selection). Now press `Ctrl+Shift+L` (Windows/Linux) or `Cmd+Shift+L` (Mac). All instances are selected simultaneously. Make a note of how many you found.
- **Why the fussy selection?** If you just *click* in `user_name` without selecting anything, VS Code treats the whole token `user_name` as the word — underscores don't break words by default — and you'd find only one match instead of three. Multi-cursor operates on exactly what you selected.

**Challenge 2: Move a Line Up**
Navigate to line 8 (`let userEmail = ...`) and move it up one line using only your keyboard.
- Shortcut: Position your cursor on that line, then press `Alt+Up Arrow` (Windows/Linux) or `Option+Up Arrow` (Mac).

**Challenge 3: Duplicate a Line**
Duplicate the line `const api_timeout = 5000;` by positioning your cursor there and pressing `Shift+Alt+Down Arrow` (Windows/Linux) or `Shift+Option+Down Arrow` (Mac).
- This is "Copy Line Down." You should now see two identical `const api_timeout = 5000;` lines.

**Challenge 4: Delete a Line**
Delete one of the duplicated lines using `Ctrl+Shift+K` (Windows/Linux) or `Cmd+Shift+K` (Mac).

**Challenge 5: Comment Out a Block**
Select the `calculateTotal` function—**lines 1–5, including the closing `}`**—and toggle it into a comment using `Ctrl+/` (Windows/Linux) or `Cmd+/` (Mac). Then toggle it back.
- Be sure to include line 5. If you comment out only lines 1–4, the closing brace is left stranded and the file becomes invalid JavaScript, which will make Challenge 8's formatter refuse to run.

**Challenge 6: Go to a Specific Line**
Jump directly to line 16 using `Ctrl+G` (Windows/Linux/Mac) and type `16`.

**Challenge 7: Find and Replace**
Open Find and Replace with `Ctrl+H` (Windows/Linux) or `Cmd+H` (Mac). Find all instances of `api_` and replace them with `API_`. Do this carefully—you're making them consistent!

**Challenge 8: Open the Command Palette**
Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette. Search for "Format Document" and press Enter. Prettier will auto-format your entire file to consistent style.

**Challenge 9: Undo—and Redo**
You've made lots of changes. Step backwards through them one at a time with `Ctrl+Z` (Windows/Linux) or `Cmd+Z` (Mac), watching each edit reverse. Go back about five steps and count as you go.

Now bring them all back: press `Ctrl+Y` or `Ctrl+Shift+Z` (Windows/Linux), or `Cmd+Shift+Z` (Mac), until your file is back to its fully-edited, formatted state.
- **Don't stop at the undos**—Challenge 10 and your deliverable need the edited file, not the original. Redo until you're back where Challenge 8 left you.
- The takeaway: VS Code's undo history is a timeline you can move in *both* directions. Undo is not a one-way door, so it's safe to explore.

**Challenge 10: Save and Celebrate**
Confirm your file still has all your edits applied and formatted, then press `Ctrl+S` (or `Cmd+S`) to save. You've completed the challenge!

---

## Expected Deliverable

You will produce two files:

1. **Before/After Comparison:** Take a screenshot of the original `challenge.js` file and another screenshot after completing all the challenges. Save these as `challenge-before.png` and `challenge-after.png`.

2. **Settings Screenshot:** Your customized VS Code settings (`vs-code-settings.png` from Part 1).

3. **Your Challenge File:** Save the final version of `challenge.js` with all edits applied and formatted.

These three items demonstrate your ability to customize and operate VS Code at an intermediate level.

---

## Reflection Questions

1. **Speed vs. Mouse:** How did using keyboard shortcuts feel compared to using the mouse? Which shortcuts felt most natural, and which felt clumsy at first?

2. **Productivity Gains:** Professional developers spend 8+ hours a day in their editor. How might learning these shortcuts save time over a year of daily coding?

3. **Continued Learning:** Which VS Code feature or shortcut would you like to explore deeper? (Examples: debugging, multicursor editing, integrated terminal.)

---

## Tips for Success

- **One Shortcut at a Time:** Don't try to memorize all shortcuts at once. Learn a few, use them until they're automatic, then add more.
- **Customize Your Shortcuts:** If a shortcut doesn't feel natural to you, you can rebind it! Go to Preferences > Keyboard Shortcuts.
- **Practice Doesn't Make Perfect:** Practice makes permanent. Use these shortcuts in every coding session, and they'll become muscle memory.
- **Watch and Learn:** Search "VS Code power tips" on YouTube. Watching experienced developers work is incredibly educational.

You're now well on your way to becoming a VS Code power user. Enjoy your streamlined development environment!
