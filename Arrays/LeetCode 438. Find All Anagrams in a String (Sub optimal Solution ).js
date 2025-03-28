
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

function sort(str) {
  const strArray = str.split("");
  strArray.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });

  return strArray.join("");
}
var findAnagrams = function (s, p) {
  let length = p.length;
  let i = 0;
  let res = [];
  let elem = s.substring(0, length);
  if (sort(p) === sort(elem)) {
    res.push(0);
  }

  for (let i = length, j = 1; i <= s.length - 1, j <= s.length - 1; i++, j++) {
    elem = `${elem.substring(1, elem.length)}${s[i]}`;
    if (sort(p) === sort(elem)) {
      res.push(j);
    }
  }
  return res;
};

console.log(findAnagrams("abab", "ab"));
