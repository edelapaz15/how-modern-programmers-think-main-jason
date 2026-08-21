# Module VI Exit Ticket — Data Management: From Spreadsheets to Databases

**Module VI** · Data quality; how data is structured and stored; querying with SQL; APIs and JSON
**~5–7 minutes · Not graded · Anonymous is fine**

> A quick check on how data is stored and queried. If SQL or the API/JSON idea is still fuzzy, say which — we can revisit it.

---

## Quick Recap (4 questions)

**1. (Multiple choice · CivicTrack)** In the raw CivicTrack export, one pothole report had its category typed as `pot hole` and another as `Pothole`. What actually goes wrong because of that?

- A. The file won't open in a spreadsheet
- B. A count grouped by category reports two smaller categories instead of one real one
- C. The request loses its ID and can't be looked up
- D. Nothing — spreadsheets and databases ignore spacing differences

**2. (Multiple choice)** A **relational database** (RDBMS) organizes data primarily as:

- A. Tables made of rows and columns, which can relate to each other through keys
- B. One big table containing every field the application needs
- C. Files on disk that the application reads and writes directly
- D. Nested documents, each holding all the data about one thing

**3. (Short answer · CivicTrack)** The CivicTrack data has a `requests` table with a `status` column (values like `New`, `In Progress`, `Resolved`, `Closed`). Write — or describe in words — a SQL query that returns only the requests whose status is `New`. *(A `SELECT ... FROM requests WHERE ...` sketch is fine.)*

**4. (Explain in your own words)** A web front end doesn't talk to the database directly — it calls an **API** that returns data as **JSON**. In your own words, what is an API doing in that picture, and roughly what does JSON look like?

---

## Muddiest Point

What's the **one thing** from this module that's still fuzzy? (Tables/keys, CSVs vs. spreadsheets, SQL, SQL vs. NoSQL, or APIs/JSON — anything.)

---

## Connect It

Think of a report or data question from your **prior work** (caseloads, tickets, inventory, applications processed). What columns/fields would you need, and what would the question look like as a "filter these rows" idea — the same shape as a SQL `WHERE`?

---

<details>
<summary><strong>Instructor Answer Key</strong> (review before building on this module — collapsed for in-class use)</summary>

**1.** B — the two spellings are different *values*, so anything that groups or counts by category splits them apart, and the pothole total comes out wrong. This is the whole point of Activity 15: dirty data doesn't announce itself with an error, it just quietly gives you a wrong number to hand your manager. D is the tempting one — worth saying plainly that no, nothing forgives it for you.

**2.** A — a relational database stores data in **tables** (rows and columns), and tables can relate to one another via keys. B is the flat CSV we started the module with (and why normalization exists), C is what a database saves you from doing by hand, and D describes a *document* database — a real alternative, not a wrong answer to a different question. If someone picks D, that's a good thirty seconds on SQL vs. NoSQL rather than a mistake.

**3.** Any correct form, e.g.:
```sql
SELECT * FROM requests WHERE status = 'New';
```
Accept a worded description ("select the rows from the requests table where status equals New"). Listen for the right table (`requests`), the filter column (`status`), and the value (`'New'`). Exact quoting/casing not required at this level.

**4.** *Listen for:* the API is the messenger/middle layer the front end calls to read or create data; it hands back data in a structured text format. JSON = key/value pairs in braces, e.g. `{"status": "New", "category": "Pothole"}`. Reward "structured data the front end and back end exchange," not perfect syntax.

**Muddiest Point / Connect It:** Not graded. SQL `WHERE`/`JOIN` and the API/JSON idea are the common fuzzy spots — re-demo with the CivicTrack tables if they recur. Strong "Connect it" answers (naming real fields and a filter) show the data-as-tables and filtering models transferred.

</details>
