import { copyFile as copy } from "fs/promises";

export const copyFile = async (path, newPath) => {
  try {
    await copy(path, newPath);
  } catch (e) {
    throw Error();
  }
};
