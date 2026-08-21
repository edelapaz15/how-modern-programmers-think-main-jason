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
