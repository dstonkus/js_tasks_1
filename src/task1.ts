export const arrayAverage = (numbersArr: number[]): number =>
  Math.round(
    numbersArr.reduce((prevValue, currValue) => prevValue + currValue) /
      numbersArr.length
  );
