# Diagrams

Concept diagrams shared across the courseware. One diagram is routinely embedded by a docs topic, a
demo, an activity **and** a slide at once — so they live here rather than inside any one artifact
folder.

## How this folder works

| Folder | What is in it |
|--------|---------------|
| `svg/` | ⭐ **SOURCE.** Authored with the diagram tooling. Carries an embedded model the tooling reads back — **never hand-edit it in a text editor.** |
| `png/` | **GENERATED.** The format every Markdown embed points at — it renders inline on GitHub, in VS Code preview, and through the Marp slide pipeline. |
| `pdf/` | **GENERATED.** Vector with selectable text, for printing or projecting a single diagram on its own. |

To change a diagram: re-author the `.svg` with the diagram tooling, then re-export **both** the PNG
and the PDF so all three stay in sync. Authoring rules are in `AGENTS.md` under *Diagram*.

## Embedding one

The relative path depends on who is embedding it:

```markdown
From demos/ or activities/     ![Alt text](../diagrams/png/git-three-areas.png)
From docs/Module-0X/           ![Alt text](../../diagrams/png/git-three-areas.png)
From slides/md/                ![Alt text](../../diagrams/png/git-three-areas.png)
```

Alt text is required and must describe the picture — it is the only description a student gets if the
image does not load, and CI checks that the path resolves.

> **Slides:** local images work only because the pipeline is set up for them — the container mounts
> the whole `courseware/` tree, `preprocess.mjs` rewrites relative image paths to absolute, and
> `marp-cli` runs with `--allow-local-files`. A diagram slide should carry the heading and the image
> and little else; the theme caps images at 470px and Marp **clips** anything taller.

## The diagrams

| Diagram | Shows | Embedded in |
|---------|-------|-------------|
| `course-map` | Eight modules across five days, with the CivicTrack thread | Module I overview · Deck 01 |
| `t-shaped-programmer` | Breadth across the top, depth in one area | Module I topic 1 · Deck 01 |
| `editor-ide-spectrum` | Text editor → code editor → VS Code → full IDE | Module III topic 3 · Demo 4 · Deck 03 |
| `sdlc-lifecycle` | The six SDLC phases as one continuous loop | Module IV topic 1 · Deck 04 |
| `waterfall-vs-agile` | One long pass against many short loops | Module IV topic 1 · Deck 04 |
| `git-three-areas` | Working directory → staging → repository | Module IV topic 2 · Demo 9 · Activity 8 · Deck 04 |
| `git-branch-merge` | A branch splitting off master and merging back | Module IV topic 3 · Demo 11 · Deck 04 |
| `git-merge-conflict` | What the conflict markers mean | Module IV topic 3 · Demo 12 · Deck 04 |
| `git-remote-pr-flow` | Commit → push → PR → review → merge → pull | Module IV topics 3 and 5 · Demo 13 · Activity 10 · Deck 04 |
| `four-pillars-computational-thinking` | Decomposition, patterns, abstraction, algorithms | Module V topic 1 · Activity 11 · Deck 05 |
| `flowchart-symbols` | Oval, rectangle, diamond, arrow | Module V topic 1 · Deck 05 |
| `flowchart-expense-approval` | A worked flowchart with two decision points | Module V topic 1 |
| `array-indexing` | Zero-based indexing and the off-by-one trap | Module V topic 2 · Demo 17 · Deck 05 |
| `stack-and-queue` | LIFO against FIFO | Module V topic 2 · Demo 18 · Activity 12 · Deck 05 |
| `loop-trace-table` | A worked trace table beside its loop | Module V topic 3 · Demo 19 · Deck 05 |
| `binary-search-halving` | Each check throwing away half the candidates | Module V topic 4 · Demo 20 · Activity 13 · Deck 05 |
| `data-journey` | Messy CSV → clean CSV → tables → JSON | Module VI overview · Demo 21 · Activity 15 · Deck 06 |
| `crud-sql-mapping` | CRUD mapped to SQL and to CivicTrack | Module VI topic 1 · Deck 06 |
| `civictrack-erd` | departments → categories → requests, with keys | Module VI topic 3 · Demo 23 · Activity 14 · Deck 06 |
| `api-request-response` | App → API → database, and back as JSON | Module VI topic 3 · Demo 26 · Deck 06 |
| `compiled-vs-interpreted` | javac and the JVM against a JavaScript engine | Module VII topic 1 · Demo 35 · Activity 19 · Deck 07 |
| `web-request-lifecycle` | Six steps of loading a page | Module VII topic 4 · Demo 34 · Activity 17 · Deck 07 |
| `bug-to-deploy-loop` | One bug traced through all eight modules | Module VIII topic 1 · Activity 20 · Deck 08 |

## What deliberately stays as text

Directory trees, file listings, terminal output and `git log --graph` output are **literal monospace
artifacts** — students must learn to read them in that form, so they stay in fenced code blocks. Turn
an ASCII block into a diagram only when it was an attempt to draw a *concept*, not a verbatim screen.

Growth curves (Big O) and step-count comparisons are **charts**, not diagrams, and are not built here.
