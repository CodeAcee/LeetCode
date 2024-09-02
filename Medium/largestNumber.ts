// https://leetcode.com/problems/largest-number/

const largestNumber = (nums: Array<number>): string => {
  const strNums = nums.map(String);
  strNums.sort((a, b) => (b + a).localeCompare(a + b));
  if (strNums[0] === "0") {
    return "0";
  }
  return strNums.join("");
};

console.log(largestNumber([0, 99, 10, 9])); // 210
