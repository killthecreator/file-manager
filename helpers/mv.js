import { deleteFile } from "./rm";
import { copyFile } from "./cp";

export const moveFile = async (path, newPath) => {
    await copyFile(path, newPath);
    await deleteFile(path);
};