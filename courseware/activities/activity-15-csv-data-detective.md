# Activity 15: CSV Data Detective

**Module:** VI (Data Management: From Spreadsheets to Databases)
**Related reading:** [Practical Tools: CSVs and Spreadsheets](../docs/Module-06-Data-Management/02-practical-tools-csvs-and-spreadsheets.md)

---

## Objective

You'll investigate a messy, real-world dataset and become a "data detective." You'll identify data quality issues, explain why they matter for programming, clean the data, and develop questions you'd want to answer from it. This activity teaches you that data quality is *essential*—garbage in, garbage out.

Your dataset is the raw export from **CivicTrack**, the City of Rivervale's 311-style service-request system you've followed all week — the kind of messy file that arrives before anyone can analyze it.

---

## Background

In the real world, data is messy. It comes from spreadsheets, web forms, manual entry, and multiple sources. Before you can analyze or program with data, you must understand and clean it.

![The same CivicTrack data in four shapes: messy raw CSV, cleaned CSV, related tables, and JSON from an API.](../diagrams/png/data-journey.png)

*You are doing the first arrow: turning the raw export into something trustworthy.*

Common data quality issues include:
- **Inconsistent formatting**: "01/15/2024" vs. "1-15-24" vs. "January 15, 2024"
- **Missing values**: blank cells, "N/A", "unknown"
- **Duplicates**: the same record appears twice
- **Inconsistent capitalization**: "New York", "new york", "NEW YORK"
- **Extra whitespace**: "  Smith  " instead of "Smith"
- **Wrong data types**: a number stored as text, or text in a number field
- **Typos and spelling errors**: "Seirra Leone" instead of "Sierra Leone"
- **Inconsistent abbreviations**: "St." vs. "Street", "USA" vs. "US"

When a program tries to read this data, it fails or produces wrong results. Your job as a programmer is often to *clean* data before using it.

---

## The Messy Dataset

Your dataset is CivicTrack's raw export: [`../course-project/data/service-requests-raw.csv`](../course-project/data/service-requests-raw.csv). Open that file as you work — it's the real, messy version, straight out of the city's legacy system. Each row is one service request, with these columns:

`request_id, date_submitted, category, description, address, zip, status, department, priority`

A small excerpt is reproduced below so you can see the kinds of problems hiding in it. **Note:** markdown won't show trailing spaces, so a few whitespace issues (like `210 Oak Ave ` or the trailing space on `In Progress `) are easier to spot in the actual file — open it to catch them all.

> ### 🔍 Open this one as **text**, not as a spreadsheet
>
> With the **SpreadJS XLSX Editor** extension installed (`Mescius.spreadjs-xlsx-editor`), clicking a `.csv` in VS Code opens it as a spreadsheet grid. For *this* activity you want the **raw text** instead:
>
> **Right-click `service-requests-raw.csv` → Open With… → Text Editor.**
>
> Why it matters: several of the defects you're hunting are **invisible whitespace**. In a grid, `210 Oak Ave ` and `210 Oak Ave` look exactly the same — the trailing space is real, but the cell won't show it to you. In the text view you can see it, and you can put your cursor at the end of the line and watch the column number tell you it's there.
>
> That's the lesson underneath the exercise: **the view you choose decides which bugs you're able to see.** Feel free to open the grid too (a plain click) to explore the data — just don't hunt whitespace in it.

```
request_id,date_submitted,category,description,address,zip,status,department,priority
SR-1001,2026-03-01,pot hole,Large pothole near intersection,100 Main St,97001,resolved,Public Works,High
SR-1002,2026-03-01,Streetlight,Streetlight out for a week,210 Oak Ave ,97002,in progress,Public Works,Medium
SR-1003,03/02/2026,Trash Pickup,Missed trash collection,55 Elm St,97001,Closed,Sanitation,Low
SR-1004,2026-03-02,Graffiti,Graffiti on park wall,12 River Rd,,New,Code Enforcement,Low
SR-1005,2026-03-03,Water Leak,Water pooling on street,300 Pine St,97002,In Progress,Utilities,Hihg
SR-1006,2026-03-03,noise complaint,Loud construction at night,77 Cedar Ln,97004,New,Code Enforcement,Medium
SR-1007,2026-03-04,Tree Down,Fallen tree blocking sidewalk,500 Maple Dr,97003,Resolved,Parks & Rec,High
SR-1007,2026-03-04,Tree Down,Fallen tree blocking sidewalk,500 Maple Dr,97003,Resolved,Parks & Rec,High
SR-1008,2026-03-04,Pothole,Pothole damaging cars,150 Main St,97001,New,,Medium
SR-1009,2026-03-05,Sidewalk Damage,Cracked sidewalk trip hazard,420 Oak Ave,97002,InProgress,Public Works,Medium
SR-1010,2026-03-05,Trash pickup,Overflowing public bin,8 River Rd,97003,Resolved,Sanitation,Low
SR-1011,2026-03-06,Streetlight,Flickering streetlight,260 Pine St, 97002,New,Public Works,Low
SR-1012,Mar 6 2026,Water Leak,Hydrant leaking,90 Cedar Ln,97004,Closed,Utilities,Medium
SR-1013,2026-03-07,Graffiti,  Tagging on bridge  ,1 River Rd,97003,New,Code Enforcement,Low
SR-1014,2026-03-07,Pothole,Deep pothole after storm,175 Main St,97001,In Progress ,Public Works,High
```

---

## Step-by-Step Instructions

### Part 1: Identify Data Quality Issues (15 minutes)

Go through the dataset line by line. For each issue you find, record:
1. **Which request(s) have the issue** (use the `request_id`, e.g. SR-1001)
2. **What the problem is**
3. **Why it matters for a program**

Below is a template to get you started — several rows are filled in as examples. Fill in the rest. (There are at least 10 distinct issues hiding in this file!)

---

#### Data Quality Issues

| Request(s) | Issue | Why It Matters |
|--------|-------|----------------|
| SR-1001 | **Category casing/spelling**: "pot hole" instead of "Pothole" | A program grouping requests by category treats "pot hole" and "Pothole" (SR-1008, SR-1014) as different categories, so the pothole count is wrong. |
| SR-1001, SR-1002 | **Inconsistent status casing**: "resolved", "in progress" instead of "Resolved", "In Progress" | A report that filters `status = 'In Progress'` silently misses the lowercase versions. |
| SR-1005 | **Priority typo**: "Hihg" instead of "High" | A filter for `priority = 'High'` skips this urgent request entirely — it's misspelled, so it doesn't match. |
| SR-1007 | **Duplicate row**: the entire SR-1007 record appears twice | Counts and totals are inflated; the tree-down request gets double-counted. |
| SR-1004 | **Missing value (zip)**: the ZIP code is blank | Reports that break requests down by ZIP can't place this one. |
| SR-1008 | **Missing value (department)**: the department is blank | The request can't be routed; "requests per department" totals are off. |
| SR-1003, SR-1012 | **Inconsistent date formats**: "03/02/2026" and "Mar 6 2026" instead of "2026-03-02" | A program may fail to parse these or treat them as text. Sorting or filtering by date breaks. |
| (Add more) | | |
| | | |
| | | |

> **Still to find** (don't peek at the cleaned answer first): the `InProgress` status with no space (SR-1009), the `Trash pickup` / `noise complaint` casing (SR-1010, SR-1006), the trailing/leading whitespace (`210 Oak Ave ` on SR-1002, `  Tagging on bridge  ` on SR-1013, `In Progress ` on SR-1014), and the leading-space ZIP (` 97002` on SR-1011).

---

### Part 2: Create a Clean Version (12 minutes)

Now clean the data. Use consistent formatting:
- **Categories**: Standardized spelling, Title Case (e.g., "Pothole", "Trash Pickup", "Noise Complaint")
- **Statuses**: One of exactly four values, Title Case with a space: "New", "In Progress", "Resolved", "Closed"
- **Priority**: One of "Low", "Medium", "High" (fix the typo)
- **Dates**: ISO 8601 format (YYYY-MM-DD)
- **Whitespace**: Trim leading/trailing spaces from every field (addresses, descriptions, ZIPs, statuses)
- **ZIP**: Keep as text; trim the leading space

Remove the duplicate row. Where a missing value can be safely inferred from the rest of the record, fill it in (see the notes below); otherwise mark it NULL.

**Cleaned Data** (this should match [`../course-project/data/service-requests-clean.csv`](../course-project/data/service-requests-clean.csv) — 14 rows, duplicate removed):

```
request_id,date_submitted,category,description,address,zip,status,department,priority
SR-1001,2026-03-01,Pothole,Large pothole near intersection,100 Main St,97001,Resolved,Public Works,High
SR-1002,2026-03-01,Streetlight,Streetlight out for a week,210 Oak Ave,97002,In Progress,Public Works,Medium
SR-1003,2026-03-02,Trash Pickup,Missed trash collection,55 Elm St,97001,Closed,Sanitation,Low
SR-1004,2026-03-02,Graffiti,Graffiti on park wall,12 River Rd,97003,New,Code Enforcement,Low
SR-1005,2026-03-03,Water Leak,Water pooling on street,300 Pine St,97002,In Progress,Utilities,High
SR-1006,2026-03-03,Noise Complaint,Loud construction at night,77 Cedar Ln,97004,New,Code Enforcement,Medium
SR-1007,2026-03-04,Tree Down,Fallen tree blocking sidewalk,500 Maple Dr,97003,Resolved,Parks & Rec,High
SR-1008,2026-03-04,Pothole,Pothole damaging cars,150 Main St,97001,New,Public Works,Medium
SR-1009,2026-03-05,Sidewalk Damage,Cracked sidewalk trip hazard,420 Oak Ave,97002,In Progress,Public Works,Medium
SR-1010,2026-03-05,Trash Pickup,Overflowing public bin,8 River Rd,97003,Resolved,Sanitation,Low
SR-1011,2026-03-06,Streetlight,Flickering streetlight,260 Pine St,97002,New,Public Works,Low
SR-1012,2026-03-06,Water Leak,Hydrant leaking,90 Cedar Ln,97004,Closed,Utilities,Medium
SR-1013,2026-03-07,Graffiti,Tagging on bridge,1 River Rd,97003,New,Code Enforcement,Low
SR-1014,2026-03-07,Pothole,Deep pothole after storm,175 Main St,97001,In Progress,Public Works,High
```

**A few cleaning decisions worth noting:**
- **SR-1004 (missing ZIP):** filled in as `97003`. The address (12 River Rd) matches other River Rd requests (SR-1010, SR-1013) that are in `97003`, so the value can be inferred rather than left NULL.
- **SR-1008 (missing department):** filled in as `Public Works`. Its category is Pothole, and every other Pothole request routes to Public Works — so the department follows from the category.
- **SR-1014 (status `In Progress `):** the raw value has a trailing space — trimming whitespace gives the clean `In Progress`.
- **Duplicate SR-1007:** the second identical row is dropped, leaving one.

**Questions as you clean:**
1. **Duplicates**: How did you decide which duplicate row to keep or remove?
2. **Missing data**: SR-1004 (ZIP) and SR-1008 (department) were both blank. When is it safe to *infer* a missing value from the rest of the record, and when should you leave it NULL instead?

*Your answers:*

---

### Part 3: Prevent Future Data Quality Issues (8 minutes)

Imagine you're talking to the person who exported this CivicTrack data (or who built the intake form behind it). You want to help them produce cleaner data in the future.

**Write a list of 5–7 recommendations** for data entry and export:

*Example:*
- Use a standardized date format across all entries (YYYY-MM-DD is best for computers).
- Make category, status, and priority drop-downs instead of free text — so "pot hole", "Pothole", and "POTHOLE" can't all happen.

*Your recommendations:*

1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________
4. _______________________________________________________________
5. _______________________________________________________________

---

### Part 4: Ask Questions and Plan Analysis (5 minutes)

A CivicTrack manager wants to understand this service-request data. Write **three questions** you could answer with the cleaned data, and describe what spreadsheet formulas or operations you'd use to answer each.

---

#### Question 1

**Question:** "How many requests does each department have?"

**How you'd answer it:**
- Group the data by department
- Count the requests for each department
- Compare the counts

**Spreadsheet approach:** COUNTIF() to count requests per department; or a pivot table with department as the row and a count of request_id as the value.

---

#### Question 2

**Question:** Write your own: "_____________________________________________?"

**How you'd answer it:**
- Step 1: ________________________________________________________
- Step 2: ________________________________________________________
- Step 3: ________________________________________________________

**Spreadsheet approach:** ___________________________________________

---

#### Question 3

**Question:** Write your own: "_____________________________________________?"

**How you'd answer it:**
- Step 1: ________________________________________________________
- Step 2: ________________________________________________________
- Step 3: ________________________________________________________

**Spreadsheet approach:** ___________________________________________

---

## Expected Deliverable

A document (2–3 pages) containing:

1. **Your completed Issues Table** (at least 10 issues identified with explanations, by request ID)
2. **Your cleaned CSV data** (formatted consistently, the duplicate SR-1007 removed, standardized — should match `service-requests-clean.csv`)
3. **Your observations about duplicates and missing data** (1–2 sentences explaining your decisions for SR-1007, SR-1004, and SR-1008)
4. **Your 5–7 recommendations** for creating better data in the future
5. **Your three questions and analysis plans** (at least one is your own)

You can format this as a markdown file, a filled-in copy of this activity, or a document of your choice.

---

## Reflection Questions

1. **What surprised you most about the number and variety of data quality issues in this dataset?** Did you expect so many problems, or did you find more than you thought?

2. **How would these data quality issues have broken a program trying to analyze the data?** Imagine writing code to "count open requests by department"—what would go wrong with the messy data (the duplicate SR-1007, the lowercase statuses, the blank department) that's fixed in the clean version?

3. **In your previous career, have you worked with messy data?** (Spreadsheets, reports, databases?) How did your team handle it? Was there a better way?

---

## Tips for Success

- **Be thorough.** Data quality issues are easy to overlook. Read every line carefully — and open the actual CSV **as text** (right-click → Open With… → Text Editor), since both markdown and the spreadsheet grid hide the trailing-space issues.
- **Think like a program.** When you see "03/02/2026" and "Mar 6 2026", a computer sees two *different strings*, not two ways of writing the same date. Same with "In Progress" vs "InProgress".
- **Standardize consistently.** Pick one format for each type of data and stick with it everywhere.
- **Document your decisions.** When cleaning, note *why* you made each choice (e.g., "Removed the second SR-1007 because it's an exact duplicate of the first").
- **Use your real-world experience.** You've probably seen messy data in your old job. Transfer that experience here.

---

## Going Deeper

Once you've completed this activity:
- **Learn about data validation:** Rules that prevent bad data from entering a system in the first place (e.g., "status must be one of New/In Progress/Resolved/Closed", "date must be in YYYY-MM-DD format").
- **Explore data cleaning libraries:** In Python, pandas.read_csv() can help clean data automatically. In Excel, there are tools for removing duplicates, finding and replacing, and fixing formatting.
- **Understand ETL:** Extract-Transform-Load is how data engineers move data from messy sources into clean databases. Your work today mirrors the "Transform" step.
- **Think about scale:** Cleaning 15 rows by hand is tedious but doable. Cleaning 15 million rows requires automation. How would you write code to clean this dataset programmatically?

---

## Real-World Context

This activity mirrors a real part of programming and data science work. A Data Engineer or Python developer might spend 70% of their time cleaning and preparing data, and only 30% analyzing it. Companies often have whole teams focused on *data quality*. It's unglamorous but essential—quality analysis depends on quality data.

When you build systems, you have the power to prevent messy data from the start. Use it!
