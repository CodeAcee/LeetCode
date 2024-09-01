function isPalindrome(x: any) {
  const rev = Number(x.toString().split("").reverse().join(""));

  return rev === x;
}

console.log(isPalindrome(121));
