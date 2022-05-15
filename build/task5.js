"use strict";
exports.__esModule = true;
var fs = require("fs");
var chainReduction = function (str) {
    var myString = str;
    var secondI = 0;
    var run = true;
    while (run === true) {
        for (var i = 0; i < str.length; i++) {
            var upperCase = myString.toUpperCase();
            secondI++;
            if (upperCase[i] === upperCase[secondI]) {
                if (myString[i] != myString[secondI]) {
                    myString = myString.substr(0, i) + myString.substr(secondI + 1);
                    i = 0;
                    secondI = 0;
                    break;
                }
            }
            if (i + 1 === myString.length) {
                run = false;
            }
        }
    }
    return myString;
};
fs.readFile('../input.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(chainReduction(data).length);
    // result
    // 9160
});
