import {unlink} from 'fs/promises';

export const deleteFile = async (filePath) => {
    await unlink(filePath);
};