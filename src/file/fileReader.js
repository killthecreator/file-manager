import { createReadStream } from "fs";
import { readFile as read } from "fs/promises";
import { join, sep} from "path";

export const readFile = async (curDir, fileName) => {
  const filePath = join(curDir, ...fileName.split(sep));
  await read(filePath); /* Check for file existence/accessibility */
  return new Promise((res) => {
    createReadStream(filePath, "utf8")
      .on("data", (chunck) => console.log(chunck))
      .on("end", () => res(''));
  });
};
