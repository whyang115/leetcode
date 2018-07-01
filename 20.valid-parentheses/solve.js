/**
 * 当匹配到右括号时看栈顶是不是相应的左括号，是则弹出继续匹配，否则返回false
 */
export default s => {
	let len = s.length
	if (!len) return true
	if (len % 2) return false
	let arr = []
	for (let i = 0; i < len; i++) {
		let p = s[i]
		if (p === "{" || p === "(" || p === "[") {
			arr.push(p)
		} else if (
			(p === "}" && arr[arr.length - 1] === "{") ||
			(p === "]" && arr[arr.length - 1] === "[") ||
			(p === ")" && arr[arr.length - 1] === "(")
		) {
			arr.pop()
		} else {
			return false
		}
	}
	return !arr.length
}
