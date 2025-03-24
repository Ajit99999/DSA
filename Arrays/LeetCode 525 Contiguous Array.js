/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === 0) {
      nums[i] = -1;
    }
  }
  let map = new Map();
  map.set(0, -1);
  let j = 0;
  let sum = 0;
  let max = -Infinity;
  while (j <= nums.length - 1) {
    sum += nums[j];
    if (map.has(sum)) {
      const index = map.get(sum);
      const len = j - index;
      max = Math.max(max, len);
    } else {
      map.set(sum, j);
    }
    j++;
  }
  return max;
};

console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]));
