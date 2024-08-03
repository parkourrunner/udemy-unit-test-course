import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe.only("StringUtils test suite", () => {
    let stringUtils;
    beforeEach(() => {
      stringUtils = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      // clear mocks
      console.log("TearDown");
    });

    it("Should return correct uppercase", () => {
      console.log("Actual test");
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
