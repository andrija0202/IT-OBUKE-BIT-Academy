"use strict";

// // const showSearch = async (movie) => {
// //   const base = "https://api.tvmaze.com/search/shows?q=girls";

// //   const response = await fetch(base);
// //   const data = await response.json();
// //   const movieOne = await data.Genres;

// //   // if (movie == data.name) {
// //   //   console.log(movie);
// //   // }
// //   console.log(movieOne);
// //   // console.log(movie);
// //   // return movieOne;
// // };

// // showSearch();

// // const movieSearch = document.querySelector("form");

// // movieSearch.addEventListener("submit", (e) => {
// //   e.preventDefault();

// //   const movie = movieSearch.search.value.trim();
// //   showSearch(movie);
// // });

// // Function to retrieve a list of TV shows from the TvMaze API
// function getTVShows() {
//   return new Promise((resolve, reject) => {
//     fetch("http://api.tvmaze.com/shows")
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// // Function to retrieve data for a single TV show from the TvMaze API
// function getTVShowDetails(showId) {
//   return new Promise((resolve, reject) => {
//     fetch(`http://api.tvmaze.com/shows/${showId}`)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// getTVShows()
//   .then((shows) => {
//     // Loop through the array of TV show objects and display them in a list
//     shows.forEach((show) => {
//       const listItem = document.createElement("li");
//       const link = document.createElement("a");
//       link.href = `show-info.?=${show.id}`; // link to show info page
//       link.textContent = show.name;
//       listItem.appendChild(link);
//       document.getElementById("show-list").appendChild(listItem);
//     });
//   })
//   .catch((error) => {
//     console.error(error);

//   });

// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//   res.render("movie-page.ejs");
// });

// app.use(express.static(__dirname + "/public"));

const showList = document.querySelector(".show-list");
const showListAll = document.querySelector(".show-list-wrap");
const btn = document.querySelector(".main-btn");

const bitShow = async (movie) => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();

  console.log(data);

  data.forEach((element, i) => {
    const html = `
    <a href="movie-page.html"  <div class="show-list">
    <img src='${data[i].image.original}'>
    <h1>${data[i].name}</h1>
    </div>
    
    
    `;

    showListAll.insertAdjacentHTML("afterbegin", html);
    // console.log(i);
  });
};

bitShow();

// Movie page

const movePage = async (movie) => {
  const res = await fetch("https://api.tvmaze.com/shows");
};
