function lengthOfLastWord(word: string): number {
  const arr = word.trim().split(" ");

  return arr[arr.length - 1].length;
}

console.log(lengthOfLastWord("Hello World   moon  ")); // Output: 5
