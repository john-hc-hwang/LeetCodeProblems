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

// better solution
var removeElement = function (nums, val) {
  let i = 0;

  for (let data of nums) {
    if (data !== val) {
      nums[i++] = data;
    }
  }

  return i;
};
