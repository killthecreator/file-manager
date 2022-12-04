import { createReadStream, createWriteStream } from 'fs';
import {join, basename} from 'path';
import {readFile as read} from 'fs/promises';

export const copyFile = async (filePath, newDir) => {
    await read(filePath); /* Check for file existence/accessibility */
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(join(newDir, basename(filePath)));
    readableStream.pipe(writableStream);
}; 

