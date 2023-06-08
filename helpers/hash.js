import { createHash } from "crypto";
import { readFile } from "fs/promises";

export const calcHash = async (path) => {
  const hash = createHash("sha256");
  const data = await readFile(path, "utf-8");
  return hash.update(data).digest("hex");
};
