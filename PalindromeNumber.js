const isPalindrome = x => {
  if (x < 0) return false;

  let resultString = '';
  let stringNum = x.toString();

  for (let i = stringNum.length - 1; i >= 0; i--) {
    resultString += stringNum[i];
  }

  // below if condition is same as +resultString
  // can use + operator to turn string to number
  if (Number(resultString) === x) {
    return true;
  } else {
    return false;
  }
};
