#!/usr/bin/env bash
#
# protect-paths.sh — PreToolUse hook for Claude Code.
#
# WHAT: Blocks Write/Edit/MultiEdit tool calls that target protected paths.
# WHY:  CLAUDE.md text is a request the model can ignore; this hook is a rule
#       enforced at tool level. NEVER-tier guardrails live here.
# HOW TO TWEAK: you never edit this script to change what's protected —
#       you edit the pattern files listed below (one pattern per line):
#         ~/.claude/protected-paths.txt                      (global, all projects)
#         <project>/.claude/protected-paths.txt              (per-project)
#
# HOW IT WORKS:
#   1. Claude Code pipes a JSON payload describing the tool call into stdin.
#   2. We extract the target file path (.tool_input.file_path).
#   3. We compare it against every pattern in both pattern files.
#   4. Match  -> print reason to stderr, exit 2 (exit code 2 = BLOCK the tool
#      call; Claude sees the stderr message and must stop or ask you).
#   5. No match, or no file path in the payload -> exit 0 (allow).

# --- 1. Read the whole JSON payload from stdin -------------------------------
payload="$(cat)"

# --- 2. Extract .tool_input.file_path ----------------------------------------
# Prefer jq (fast, standard). Fall back to python3 if jq is not installed.
if command -v jq >/dev/null 2>&1; then
  file_path="$(printf '%s' "$payload" | jq -r '.tool_input.file_path // empty' 2>/dev/null)"
else
  file_path="$(printf '%s' "$payload" | python3 -c '
import json, sys
try:
    data = json.load(sys.stdin)
    print(data.get("tool_input", {}).get("file_path", "") or "")
except Exception:
    pass  # unparsable payload -> print nothing -> hook allows
' 2>/dev/null)"
fi

# No file path in this tool call (e.g. a different tool) -> nothing to check.
[ -z "$file_path" ] && exit 0

# --- 3. Collect pattern files (both are optional) ----------------------------
pattern_files=("$HOME/.claude/protected-paths.txt")
if [ -n "$CLAUDE_PROJECT_DIR" ]; then
  pattern_files+=("$CLAUDE_PROJECT_DIR/.claude/protected-paths.txt")
fi

# --- 4. Check the target path against every pattern --------------------------
for pf in "${pattern_files[@]}"; do
  [ -f "$pf" ] || continue                      # file missing -> skip quietly

  # Read line by line; "|| [ -n ... ]" also catches a last line without \n.
  while IFS= read -r line || [ -n "$line" ]; do
    pattern="${line%%#*}"                                      # strip # comments
    pattern="${pattern#"${pattern%%[![:space:]]*}"}"           # trim leading space
    pattern="${pattern%"${pattern##*[![:space:]]}"}"           # trim trailing space
    [ -z "$pattern" ] && continue                              # skip blank lines

    matched=0
    case "$pattern" in
      *\**|*\?*)
        # Pattern contains a glob char -> glob match via bash `case`.
        # We try the pattern as-is AND anchored after a "/" so that a
        # relative pattern like  migrations/*  also matches the absolute
        # path  /home/me/app/migrations/file.sql
        case "$file_path" in
          $pattern|*/$pattern) matched=1 ;;
        esac
        ;;
      *)
        # Plain text -> ANCHORED match, not substring: the path must equal the
        # pattern or end with "/<pattern>". So ".env" matches "/app/.env" but
        # NOT "/app/.env.example" — keeping .env.example editable is an
        # ALWAYS-tier duty (core §7). Multi-segment patterns work too:
        # "infra/prod/main.tf" matches "/repo/infra/prod/main.tf".
        # Want broader matching? Use a glob pattern (e.g. ".env*") instead.
        case "$file_path" in
          "$pattern"|*/"$pattern") matched=1 ;;
        esac
        ;;
    esac

    if [ "$matched" -eq 1 ]; then
      # stderr + exit 2 = block the tool call and feed this message to Claude.
      echo "BLOCKED: $file_path is protected (matched $pattern). This path requires explicit human action — see ~/.claude/hooks/README.md" >&2
      exit 2
    fi
  done < "$pf"
done

# --- 5. No pattern matched -> allow the tool call ----------------------------
exit 0
