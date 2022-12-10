import {resolve} from 'path';
import {access} from 'fs/promises';

export const changePath = async (curDir, path) => {
    await access(resolve(curDir, path));
    return resolve(curDir, path);
};