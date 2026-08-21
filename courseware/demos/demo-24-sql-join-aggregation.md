# Demo 24: SQL JOIN and Aggregation (GROUP BY, COUNT, HAVING)

**Module:** VI | **Topic:** Introduction to Databases
**Estimated Time:** 17 minutes
**Related reading:** [Introduction to Databases](../docs/Module-06-Data-Management/03-introduction-to-databases.md)

## Objective
Understand how to combine data from multiple tables using INNER JOIN, then use GROUP BY with aggregate functions (COUNT) and HAVING to answer real CivicTrack reporting questions — most importantly, "how many open requests does each department have?" This builds directly on the single `requests` table from Demo 23 by adding the `categories` and `departments` tables it points to.

This is the heart of the Module VI data story: the same data we cleaned in a CSV and counted in a spreadsheet is now spread across three related tables, and JOIN is how we put it back together to answer questions a single table can't.

## Setup/Prerequisites
- Access to a SQL sandbox environment:
  - **SQLite Online** (https://sqliteonline.com/)
  - **Fallback:** **DB Fiddle** (https://www.db-fiddle.com/) with the **SQLite** engine selected (use this if sqliteonline.com is unavailable the day you teach)
- The three CivicTrack tables — `departments`, `categories`, `requests` — created and populated (provided below)
- Students have browser access and can follow along
- Familiarity with SELECT, WHERE, and ORDER BY (Demo 23)

> This is the full relational model from `../course-project/data/schema.md`. Demo 23 used the `requests` table alone; here we add the two tables it references.

## Step-by-Step Script

### Part 1: Set Up the Three Tables (2.5 minutes)

**Create and populate all three tables:**

> **Instructor note:** the `DROP` lines matter. If you ran Demo 23 in this browser session, its
> `requests` table is still there and `CREATE TABLE requests` will fail with `table requests already
> exists`. Drop children before parents — `requests` points at `categories`, which points at
> `departments`.

```sql
DROP TABLE IF EXISTS requests;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    department_id INTEGER PRIMARY KEY,
    name          TEXT NOT NULL
);

CREATE TABLE categories (
    category_id   INTEGER PRIMARY KEY,
    name          TEXT NOT NULL,
    department_id INTEGER REFERENCES departments(department_id)
);

CREATE TABLE requests (
    request_id     TEXT PRIMARY KEY,
    date_submitted TEXT NOT NULL,
    category_id    INTEGER REFERENCES categories(category_id),
    description    TEXT,
    address        TEXT,
    zip            TEXT,
    status         TEXT,
    priority       TEXT
);

INSERT INTO departments VALUES
    (1, 'Public Works'),
    (2, 'Sanitation'),
    (3, 'Code Enforcement'),
    (4, 'Utilities'),
    (5, 'Parks & Rec');

INSERT INTO categories VALUES
    (1, 'Pothole',         1),
    (2, 'Streetlight',     1),
    (3, 'Sidewalk Damage', 1),
    (4, 'Trash Pickup',    2),
    (5, 'Graffiti',        3),
    (6, 'Noise Complaint', 3),
    (7, 'Water Leak',      4),
    (8, 'Tree Down',       5);

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

**Talk through the relationship:**
> "Now we have three tables. `departments` lists the five city departments. `categories` lists the eight request types — and each category points to the department that handles it, via department_id. `requests` holds the 14 service requests, and each one points to its category via category_id. This is how relational databases avoid duplication: instead of writing 'Pothole / Public Works' on every pothole row like the flat CSV did, we store 'Pothole' once and 'Public Works' once, and link everything with small ID numbers. The trade-off is that to read it back, we have to reconnect the tables — and that's what JOIN does."

### Part 2: The Problem Without JOIN (1.5 minutes)

**Ask the question:**
> "Here's the reporting question every CivicTrack manager asks: 'How many open requests does each department have?' But look — the `requests` table doesn't contain a department name at all. It only has category_id. The department name lives two tables away. As a human I could trace SR-1001 → category 1 → department 1 → Public Works by hand, but the database needs to be told how the tables connect."

**Show the pieces separately:**
```sql
SELECT request_id, category_id, status FROM requests;
```
```sql
SELECT category_id, name, department_id FROM categories;
```

**Explain the problem:**
> "Two separate result sets. One has requests with category IDs, the other maps category IDs to departments. We need a way to stitch them together in a single query. That's JOIN."

### Part 3: INNER JOIN Across Three Tables (3.5 minutes)

**Run this query:**
```sql
SELECT
    r.request_id,
    r.status,
    c.name AS category,
    d.name AS department
FROM requests r
JOIN categories  c ON r.category_id = c.category_id
JOIN departments d ON c.department_id = d.department_id
ORDER BY r.request_id;
```

**Show the results:**
All **14** rows, now with readable category and department names. The first few:

```
SR-1001   Resolved      Pothole          Public Works
SR-1002   In Progress   Streetlight      Public Works
SR-1003   Closed        Trash Pickup     Sanitation
SR-1004   New           Graffiti         Code Enforcement
SR-1005   In Progress   Water Leak       Utilities
```

**Walk through the syntax:**
> "Three parts. First, SELECT the columns we want — note `r`, `c`, and `d` are short aliases for the three tables, so `c.name` is the category's name and `d.name` is the department's name. Second, we start FROM requests, then JOIN categories ON the matching category_id, then JOIN departments ON the matching department_id. Each JOIN says 'follow this link.' The result is the flat, readable view — exactly what the CSV showed — but rebuilt from the normalized tables. We turned `category_id = 7` back into 'Water Leak' in the 'Utilities' department."

**Reinforce the concept:**
> "INNER JOIN means 'only show rows where the link matches on both sides.' Every request has a valid category and every category has a valid department, so all 14 rows come through. If a request pointed to a category that didn't exist, an INNER JOIN would drop it — which is actually a useful way to spot broken data."

### Part 4: GROUP BY and COUNT — The Department Report (4 minutes)

**Ask the question, then run the verified query:**
> "Now the real report. We have the department on every row; let's count how many *open* requests each department has. 'Open' means status New or In Progress."

```sql
-- How many open requests does each department have?
SELECT d.name AS department, COUNT(*) AS open_requests
FROM requests r
JOIN categories  c ON r.category_id = c.category_id
JOIN departments d ON c.department_id = d.department_id
WHERE r.status IN ('New', 'In Progress')
GROUP BY d.name
ORDER BY open_requests DESC;
```

**Show the results:**
```
Public Works       5
Code Enforcement   3
Utilities          1
```

**Explain what we're seeing:**
> "Three departments have open work. Public Works is buried with five open requests, Code Enforcement has three, Utilities has one. Sanitation and Parks & Rec don't appear at all — every one of their requests is already Resolved or Closed, so they have zero open and drop out of the result. Those three counts add to nine, which is exactly the nine open requests we found with COUNTIF back in the spreadsheet demo. Same answer, now produced by the database."

**Explain GROUP BY:**
> "GROUP BY d.name says 'collect all rows with the same department and treat them as one group.' Then COUNT(*) counts the rows in each group. WHERE runs first, keeping only New and In Progress rows; then those survivors are grouped by department and counted. That's the engine of every 'how many per category' report."

**Show a second aggregation — total requests per department (all statuses):**
```sql
SELECT d.name AS department, COUNT(*) AS total_requests
FROM requests r
JOIN categories  c ON r.category_id = c.category_id
JOIN departments d ON c.department_id = d.department_id
GROUP BY d.name
ORDER BY total_requests DESC, department;
```

**Results:**
```
Public Works       6
Code Enforcement   3
Sanitation         2
Utilities          2
Parks & Rec        1
```

**Explain:**
> "Drop the WHERE and we count *all* requests, open or not. Now all five departments appear, and the counts sum to 14 — every request. Public Works owns six. Compare with the open-requests report: Public Works has 6 total and 5 open, so just one of its requests is finished."

**Reconcile it with the spreadsheet (worth saying out loud):**
> "And look at those five numbers — 6, 3, 2, 2, 1. Those are exactly the department counts we got in Demo 22, when we wrote five separate COUNTIF formulas by hand and read the answers off one at a time. Same data, same answers, one statement instead of five. That's the whole argument for the database in a single screen: the spreadsheet made you ask five questions; SQL let you ask one, and it'll still be right when the fifteenth request arrives tomorrow."

**Explain the second sort key (worth 30 seconds):**
> "Notice we sorted by two things: count descending, *then* department name. Why? Look at Sanitation and Utilities — they're tied at 2 apiece. When two rows tie, `ORDER BY total_requests DESC` alone doesn't say which comes first, so the database is free to return them in either order — and it might genuinely give you a different order on a different day or a different machine. Adding `, department` breaks the tie alphabetically, so the result is the same every single time. Any time you sort on something that can tie, add a tiebreaker. 'It worked on my machine' bugs are born exactly here."

### Part 5: HAVING — Filtering Grouped Results (2 minutes)

**Ask a new question:**
> "What if we only care about the busy departments — those with more than two requests total? We can't use WHERE for that, because WHERE filters individual rows before grouping, and 'more than two requests' is about the *group's* count. We need HAVING."

```sql
SELECT d.name AS department, COUNT(*) AS total_requests
FROM requests r
JOIN categories  c ON r.category_id = c.category_id
JOIN departments d ON c.department_id = d.department_id
GROUP BY d.name
HAVING COUNT(*) > 2
ORDER BY total_requests DESC;
```

**Show the results:**
```
Public Works       6
Code Enforcement   3
```

**Explain HAVING:**
> "Only two departments have more than two requests: Public Works (6) and Code Enforcement (3). Sanitation, Utilities, and Parks & Rec all have two or fewer, so HAVING filters them out *after* counting. Remember the flow: JOIN the tables, WHERE filters raw rows, GROUP BY forms groups, HAVING filters the groups, ORDER BY sorts. WHERE filters rows; HAVING filters groups. That one distinction saves a lot of debugging."

### Part 6: Bring It All Together (0.5 minutes)

```sql
SELECT    [columns, including aggregates like COUNT(*)]
FROM      [primary table]
JOIN      [related table] ON [join condition]
WHERE     [filter raw rows] — optional
GROUP BY  [columns to group by]
HAVING    [filter grouped results] — optional
ORDER BY  [sort final results]
```

**Summarize:**
> "This is the pattern for real reporting. We rebuilt the flat view from three normalized tables with JOINs, then produced the department workload report with GROUP BY and COUNT — the exact question a city manager asks. Next demo we go the other direction: we'll write the CREATE TABLE and INSERT statements that *build* these three tables from scratch."

## Key Points to Emphasize

- **INNER JOIN reconnects normalized tables.** It follows the ID links — request → category → department — to rebuild the readable view the flat CSV had, without storing the duplication.
- **Chain JOINs to cross more than two tables.** Each JOIN adds one table with its own ON condition; here we crossed three.
- **GROUP BY + COUNT produces the breakdown report.** "How many open requests per department" is `GROUP BY d.name` with `COUNT(*)` — the SQL form of the spreadsheet's COUNTIF, and the answers reconcile (9 open total).
- **WHERE filters rows, HAVING filters groups.** WHERE runs before grouping; HAVING runs after, on the aggregated results.

## Common Questions

**Q: What do `r`, `c`, and `d` mean in the query?**
A: They're table aliases — short nicknames defined right after each table name (`FROM requests r` means "call requests `r` for the rest of this query"). They save typing and make it clear which table each column comes from: `r.status`, `c.name`, `d.name`. You can name them anything; short letters are a common convention.

**Q: Why did Sanitation and Parks & Rec disappear from the open-requests report?**
A: Because GROUP BY only forms groups from rows that survive the WHERE clause, and neither department has any New or In Progress requests — their requests are all Resolved or Closed. With no open rows, there's nothing to group, so they produce no output row. If you wanted them shown with a zero, you'd use a LEFT JOIN starting from departments — a more advanced technique for later.

**Q: Why do I have to list the non-aggregated column (d.name) in GROUP BY?**
A: To prevent ambiguity. If you GROUP BY department but SELECT a column that varies within the group, the database wouldn't know which value to show. Standard SQL — and PostgreSQL, SQL Server, and MySQL in its default modern setting — requires every non-aggregated SELECT column to appear in GROUP BY, which forces you to be clear about exactly what you're grouping by. SQLite is more permissive and will let a stray column through, picking an arbitrary row's value. Write it the strict way anyway: it's what every other database expects, and the arbitrary value is a bug waiting to happen.

**Q: Can I ORDER BY a column I created with COUNT?**
A: Yes. We sorted by `open_requests`, which is the alias for `COUNT(*)`. Sorting by an aggregate is how you rank groups — "departments with the most open requests first," exactly what a manager wants at the top of the report.
