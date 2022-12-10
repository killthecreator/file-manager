import {unlink, stat} from 'fs/promises';
import {resolve} from 'path';

export const deleteFile = async (curDir, filePath) => {
    /* Check that path leads to file, not to directory */
    if (!(await stat(resolve(curDir, filePath))).isFile()) throw Error();
    await unlink(resolve(curDir, filePath));
};