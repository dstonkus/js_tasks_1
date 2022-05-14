// Your task is to create a wave pattern out of a string.
// Rules:

// The input will always be lower case string.
// Ignore whitespace.
// Examples:
// wave("hello")       => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave(" h e y ")     => [" H e y ", " h E y ", " h e Y "]
// wave("")            => []

const stringWavePattern = (str) => {
  const waveArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let letter = str[i].toUpperCase();
      let string = str.replace(str[i], letter);

      waveArray.push(string);
    }
  }
  return waveArray;
};

console.log(stringWavePattern('hello'));
console.log(stringWavePattern(' h e y '));
console.log(stringWavePattern(''));
