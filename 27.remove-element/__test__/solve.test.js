import solve from "../solve"
import solve2 from "../solve2"

describe("27.remove element", () => {
	test("nums = [3,2,2,3],val = 3,return 2", () => {
		expect(solve([3, 2, 3, 2], 3)).toBe(2)
		expect(solve2([3, 2, 3, 2], 3)).toBe(2)
	})
	test("nums=[0,1,2,2,3,0,4,2],val =2", () => {
		expect(solve([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
		expect(solve2([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
	})
})
