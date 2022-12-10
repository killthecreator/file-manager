import {createReadStream, createWriteStream} from 'fs';
import {createBrotliDecompress} from 'zlib';
import {access} from 'fs/promises';
import {resolve, basename} from 'path';

export const decompressFile = async (curDir, filePath, dest) => { 
    try {
        await access(resolve(curDir, dest, basename(filePath, '.br'))); /* Check if file already exists */
        return Promise.reject('');
    } catch {
        await access(resolve(curDir, filePath)); /* Check for file existence/accessibility */
        await access(resolve(curDir, dest)); /* Check for dest directory existence/accessibility */
        const brotli = createBrotliDecompress();
        const readableStream = createReadStream(resolve(curDir, filePath));
        const writableStream = createWriteStream(resolve(curDir, dest, basename(filePath, '.br')));
        readableStream.pipe(brotli).pipe(writableStream);
    }
};