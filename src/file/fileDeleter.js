import {unlink, access} from 'fs/promises';
import {resolve} from 'path';

export const deleteFile = async (curDir, filePath) => {
    await access(resolve(curDir,filePath)); /* Check for file existence/accessibility */
    await unlink(resolve(curDir, filePath));
};