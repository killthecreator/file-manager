const stringWithinQuotesMatcher = /"([^"]*)"/g;
const singleQuoteMatcher = /["]+/g;

export const inputHandler = (input) => {
  let command = "";
  let args = ["", ""];

  const argsWithQuotes = input.match(stringWithinQuotesMatcher);
  if (argsWithQuotes) {
    let arg0Start, arg1Start;
    [command, arg0Start, arg1Start] = input.split(" ");
    if (argsWithQuotes.length === 2) {
      args = argsWithQuotes.map((item) => item.replace(singleQuoteMatcher, ""));
    } else if (
      argsWithQuotes.length === 1 &&
      argsWithQuotes[0].startsWith(arg0Start)
    ) {
      args[0] = argsWithQuotes[0];
      args[1] = input.replace(`${command} ${args[0]} `, "");
      args[0] = args[0].replace(singleQuoteMatcher, "");
    } else if (
      argsWithQuotes.length === 1 &&
      argsWithQuotes[0].startsWith(arg1Start)
    ) {
      args[0] = arg0Start;
      args[1] = argsWithQuotes[0].replace(singleQuoteMatcher, "");
    }
  } else {
    [command, ...args] = input.split(" ");
  }
  return [command, ...args];
};
