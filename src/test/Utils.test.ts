import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  test("should return uppercase", () => {
    const result = toUpperCase("hello");
    expect(result).toBe("HELLO");
  });
});
