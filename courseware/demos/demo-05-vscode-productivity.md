# Demo 5: VS Code Productivity Features

**Module:** III
**Topic:** Text Editors and IDEs
**Estimated Time:** 13 minutes
**Related reading:** [Text Editors and IDEs](../docs/Module-03-Development-Environments-and-Efficiency/03-text-editors-and-ides.md)

## Objective
Show students essential VS Code productivity features (Command Palette, quick file open, go to line, IntelliSense autocomplete, and syntax highlighting across file types) so they can code faster and with fewer errors.

## Setup/Prerequisites
- VS Code installed and configured (from Demo 4)
- A sample project with at least 10-15 files of different types (JavaScript, HTML, CSS, etc.)
- Or create sample files during the demo if needed

---

## Step-by-Step Script

### Section 1: The Command Palette (2 minutes)

1. **Open the Command Palette:**
   - Press **Ctrl+Shift+P** (Windows/Linux)
   - **Or Cmd+Shift+P** (Mac)
   - **A text input box appears** with ">" prefix
   - **Explain:** "The Command Palette is your gateway to almost every VS Code feature. Rather than hunting through menus, you type what you want to do."

2. **Demonstrate some commands:**
   - Type: `toggle word wrap`
   - **Show the matching result:** "View: Toggle Word Wrap"
   - **Press Enter** to toggle it on/off
   - **Talk point:** "Word wrap makes long lines wrap to the next line instead of requiring horizontal scrolling. Toggle it to see what you prefer."

3. **Try another command:**
   - Press **Ctrl+Shift+P** again
   - Type: `format document`
   - **Result:** "Format Document" appears
   - **Explain:** "This manually formats your entire file. With format-on-save enabled, you'd rarely need this, but it's there if you want it."

4. **Show how the Command Palette searches:**
   - Press **Ctrl+Shift+P**
   - Type: `color` (partial match)
   - **Results include:** "Preferences: Color Theme", "Developer: Generate Color Theme From Current Settings", and other color-related commands. (The exact list shifts between VS Code versions and with the extensions you have installed — the point is the fuzzy match, not the specific entries.)
   - **Talk point:** "You don't need exact names. VS Code fuzzy-matches what you type. This speeds up your workflow enormously."

### Section 2: Quick File Open (Ctrl+P) (2 minutes)

5. **Open the Quick Open dialog:**
   - Press **Ctrl+P**
   - **A text input appears** (different from Command Palette — no ">" prefix)
   - **Explain:** "Quick Open lets you jump to any file in your project in milliseconds. This beats scrolling through the file tree."

6. **Demonstrate file search:**
   - If you have a project, type part of a filename (e.g., `index` if you have `index.html` and `index.js`)
   - **Results show matching files**
   - **Click one or press Enter** to open it
   - **Talk point:** "In large projects with hundreds of files, this is a lifesaver. Searching is faster than navigating."

7. **Show keyboard navigation:**
   - Press **Ctrl+P** again
   - Type a filename
   - **Use arrow keys** to select between results
   - **Press Escape** to cancel without opening
   - **Explain:** "Power users do this all day long — Ctrl+P, type, Enter. You'll memorize this pattern quickly."

### Section 3: Go to Line (Ctrl+G) (1 minute)

8. **Open a file with some code** (10+ lines)

9. **Open the Go to Line dialog:**
   - Press **Ctrl+G**
   - **A text input appears** with ":" prefix
   - Type a line number (e.g., `5`)
   - **Press Enter**
   - **The cursor jumps** to that line
   - **Explain:** "When debugging or reviewing errors, you often see a line number in an error message. This jumps directly there."

10. **Show how Go to Line combines with other features:**
    - In VS Code, if an error message says "line 42", instead of scrolling, just press Ctrl+G and type 42. Problem solved.

### Section 4: IntelliSense Autocomplete (3 minutes)

11. **Create or open a JavaScript file:**
    - Create a new file called `demo.js`
    - **Or open an existing `.js` file**

12. **Start typing JavaScript code and trigger IntelliSense:**
    ```javascript
    const arr = [1, 2, 3];
    arr.
    ```
    - **Stop at the dot**
    - **IntelliSense popup appears** showing available methods: `.map`, `.filter`, `.forEach`, `.push`, etc.
    - **Talk point:** "IntelliSense shows available properties and methods. You don't have to remember them all — the editor reminds you."

13. **Complete using IntelliSense:**
    - **Type `ma`** (partial match)
    - **The popup filters:** `.map` is highlighted
    - **Press Tab or Enter** to accept
    - **Autocomplete finishes it:** `arr.map` — you type the `(` yourself
    - **Explain:** "This catches typos and speeds up typing. If you mistype, IntelliSense won't find it, alerting you to the error."
    - *(Aside, if a student asks why no parentheses appeared: VS Code can add them automatically, but that's off by default. It's the `javascript.suggest.completeFunctionCalls` setting. Not worth a detour mid-demo.)*

14. **Show IntelliSense with function parameters:**
    - Continue typing:
      ```javascript
      arr.map((item) => {
      ```
    - **Type your code inside the function**
    - **Explain:** "IntelliSense also shows function signatures — what parameters are expected, their types, etc."

15. **Demonstrate with built-in methods:**
    - Type: `console.`
    - **IntelliSense shows:** `.log`, `.error`, `.warn`, `.table`, etc.
    - **Select `.log` and type:**
      ```javascript
      console.log("Hello");
      ```
    - **Talk point:** "You might know console.log, but what about console.table? IntelliSense helps you discover methods you didn't know existed."

16. **Show IntelliSense with variable hints:**
    - Go to a variable declaration and hover over it
    - **A tooltip shows the variable's type and value** (if inferrable)
    - **Explain:** "The editor shows you type information without needing separate documentation."

### Section 5: Syntax Highlighting Across File Types (2 minutes)

17. **Open an HTML file** (or create one):
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Demo</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
    ```
    - **Point out:** Tags are colored blue, text is default color, attributes are colored
    - **Explain:** "Each language has its own color scheme. HTML tags, CSS properties, and JavaScript keywords are visually distinct."

18. **Switch to a CSS file:**
    ```css
    body {
        background-color: #f0f0f0;
        margin: 0;
    }
    ```
    - **Show:** Property names (blue), values (red/green), hex colors (purple)
    - **Point out:** If you misspell a property, it appears in a different color, alerting you to an error

19. **Switch to a JavaScript file:**
    ```javascript
    function greet(name) {
        const message = `Hello, ${name}!`;
        return message;
    }
    ```
    - **Show:** Keywords (blue), function names (yellow), strings (red), template literals with backticks (red)
    - **Talk point:** "Syntax highlighting is language-aware. VS Code automatically detects file type by extension and applies the right colors."

20. **Show a file with mixed languages** (optional, if time permits):
    - In an HTML file, include inline `<script>` tags
    - **Show:** HTML is one color scheme, JavaScript inside the script tags uses its own scheme
    - **Explain:** "VS Code understands nested languages. It's smart enough to highlight JavaScript inside HTML differently."

### Section 6: Quick Recap and Power Tips (2 minutes)

21. **Demonstrate all four shortcuts in sequence:**
    - **Ctrl+P:** "Quick file open — jump to any file"
    - **Ctrl+G:** "Go to line — jump to a specific line number"
    - **Ctrl+Shift+P:** "Command Palette — run any VS Code command"
    - **IntelliSense (Ctrl+Space if it doesn't auto-appear):** "Get code hints and autocomplete"

22. **Mention a bonus shortcut:**
    - **Ctrl+F:** Find in current file
    - **Ctrl+Shift+F:** Find across all files in the project
    - **Explain:** "These are essential for navigating large codebases."

23. **Final encouragement:**
    - **Talk point:** "These shortcuts feel slow the first time, but they become second nature within a week. By the end of this course, you'll use them reflexively. They're force multipliers for your productivity."

---

## Key Points to Emphasize

- **The Command Palette is the heart of VS Code:** Learn to use it; almost every feature is accessible through it.
- **Keyboard shortcuts beat the mouse:** Ctrl+P, Ctrl+G, Ctrl+Shift+P are your daily drivers. Muscle memory these.
- **IntelliSense prevents errors:** It's not just autocomplete; it's a safety net that catches typos before they become bugs.
- **Syntax highlighting is a language teacher:** Colors carry meaning. Learn to read them. Wrong color = likely bug.

---

## Common Questions

**Q: Does IntelliSense work for all languages, or just JavaScript?**
A: It works for most languages — Python, C#, Go, Rust, etc. The accuracy depends on how well VS Code understands the language. For popular languages (JavaScript, Python, Go), it's excellent. For niche languages, it might be basic.

**Q: What's the difference between Ctrl+P and searching in the file tree?**
A: Ctrl+P is faster because it's keyboard-based and fuzzy-matches partial names. The file tree is visual and good for exploring. For experienced developers, Ctrl+P is almost always faster.

**Q: If IntelliSense is always showing suggestions, can I turn it off?**
A: Yes. Go to Settings and search for "IntelliSense". You can disable it, change how often it appears, or customize which providers are active. Most developers keep it on — it's too useful to disable.

**Q: Why does IntelliSense sometimes show options I don't recognize?**
A: Those are either language built-ins or from loaded libraries. Don't worry if you don't know all of them yet. As you learn the language, these will make sense. Use the descriptions (hover over items) to learn.
