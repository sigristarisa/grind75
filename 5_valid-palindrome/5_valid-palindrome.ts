const isPalindrome = (s: string): boolean => {
  const nonAlphanumeric: RegExp = /[^A-Za-z0-9]/g;
  s = s.replace(nonAlphanumeric, "").toLowerCase();
  const reverseS: string = s.split("").reverse().join("");
  return s === reverseS;
};
