# Outline toolchain

Generates the course-outline **PDF** from its Markdown source.

```
outline/
├── md/    ⭐ SOURCE — HowModernProgrammersThink_Outline.md (hand-edited)
├── pdf/   GENERATED — the PDF the repo README links to (do not hand-edit)
└── utils/ this toolchain
```

## Pipeline

`md/*.md` → *(build.mjs: [marked](https://marked.js.org/) → HTML, then
[puppeteer-core](https://pptr.dev/) drives headless Chrome via the DevTools protocol)* → `pdf/*.pdf`

It's **file-driven**: every `*.md` in `md/` is converted to a same-named PDF in `pdf/`. Styling lives
in [`outline.css`](outline.css); page size and margins are set in `build.mjs` (`page.pdf()`). The
container reuses the same base image as the slide toolchain (`marpteam/marp-cli`), so it shares that
image's bundled Node.js and headless Chrome. Because `build.mjs` and `outline.css` are baked into the
image, a change to either needs an image rebuild (the default `convert` run does this).

## Regenerate

Requires a running container engine (`podman machine start` on Windows/macOS the first time).

```bash
./convert.sh              # macOS/Linux: build image (first run) + convert
./convert.sh --no-build   # re-convert only
```

```powershell
.\convert.ps1             # Windows (PowerShell 7+): build image (first run) + convert
.\convert.ps1 -NoBuild    # re-convert only
```

Docker instead of podman: set `CONTAINER_ENGINE=docker` (bash) or
`$env:CONTAINER_ENGINE = 'docker'` (PowerShell) before running.

## Files

| File | Role |
|------|------|
| `Containerfile` | Builds `hmpt-outline:latest` (marp-cli base + `marked` + `puppeteer-core` + fonts). |
| `entrypoint.sh` | Runs inside the container: for each `md/*.md`, calls `build.mjs` to produce the PDF. |
| `build.mjs` | Markdown → styled HTML (strips YAML front matter) → PDF via headless Chrome. |
| `outline.css` | Print styles for the PDF. |
| `convert.sh` / `convert.ps1` | Host wrappers (build image + run container). |
