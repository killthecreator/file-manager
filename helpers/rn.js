import { rename } from "fs/promises";
import { isFile, isValidFilename } from "../utils";
import { dirname, extname, join } from "path";

export const renameFile = async (path, newFilename) => {
  if (!isValidFilename(newFilename)) throw Error(); // Check if filename is valid
  const renamedFilePath = join(dirname(path), `${newFilename}${extname(path)}`); // Check if file does not exist and if file with new filename already exists
  if (await isFile(renamedFilePath)) throw Error();
  await rename(path, renamedFilePath);
};
