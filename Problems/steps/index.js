// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stairs = "") {
  if (n === row) return;

  if (stairs.length === n) {
    console.log(stairs);
    return steps(n, row + 1);
  }
  if (stairs.length <= row) {
    stairs += "#";
  } else {
    stairs += " ";
  }
  return steps(n, row, stairs);
}

module.exports = steps;

// function steps(n) {
//     for(let i = 1; i <=n; i++) {
//         console.log('#'.repeat(i) + ' '.repeat(n-i))
//     }
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stairs = "";
//     for (let column = 0; column < n; column++) {
//       if (column === row || column < row) {
//         stairs += "#";
//       } else {
//         stairs += " ";
//       }
//     }
//     console.log(stairs);
//   }
// }

// function steps(n, row = 0, stairs = "") {
//   if (n === row) return;
//   if (stairs.length <= row) {
//     stairs += "#";
//   } else {
//     stairs += " ";
//   }
//   if (stairs.length === n) {
//     console.log(stairs);
//     stairs = "";
//     row++;
//   }
//   return steps(n, row, stairs);
// }
