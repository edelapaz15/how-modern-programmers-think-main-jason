# Topic 1: Foundations of Data Systems

## How Data Is Structured, Stored, and Retrieved

---

## Introduction: Data Everywhere

Think about the last business decision you made before you started learning to program. Where did the information for that decision come from?

If you worked in sales, you probably looked at a pipeline of deals. If you were in operations, you examined resource allocation or supply chain details. If you worked in finance, you analyzed budget spreadsheets and reports. If you were in marketing, you examined customer lists and campaign results. In every case, you were working with *data*—information organized in a particular way so you could understand patterns, track details, and make decisions.

Data isn't a programming concept. It's a human concept that predates computers by thousands of years. Merchants kept ledgers. Governments maintained census records. Libraries organized catalogs. The challenge has always been the same: **how do we organize information so we can find what we need, verify it's correct, and use it to accomplish our goals?**

Modern programmers face this same fundamental challenge, but at unprecedented scale and speed. Instead of one ledger book, we might manage millions of customer records. Instead of updating one catalog by hand, we handle thousands of changes per second across global systems. But the underlying problem hasn't changed: *How do we organize information effectively?*

This topic builds from basic principles that apply to data in any form—digital or not—and shows how those principles scale from your desktop spreadsheet to the largest systems in the world.

---

## What Is Data? The Foundation

**Data** is recorded information about the world. It can be nearly anything:

- A customer's name, email, and purchase history
- Temperature readings from weather stations
- The connections between people on a social network
- Product prices and inventory levels
- Patient medical histories
- Pixel values that create an image on your screen

Data exists at many levels:
- **Individual facts**: "Alice's phone number is 555-0123"
- **Collections**: "All our customers and their purchase history"
- **Patterns**: "Customers in urban areas spend 30% more than rural customers"

Before we can do anything with data—store it, analyze it, or share it—we need to organize it in a way that makes sense. That organization is what we're exploring in this topic.

### The Three Types of Data: Structured, Unstructured, and Semi-Structured

Not all data is the same. One of the first things programmers learn is to categorize data by how organized it is. This categorization fundamentally affects how we store and work with it.

#### Structured Data

**Structured data** follows a clear, predefined schema—a blueprint for what the data should look like. Every record has the same fields in the same order with the same data type.

A simple example: your contacts list. Each contact has:
- Name (text)
- Email address (text)
- Phone number (text)
- Birthday (date)

If you store 10,000 contacts, they all follow this same structure. This uniformity is powerful. It means you can write a single program that knows exactly how to find a phone number for any contact—it's always in the fourth position.

Real-world examples of structured data:

- **Customer database**: Each customer has an ID, name, email, phone, address, and creation date
- **Bank transactions**: Each transaction has account ID, date, amount, type (deposit/withdrawal), and balance
- **Product inventory**: Each product has SKU, name, price, quantity in stock, and reorder level
- **Employee records**: Each employee has ID, name, department, salary, hire date, and manager ID

The beauty of structured data is that it's *predictable*. A program can reliably find and manipulate it because it knows the structure in advance.

#### Unstructured Data

**Unstructured data** has no predefined schema. It's information that doesn't fit neatly into rows and columns.

Examples include:

- **Text documents**: A Word document might contain anything from 100 words to 1 million words, with varying formatting, images, and tables
- **Images**: A photo contains pixels, but there's no standard schema for "what makes a valid image"
- **Audio/video**: A song or movie is just a stream of data without inherent structure
- **Email**: An email might have attachments, formatted text, nested quotes, and other elements in any order
- **Social media posts**: A tweet might be text, or it might include images, links, or videos mixed together

Unstructured data is harder to analyze automatically. You can't write a simple program that extracts "the phone number" from a document because documents don't have a standard phone number location. However, unstructured data is often rich in meaning and context.

#### Semi-Structured Data

**Semi-structured data** falls between the two extremes. It has some organization without being strictly structured.

Common examples:

- **JSON (JavaScript Object Notation)**: Text that describes data with labels but variable structure
- **XML (Extensible Markup Language)**: Data with tags that describe what each piece means
- **CSV files**: Text with records separated by line breaks and fields separated by commas, but no predefined schema

Here's a real-world example of semi-structured data. This is JSON format:

```json
{
  "customer_id": 12847,
  "name": "Sarah Chen",
  "email": "sarah.chen@example.com",
  "account_type": "premium",
  "orders": [
    {
      "order_id": "ORD-2024-001",
      "date": "2024-01-15",
      "total": 129.99
    },
    {
      "order_id": "ORD-2024-005",
      "date": "2024-02-22",
      "total": 249.50
    }
  ]
}
```

This has structure (we can identify that "name" is Sarah Chen), but different records might have different fields or nested structures.

### Bridge from Business: What You've Already Known

If you've worked in business, you've already dealt with all three types:

- **Spreadsheets** are structured data. Every row has the same columns
- **Word documents and PDFs** are unstructured data. They contain information but no fixed schema
- **When you export data from a system**, you often get CSV files or JSON—semi-structured data

One of your key transitions as a programmer is learning when each type is appropriate and how to work with them effectively.

---

## Data Models: Representing Reality

A **data model** is a way of representing some part of the real world using data. Think of it as a blueprint for what information matters and how it relates.

Before you store a single piece of data, you need to decide: *What do I need to track? How does it relate to other things?*

### Simple Example: A Bookstore

Imagine you're building a system for a bookstore. You need to track books, authors, and sales. You could create a data model like this:

**Books table:**
- Book ID (unique identifier)
- Title
- Author ID (points to the author)
- ISBN
- Publication date
- Price

**Authors table:**
- Author ID (unique identifier)
- Name
- Birth date
- Country

**Sales table:**
- Sale ID
- Book ID (which book was sold)
- Customer name
- Sale date
- Quantity
- Price

Notice what we're not storing: We're not storing the author's name directly in the Books table, even though it might seem convenient. Instead, we store an Author ID and look it up separately. Why? Because if we stored "Stephen King" in every book record, and then Stephen King's name changed (unlikely, but conceptually possible), we'd have to update thousands of records. By separating it, we only update the author's name once.

This is the essence of data modeling: **representing information in ways that reflect reality while minimizing redundancy and inconsistency.**

### The Data Model Shapes Everything

Your data model affects:

- **How fast you can find information**: If you organize data well, queries run quickly
- **How reliably you can update information**: A good model prevents contradictions
- **How much storage you use**: Careful design minimizes duplication
- **How easy it is to add features**: A well-designed model accommodates growth
- **What questions you can easily answer**: Some structures make certain queries natural, others make them difficult

This is why database design is considered an art as much as a science. The best model depends on your specific needs.

---

## The Tabular Data Paradigm: Rows and Columns

The most common way to organize structured data is the **tabular model**—data arranged in tables (also called relations) with rows and columns.

If you've used a spreadsheet, you already understand tables:

| Customer ID | Name | Email | City | Signup Date |
|---|---|---|---|---|
| 1001 | Alice Martinez | alice@example.com | Boston | 2023-01-15 |
| 1002 | Bob Thompson | bob@example.com | Seattle | 2023-03-22 |
| 1003 | Carol Zhang | carol@example.com | Austin | 2023-05-10 |
| 1004 | David Lee | david@example.com | Boston | 2023-07-08 |

This is the most intuitive way to represent business data, which is why it's been standard for decades.

### Terminology

Understanding the terminology helps you read technical documentation and communicate with other programmers:

- **Table (or Relation)**: The entire structure above—a collection of related records
- **Row (or Record, or Tuple)**: One horizontal line (Alice Martinez's record)
- **Column (or Field, or Attribute)**: One vertical category (Customer ID is a column)
- **Cell**: The intersection of a row and column (Alice Martinez's email is alice@example.com)
- **Schema**: The definition of what columns exist and what they contain

Each table typically represents one type of entity (customers, products, orders, etc.).

### Why Tabular Data?

The tabular model is standard because:

1. **Humans understand it**: Most business people intuitively understand rows and columns
2. **Computers can process it efficiently**: Tabular data is easy for programs to read, validate, and search
3. **It scales**: From 100 rows to 100 million rows, the tabular structure works the same way
4. **It's flexible**: You can represent almost anything in tables if you think about the structure carefully

---

## Records and Fields: The Building Blocks

Every piece of data we store is ultimately composed of two things: **records** and **fields**.

A **record** is one instance of something—one customer, one transaction, one product. A **field** is one attribute of that record—a customer's name, a transaction's amount, a product's price.

### Fields and Data Types

When you define a table, you specify not just what fields it has, but what *type* of data goes in each field. Different data types are appropriate for different information:

**Text/String fields**:
- Customer names: "Alice Martinez"
- Email addresses: "alice@example.com"
- Product descriptions: "Wireless Bluetooth headphones with 20-hour battery life"

**Numeric fields**:
- Quantities: 5 units ordered
- Prices: $29.99
- Inventory counts: 150 items in stock

**Date fields**:
- Purchase date: 2024-03-15
- Account creation: 2023-01-10
- Expiration: 2025-12-31

**Boolean fields** (True/False):
- Is premium customer: true/false
- Is in stock: true/false
- Email verified: true/false

**Decimal/Float fields** (for precise decimal numbers):
- Exact price: $29.99 (not just stored as integers)
- Weight: 2.5 pounds

Specifying the correct data type matters because:

- **It saves storage space**: An integer takes less space than a string
- **It enables validation**: The system rejects "apple" in a numeric field
- **It enables operations**: You can add or average numeric fields; you can't add email addresses
- **It documents intent**: Looking at the data type tells you what kind of information belongs there

### Bridge from Business: From Files to Fields

Think about how you've organized information before:

In a spreadsheet, you might have created a "Customers" sheet with columns for Name, Email, Phone, and Purchase Date. When you defined that spreadsheet, you implicitly decided:
- Name is text (not numbers or dates)
- Purchase Date is a date (so you can sort chronologically)
- Phone is text (so leading zeros aren't lost)

A programmer thinking about the same information explicitly names these data types at the moment of table creation, ensuring data integrity from the start.

---

## Primary Keys and Unique Identifiers

Every useful record needs a **primary key**—a field or combination of fields that uniquely identifies that record. No two records in a table can have the same primary key.

### Why Every Record Needs an ID

Consider this customer table without unique identifiers:

| Name | Email | City |
|---|---|---|
| Alice Martinez | alice@example.com | Boston |
| Bob Thompson | bob@example.com | Seattle |
| Alice Martinez | alice.m@example.com | Portland |

Now you have a problem: There are two Alice Martinezes. Which one placed an order? Which one should you send a promotion to? Without unique identifiers, you can't reliably distinguish between records.

Now add an ID column:

| Customer ID | Name | Email | City |
|---|---|---|---|
| 1001 | Alice Martinez | alice@example.com | Boston |
| 1002 | Bob Thompson | bob@example.com | Seattle |
| 1003 | Alice Martinez | alice.m@example.com | Portland |

Now it's clear: When you want to reference Alice Martinez from Boston, you use ID 1001. When you reference Alice Martinez from Portland, you use ID 1003. There's no ambiguity.

### Types of Primary Keys

**Natural Keys**: Fields that have meaning in the real world

- Social Security Number (SSN) in a People table: Each person has exactly one SSN
- ISBN in a Books table: Each book edition has exactly one ISBN
- Email address in a Users table: Each user should have a unique email

Natural keys work well when you have a field that's genuinely unique and unchanging.

**Surrogate Keys**: Artificial identifiers created purely to be unique

- Customer ID: 1001, 1002, 1003, etc. (incrementing numbers)
- Order ID: ORD-2024-00001, ORD-2024-00002, etc. (formatted strings)
- Session ID: a randomly generated unique identifier

Surrogate keys are useful because:
- They're never null (email addresses can be blank; ID numbers always exist)
- They never change (email addresses change; ID numbers are permanent)
- They're efficient (looking up by number is faster than looking up by email)

### Real-World Example: Customer IDs

In practice, most business systems use surrogate keys. Every customer gets a unique ID when they're created, and that ID never changes—even if they change their name, email, or address. All their orders, payments, and history are linked using that ID.

This is why your credit card company has your customer number, your bank account has a number, your phone company has your customer ID. These numbers are the fundamental way the system keeps you distinct from other people.

---

## Relationships Between Data

In real-world situations, data doesn't exist in isolation. A customer has multiple orders. Each order contains multiple products. Each product belongs to a category. This interconnectedness is captured through **relationships**.

Relationships are links between tables that reflect how the real world works. A well-designed data model makes these relationships explicit.

### One-to-One Relationships

In a one-to-one relationship, one record in Table A corresponds to exactly one record in Table B.

Example: Employee and CompanyVehicle tables.

**Employees table:**
| Employee ID | Name | Email |
|---|---|---|
| 101 | Sarah Chen | sarah@company.com |
| 102 | Marcus Johnson | marcus@company.com |

**Company Vehicles table:**
| Vehicle ID | License Plate | Employee ID |
|---|---|---|
| V-001 | ABC-1234 | 101 |
| V-002 | XYZ-5678 | 102 |

Each employee has at most one assigned vehicle. Each vehicle is assigned to at most one employee. This is one-to-one.

One-to-one relationships are relatively rare in real-world data. Most relationships are either one-to-many or many-to-many.

### One-to-Many Relationships

In a one-to-many relationship, one record in Table A corresponds to multiple records in Table B.

Example: CivicTrack's categories and service requests.

**categories table:**
| category_id | name | department_id |
|---|---|---|
| 1 | Pothole | 1 |
| 5 | Graffiti | 3 |

**requests table:**
| request_id | category_id | date_submitted | status |
|---|---|---|---|
| SR-1001 | 1 | 2026-03-01 | Resolved |
| SR-1004 | 5 | 2026-03-02 | New |
| SR-1008 | 1 | 2026-03-04 | New |
| SR-1014 | 1 | 2026-03-07 | In Progress |

The Pothole category (category 1) has three requests against it. Graffiti has one. One category can have many requests — that's the "one-to-many" relationship. You express it by storing the category id in each request, never the other way around: a request has exactly one category, so that's the side with room to hold the link.

One-to-many relationships are the most common in business systems. A department has many employees. A customer makes many purchases. A category collects many complaints.

### Many-to-Many Relationships

In a many-to-many relationship, records in Table A can relate to multiple records in Table B, and vice versa.

Example: CivicTrack requests and the crew members assigned to them. A big job needs several crew members. A crew member works on many jobs over the week.

Here's the challenge: If you try to express this directly, you run into problems.

**Bad approach** (storing multiple crew members in one field):
| request_id | crew |
|---|---|
| SR-1014 | Rivera, Okafor, Lindqvist |

This is bad because it mixes multiple data items in one field. You can't count how many jobs Okafor worked, you can't rename a crew member in one place, and a misplaced comma silently invents a person.

**Better approach** (create a junction table):

**requests table:**
| request_id | category_id | date_submitted |
|---|---|---|
| SR-1014 | 1 | 2026-03-07 |
| SR-1005 | 7 | 2026-03-03 |

**crew table:**
| crew_id | name | department_id |
|---|---|---|
| C-01 | Rivera | 1 |
| C-02 | Okafor | 1 |
| C-03 | Lindqvist | 4 |

**assignments table (junction table):**
| assignment_id | request_id | crew_id | hours |
|---|---|---|---|
| A-001 | SR-1014 | C-01 | 6 |
| A-002 | SR-1014 | C-02 | 6 |
| A-003 | SR-1014 | C-03 | 2 |
| A-004 | SR-1005 | C-03 | 4 |

The junction table connects requests and crew members, one row per pairing. Now questions that were impossible become easy: "how many jobs did Lindqvist work?" (two), "who was on SR-1014?" (three people), "how many hours went into that pothole?" (fourteen). Each row is one fact, and each fact is stored once.

> **Note:** the `crew` and `assignments` tables aren't part of the CivicTrack schema you'll query in the demos — they're a plausible next version of it. This is what growth usually looks like: the city starts tracking who does the work, and a new table appears to hold the relationship.

### Expressing Relationships with Foreign Keys

When you have a relationship between two tables, you link them using a **foreign key**—a field in one table that contains the primary key value from another table.

In the requests table above, `category_id` is a foreign key. It points to a row in the categories table. When you see `category_id = 1` on a request, you know to look up category 1 to find its name (`Pothole`) and the department that handles it.

Foreign keys are how you connect related information without storing redundant data.

---

## Data Integrity: Ensuring Correctness

**Data integrity** means your data is accurate, consistent, and reliable. It's one of the most important concepts in database design.

### Why Data Integrity Matters

Imagine a company where:
- A customer's record shows they have a balance due of $500
- But the detailed transactions add up to $450
- No one knows which one is correct

Or imagine:
- An order references a customer ID that doesn't exist
- A product's "available inventory" and the "inventory in locations" don't match

These data integrity problems make the system unreliable. Decisions based on it will be wrong. Reports will be inaccurate.

### Types of Data Integrity Constraints

**Entity Integrity**: Every record has a primary key, and no two records have the same key.

This is enforced by requiring that:
- Every table has a primary key field
- That field is never empty (never "null")
- No two records have the same primary key value

**Referential Integrity**: If a record references another record (via a foreign key), that referenced record must exist.

Example: If an order says "Customer ID = 1001," there must actually be a customer with ID 1001. You can't create an order for a non-existent customer.

This prevents "orphan" records—orders without customers, items without products, employees without departments.

**Domain Integrity**: Each field contains only valid values for its type.

Examples:
- An "Email" field contains valid email addresses (with @ symbol, etc.)
- A "Quantity" field contains only non-negative numbers
- A "Gender" field contains only specified values (Male, Female, Other, etc.)
- A "Birth Date" field doesn't contain future dates

**User-Defined Constraints**: Business rules specific to your domain.

Examples:
- "A customer's credit limit can't exceed $10,000"
- "An order total must equal sum of its items"
- "An employee's salary must be greater than zero"
- "A product price can't be negative"

### Programmer's Perspective: Prevention vs. Detection

Business users might handle data integrity manually: "We'll review orders manually and catch any problems."

Programmers build integrity into the system so that invalid data can't exist in the first place. You specify constraints when you create the table, and the database refuses to accept data that violates them.

This is far more reliable than hoping people catch errors later.

---

## CRUD Operations: The Four Fundamental Actions

Every interaction with data boils down to four operations: **Create, Read, Update, Delete**—commonly abbreviated as **CRUD**.

![A table mapping the four CRUD operations to SQL keywords and CivicTrack examples: Create to INSERT, Read to SELECT, Update to UPDATE, and Delete to DELETE.](../../diagrams/png/crud-sql-mapping.png)

*Every screen you have ever used is some combination of these four.*

### Create (Insert)

Creating a record means adding new data to the system.

In English: "Add a new customer named Sarah Chen with email sarah@example.com."

### Read (Query/Select)

Reading means retrieving existing data from the system.

In English: "Find all customers in Boston," or "Get the total value of all orders placed in 2024."

### Update (Modify)

Updating means changing existing data.

In English: "Change Sarah Chen's email to sarah.chen@newcompany.com," or "Apply a 10% discount to all orders over $100."

### Delete (Remove)

Deleting means removing data from the system.

In English: "Remove all cancelled orders older than 5 years," or "Delete this customer's account."

### The Importance of Understanding CRUD

When you write a program or build a web application, nearly everything you do falls into one of these categories. Even the most complex business logic ultimately executes CRUD operations:

- A web form submission creates a record
- A search results page reads records
- An "update profile" button updates records
- An "unsubscribe" link deletes a record (or sets it as deleted)

By the time you study this module, you've probably already performed CRUD operations without explicitly naming them. A programmer thinks about these operations deliberately and systematically.

---

## The Data Lifecycle: From Creation to Archive

Data has a lifecycle—it's created, modified, stored, analyzed, and eventually archived or deleted. Understanding this lifecycle helps you think about data management decisions.

### Stage 1: Creation

Data comes into existence through various means:

- **User input**: Someone fills out a form or manually enters data
- **Automatic capture**: A sensor, camera, or system generates data
- **Import from another system**: Data from an external source is brought in
- **Calculation**: Data is computed from other data

At creation, the focus is on **capturing data accurately**. This is where validation is critical—did the user enter a valid email? Is the date reasonable? Does the phone number have the right format?

### Stage 2: Storage

Data is stored in a system optimized for the current access patterns.

A frequently-accessed dataset might be stored in a fast database. An infrequently-accessed but large dataset might be stored in compressed format. Data intended for analysis might be denormalized (intentionally structured for query efficiency rather than update efficiency).

### Stage 3: Maintenance

While data is actively used, it must be:

- **Kept consistent**: When related data changes, dependencies are updated
- **Backed up**: Copies are maintained in case of failure
- **Secured**: Access is controlled so only authorized users can see it
- **Cleaned**: Errors are found and corrected

In many systems, this is the longest stage of the lifecycle.

### Stage 4: Analysis

Data might be analyzed to generate insights:

- "What's our average customer lifetime value?"
- "Which products are most profitable?"
- "How are our conversion rates trending?"

Data for analysis is often extracted from operational systems and loaded into systems optimized for querying (data warehouses).

### Stage 5: Archival or Deletion

Eventually, data becomes less useful and might be:

- **Archived**: Moved to cheaper storage for compliance or historical reasons
- **Deleted**: Removed if it's no longer needed and isn't required by regulation

---

## Data at Different Scales

The fundamental principles of data management are the same whether you're dealing with hundreds of records or billions, but the tools and techniques differ dramatically.

### Personal Files (One Person, Thousands of Records)

A single person's personal data might be:
- Photos on their computer
- Email in an email client
- Notes in a note-taking app
- Contacts in a contact manager

Tools for this scale:
- **Spreadsheets**: Excel or Google Sheets easily handles 10,000-100,000 rows
- **Simple databases**: SQLite is perfect for a single user
- **Cloud storage**: Google Drive, Dropbox for unstructured files

Concerns at this scale:
- Keeping personal files organized
- Not accidentally deleting important data
- Finding specific items

### Department Databases (Dozens to Hundreds of Users, Millions of Records)

A department like Sales or Finance might use a database shared across the team:
- All customer records (millions of customers)
- All transactions (potentially billions of transactions)
- Reports shared across the team

Tools for this scale:
- **Relational databases**: MySQL, PostgreSQL, SQL Server
- **Business intelligence**: Tools like Tableau or Power BI for analysis
- **Shared spreadsheets**: For smaller datasets and analysis

Concerns at this scale:
- Multiple people accessing data simultaneously
- Ensuring data consistency
- Performance when hundreds of users query simultaneously
- Backing up critical data
- User access control

### Enterprise Data Systems (Thousands of Users, Terabytes of Data)

A large organization has data across the entire company:
- Customer data
- Financial records
- Employee information
- Inventory across multiple locations
- Operational logs

Tools for this scale:
- **Enterprise databases**: Large-scale SQL systems like Oracle, SQL Server
- **Data integration**: Tools that pull data from multiple systems
- **Data warehouses**: Specialized systems for analysis (Snowflake, BigQuery)
- **Master data management**: Systems that maintain the "single source of truth" for critical data

Concerns at this scale:
- High availability (system must always be up)
- Performance at massive scale
- Data governance (who can access what)
- Regulatory compliance
- Data quality across many systems
- Disaster recovery and backup

### Big Data (Petabytes, Distributed Systems)

Some organizations handle data at a scale that requires specialized systems:
- Search engines indexing trillions of web pages
- Social media platforms handling billions of posts per day
- Cloud providers managing data for millions of customers

Tools for this scale:
- **Distributed databases**: Data spread across thousands of computers
- **Hadoop, Spark**: Systems designed for processing massive datasets
- **NoSQL systems**: Databases designed for scale and flexibility
- **Stream processing**: Real-time analysis of continuous data flows

Concerns at this scale:
- Distributing data and computation across many machines
- Fault tolerance (if one machine fails, the system continues)
- Latency (even small delays matter when serving millions of users)
- Cost (processing and storing petabytes is expensive)

### Programmer's Perspective: Scalability Is Design

A key difference in how programmers think: we consider scale from the beginning. A system designed for 1,000 users might fail catastrophically at 10,000 users if it wasn't designed with scale in mind.

This is why programmers think about data structure choices early. A system that works fine with SQLite and a spreadsheet might need a distributed database and data warehouse when it grows. Planning for scale doesn't mean over-engineering, but it means understanding how choices made today affect the system's ability to grow.

---

## Bridge from Business: How You've Known This All Along

If you've worked in business, you've intuited data management principles, even if you didn't name them formally.

**When you organized a spreadsheet**, you were implicitly creating a data schema. You decided that each row would be a customer, each column would be an attribute, and you chose a consistent format.

**When you used a pivot table**, you were performing aggregation and grouping—fundamental database operations.

**When you discovered that your spreadsheet had duplicate customer records**, you encountered a data integrity issue.

**When you exported data from one system and imported it into another**, you worked with semi-structured data translation.

**When you realized you needed to track multiple addresses for each customer**, you ran into the limits of a flat table and intuitively understood that you needed a more complex structure.

What you're learning now is how to think about these challenges systematically and deliberately, using the vocabulary and tools that programmers use to solve them at any scale.

---

## How Programmers Interact with Data (vs. Business Users)

This distinction is worth emphasizing because it changes how you'll approach the work:

**Business users** typically:
- Work with data through an application interface (forms, reports, dashboards)
- Don't directly access the database
- Care about results (reports, analyses)
- May not understand the underlying structure

**Programmers** typically:
- Work directly with the underlying data structure
- Use query languages to request exactly the data needed
- Understand how data is organized and why
- Design systems with specific use cases in mind
- Consider performance, integrity, and scalability from the start

As you transition, you'll increasingly think like a programmer about data—understanding structure, writing queries, designing databases. But remember: programs ultimately serve business needs. The concepts you're learning aren't abstract—they're the foundation for every business system that processes data.

---

## Review and Discussion Questions

1. **Categorizing Data**: Think about a business process you've worked with (sales, operations, finance, etc.). Identify examples of structured, unstructured, and semi-structured data in that process. Why is each type present?

2. **Primary Keys in Practice**: Consider a business dataset you've worked with (customer list, product inventory, transaction history). What would be appropriate primary keys for the main entities? Why those choices?

3. **One-to-Many Relationships**: Describe a one-to-many relationship from your business experience. How did it challenge you when working with spreadsheets? How might a proper relational structure help?

4. **Data Integrity**: Recall a time when data integrity problems caused issues in your organization (duplicate records, inconsistent information, etc.). How could proper database constraints have prevented the problem?

5. **Scale and Approach**: A spreadsheet works for one team of 5 people with 5,000 customer records. What problems might you anticipate when growing to 500 people accessing 50 million customer records? How would your data management approach need to change?

