function plusOne(digits: number[]): number[] {
  let arrToString = BigInt(digits.join("")) + BigInt(1);

  const res = Array.from(String(arrToString), Number);

  return res;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [1, 2, 4]
