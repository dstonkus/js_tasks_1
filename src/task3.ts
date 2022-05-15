export const calculateNums = (...nums: number[]): number => {
  let sum = 0;

  nums.map((n) => {
    sum += n * n;
  });

  return Math.trunc(Math.sqrt(sum) / 2);
};
