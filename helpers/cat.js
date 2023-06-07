import { readFile,} from "fs/promises";
import { createReadStream } from "fs";

export const logFileContent = async (path) => {
    const readableStream = createReadStream(path);
    readableStream.pipe(process.stdout);
    readableStream.on('end', () => process.stdout.write('\n'));
};
