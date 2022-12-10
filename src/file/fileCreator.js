import {writeFile, access} from 'fs/promises';
import { resolve } from 'path';

export const createFile = async (curDir, fileName) => {
    try {
        await access(resolve(curDir, fileName));
        return Promise.reject();
    } catch {
        await writeFile(resolve(curDir, fileName), '');
    }
};