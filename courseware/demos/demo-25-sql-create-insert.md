# Demo 25: CREATE TABLE and INSERT

**Module:** VI | **Topic:** Introduction to Databases
**Estimated Time:** 15 minutes
**Related reading:** [Introduction to Databases](../docs/Module-06-Data-Management/03-introduction-to-databases.md)

## Objective
Understand how to build a database from scratch: create related tables with defined columns, data types, and constraints (including a foreign-key reference between tables), populate them with INSERT statements, and query the result to verify the complete create-populate-query cycle — using the **CivicTrack** model we've been querying all through Module VI.

This is where the data story comes full circle. We cleaned this data in a CSV, analyzed it in a spreadsheet, and queried it in Demos 23–24. Now we write the SQL that actually *builds* the three tables those queries ran against.

## Setup/Prerequisites
- Access to a SQL sandbox environment:
  - **SQLite Online** (https://sqliteonline.com/)
  - **Fallback:** **DB Fiddle** (https://www.db-fiddle.com/) with the **SQLite** engine selected (use this if sqliteonline.com is unavailable the day you teach)
- No pre-existing tables needed — we create them from scratch. (If Demos 23–24 ran in this same browser session, their tables are still around; the script below opens with `DROP TABLE IF EXISTS` to clear them, so a fresh start and a re-run both work.)
- Students have browser access and can follow along
- Familiarity with SELECT queries (Demo 23) and JOINs (Demo 24)
- A text editor or Notepad for drafting CREATE statements (optional)

> The model we build here is the canonical one in `../course-project/data/schema.md`.

## Step-by-Step Script

### Part 1: Why Tables Need Structure (2 minutes)

**Introduce the concept:**
> "So far we've been querying tables that already existed. But where do they come from? Someone has to create them. When you create a table you don't just list column names — you define the structure of the data: what columns exist, what type of data each holds, and what rules (constraints) apply. That definition is called the schema."

**Explain why schema matters:**
> "Why does the database need this? The schema is a contract. It says 'this column only ever holds whole numbers' or 'this column can never be empty' or 'this category_id must point to a real category.' That contract is what lets the database stay fast and keeps bad data out — the kind of bad data we saw in the messy CSV back in Demo 21. A well-designed schema prevents many of those problems at the door."

**Preview what we'll do:**
> "We're going to build CivicTrack's three tables from scratch — departments, categories, and requests — insert the seed data, and then query it back to prove it all connects. Complete cycle: create → populate → query."

### Part 2: Create the Tables (4 minutes)

**Explain CREATE TABLE syntax and order:**
> "The syntax is CREATE TABLE [name] followed by parentheses listing each column as a name plus a data type. SQLite's common types: INTEGER for whole numbers, REAL for decimals, TEXT for strings. Order matters here for a reason: categories points to departments, and requests points to categories, so we create departments first, then categories, then requests. You can't reference a table that doesn't exist yet."

**Show and run the CREATE statements:**

> **Instructor note:** Demo 24 left these same three tables sitting in the browser session, so open
> with the `DROP` lines or every `CREATE` below fails. Drop in reverse dependency order — children
> first, parents last.

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
```

**Walk through the key parts:**
> "Line by line on the important bits:
> - `department_id INTEGER PRIMARY KEY` — a whole-number column that uniquely identifies each department. No two can share an ID, and it can't be empty.
> - `name TEXT NOT NULL` — a text column that must always have a value. Every department needs a name.
> - In `categories`, look at `department_id INTEGER REFERENCES departments(department_id)`. That's a **foreign key**. It says 'this column holds a department_id, and the value must match a real row in the departments table.' That single line is what wires the tables together — it's the link our JOINs followed in Demo 24.
> - In `requests`, `category_id INTEGER REFERENCES categories(category_id)` does the same thing, pointing each request at a real category. Note `request_id` is `TEXT PRIMARY KEY` because our IDs look like 'SR-1001' — text, not numbers."

**Emphasize the constraints:**
> "PRIMARY KEY, NOT NULL, and REFERENCES are constraints — rules the database enforces for you. PRIMARY KEY guarantees unique IDs. NOT NULL forbids empty values. REFERENCES guarantees a category can't point to a department that doesn't exist. Try to violate any of them and the insert is rejected. That's a feature: it stops bad data before it's stored."

> Note on syntax: the correct inline foreign-key form is `column_name INTEGER REFERENCES other_table(other_column)`. There is no `INT FOREIGN KEY REFERENCES ...` shorthand in standard SQL — `FOREIGN KEY` only appears in the separate table-level form `FOREIGN KEY (col) REFERENCES other_table(col)`. Use the inline `REFERENCES` form shown above.

### Part 3: Insert the Seed Data (4 minutes)

**Explain INSERT and order:**
> "INSERT INTO adds rows. Same dependency rule as before: a category references a department, and a request references a category, so we insert departments first, then categories, then requests. If we tried to insert a category pointing to department 1 before department 1 existed, the foreign-key rule could reject it."

**Insert the departments:**
```sql
INSERT INTO departments VALUES
    (1, 'Public Works'),
    (2, 'Sanitation'),
    (3, 'Code Enforcement'),
    (4, 'Utilities'),
    (5, 'Parks & Rec');
```

> "Five departments, five rows in one statement — multiple VALUES sets separated by commas. Much faster than one INSERT per row."

**Insert the categories:**
```sql
INSERT INTO categories VALUES
    (1, 'Pothole',         1),
    (2, 'Streetlight',     1),
    (3, 'Sidewalk Damage', 1),
    (4, 'Trash Pickup',    2),
    (5, 'Graffiti',        3),
    (6, 'Noise Complaint', 3),
    (7, 'Water Leak',      4),
    (8, 'Tree Down',       5);
```

> "Eight categories. Look at the third value on each row — that's the department_id this category routes to. Pothole, Streetlight, and Sidewalk Damage all point to department 1 (Public Works). Each of those numbers must match a department we just inserted, or the foreign key would complain."

**Insert the requests:**
```sql
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

> "Fourteen requests — our full cleaned dataset. The third value on each row is the category_id. Notice we don't repeat the category name or the department name on every row the way the flat CSV did; we just store the small ID, and the JOIN reconnects the names when we need them. That's normalization in action: store each fact once."

**Point out constraints in action:**
> "Every request has a request_id, a date_submitted (both effectively required — request_id is the PRIMARY KEY, date_submitted is NOT NULL), and a category_id that matches a real category. If we tried to insert two requests with the same request_id, the PRIMARY KEY would reject the second. If we pointed a request at category_id 99, which doesn't exist, the foreign key would catch it."

### Part 4: Query the Data Back to Verify (2 minutes)

**Confirm each table loaded:**
```sql
SELECT * FROM departments;   -- 5 rows
SELECT * FROM categories;    -- 8 rows
SELECT * FROM requests;      -- 14 rows
```

> "Five departments, eight categories, fourteen requests. The complete CivicTrack dataset is now in the database."

**Prove the links work with a JOIN:**
```sql
SELECT c.name AS category, d.name AS department
FROM categories c
JOIN departments d ON c.department_id = d.department_id
ORDER BY d.name, c.name;
```

**Results — all 8 categories with the department each routes to:**
```
Graffiti           Code Enforcement
Noise Complaint    Code Enforcement
Tree Down          Parks & Rec
Pothole            Public Works
Sidewalk Damage    Public Works
Streetlight        Public Works
Trash Pickup       Sanitation
Water Leak         Utilities
```

**Explain the cycle:**
> "We defined three tables with a schema, inserted the seed data, and queried it back — create, populate, query, the fundamental cycle of database work. And the JOIN confirms the foreign keys actually connect: every category resolves to exactly one department, with Public Works handling three category types. In a real CivicTrack, one program might create these tables, the running app would insert requests over time, and reporting tools would query them — but the cycle is always the same."

### Part 5: Constraints and Data Types in Practice (1 minute)

**Reinforce why types and constraints matter:**
> "Two quick reinforcements. First, types: category_id is INTEGER because it's always a whole-number ID; request_id is TEXT because 'SR-1001' contains letters and a dash. Choosing the right type makes your intent clear and lets the database store and compare values correctly. Second, NULL: columns without NOT NULL may be left empty (NULL means 'no value' or 'unknown' — different from an empty string or zero). In our seed every field has a value, but a brand-new request might come in before a priority is assigned. That distinction matters: `WHERE priority IS NULL` would find unprioritized requests."

### Part 6: Complete Cycle Summary (1 minute)

**Review:**
> "We covered the full lifecycle: CREATE TABLE defined three related tables with types and constraints, including foreign keys that wire them together. INSERT populated them with the cleaned CivicTrack data — 5 departments, 8 categories, 14 requests. SELECT and JOIN queried it back and proved the links hold. Define structure, add data, ask questions — everything else in databases extends these basics."

**Forward-looking statement:**
> "Most of the time on the job you'll query tables someone else built. But knowing how to create and insert matters: it helps you understand the constraints baked into existing tables, and when you write application code that stores data, you'll be issuing these same CREATE and INSERT statements — just from JavaScript or Java instead of typing them here. Application code does exactly that: it inserts a new CivicTrack request and reads it back out — which is the next and final stop in our data story (Demo 26)."

## Key Points to Emphasize

- **CREATE TABLE defines the schema:** Column names, data types, and constraints establish the structure and enforce data quality up front.
- **Foreign keys wire tables together:** `category_id INTEGER REFERENCES categories(category_id)` is the link a JOIN follows. The correct inline form is `column INTEGER REFERENCES table(column)` — not `INT FOREIGN KEY REFERENCES`.
- **Order matters when tables reference each other:** Create and populate parent tables (departments) before the tables that point to them (categories, then requests).
- **INSERT populates, SELECT/JOIN retrieves and verifies.** Together with CREATE they form the complete cycle: structure, populate, query.

## Common Questions

**Q: What's the correct way to write a foreign key — I've seen `INT FOREIGN KEY REFERENCES`?**
A: That form is invalid in standard SQL and SQLite — it will error. There are two correct ways. Inline (what we used): `department_id INTEGER REFERENCES departments(department_id)`. Or table-level, listed after the columns: `FOREIGN KEY (department_id) REFERENCES departments(department_id)`. The keyword `FOREIGN KEY` only appears in the table-level form. The inline `REFERENCES` form is shorter and is what these demos use.

**Q: What happens if I insert a request with a category_id that doesn't exist?**
A: With foreign keys enforced, the database rejects it — that's the whole point of the REFERENCES constraint, to guarantee every request points at a real category. (One SQLite quirk: it only enforces foreign keys if `PRAGMA foreign_keys = ON;` is set, which the online sandboxes may or may not do by default. Many other databases always enforce it. Either way, you should treat the rule as real.)

**Q: Why store category_id numbers instead of just the category name on each request?**
A: To avoid the duplication and inconsistency we saw in the raw CSV, where the same pothole category was spelled two different ways (`pot hole` and `Pothole`). Storing the name once in `categories` and a small ID on each request means the name is defined in exactly one place — fix a typo once and it's fixed everywhere. The JOIN reattaches the name whenever you query. That's the core idea of a normalized relational database.

**Q: Why insert data with SQL by hand instead of just importing the CSV?**
A: In real life you usually wouldn't type it — you'd write a program (in JavaScript, Java, Python) that reads the CSV or receives data from a web form and runs INSERT statements for you. But understanding INSERT by hand shows you what that program does under the hood, lets you add a few test rows when debugging, and is the foundation for any application code that inserts and reads CivicTrack requests.
