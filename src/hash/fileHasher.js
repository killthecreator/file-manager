import {createHash} from 'crypto';
import {readFile} from 'fs/promises';
import { join } from 'path';

export const hashFile = async (curDir, fileName) => {
    let filePath;
    /* Check for absolute path */
    if (fileName.slice(0, fileName.lastIndexOf('\\')).startsWith(curDir) || 
    curDir.startsWith(fileName.slice(0, fileName.lastIndexOf('\\')))) {
        filePath = fileName;
    } else {
        /* Relative path */
        filePath = join(curDir, fileName);
    }
    const fileContent = await readFile(filePath);
    const hashSum = createHash('sha256');
    hashSum.update(fileContent);
    const hex = hashSum.digest('hex');
    return hex;
};