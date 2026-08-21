# Demo 15: Markdown Syntax and Preview

**Module:** IV
**Topic:** Writing in Markdown
**Estimated Time:** 12 minutes
**Related reading:** [Writing in Markdown](../docs/Module-04-SDLC-and-Collaboration/04-writing-in-markdown.md)

## Objective
Students will create a markdown file with all common syntax elements—headings, formatting, lists, links, code blocks, and tables—and preview it in VS Code to see how markdown renders.

## Setup/Prerequisites
- VS Code installed
- A Git repository or any folder (markdown works standalone)
- Terminal or file explorer open
- Understanding of basic file creation and editing

## Step-by-Step Script

### Part 1: Introduction to Markdown (2 minutes)

**Talking Point:** "Markdown is a simple, readable way to write formatted text. It's used everywhere: GitHub, Reddit, Discord, documentation sites. Learn it once, use it everywhere."

**Talking Point:** "Markdown files use the `.md` extension. They're plain text, so they work in any editor. But VS Code and GitHub render them beautifully. Today we'll write markdown and preview it."

**Talking Point:** "The beauty of markdown is that it's readable even as plain text. If you see `**bold**`, you can tell that's meant to be bold, even before it's rendered."

---

### Part 2: Create and Open a Markdown File (1 minute)

**Talking Point:** "Let's create a markdown file from scratch."

In your terminal or file explorer, create a file:
```powershell
New-Item -ItemType File learning-markdown.md
```

Open it in VS Code:
```bash
code learning-markdown.md
```

(Or right-click and open with VS Code.)

---

### Part 3: Add Headings (2 minutes)

**Talking Point:** "Markdown headings use hash symbols. One hash is the biggest heading, six hashes is the smallest."

Type into the file:
```markdown
# Main Title - Level 1 Heading

## Subheading - Level 2 Heading

### Sub-subheading - Level 3 Heading

#### Level 4 Heading

##### Level 5 Heading

###### Level 6 Heading
```

**Talking Point:** "Each hash creates a smaller heading. Most documents use levels 1-3. You rarely need levels 4-6."

Save the file (Ctrl+S or Cmd+S).

---

### Part 4: Add Emphasis (Text Formatting) (2 minutes)

**Talking Point:** "Markdown lets you make text bold, italic, or both."

Add to your file:
```markdown
## Text Formatting

This is **bold text**. Use two asterisks or underscores.

This is *italic text*. Use one asterisk or underscore.

This is ***bold and italic***. Use three asterisks.

This is ~~strikethrough~~. Use two tildes.
```

Save the file.

**Talking Point:** "Notice the asterisks in the plain text. They're easy to read even before rendering. That's the markdown philosophy—the source is readable."

---

### Part 5: Add Lists (2 minutes)

**Talking Point:** "Markdown supports two types of lists: unordered (bullets) and ordered (numbers)."

Add to your file:
```markdown
## Lists

### Unordered (Bullet) List
- Item one
- Item two
- Item three
  - Nested item 3a
  - Nested item 3b
- Item four

### Ordered (Numbered) List
1. First step
2. Second step
3. Third step
   1. Sub-step 3a
   2. Sub-step 3b
4. Fourth step
```

Save the file.

**Talking Point:** "Use dashes, asterisks, or plus signs for bullets—they're all equivalent. For nested items, indent with two or four spaces. For numbered lists, just use numbers in order."

---

### Part 6: Add Links and Images (1 minute)

**Talking Point:** "Links and images use similar syntax."

Add to your file:
```markdown
## Links

[Visit OpenAI](https://openai.com)

[Visit GitHub](https://github.com)

## Images

![Alt text for the image](https://placehold.co/150)
```

**Talking Point:** "Links use square brackets for the text and parentheses for the URL. Images are similar but with an exclamation mark first. The alt text (in square brackets) describes the image for accessibility and shows if the image fails to load."

> **Instructor note:** This image is fetched over the network, so it needs internet access from the VM. If it renders as a broken-image icon, don't fight it — turn it into the lesson: that placeholder square *is* the alt text doing its job, exactly as described above. (Older versions of this demo used `via.placeholder.com`, which has since shut down. If `placehold.co` is ever blocked or gone too, `https://www.w3.org/Icons/w3c_home.png` is a long-stable alternative.)

**Talking Point:** "Standard Markdown (GitHub/CommonMark) has no way to make a link open in a new tab—there's no `target` attribute in the link syntax. If you truly need that, drop down to raw HTML: `<a href=\"https://github.com\" target=\"_blank\">Visit GitHub</a>`. Most renderers allow inline HTML, but keep it rare—plain Markdown links are the norm."

Save the file.

---

### Part 7: Add Code Blocks (2 minutes)

**Talking Point:** "Markdown is often used in programming documentation, so code is a major feature. You can inline code or block code."

Add to your file:
````markdown
## Code

### Inline Code
Use backticks for inline code: `git add .` or `const x = 42;`

### Fenced Code Block (plain)
```
This is a plain code block.
No syntax highlighting.
```

### Fenced Code Block (with syntax highlighting)
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Bob"));
```
````

**Talking Point:** "Inline code uses backticks. Code blocks use three backticks on a line by themselves. You can specify the language (python, javascript, html, etc.) on the opening backticks, and many renderers (including GitHub) apply syntax highlighting."

Save the file.

---

### Part 8: Add a Table (1 minute)

**Talking Point:** "Tables are super useful in documentation. The syntax is a bit more formal, but still readable."

Add to your file:
```markdown
## Table

| Name | Age | Favorite Language |
|------|-----|-------------------|
| Alice | 28 | Python |
| Bob | 32 | JavaScript |
| Charlie | 25 | Rust |
| Diana | 29 | Go |
```

**Talking Point:** "Tables have pipes separating columns. The second row (with dashes) defines the column layout. The dashes can include colons to align text: `:---` for left, `---:` for right, `:---:` for center."

Let's add an aligned table:
```markdown
## Aligned Table

| Left Aligned | Center Aligned | Right Aligned |
|:---|:---:|---:|
| L1 | C1 | R1 |
| L2 | C2 | R2 |
```

Save the file.

---

### Part 9: Preview in VS Code (2 minutes)

**Talking Point:** "Now let's see how this looks when rendered. VS Code can preview markdown side-by-side with your source."

In VS Code, use the keyboard shortcut:
```
Ctrl+Shift+V (Windows/Linux)
Cmd+Shift+V (Mac)
```

Or right-click in the editor and select "Open Preview."

**Talking Point:** "Look at that! The headings are big and styled. Bold text is bold. Lists are bulleted. Code has syntax highlighting. This is what readers see when they view your markdown on GitHub or a documentation site."

The preview should show:
- Headings at various levels with decreasing size
- Bold, italic, and strikethrough text clearly formatted
- Bullet and numbered lists properly indented
- Links as clickable blue text
- Code blocks with syntax highlighting matching the language
- A properly formatted table

**Talking Point:** "Notice how the markdown source (left side) is still readable as plain text. That's the beauty of markdown. If GitHub went down tomorrow, you could still read your markdown files in any text editor."

---

### Part 10: Additional Tips (1 minute)

**Talking Point:** "A few bonus tips before we wrap up:"

Add these to your file:
```markdown
## Bonus Tips

### Horizontal Rule
---

### Blockquote
> This is a blockquote.
> It can span multiple lines.
> > And you can nest them too.

### Escaped Characters
If you want to show a literal asterisk, use a backslash: \* or \# or \[

### Comments (not rendered)
<!-- This is a comment. It won't show in the preview. -->
```

**Talking Point:** "Three dashes create a horizontal rule. `>` creates a blockquote. Backslash escapes special characters if you need to show them literally. And HTML comments hide text from rendering."

---

## Key Points to Emphasize

- **Markdown is plain text.** It works in any editor and is readable even unrendered. No proprietary software needed.
- **Syntax is intuitive.** `**bold**` looks bold, `*italic*` looks italic, headings use hashes. You can guess most of it.
- **Use code blocks with language tags.** `python`, `javascript`, `html`, etc. GitHub and other renderers apply syntax highlighting automatically.
- **Markdown is everywhere.** GitHub, Reddit, Discord, Slack, Stack Overflow, most documentation tools. Master it once, use it everywhere.

---

## Common Questions

**Q: Can I use HTML inside markdown?**
A: Yes! Most markdown renderers support inline HTML. So `<b>bold</b>` works alongside `**bold**`. But markdown is usually cleaner and more portable.

**Q: Why isn't my table rendering correctly?**
A: Tables need blank lines before and after. Also, make sure you have the header row, the separator row (with dashes), and at least one data row. If a pipe is in a cell, escape it with a backslash: `\|`.

**Q: Can I use markdown in other places besides documentation?**
A: Absolutely! Email, forums, note-taking apps, static site generators (like Jekyll or Hugo), and many platforms support markdown. If you're writing for the web, markdown is a solid choice.

**Q: What's the difference between backticks and triple backticks?**
A: Single backticks are for inline code in the middle of text: `git add .` Single backticks don't allow line breaks. Triple backticks create code blocks that can span multiple lines and support syntax highlighting.
