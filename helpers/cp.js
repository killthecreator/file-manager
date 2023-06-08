import { copyFile as copy, constants } from "fs/promises";
import { basename, join } from "path";

export const copyFile = async (path, newPath) => {
  const copyFilePath = join(newPath, basename(path));
  await copy(path, copyFilePath, constants.COPYFILE_EXCL);
};
