import {rename} from 'fs/promises';
import {join, dirname} from 'path';

export const renameFile = async (curDir, fileName, newFileName) => {
    let filePath;
    /* Check for absolute path */
    if (fileName.slice(0, fileName.lastIndexOf('\\')).startsWith(curDir) || 
    curDir.startsWith(fileName.slice(0, fileName.lastIndexOf('\\')))) {
        filePath = fileName;
    } else {
        /* Relative path */
        filePath = join(curDir, fileName);
    }
    await rename(filePath, join(dirname(filePath), newFileName));
};