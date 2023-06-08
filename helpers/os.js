import { EOL, cpus, homedir, arch, userInfo } from "os";
export const getOSInfo = (arg) => {
  switch (arg) {
    case "--EOL":
      return JSON.stringify(EOL);
    case "--cpus":
      return {
        numberOfCores: cpus().length,
        cores: cpus().map(core => ({model: core.model, clockRate: `${core.speed / 1000}GHz`}))
      };
    case "--homedir":
      return homedir();
    case "--username":
      return userInfo().username;
    case "--architecture":
      return arch();
    default:
      throw Error();
  }
};
