import {writeFile} from 'fs/promises';
import { join } from 'path';

export const createFile = async (curDir, fileName) => {
    await writeFile(join(curDir, fileName), '');
};