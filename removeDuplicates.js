// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: Array<number>): number {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
}


let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeDuplicates(nums);
