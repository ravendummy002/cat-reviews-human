// Cat Reviews Its Human — a one-star review from a house cat about its human.
// Writes the single review line to /output/entry.txt for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. He fills my bowl, then stands there watching me eat like a waiter waiting for a tip. I am not tipping. I live here.";

// The gate wants one line of 1-200 UTF-8 characters, not only whitespace.
if (review.length < 1 || review.length > 200 || !review.trim() || review.includes("\n")) {
  throw new Error(`review fails the gate: ${review.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
