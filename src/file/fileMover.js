import { copyFile } from "./fileCopier.js";
import { deleteFile } from "./fileDeleter.js";

export const moveFile = async (curDir, fileToMove, newDir) => {
    await copyFile(fileToMove, newDir);
    await deleteFile(curDir, fileToMove);
};