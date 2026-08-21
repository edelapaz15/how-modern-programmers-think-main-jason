# Demo 22: Spreadsheet Formulas and Data Issues

**Module:** VI | **Topic:** Practical Tools — CSVs and Spreadsheets
**Estimated Time:** 15 minutes
**Related reading:** [Practical Tools: CSVs and Spreadsheets](../docs/Module-06-Data-Management/02-practical-tools-csvs-and-spreadsheets.md)

## Objective
Demonstrate essential spreadsheet formulas (COUNTA, COUNTIF, and IF) on the cleaned CivicTrack data, so students can answer real reporting questions — "how many requests are still open?", "how many per department?" — without writing any code, and see why a clean dataset is what makes those answers trustworthy.

This is the second stop in the Module VI data story. In Demo 21 we looked at the messy raw export and the cleaned version. Here we open the **clean file** in a spreadsheet and put it to work. The same data becomes a database in Demos 23–25.

## Setup/Prerequisites
- **VS Code with the SpreadJS XLSX Editor extension installed** (`Mescius.spreadjs-xlsx-editor`, publisher MESCIUS inc — free). This is our spreadsheet for the course — everything below runs inside VS Code, with no Excel license and no separate application. Install it from the Extensions panel (`Ctrl+Shift+X`) — search **"SpreadJS XLSX Editor"** — or run:
  ```powershell
  code --install-extension Mescius.spreadjs-xlsx-editor
  ```
- The clean CivicTrack data file: `../course-project/data/service-requests-clean.csv` (14 service requests)
- Students have VS Code open on the course project folder

> **Opening the file:** click `service-requests-clean.csv` in the VS Code Explorer. The extension is the default editor for `.csv`, so it opens directly into a spreadsheet grid with a ribbon — each comma-separated field already in its own column. (If it opens as raw text, right-click → **Open with SpreadJS**.)
>
> SpreadJS has a full Excel-compatible formula engine, so `COUNTA`, `COUNTIF`, and `IF` behave exactly as written below. Type them into the formula bar the same way you would in Excel.

**Know the layout before you start.** After opening the clean file, row 1 is the header and the 14 data rows occupy **rows 2 through 15**. The columns are:

| Col | Field | Col | Field |
|-----|-------|-----|-------|
| A | request_id | F | zip |
| B | date_submitted | G | **status** |
| C | **category** | H | **department** |
| D | description | I | **priority** |
| E | address | | |

Every formula below uses those column letters and the range `2:15`.

## Step-by-Step Script

### Part 1: Count the Records (2 minutes)

**Open the clean data:**
1. In the VS Code Explorer, click `../course-project/data/service-requests-clean.csv`
2. It opens in the SpreadJS grid
3. Confirm you see the header in row 1 and data in rows 2–15

**Talk through the setup:**
> "This is the cleaned version of the messy export we saw last demo. One spelling per category, one date format, no duplicate row, no blank cells. This is the kind of data automated tools love. Now let's ask questions about it using formulas — instructions that tell the spreadsheet to calculate for us."

**Demonstrate COUNTA — how many requests do we have? (1 minute):**
1. Click an empty cell below the data, e.g. `A17`
2. Type: `=COUNTA(A2:A15)`
3. Press Enter — the cell shows **14**

**Talk through it:**
> "COUNTA counts non-empty cells. We're counting request IDs in column A, rows 2 through 15, and we get 14. That confirms our record count. If this came back as 13, we'd know a row got dropped; if it came back 15, we'd suspect the duplicate sneaked back in. The very first thing to do with any dataset is confirm how many rows you actually have."

### Part 2: COUNTIF — Answer Real Reporting Questions (7 minutes)

> "The most common CivicTrack reporting question is 'how many requests are in each status?' For that we use COUNTIF: it counts cells that match a condition. The pattern is `=COUNTIF(range, criteria)`."

**Count requests by status (status is column G):**

1. `=COUNTIF(G2:G15,"New")` → **5**
2. `=COUNTIF(G2:G15,"In Progress")` → **4**
3. `=COUNTIF(G2:G15,"Resolved")` → **3**
4. `=COUNTIF(G2:G15,"Closed")` → **2**

**Talk through it:**
> "Five New, four In Progress, three Resolved, two Closed. Add those up: 5 + 4 + 3 + 2 = 14 — exactly our record count, so we know we've accounted for every request and nothing is mis-spelled. That cross-check is the payoff of clean data: in the *messy* file, 'InProgress' with no space and 'In Progress ' with a trailing space are each their own separate value, so the four pieces would never add up to 14 — and the number you'd hand your manager would be quietly wrong."

> **Instructor note — don't say "in progress" fragments because of the capital letter.** `COUNTIF` criteria matching is **case-insensitive**, so `COUNTIF(G2:G16,"In Progress")` on the raw file returns **2**: it matches `In Progress` *and* `in progress`. What actually breaks the count is a **missing space** (`InProgress`) or a **trailing space** (`In Progress `) — those are genuinely different strings to the spreadsheet. Use those two examples. (Casing *does* matter to SQLite's `=` — the engine Demos 23–25 use — which is why Activity 15 can say the opposite about a `WHERE status = 'In Progress'` query and still be right. It's not a universal rule: whether text comparison ignores case depends on the database's *collation*, and MySQL and SQL Server are case-insensitive by default.)

**Answer the manager's real question — how many are still open?**
5. `=COUNTIF(G2:G15,"New") + COUNTIF(G2:G15,"In Progress")` → **9**

> "'Open' means New or In Progress — work that isn't finished. Nine of our fourteen requests are still open. That's a number a department manager actually wants on a dashboard, and we got it from a spreadsheet with no programming at all."

**Count requests by department (department is column H):**
6. `=COUNTIF(H2:H15,"Public Works")` → **6**
7. `=COUNTIF(H2:H15,"Sanitation")` → **2**
8. `=COUNTIF(H2:H15,"Code Enforcement")` → **3**
9. `=COUNTIF(H2:H15,"Utilities")` → **2**
10. `=COUNTIF(H2:H15,"Parks & Rec")` → **1**

> "Public Works owns six of the fourteen requests — the busiest department by far. Check the math: 6 + 2 + 3 + 2 + 1 = 14. Every request belongs to exactly one department, so the parts sum to the whole."

**Count requests by category (category is column C) and by priority (column I):**
11. `=COUNTIF(C2:C15,"Pothole")` → **3** (the most common category)
12. `=COUNTIF(I2:I15,"High")` → **4** (the high-priority workload)

> "Potholes are our most-reported category at three. Four requests are High priority. These one-line formulas are the same questions we'll soon ask the database with SQL — COUNTIF here becomes COUNT plus GROUP BY there."

### Part 3: IF — Categorize Each Row (3 minutes)

> "COUNTIF summarizes. IF labels each individual row based on a condition. Let's flag every open request."

1. Click `J2` (an empty column next to the data)
2. Type: `=IF(OR(G2="New",G2="In Progress"),"OPEN","DONE")`
3. Press Enter — for SR-1001 (Resolved) it shows **DONE**
4. Copy the formula down `J3:J15`

**Explain:**
> "IF says 'if this condition is true, write the first value; otherwise write the second.' Here: if the status is New or In Progress, label it OPEN, otherwise DONE. Now every request carries an at-a-glance label. Count the OPENs with `=COUNTIF(J2:J15,"OPEN")` and you get **9** — the same nine we found before, two different ways. When two independent methods agree, you trust the answer."

### Part 4: Why This Only Works on Clean Data (2 minutes)

**Tie back to Demo 21:**
> "Every formula today depended on the data being clean. Picture running these on the *raw* export instead — note the ranges end at row **16**, not 15, because the raw file carries one extra row (the duplicate):
> - `COUNTIF(G2:G16,"In Progress")` would miss the row whose status was typed `In Progress ` with a trailing space — it doesn't match `In Progress`.
> - `COUNTIF(C2:C16,"Pothole")` would return the wrong total because `pot hole` and `Pothole` are different text to a computer.
> - `COUNTA(A2:A16)` would return 15, not 14, because SR-1007 was duplicated.
> - Any date sort would scramble, because `03/02/2026` and `Mar 6 2026` aren't recognized the same way as the ISO dates.
>
> The cleaning we did in Demo 21 is what makes every number on this dashboard correct. Garbage in, garbage out — no formula can rescue fundamentally messy data."

**Summarize the lesson:**
> "Spreadsheets let you answer real questions about CivicTrack data fast: counts, breakdowns by status and department, simple labels. They're the right tool for a quick look at a few hundred rows. But notice we keep re-typing the same conditions, and a sheet can't easily enforce that every status is one of four valid values. That's exactly the gap a database fills — which is where we go next."

## Key Points to Emphasize

- **COUNTA confirms your record count.** Always start by checking how many rows you actually have (here, 14) before trusting any other number.
- **COUNTIF answers "how many match?"** It turns a column of values into a reporting breakdown — by status, department, category, or priority — with one formula each.
- **Cross-checks catch errors.** The breakdowns sum back to 14, and two methods give the same 9 open requests. When numbers reconcile, you trust them.
- **Clean data is the prerequisite.** Every formula here would silently produce wrong answers on the messy export. Data quality is what makes analysis trustworthy.
- **Spreadsheets have limits.** Repeating conditions and no enforced valid-value rules are why this same data moves into a database next.

## Common Questions

**Q: My COUNTIF returned 0 when I expected a real number. What went wrong?**
A: Almost always a text mismatch. COUNTIF needs the criteria to match exactly — `"In Progress"` won't match a cell that actually says `In progress` or has a trailing space. Click the cell you're counting and check its exact contents. This is the spreadsheet version of the same lesson from Demo 21: tiny inconsistencies break automated matching.

**Q: Why use COUNTIF instead of just filtering and reading the count at the bottom?**
A: Filtering is great for a quick one-off look. COUNTIF is better when you want a *standing* report — a little table of "New / In Progress / Resolved / Closed" counts that updates automatically if the data changes. It also documents the question you're asking, so the next person can see exactly how each number was produced.

**Q: These are the same questions we'll ask the database. Why bother with the spreadsheet at all?**
A: Two reasons. First, for a few hundred rows a spreadsheet is faster to set up than a database. Second, doing it here first makes the SQL click: `COUNTIF(G2:G15,"New")` is conceptually `SELECT COUNT(*) FROM requests WHERE status = 'New'`, and counting by department is `GROUP BY`. Same questions, more powerful tool. The spreadsheet builds the intuition the database then scales up.

**Q: In the real world, how often is data already this clean?**
A: Rarely. Plan to spend a large share of any data task just cleaning and checking — standardizing values, removing duplicates, filling or flagging blanks — before a single formula or query is trustworthy. If you can automate that cleanup, you become very valuable. That's a big part of what you'll do once you start writing actual code.
