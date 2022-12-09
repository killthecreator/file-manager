import {writeFile, access} from 'fs/promises';
import { join } from 'path';

export const createFile = async (curDir, fileName) => {
    try {
        await access(join(curDir, fileName));
        return Promise.reject();
    } catch {
        await writeFile(join(curDir, fileName), '');
    }
};