/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let finalArray = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        finalArray.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      }
    }
  }
  let map = new Map();
  let res = [];
  for (let i = 0; i <= finalArray.length - 1; i++) {
    if (!map.has(finalArray[i].join(""))) {
      res.push(finalArray[i]);
      map.set(finalArray[i].join(""), finalArray[i]);
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
