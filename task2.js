//Write a function which checks if the same amount of 'd' and 'k' is in the string.
//Examples:
//same("ddkk")    => true
// same("dkkdd")   => false
// same("ddkKm")   => true
// same("dmm")     => false
// same("eSss")    => true - (when no 'd' and 'k' is present should return true)

const checkSameLetters = (str, inputOne, inputTwo) => {
  let countOne = 0;
  let countTwo = 0;

  let string = str.toLowerCase();

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
