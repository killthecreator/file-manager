import {createReadStream} from 'fs';
import { readFile as read } from 'fs/promises';
import { join } from 'path';

export const readFile = async (curDir, fileName) => {
    await read(join(curDir, fileName)); /* Check for file existence/accessibility */
    return new Promise((res) => {
        const stream =  createReadStream(join(curDir, fileName), 'utf8')
            .on('data', chunck => console.log(chunck))
            .on('end', () => res());
    });
};