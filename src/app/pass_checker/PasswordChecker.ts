export enum PasswordErrors {
  SHORT = "Password is too short",
  NO_UPPER_CASE = "Password needs to have upper case letter",
  NO_LOWER_CASE = "Password needs to have lower case letter",
  NO_NUMBER = "At least one number required!",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(pass: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    this.checkForLength(pass, reasons);
    this.checkForUpperCase(pass, reasons);
    this.checkForLowerCase(pass, reasons);

    return { valid: reasons.length > 0 ? false : true, reasons };
  }

  public checkAdminPassword(pass: string): CheckResult {
    const basicCheck = this.checkPassword(pass);
    this.checkForNumber(pass, basicCheck.reasons);
    return {
      valid: basicCheck.reasons.length > 0 ? false : true,
      reasons: basicCheck.reasons,
    };
  }

  private checkForNumber(pass: string, reasons: PasswordErrors[]) {
    const hasNumber = /\d/;
    if (!hasNumber.test(pass)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }

  private checkForLength(pass: string, reasons: PasswordErrors[]) {
    if (pass.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkForUpperCase(pass: string, reasons: PasswordErrors[]) {
    if (pass === pass.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
  }

  private checkForLowerCase(pass: string, reasons: PasswordErrors[]) {
    if (pass === pass.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
  }
}
