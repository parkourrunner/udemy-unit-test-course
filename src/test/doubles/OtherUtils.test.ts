import {
  calculateComplexity,
  toUpperCaseWithCallBack,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {


  describe.only("Tracking callbacks with jest mocks", () => {

    const callbackMock = jest.fn();
    afterEach(() => {
      jest.clearAllMocks()
    })

    it("ToUpperCase - calls callback with invalid arg - track calls", () => {
      const actual = toUpperCaseWithCallBack("", callbackMock);

      expect(actual).toBeUndefined;
      expect(callbackMock).toHaveBeenCalledWith("Invalid argument!");
      expect(callbackMock).toHaveBeenCalledTimes(1)
    });

    it("ToUpperCase - calls callback with valid arg- track calls", () => {
      const actual = toUpperCaseWithCallBack("abc", callbackMock);

      expect(actual).toBe("ABC");
      expect(callbackMock).toHaveBeenCalledWith("called function with abc");
      expect(callbackMock).toHaveBeenCalledTimes(1)
    });
  })




  describe("Tracking callbacks", () => {
    let cdArgs = [];
    let timesCalled = 0;

    function callbackMock(arg: string) {
      cdArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      cdArgs = [];
      timesCalled = 0;
    })

    it("ToUpperCase - calls callback with invalid arg - track calls", () => {
      const actual = toUpperCaseWithCallBack("", callbackMock);

      expect(actual).toBeUndefined;
      expect(cdArgs).toContain("Invalid argument!");
      expect(timesCalled).toBe(1);
    });

    it("ToUpperCase - calls callback with valid arg- track calls", () => {
      const actual = toUpperCaseWithCallBack("abc", callbackMock);

      expect(actual).toBe("ABC");
      expect(cdArgs).toContain("called function with abc");
      expect(timesCalled).toBe(1);
    });
  });

  it("ToUpperCase - calls callback with invalid arg", () => {
    const actual = toUpperCaseWithCallBack("", () => {});

    expect(actual).toBeUndefined;
  });
  it("ToUpperCase - calls callback with valid arg", () => {
    const actual = toUpperCaseWithCallBack("abc", () => {});

    expect(actual).toBe("ABC");
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
