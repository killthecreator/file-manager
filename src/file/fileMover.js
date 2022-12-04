import { copyFile } from "./fileCopier.js";
import { deleteFile } from "./fileDeleter.js";

export const moveFile = async (curDir, fileToMove, newDir) => {
    await copyFile(curDir, fileToMove, newDir);
    await deleteFile(curDir, fileToMove);
};