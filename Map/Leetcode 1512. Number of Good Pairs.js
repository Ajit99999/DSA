/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    } else {
      let existingCount = map.get(nums[i]);
      map.set(nums[i], existingCount + 1);
    }
  }
  //   let sum = 0;
  //   for (let i of map.values()) {
  //     if (i >= 1) {
  //       sum += (i * (i + 1)) / 2;
  //     }
  //   }
  //   return sum;

  // another usage of inbuilt methods of array
  return Array.from(map.values()).reduce((acc, elem) => {
    if (elem >= 1) {
      acc += (elem * (elem + 1)) / 2;
      return acc;
    }
    return acc;
  }, 0);
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
