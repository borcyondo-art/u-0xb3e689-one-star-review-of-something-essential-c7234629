// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Gravity has never once failed at its job, which is the problem: it never catches my phone, my keys, or my lunch, and it refuses to offer a refund.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
