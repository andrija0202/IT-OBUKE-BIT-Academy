"use strict";

const mainContainer = document.querySelector(".main_container");

const body = document.querySelector('body')



const renderError = function(err){

  let html = `
    <h1>${err.message}</h1>
  `
  body.insertAdjacentHTML(
    'afterbegin',html
  )
 
}

const renderMovie = function (movie) {
  let html = `
  <div class="card ">
  <div class="card_imgHolder">
    <img src="${movie.image.original}" alt="" />
  </div>
  <div class="card_title">${movie.name}</div>
</div>
  `;

  mainContainer.insertAdjacentHTML("afterbegin", html);
};

const displayCards = async function () {
  try(const res = await fetch("https://api.tvmaze.com/shows");
  const item = await res.json();
  const top50 = item.slice(0, 50);
  console.log(top50);
  // console.log(item);
  top50.forEach((movie) => {
    renderMovie(movie);
  });)catch(
    console.log(err);
  )
};

window.addEventListener("load", displayCards);
