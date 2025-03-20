const numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }

  let i = 0;
  let j = 0;
  let product = 1;
  let count = 0;
  while (j < nums.length) {
    product = product * nums[j];
    while (product >= k) {
      product = Math.floor(product / nums[i]);
      i++;
    }

    count = count + (j - i + 1);
    j++;
  }
  return count;
};

console.log(numSubarrayProductLessThanK([1, 2, 3], 1));
