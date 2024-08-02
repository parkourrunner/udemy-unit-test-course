import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of a string value", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "HELLO";

    // act
    const actual = sut("hello");

    // assert
    expect(actual).toBe(expected);
  });

  describe.only("ToUpperCase examples", () => {
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
