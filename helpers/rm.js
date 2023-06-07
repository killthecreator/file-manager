import {unlink} from 'fs/promises';



export const deleteFile = async (path) => {
        await unlink(path);
};
