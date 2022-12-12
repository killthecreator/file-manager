import {resolve} from 'path';
import {stat} from 'fs/promises';

export const changePath = async (curDir, path) => {
    /* Check that path leads to directory, not to file */
    if (!(await stat(resolve(curDir, path))).isDirectory()) throw Error();
    return resolve(curDir, path);
};