import solve1 from "../solve1";
import solve2 from "../solve2";
describe("9.palindrome number", () => {
  describe("number convert to string to judge palindrome", () => {
    test("0 is a palindrome num", () => {
      expect(solve1(0)).toBe(true);
    });
    test("121 is a palindrome num", () => {
      expect(solve1(121)).toBe(true);
    });
    test("123 isn't a palindrome num", () => {
      expect(solve1(123)).toBe(false);
    });
    test("-123 isn't a palindrome num", () => {
      expect(solve1(-123)).toBe(false);
    });
  });
  describe("convert half of number to judge palindrome number", () => {
    test("0 is a palindrome num", () => {
      expect(solve2(0)).toBe(true);
    });
    test("121 is a palindrome num", () => {
      expect(solve2(121)).toBe(true);
    });
    test("123 isn't a palindrome num", () => {
      expect(solve2(123)).toBe(false);
    });
    test("-123 isn't a palindrome num", () => {
      expect(solve2(-123)).toBe(false);
    });
  });
});
