import solve from "../solve"

describe("20.valid-parentheses", () => {
	test("empty stirng is valid", () => {
		expect(solve("")).toBe(true)
	})
	test("empty stirng is valid", () => {
		expect(solve("()")).toBe(true)
	})
	test("(){} is valid", () => {
		expect(solve("(){}")).toBe(true)
	})
	test("((){} is invalid", () => {
		expect(solve("((){}")).toBe(false)
	})
	test("(){}[] is valid", () => {
		expect(solve("(){}[]")).toBe(true)
	})
	test("(()){[()]}[{()()}] is valid", () => {
		expect(solve("(()){[()]}[{()()}]")).toBe(true)
	})
	test("({}[])}{ is invalid", () => {
		expect(solve("({}[])}{")).toBe(false)
	})
})
