import solve from "../solve"

describe("26.remove duplicates from sorted array", () => {
	test("[1,1,2] return 2", () => {
		expect(solve([1, 1, 2])).toBe(2)
	})
	test("[0,0,1,1,1,2,2,3,3] return 5", () => {
		expect(solve([0, 0, 1, 1, 1, 2, 2, 3, 3])).toBe(4)
	})
})
