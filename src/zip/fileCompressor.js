import {createReadStream, createWriteStream} from 'fs';
import {createBrotliCompress} from 'zlib';
import {access, stat} from 'fs/promises';
import {resolve, basename} from 'path';
import {createFile} from '../file/fileCreator.js';
import {deleteFile} from '../file/fileDeleter.js';


export const compressFile = async (curDir, filePath, dest) => {
    try {
        await access(resolve(curDir, dest, `${basename(filePath)}.br`)); /* Check if file already exists */
        return Promise.reject('');
    } catch {
        /* Check that directory is writable */
        await createFile(resolve(curDir, dest), 'test');
        await deleteFile(resolve(curDir, dest), 'test');
        /* Check that file to compress is actually file and destination is a direcrtory */
        if (!(await stat(resolve(curDir, filePath))).isFile() || !(await stat(resolve(curDir, dest))).isDirectory()) throw Error();
        const brotli = createBrotliCompress();
        const readableStream = createReadStream(resolve(curDir, filePath));
        const writableStream = createWriteStream(resolve(curDir, dest, `${basename(filePath)}.br`));
        readableStream.pipe(brotli).pipe(writableStream);
    }
};