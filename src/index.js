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
            logCurDir();
            break;
        /* LIST CURRENT DIRECTORY */
        case 'ls':
            readCurDir(curDir)
                .then(data => console.log(data))
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        /* CHANGE PATH */
        case 'cd':
            const newPath = data.slice(3);
            changePath(curDir, newPath)
                .then(data => curDir = data)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        
        /* FILES */
        /* READ FILE */
        case 'cat':
            const fileToRead = splitStr[1];
            readFile(curDir, fileToRead)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        /* CREATE FILE */
        case 'add':
            const fileToCreate = splitStr[1];
            createFile(curDir, fileToCreate)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        /* RENAME FILE */
        case 'rn':
            const [filePath, newFileName] = [splitStr[1], splitStr[2]];
            renameFile(curDir, filePath, newFileName)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
                break;
        /* COPY FILE */
        case 'cp':
            const [fileToCopy, newDirToCopy] = [splitStr[1], splitStr[2]];
            copyFile(fileToCopy, newDirToCopy)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        /* MOVE FILE */
        case 'mv':
            const [fileToMove, newDirToMove] = [splitStr[1], splitStr[2]];
            moveFile(curDir, fileToMove, newDirToMove)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        /* DELETE FILE */
        case 'rm': 
            const fileToDelete = splitStr[1];
            deleteFile(curDir, fileToDelete)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        
        /* OS */
        case 'os':
            const OSParameter = splitStr[1];
            getOSInfo(OSParameter);
            logCurDir();
            return;
        
        /*  HASH */
        case 'hash':
            const fileToHash = splitStr[1];
            hashFile(fileToHash)
                .then(data => console.log(data))
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        
        /* ZIP */
        /* COMPRESS FILE */
        case 'compress':
            const [fileToCompress, compressedDist] = [splitStr[1], splitStr[2]];
            compressFile(fileToCompress, compressedDist)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        /* DECOMPRESS FILE */
        case 'decompress':
            const [fileToDecompress, decompressedDist] = [splitStr[1], splitStr[2]];
            decompressFile(fileToDecompress, decompressedDist)
                .catch(() => console.log('Operation failed'))
                .finally(() => logCurDir());
            break;
        default:
            console.log(`Invalid Operation`);
    }
});






