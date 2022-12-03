import {createReadStream, createWriteStream} from 'fs';

import { createBrotliCompress } from 'zlib';

export const compressFile = async (filePath, destination) => {
    const brotli = createBrotliCompress();
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destination);
    readableStream.pipe(brotli).pipe(writableStream);
};