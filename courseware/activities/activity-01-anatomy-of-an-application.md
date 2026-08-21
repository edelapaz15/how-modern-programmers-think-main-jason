# Activity 01: Anatomy of an Application

**Module:** I (Introduction to Modern Programming)
**Related reading:** [Defining the Modern Programmer](../docs/Module-01-Introduction-to-Modern-Programming/01-defining-the-modern-programmer.md)

---

## Objective

By the end of this activity, you will have analyzed a real application you use every day and identified the programming disciplines, technologies, and team roles that make it work. You'll see that the software you already interact with is built from the same concepts this course teaches.

---

## Background

You already know more about software than you think. Every time you log into a web application, search for something, fill out a form, or receive a notification, you're interacting with layers of programming — front-end interfaces, back-end logic, databases, APIs, security systems, and more. You just haven't had the vocabulary to describe what's happening behind the scenes.

This activity flips your perspective. Instead of looking at programming as something abstract and unfamiliar, you'll start from software you already understand as a user and work backward to uncover the programming that powers it. This is the same analytical skill that experienced developers use constantly — looking at a system and reasoning about how it was built.

By the end, you'll have a much clearer picture of how the topics in this course (development environments, version control, data structures, databases, front-end and back-end programming) connect to real, working software.

---

## Our Running Example: CivicTrack

Throughout this course we'll keep coming back to one shared application so the pieces stay connected: **CivicTrack**, the citizen service-request system for the fictional **City of Rivervale**. It's a "311-style" system — residents report non-emergency issues (potholes, broken streetlights, missed trash pickup, graffiti, water leaks), and the city tracks each request from submission to resolution. You'll meet CivicTrack again every day this week, each time through a new lens.

This activity uses CivicTrack as its primary worked example. You'll take it apart the way you would any app you use — naming its layers, the technologies behind them, and the team roles that keep it running. Then, as an extension, you'll apply the exact same framework to an application from your own agency.

> See the full project thread: [`../course-project/README.md`](../course-project/README.md)

---

## Instructions

### Step 1: Get to Know CivicTrack (5 minutes)

You'll analyze CivicTrack first because it touches every layer of a modern application. Here's what it does, from a user's point of view:

1. A resident submits a request — category, description, address — through a web form (or by calling a phone agent who fills out the same form).
2. The request is saved with a status of **New** and routed to the responsible **department**.
3. Staff update the request as they work it: **New → In Progress → Resolved → Closed**.
4. Residents and managers can look up any request's status at any time.
5. Managers run reports: open requests by department, average time to resolve, requests by category and ZIP.

**Write down:** A one-sentence description of CivicTrack in your own words. You'll use it as the subject for Steps 2–4.

**Extension (do this after the CivicTrack pass, or as homework):** Repeat Steps 2–5 for an application you use regularly at your own agency — a permitting portal, a case-management system, an internal dashboard. Good general examples to draw on for comparison include a project management tool (Jira, Asana, Trello), a business application (Salesforce, QuickBooks, a company portal), or a consumer app (a banking app, Spotify, Uber). Choose something complex enough to be interesting — ideally with user accounts, search, notifications, and data that changes over time. The framework is the point, not the specific app.

### Step 2: Map the User-Facing Features (10 minutes)

Think through CivicTrack from the description above and list 8–10 distinct features or interactions. Be specific. Don't just write "homepage" — describe what's happening.

For each feature, note:

- **What you see** — The visual element (a search bar, a list of results, a profile page, a notification badge)
- **What you do** — The interaction (type a query, click a button, drag an item, upload a file)
- **What happens** — The result (results appear, an item moves, a confirmation email arrives, data updates)

*Example for CivicTrack:*

| What You See | What You Do | What Happens |
|---|---|---|
| Request form with category, description, and address fields | Fill in a pothole report, click "Submit" | A new request is saved with status **New** and a tracking number appears |
| Status-lookup page with a tracking-number box | Enter a tracking number, press Enter | The request's current status and history are displayed |
| Staff queue showing a department's open requests | Change a request's status to "In Progress" | The status updates; the resident can now see the change |
| Manager reports screen | Choose "average time to resolve, by department" | A summary table is generated from the stored requests |

### Step 3: Identify the Technology Layers (15 minutes)

Now think about what's happening *behind* each feature. For every item in your list, consider which of these technology layers are involved:

- **Front-End (User Interface):** HTML structure, CSS styling, JavaScript interactivity. Anything you can see and click.
- **Back-End (Server Logic):** Processing requests, enforcing business rules, authentication. The "brain" that decides what happens when you click something.
- **Database:** Storing and retrieving data — user profiles, task lists, order histories, messages.
- **API (Application Programming Interface):** The communication layer between front-end and back-end, or between this application and external services.
- **Infrastructure:** Servers, cloud hosting, content delivery networks that keep the application fast and available.

Go back through your feature list and annotate each one. Which layers are involved?

*Example (CivicTrack):*

| Feature | Front-End | Back-End | Database | API | Infrastructure |
|---|---|---|---|---|---|
| Submit a request | Form, field validation | Routing rules (which department?), assign status **New** | Save the new request row | Create-request endpoint | HTTPS, hosting |
| Look up status | Tracking-number input, status display | Find request, format history | Read request + status history | Get-request endpoint | Caching for speed |
| Staff updates status | Queue list, status dropdown | Enforce status rules (New → In Progress → …) | Update status field | Update-request endpoint | Audit logging |
| Manager report | Report screen, summary table | Aggregate by department, compute averages | Query requests, group/count | Reporting endpoint | Scheduled jobs |

Don't worry about getting every detail right. The goal is to start reasoning about what must be happening technically. Use your best judgment and note where you're guessing — that's a sign of good analytical thinking.

### Step 4: Imagine the Team (10 minutes)

Based on what you've uncovered, think about the people who built and maintain CivicTrack. Write a brief description of the team you think is behind it. Consider:

- **Front-end developers:** What are they responsible for? What would their daily work look like?
- **Back-end developers:** What kinds of problems do they solve?
- **Database administrators or data engineers:** What data challenges does this application have?
- **QA/testers:** What could go wrong that needs testing?
- **DevOps engineers:** How does this application get deployed and stay running 24/7?
- **Product managers and designers:** Who decides what features to build and how they should look?

Now connect this to your own experience: which of these roles, if any, overlap with responsibilities you've had in your career? Even if the technology is different, the *type of work* — coordination, problem-solving, quality assurance, understanding user needs — may be very familiar.

### Step 5: Write Your Analysis Summary (5 minutes)

Write a short paragraph (100–150 words) summarizing what you learned from this exercise. Address:

1. What surprised you about the complexity behind a "simple" application?
2. Which technology layer are you most curious to learn more about?
3. What skills or instincts from your current work do you think will help you understand how applications are built?

---

## Expected Deliverable

A document or markdown file containing:

1. **CivicTrack** and your one-sentence description (plus your own-agency app, if you did the extension)
2. **Feature list** (8–10 items) with what you see, do, and what happens
3. **Technology layer analysis** showing which layers each feature involves
4. **Team description** with roles and a note on how your own experience connects
5. **Summary paragraph** with your key takeaway

---

## Reflection Questions

1. Before this exercise, did you think of the applications you use as "simple" or "complex"? Has your perspective shifted? What implications does that have for your learning journey?

2. Which technology layer showed up in almost every feature you analyzed? What does that tell you about where programmers spend most of their time?

3. As a user, you already have strong intuitions about what makes software good or frustrating. How might that user perspective be an advantage as you learn to build software yourself?

---

## Tips for Success

- **There are no wrong answers here.** You're building the skill of reasoning about systems, not demonstrating technical knowledge you don't have yet. An educated guess is exactly what we're looking for.
- **Be specific.** "The back-end does stuff" is less useful than "The back-end probably checks my password against a stored version and creates a session so I stay logged in."
- **Revisit this document at the end of the course.** You'll be amazed at how much more you can fill in after completing all eight modules.
