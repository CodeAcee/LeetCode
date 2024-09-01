function longestCommonPrefix(strs: string[]): string {
  let sorted = strs.sort((a, b) => (a < b ? -1 : 1));

  let res: string[] = [];

  let firstWord: string = sorted[0];
  let lastWord: string = sorted[strs.length - 1];

  for (let i = 0; i < strs.length; i++) {
    if (firstWord[i] === lastWord[i]) {
      res.push(firstWord[i]);
    } else {
      break;
    }
  }

  return res.join("");
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["da", "b", "c"])); // Output: ""
console.log(longestCommonPrefix(["a"])); // Output: "a"
