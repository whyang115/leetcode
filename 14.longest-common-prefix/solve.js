const longestCommonPrefix = strs => {
	if (!strs.length) return ""
	return strs.reduce((prev, curr) => {
		while (prev.indexOf(curr)) {
			curr = curr.slice(0, curr.length - 1)
		}
		return curr
	})
}
export default longestCommonPrefix
