import {rename, access} from 'fs/promises';
import {join, dirname} from 'path';

export const renameFile = async (curDir, fileName, newFileName) => {
    try {
        await access(join(curDir, dirname(fileName), newFileName));
        return Promise.reject();
    } catch {
        await rename(join(curDir, fileName), join(curDir, dirname(fileName), newFileName));
    }
};