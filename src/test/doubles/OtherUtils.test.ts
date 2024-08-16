import {
  calculateComplexity,
  toUpperCaseWithCallBack,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  it("ToUpperCase - calls callback with invalid arg", () => {
    const actual = toUpperCaseWithCallBack("", () => {});

    expect(actual).toBeUndefined
  });
  it("ToUpperCase - calls callback with valid arg", () => {
    const actual = toUpperCaseWithCallBack("abc", () => {});

    expect(actual).toBe("ABC")
  });

  it("calculate complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "info1",
        field2: "info2",
      },
    };

    const actual = calculateComplexity(someInfo as any);

    expect(actual).toBe(10);
  });
});
