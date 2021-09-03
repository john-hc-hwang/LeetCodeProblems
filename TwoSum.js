// nums is an array of numbers
// target is an integer
// return value is array of indices adding up to the target integer

const twoSum = (nums, target) => {
  let firstIndex = null;
  let secondIndex = null;
  for (let i = 0; i < nums.length; i++) {
    const subtracted = target - nums[i];
    if (nums.includes(subtracted)) {
      firstIndex = i;
      secondIndex = nums.indexOf(subtracted);
    }
  }

  return [firstIndex, secondIndex];
};

// Alternate solution

// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++){
//       for(let j = i+1; j < nums.length; j++){
//           if(nums[i] + nums[j] === target){
//               return [i, j]
//           }
//       }
//   }
// };
