import { isDir } from "../utils";

export const goToDir = async (path) => {
  if (!(await isDir(path))) throw Error();   // Checking if path exists and it is a directory 
  return path;
};
