const roman2interger = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = s => {
  let len = s.length;
  return s.split("").reduce((prev, curr, i, arr) => {
    if (i <= len) {
      if (curr === "I" && (arr[i + 1] === "V" || arr[i + 1] === "X")) {
        prev -= 2;
      }
      if (curr === "X" && (arr[i + 1] === "L" || arr[i + 1] === "C")) {
        prev -= 20;
      }
      if (curr === "C" && (arr[i + 1] === "D" || arr[i + 1] === "M")) {
        prev -= 200;
      }
    }
    return prev + roman2interger[curr];
  }, 0);
};
export default romanToInt;
