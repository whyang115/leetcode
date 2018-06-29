import roman2Int from "../solve1";

describe("roman to interger", () => {
  test("III equal to 3", () => {
    expect(roman2Int("III")).toBe(3);
  });
  test("IV equal to 4", () => {
    expect(roman2Int("IV")).toBe(4);
  });
  test("IX equal to 9", () => {
    expect(roman2Int("IX")).toBe(9);
  });
  test("LVIII equal to 58", () => {
    expect(roman2Int("LVIII")).toBe(58);
  });
  test("MCMXCIV equal to 1994", () => {
    expect(roman2Int("MCMXCIV")).toBe(1994);
  });
});
