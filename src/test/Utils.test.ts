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

  it.only("should return info for a valid string", () => {
    const actual = getStringInfo("Test");

    expect(actual.lowerCase).toBe("test");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(4);
    expect(actual.characters).toHaveLength(4);

    expect(actual.characters).toEqual(["T", "e", "s", "t"]);
    expect(actual.characters).toContain<string>("T");
    expect(actual.characters).toEqual(expect.arrayContaining(["T", "e"]));

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
    
  });
});
