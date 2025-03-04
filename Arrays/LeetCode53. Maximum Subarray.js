/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
      sum += nums[i];
      if (nums[i] > sum) {
        sum = nums[i];
      }
      max = Math.max(sum, max);
    }
    return max;
  };
  const res = maxSubArray([5,4,-1,7,8]);
  console.log(res);
  