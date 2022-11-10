"use strict";
var isPalindrome = function (s) {
    var nonAlphanumeric = /[^A-Za-z0-9]/g;
    s = s.replace(nonAlphanumeric, "").toLowerCase();
    var reverseS = s.split("").reverse().join("");
    return s === reverseS;
};
