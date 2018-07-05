export default (nums, val) => {
	let i = 0
	while (i < nums.length) {
		if (nums[i] === val) {
			nums.splice(i, 1)
			i--
			i = Math.max(i, 0)
		} else {
			i++
		}
	}
	return nums.length
}
