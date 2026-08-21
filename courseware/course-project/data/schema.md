# CivicTrack Data Model

The flat CSVs in this folder are how data often *arrives* (an export, a spreadsheet). A database stores the same information as **related tables**, which removes duplication and makes questions easy to answer. This file is the canonical relational model for the SQL work (Activity 14, Demos 23–25) and the shape the API returns (Demo 26).

The model normalizes the flat CSV: each request points to a **category**, and each category is routed to one **department**. (In the clean CSV the department column is just the category's department spelled out on every row — exactly the duplication a database removes.)

---

## Tables

```
departments (department_id, name)
categories  (category_id, name, department_id → departments)
requests    (request_id, date_submitted, category_id → categories,
             description, address, zip, status, priority)
```

## Create the tables

```sql
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

## Seed data

```sql
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

---

## Example questions (queries)

**Single-table filtering and sorting (Demo 23):**

```sql
-- All open, high-priority requests, newest first
SELECT request_id, date_submitted, status, priority
FROM requests
WHERE status IN ('New', 'In Progress') AND priority = 'High'
ORDER BY date_submitted DESC;
```

**Joins and aggregation (Demo 24):**

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

---

## The same data as JSON (what an API returns)

A web or mobile front end does not talk to the database directly — it calls an **API**, which returns data as **JSON**. One CivicTrack request looks like this over the wire:

```json
{
  "request_id": "SR-1005",
  "date_submitted": "2026-03-03",
  "category": "Water Leak",
  "description": "Water pooling on street",
  "address": "300 Pine St",
  "zip": "97002",
  "status": "In Progress",
  "department": "Utilities",
  "priority": "High"
}
```

This is the shape a back-end developer returns from an API endpoint: the same rows you queried above, with the IDs already joined back into readable names.
