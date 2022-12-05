import { createReadStream, createWriteStream } from 'fs';
import {join, basename} from 'path';
import {readFile as read} from 'fs/promises';

export const copyFile = async (curDir, filePath, newDir) => {
    await read(join(curDir,filePath)); /* Check for file existence/accessibility */
    const readableStream =  createReadStream(join(curDir, filePath));
    const writableStream = createWriteStream(join(curDir, newDir, basename(filePath)));
    readableStream.pipe(writableStream);
}; 

