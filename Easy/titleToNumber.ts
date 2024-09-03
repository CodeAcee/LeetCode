function titleToNumber(columnTitle: string): number {
  let res = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    res = res * 26 + (columnTitle.charCodeAt(i) - 64);
  }

  return res;
}

console.log(titleToNumber("ZY")); // Output: 1

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
