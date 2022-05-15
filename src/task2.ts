const checkSameLetters = (
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

console.log(checkSameLetters('ddkk', 'd', 'k'));
console.log(checkSameLetters('dkkdd', 'd', 'k'));
console.log(checkSameLetters('ddkKm', 'd', 'k'));
console.log(checkSameLetters('dmm', 'd', 'k'));
console.log(checkSameLetters('eSss', 'd', 'k'));

// result
// true
// false
// true
// false
// true
