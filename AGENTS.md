<!-- GENERATED FILE — do not edit. Assembled from AGENTS.course.md + standards/AGENTS.base.md
     by standards/utils/assemble.(sh|ps1). Edit those sources and re-run. -->

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

---

<!-- ===== Shared cross-course standards (standards/AGENTS.base.md) ===== -->

<!--
  SHARED COURSEWARE STANDARDS — the reusable [PATTERN] base for a course in this training
  program. It is combined with a per-course AGENTS.course.md to produce each repo's
  AGENTS.md (run standards/utils/assemble.sh or standards/utils/assemble.ps1).

  Edit CROSS-COURSE conventions here. Edit COURSE-SPECIFIC values in AGENTS.course.md.
  Never edit the generated AGENTS.md directly.

  This base states the conventions that define "conformance" for a course built this way, and
  defers concrete values — the module/day layout, the numbering ranges, the running project,
  the progression of examples — to the per-course profile. Read the course profile above for
  THIS course's specifics; where the profile and this base disagree, the profile wins.

  This folder is a plain directory in each course repo. Keep it free of course-specific values so it
  stays copyable between courses — see standards/README.md.
-->

## How the material is organized (the artifact model)

A course in this program is one body of material seen through five artifact types. **They are
cross-referenced, not independent** — a change to one usually implies a change to others.

| Artifact | Folder | Audience | Purpose |
|----------|--------|----------|---------|
| **Docs (topics)** | `courseware/docs/Module-0X/` | Student (reference) | The prose "textbook" — one chapter per topic |
| **Slides** | `courseware/slides/md/` | Instructor (projected) | The lecture spine, one deck per module |
| **Demos** | `courseware/demos/` | Instructor (performs live) | Verbatim scripts for live coding/tool demonstrations |
| **Activities** | `courseware/activities/` | Student (does) | Hands-on or reflective exercises that apply the docs |
| **Assessments** | `courseware/assessments/` | Both | End-of-module formative checks for understanding |

### The relationship graph

- **`TEACHING-GUIDE.md` is the hub** (see the course profile's repository map for where it lives — courses
  differ). It maps every module → its topics → the demos and
  activities that attach to each topic → which day they run on → time budgets. **When you add, remove,
  renumber, or re-scope any demo/activity/topic, `TEACHING-GUIDE.md` must be updated in the same
  change.** It is the first place to look to understand the course and the last place to reconcile
  after editing.
- **A module** (docs folder) contains **topics** (`NN-*.md` chapters). Each topic may have **demos**
  (instructor shows it) and **activities** (student does it) hanging off it.
- **Cross-links are load-bearing.** Demos and activities carry a `Related reading:` link back to the
  docs topic they support. Docs overviews link forward to the course project. Keep these links valid
  when moving/renaming files.
- **Numbering is global and sequential**, not per-module — the course profile gives the concrete
  ranges:
  - **Demos** and **activities** each run in a single continuous sequence across all days.
  - **Modules:** Roman numerals in prose; zero-padded Arabic (`Module-01`) in folder names.
  - **Topic files:** zero-padded two-digit prefix (`00-overview.md`, `01-...`, `02-...`).
  - **Days:** numbered from 1.
- **Index tables exist in multiple places and must agree:** the root `README.md`, each subfolder's
  `README.md`, and `TEACHING-GUIDE.md` all list the same demos/activities/modules. Renumbering means
  editing all of them. Treat divergence between these tables as a bug.

## Cross-cutting motifs

Recurring conventions tie the week together. The course profile names the concrete motifs; preserve
them when editing and reuse them when adding. Across courses these hold:

- **An AI motif** that always pairs an AI capability with a **verify-the-output** discipline.
- **A course-project thread** — a callout in module overviews that ties each module back to the
  course's running example.
- **Analogies to the audience's prior experience**, per the profile's audience description.
- **Review/Discussion questions** at the end of doc topics; **Reflection Questions** in activities.
- **The glossary is the decoder ring** — when you introduce a jargon term in the docs, add it to
  `docs/glossary.md` (grouped by the module where it first appears).

## Authoring conventions per artifact

Match the existing template exactly when adding a new file. The quickest way to conform is to copy the
nearest existing sibling and adapt it — the files on disk are the ground truth.

### Doc topic (`docs/Module-0X/NN-slug.md`)
- H1 title `# Topic N: <Title>`. Where the topic carries a longer descriptive subtitle, keep the H1
  short (matching the name used in `docs/README.md`) and put the subtitle in the H2 beneath it.
- Prose-first "textbook chapter" with `##`/`###`/`####` structure.
- Analogies to the audience's prior experience; examples obey the profile's progression band.
- Ends with review/discussion questions. Introduce a jargon term → add it to the glossary.

### Module overview (`docs/Module-0X/00-overview.md`)
- Sections: intro paragraph, the course-project thread callout (in the modules the profile says carry
  it), **Learning Objectives** (numbered, bolded lead verb), **Topic List** (with file names + key
  concept), How to Use, Prerequisites, Key Themes, and a closing "Ready to Begin?".
- Additional module-specific sections (e.g. a time commitment, a note on terminology) are welcome
  alongside these — the list above is the required spine, not a ceiling.

### Demo (`demos/demo-NN-slug.md`)
- Header block: `**Module:**`, `**Topic:**`, `**Estimated Time:**` (~12–20 min, beginner-paced — quick
  observational demos ~12, foundational/setup-heavy ones up to 20), `**Related reading:**` (link).
- Sections: **Objective** · **Setup/Prerequisites** · **Step-by-Step Script** (timed parts, each with
  `**Talking Point:**` lines and fenced commands/code) · **Key Points to Emphasize** · **Common
  Questions** (`**Q:**`/`A:`). Written to be delivered verbatim.

### Activity (`activities/activity-NN-slug.md`)
- Header block: `**Module:**`, `**Related reading:**` (link). Nothing else — an activity's estimated
  time lives in `TEACHING-GUIDE.md` (the `Est. Time` column of the module's activity table), not in the
  activity file, so the instructor's timing budget has one source of truth.
- Sections: **Objective** · **Background** · numbered **Part / Step** structure with fenced code ·
  **Expected Deliverable** · **Reflection Questions** · **Tips for Success**.

### Exit ticket (`assessments/module-NN-exit-ticket.md`)
- **One per module, keyed to the module — not per day.** A day that covers two modules runs two of
  these; a single-module day runs one. The count of tickets must equal the number of modules.
- Header: module number + theme, `~5 minutes · Not graded` (`~7` where the ticket runs four
  questions). **3–4 recap questions** (mixed
  MC/short/"explain in your own words", grounded in that module's actual docs) · **Muddiest Point** ·
  **Connect It** (ties to prior work or the course project) · a collapsed `<details>` **Instructor
  Answer Key** that says *what to listen for*, not just one right answer. Formative and non-punitive —
  never introduce grading/ranking.

### Slide deck (`slides/md/NN-Module-Name-Slides.md`) — see *The build pipelines*
- **Filename:** zero-padded module number + the module's `docs/` folder slug (minus the `Module-0X-`
  prefix) + `-Slides.md` — e.g. `05-Computational-Thinking-Data-Structures-Algorithms-Slides.md`. The
  leading `NN-` fixes the merge order; keep it aligned with the docs folder.
- YAML front matter (`title`, `subtitle`, `author`) → title slide.
- Authored in a **tool-agnostic convention**: `#` = section-divider slide (title only);
  `##` = content slide (bullets/code/tables beneath it are its body).
- **No `---` rules** — headings alone drive slide breaks. Keep bullets terse.
- **Images are allowed, and diagrams are the intended use.** Embed a generated diagram with a plain
  relative Markdown image, `![Alt text](../../diagrams/png/<name>.png)`, on its own line beneath the
  `##` heading. Always write real alt text — it is the only description a student reading the deck
  gets. A slide carrying a diagram should carry **little else**: the heading, the image, and at most
  two short bullets. Do not pair a full-height diagram with a code fence or a table; split them across
  two `##` slides. See *Diagram* below for how the diagrams themselves are authored.
- **Do NOT hand-write Marp scaffolding.** The pipeline runs each deck through
  `slides/utils/preprocess.mjs`, which injects the `marp: true` front matter, the `theme`/
  `paginate`/`footer` directives, the `<!-- _class: -->` comments, and the `---` break before every
  `#`/`##`. Keep authoring in the `#`/`##`/no-`---` convention above — the scaffolding is added for you.
- **Content must FIT on the slide — Marp clips overflow, it does not shrink to fit.** A `##` slide
  whose bullets + code box + table run past the bottom edge is silently truncated in the PDF/PPTX. If a
  slide is too tall, **split it into two `##` slides** (e.g. concept on one, the code/algorithm on the
  next). Keep code fences short and bullets terse, and always re-render and eyeball the deck after
  editing.
- **Fence code by language so the theme styles it:** shell/terminal fences (` ```bash `, `sh`, `shell`,
  `console`, `powershell`, `ps1`) render as **dark** bordered monospace boxes; all other fences (`js`,
  `java`, `sql`, `text`, pseudocode) render as **light** bordered boxes. Ligatures are disabled so
  operators show literally (`=>`, `===`, `!==`) — keep them as raw ASCII in the source.

### Diagram (`diagrams/svg/<name>.svg` → `diagrams/png/`, `diagrams/pdf/`)
- **The `.svg` is the source; the `.png` and `.pdf` are generated.** Never hand-edit the exports, and
  never hand-edit the SVG in a text editor either — it carries an embedded model that the diagram
  tooling reads back. Re-author the SVG with the diagram tooling, then re-export both formats.
- **Embed the PNG, not the SVG.** `![Alt text](../diagrams/png/<name>.png)` — PNG is what renders
  inline on GitHub, in VS Code preview, and through the Marp pipeline. The PDF exists for printing and
  for an instructor who wants to project one diagram on its own.
- **One diagram, one idea.** A diagram that needs a paragraph of explanation to parse is two diagrams.
- **Alt text is required and must be descriptive** — it is the accessible substitute for the whole
  picture, so `![Diagram](...)` is not acceptable.
- **A diagram supplements the prose; it does not replace it.** Never delete the explanation a diagram
  illustrates. Beginners read the words and the picture together, and the words survive a failed image
  load.
- **Keep ASCII as ASCII where the ASCII is the point.** Directory trees, file listings, terminal
  output, and `git log --graph` output are literal monospace artifacts — students must learn to read
  them in that form. Convert an ASCII block to a diagram only when it was an attempt to draw a
  *concept* (a flow, a state model, a relationship), not a verbatim screen.
- **Naming:** short kebab-case slug describing the idea (`git-three-areas`, `civictrack-erd`), not the
  artifact it lands in — a diagram is routinely reused by a doc, a demo, and a slide.

## Platform & tooling

- **Primary teaching platform is Windows.** Terminal examples default to **PowerShell**
  (`Get-ChildItem`, etc.).
- **Cross-platform scripts ship in pairs:** a `.sh` (macOS/Linux) and a `.ps1` (Windows) wrapper for
  the same task (see each `utils/` folder).
- **Containers use podman by default** (Docker supported via `CONTAINER_ENGINE=docker`). Prefer Linux
  containers with host wrappers over local tool installs.
- **Line endings:** files executed *inside* a Linux container (`entrypoint.sh`, `convert.sh`,
  `*.mjs`, `Containerfile`) are forced to **LF** via each `utils/.gitattributes`. Do not let them
  become CRLF.

## The build pipelines (md → pdf)

This is a **content repository**, not a software application. There is no build step for the course
itself and no unit tests; the automated processes are the **generator pipelines** (of which slide
generation is one) and a **CI validation workflow**. "Correctness" here means pedagogical soundness,
internal consistency, and conformance to the conventions above — not passing tests.

**CI validation** (`.github/workflows/validate-courseware.yml`) runs on every push and PR and enforces
the mechanical invariants that rot silently:

- **Links and anchors** (`.github/scripts/check-links.mjs`) — every relative Markdown link resolves and
  every `#anchor` matches a real heading. Fenced code and inline code spans are excluded, because demos
  and activities contain *sample* README content (links to `CONTRIBUTING.md`, `LICENSE`) that students
  are learning to write — those are illustrations, not repo links.
- **`AGENTS.md` freshness** — re-runs the assembler and fails if the committed `AGENTS.md` differs from
  its two sources, so the generated file cannot drift.
- **Artifact counts and numbering** (`.github/scripts/check-counts.mjs`) — the demo/activity/module
  counts in the course profile, contiguous numbering from 1, one exit ticket and one slide deck per
  module, an `00-overview.md` in every module, and deck filenames matching their module folder slug.

If you deliberately change a count, update the course profile, `TEACHING-GUIDE.md`, every index table,
**and** the `EXPECT` block in `check-counts.mjs` in the same change.

Each pipeline is **containerized and file-driven**: every `*.md` in the source folder is converted, and
outputs merge in filename order. Adding a source file needs no script edits — just re-run. A running
container engine is required (`podman machine start` on Windows/macOS the first time). All of them are
built and run the same way, from their own `utils/` folder:

```bash
./convert.sh              # macOS/Linux: build image (first run) + convert
./convert.sh --no-build   # re-convert only
```
```powershell
.\convert.ps1             # Windows (PowerShell 7+)
.\convert.ps1 -NoBuild    # re-convert only
```

- **Slides** — the toolchain is **Marp**, run inside a container. Each authored deck is first passed
  through `slides/utils/preprocess.mjs` (which adds the Marp scaffolding — see *Slide deck* above) and
  then rendered by `marp-cli` with the `slides/utils/courseware.css` theme:
  `slides/md/*.md` → `preprocess.mjs` → Marp Markdown → `slides/pptx/*.pptx` + `slides/pdf/*.pdf` →
  (`pdfunite`) → a merged all-decks PDF (filename set by `COMBINED_NAME` in
  `slides/utils/entrypoint.sh`). Because Marp **clips** overflowing content rather than shrinking it,
  always re-render and visually inspect the PDFs after editing a deck, and split any slide whose
  content runs off the bottom.
  **Local images work, but only because the pipeline is set up for them:** the container mounts the
  whole `courseware/` tree (not just `slides/`), `preprocess.mjs` rewrites every relative image path to
  an absolute in-container path (the Marp-ready Markdown is generated into a temp dir, so a relative
  path would otherwise resolve against the wrong folder), and `marp-cli` runs with
  `--allow-local-files`. Changing any one of those three breaks every diagram in every deck silently —
  Marp emits a broken-image box, not an error.
- **Outline** — `outline/md/*.md` → *(marked + puppeteer-core / headless Chrome, themed by
  `outline/utils/outline.css`)* → `outline/pdf/*.pdf`, the file the root `README.md` links to.

The `pptx/` and `pdf/` outputs are **generated — never hand-edit them.**

## Working rules for an agent editing this repo

1. **Read `TEACHING-GUIDE.md` first.** It is the map. Reconcile it last.
2. **Conform to the nearest sibling.** Copy an existing file of the same type and adapt; do not invent
   a new structure. *Authoring conventions per artifact* is the checklist.
3. **Keep the index tables in sync.** Any add/remove/renumber of a demo, activity, topic, or module
   means editing every table that lists it: root `README.md`, the subfolder `README.md`, and
   `TEACHING-GUIDE.md`. Divergence is a defect.
4. **Respect the progression band** the course profile defines for code examples.
5. **Prefer the course project** for new examples; keep its datasets/schema/queries mutually consistent.
6. **Preserve the motifs** (verify-the-output AI callouts, course-project callouts, prior-career
   analogies, glossary upkeep) and the formative, non-punitive tone of assessments.
7. **Never hand-edit generated outputs** (`pptx/`, `pdf/`, `AGENTS.md`); edit the source and re-run the
   pipeline or the assembler.
8. **Fix cross-links when moving/renaming files** (`Related reading:`, README links, project-thread links).
9. **Match voice:** plain-English, encouraging, analogy-driven, aimed at an anxious beginner. Avoid
   unexplained jargon — define it or link the glossary.
10. **Global numbering is sequential** — inserting a demo/activity mid-sequence is a renumbering event;
    prefer appending, or renumber everything and update all tables if insertion is required.

## Adapting the standards to a course

- **Course-specific values** (title, course code, duration, audience, the module/day layout, the
  progression bands, the running project, the numbering ranges, the repository map, filenames) live in
  `AGENTS.course.md`. **Cross-course conventions** — the artifact model, the relationship graph, the
  authoring templates, platform/tooling, the pipelines, and the working rules above — live here in
  `standards/AGENTS.base.md`. These define what "conformance" means.
- After editing either source, regenerate the combined `AGENTS.md` with `standards/utils/assemble` (see
  `standards/README.md`). `CLAUDE.md` imports the generated `AGENTS.md`; the Copilot instructions point
  at it; Codex, Grok, Cursor, Gemini and other tools read `AGENTS.md` natively.
- When re-deriving a sibling course, **re-build the repository map, the numbering scheme, and the
  demo/activity model from what is actually on disk** — courses differ structurally. Do not carry over
  structure that isn't present, and update the course profile before assuming any layout.
- Re-point file/URL references and regenerate the index tables and `TEACHING-GUIDE.md` for the new
  course. Update `.github/copilot-instructions.md` only if its pointer path changes (its body should
  stay a thin reference to `AGENTS.md`).
