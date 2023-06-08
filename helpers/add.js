import { open } from "fs/promises";
import { isValidFilename } from "../utils";
import { resolve } from "path";

export const createFile = async (curPath, filename) => {
  if (!isValidFilename(filename)) throw Error(); // Check if filename is valid
  const filePath = resolve(curPath, filename);
  const fileHandle = await open(filePath, "wx"); // Creates new empty file if it does not exist and fails if it does
  fileHandle.close();
};
