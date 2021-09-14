const removeDuplicates = (nums) => {
  let currentIndex = 0;
  // nums.length - 1 since we are comparing i and (i+1)
  // which means that i + 1 will be undefined at the end of for loop
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      currentIndex++;
      nums[currentIndex] = nums[i + 1];
    }
  }
  return currentIndex + 1;
};
