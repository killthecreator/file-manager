import {createHash} from 'crypto';
import {readFile} from 'fs/promises';
import {resolve} from 'path';

export const hashFile = async (curDir, fileName) => {
    const fileContent = await readFile(resolve(curDir, fileName));
    const hashSum = createHash('sha256');
    hashSum.update(fileContent);
    const hex = hashSum.digest('hex');
    return hex;
};