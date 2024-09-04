function containsNearbyDuplicate(nums: number[]) {
    return new Set(nums).size < nums.length;
}

console.log(containsNearbyDuplicate([1, 2, 5, 4, 3, 3])); // Output: true
