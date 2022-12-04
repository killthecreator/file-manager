import {createReadStream, createWriteStream} from 'fs';
import { createBrotliDecompress } from 'zlib';
import {readFile as read} from 'fs/promises';

export const decompressFile = async (filePath, destination) => {
    await read(filePath); /* Check for file existence/accessibility */
    const brotli = createBrotliDecompress();
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destination);
    readableStream.pipe(brotli).pipe(writableStream);
};