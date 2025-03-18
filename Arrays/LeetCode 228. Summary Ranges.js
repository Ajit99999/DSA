/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let resultArray = [];
  let max = -Infinity;
  let firstElem = nums[0];
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      max = Math.max(max, nums[i + 1]);
    } else {
      let resStr;
      if (max === -Infinity) {
        resStr = `${firstElem}`;
      } else {
        resStr = `${firstElem}->${max}`;
      }
      resultArray.push(resStr);
      firstElem = nums[i + 1];
      max = -Infinity;
    }
  }
  return resultArray;
};
