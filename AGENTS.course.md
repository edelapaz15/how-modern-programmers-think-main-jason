<!--
  [THIS COURSE] PROFILE — course-specific values for *How Modern Programmers Think*.

  Cross-course conventions live in standards/AGENTS.base.md. This file holds only what is
  specific to this course. The two are combined into the generated AGENTS.md by
  standards/utils/assemble.sh / standards/utils/assemble.ps1 — edit these sources, not AGENTS.md.
-->

# How Modern Programmers Think — Agent Guide

This guide orients an AI agent (Claude Code, GitHub Copilot, Codex, Grok, or any assistant) working on
this courseware repository. It documents **how the course is designed, how the parts relate, and the
conventions every change must preserve** — read it before editing anything. The **course profile**
below is specific to this course; the **shared standards** that follow apply to every course in the
program. Where the two disagree, this course profile wins.

> **This course is structurally unlike its siblings.** It is a conceptual on-ramp, not a programming
> course. Its **demos and activities are Markdown documents** — verbatim instructor
> scripts and student exercises — **not runnable `begin/`/`end/`/`solution/` npm projects**, and demos
> do **not** pair one-to-one with activities. Do not carry structure over from a sibling course.

---

## What this repository is

- **Course:** *How Modern Programmers Think*
- **Course code:** `PT28604`
- **Duration:** 5 days, ~35 instructional hours
- **Audience:** Adult career-changers new to programming — government professionals being reskilled.
  Prerequisite is only computer literacy (navigate a file system, edit files).
- **Position:** A **standalone** conceptual on-ramp — the course that comes *before* hands-on
  programming study. It does not assume, and is not assumed by, any other course. **Never reference
  follow-on or future courses in course content**: no "week 1 of N", no "the courses that follow", no
  naming other courses in the catalog. Forward-looking material points at the learner's own continued
  learning and career direction, not at a next course.
- **Delivery:** Instructor-led with live coding, live drawing, demos, and activities. The written
  docs are a **reference**, not a script the instructor reads aloud (see the note in the root
  `README.md`).
- **Delivery environment:** The class runs on **virtual machines provided by the training company**,
  one per student. Unless a specific document says otherwise, assume both of these hold:
  - **Full outbound internet access** to every resource the course needs — the VS Code Marketplace,
    `registry.npmjs.org`, `github.com`, the open-data APIs, and AI assistants.
  - **Students have full administrator privileges** on their VM.

  So in **course content** — demos, activities, docs, slides — **write for the happy path.** No "if
  your organization blocks this…" asides, no offline fallbacks, no elevation workarounds. The
  environment is controlled and provisioned for the course, and the instructor handles any exception
  live. A student who hits a wall asks the instructor; they do not read a hedge in the courseware.

  Three things this does **not** override:
  - **`SETUP_STUDENT_MACHINE.md` is a different genre with a different audience.** It is a
    **provisioning request that the instructor forwards to the training vendor**, who builds the VMs.
    The instructor is its only reader, and reads it *to pass it along* — not to act on it in class.
    **Students never read it.** So write it to be handed to a vendor intact: its "please confirm…",
    "must be decided at image-build time", and "tell the instructor before Day 1" language is that doc
    working as intended, not hedging to strip out. The full-admin/full-internet assumption above is the
    *result* of that provisioning; it is not a reason to delete the request that produces it. Admin
    rights don't help if the software was never put on the image.
  - **Per-cohort exceptions win where they are documented.** The current cohort's VMs were built
    **without WSL**, so Demo 3 runs as a projected walkthrough for this delivery — see
    `TEACHING-GUIDE.md`. A specific, dated cohort note beats this general assumption.
  - **`TEACHING-GUIDE.md`'s risk and pacing notes are for the instructor**, who is a legitimate
    audience for "this can fail, here's the fallback." Keep them.

---

## Repository map

```
/
├── README.md                 # Public landing page: schedule, day/module summary, links to everything
├── LICENSE                   # MIT for instructor code; docs are for enrolled students only
├── AGENTS.md                 # GENERATED — assembled from AGENTS.course.md + standards/AGENTS.base.md
├── AGENTS.course.md          # ⭐ SOURCE — this course profile (hand-edited)
├── CLAUDE.md                 # One-line shim: `@AGENTS.md` (Claude Code reads only CLAUDE.md)
├── standards/                # Shared cross-course standards (a plain folder, copied between courses)
│   ├── AGENTS.base.md        # ⭐ SOURCE — reusable [PATTERN] conventions
│   ├── utils/                # assemble.sh / assemble.ps1 → build AGENTS.md from the two sources
│   └── README.md             # How to edit standards/ + share changes across courses
├── .github/copilot-instructions.md   # Thin pointer to AGENTS.md
└── courseware/
    ├── instructor/          # Instructor-only orchestration material
    │   └── TEACHING-GUIDE.md # ⭐ MASTER ORCHESTRATION DOC — the single source of truth for
    │                         #   how modules → topics → demos → activities → days fit together
    ├── setup/               # Machine-provisioning material
    │   └── SETUP_STUDENT_MACHINE.md  # PROVISIONING REQUEST → the training provider's imaging team.
    │                         #   NOT student-facing; students never read it. See "Delivery environment".
    ├── outline/             # Course outline (source of record) — its own md → pdf pipeline
    │   ├── md/              # ⭐ SOURCE: HowModernProgrammersThink_Outline.md (hand-edited)
    │   ├── pdf/             # GENERATED PDF (the root README links here) — do not hand-edit
    │   └── utils/           # Containerized md → styled-HTML → pdf toolchain (marked + headless Chrome)
    ├── docs/                # The reading — one folder per module, chaptered topic files
    │   ├── README.md        # Module directory / index (mirrors the teaching guide)
    │   ├── glossary.md      # "The Decoder Ring" — plain-English term definitions
    │   └── Module-0X-Name/
    │       ├── 00-overview.md         # Module overview: objectives, topic list, themes
    │       └── NN-topic-slug.md       # One chapter per topic
    ├── activities/          # 20 hands-on/reflective student exercises (Markdown, not projects)
    │   ├── README.md        # Activity directory + progression narrative
    │   └── activity-NN-slug.md
    ├── demos/               # 38 instructor-performed live demonstrations (Markdown scripts)
    │   ├── README.md        # Demo directory (by number and by day)
    │   ├── Instructor-Demo-List.md
    │   └── demo-NN-slug.md
    ├── assessments/         # Per-module formative exit tickets (not graded)
    │   ├── README.md
    │   └── module-NN-exit-ticket.md
    ├── course-project/      # The running example threaded through the whole week
    │   ├── README.md
    │   └── data/            # Sample datasets + relational schema
    ├── diagrams/            # Concept diagrams, reused across docs / demos / activities / slides
    │   ├── README.md        # Diagram index: what each one shows and where it is embedded
    │   ├── svg/             # ⭐ SOURCE — authored with the diagram tooling, never hand-edited
    │   ├── png/             # GENERATED — the format every Markdown embed points at
    │   └── pdf/             # GENERATED — vector, for print and single-diagram projection
    └── slides/
        ├── md/              # ⭐ SOURCE: one Markdown deck per module (Marp)
        ├── pptx/            # GENERATED — do not hand-edit
        ├── pdf/             # GENERATED — do not hand-edit
        └── utils/           # Containerized md → pptx → pdf → merged-pdf toolchain
```

---

## The day / module layout

| Day | Modules | Theme | Demos | Activities |
|-----|---------|-------|-------|------------|
| 1 | I, II | Foundations and Mindset | — | 1–5 |
| 2 | III | Tools of the Trade | 1–8 | 6–7 |
| 3 | IV | Version Control and Teamwork | 9–16 | 8–10 |
| 4 | V, VI | Logic and Data | 17–26 | 11–15 |
| 5 | VII, VIII | Real Code and Next Steps | 27–38 | 16–20 |

Module list: I Introduction to Modern Programming · II Productivity, Focus & Well-Being ·
III Development Environments & Efficiency · IV SDLC & Collaboration · V Computational Thinking,
Data Structures & Algorithms · VI Data Management · VII Programming Syntax & Logic ·
VIII Building for the Future.

**Numbering ranges** (global and sequential, per the shared standards): **demos 1–38** in one
continuous sequence across all days; **activities 1–20** in one continuous sequence; **modules I–VIII**;
**days 1–5**. There are 8 modules, so there are **8 exit tickets** and **8 slide decks**.

---

## Pedagogical spine

Two design principles govern content decisions.

### Code-example progression

Complexity of code examples ramps deliberately across the week. Match new content to its band:

- **Modules I–III** — plain English and **pseudocode** as the primary vehicle.
- **Modules IV–VI** — **transitional**: real commands (Git, SQL) appear alongside pseudocode.
- **Modules VII–VIII** — **real code** in JavaScript and Java, fully explained.

These bands describe the *primary* teaching vehicle of each phase, not a hard ban on real syntax
appearing earlier. Two deliberate exceptions are allowed and already used: (1) brief, **clearly-labeled
"same idea in a real language" preview** sidebars in the earlier bands, and (2) code-**reading/review**
exercises that use real code (reading code is a first-class beginner skill, distinct from writing it —
e.g., Activity 10 in Module IV). What to avoid is unlabeled, unexplained JS/Java that a learner is
expected to *write from scratch* before Module VII. Keep the Java material (Module VII, topic 05)
**preview-level** — it is contrast, not a mastery target.

### The running project: CivicTrack

`course-project/` defines **CivicTrack**, a 311-style citizen service-request system for the fictional
City of Rivervale. It is the default example whenever a topic needs one, so students understand **one**
application end-to-end by Friday. Each day is another lens on it (take it apart → set up its workspace →
version-control its docs → model & query its data → write a piece of its logic → step back and see it as
a whole system).

When authoring an example and CivicTrack fits, **use CivicTrack** rather than inventing a new domain.
The sample datasets (`course-project/data/`: a messy raw CSV, a clean CSV, and a relational `schema.md`)
are the concrete backing for the Day 4 data work (Activities 14–15, Demos 21–26) — keep them internally
consistent (the schema, the clean CSV, and the SQL must describe the same tables and rows).

---

## Course-specific conventions

These are the concrete values the shared standards below refer to:

- **Demos and activities are Markdown documents, and they do not pair.** There are **38 demos** but only
  **20 activities**; both hang off *topics* via `TEACHING-GUIDE.md`, not off each other. There is no
  demo↔activity numbering alignment to maintain, no `begin/`/`end/`/`solution/` folders, no
  `package.json`, no cumulative activity chain, and **no separate demo/activity "themes" to keep apart**
  — CivicTrack is the shared running example for both tracks.
- **The cross-cutting motifs**, in their concrete form:
  - **🤖 Working with AI** — canonical form is a `> **🤖 Working with AI:**` blockquote. It appears
    across Modules III, V, VI, VII and Demos 7, 37, 38, and always pairs an AI capability with a
    **verify-the-output** discipline. In the glossary, a 🤖 marks AI-related terms.
  - **🔗 Course Project Thread** — a `> **🔗 Course Project Thread: CivicTrack**` blockquote callout in
    the `00-overview.md` of **Modules III–VIII**, tying that module back to CivicTrack. Modules I and II
    do not carry it — CivicTrack is not introduced until Module III.
  - **Business/prior-career analogies** — the audience are career-changers; concepts are routinely
    anchored to operations, finance, project management, etc. Keep this voice.
- **Git is taught in this course** (Module IV; Demos 9–14; Activity 8). **Git examples use the `master`
  branch name** in teaching content, deliberately and consistently (a past change standardized
  `main` → `master` across the docs). Keep git *teaching* examples on `master`. (Note: the *repository's
  own* default branch is `main` — that governs repo operations, not lesson content.)
- **Assessments = one exit ticket per module (I–VIII).** `courseware/assessments/module-NN-exit-ticket.md`
  (`NN` = `01`..`08`, one per `docs/Module-0N-*` module — **modules, not days**). Day 1 covers Modules I
  and II, so it runs two tickets; Day 3 covers Module IV alone and runs one.
- **The outline** source is `outline/md/HowModernProgrammersThink_Outline.md`, producing the same-named
  `.pdf` in `outline/pdf/` — the file the root `README.md` links to. Edit the Markdown and regenerate
  with `outline/utils/convert.*`; never hand-edit the PDF.
- **Slide decks:** one per module, `slides/md/NN-Module-Name-Slides.md` (`01`..`08`), where the name
  matches the module's `docs/` folder slug minus the `Module-0X-` prefix. The merged-PDF filename is set
  by `COMBINED_NAME` in `slides/utils/entrypoint.sh`.
- **Diagrams live in `courseware/diagrams/`** and are **shared assets, not per-artifact ones.** One
  diagram is routinely embedded by a docs topic, a demo, an activity, and a slide at once — so the
  relative path differs by caller (`../diagrams/png/x.png` from `demos/`, `../../diagrams/png/x.png`
  from `docs/Module-0X/` and `slides/md/`). `diagrams/README.md` is the index and records where each
  one is embedded; update it whenever you add a diagram or embed an existing one somewhere new.
  Authoring rules are in the shared standards under *Diagram*.
- **The course is taught on Windows**, and Module III explicitly teaches Windows Essentials — so the
  PowerShell-first platform voice in the shared standards is course content here, not just a convention.
