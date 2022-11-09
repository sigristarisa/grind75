"use strict";
// --- 2. Valid Parentheses --- //
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */
var isValid = function (s) {
    var sArr = [];
    var bracketObj = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (bracketObj[char]) {
            sArr.push(bracketObj[char]);
        }
        else if (sArr.pop() !== char) {
            return false;
        }
    }
    return sArr.length === 0;
};
