# Topic 4: Writing in Markdown

## What Is Markdown and Why Programmers Love It

Markdown is a simple, readable way to write formatted text using plain-text syntax. Created in 2004 by John Gruber, it's designed to be easy to read even before it's converted to HTML or other formatted output.

Why do programmers love it?

1. **Plain text:** Markdown files are plain text. They work with version control (Git), can be edited in any text editor, and are readable in their raw form.

2. **Simplicity:** The syntax is minimal and intuitive. You can learn it in minutes. Compare `**bold text**` in Markdown to `<strong>bold text</strong>` in HTML.

3. **Portable:** A Markdown file works everywhere — GitHub, GitLab, Slack, Reddit, Discord, Medium, Notion, and countless other platforms understand Markdown.

4. **Tooling:** Because Markdown is so popular, there are fantastic tools: editors with previews, converters to HTML/PDF, static site generators, documentation platforms, all optimized for Markdown.

5. **Focus on content:** With Markdown, you focus on writing content, not wrestling with formatting. The syntax gets out of the way.

For programmers specifically, Markdown is essential because:

- **Documentation lives alongside code:** README files, guides, and API docs are Markdown in the same repository as the code
- **Communication:** Technical discussions, pull request descriptions, commit messages — all use Markdown or plain text
- **Professional credibility:** Well-documented code is more valuable and maintainable

If you're transitioning into programming, develop a habit of documenting everything in Markdown. It's a core professional skill.

## Markdown vs. HTML vs. Word: When to Use What

Different contexts call for different tools:

### Markdown

Use Markdown when:
- You're writing technical documentation
- You need version control (writing lives in Git)
- Portability matters (it should work everywhere)
- You're writing READMEs, guides, API docs, or anything related to code
- The audience is primarily other developers

Advantages:
- Simple, readable source
- Version control friendly
- Converts to HTML, PDF, and other formats
- Wide tool support

Disadvantages:
- Limited styling options (not WYSIWYG)
- Advanced formatting requires HTML escapes
- No page layout control (for printed documents)

### HTML

Use HTML when:
- You need complete control over styling and layout
- You're building a website or web application
- You need responsive design for different screen sizes
- The output is primarily viewed in browsers

Advantages:
- Full control over presentation
- Powerful alongside CSS and JavaScript
- Essential for web development

Disadvantages:
- Verbose (lots of tags)
- Steep learning curve
- Raw HTML is not as readable as Markdown
- More work for simple formatting

### Microsoft Word / Google Docs

Use Word/Docs when:
- You're creating a document for non-technical audiences (business reports, contracts, letters)
- You need WYSIWYG editing (seeing formatting as you type)
- You need advanced page layout (headers, footers, page breaks, specific fonts)
- Collaboration with non-technical people matters (they're familiar with these tools)
- You might print the document

Advantages:
- WYSIWYG editing (intuitive)
- Rich formatting options
- Familiar to most people
- Easy sharing and collaboration (Google Docs)

Disadvantages:
- Not plain text (hard to version control)
- Proprietary formats (.docx, .doc)
- Bloated for simple formatting
- No collaboration support in traditional Word

### The Programmer's Choice

For technical work, Markdown wins. It plays well with version control, developers understand it, and it's everywhere in the ecosystem. Even when writing for non-technical audiences, consider Markdown as a source, then convert to Word/PDF for distribution.

## Basic Syntax: Headings, Paragraphs, Emphasis, Lists

Let's learn Markdown by example. These examples show the source and the result.

### Headings

```markdown
# Heading 1 (largest)
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 (smallest)
```

Headings are created with `#` symbols. More `#` symbols = smaller heading. Use Heading 1 (`#`) once per document, typically for the title.

### Paragraphs

```markdown
This is a paragraph. It can span multiple lines.

This is a new paragraph.
There's a blank line between them.

To get a line break without a new paragraph, use two spaces at the end of the line.
Like this.
```

Paragraphs are separated by blank lines. Markdown ignores single line breaks.

### Emphasis (Bold and Italic)

```markdown
*This is italic* or _this is also italic_

**This is bold** or __this is also bold__

***This is bold and italic***
```

- Single `*` or `_` = italic
- Double `**` or `__` = bold
- Triple `***` = both

### Lists

**Unordered lists (bullet points):**

```markdown
- Item 1
- Item 2
- Item 3
  - Nested item 3.1
  - Nested item 3.2
- Item 4
```

Use `-`, `*`, or `+` for bullets. Indent two spaces for nested items.

**Ordered lists (numbered):**

```markdown
1. First step
2. Second step
3. Third step
   1. Sub-step 3.1
   2. Sub-step 3.2
4. Fourth step
```

Use numbers followed by `.` or `)`. Markdown automatically renumbers if you get them wrong.

### Horizontal Rules

```markdown
---

or

***

or

___
```

These create a horizontal line, useful for visual separation.

## Links, Images, and References

### Inline Links

```markdown
[Link text](https://example.com)
```

Becomes a clickable link saying "Link text" pointing to the URL.

### Links with Titles

```markdown
[Link text](https://example.com "Optional title")
```

The title appears on hover.

### Images

```markdown
![Alt text](https://example.com/image.jpg)
```

This displays an image. The alt text describes the image for accessibility (important!).

### Reference Links

For long documents with many links, reference-style links are cleaner:

```markdown
[Link text][reference]

[reference]: https://example.com
```

The definition can be anywhere in the document. This keeps the text readable.

### Automatic Links

```markdown
<https://example.com>
<email@example.com>
```

These create links with the URL or email as the link text.

## Code Blocks and Inline Code

One of the most important uses of Markdown for programmers is showing code.

### Inline Code

For a word or short code snippet within text:

```markdown
The `len()` function returns the length of a list.
```

Use backticks around the code. Backticks are not shifted (not on the shift key), making them easy to type.

### Code Blocks

For longer code examples, use triple backticks:

````markdown
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));
```
````

The language name after the backticks enables syntax highlighting. Common languages: `javascript`, `java`, `python`, `sql`, `html`, `css`, `bash`, `json`, etc.

If you don't specify a language, the code won't be highlighted, but it's still readable.

### Shell/Terminal Examples

For showing terminal commands and output:

````markdown
```bash
$ git status
On branch master
nothing to commit, working tree clean

$ git log --oneline
d4e5f6a Add user creation
a1b2c3d Initial setup
```
````

The `$` indicates a command prompt (don't include it in the actual command). Output follows below.

## Tables in Markdown

Markdown tables are simple:

```markdown
| Name  | Age | City      |
|-------|-----|-----------|
| Alice | 28  | New York  |
| Bob   | 34  | San Francisco |
| Carol | 31  | Boston    |
```

Renders as:

| Name  | Age | City      |
|-------|-----|-----------|
| Alice | 28  | New York  |
| Bob   | 34  | San Francisco |
| Carol | 31  | Boston    |

The dashes separate the header from the data. The pipes separate columns. Alignment can be controlled:

```markdown
| Left   | Center | Right |
|:-------|:------:|------:|
| L1     | C1     | R1    |
| L2     | C2     | R2    |
```

- `:---` = left-aligned
- `:---:` = center-aligned
- `---:` = right-aligned

## Advanced Markdown: Task Lists, Footnotes, Collapsible Sections

Standard Markdown is simple, but extensions add powerful features:

### Task Lists

```markdown
- [x] Task completed
- [ ] Task not done
- [ ] Another task
```

Useful in README files to show progress, or in GitHub issues.

### Footnotes

```markdown
This is a statement[^1] that needs a footnote.

[^1]: Here's the footnote content.
```

Markdown renders the footnote and creates a link to jump between them. Not all Markdown renderers support this.

### Collapsible Sections (HTML)

Some Markdown renderers support HTML details elements:

```markdown
<details>
<summary>Click to expand</summary>

This content is hidden by default.
It appears when the user clicks "Click to expand".

```
</details>
```

Useful for hiding verbose content (like detailed error logs) in documentation.

### Blockquotes

```markdown
> This is a quote.
>
> It can span multiple paragraphs.
>
>> And can be nested.
```

Blockquotes are indented or highlighted depending on the renderer. Good for highlighting important information or citations.

## README Files: The Front Door of Every Project

The `README.md` file is the first thing people see when they visit your project on GitHub. It's the front door. A good README tells visitors:

1. **What is this project?** (elevator pitch)
2. **Why would I use it?** (benefits, features)
3. **How do I use it?** (quick start, examples)
4. **How do I contribute?** (development setup, guidelines)
5. **Who's involved?** (authors, license)

### Structure of a Good README

```markdown
# Project Name

Brief description of what this project does.

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

Instructions for installing or setting up the project.

```bash
npm install project-name
```

Or:

```bash
pip install project-name
```

## Quick Start

Simple example showing basic usage.

```javascript
const { doSomething } = require("project-name");

const result = doSomething("input");
console.log(result);
```

## Documentation

Link to comprehensive documentation if it exists.

## Contributing

How to contribute (bug reports, feature requests, code contributions).

## License

What license is this under?

## Authors

Who created this project.
```

### Why READMEs Matter

A good README:
- Attracts users and contributors
- Saves you time answering "How do I use this?"
- Makes your project professional
- Shows you care about clarity

A missing README or poor README:
- Signals the project is not well-maintained
- Frustrates potential users
- Results in repeated questions

The README is documentation debt you'll repay many times. Write a good one.

## Writing Good Documentation: Structure, Audience, Clarity

Beyond READMEs, programming involves lots of documentation:

- **API documentation:** Describing functions, classes, and methods
- **Guides:** Tutorials, how-tos, architecture explanations
- **Comments:** In code itself
- **Change logs:** What's new in each release

Good documentation shares principles:

### Know Your Audience

Different audiences need different documentation:

- **New users:** Need a quick start, examples, and explanations of basic concepts
- **Experienced users:** Want comprehensive API docs and advanced examples
- **Contributors:** Need development setup instructions and architecture documentation
- **Maintainers:** Need notes about tradeoffs and future plans

Consider who's reading as you write.

### Structure Matters

- **Start with the simplest case:** "Hello World" before advanced features
- **Use examples:** Code examples are essential
- **Progress logically:** Build understanding step-by-step
- **Provide both overview and detail:** Summary at the start, details later
- **Cross-reference:** Link to related topics

### Clarity Over Cleverness

- **Use simple language:** Avoid jargon unless necessary, and define it when used
- **Short paragraphs:** Long blocks of text are hard to scan
- **Active voice:** "The function returns a value" not "A value is returned"
- **Specifics, not vague statements:** "Runs in O(n) time" not "Runs efficiently"
- **Write for skimming:** Use headings, bullet points, and bold for key terms

### Keep Documentation Up-to-Date

Outdated documentation is worse than no documentation. As you modify code, update related documentation immediately. Some teams make this part of the definition of "done" for a feature.

## Markdown Flavors: GitHub Flavored Markdown, CommonMark

Markdown has become so popular that different platforms have extended it slightly.

### GitHub Flavored Markdown (GFM)

GitHub's version of Markdown adds:

- **Tables:** As shown above
- **Task lists:** `- [ ]` for checkboxes
- **Strikethrough:** `~~text~~` for ~~strikethrough~~
- **Autolinks:** URLs are automatically links
- **Code syntax highlighting:** As shown above
- **Mentions:** `@username` to notify someone
- **Issue references:** `#123` to reference an issue

GitHub Flavored Markdown is widely used and highly compatible.

### CommonMark

CommonMark is an effort to standardize Markdown. It's more strictly defined than original Markdown, improving compatibility across platforms.

Most platforms support either CommonMark or GitHub Flavored Markdown (which is based on CommonMark with additions). For practical purposes, use GFM syntax — it's widely supported.

### Other Flavors

- **MultiMarkdown:** Adds footnotes, tables, and more
- **Pandoc Markdown:** Used by the Pandoc document converter
- **Markdown Extra:** PHP Markdown Extra adds tables, footnotes, abbreviations
- **kramdown:** Used by Jekyll (GitHub Pages)

For most projects, standard Markdown or GFM is sufficient.

## Tools for Markdown: VS Code, Editors, Static Site Generators

Once you're writing in Markdown, the right tools make the process smooth.

### VS Code

Visual Studio Code has excellent Markdown support:

- **Preview:** `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) opens a live preview
- **Extensions:** Markdown lint extensions catch errors
- **Syntax highlighting:** Markdown syntax is highlighted for easy reading

VS Code is free and highly recommended for Markdown writing.

### Dedicated Markdown Editors

- **Typora:** Excellent editor with live preview (paid but affordable)
- **Obsidian:** Knowledge management system based on Markdown
- **iA Writer:** Minimal, distraction-free writing
- **Atom:** GitHub's text editor with Markdown support

### Static Site Generators

For large documentation, static site generators convert Markdown to websites:

- **Jekyll:** Used by GitHub Pages, converts Markdown to static HTML
- **Hugo:** Fast, modern static site generator
- **MkDocs:** Built specifically for documentation
- **Sphinx:** Originally for Python docs, supports Markdown
- **Docusaurus:** Built for technical documentation

These are useful when you have lots of documentation that should have consistent styling and navigation.

## Bridge from Business: Documentation and Standard Templates

Professional documentation is not unique to programming. Businesses use standardized documents:

### Standard Report Formats

Many organizations have templates for reports:
- Executive summary (high-level overview)
- Detailed findings (the main content)
- Appendices (supporting data)
- Conclusion and recommendations

Markdown README and documentation files follow similar patterns:
- Brief project description (the executive summary)
- Detailed explanation (the content)
- Examples and references (appendices)
- Call to action (contributing information)

### Wikis and Knowledge Bases

Companies often maintain wikis (like Confluence) or knowledge bases where documentation is stored in a standard format. Markdown is increasingly becoming the standard for these systems.

### Professional Communication

Good written communication is valued everywhere:
- Clear structure
- Appropriate audience level
- Readable formatting
- Correct language

These apply whether you're documenting code or writing a business proposal.

---

## Key Takeaways

- **Markdown is simple:** Learn the basics in minutes, use it for years
- **Markdown is portable:** Works everywhere developers work
- **Markdown is version-control friendly:** Plain text works with Git
- **README files matter:** They're the first impression of your project
- **Documentation is an investment:** Takes time upfront, saves time long-term
- **Tools exist to help:** VS Code, Typora, and static site generators make writing easier
- **Different audiences need different docs:** Quick start for beginners, API docs for advanced users
- **Keep docs up-to-date:** Outdated docs are worse than no docs
- **Markdown has extensions:** Flavors like GFM add features while maintaining core simplicity

---

## Review and Discussion Questions

1. **Compare Markdown, HTML, and Word.** For each of these tasks, which would you choose and why?
   - Writing a technical tutorial for programmers
   - Creating a formal business proposal
   - Documenting an API for other developers
   - Taking meeting notes

2. **Look at a GitHub project you use.** Read its README. What does it do well? What could be improved?

3. **Write a README for a hypothetical project.** Include the project name, brief description, quick start, and one feature.

4. **The text says commit messages should explain the "why" not the "what."** How is this similar to documentation? What would make code documentation hard to understand?

5. **Tables are described as a way to organize information.** When might you use a table in documentation instead of bullet points?

6. **Task lists can show project progress.** How might you use this in your own projects?

7. **Markdown "flavors" like GitHub Flavored Markdown add features.** What problems might arise if different teams use different flavors?

8. **A good README is described as the "front door" of a project.** Describe what makes a good first impression in documentation.
