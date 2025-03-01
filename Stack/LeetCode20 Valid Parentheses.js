/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let isValid = false;
  let stackArray = [];
  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stackArray.push(s[i]);
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      const lastElement = stackArray.pop();
      const str = `${lastElement}${s[i]}`;
      if (str === "()" || str === "[]" || str === "{}") {
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }
  }

  if (stackArray.length === 0 && isValid === true) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
};
console.log(isValid("({{{{}}}))"));
