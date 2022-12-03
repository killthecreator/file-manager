import { createReadStream, createWriteStream } from 'fs';
import {join, basename} from 'path';

export const copyFile = async (filePath, newDir) => {
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(join(newDir, basename(filePath)));
    readableStream.pipe(writableStream);
}; 

