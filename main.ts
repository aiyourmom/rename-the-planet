import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Neptune is now 'The Slowest Commuter': one lap takes 165 years, winds hit 2,100 km/h, and it only finished its first orbit in 2011.";

// Gate: one line, 1-200 UTF-8 characters, not only whitespace, no control chars.
if (
  TEXT.length < 1 ||
  TEXT.length > 200 ||
  TEXT.trim().length === 0 ||
  /[\u0000-\u001f\u007f]/.test(TEXT)
) {
  throw new Error("entry fails the gate: must be one line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`saved ${TEXT.length} characters to entry.txt`);
