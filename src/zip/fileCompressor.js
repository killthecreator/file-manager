import {createReadStream, createWriteStream} from 'fs';
import { createBrotliCompress } from 'zlib';
import {readFile as read} from 'fs/promises';
import { join, basename, extname } from 'path';


export const compressFile = async (curDir, filePath, destination) => {
    await read(join(curDir, filePath)); /* Check for file existence/accessibility */
    const brotli = createBrotliCompress();
    const readableStream = createReadStream(join(curDir, filePath));
    const writableStream = createWriteStream(join(curDir, destination, `${basename(filePath)}.br`));
    readableStream.pipe(brotli).pipe(writableStream);
};