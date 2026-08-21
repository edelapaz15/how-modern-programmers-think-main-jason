# Activity 14: Build a Mini Database on Paper

**Module:** VI (Data Management: From Spreadsheets to Databases)
**Related reading:** [Introduction to Databases](../docs/Module-06-Data-Management/03-introduction-to-databases.md)

> **Instructor / solution key:** The target model for this activity is the CivicTrack relational schema in [`../course-project/data/schema.md`](../course-project/data/schema.md). Use it as the answer key — the table designs, keys, seed data, and example queries below are all drawn from it.

---

## Objective

You'll design the relational database behind **CivicTrack**, the citizen service-request system for the City of Rivervale. You'll create tables with proper structure (columns, data types, primary and foreign keys), establish the relationships between them, add sample rows, and write SQL queries to retrieve information. This activity bridges the conceptual understanding of databases with hands-on query writing — using the same system you've followed all week.

---

## Background

A **relational database** stores data in tables. Each table has:
- **Rows** (also called records): individual entries
- **Columns** (also called fields): attributes of those entries
- **Primary Key**: a unique identifier for each row
- **Foreign Key**: a reference to a primary key in another table (creates relationships)

![The CivicTrack data model: requests pointing to categories pointing to departments, with primary and foreign keys marked.](../diagrams/png/civictrack-erd.png)

*This is the answer you are working towards. Try the design yourself first, then compare.*

Tables are related to each other, which is why it's called "relational." In CivicTrack, a **requests** table and a **categories** table can be linked: each request belongs to a category. And each category is routed to a **department** — so the three tables connect in a chain.

**SQL** (Structured Query Language) is the standard language for retrieving data from relational databases. A simple query looks like:

```sql
SELECT column_name FROM table_name WHERE condition;
```

Today, you'll design a database on paper and write SQL queries for it—no complex setup required, just thinking clearly about structure and relationships.

---

## The Scenario: CivicTrack

**CivicTrack** is the City of Rivervale's 311-style service-request system. Residents report non-emergency issues — potholes, broken streetlights, missed trash pickup, graffiti, water leaks — and the city tracks each one from submission to resolution.

Right now the data lives in a flat spreadsheet export (you may have seen it in the CSV activity), where the same department name is repeated on every row. The city wants to store it as a proper relational database so there's no duplication and questions are easy to answer. There are three things to track:

- **Departments** — the teams that do the work (Public Works, Sanitation, Code Enforcement, Utilities, Parks & Rec)
- **Categories** — the kind of issue (Pothole, Streetlight, Graffiti, Water Leak, …); each category is handled by exactly one department
- **Requests** — the individual reports residents submit (description, address, ZIP, status, priority, date)

The key relationships:
- A **request** belongs to a **category** (a pothole report is a "Pothole" request).
- A **category** is routed to a **department** (every "Pothole" goes to Public Works).

The city wants to answer questions like:
- "How many open requests does each department have right now?"
- "Show me all the high-priority requests that aren't closed yet."
- "Which requests are handled by Public Works?"

Your job is to design the database structure to support these queries.

---

## Step-by-Step Instructions

### Part 1: Identify Entities and Tables (8 minutes)

An **entity** is a thing you want to track. From the scenario above, we have three:

1. **Departments**
2. **Categories**
3. **Requests**

For each entity, list the **attributes** (pieces of information) you need to store. Think about what's necessary for the city to function:

**Departments entity — What attributes do we need?**
- Department ID (unique identifier)
- Name (e.g., Public Works, Sanitation)

*(A department is a short, simple table — just an ID and a name.)*

**Categories entity — What attributes do we need?**
- Category ID (unique identifier)
- Name (e.g., Pothole, Streetlight, Graffiti)
- Department ID (which department handles this category?)

*(The Department ID is the link that routes a category to the team that works it.)*

**Requests entity — What attributes do we need?**
- Request ID (unique identifier, e.g., SR-1001)
- Submitted date
- Category ID (what kind of issue is this?)
- Description
- Address
- ZIP
- Status (New, In Progress, Resolved, Closed)
- Priority (Low, Medium, High)

*(Notice what is **not** here: the department name. We don't store it on every request — we look it up through the category. That's the whole point of relating tables.)*

### Part 2: Define Your Tables in Markdown (12 minutes)

Below is a template for defining each table. Fill in the column names, data types, and notes. The model answer follows [`schema.md`](../course-project/data/schema.md).

---

#### Table 1: departments

| Column Name | Data Type | Constraints | Notes |
|------------|-----------|-------------|-------|
| department_id | INTEGER | PRIMARY KEY | Unique identifier for each department |
| name | TEXT | NOT NULL | Department name (e.g., Public Works) |

---

#### Table 2: categories

| Column Name | Data Type | Constraints | Notes |
|------------|-----------|-------------|-------|
| category_id | INTEGER | PRIMARY KEY | Unique identifier for each category |
| name | TEXT | NOT NULL | Issue type (e.g., Pothole, Streetlight) |
| department_id | INTEGER | FOREIGN KEY → departments | Which department handles this category |

---

#### Table 3: requests

| Column Name | Data Type | Constraints | Notes |
|------------|-----------|-------------|-------|
| request_id | TEXT | PRIMARY KEY | Service-request number (e.g., SR-1001) |
| date_submitted | TEXT | NOT NULL | Date the request came in (YYYY-MM-DD) |
| category_id | INTEGER | FOREIGN KEY → categories | What kind of issue this is |
| description | TEXT | — | Free-text description of the problem |
| address | TEXT | — | Street address of the issue |
| zip | TEXT | — | ZIP code (text, not a number — leading zeros matter) |
| status | TEXT | — | New, In Progress, Resolved, or Closed |
| priority | TEXT | — | Low, Medium, or High |

> **Why `category_id` and not a `department` column on requests?** A request reaches its department *through* its category. Store the department once (on the category) instead of repeating it on every request. That's exactly the duplication the flat CSV had — and the database removes it.

---

### Part 3: Insert Sample Data (10 minutes)

Now populate your tables with sample data. The departments and categories below are CivicTrack's full seed set; for requests, a handful of rows is enough to test your queries. (The complete request data lives in [`schema.md`](../course-project/data/schema.md) and the cleaned CSV.)

---

#### Sample Data: departments

| department_id | name |
|---------------|------|
| 1 | Public Works |
| 2 | Sanitation |
| 3 | Code Enforcement |
| 4 | Utilities |
| 5 | Parks & Rec |

---

#### Sample Data: categories

| category_id | name | department_id |
|-------------|------|---------------|
| 1 | Pothole | 1 |
| 2 | Streetlight | 1 |
| 3 | Sidewalk Damage | 1 |
| 4 | Trash Pickup | 2 |
| 5 | Graffiti | 3 |
| 6 | Noise Complaint | 3 |
| 7 | Water Leak | 4 |
| 8 | Tree Down | 5 |

---

#### Sample Data: requests

| request_id | date_submitted | category_id | description | address | zip | status | priority |
|------------|----------------|-------------|-------------|---------|-----|--------|----------|
| SR-1001 | 2026-03-01 | 1 | Large pothole near intersection | 100 Main St | 97001 | Resolved | High |
| SR-1002 | 2026-03-01 | 2 | Streetlight out for a week | 210 Oak Ave | 97002 | In Progress | Medium |
| SR-1003 | 2026-03-02 | 4 | Missed trash collection | 55 Elm St | 97001 | Closed | Low |
| SR-1005 | 2026-03-03 | 7 | Water pooling on street | 300 Pine St | 97002 | In Progress | High |
| SR-1007 | 2026-03-04 | 8 | Fallen tree blocking sidewalk | 500 Maple Dr | 97003 | Resolved | High |
| SR-1008 | 2026-03-04 | 1 | Pothole damaging cars | 150 Main St | 97001 | New | Medium |

---

### Part 4: Write SQL Queries (15 minutes)

Below are five questions a CivicTrack manager might ask. For each, write a plain-English description of what we're looking for, then write the SQL query to retrieve it.

---

#### Query 1: Find All Open Requests

**Plain English:** "List the ID, status, and priority of every request that isn't closed yet — that is, anything still New or In Progress."

**SQL:**
```sql
SELECT request_id, status, priority
FROM requests
WHERE status IN ('New', 'In Progress');
```

---

#### Query 2: Requests by Department (Using JOIN)

**Plain English:** "Show all requests handled by Public Works, along with their category name and status." A request doesn't store its department directly — we have to follow the chain: request → category → department.

**SQL:**
```sql
SELECT r.request_id, c.name AS category, r.status
FROM requests r
JOIN categories  c ON r.category_id = c.category_id
JOIN departments d ON c.department_id = d.department_id
WHERE d.name = 'Public Works';
```

**Result:** From the sample rows above, this returns SR-1001 (Pothole, Resolved), SR-1002 (Streetlight, In Progress), and SR-1008 (Pothole, New) — every request whose category routes to Public Works.

---

#### Query 3: Your Turn — Open Requests for One Department

**Plain English:** Write your own: "List the open requests (New or In Progress) handled by _____________." (Hint: it's Query 2 plus the `status` filter from Query 1.)

**SQL:**
```sql
SELECT ________________________________________
FROM ________________________________________
WHERE ________________________________________;
```

---

#### Query 4: Your Turn — Find Requests in a Category

**Plain English:** Write your own: "Get the request ID and address of every _____________ request." (e.g., Pothole, Graffiti, Water Leak)

**SQL:**
```sql
SELECT ________________________________________
FROM ________________________________________
WHERE ________________________________________;
```

---

#### Query 5: Your Turn — Count Open Requests per Department

**Plain English:** Write your own: "How many open requests does each department have?"

**SQL:**
```sql
SELECT ________________________________________
FROM ________________________________________
WHERE ________________________________________
GROUP BY ________________________________________;
```

*Hint: You'll JOIN all three tables (like Query 2), filter to open statuses (like Query 1), then `COUNT(*)` with `GROUP BY` on the department name.*

---

## Expected Deliverable

A document (1–2 pages) containing:

1. **Your three table definitions** (as markdown tables or similar):
   - Column names
   - Data types
   - Constraints
   - Brief notes

2. **Your sample data** (as markdown tables):
   - departments
   - categories
   - requests

3. **All five SQL queries**:
   - The first two are filled in as examples
   - Queries 3, 4, and 5 are your own (with plain-English descriptions)

4. **A brief explanation** (1–2 sentences) of:
   - Why you chose your primary keys
   - How the `categories` table connects `requests` to `departments`
   - One advantage of this relational structure over storing the department name on every request (as the flat CSV did)

---

## Reflection Questions

1. **What was the hardest part of designing this database?** Was it identifying what data to store, choosing data types, or understanding the request → category → department relationship?

2. **Why do you think we separate departments, categories, and requests into different tables instead of putting everything in one table** (like the flat CSV did)? What problems does repeating the department name on every request create?

3. **How might this database change if CivicTrack started letting residents leave feedback on how a request was resolved?** Where would that data go? Would you add a new table or modify an existing one?

---

## Tips for Success

- **Data types matter:** INTEGER for whole numbers (the ID columns), TEXT for text. Note that `zip` is TEXT, not a number — ZIP codes can have leading zeros, and you never do math on them.
- **Primary keys must be unique:** Each row needs a unique identifier. `department_id` and `category_id` are system-generated numbers; `request_id` is the human-readable service number (SR-1001).
- **Foreign keys link tables:** `requests.category_id` points to `categories.category_id`, and `categories.department_id` points to `departments.department_id`. That chain is how a request reaches its department.
- **Test your queries mentally:** Before writing, think: "What rows will this query return?" Does it match the plain-English question?
- **Don't overcomplicate:** You can always add columns or tables later. Start with the essentials.

---

## Going Deeper

Once you've completed this activity:
- **Learn about normalization:** There are rules (1NF, 2NF, 3NF) for designing databases to avoid redundancy and inconsistency. Splitting the department out of the requests table — instead of repeating it on every row like the flat CSV — is exactly this idea in action.
- **Explore advanced SQL:** Try writing queries with GROUP BY (to summarize data), ORDER BY (to sort), and aggregate functions like COUNT(), AVG(), and MAX(). The "open requests per department" report (Query 5) uses all three.
- **Set up a real database:** Use SQLite to actually create this database and run your queries. The full `CREATE TABLE` and `INSERT` statements are in [`schema.md`](../course-project/data/schema.md) — copy them in and run the queries against real data.
- **Think about scale:** How would this database change if Rivervale logged millions of requests a year? (Hint: indexes become crucial.)
