# Demo 23: SQL Basics: SELECT, WHERE, ORDER BY

**Module:** VI | **Topic:** Introduction to Databases
**Estimated Time:** 16 minutes
**Related reading:** [Introduction to Databases](../docs/Module-06-Data-Management/03-introduction-to-databases.md)

## Objective
Learn the fundamentals of querying data in SQL by demonstrating SELECT (choosing columns), WHERE (filtering rows), and ORDER BY (sorting results) — using the **CivicTrack `requests` table**, the same City of Rivervale service-request data we cleaned in a CSV and analyzed in a spreadsheet earlier in Module VI.

![The CivicTrack data model: requests pointing to categories pointing to departments, with primary and foreign keys marked.](../diagrams/png/civictrack-erd.png)

*Leave this up for Demos 23, 24 and 25. Every query you write is a path through it.*

This is the third stop in the data story. The spreadsheet answered "how many requests are open?" with COUNTIF; now we ask the same kinds of questions with SQL, which scales to far more data and enforces structure.

## Setup/Prerequisites
- Access to a SQL sandbox environment:
  - **SQLite Online** (https://sqliteonline.com/) — no account required, works in browser
  - **Fallback:** **DB Fiddle** (https://www.db-fiddle.com/) with the **SQLite** engine selected (use this if sqliteonline.com is slow, blocked, or down the day you teach)
- The `requests` table created and populated (provided below)
- Students have browser access and can follow along in their own sandbox

> This is a subset of the full CivicTrack model in `../course-project/data/schema.md`. Here we use just the `requests` table so we can focus on single-table queries. Demo 24 adds the `categories` and `departments` tables and joins them.

## Step-by-Step Script

### Part 1: Set Up the Table (2 minutes)

**Open SQLite Online:**
1. Navigate to https://sqliteonline.com/ (or the DB Fiddle fallback)
2. Open the SQL editor
3. Paste this table creation and data:

> **Instructor note — start every SQL demo with the DROP lines.** sqliteonline.com keeps your tables
> for the whole browser session, so running Demo 24 after Demo 23 without these will fail with
> `table requests already exists` and stall the room. `DROP TABLE IF EXISTS` is safe to run even the
> first time — that's what the `IF EXISTS` is for.

```sql
DROP TABLE IF EXISTS requests;

CREATE TABLE requests (
    request_id     TEXT PRIMARY KEY,
    date_submitted TEXT NOT NULL,
    category_id    INTEGER,
    description    TEXT,
    address        TEXT,
    zip            TEXT,
    status         TEXT,
    priority       TEXT
);

INSERT INTO requests VALUES
    ('SR-1001', '2026-03-01', 1, 'Large pothole near intersection', '100 Main St',  '97001', 'Resolved',    'High'),
    ('SR-1002', '2026-03-01', 2, 'Streetlight out for a week',      '210 Oak Ave',  '97002', 'In Progress', 'Medium'),
    ('SR-1003', '2026-03-02', 4, 'Missed trash collection',         '55 Elm St',    '97001', 'Closed',      'Low'),
    ('SR-1004', '2026-03-02', 5, 'Graffiti on park wall',           '12 River Rd',  '97003', 'New',         'Low'),
    ('SR-1005', '2026-03-03', 7, 'Water pooling on street',         '300 Pine St',  '97002', 'In Progress', 'High'),
    ('SR-1006', '2026-03-03', 6, 'Loud construction at night',      '77 Cedar Ln',  '97004', 'New',         'Medium'),
    ('SR-1007', '2026-03-04', 8, 'Fallen tree blocking sidewalk',   '500 Maple Dr', '97003', 'Resolved',    'High'),
    ('SR-1008', '2026-03-04', 1, 'Pothole damaging cars',           '150 Main St',  '97001', 'New',         'Medium'),
    ('SR-1009', '2026-03-05', 3, 'Cracked sidewalk trip hazard',    '420 Oak Ave',  '97002', 'In Progress', 'Medium'),
    ('SR-1010', '2026-03-05', 4, 'Overflowing public bin',          '8 River Rd',   '97003', 'Resolved',    'Low'),
    ('SR-1011', '2026-03-06', 2, 'Flickering streetlight',          '260 Pine St',  '97002', 'New',         'Low'),
    ('SR-1012', '2026-03-06', 7, 'Hydrant leaking',                 '90 Cedar Ln',  '97004', 'Closed',      'Medium'),
    ('SR-1013', '2026-03-07', 5, 'Tagging on bridge',               '1 River Rd',   '97003', 'New',         'Low'),
    ('SR-1014', '2026-03-07', 1, 'Deep pothole after storm',        '175 Main St',  '97001', 'In Progress', 'High');
```

4. Run the script to create and populate the table

**Talk through what we just did:**
> "We've created a table called 'requests' that holds CivicTrack's citizen service requests — the same 14 records we cleaned in the CSV. Each row is one request: its ID, the date submitted, which category it falls under, a description, address, ZIP, status, and priority. A SQL table is like a spreadsheet, but built for querying and filtering large amounts of data. We've inserted 14 rows. Now we can ask questions with SQL queries."

### Part 2: Demonstrate SELECT * (2 minutes)

**Run the first query:**
```sql
SELECT * FROM requests;
```

**Show the results:**
All **14** requests display, with all eight columns.

**Explain:**
> "This is the most basic SQL query. SELECT means 'retrieve data,' the asterisk (*) means 'all columns,' and FROM requests means 'from the requests table.' So: 'give me every column and every row.' In a real database with millions of records this would be wasteful, but it's great for seeing what's in a table. The * is a shortcut; we can also list specific columns."

### Part 3: Select Specific Columns (2 minutes)

**Run this query:**
```sql
SELECT request_id, status, priority FROM requests;
```

**Show the results:**
All 14 rows, but only **three columns**: request_id, status, priority.

**Explain:**
> "Here I chose specific columns instead of the asterisk. If I'm building a status report, I don't need the description or address — just the ID, status, and priority. Selecting only what I need makes the query faster and the results clearer. And the columns appear in the order I listed them, which lets me arrange the output the way I want."

**Point out the pattern:**
> "The basic shape is always: SELECT [columns] FROM [table]. List as many columns as you want, separated by commas, in the order you want them."

### Part 4: WHERE Filtering (4 minutes)

**Run this query:**
```sql
SELECT * FROM requests WHERE status = 'New';
```

**Show the results:**
**5 rows** — SR-1004, SR-1006, SR-1008, SR-1011, SR-1013 (the brand-new, unassigned-work requests).

**Explain:**
> "WHERE is a filter: 'only give me rows where this condition is true.' We're asking for requests whose status is exactly 'New.' Because status is text, we wrap the value in single quotes. The equals sign is the comparison operator for 'exact match.' This is the same question we asked the spreadsheet with COUNTIF — but instead of just a count, SQL hands back the actual matching rows. There are five, which matches the five New requests we counted in Demo 22."

**Run another WHERE query (numeric-style filter on a text column is fine here, but let's filter priority):**
```sql
SELECT request_id, date_submitted, priority FROM requests WHERE priority = 'High';
```

**Show the results:**
**4 rows** — SR-1001, SR-1005, SR-1007, SR-1014. These are the high-priority requests.

**Explain:**
> "This answers a real operations question: 'Which requests are high priority?' There are four. Priority is text too, so it's quoted. In real scenarios you'd filter on things like 'requests submitted in the last 7 days' or 'requests in ZIP 97001.' The WHERE clause is where most of the logic in a query lives."

**Show a compound WHERE with AND:**
```sql
SELECT request_id, date_submitted, status, priority
FROM requests
WHERE status = 'In Progress' AND priority = 'High';
```

**Results:**
**2 rows** — SR-1005 and SR-1014. Both are In Progress *and* High priority.

**Explain:**
> "AND requires both conditions to be true. This finds the urgent, actively-worked items — exactly what a supervisor would check first thing in the morning. SR-1005 (a water leak) and SR-1014 (a deep pothole after a storm) both qualify. You can combine conditions with AND and OR, though too many conditions hurt readability."

### Part 5: ORDER BY Sorting (3 minutes)

**Run this query:**
```sql
SELECT request_id, date_submitted, status FROM requests ORDER BY date_submitted DESC;
```

**Show the results:**
All 14 rows, newest first. The two most recent (2026-03-07) are SR-1013 and SR-1014; the two oldest (2026-03-01) are SR-1001 and SR-1002 at the bottom.

**Explain:**
> "ORDER BY sorts the results. DESC means descending — for dates, that's newest first. Without DESC it defaults to ASC (ascending), which for dates is oldest first. This is how you'd build a 'most recent requests' view for a dashboard."

**Run another ORDER BY query:**
```sql
SELECT request_id, status, priority FROM requests ORDER BY priority ASC;
```

**Results:**
All 14 rows sorted alphabetically by priority: all **High** rows first, then **Low**, then **Medium** (alphabetical order, not severity order — an important gotcha).

**Explain:**
> "ORDER BY works on any column. For text it's alphabetical, for dates chronological, for numbers numeric. Watch out here: alphabetically, 'High' comes before 'Low' comes before 'Medium' — that's *not* most-to-least urgent. Sorting text by its letters isn't the same as sorting by meaning. If we needed true severity order, we'd store priority as a number or add a sort key. Good thing to flag for students."

**Show combining WHERE and ORDER BY — the verified report query:**
```sql
SELECT request_id, date_submitted, status, priority
FROM requests
WHERE status IN ('New', 'In Progress') AND priority = 'High'
ORDER BY date_submitted DESC;
```

**Results:**
**2 rows**, newest first: **SR-1014** (2026-03-07), then **SR-1005** (2026-03-03). These are the *open* (New or In Progress) high-priority requests — the open high-priority backlog.

**Explain:**
> "This is a query straight from the CivicTrack schema doc. `IN ('New', 'In Progress')` is shorthand for 'status is New OR In Progress' — that's our definition of 'open.' Combined with priority High, it surfaces the open high-priority backlog, newest first. Note the clause order: SELECT, then FROM, then WHERE, then ORDER BY. That order is required — put ORDER BY before WHERE and the query fails."

### Part 6: Wrap-Up and Key Insight (1 minute)

**Summarize the pattern:**
> "Every query followed the same structure: SELECT, FROM, WHERE (optional), ORDER BY (optional). We asked CivicTrack the same questions we asked the spreadsheet — how many are New, which are high priority — but SQL returns the actual rows and scales to millions of them. Next demo we'll connect this table to its categories and departments with a JOIN, and use GROUP BY to get the per-department breakdown."

## Key Points to Emphasize

- **SELECT chooses columns, WHERE filters rows, ORDER BY sorts results.** These three operations are the foundation of querying, and they work together.
- **The clause order matters:** SELECT, FROM, WHERE, ORDER BY follow a fixed sequence. The engine finds the table, filters rows, picks columns, then sorts.
- **Text values need quotes.** `'New'` and `'High'` are text and must be quoted with single quotes. This is a common beginner stumble.
- **Sorting text isn't sorting by meaning.** `ORDER BY priority` gives High, Low, Medium alphabetically — not by urgency. Be deliberate about what a sort actually does.
- **Same questions as the spreadsheet, more power.** `WHERE status = 'New'` is the SQL form of `COUNTIF(...,"New")`, but it returns rows and scales.

## Common Questions

**Q: What's the difference between = and ==?**
A: In SQL you use a single equals sign (=) for comparison. Double equals (==) is what most programming languages use, and it's a habit worth breaking here. A few engines — SQLite among them — quietly accept `==` too, so it may *appear* to work in our sandbox, but it isn't standard SQL and it will fail on other databases. Stick with a single `=`.

**Q: Why use `IN ('New', 'In Progress')` instead of two conditions with OR?**
A: They do the same thing — `status IN ('New', 'In Progress')` is exactly equivalent to `status = 'New' OR status = 'In Progress'`. IN is just shorter and easier to read when you're matching one column against several possible values. For two values it's a wash; for five or six it's much cleaner.

**Q: Can I match part of a text value, like all requests on River Rd?**
A: Yes — you'd use LIKE with the wildcard %. For example, `WHERE address LIKE '%River Rd'` finds every address ending in "River Rd" (SR-1004, SR-1010, SR-1013). We haven't formally covered LIKE yet, so for now focus on exact matches with =.

**Q: The `requests` table has `category_id` numbers instead of category names. Why?**
A: That's the database normalizing the data: instead of repeating the text "Pothole" on every pothole row, it stores a small number that points to a `categories` table where "Pothole" is spelled out once. It removes the duplication you saw in the flat CSV. We'll add that `categories` table and connect it with a JOIN in the very next demo — that's how we'll turn `category_id = 1` back into "Pothole."
