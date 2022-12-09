import { copyFile } from "./fileCopier.js";
import { deleteFile } from "./fileDeleter.js";
import {join, basename} from 'path';
import {access} from 'fs/promises';

export const moveFile = async (curDir, fileToMove, newDir) => {
    try {
        await access(join(curDir,newDir, basename(fileToMove))); /* Check if file already exists */
        return Promise.reject('');
    } catch {
        await access(join(curDir,fileToMove)); /* Check for file existence/accessibility */
        await copyFile(curDir, fileToMove, newDir);
        await deleteFile(curDir, fileToMove);
    }

};