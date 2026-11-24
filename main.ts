import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I said the meeting could have been an email, so the meeting replied-all with a 40-slide deck: 'Per My Last Email.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
