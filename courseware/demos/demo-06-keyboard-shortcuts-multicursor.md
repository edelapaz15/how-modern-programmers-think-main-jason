# Demo 6: Keyboard Shortcuts and Multi-Cursor

**Module:** III
**Topic:** Text Editors and IDEs
**Estimated Time:** 13 minutes
**Related reading:** [Text Editors and IDEs](../docs/Module-03-Development-Environments-and-Efficiency/03-text-editors-and-ides.md)

## Objective
Teach students advanced editing techniques in VS Code — multi-cursor selection, line manipulation, and bulk editing — so they can handle repetitive edits efficiently and refactor code with confidence.

## Setup/Prerequisites
- VS Code installed and configured
- A text editor open with sample code containing repeated text or similar patterns
- Sample file can contain simple code or plain text with words repeated

---

## Step-by-Step Script

### Section 1: Selecting with Ctrl+D (Find and Select) (3 minutes)

1. **Create or open a file with repeated words:**
   ```javascript
   function calculatePrice(price, tax) {
       const total = price + tax;
       return price;
   }

   const myPrice = 100;
   const newPrice = 200;
   console.log(myPrice);
   console.log(newPrice);
   ```

2. **Explain the power of multi-cursor editing:**
   - **Talk point:** "In real code, you often have the same word or pattern repeated dozens of times. Changing one by one is tedious. Multi-cursor editing lets you change them all at once."

3. **Place your cursor on a word you want to select (e.g., `price`):**
   - **Click on the first occurrence** of the word `price` in the function parameters
   - **Position the cursor anywhere in the word**

4. **Use Ctrl+D to select the next occurrence:**
   - Press **Ctrl+D**
   - **Result:** the word your cursor was sitting in gets selected. Just the one — **no second cursor yet.** The first press is what turns your cursor into a selection.
   - **Press Ctrl+D again**
   - **Result:** *now* a second cursor appears on the next occurrence, and both are selected
   - **Press Ctrl+D a third time**
   - **Result:** a third cursor on the next occurrence
   - **Keep pressing Ctrl+D** to cycle through all occurrences
   - **Talk point:** "The first press selects the word you're on; every press after that adds one more cursor on the next matching word. So if you want three cursors, that's three presses, not two. Don't fight it if the count feels off by one — just keep pressing until you've got them all highlighted."

5. **Edit all selected occurrences at once:**
   - With multiple cursors active, **start typing** a replacement word (e.g., `amount`)
   - **All selected occurrences are replaced in real-time**
   - **Explain:** "This is the power of multi-cursor. One keystroke, multiple locations changed. Huge time-saver for refactoring."

6. **Clear the selection and start fresh:**
   - Press **Escape** to deselect all but the main cursor
   - **Explain:** "You can always press Escape to get back to a single cursor if you make a mistake."

### Section 2: Select All Occurrences (Ctrl+Shift+L) (2 minutes)

7. **Use a different approach — select ALL occurrences at once:**
   - **Place your cursor on a word** (e.g., `tax`)
   - Press **Ctrl+Shift+L**
   - **Result:** Every occurrence of that word is selected simultaneously
   - **Talk point:** "Ctrl+D is incremental — select one, then another. Ctrl+Shift+L is all-or-nothing — get every match immediately. Choose based on your needs."

8. **Edit all at once:**
   - With all occurrences selected, **type a replacement** (e.g., `fee`)
   - All instances change instantly
   - **Explain:** "This is faster than Ctrl+D when you want to change all instances in one go."

9. **Demonstrate the difference with a practical example:**
   - Create a variable that appears 5 times: `let count = 0;` and uses in 4 more places
   - **Use Ctrl+Shift+L** to select all, then rename to `counter`
   - **Talk point:** "In professional codebases, you might have 100 occurrences. Doing this manually would take minutes. Multi-cursor does it in seconds."

### Section 3: Moving Lines (Alt+Up / Alt+Down) (2 minutes)

10. **Demonstrate line movement:**
    - Open a file with several lines of code:
      ```javascript
      const name = "Alice";
      const age = 30;
      const city = "New York";
      ```

11. **Move a line up:**
    - **Click anywhere on the `age` line**
    - Press **Alt+Up Arrow**
    - **Result:** The entire line moves above the `name` line
    - **Talk point:** "You can rearrange code without cutting and pasting. Perfect for reordering statements or moving related code together."

12. **Move a line down:**
    - **Click on the `city` line**
    - Press **Alt+Down Arrow**
    - **Result:** The line moves down
    - **Explain:** "Use Alt+Up/Down to reorganize your code structure on the fly."

13. **Show speed advantage:**
    - **Type a line of code, then immediately press Alt+Down** to move it
    - Compare this to: copy, paste, delete (3 operations vs. 1)
    - **Talk point:** "These shortcuts compound. Over a day, they save hours. That's why learning them is worth the investment."

### Section 4: Toggling Comments (Ctrl+/) (2 minutes)

14. **Demonstrate the comment toggle:**
    - Select a line of code:
      ```javascript
      console.log("Debug message");
      ```
    - Press **Ctrl+/**
    - **Result:** The line becomes:
      ```javascript
      // console.log("Debug message");
      ```
    - **Talk point:** "Commenting out code while debugging is essential. Ctrl+/ makes it instant."

15. **Toggle a block of lines:**
    - **Select multiple lines** (e.g., 3 statements)
    - Press **Ctrl+/**
    - **Result:** All selected lines are commented out
    - **Press Ctrl+/ again** to uncomment them
    - **Explain:** "This works bidirectionally. Press it once to comment, again to uncomment. No need to find a different command."

16. **Show language awareness:**
    - Switch to an **HTML file**
      ```html
      <h1>Hello World</h1>
      ```
    - Select the line and press **Ctrl+/**
    - **Result:** It becomes `<!-- <h1>Hello World</h1> -->`
    - **Explain:** "VS Code knows the language and uses the correct comment syntax. HTML uses `<!-- -->`, JavaScript uses `//`, Python uses `#`, etc."

### Section 5: Manual Multi-Cursor Placement (Alt+Click) (2 minutes)

17. **Demonstrate Alt+Click for custom cursor placement:**
    - Open a code snippet with multiple lines
    - **Hold Alt and click** on different positions in your code
    - **Result:** Multiple cursors appear at each location
    - **Type something**
    - **Result:** Your text appears at all cursor positions simultaneously
    - **Talk point:** "Ctrl+D and Ctrl+Shift+L are pattern-based. Alt+Click is manual placement. Use it when you need cursors at specific, non-matching locations."

18. **Practical example:**
    - Suppose you have a list of variables that need values assigned:
      ```javascript
      const name = ;
      const age = ;
      const city = ;
      ```
    - **Alt+Click after each `=` sign** to place cursors
    - **Type `undefined`**
    - All lines are updated at once
    - **Explain:** "Manual placement is powerful when the pattern isn't a simple word match."

### Section 6: Bonus Shortcuts and Wrap-Up (2 minutes)

19. **Show a few more useful shortcuts:**
    - **Ctrl+X (without selection):** Cut the entire current line
    - **Ctrl+Shift+K:** Delete the entire current line
    - **Ctrl+Enter:** Insert a new line below the current position
    - **Ctrl+Shift+Enter:** Insert a new line above the current position
    - **Explain:** "These are life-changing for day-to-day editing. They work with or without selection."

20. **Demonstrate Alt+Shift+Click for block selection:**
    - **Hold Alt+Shift and drag** across your code
    - **Result:** A rectangular block of text is selected
    - **Talk point:** "This is useful for editing columnar data or aligning text."

21. **Summary table of all shortcuts:**
    - **Ctrl+D:** Select next occurrence of word
    - **Ctrl+Shift+L:** Select all occurrences of word
    - **Alt+Up / Alt+Down:** Move line up/down
    - **Ctrl+/:** Toggle comment
    - **Alt+Click:** Manual multi-cursor placement
    - **Ctrl+X (no selection):** Cut line
    - **Ctrl+Shift+K:** Delete line
    - **Talk point:** "These shortcuts are worth memorizing. Practice them daily, and they'll become second nature. Speed comes from muscle memory."

22. **Encouragement:**
    - **"Text editing speed matters more than you might think. Slow editing is a hidden cost that compounds. Learn these shortcuts, and you'll code faster, debug faster, and refactor with confidence."**

---

## Key Points to Emphasize

- **Multi-cursor editing is transformative:** It's one of the features that separates modern editors from old-school text editors. Master it.
- **Keyboard > Mouse:** Every time you touch the mouse, you're slowing down. These shortcuts keep your hands on the keyboard.
- **Context matters:** Ctrl+D is great for incremental selection; Ctrl+Shift+L for bulk changes; Alt+Click for custom placement. Learn when to use each.
- **Practice builds muscle memory:** These shortcuts feel awkward at first. Commit to using them for a week, and they'll feel natural.

---

## Common Questions

**Q: If I mess up with multi-cursor, can I undo?**
A: Absolutely! Press Ctrl+Z to undo the last edit, even if multiple cursors were active. Undo works perfectly with multi-cursor.

**Q: Can I use multi-cursor with Find and Replace (Ctrl+H)?**
A: Not quite the same way, but Find and Replace is powerful in its own right. We'll cover it in a later module. For now, multi-cursor gives you similar power.

**Q: Do these shortcuts work the same way in other editors like Sublime or Vim?**
A: Most editors have similar features, but the shortcuts differ. Sublime uses Ctrl+D similarly. Vim uses different commands entirely. VS Code's multi-cursor is particularly user-friendly.

**Q: Is there a limit to how many cursors I can have?**
A: Theoretically no, but practically, performance degrades if you have 100+ cursors. You'll rarely need that many. Start with 2-3 cursors and work up.

**Q: Why use Alt+Click instead of just clicking at each position separately?**
A: Without Alt, a normal click deselects all other cursors and places a single cursor. Alt+Click adds a new cursor without removing existing ones. It's the difference between accumulating vs. replacing.
