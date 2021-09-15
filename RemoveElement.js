var removeElement = function (nums, val) {
  let removedCounter = 0;
  let k = nums.length;
  for (let i = 0; i < k; i++) {
    if (nums[i - removedCounter] === val) {
      nums.splice(i - removedCounter, 1);
      removedCounter++;
    }
  }
  k = k - removedCounter;
  return k;
};
