import {unlink} from 'fs/promises';
import {join} from 'path';

export const deleteFile = async (curDir, fileName) => {
    let filePath;
    /* Check for absolute path */
    if (fileName.slice(0, fileName.lastIndexOf('\\')).startsWith(curDir) || 
    curDir.startsWith(fileName.slice(0, fileName.lastIndexOf('\\')))) {
        filePath = fileName;
    } else {
        /* Relative path */
        filePath = join(curDir, fileName);
    }
    await unlink(filePath);
};