import {access} from 'fs/promises';

export const accessPath = async (path) => access(path);