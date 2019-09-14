// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [],
    i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//     let chunked = [], i = 0
//     while(i < array.length) {
//         chunked.push(array.splice(i, size));
//     }
//     return chunked
// }

// function chunk(array, size) {
//     let chunked = [];
//     for(let el of array) {
//         !chunked[chunked.length - 1] || chunked[chunked.length - 1].length === size? chunked.push([el]) : chunked[chunked.length - 1].push(el)
//     }
//     return chunked
// }
