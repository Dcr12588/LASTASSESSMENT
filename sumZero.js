
// function addToZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] + arr[j] === 0) {
//                 return true
//             }
//         }

//     }
//     return false
// }
// console.log(addToZero([1, 2, 3, -2]))

// // time complexity: O(n^2)
// // space complexity: O(n)

// function hasUniqueChars(str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (i !== j && str[i] === str[j]) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(hasUniqueChars("Monday"))

// time complexity: O(n^2)
// space complexity: O(n)

// const string1 = 'The quick Brown fox jumps Over the lazy dog';
// const string2 = 'The quick fox jumps Over the lazy dog';

// function isPangram(str) {
//   const letters = new Set();
//   [...str].forEach(i => {
//     if (/[a-zA-Z]/.test(i)) {
//       // Found letter - will add lowercase to set
//       letters.add(i.toLowerCase());
//     }
//   });
//   if (letters.size === 26) {
//     return true
//   } else {
//     return false;
//   }
// }

// console.log(string1, isPangram(string1));
// console.log(string2, isPangram(string2));

// time complexity:O(n)
// space complexity:O(1) 

