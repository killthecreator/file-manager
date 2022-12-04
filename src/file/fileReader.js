import {createReadStream} from 'fs';
import { readFile as read } from 'fs/promises';
import { join } from 'path';

export const readFile = async (curDir, fileName) => {
    let filePath;
    /* Check for absolute path */
    if (fileName.slice(0, fileName.lastIndexOf('\\')).startsWith(curDir) || 
    curDir.startsWith(fileName.slice(0, fileName.lastIndexOf('\\')))) {
        filePath = fileName;
    } else {
        /* Relative path */
        filePath = join(curDir, fileName);
    }
    await read(filePath); /* Check for file existence/accessibility */
    return new Promise((res) => {
        createReadStream((filePath), 'utf8')
            .on('data', chunck => console.log(chunck))
            .on('end', () => res());
    });
};