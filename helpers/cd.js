import {access} from 'fs/promises';
import {resolve} from 'path';

export const goToDir = async (curPath, newPath) => {
    await access(resolve(curPath, newPath));
    return resolve(curPath, newPath);


};