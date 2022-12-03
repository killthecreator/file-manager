import {rename} from 'fs/promises';
import {join, dirname} from 'path';

export const renameFile = async (filePath, newFileName) => {
    await rename(filePath, join(dirname(filePath), newFileName));
};