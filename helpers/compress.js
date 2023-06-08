import { createBrotliCompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { isDir, isFile } from "../utils";
import { basename, join } from "path";

export const compressFile = async (path, newPath) => {
  await isFile(path); // Checking if path exists and it is a file
  await isDir(newPath); // Checking if destination path exists and it is a directory
  const compressedFilePath = join(newPath, `${basename(path)}.br`);
  if (await isFile(compressedFilePath)) throw Error(); // Checking if such file already exists in destination folder
  const readableStream = createReadStream(path);
  const writableStream = createWriteStream(compressedFilePath);
  readableStream.pipe(createBrotliCompress()).pipe(writableStream);
};
