import { readdir, stat } from "fs/promises";
import { resolve } from "path";

export const getTableData = async (curPath) => {
  const files = await readdir(curPath);
  const filesData = (
    await Promise.all(
      files.map(async (Name) => {
        const stats = await stat(resolve(curPath, Name));
        let Type;
        if (stats.isFile()) Type = "file";
        else if (stats.isDirectory()) Type = "directory";
        else Type = "unknown";
        return {
          Name,
          Type,
        };
      })
    )
  ).sort((a, b) => {
    if (a.Type === b.Type) {
      return a.Name < b.Name ? -1 : 1;
    } else {
      return a.Type < b.Type ? -1 : 1;
    }
  });

  return filesData;
};
