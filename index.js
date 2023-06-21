import { createInterface } from "readline";
import { resolve } from "path";
import { homedir } from "os";
import {
  getTableData,
  logFileContent,
  createFile,
  renameFile,
  getOSInfo,
  calcHash,
  compressFile,
  decompressFile,
  copyFile,
  deleteFile,
  moveFile,
  goToDir,
} from "./helpers";
import { inputHandler } from "./utils";

let curPath = homedir();

const userNameArg = process.argv[2];
const username =
  userNameArg && userNameArg.startsWith("--username=")
    ? userNameArg.replace("--username=", "")
    : "stranger";

const { stdin: input, stdout: output } = process;

const runManager = async () => {
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${curPath}`);

  const rl = createInterface({ input, output });

  rl.on("line", async (line) => {
    const [command, ...args] = inputHandler(line);
    try {
      switch (command) {
        case ".exit":
          rl.close();
          break;
        case "up":
          curPath = resolve(curPath, "..");
          break;
        case "cd":
          curPath = await goToDir(resolve(curPath, args[0]));
          break;
        case "ls":
          console.table(await getTableData(curPath));
          break;
        case "cat":
          await logFileContent(resolve(curPath, args[0]));
          break;
        case "add":
          await createFile(curPath, args[0]);
          break;
        case "rn":
          await renameFile(resolve(curPath, args[0]), args[1]);
          break;
        case "cp":
          await copyFile(resolve(curPath, args[0]), resolve(curPath, args[1]));
          break;
        case "mv":
          await moveFile(resolve(curPath, args[0]), resolve(curPath, args[1]));
          break;
        case "rm":
          await deleteFile(resolve(curPath, args[0]));
          break;
        case "os":
          console.log(getOSInfo(args[0]));
          break;
        case "hash":
          console.log(await calcHash(resolve(curPath, args[0])));
          break;
        case "compress":
          await compressFile(
            resolve(curPath, args[0]),
            resolve(curPath, args[1])
          );
          break;
        case "decompress":
          await decompressFile(
            resolve(curPath, args[0]),
            resolve(curPath, args[1])
          );
          break;
        default:
          console.log("Invalid input");
          break;
      }
    } catch {
      console.log("Operation failed");
    } finally {
      if (command !== ".exit") {
        console.log(`You are currently in ${curPath}`);
      }
    }
  });

  rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
};
runManager();
