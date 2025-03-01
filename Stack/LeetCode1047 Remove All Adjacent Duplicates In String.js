var removeDuplicates = function (s) {
  const stackArray = [];
  stackArray.push(s[0]);
  for (let i = 1; i <= s.length - 1; i++) {
    const lastElement = stackArray.pop();
    if (lastElement === s[i]) {
      continue;
    } else {
      if (lastElement !== undefined) {
        stackArray.push(lastElement);
      }

      stackArray.push(s[i]);
    }
  }
  return stackArray.join("")
};

console.log(removeDuplicates("azxxzy"));
