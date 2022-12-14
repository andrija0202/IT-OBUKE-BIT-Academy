// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

// function sum(num) {
//   let result = [];

//   for (let i = 0; i < num.length; i++) {
//     if (typeof parseInt(num[i]) === "number" && !isNaN(parseInt(num[i]))) {
//       result.push(parseInt(num[i]));
//     }
//   }

//   return result;
// }

// console.log(sum(["1", "21", undefined, "42", "1e+3", Infinity]));

// function toNumArray(arr) {
//   var result = [];
//   var counter = 0;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === null) {
//       continue;
//     } else if (isNaN(arr[i])) {
//       continue;
//     } else if (arr[i] === undefined) {
//       continue;
//     } else if (arr[i] === Infinity) {
//       continue;
//     } else {
//       result[counter] = +arr[i];
//       counter++;
//     }
//   }
//   console.log(result);
// }

// toNumArray(["1", "21", undefined, null, "42", "1e+3", Infinity]);

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: “015false-2247”

// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// function sum(num, arr) {
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (num == arr[i]) {
//       result = "Yes";
//       break;
//     } else {
//       result = "No";
//     }
//   }

//   return result;
// }

// console.log(sum(3, [5, -4.2, 3, 7]));

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// function sum(num) {
//   let result = [];

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//       result[i] = num[i] * 2;
//     }
//   }

//   return result;
// }

// console.log(sum([-3, 11, 5, 3.4, -8]));

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// function minimumArray(array) {
//   m = array[0];
//   k = 0;
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < m) {
//       m = array[i];
//       k = i;
//     }
//   }
//   return [m, k];
// }
// console.log("3. Zadatak: " + minimumArray([-8, 2, 2, -1, 6, 5, -5, -2]));

// ******************************************************************************

// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

// function sum(arr) {
//   let result = [];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//     }
//   }

//   return result;
// }

// console.log(sum([4, 2, 2, -1, 6]));

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// function sum(num) {
//   let result = 0;

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//       result += num[i];
//     }
//   }

//   return result;
// }

// console.log(sum([3, 11, -5, -3, 2, 2]));

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

// function sum(arr) {
//   let result = "";
//   let result1 = "";

//   for (let i = 0; i < arr.length; i++) {
//     result = arr[i];
//   }
//   for (let j = arr.length - 1; j >= 0; j--) {
//     result1 = arr[j];
//   }

//   if (result === result1) {
//     result = "tacno";
//   } else {
//     result = "netacno";
//   }

//   return result;
// }

// console.log(sum([3, 2, 4, -2, 7, -2, 4, 2, 3]));

// ************************************************************************** DImitrije

// function isSymetric(array) {
//   a = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == array[array.length - i - 1]) {
//       a++;
//     }
//   }
//   if (a == array.length) {
//     return "Array IS symmetric!";
//   } else {
//     return "Array  is NOT symmetric!";
//   }
// }
// console.log("6. Zadatak: " + isSymetric([3, 2, 4, -2, 7, -2, 4, 2, 3]));

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// function sum(arr1, arr2) {
//   let count = 0;
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     result[count] = [arr1[i], arr2[i]];
//     count++;
//   }

//   return result;
// }

// console.log("" + sum([4, 5, 6, 2], [3, 8, 11, 9]));

// function intertwinesTwoArrays(array1, array2) {
//   var j = 0;
//   var e = [];
//   for (let i = 0; i < array1.length; i++) {
//     e[j] = [array1[i], array2[i]];
//     j++;
//   }
//   return e;
// }
// console.log("7. Zadatak: " + intertwinesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// function sum(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(sum([4, 5, 6, 2], [3, 8, 11, 9]));

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

// function sum(num, arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (num !== arr[i]) {
//       result[i] = arr[i];
//     }
//   }
//   return result;
// }

// console.log(sum(2, [4, 6, 2, 8, 2, 2]));

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

// function sum(num, pos, arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//     if (result.indexOf([i]) === pos) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// console.log(sum(78, 3, [2, -2, 33, 12, 5, 8]));
