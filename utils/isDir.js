import { stat } from "fs/promises";
/* Checks if path exists and it is a directory */
export const isDir = async (path) => {
    try {
      const pathStats = await stat(path);
      return pathStats.isDirectory();
    } catch {
      return false;
    }
  };
