import {createReadStream, createWriteStream} from 'fs';

import { createBrotliDecompress } from 'zlib';

export const decompressFile = async (filePath, destination) => {
    const brotli = createBrotliDecompress();
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destination);
    readableStream.pipe(brotli).pipe(writableStream);
};