# HANDOFF — <project-name>

<!-- THE single entry point for any new session, any AI, any surface (local/cloud/phone).
     THE TEST: if every other channel died right now, could a cold AI continue this project
     from this file alone? If not, this file is broken — fix it before doing anything else.
     UPDATE AFTER EVERY RUN: every completed step, failed attempt, decision, or pause —
     NOT just after finished tasks. A stale handoff is a broken project (documentation-protocol.md).
     Keep under ~120 lines: a handoff is a briefing, not an archive — history lives in DONE.md. -->

> **New AI taking over?** Read this file top to bottom, trust the repo CLAUDE.md (auto-loaded)
> for rules, then start executing **DO THIS NOW**. Everything else is reference.

## Snapshot

- **Project:** <one sentence — what it is, for whom, why it exists>
- **Lifecycle:** <phase id + name> · tasks <x/y done in this phase>
- **Last updated:** <YYYY-MM-DD HH:MM> · by <local|cloud> session · after <what just happened>
- **Branch / tree:** <branch> · <clean | uncommitted: what exactly>

## DO THIS NOW

1. <task id — the exact next action, with file paths; concrete enough to start in 60 seconds>
2. <the action after that, if already obvious>

<!-- Imperative, specific, zero ambiguity. "Continue T2-3: wire POST /api/orders to the DB
     insert in src/lib/orders.ts; the Zod schema is done, the handler returns mock data." -->

## State of the world

- **Works (verified):** <feature — and HOW it was verified (test/run), never "should work">
- **In progress:** <task id — exactly where it stopped, what remains, which files are touched>
- **Broken / blocked:** <symptom — suspected cause — where to look first>
- **Do NOT touch:** <fragile or forbidden areas + why (protected paths, revenue logic…)>

## Recently done (last 5 — older entries move to DONE.md)

- <date> · <task-id> · <what> — verified by <test/flow/log>

## Direction

- **This phase:** <goal — what "done" looks like>
- **Next phase:** <one line>
- **North star:** <the product outcome that everything serves>

## Open questions for the owner

- <decision needed — options + your recommendation; remove when answered>

## Map

- Tasks: `<TASKS.md>` · Lessons: `<LESSONS.md>` · Done-log: `<DONE.md>` · Codebase map: `<DOCUMENTATION.md>` · Tree: `<FILE_STRUCTURE.md>`
- Run: `<cmd>` · Test: `<cmd>` · Deploy: `<cmd>`
