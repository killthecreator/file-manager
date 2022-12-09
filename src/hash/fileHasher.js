import {createHash} from 'crypto';
import {readFile} from 'fs/promises';
import { join } from 'path';

export const hashFile = async (curDir, fileName) => {
    const fileContent = await readFile(join(curDir, fileName));
    const hashSum = createHash('sha256');
    hashSum.update(fileContent);
    const hex = hashSum.digest('hex');
    return hex;
};