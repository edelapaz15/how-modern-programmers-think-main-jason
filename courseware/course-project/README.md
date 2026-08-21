# Course Project Thread: CivicTrack

*One running example that threads through all five days of the course.*

---

## Why a running project?

This week covers a lot of ground — environments, version control, computational thinking, data, and a first taste of real code. To keep those pieces connected, the course uses **one shared example** the whole way through. Instead of a new, throwaway example in every module, each day adds another lens on the *same* system. By Friday you'll understand one real application end to end — and you'll have seen how every topic in the course contributes to building it.

Instructors: use CivicTrack as the default example whenever a topic needs one. Students may substitute an application from their own agency where an activity invites it — the framework is the point, not the specific app.

---

## The scenario

**CivicTrack** is the citizen service-request system for the fictional **City of Rivervale** (population ~120,000). It is a "311-style" system: residents report non-emergency issues — potholes, broken streetlights, missed trash pickup, graffiti, water leaks — and the city tracks each request from submission to resolution.

This domain was chosen because it is familiar to anyone who has worked in or with government, it touches every layer of a modern application, and real cities publish open data exactly like it (see [the data folder](data/)).

### What CivicTrack does

1. A resident submits a request (category, description, address) through a web form or a phone agent.
2. The request is saved with a status of **New** and routed to the responsible **department**.
3. Staff update the request as they work it: **New → In Progress → Resolved → Closed**.
4. Residents (and managers) can look up a request's status at any time.
5. Managers run reports: open requests by department, average time to resolve, requests by category and ZIP.

---

## The layers (how the pieces fit)

| Layer | In CivicTrack | Course connection |
|-------|---------------|-------------------|
| **Front end** | The resident-facing web form and status-lookup page | Module VII (web overview) |
| **Back end / logic** | Routing a request to the right department, enforcing status rules | Module V (computational thinking) |
| **Data store** | The requests, categories, and departments tables | Module VI (data management) |
| **API** | The endpoint a front end calls to read/create requests (returns JSON) | Module VI (APIs and JSON) |
| **Tools & workflow** | The repo, branches, README, and editor the team uses | Modules III–IV |
| **People** | Product owner, developers, reviewer, QA, ops | Modules I, IV |

Module VIII revisits these layers as a whole — see [Module VIII — Next Steps](../docs/Module-08-Building-for-the-Future/02-next-steps.md) for where these skills can take you after the week.

---

## How each day touches CivicTrack

| Day / Module | What we do with CivicTrack |
|--------------|----------------------------|
| **Day 1 — I & II** | Take CivicTrack apart as a *user* (Activity 1): name its layers, technologies, and the team roles behind it. |
| **Day 2 — III** | Set up the kind of workspace a CivicTrack developer uses: terminal, editor, project folder. |
| **Day 3 — IV** | Treat the CivicTrack docs as a team artifact — version-control its README, branch, and review a change. |
| **Day 4 — V & VI** | Decompose the "submit a request" workflow (computational thinking); model CivicTrack's data and query it (the [datasets](data/) and the mini-database activity are CivicTrack). |
| **Day 5 — VII & VIII** | Write a small piece of CivicTrack's real logic in JavaScript; then step back and see how every layer we studied fits together into one system. |

---

## Assets

- [`data/service-requests-raw.csv`](data/service-requests-raw.csv) — messy export for the CSV/data-cleaning work (Activity 15, Demo 21).
- [`data/service-requests-clean.csv`](data/service-requests-clean.csv) — cleaned version for spreadsheet analysis (Demo 22).
- [`data/schema.md`](data/schema.md) — the relational model + seed data for the SQL work (Activity 14, Demos 23–25) and the JSON shape for the open-data/API demo (Demo 26).
