import longestCommonPrefix from "../solve"

describe("14.longest-common-prefix", () => {
	test("['flower', 'flow', 'flight'] prefix is fl", () => {
		expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
	})
	test("['ca', 'a'] prefix is ‘’", () => {
		expect(longestCommonPrefix(["ca", "a"])).toBe("")
	})
	test("['flower', 'ab'] prefix is ''", () => {
		expect(longestCommonPrefix(["flower", "ab"])).toBe("")
	})
})
