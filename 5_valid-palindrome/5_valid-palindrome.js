"use strict";
// --- 5. Valid Palindrome --- //
/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.*/
var isPalindrome = function (s) {
    var nonAlphanumeric = /[^A-Za-z0-9]/g;
    s = s.replace(nonAlphanumeric, "").toLowerCase();
    var reverseS = s.split("").reverse().join("");
    return s === reverseS;
};
