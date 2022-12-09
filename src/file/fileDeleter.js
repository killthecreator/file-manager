import {unlink, access} from 'fs/promises';
import {join} from 'path';

export const deleteFile = async (curDir, filePath) => {
    await access(join(curDir,filePath)); /* Check for file existence/accessibility */
    await unlink(join(curDir, filePath));
};