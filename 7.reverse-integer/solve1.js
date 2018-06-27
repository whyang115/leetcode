const reverse = x => {
  const upperLimit = Math.pow(2,31) - 1
  const lowerLimit = -Math.pow(2,31)
  let res = parseInt(String(Math.abs(x)).split("").reverse().join(""))
  res = x > 0 ? res : -res
  if(res > upperLimit || res < lowerLimit) return 0
  return res
}

console.log(reverse(-321))