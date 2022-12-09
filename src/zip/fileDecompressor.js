import {createReadStream, createWriteStream} from 'fs';
import { createBrotliDecompress } from 'zlib';
import {access} from 'fs/promises';
import { join, basename } from 'path';

export const decompressFile = async (curDir, filePath, destination) => { 
    try {
        await access(join(curDir, destination, basename(filePath, '.br'))); /* Check if file already exists */
        return Promise.reject('');
    } catch {
        await access(join(curDir, filePath)); /* Check for file existence/accessibility */
        const brotli = createBrotliDecompress();
        const readableStream = createReadStream(join(curDir, filePath));
        const writableStream = createWriteStream(join(curDir, destination, basename(filePath, '.br')));
        readableStream.pipe(brotli).pipe(writableStream);
    }
};