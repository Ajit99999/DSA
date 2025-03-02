/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let obj = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = nums[i];
    }
  }

  let res = 1;
  while (obj[res] !== undefined) {
    res++;
  }

  return res;
};
