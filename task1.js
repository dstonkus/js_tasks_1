// Write a function that takes the average of an array of number and returns the nearest whole number.
//Examples:
//number([1, 2])                 => 2
//number([2, 4])                 => 3
//number([23, 18, 1, 1, 1, 1])   => 8
//number([1, 2, 3, 4, 5])        => 3

const arrayAverage = (numbersArr) => {
  let sum = 0;

  numbersArr.map((n) => (sum += n));

  return Math.round(sum / numbersArr.length);
};

console.log(arrayAverage([1, 2]));
console.log(arrayAverage([2, 4]));
console.log(arrayAverage([23, 18, 1, 1, 1, 1]));
console.log(arrayAverage([1, 2, 3, 4, 5]));
