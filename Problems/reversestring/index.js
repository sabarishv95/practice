// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (str.length >= 1) return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1));
  else return str.slice(str.length - 1)
}

module.exports = reverse;

// function reverse(str) {
//     return Array.from(str).reverse().join('')
// }

// function reverse(str) {
//     let reversed = ''
//     for (let character of str) {
//         console.log(character)
//         reversed = character + reversed
//     }
//     return reversed;
// }

// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
