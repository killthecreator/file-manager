import {open} from 'fs/promises';

export const createFile = async (path) => {
    await open(path, 'wx');
};