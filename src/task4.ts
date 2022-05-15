export const stringWavePattern = (str: string): string[] => {
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
