"use strict";
var arrayAverage = function (numbersArr) {
    return Math.round(numbersArr.reduce(function (prevValue, currValue) { return prevValue + currValue; }) /
        numbersArr.length);
};
console.log(arrayAverage([1, 2]));
console.log(arrayAverage([2, 4]));
console.log(arrayAverage([23, 18, 1, 1, 1, 1]));
console.log(arrayAverage([1, 2, 3, 4, 5]));
// result
// 2
// 3
// 8
// 3
