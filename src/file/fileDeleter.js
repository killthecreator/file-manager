import {unlink} from 'fs/promises';
import {join} from 'path';
import {readFile as read} from 'fs/promises';

export const deleteFile = async (curDir, filePath) => {
    await read(join(curDir,filePath)); /* Check for file existence/accessibility */
    await unlink(join(curDir, filePath));
};