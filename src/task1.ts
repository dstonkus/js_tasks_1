const arrayAverage = (numbersArr: number[]): number =>
  Math.round(
    numbersArr.reduce((prevValue, currValue) => prevValue + currValue) /
      numbersArr.length
  );

console.log(arrayAverage([1, 2]));
console.log(arrayAverage([2, 4]));
console.log(arrayAverage([23, 18, 1, 1, 1, 1]));
console.log(arrayAverage([1, 2, 3, 4, 5]));

// result
// 2
// 3
// 8
// 3
