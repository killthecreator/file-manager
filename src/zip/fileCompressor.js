import {createReadStream, createWriteStream} from 'fs';
import { createBrotliCompress } from 'zlib';
import {readFile as read} from 'fs/promises';

export const compressFile = async (filePath, destination) => {
    await read(filePath); /* Check for file existence/accessibility */
    const brotli = createBrotliCompress();
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destination);
    readableStream.pipe(brotli).pipe(writableStream);
};