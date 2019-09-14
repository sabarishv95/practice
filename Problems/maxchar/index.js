// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {},
    maxchar;
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  for (let key in obj) {
    obj[key] === Math.max(...Object.values(obj)) ? (maxchar = key) : null
  }
  return maxchar;
}

module.exports = maxChar;
