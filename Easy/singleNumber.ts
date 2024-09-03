// leetcode.com/problems/single-number/description/

function singleNumber(nums: number[]): number {
  let tmp: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (!tmp.includes(nums[i])) {
      tmp.push(nums[i]);
    } else {
      tmp.splice(tmp.indexOf(nums[i]), 1);
    }
  }

  return tmp[0];
}


console.log(singleNumber([2, 2, 1])); // 1