var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i <= strs.length - 1; i++) {
    const elem = strs[i].split("").sort().join("");
    if (!map.has(elem)) {
      map.set(elem, [strs[i]]);
    } else {
      let existingValue = map.get(elem);
      existingValue = [...existingValue, strs[i]];
      map.set(elem, existingValue);
    }
  }
  return  Array.from(map.keys()).map((elem) => map.get(elem));
};

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res)