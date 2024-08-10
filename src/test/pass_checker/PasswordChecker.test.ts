import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 chars is ok", () => {
    const actual = sut.checkPassword("12345678");
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it("Password has no upper case char is invalid", () => {
    const actual = sut.checkPassword("abcd");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password has upper case char is valid", () => {
    const actual = sut.checkPassword("abDD");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password has no lower case char is invalid", () => {
    const actual = sut.checkPassword("1234ABCD");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Password has lower case char is valid", () => {
    const actual = sut.checkPassword("ABCDa");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Complex password is valid", () => {
    const actual = sut.checkPassword("12345ABCDa");
    expect(actual.reasons).toHaveLength(0);
    expect(actual.valid).toBe(true);
  });
  
  it("Admin password with no number is invalid", () => {
    const actual = sut.checkAdminPassword("adsASD");
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    expect(actual.valid).toBe(false);
  });
  
  it("Admin password with number is valid", () => {
    const actual = sut.checkAdminPassword("adsASD1234");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    expect(actual.valid).toBe(true);
  });
});
