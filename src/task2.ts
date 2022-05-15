export const checkSameLetters = (
  str: string,
  inputOne: string,
  inputTwo: string
): boolean => {
  let countOne = 0;
  let countTwo = 0;

  const string = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    string[i] === inputOne ? countOne++ : null;
    string[i] === inputTwo ? countTwo++ : null;
  }

  if (countOne === countTwo) return true;
  else return false;
};
