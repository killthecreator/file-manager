import { EOL, cpus, homedir, arch, userInfo } from "os";
export const getOSInfo = (arg) => {
  switch (arg) {
    case "--EOL":
      return EOL;
    case "--cpus":
      return cpus();
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
