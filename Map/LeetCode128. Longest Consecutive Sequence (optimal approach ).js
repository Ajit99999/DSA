/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const uniqueSet = new Set(nums);
  let max = 0;
  for (let i of uniqueSet) {
    if (!uniqueSet.has(i - 1)) {
      let length = 1;
      let num = i + 1;
      while (uniqueSet.has(num)) {
        length++;
        num++;
      }
      max = Math.max(length, max);
    }
  }
  return max;
};
console.log(longestConsecutive([1, 0, 1, 2]));
