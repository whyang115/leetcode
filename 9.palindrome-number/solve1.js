const isPalindrome = x => {
  return (
    String(x) ===
    String(x)
      .split("")
      .reverse()
      .join("")
  );
};
export default isPalindrome;
