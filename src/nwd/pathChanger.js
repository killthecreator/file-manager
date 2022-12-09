import {join, sep} from 'path';
import {access} from 'fs/promises';

export const changePath = async (curDir, path) => {
    if (path.includes(`:${sep}`)) {
        await access(path);
        return path;
    }
    await access(join(curDir, path));
    return join(curDir, path);
};