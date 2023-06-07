import {createBrotliDecompress} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';

export const decompressFile = (path, newPath) => {
    const readableStream = createReadStream(path);   
    const writableStream = createWriteStream(newPath);  
    readableStream.pipe(createBrotliDecompress()).pipe(writableStream);  
};
