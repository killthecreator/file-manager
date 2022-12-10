import { createReadStream, createWriteStream } from 'fs';
import {resolve, basename} from 'path';
import {access} from 'fs/promises';

export const copyFile = async (curDir, filePath, newDir) => {
    try {
        await access(resolve(curDir, newDir, basename(filePath))); /* Check if file already exists */
        return Promise.reject('');
    } catch {
        await access(resolve(curDir,filePath)); /* Check for file existence/accessibility */
        await access(resolve(curDir, newDir)); /* Check for new directory existence/accessibility */
        const readableStream = createReadStream(resolve(curDir, filePath));
        const writableStream = createWriteStream(resolve(curDir, newDir, basename(filePath)));
        readableStream.pipe(writableStream);
    }

}; 

