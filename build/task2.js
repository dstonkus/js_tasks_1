"use strict";
exports.__esModule = true;
exports.checkSameLetters = void 0;
var checkSameLetters = function (str, inputOne, inputTwo) {
    var countOne = 0;
    var countTwo = 0;
    var string = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        string[i] === inputOne ? countOne++ : null;
        string[i] === inputTwo ? countTwo++ : null;
    }
    if (countOne === countTwo)
        return true;
    else
        return false;
};
exports.checkSameLetters = checkSameLetters;
