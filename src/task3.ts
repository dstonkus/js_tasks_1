const calculateNums = (...nums: number[]): number => {
  let sum = 0;

  nums.map((n) => {
    sum += n * n;
  });

  return Math.trunc(Math.sqrt(sum) / 2);
};

console.log(calculateNums(65, 60, 75, 55, 60, 63, 64, 45));

// result
// 86
