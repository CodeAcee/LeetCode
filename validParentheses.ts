
// https://leetcode.com/problems/valid-parentheses/description/ 

function isValid(s: string) {
  const stack: string[] = [];
  const map: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };


  for (let i = 0; i < s.length; i++) {
    const char = s[i];


    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }

  }

  return stack.length === 0;
}

console.log(isValid("()()(){}[]")); // Output: true
