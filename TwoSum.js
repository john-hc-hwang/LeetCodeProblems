// nums is an array of numbers
// target is an integer
// return value is array of indices adding up to the target integer

const twoSum = (nums, target) => {
  const indexArray = [];
  let firstIndex = null;
  let secondIndex = null;
  for (let i = 0; i < nums.length; i++) {
      const subtracted = target - nums[i];
      if (nums.includes(subtracted)) {
          firstIndex = i;
          secondIndex = nums.indexOf(subtracted);
      }
  }

  indexArray.push(firstIndex);
  indexArray.push(secondIndex);

  return indexArray;
};
