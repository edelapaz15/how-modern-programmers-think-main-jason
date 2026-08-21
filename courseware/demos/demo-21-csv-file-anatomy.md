# Demo 21: CSV File Anatomy

**Module:** VI | **Topic:** Practical Tools — CSVs and Spreadsheets
**Estimated Time:** 12 minutes
**Related reading:** [Practical Tools: CSVs and Spreadsheets](../docs/Module-06-Data-Management/02-practical-tools-csvs-and-spreadsheets.md)

## Objective
Understand the fundamental structure of CSV (Comma-Separated Values) files by comparing the raw text format with its spreadsheet representation, recognize how commas and line breaks map to table structure, and spot the messy-data problems that show up in a real export.

![The same CivicTrack service requests in four shapes: a messy raw CSV, a cleaned CSV, three related tables, and JSON from an API, tagged with the demos and activities that cover each.](../diagrams/png/data-journey.png)

*Show where today is going before you open the first file. It makes Demos 21 to 26 feel like one story.*

This is the first stop in the Module VI data story. We follow the **same CivicTrack data** — the City of Rivervale's citizen service requests — through four forms this week: a messy CSV (this demo), a spreadsheet (Demo 22), a relational database (Demos 23–25), and finally an API that serves it as JSON (Demo 26).

## Setup/Prerequisites
- **VS Code with the SpreadJS XLSX Editor extension installed** (`Mescius.spreadjs-xlsx-editor`, publisher MESCIUS inc — free). This is our spreadsheet for Module VI; no Excel needed. Install it from the Extensions panel (`Ctrl+Shift+X`) — search **"SpreadJS XLSX Editor"** — or run:
  ```powershell
  code --install-extension Mescius.spreadjs-xlsx-editor
  ```
- The two CivicTrack data files, in the course project at `../course-project/data/`:
  - `service-requests-raw.csv` — a messy export (14 requests, plus one duplicated row)
  - `service-requests-clean.csv` — the same data after cleaning (14 rows)
- Students have VS Code open on the course project folder

> ### ⚠️ Read this before you run Part 1 — the extension changes how `.csv` opens
>
> Once the SpreadJS extension is installed, it becomes the **default editor for `.csv` files**. Clicking a `.csv` in the VS Code Explorer now opens the **spreadsheet grid**, not the text. That's convenient for Part 2 — and it will sabotage Part 1, where seeing the raw text is the entire point.
>
> So this demo deliberately opens the *same file* two different ways:
>
> - **Raw text (Part 1):** right-click the file → **Open With…** → choose **Text Editor**.
> - **Spreadsheet grid (Part 2):** click the file normally, or right-click → **Open with SpreadJS**.
>
> Practise the **Open With…** step once before class. It's a small motion, but fumbling it in front of the room undercuts the "it's the same bytes either way" reveal this demo is built on. That reveal is actually *stronger* now: the two views are the same file, in the same editor, one right-click apart.

## Step-by-Step Script

### Part 1: Display the Raw CSV (3 minutes)

**Open the file as plain text:**
1. In the VS Code Explorer, find `../course-project/data/service-requests-raw.csv`
2. **Right-click it → Open With… → Text Editor** (not a plain click — that opens the spreadsheet grid)
3. Keep this tab open; we'll come back and put it side by side with the grid in Part 2

You're looking at the first few lines of a real-style export from CivicTrack:
```
request_id,date_submitted,category,description,address,zip,status,department,priority
SR-1001,2026-03-01,pot hole,Large pothole near intersection,100 Main St,97001,resolved,Public Works,High
SR-1002,2026-03-01,Streetlight,Streetlight out for a week,210 Oak Ave ,97002,in progress,Public Works,Medium
SR-1003,03/02/2026,Trash Pickup,Missed trash collection,55 Elm St,97001,Closed,Sanitation,Low
```

**Talk through what we're looking at:**
> "What we're looking at right now is a CSV file in its raw, unformatted state. This is plain text. There are no columns, no borders, no fancy formatting — just commas and line breaks. Every piece of data is here; it's just not arranged in a visual table yet. The name 'Comma-Separated Values' is literal: values are separated by commas. This is how data often *arrives* in the real world — an export from one system, headed into another. Cities publish citizen-request data exactly like this."

**Point out the structure:**
- **First line (the header):** `request_id,date_submitted,category,description,address,zip,status,department,priority` — these are the nine column names
- **Every other line:** one service request (one record)
- **Commas:** tell us where columns break
- **Line breaks:** tell us where rows break

### Part 2: Open the Same File in a Spreadsheet (4 minutes)

**Open the same file in the spreadsheet grid:**
1. In the Explorer, **click `service-requests-raw.csv`** — SpreadJS is the default editor for `.csv`, so it opens straight into the grid. (If it opens as text instead, right-click → **Open with SpreadJS**.)
2. Split the screen so the raw text from Part 1 and the grid are visible together — drag one tab to the side, or right-click the tab → **Split Right**. Seeing both at once is what makes this land.

> **Talking Point (the moment worth pausing on):** "Look at what just happened. I didn't convert anything. I didn't import anything. I didn't save a new file. That is the *same file on disk* — the exact same bytes — and I'm just looking at it through a different window. On the left, commas. On the right, columns. The commas *are* the columns."

**Talk through the transformation:**
> "Now we're seeing the exact same data, but formatted into a table. The spreadsheet read those commas and line breaks and arranged the data into rows and columns. Every comma became a column boundary; every line break became a row boundary. The data is identical — we haven't lost or changed anything — it's just in a visual format that's easier to read."

**Point out the mapped structure:**
- **Column A:** `request_id` (SR-1001, SR-1002, …)
- **Column C:** `category` (pot hole, Streetlight, Trash Pickup, …)
- **Column G:** `status` (resolved, in progress, Closed, …)
- **Column H:** `department` (Public Works, Sanitation, …)
- **Row 1:** the headers
- **Rows 2 and below:** one service request each

### Part 3: Make the Connection Explicit (2 minutes)

**Demonstrate by highlighting:**
1. In the SpreadJS grid, click the `category` cell for SR-1003 (the value `Trash Pickup`)
2. Look across to the raw text pane from Part 1
3. Point to the same value in the raw CSV: the third field on the SR-1003 line

**Explain the parsing:**
> "When you open a CSV in a spreadsheet, the application is doing the work of 'parsing' the file. It reads left to right, top to bottom, and whenever it sees a comma it says 'new column,' and whenever it sees a line break it says 'new row.' That's all a CSV really is: a standard agreement about how to represent table data using commas and line breaks. Because it's so simple, almost any program that handles tables can read it — which is why CivicTrack can export to CSV and a spreadsheet, a database, and an analytics tool can all read it back."

### Part 4: Spot the Messy-Data Problems (3 minutes)

**This raw export is deliberately messy — the same kinds of problems you'll meet on the job.** Walk through what's actually wrong in `service-requests-raw.csv`:

- **Inconsistent category spelling/casing:** `pot hole` (SR-1001) vs `Pothole` (SR-1008 and SR-1014); `Trash Pickup` (SR-1003) vs `Trash pickup` (SR-1010). To a computer these are *different* categories.
- **Inconsistent status values:** `resolved`, `in progress`, `Closed`, `In Progress`, `InProgress` (SR-1009, no space) — several spellings for the same few statuses. CivicTrack has exactly four (New, In Progress, Resolved, Closed), but to a computer `in progress`, `In Progress`, and `InProgress` are three different values.
- **Inconsistent dates:** most rows use `2026-03-02` (ISO), but SR-1003 has `03/02/2026` and SR-1012 has `Mar 6 2026`. A spreadsheet can't reliably sort these together.
- **Missing values:** SR-1004 has a blank `zip`; SR-1008 has a blank `department`.
- **Stray whitespace:** trailing space after `210 Oak Ave ` (SR-1002), a leading space in ` 97002` (SR-1011), and `  Tagging on bridge  ` padded with spaces (SR-1013). A trailing space in `In Progress ` (SR-1014) means it won't match `In Progress`.
- **A typo in the data:** SR-1005 priority reads `Hihg` instead of `High`.
- **A duplicate row:** SR-1007 appears **twice** (two identical lines). That's why the raw file has 15 data rows for 14 real requests.

**Talk through why this matters:**
> "Every one of these is invisible when you skim the file, but each one breaks automated processing. If you filter for status equals 'In Progress', the row with 'In Progress ' and a trailing space is silently left out. If you count requests by category, 'pot hole' and 'Pothole' count as two different things. The duplicate SR-1007 would double-count. This is the reality of real exports — and it's exactly why the next file exists."

**Point ahead to the clean file:**
> "Open `service-requests-clean.csv` and you'll see the same 14 requests with all of this fixed: one spelling per category, one date format, the duplicate removed, the typo corrected, the blanks filled in. That cleaned file is what we'll analyze in the next demo, and it's the data that becomes our database later in the week. Cleaning the data is not busywork — it's the step that makes everything after it possible."

**Reinforce the lesson:**
> "Two takeaways. First, a CSV file is just plain text with a very simple structure: commas separate columns, line breaks separate rows. Second, 'it imported fine' does not mean 'it's clean.' The data can look like a tidy table and still be full of problems a computer will trip over."

## Key Points to Emphasize

- **CSV is plain text:** No special formatting or hidden characters. You can open it in any text editor and see every value.
- **Commas and line breaks are the structure:** The entire format is built on two delimiters. Commas = columns, line breaks = rows.
- **The spreadsheet is a visual representation:** Opening a CSV in a spreadsheet doesn't change the data — it's the same data, just arranged in rows and columns.
- **CSV is a universal format:** Because it's so simple and standard, almost every data tool can read and write it. That's why it's how CivicTrack data moves between systems.
- **Messy is the default:** Real exports arrive with inconsistent casing, mixed date formats, blanks, stray spaces, and duplicates. Spotting them is a core skill.

## Common Questions

**Q: Can I just open the CSV in the grid instead of as text?**
A: Most of the time, yes — and that's exactly what a plain click does now, since SpreadJS is the default editor for `.csv`. The reason to *also* look at the raw text is to understand what's happening under the hood and to troubleshoot imports that go wrong. There's one very practical case where the raw text wins: **trailing spaces and other invisible whitespace.** In the grid, `210 Oak Ave ` looks identical to `210 Oak Ave`. In the text view, you can see the difference — which is exactly the skill Activity 15 will ask for.

**Q: What if a value itself contains a comma — like an address with a comma in it?**
A: Great question. CSV handles this with quotes: a field wrapped in double quotes can contain commas, and the parser treats everything inside the quotes as one field — for example `"100 Main St, Apt 2",97001`. The quotes tell the parser "don't split here." None of the CivicTrack addresses needed this, but you'll see it constantly in real data with names and addresses.

**Q: The raw file has dates in different formats. Which one is "right"?**
A: For storing and exchanging data, ISO format (YYYY-MM-DD, like `2026-03-02`) is the safe standard — it's unambiguous everywhere in the world and sorts correctly as plain text. That's why the clean file standardizes every date to ISO. `03/02/2026` is ambiguous (March 2nd in the US, February 3rd in much of Europe), and `Mar 6 2026` isn't a format a spreadsheet reliably sorts. Picking one format and sticking to it is half of data cleaning.

**Q: Why keep a messy file at all — why not just fix it and move on?**
A: In real work you almost never get to choose the format data arrives in. Keeping the raw export lets you see exactly what you started with, prove what you changed, and re-run the cleaning if the source sends a new batch. Throwing away the original is how you lose the ability to answer "wait, where did this number come from?"
