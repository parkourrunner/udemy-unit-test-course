import {
  calculateComplexity,
  OtherStringUtils,
  toUpperCaseWithCallBack,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {

  describe("OtherStringUtils test with spies", () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    test("Use a spy to track calls", () => {
      const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");
      sut.toUpperCase("abc");
      expect(toUpperCaseSpy).toHaveBeenCalledWith("abc")
    });


    test("Use a spy to track calls to other module", () => {
      const consoleLogsSpy = jest.spyOn(console, "log");
      sut.logString("abc");
      expect(consoleLogsSpy).toHaveBeenCalledWith("abc")
    });
    


    test("Use a spy to replace implementation of a method", () => {
      jest.spyOn(sut, "callExternalService").mockImplementation(() => {
        console.log("calling mock external service")
      });
      sut.callExternalService()
    });
    
  })



  describe("Tracking callbacks with jest mocks", () => {

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
