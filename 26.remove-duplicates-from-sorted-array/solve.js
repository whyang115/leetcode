export default nums => {
	var i = 0
	while (i < nums.length) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1)
			i--
			i < 0 ? (i = 0) : i
		} else {
			i++
		}
	}
	return nums.length
}
