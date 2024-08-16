import { calculateComplexity } from "../../app/doubles/OtherUtils"

describe("OtherUtils test suite", () => {
  
  it("calculate complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "info1",
        field2: "info2",
      }
    }

    const actual = calculateComplexity(someInfo as any);

    expect(actual).toBe(10);
  })
})