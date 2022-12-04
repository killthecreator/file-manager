import {rename} from 'fs/promises';
import {join, dirname} from 'path';

export const renameFile = async (curDir, fileName, newFileName) => {
    await rename(join(curDir, fileName), join(curDir, dirname(fileName), newFileName));
};