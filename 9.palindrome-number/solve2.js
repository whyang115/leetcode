/**
 * 判断回文数
 * 取出后半部分的数和前半部分相比
 * @param {*} x
 */
const isPalindrome = x => {
  // 若x小于0 或者为10的整数倍时返回false
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let convertNum = 0;
  while (x > convertNum) {
    convertNum = convertNum * 10 + (x % 10);
    x /= 10;
  }
  // 当数字的个数为奇数时,中间的那个数不影响结果，除以10去除
  return x === convertNum || x === convertNum / 10;
};
export default isPalindrome;
