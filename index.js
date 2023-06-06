//npm run start -- --username=your_username
import { createInterface } from "readline";
import { resolve } from "path";

import { homedir } from "os";
import { getTableData, logFileContent, createFile } from "./utils";

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
    const [command, ...args] = line.split(" ");

    try {
      switch (command) {
        case ".exit":
          rl.close();
          break;
        case "up":
          curPath = resolve(curPath, "..");
          break;
        case "cd":
          curPath = resolve(curPath, args[0]);
          break;
        case "ls":
          console.table(await getTableData(curPath));
          break;
        case "cat":
          logFileContent(resolve(curPath, args[0]));
          break;
        case 'add':
            createFile(resolve(curPath, args[0]));
            break;
        default:
          console.log("Invalid input");
          break;
      }
    } catch {
      console.log("Operation failed");
    } finally {
        if (command !== '.exit') {
            console.log(`You are currently in ${curPath}`);
        }
     
    }
  });

  rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
};
runManager();
