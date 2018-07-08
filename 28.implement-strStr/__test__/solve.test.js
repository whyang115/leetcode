import solve from "../solve"

// console.log(test())
// console.log(test("mississippi", "issip"))
// console.log(test("hello", "ll"))
// console.log(test("hello", ""))
// console.log(test("hello", "lo"))

describe("28.imperment strStr", () => {
	test("parameter is a, a then return 0", () => {
		expect(solve("a", "a")).toBe(0)
	})
	test("parameter is hello, ll then return 2", () => {
		expect(solve("hello", "ll")).toBe(2)
	})
	test("parameter is hello, lo then return -1", () => {
		expect(solve("hello", "lol")).toBe(-1)
	})
	test("parameter is hello,'' then return 0", () => {
		expect(solve("hello", "")).toBe(0)
	})
})
