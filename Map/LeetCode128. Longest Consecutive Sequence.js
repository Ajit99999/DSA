/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const uniqueArray = [...new Set(nums)];
  uniqueArray.sort((a, b) => a - b);
  let length = 0;
  let max = 0;
  for (let i = 0; i <= uniqueArray.length - 1; i++) {
    if (uniqueArray[i] + 1 === uniqueArray[i + 1]) {
      length++;
    } else {
      max = Math.max(length, max);
      length = 0;
    }
  }
  return nums.length === 0 ? 0 : ++max;
};
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
