import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your left knee actuator whines at 400Hz — I'm suppressing the alert per politeness protocol 7.3.";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `invalid length ${length}: must be ${MIN_LENGTH}-${MAX_LENGTH} characters`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("invalid text: only whitespace");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, ENTRY, { encoding: "utf8" });

  const readBack = readFileSync(OUT_FILE, { encoding: "utf8" });
  if (readBack !== ENTRY) {
    throw new Error(
      `read-back mismatch: wrote ${JSON.stringify(ENTRY)} but read ${JSON.stringify(readBack)}`,
    );
  }
  console.log(`wrote ${[...ENTRY].length} characters to ${OUT_FILE}`);
}

try {
  main();
} catch (err) {
  console.error(`entry validation/write failed: ${(err as Error).message}`);
  process.exit(1);
}
