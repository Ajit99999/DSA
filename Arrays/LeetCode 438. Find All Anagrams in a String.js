function compare(map1, map2) {
  let isValid = false;
  for (let [key] of map1) {
    if (map1.get(key) === map2.get(key)) {
      isValid = true;
    } else {
      isValid = false;
      break;
    }
  }
  return isValid;
}
var findAnagrams = function (s, p) {
  let length = p.length;
  let res = [];
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i <= p.length - 1; i++) {
    if (!map1.has(p[i])) {
      map1.set(p[i], 1);
    } else {
      map1.set(p[i], map1.get(p[i]) + 1);
    }
  }
  for (let i = 0; i <= length - 1; i++) {
    if (!map2.has(s[i])) {
      map2.set(s[i], 1);
    } else {
      map2.set(s[i], map2.get(s[i]) + 1);
    }
  }
  if (compare(map1, map2)) {
    res.push(0);
  }

  for (let i = length, j = 1; i <= s.length - 1, j <= s.length - 1; i++, j++) {
    let leftChar = s[i - length];
    if (map2.get(leftChar) === 1) {
      map2.delete(leftChar);
    } else {
      map2.set(leftChar, map2.get(leftChar) - 1);
    }
    if (!map2.has(s[i])) {
      map2.set(s[i], 1);
    } else {
      map2.set(s[i], map2.get(s[i]) + 1);
    }

    if (compare(map1, map2)) {
      res.push(j);
    }
  }
  return res;
};

console.log(findAnagrams("abab", "ab"));