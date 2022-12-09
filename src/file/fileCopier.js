import { createReadStream, createWriteStream } from 'fs';
import {join, basename} from 'path';
import {access} from 'fs/promises';

export const copyFile = async (curDir, filePath, newDir) => {
    try {
        await access(join(curDir,newDir, basename(filePath))); /* Check if file already exists */
        return Promise.reject('');
    } catch {
        await access(join(curDir,filePath)); /* Check for file existence/accessibility */
        const readableStream = createReadStream(join(curDir, filePath));
        const writableStream = createWriteStream(join(curDir, newDir, basename(filePath)));
        readableStream.pipe(writableStream);
    }

}; 

