import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils test suite", () => {
    let stringUtils;
    beforeEach(() => {
      stringUtils = new StringUtils();
      console.log("Setup");
    });

    it("Should throw invalid arg error", () => {
      function expectError() {
        const actual = stringUtils.toUpperCase("");
      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid arg!!");
    });

    it("Should throw invalid arg error - with arrow function", () => {
      expect(() => {
        const actual = stringUtils.toUpperCase("");
      }).toThrowError("Invalid arg!!");
    });

    it("Should throw invalid arg error - with try catch", (done) => {
      try {
        stringUtils.toUpperCase("");
        done("GetStringInfo should throw error for Invalid arg!!")
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid arg!!");
        done();
      }
    });

    it.only("Should return correct uppercase", () => {
      const actual = stringUtils.toUpperCase("abc");

      expect(actual).toBe("ABC");
    });
  });

  it("should return uppercase of a string value", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "HELLO";

    // act
    const actual = sut("hello");

    // assert
    expect(actual).toBe(expected);
  });

  describe("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "test", expected: "TEST" },
      { input: "ali", expected: "ALI" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = getStringInfo(input);
      expect(actual.upperCase).toBe(expected);
    });
  });

  describe("getStringInfo for arg Test should", () => {
    test("return right length", () => {
      const actual = getStringInfo("Test");

      expect(actual.characters.length).toBe(4);
      expect(actual.characters).toHaveLength(4);
    });

    test("return right lower case", () => {
      const actual = getStringInfo("Test");
      expect(actual.lowerCase).toBe("test");
    });

    test("return right characters", () => {
      const actual = getStringInfo("Test");

      expect(actual.characters).toEqual(["T", "e", "s", "t"]);
      expect(actual.characters).toContain<string>("T");
      expect(actual.characters).toEqual(expect.arrayContaining(["T", "e"]));
    });

    test("return defined extraInfo", () => {
      const actual = getStringInfo("Test");

      expect(actual.extraInfo).toBeDefined();
    });

    test("return right extraInfo", () => {
      const actual = getStringInfo("Test");

      expect(actual.extraInfo).toEqual({});
    });
  });
});
