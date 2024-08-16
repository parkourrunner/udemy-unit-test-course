export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCallBack(
  arg: string,
  cb: LoggerServiceCallBack
) {
  if (!arg) {
    cb("Invalid argument!");
    return;
  }
  cb("called function with " + arg);

  return arg.toUpperCase();
}

export class OtherStringUtils {

  public callExternalService() {
    console.log("calling externals")
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
