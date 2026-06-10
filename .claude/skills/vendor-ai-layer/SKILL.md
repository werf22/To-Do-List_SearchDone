---
name: vendor-ai-layer
description: Install or refresh the portable AI layer in the current repo when it is missing — works on the local machine (from the canonical bundle directory) and in cloud sandboxes (by cloning the canonical GitHub bundle repo). Use when a repo lacks .claude/rules/core-portable.md, on freshly created or freshly cloned repos, when the user says "nainstaluj AI layer", "vendor the bundle", "chýba tu systém", or types /vendor-ai-layer.
---

# vendor-ai-layer — make THIS repo carry the system

One job: ensure the repo I'm standing in carries the vendored AI layer, whatever machine or sandbox this is. Additive and idempotent — it never overwrites project files; it only syncs the layer's own files (`core-portable.md`, `learned-rules.md` snapshot).

## Procedure

### 1. Check
`.claude/rules/core-portable.md` present → already vendored. Say so in one line; refresh (steps 2–4) only if the user asked for a refresh. Missing → continue.

### 2. Locate the bundle source, in this order
1. **Local machine:** `/Users/jakub/Appky Claude/claude-code-system` — the canonical working copy.
2. **Anywhere else (cloud sandbox, other machine):** clone the canonical repo shallow:
   `git clone --depth 1 https://github.com/werf22/claude-code-system /tmp/ccs`
   (or `gh repo clone werf22/claude-code-system /tmp/ccs -- --depth 1` if `gh` is available). Use whatever git credentials the environment already has.

### 3. Install
Run `<bundle>/install-into-repo.sh "$PWD"` and show its summary. It vendors rules (incl. `core-portable.md` + learned-rules snapshot), the in-repo skills, the protect-paths hook wired via `$CLAUDE_PROJECT_DIR`, doc scaffolding (HANDOFF, TASKS, LESSONS, DONE, DOCUMENTATION, FILE_STRUCTURE), and appends the AI Layer import block to CLAUDE.md.

### 4. Commit + push
`chore(ai-layer): vendor portable AI layer` — autopilot, no question: the change is additive (standing learned rule: every repo must carry the layer). Clean up any `/tmp/ccs` clone.

### 5. If the bundle repo cannot be cloned (no credentials in this sandbox)
Say so explicitly — do NOT silently continue without the layer. Then:
- The **sync-ai-layer GitHub Action** (in `werf22/claude-code-system`) vendors every repo automatically on its next run (≤6 h, or instantly when the owner triggers "Run workflow" / pushes the bundle).
- Manual fallback for the owner, one paste: *"Clone werf22/claude-code-system and run its install-into-repo.sh on this repo, then commit and push."*

### 6. Confirm
One line: what was installed, what was synced, and that the repo is now cloud-ready.
