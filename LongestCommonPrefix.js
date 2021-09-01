const longestCommonPrefix = (strs) => {
  let result = '';

  if (strs.length === 0) {
    return result;
  }

  // find minLength since LongestCommonPrefix cannot be longer than the shortest character of a string in the array
  let minLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }

  for (let i = 0; i < minLength; i++) {
    let current = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== current) {
        return result;
      }
    }
    result += current;
  }

  return result;
};
