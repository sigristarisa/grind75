"use strict";
// --- 7. Valid Anagram --- //
/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.*/
var isAnagram = function (s, t) {
    var sortString = function (string) {
        return string.split("").sort().join("");
    };
    return sortString(s) === sortString(t);
};
