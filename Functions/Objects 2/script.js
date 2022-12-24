// function sum(num) {
//   let str = num.toString();
//   var reversedStr = str.split("").reverse().join("");

//   return Number(reversedStr);
// }

// console.log(sum(12345));

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -&gt; “abeemrstw”

// function sum(txt) {
//   return txt.toLowerCase().split("").sort().join("");
// }

// console.log(sum("webmaster"));

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.

// function alphabetize(str) {
//   // Split the string into an array of words
//   const words = str.split(" ");

//   // Sort the array of words
//   const sortedWords = words.sort();

//   const alphabetizedWords = sortedWords.map((word) => {
//     const chars = word.split("");

//     const sortedChars = chars.sort();

//     return sortedChars.join("");
//   });

//   return alphabetizedWords.join(" ");
// }

//KOMENTAR: Ovaj malkice doradi. Dobijes kao rezultat: Of Rbceilpu Sabeir, dakle red reci nije dobar, ali je ostalo dobro ;)

// console.log(alphabetize("Republic Of Serbia"));

//4. Write a function to split a string and convert it into an array of words.
// &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]

// function sum(str) {
//   return str.split(" ");
// }

// console.log(sum("John Snow"));

// 5. Write a function to convert a string to its abbreviated form.
// &quot;John Snow&quot; -&gt; &quot;John S.&quot;

// function sum(str) {
//   var strSplit = str.split(" ");
//   var strSplit1 = strSplit[0];
//   var strSplit2 = strSplit[1];
//   var strSplit3 = strSplit2.slice(0, 1);

//   return `${strSplit1} ${strSplit3}.`;
// }

// console.log(sum("John Show"));

//6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// &#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; &#39;0123&#39;
// &#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; &#39;12300000&#39;

// function sum(num1, num2, str) {
//   // let result = num1.slice(0, num2.length);
//   let result = num1
//     .split("")
//     .reverse()
//     .slice(num2.length, num1.length)
//     .reverse();

//   let result1 = result.concat(num2).join("");

//   if (str === "l") {
//   }

//   return result1;
// }

//KOMENTAR: Jesi li ovaj pokusao da uradis na dva nacina ili...? Jer drugi nacin ti je dobar, prvi znas da ne radi :)

// console.log(sum("56745", "123", "l"));

// function sum(num1, num2, str) {
//   let result = num1
//     .split("")
//     .reverse()
//     .slice(num2.length, num1.length)
//     .reverse();

//   let result1 = result.concat(num2).join("");

//   let result2 = num1
//     .split("")

//     .slice(num2.length, num1.length);

//   let result3 = num2.split().concat(result2).join("");

//   let resenje = "";
//   if (str === "l") {
//     resenje = result1;
//   } else if (str === "r") {
//     resenje = result3;
//   }
//   return resenje;
// }

// console.log(sum("0000", "123", "l"));

// 7. Write a function to capitalize the first letter of a string and returns modified string.
// &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;

// function sum(str) {
//   let strSplit = str.split("");
//   let firstChar = strSplit[0].toUpperCase();

//   return str.replace(str[0], firstChar);
// }

// console.log(sum("js string exercies"));

// 8. Write a function to hide email addresses to protect them from unauthorized users.
// &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;

// function sum(str) {
//   let strReplace = str.replace("@", " ");
//   let result = strReplace.split(" ");
//   let email = result[0];
//   let emailHalf = email.length / 2;

//   let emailCut = email.slice(0, emailHalf);

//   return `${emailCut}...@${result[1]}`;
// }

// console.log(sum("somerandomaddress@example.com"));

// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
// var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
// var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
// &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;

// function swapCase(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }

//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));
