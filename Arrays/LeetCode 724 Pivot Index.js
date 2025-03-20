/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSumArray = [0];
  let rightSumArray = [0];
  let index = -1;
  let sum = nums[0];
  for (let i = 1; i <= nums.length - 1; i++) {
    leftSumArray.push(sum);
    sum += nums[i];
  }
  sum = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rightSumArray.unshift(sum);
    sum += nums[i];
  }
  for (
    let i = 0;
    i <= leftSumArray.length - 1, i <= rightSumArray.length - 1;
    i++
  ) {
    if (leftSumArray[i] === rightSumArray[i]) {
      index = i;
      break;
    }
  }

  return index;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
