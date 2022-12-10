import {rename, access} from 'fs/promises';
import {dirname, resolve} from 'path';

export const renameFile = async (curDir, fileName, newFileName) => {
    try {
        await access(resolve(curDir, dirname(fileName), newFileName));
        return Promise.reject();
    } catch {
        await rename(resolve(curDir, fileName), resolve(curDir, dirname(fileName), newFileName));
    }
};