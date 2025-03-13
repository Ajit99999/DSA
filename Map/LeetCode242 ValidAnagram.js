/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i <= s.length - 1; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let i = 0; i <= t.length - 1; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    }
  }

  return Array.from(map.values()).every((elem) => elem === 0);
};

const res = isAnagram("anagtam", "nbgbram");
console.log(res);
