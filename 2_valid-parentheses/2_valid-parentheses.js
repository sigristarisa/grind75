"use strict";
function isValid(s) {
    var sArr = [];
    var bracketObj = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        // if char is "(", "{", or "[", push ")", "}", "]" to the array
        if (bracketObj[char]) {
            sArr.push(bracketObj[char]);
            // if char is ")", "}", or "]", and the last element in the array is not, return false
        }
        else if (sArr.pop() !== char) {
            return false;
        }
    }
    // if all of the bracket matches, then the array length should be 0
    return sArr.length === 0;
}
