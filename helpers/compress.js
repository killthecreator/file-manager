import {createBrotliCompress} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';

export const compressFile = (path, newPath) => {
    const readableStream = createReadStream(path);   
    const writableStream = createWriteStream(newPath);  
    readableStream.pipe(createBrotliCompress()).pipe(writableStream);  
};
