import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Real-Life Patch Notes: The Comedy Changelog
// One line: a software patch note for a bug in real life / human biology.
const ENTRY =
  "v4.0.2: fixed a bug where the brain cleared the reason for entering a room the moment the doorway was crossed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1–160 characters of non-whitespace text; fail loudly
// rather than writing an entry that could never be judged.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1–160`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
