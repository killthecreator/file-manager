// npm run start -- --username=Gleb
import {stdin, stdout} from 'process';
import {homedir} from 'os';
import {createInterface} from 'readline';
import {join} from 'path';

import {changePath} from './nwd/pathChanger.js';
import {readCurDir} from './nwd/dirReader.js';

/* FILE */
import {readFile} from './file/fileReader.js';
import {createFile} from './file/fileCreator.js';
import {renameFile} from './file/fileRenamer.js';
import {copyFile} from './file/fileCopier.js';
import {moveFile} from './file/fileMover.js';
import {deleteFile} from './file/fileDeleter.js';

/* OS */
import { getOSInfo } from './os/osInformer.js';

/* HASH */
import { hashFile } from './hash/fileHasher.js';

/* ZIP */
import {compressFile} from './zip/fileCompressor.js';
import { decompressFile } from './zip/fileDecompressor.js';

/* LOGIN */
if (!process.argv[2] || !process.argv[2].startsWith('--username=')) {
    stdout.write('You should enter your name!');
    process.exit();
}
const userName = process.argv[2].replace('--username=', '');
let curDir = homedir();
/*  */

/* CUR DIR */
const logCurDir = () => console.log(`You are currently in ${curDir}`);

const rl = createInterface({
    input: stdin,
    output: stdout
});

/* WELCOME */
rl.write(`Welcome to the File Manager, ${userName}!\n`);
logCurDir();

/* CLOSE CONDITIONS */
rl.on('close', () => {
    rl.write(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
});
/* INPUTS */
rl.on('line', data => {
    const splitStr = data.split(' ');

    switch(splitStr[0]) {
        /* EXIT */
        case '.exit':
            rl.close();
            break;
        
        /* NWD */
        /* GO UP */
        case 'up': 
            curDir = join(curDir, '..');
            break;
        /* LIST CURRENT DIRECTORY */
        case 'ls':
            readCurDir(curDir)
                .then(data => console.table(data))
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        /* CHANGE PATH */
        case 'cd':
            const newPath = data.slice(3).replace(/["]+/g, '');
            changePath(curDir, newPath)
                .then(data => curDir = data)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            return;
        
        /* FILES */
        /* READ FILE */
        case 'cat':
            if (!splitStr[1]) {
                console.log('Invalid input');
            } else {
                const fileToRead = data.slice(4).replace(/["]+/g, '');
                readFile(curDir, fileToRead).catch(() => console.log('Operation failed'));
            }
            break;
        /* CREATE FILE */
        case 'add':
            if (!splitStr[1]) {
                console.log('Invalid input');
            } else {
                const fileToCreate = data.slice(4).replace(/["]+/g, '');
                createFile(curDir, fileToCreate).catch(() => console.log('Operation failed'));
            }
            break;
        /* RENAME FILE */
        case 'rn':
            const filesRenameStr = data.slice(3);
            let filesRenameArr;
            if (filesRenameStr.includes('" "')) filesRenameArr = filesRenameStr.split('" "');
            else filesRenameArr = filesRenameStr.split(' ');
            if (filesRenameArr.length !== 2) {
                console.log('Invalid input');
            } else {
                const [filePath, newFileName] = [filesRenameArr[0], filesRenameArr[1]].map(item => item.replace(/["]+/g, ''));
                renameFile(curDir, filePath, newFileName).catch(() => console.log('Operation failed'));
            }
            break;
        /* COPY FILE */
        case 'cp':
            const filesCopyStr = data.slice(3);
            let filesCopyArr;
            if (filesCopyStr.includes('" "')) filesCopyArr = filesCopyStr.split('" "');
            else filesCopyArr = filesCopyStr.split(' ');
            if (filesCopyArr.length !== 2) {
                console.log('Invalid input');
            } else {
                const [fileToCopy, newDirToCopy] = [filesCopyArr[0], filesCopyArr[1]].map(item => item.replace(/["]+/g, ''));
                copyFile(curDir, fileToCopy, newDirToCopy).catch(() => console.log('Operation failed'));
            }
            break;
        /* MOVE FILE */
        case 'mv':
            const filesMoveStr = data.slice(3);
            let filesMoveArr;
            if (filesMoveStr.includes('" "')) filesMoveArr = filesMoveStr.split('" "');
            else filesMoveArr = filesMoveStr.split(' ');
            if (filesMoveArr.length !== 2) {
                console.log('Invalid input');
            } else {
                const [fileToMove, newDirToMove] = [filesMoveArr[0], filesMoveArr[1]].map(item => item.replace(/["]+/g, ''));
                moveFile(curDir, fileToMove, newDirToMove).catch(() => console.log('Operation failed'));
            }
            break;
        /* DELETE FILE */
        case 'rm': 
            if (!splitStr[1]) {
                console.log('Invalid input');
            } else {
                const fileToDelete = data.slice(3).replace(/["]+/g, '');
                deleteFile(curDir, fileToDelete).catch(() => console.log('Operation failed'));
            }
            break;
        
        /* OS */
        case 'os':
            if (!splitStr[1]) {
                console.log('Invalid input');
            } else {
                const OSParameter = splitStr[1];
                getOSInfo(OSParameter);
            }
            break;
        
        /*  HASH */
        case 'hash':
            if (!splitStr[1]) {
                console.log('Invalid input');
            } else {
                const fileToHash = splitStr[1];
                hashFile(fileToHash)
                    .then(data => console.log(data))
                    .catch(() => console.log('Operation failed'));
            }
            break;
        
        /* ZIP */
        /* COMPRESS FILE */
        case 'compress':
            const filesCompressStr = data.slice(9);
            let filesCompressArr;
            if (filesCompressStr.includes('" "')) filesCompressArr = filesCompressStr.split('" "');
            else filesCompressArr = filesCompressStr.split(' ');
            if (filesCompressArr.length !== 2) {
                console.log('Invalid input');
            } else {
                const [fileToCompress, compressedDist] = [filesCompressArr[0], filesCompressArr[1]].map(item => item.replace(/["]+/g, ''));
                compressFile(curDir, fileToCompress, compressedDist).catch(() => console.log('Operation failed'));
            }
            break;
        /* DECOMPRESS FILE */
        case 'decompress':
            const filesDecompressStr = data.slice(11);
            let filesDecompressArr;
            if (filesDecompressStr.includes('" "')) filesDecompressArr = filesDecompressStr.split('" "');
            else filesDecompressArr = filesDecompressStr.split(' ');
            if (filesDecompressArr.length !== 2) {
                console.log('Invalid input');
            } else {
                const [fileToDecompress, decompressedDist] = [filesDecompressArr[0], filesDecompressArr[1]].map(item => item.replace(/["]+/g, ''));
                decompressFile(curDir, fileToDecompress, decompressedDist).catch(() => console.log('Operation failed'));
            }
            break;
        default:
            console.log(`Invalid Operation`);
    }
    logCurDir();
});






