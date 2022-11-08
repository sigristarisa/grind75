function isValid(s: string): boolean {
  const sArr: string[] = [];
  const bracketObj: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    // if char is "(", "{", or "[", push ")", "}", "]" to the array
    if (bracketObj[char]) {
      sArr.push(bracketObj[char]);

      // if char is ")", "}", or "]", and the last element in the array is not, return false
    } else if (sArr.pop() !== char) {
      return false;
    }
  }
  // if all of the bracket matches, then the array length should be 0
  return sArr.length === 0;
}
