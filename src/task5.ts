export const chainReduction = (str: string): string => {
  let myString = str;
  let secondI = 0;
  let run = true;
  while (run === true) {
    for (let i = 0; i < str.length; i++) {
      const upperCase = myString.toUpperCase();
      secondI++;
      if (upperCase[i] === upperCase[secondI]) {
        if (myString[i] != myString[secondI]) {
          myString = myString.substr(0, i) + myString.substr(secondI + 1);
          i = 0;
          secondI = 0;
          break;
        }
      }
      if (i + 1 === myString.length) {
        run = false;
      }
    }
  }
  return myString;
};
