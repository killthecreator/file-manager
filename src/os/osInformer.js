import {homedir, EOL, cpus, userInfo, arch} from 'os';

export const getOSInfo = (parameter) => {
    switch (parameter) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            break;
        case '--cpus':
            console.log(cpus());
            break;
        case '--homedir':
            console.log(homedir());
            break;
        case '--username':
            console.log(userInfo().username);
            break;
        case '--architecture':
            console.log(arch());
            break;
        default:
            console.log(`Invalid Operation`);
    }
};