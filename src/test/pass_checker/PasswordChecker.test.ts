import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual).toBe(false);
  });

  it("Password with more than 8 chars is ok", () => {
    const actual = sut.checkPassword("12345678Aa");
    expect(actual).toBe(true);
  });

  it("Password has no upper case char is invalid", () => {
    const actual = sut.checkPassword("12345abcd");
    expect(actual).toBe(false);
  });

  it("Password has upper case char is valid", () => {
    const actual = sut.checkPassword("12345abDD");
    expect(actual).toBe(true);
  });

  it("Password has no lower case char is invalid", () => {
    const actual = sut.checkPassword("12345ASDF");
    expect(actual).toBe(false);
  });

  it("Password has lower case char is valid", () => {
    const actual = sut.checkPassword("12345abDD");
    expect(actual).toBe(true);
  });
});
