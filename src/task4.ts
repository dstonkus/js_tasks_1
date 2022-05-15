const stringWavePattern = (str: string): string[] => {
  const waveArray: string[] = [];
  const strArray = str.split('');

  strArray.forEach((s, i) => {
    if (s !== ' ') {
      const letter = s.toUpperCase();
      const string =
        str.substring(0, i) + letter + str.substring(i + letter.length);

      waveArray.push(string);
    }
  });

  return waveArray;
};

console.log(stringWavePattern('hello'));
console.log(stringWavePattern(' h e y '));
console.log(stringWavePattern(''));

// result
// [ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]
// [ ' H e y ', ' h E y ', ' h e Y ' ]
// []
