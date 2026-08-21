# Slide Toolchain

Containerized pipeline that turns the Markdown slide decks in [`../md`](../md)
into PowerPoint and PDF, using **Marp**. Everything runs inside a small Linux
container, so the exact same toolchain works on macOS, Windows, and Linux with no
local installs beyond a container engine.

```
md/*.md  ──preprocess.mjs──►  Marp Markdown  ──marp-cli──►  pptx/*.pptx
                                             ──marp-cli──►  pdf/*.pdf
                                             ──pdfunite──►  pdf/How-Modern-Programmers-Think-All-Slides.pdf
```

Both the `.pptx` and the `.pdf` come from Marp directly (the PDF via the headless
Chrome bundled in the base image). `pdfunite` only merges the per-module PDFs
into the combined deck.

## Prerequisites

- [podman](https://podman.io/) (default) **or** Docker.
  - On Windows/macOS, start the machine once: `podman machine init` then
    `podman machine start` (only needed the first time).
- Nothing else — Node.js, marp-cli, and headless Chrome all live inside the image.

## Usage

From this `utils/` folder:

**macOS / Linux**

```bash
./convert.sh              # build the image (first run) + convert all decks
./convert.sh --no-build   # skip the build, just re-convert
```

**Windows (PowerShell 7+)**

```powershell
.\convert.ps1             # build the image (first run) + convert all decks
.\convert.ps1 -NoBuild    # skip the build, just re-convert
```

**Use Docker instead of podman**

```bash
CONTAINER_ENGINE=docker ./convert.sh
```
```powershell
$env:CONTAINER_ENGINE = 'docker'; .\convert.ps1
```

Outputs land in [`../pptx`](../pptx) and [`../pdf`](../pdf). The merged deck is
`../pdf/How-Modern-Programmers-Think-All-Slides.pdf`.

> **Marp clips overflowing content — it does not shrink to fit.** A slide whose
> content runs past the bottom edge is silently truncated in the PDF/PPTX. Always
> re-render and eyeball the PDFs after editing a deck, and split any slide that
> overflows into two `##` slides.

## Files

| File | Role |
|------|------|
| `Containerfile` | Builds `hmpt-slides:latest` (`marpteam/marp-cli` base + poppler-utils + fonts). |
| `entrypoint.sh` | Runs **inside** the container: preprocess → Marp → merge. |
| `preprocess.mjs` | Turns an authored deck into Marp-ready Markdown (adds the scaffolding). |
| `courseware.css` | The Marp theme (`@theme courseware`) applied via `--theme-set`. |
| `convert.sh` | Host wrapper for macOS/Linux: builds the image and runs the container. |
| `convert.ps1` | Host wrapper for Windows. |
| `.gitattributes` | Forces LF endings so the scripts run under Linux. |

`entrypoint.sh`, `preprocess.mjs`, and `courseware.css` are baked into the image
(the first two are `COPY`d in), so a change to `entrypoint.sh` or `preprocess.mjs`
needs an image rebuild — run `convert` **without** `--no-build`/`-NoBuild`. The
theme is read from the mounted volume at run time, so `courseware.css` edits take
effect without a rebuild.

### Environment variables

All optional, read by `entrypoint.sh`:

| Var | Default | Purpose |
|-----|---------|---------|
| `SLIDES_DIR` | `/work` | Root slides dir mounted into the container. |
| `THEME` | `$SLIDES_DIR/utils/courseware.css` | Path to the Marp theme CSS. |
| `COMBINED_NAME` | `How-Modern-Programmers-Think-All-Slides.pdf` | Filename for the merged deck. |

## Adding or editing a module

1. Add/edit an `NN-Module-Name-Slides.md` in [`../md`](../md).
2. Re-run `./convert.sh` (or `.\convert.ps1`).

The pipeline is file-driven: every `*.md` in `md/` is converted, and the PDFs
are merged in filename (module-number) order, so no script edits are needed.

### Slide Markdown conventions

Decks are authored in a **tool-agnostic convention** — you never hand-write Marp
scaffolding. `preprocess.mjs` adds it. See `AGENTS.md` ("Slide deck") for the
authoritative rules:

- A YAML block at the top (`title`, `subtitle`, `author`) becomes the title slide.
- `#` headings are **section divider** slides (title only).
- `##` headings start a **content** slide; bullets/code/tables under it are the body.
- No `---` rules and no images — headings drive the slide breaks.

`preprocess.mjs` reads that front matter and emits the `marp: true` /
`theme: courseware` / `paginate: true` / `footer` directives, a title slide, a
`---` break before every `#`/`##`, and the `<!-- _class: -->` tags (`title` for the
title slide, `section` for `#` dividers). It is fence-aware: `#` lines inside
` ``` ` code fences are left alone.

## Theming

Styling lives in [`courseware.css`](courseware.css), a Marp theme
(`/* @theme courseware */`) passed to `marp-cli` via `--theme-set`. Edit that file
to change the look — no rebuild needed, since it's read from the mounted volume.

Fence code by language so the theme styles it: shell/terminal fences (`bash`,
`sh`, `shell`, `console`, `powershell`, `ps1`) render as **dark** bordered
monospace boxes; all other fences (`js`, `java`, `sql`, `text`, pseudocode) render
as **light** bordered boxes. Ligatures are disabled so operators show literally
(`=>`, `===`, `!==`).

The footer on every content slide is the course name, set by `COURSE` in
`preprocess.mjs`.

## Troubleshooting

- **`podman` not found / machine not running** — run `podman machine start`.
- **Permission denied on the volume (SELinux Linux hosts)** — add `:Z` to the
  volume mount in `convert.sh` (`-v "$SLIDES_DIR":/work:Z`).
- **Slide content is cut off at the bottom** — Marp clipped it. Split the slide
  into two `##` slides; Marp will not scale it down for you.
- **Edited `preprocess.mjs`/`entrypoint.sh` but nothing changed** — they're baked
  into the image; re-run without `--no-build`/`-NoBuild`.
- **`ERROR: theme not found`** — `courseware.css` is missing from `utils/`, or
  `THEME` points somewhere wrong.
- **Fonts look off in the PDF** — add more font packages to the `Containerfile`
  (e.g. `fonts-noto`) and rebuild.
