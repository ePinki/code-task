/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  for(let i = 0; i = nums.lenght; i++) {
      for(let a = 0; a = nums.lenght; a++) {
          if (nums[i] + nums[a] == target) {
              return [i, a];
          }
      }
  }
};