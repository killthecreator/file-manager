import {readdir} from 'fs/promises';

export const readCurDir = async (curDir) => {
    const files = await readdir(curDir, {withFileTypes: true});
    return files.map(file => {
        return {name: file.name, type: file.isFile() ? 'file' : 'directory'};
    }).sort((a, b) => {
        if (a.type === b.type) {
            return a.name < b.name ? -1 : 1;
        } else {
            return a.type < b.type ? -1 : 1;
        }
    });
};