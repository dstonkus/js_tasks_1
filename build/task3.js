"use strict";
var calculateNums = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.map(function (n) {
        sum += n * n;
    });
    return Math.trunc(Math.sqrt(sum) / 2);
};
console.log(calculateNums(65, 60, 75, 55, 60, 63, 64, 45));
// result
// 86
