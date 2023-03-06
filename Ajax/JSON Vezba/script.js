// class Movie {
//   constructor(name, duration, genre) {
//     this.name = name;
//     this.duration = duration;
//     this.genre = genre;
//   }

//   getData() {
//     return `${this.name}, ${
//       this.duration
//     } min, ${this.genre[0].toUpperCase()}${this.genre[
//       this.genre.length - 1
//     ].toUpperCase()}`;
//   }
// }

// function createMovie() {
//   const movieName = $(".titleInput").val();
//   const duration = $(".lengthInput").val();
//   const genre = $("#genre").val();

//   const movie = new Movie(movieName, duration, genre);
//   const movieElement = $("<p>").html(movie.getData());
//   $(".hero").append(movieElement);
// }

// $(".btn").click(function (event) {
//   event.preventDefault();
//   event.stopPropagation();
//   createMovie();
// });

// $(".btn").click(createMovie);

// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ['hello', 'there', 'ES', 6]
// Output: ['Hello', 'There', 'ES']

// let arr = ["hello", "there", "ES", 6];

// let sum = function (arr) {
//   let arr2 = arr
//     .filter(function (e) {
//       if (typeof e === "string") {
//         return e;
//       }
//     })
//     .map((e) => e.slice(0, 1).toUpperCase() + e.slice(1));
//   return arr2;
// };

// console.log(sum(arr));

// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: 'Banana”, price: 120 }, {name: 'Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only

// let input = [
//   { name: "Banana", price: 120 },
//   { name: "Orange", price: 100 },
// ];

// const tax = 0.2;

// let result = function (input) {
//   let ex1 = [];
//   let ex2 = [];
//   ex1 = input.map((obj) => obj.price * tax);

//   return ex1;
// };

// console.log(result(input));

// 3. Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

// let input = [4, 6, 11, -9, 2.1];

// let result = function (input, num) {
//   if (num > 0) {
//     return input.map((e) => e + num);
//   } else {
//     return input.map((e) => e + 1);
//   }
// };

// console.log(result(input, 2));

// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

// let input = [6, 11, 9, 0, 3];

// // let even = input.filter(function (e, i) {
// //   return i % 2 == 0;
// // });

// let even = input.filter((e) => e % 2 == 0);
// console.log(even);

// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// Output: ['babel.js, 'JS standard']

// let input = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];

// let result = input.filter((e) => e.includes("js") || e.includes("JS"));

// console.log(result);

// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// Output: [7, 8]

// let input = [1.6, 11.34, 9.23, 7, 3.11, 8];

// let result = input.filter((e) => e % 1 === 0);

// console.log(result);

// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, &#39;abc&#39;, 45, 28, 553
// Output: [45, 553]

// let input = [23, 11.5, 9, "abc", 45, 28, 553];

// let result = input
//   .map((e) => e.toString())
//   .filter((e) => e.includes("5") && e % 1 === 0);

// console.log(result);

// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

// let input = [1.6, 11.34, 29.23, 7, 3.11, 18];

// let result = input.filter(function (e) {
//   return e > 10;
// });

// result = result.map((e) => input.indexOf(e));

// console.log(result);
