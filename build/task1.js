"use strict";
exports.__esModule = true;
exports.arrayAverage = void 0;
var arrayAverage = function (numbersArr) {
    return Math.round(numbersArr.reduce(function (prevValue, currValue) { return prevValue + currValue; }) /
        numbersArr.length);
};
exports.arrayAverage = arrayAverage;
