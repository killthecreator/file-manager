import {join} from 'path';
import {access } from 'fs/promises';

export const changePath = async (curDir, data) => {
    if (data.startsWith(curDir)) {
        await access(data);
        return data;
    }
    await access(join(curDir, data));
    return join(curDir, data);
};