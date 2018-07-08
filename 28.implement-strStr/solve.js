export default (haystack, needle) => {
	if (needle === "") return 0
	let ind = 0
	for (let i = 0; i <= haystack.length - needle.length; i++) {
		if (haystack[i] === needle[0]) {
			for (let j = 0; j < needle.length; j++) {
				if (haystack[i + j] === needle[j]) {
					ind++
				}
			}
			if (ind === needle.length) {
				return i
			} else {
				ind = 0
			}
		}
	}
	return -1
}
