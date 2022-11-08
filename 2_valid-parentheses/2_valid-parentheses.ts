// --- 2. Valid Parentheses --- //
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

const isValid = (s: string): boolean => {
  const sArr: string[] = [];
  const bracketObj: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (bracketObj[char]) {
      sArr.push(bracketObj[char]);
    } else if (sArr.pop() !== char) {
      return false;
    }
  }
  return sArr.length === 0;
};
