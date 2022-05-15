"use strict";
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
console.log(checkSameLetters('ddkk', 'd', 'k'));
console.log(checkSameLetters('dkkdd', 'd', 'k'));
console.log(checkSameLetters('ddkKm', 'd', 'k'));
console.log(checkSameLetters('dmm', 'd', 'k'));
console.log(checkSameLetters('eSss', 'd', 'k'));
// result
// true
// false
// true
// false
// true
