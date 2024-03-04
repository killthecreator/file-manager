import { rename } from "fs/promises";
import { isFile, isValidFilename } from "../utils";
import { dirname, extname, join } from "path";

export const renameFile = async (path, newFilename) => {
  if (!isValidFilename(newFilename)) throw Error(); // Check if filename is valid
  const renamedFilePath = join(dirname(path), `${newFilename}${extname(path)}`); 
  if (await isFile(renamedFilePath)) throw Error(); // Check if file does not exist and if file with new filename already exists
  await rename(path, renamedFilePath);
};
