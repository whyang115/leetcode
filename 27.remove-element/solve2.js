export default (nums, val) => {
	let arr = nums.reduce((prev, curr) => {
		if (curr !== val) {
			prev.push(curr)
		}
		return prev
	}, [])
	return arr.length
}
