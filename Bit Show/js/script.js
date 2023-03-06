const showList = document.querySelector(".show-list");
const showListWrap = document.querySelector(".show-list-wrap");
const searchInput = document.querySelector("#search-input");

const bitShow = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();
  console.log(data);

  data.forEach((element) => {
    const html = `
  <a href="#" class="show-list-item" data-name="${element.name}"  data-show-id="${element.id}">
    <img class="cardImg" src="${element.image.original}">
    <h1>${element.name}</h1>
  </a>
`;
    // console.log(element.id);
    showListWrap.insertAdjacentHTML("afterbegin", html);
  });

  const showListItems = document.querySelectorAll(".show-list-item");
  showListItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const showId = item.dataset.showId;
      window.location.href = `./show-info-page.html?id=${showId}`;
      // console.log(item);
    });
  });
};

window.addEventListener("load", bitShow);

// bitShow();

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();
  const showListAll = document.querySelectorAll(".show-list-item");

  // console.log(filter);
  showListAll.forEach((item) => {
    let name = item.dataset.name.toLowerCase();
    if (name.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

// let searchResults = function () {
//   return searchInput.value;
// };
