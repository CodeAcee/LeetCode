function insertArray(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const setArr = new Set<number>(arr1); // 

  const res = arr2.filter((item) => setArr.has(item));

  return res;
}

console.log(insertArray([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
