"use strict";

const bgAll = document.querySelector(".bgAll");
const btn = document.querySelector(".btn");
const btnOff = document.querySelector(".btnOff");

const btnToggle = (btnToggle) => bgAll.classList.toggle("bgAllYellow");

btn.addEventListener("click", btnToggle);

btnOff.addEventListener("click", () => {
  btn.removeEventListener("click", btnToggle);
});

// ------------------------------------------------------------------

// Drugi zadatak

let items = document.querySelectorAll(".item");
const form = document.querySelector(".form");
const btn1 = document.querySelector(".mainBtn1");
const btn2 = document.querySelector(".mainBtn2");
const leftSideForm = document.querySelector(".leftSide");
const rightSideForm = document.querySelector(".rightSide");
const novo = document.querySelector(".novo");
// let proba = input1.value;
// console.log(item);
// let newP = (document.createElement("p").textContent = item);
// newP.textContent = "Nesto novo";

// console.log(itemsArray);

btn1.addEventListener("click", (e) => {
  var input1 = document.querySelector(".mainInput1").value;

  items.forEach((item) => {
    if (item.textContent === input1) {
      let newP = (document.createElement("p").textContent = item);

      rightSideForm.append(newP);
    }
  });
});

btn2.addEventListener("click", (e) => {
  var input2 = document.querySelector(".mainInput1").value;

  items.forEach((item) => {
    if (item.textContent === input2) {
      let newP = (document.createElement("p").textContent = item);

      leftSideForm.append(newP);
    }
  });
});

// ---------------------------------------------------------------

// Soccer Field

const imgField = document.querySelector(".img-field");
const soccerImg = document.querySelector(".soccer-img");
const soccerPlayer = document.querySelector(".soccer-player");
const btnStop = document.querySelector(".btn-stop");

let positionX = 0;
let positionY = 0;

let positionFunc = function (e) {
  soccerImg.addEventListener("click", () => {
    soccerPlayer.style.left = `${positionX}px`;
    soccerPlayer.style.top = `${positionY}px`;
  });
};

let movePlayer = function (e) {
  positionX = e.x;
  positionY = e.y;
};

soccerImg.addEventListener("mousemove", movePlayer);

soccerImg.addEventListener("click", positionFunc);

btnStop.addEventListener("click", () => {
  soccerImg.removeEventListener("mousemove", movePlayer);
  positionX = 0;
  positionY = 0;
});

// -----------------------------------------------------------

// Super Mario

const mario = document.querySelector(".mario");
const road = document.querySelector(".road");
const map = document.querySelector(".map");

let roadMove;

road.addEventListener("mousedown", () => {
  mario.src = "mario_running.gif";
  roadMove = document
    .querySelector(".road")
    .animate(
      [{ transform: "translateX(0vw)" }, { transform: "translateX(-20vw)" }],
      {
        duration: 2000,
        iterations: Infinity,
      }
    );
});
road.addEventListener("mouseup", () => {
  mario.src = "mario.png";
  roadMove.pause();
});
