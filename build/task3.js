"use strict";
exports.__esModule = true;
exports.calculateNums = void 0;
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
exports.calculateNums = calculateNums;
