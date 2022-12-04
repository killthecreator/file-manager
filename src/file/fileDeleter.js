import {unlink} from 'fs/promises';
import {join} from 'path';

export const deleteFile = async (curDir, fileName) => {
    await unlink(join(curDir, fileName));
};