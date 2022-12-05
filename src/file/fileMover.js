import { copyFile } from "./fileCopier.js";
import { deleteFile } from "./fileDeleter.js";
import {join} from 'path';
import {readFile as read} from 'fs/promises';

export const moveFile = async (curDir, fileToMove, newDir) => {
    await read(join(curDir,fileToMove)); /* Check for file existence/accessibility */
    await copyFile(curDir, fileToMove, newDir);
    await deleteFile(curDir, fileToMove);
};