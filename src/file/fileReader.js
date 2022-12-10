import { createReadStream } from "fs";
import {stat} from "fs/promises";
import { resolve} from "path";

export const readFile = async (curDir, fileName) => {
  const filePath = resolve(curDir, fileName);
  /* Check that path leads to file, not to directory */
  if (!(await stat(resolve(filePath))).isFile()) throw Error();
  return new Promise((res) => {
    createReadStream(filePath, "utf8")
      .on("data", (chunck) => console.log(chunck))
      .on("end", () => res(''));
  });
};
