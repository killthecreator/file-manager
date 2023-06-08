import { stat } from "fs/promises";
/* Checks if path exists and it is a file */
export const isFile = async (path) => {
  try {
    const pathStats = await stat(path);
    return pathStats.isFile();
  } catch {
    return false;
  }
};
