// Write a function which would
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example:
// math(65, 60, 75, 55, 60, 63, 64, 45)    => 86

const calculateNums = (...nums) => {
  let sum = 0;

  nums.map((n) => {
    sum += n * n;
  });

  return Math.trunc(Math.sqrt(sum) / 2);
};

console.log(calculateNums(65, 60, 75, 55, 60, 63, 64, 45));
