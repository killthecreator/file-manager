import {createReadStream} from 'fs';
import { join } from 'path';

export const readFile = async (curDir, fileName) => {
    return new Promise((res) => {
        const stream = createReadStream(join(curDir, fileName), 'utf8')
            .on('data', chunck => console.log(chunck))
            .on('end', () => res());
    });
};