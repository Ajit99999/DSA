/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let newInterval = intervals[0];
  let results = [newInterval];
  for (let i = 1; i <= intervals.length - 1; i++) {
    if (newInterval[1] >= intervals[i][0]) {
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    } else {
      newInterval = intervals[i];
      results.push(newInterval);
    }
  }

  return results;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [8, 9],
    [9, 11],
    [4, 6],
  ])
);
