# Shared courseware standards

Reusable, cross-course agent instructions for the training program. This folder is a **plain directory
in each course repo**, holding the conventions that are common to every course.

## What's here

| File | Role |
|------|------|
| `AGENTS.base.md` | ⭐ The shared **[PATTERN]** conventions (how courses are structured, authoring templates, pipelines, working rules). |
| `utils/assemble.sh` / `utils/assemble.ps1` | Build a repo's `AGENTS.md` from `AGENTS.base.md` + the repo's `AGENTS.course.md`. |

## How instructions are wired (per course repo)

```
<repo>/AGENTS.course.md          ⭐ course-specific values (hand-edited)
<repo>/standards/AGENTS.base.md  ⭐ shared conventions (hand-edited)
        │
        └── standards/utils/assemble  ──►  <repo>/AGENTS.md   (GENERATED)
                                              ▲
                 CLAUDE.md  = `@AGENTS.md`  ──┘   (Claude Code imports it)
                 .github/copilot-instructions.md → points at AGENTS.md
                 Codex · Grok · Cursor · Gemini … read AGENTS.md natively
```

`AGENTS.md` is the single source of truth that every tool reads. It is **generated** — never hand-edit
it. Edit `AGENTS.course.md` (course specifics) or `AGENTS.base.md` (shared), then re-run the assembler:

```bash
./standards/utils/assemble.sh
```
```powershell
.\standards\utils\assemble.ps1
```

Commit the regenerated `AGENTS.md` so the tools that don't support file includes (Codex, Copilot, Grok)
see the full, current instructions.

## Sharing changes across courses

Each course repo carries its own copy of `standards/`, so every repo clones and builds standalone with no
extra setup. When you improve `AGENTS.base.md` in one course and want the others to benefit, copy the file
into each course repo, re-run the assembler there, and commit the regenerated `AGENTS.md`:

```bash
cp standards/AGENTS.base.md ../<other-course>/standards/AGENTS.base.md
cd ../<other-course> && ./standards/utils/assemble.sh
```

Keep `AGENTS.base.md` free of course-specific values (paths, module counts, filenames) so it stays
copyable as-is — anything specific to one course belongs in that repo's `AGENTS.course.md`.
