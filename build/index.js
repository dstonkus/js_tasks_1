'use strict';
exports.__esModule = true;
var fs = require('fs');
var taskOne = require('./task1');
var taskTwo = require('./task2');
var taskThree = require('./task3');
var taskFour = require('./task4');
var taskFive = require('./task5');
console.log(taskOne.arrayAverage([1, 2]));
console.log(taskOne.arrayAverage([1, 2]));
console.log(taskOne.arrayAverage([2, 4]));
console.log(taskOne.arrayAverage([23, 18, 1, 1, 1, 1]));
console.log(taskOne.arrayAverage([1, 2, 3, 4, 5]));
console.log(taskTwo.checkSameLetters('ddkk', 'd', 'k'));
console.log(taskTwo.checkSameLetters('dkkdd', 'd', 'k'));
console.log(taskTwo.checkSameLetters('ddkKm', 'd', 'k'));
console.log(taskTwo.checkSameLetters('dmm', 'd', 'k'));
console.log(taskTwo.checkSameLetters('eSss', 'd', 'k'));
console.log(taskThree.calculateNums(65, 60, 75, 55, 60, 63, 64, 45));
console.log(taskFour.stringWavePattern('hello'));
console.log(taskFour.stringWavePattern(' h e y '));
console.log(taskFour.stringWavePattern(''));
fs.readFile('../input.txt', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(taskFive.chainReduction(data).length);
});
