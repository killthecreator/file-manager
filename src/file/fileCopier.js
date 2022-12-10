import { createReadStream, createWriteStream } from 'fs';
import {resolve, basename} from 'path';
import {access, stat} from 'fs/promises';

export const copyFile = async (curDir, filePath, newDir) => {
    try {
        /* Check that file doesn't already exist */
        await access(resolve(curDir, newDir, basename(filePath)));
        return Promise.reject('');
    } catch {
         /* Check that file to copy is actually file and destination is a direcrtory */
        if (!(await stat(resolve(curDir, filePath))).isFile() || !(await stat(resolve(curDir, newDir))).isDirectory()) throw Error();
        const readableStream = createReadStream(resolve(curDir, filePath));
        const writableStream = createWriteStream(resolve(curDir, newDir, basename(filePath)));
        readableStream.pipe(writableStream);
    }

}; 

