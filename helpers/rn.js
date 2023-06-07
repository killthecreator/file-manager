import {rename} from 'fs/promises';


export const renameFile = async (path, newPath) => {
    await rename(path, newPath);
};