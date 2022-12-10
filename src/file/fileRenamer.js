import {rename, access, stat} from 'fs/promises';
import {dirname, resolve} from 'path';

export const renameFile = async (curDir, fileName, newFileName) => {
    try {
        /* Check that file doesn't already exist */
        await access(resolve(curDir, dirname(fileName), newFileName));
        return Promise.reject();
    } catch {
        /* Check that path leads to file, not to directory */
        if (!(await stat(resolve(curDir, fileName))).isFile()) throw Error();
        await rename(resolve(curDir, fileName), resolve(curDir, dirname(fileName), newFileName));
    }
};