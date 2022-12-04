import {readdir} from 'fs/promises';

export const readCurDir = async (curDir) => {
    const files = await readdir(curDir, {withFileTypes: true});
    return files.map(file => {
        return {Name: file.name, Type: file.isFile() ? 'file' : 'directory'};
    }).sort((a, b) => {
        if (a.Type === b.Type) {
            return a.Name < b.Name ? -1 : 1;
        } else {
            return a.Type < b.Type ? -1 : 1;
        }
    });
};