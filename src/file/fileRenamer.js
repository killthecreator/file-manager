import {rename} from 'fs/promises';
import {join, dirname} from 'path';
import { access } from 'fs/promises';

export const renameFile = async (curDir, fileName, newFileName) => {
    try {
        await (access(join(curDir, dirname(fileName), newFileName)));
        return Promise.reject();
    } catch {
        await rename(join(curDir, fileName), join(curDir, dirname(fileName), newFileName));
    }
};