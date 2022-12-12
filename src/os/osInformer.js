import {homedir, EOL, cpus, userInfo, arch} from 'os';

export const getOSInfo = (parameter) => {
    switch (parameter) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            break;
        case '--cpus':
            const cpusInfo = cpus();
            console.table(cpusInfo.map(item => {
                const itemSplit = item.model.split(' @ ');
                return {'Model': itemSplit[0], 'Clock rate': itemSplit[1]};
            }));
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
            console.log(`Invalid input`);
    }
};