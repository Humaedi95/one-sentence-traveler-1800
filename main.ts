// One Sentence for a Traveler from 1800
//
// Writes a single sentence to /output/entry.txt. The sentence explains
// the modern internet to a person who has just stepped out of the year
// 1800, using only words and things they would already know: roads,
// letters, books, spoken words, friends, and the blink of an eye.
// No word in it was coined after their time.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Think of every road on earth joined into one, so a letter, a book, or a spoken word can reach any friend in the time it takes to blink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");

console.log(SENTENCE);
console.log(`Characters: ${SENTENCE.length}`);
