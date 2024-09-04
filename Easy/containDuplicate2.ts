function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const seen = new Map<number, number>();

  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen.has(nums[i])) {
      const j = seen.get(nums[i])!;
      if (Math.abs(i - j) <= k) {
        return true;
      }
    }
    seen.set(nums[i], i);
  }

  return false;
}

console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate2([1, 0, 1, 1], 1)); // Output: true
console.log(containsNearbyDuplicate2([1, 2, 3, 1, 2, 3], 2)); // Output: false
