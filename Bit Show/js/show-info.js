const movieWrap = document.querySelector(".movie-wrap");

const showInfoPage = async () => {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  // let name = dataMain.name;

  const urlMain = `https://api.tvmaze.com/shows/${id}`;
  const urlSeasons = `https://api.tvmaze.com/shows/${id}/seasons`;
  const urlCast = `https://api.tvmaze.com/shows/${id}/cast`;

  // console.log(name);

  const resMain = await fetch(urlMain);
  const dataMain = await resMain.json();

  const resSeasons = await fetch(urlSeasons);
  const dataSeasons = await resSeasons.json();

  const resCast = await fetch(urlCast);
  const dataCast = await resCast.json();

  // display the name of the movie
  const nameElement = document.querySelector(".movie-name");
  nameElement.textContent = dataMain.name;

  // let name = data.name;
  console.log(dataMain);
  console.log(dataSeasons);
  console.log(dataCast);
  // display the rest of the movie info
  // ...

  let html = `
  <div class="img-and-seasons">
  <img class="infoImg" src="${dataMain.image.original}" alt="" />
  <div class="seasons-and-cast">
  <div class="seasons-wrap">
  <h2>Seasons (${dataSeasons.length})</h2>
  <ul class="ulSeasons">
  
  </ul>
  </div>
  <div class="cast-wrap">
  <h2>Cast</h2>
  <ul class="ulCast">
  
  </ul>
  </div>
  </div>
  </div>

  <div class="details">
  <h2 class="show-details">Show Details</h2>
  <div class="text-details">${dataMain.summary}</div>
</div>
  
  `;

  movieWrap.insertAdjacentHTML("afterbegin", html);

  const top6Cast = dataCast.slice(0, 6);
  const ulSeasons = document.querySelector(".ulSeasons");

  dataSeasons.forEach((element) => {
    let li = document.createElement("li");
    li.className = "season";
    let seasonsStartEnd = document.createTextNode(
      `${element.premiereDate} - ${element.endDate}`
    );

    li.appendChild(seasonsStartEnd);
    ulSeasons.appendChild(li);
  });

  top6Cast.forEach((item) => {
    const ulCast = document.querySelector(".ulCast");

    let liCast = document.createElement("li");
    liCast.className = "cast";
    let castName = document.createTextNode(`${item.person.name}`);
    let castImg = document.createElement("img");
    castImg.src = `${item.person.image.original}`;
    castImg.className = "castImg";

    liCast.appendChild(castName);
    liCast.appendChild(castImg);
    ulCast.appendChild(liCast);
  });
};

showInfoPage();
