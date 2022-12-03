import {createHash} from 'crypto';
import {readFile} from 'fs/promises';

export const hashFile = async (filePath) => {
    const fileContent = await readFile(filePath);
    const hashSum = createHash('sha256');
    hashSum.update(fileContent);
    const hex = hashSum.digest('hex');
    return hex;
};