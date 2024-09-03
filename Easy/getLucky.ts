// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/?envType=daily-question&envId=2024-09-03

function getLucky(s: string, k: number): number {
  const transformed = s
    .split("")
    .map((char) => (char.charCodeAt(0) - 96).toString())
    .join("");

  let result = transformed;

  for (let i = 0; i < k; i++) {
    result = transform(result);
  }

  return parseInt(result);
}

function transform(numbers: string): string {
  return numbers
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0)
    .toString();
}

console.log(getLucky("zyty", 2));
