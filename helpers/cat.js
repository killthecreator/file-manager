import { createReadStream } from "fs";
import { isFile } from "../utils";

export const logFileContent = async (path) => {
    if (!(await isFile(path))) throw Error(); // Checking if path exists and it is a file
    const readableStream = createReadStream(path);
    readableStream.pipe(process.stdout);
    readableStream.on('end', () => process.stdout.write('\n'));
};
