function twoSum(nums: number[], target: number): Array<number> | null {
  const mapNums = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (mapNums.has(complement)) {
      return [mapNums.get(complement), i];
    }

    mapNums.set(num, i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15, 11], 18)); // Output: [[0, 1]]
