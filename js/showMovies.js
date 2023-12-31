import { connectApi } from "./apiConnection.js";

const list = document.querySelector("#movies-container");
const resultList = document.querySelector("#result-list");

const buttonWatch = document.querySelector(".to-attend");
const buttonWatched = document.querySelector(".watched");

const deleteCard = document.querySelector(".delete-card");

function creatCard(img, title, genre, runtime) {
  const movie = document.createElement("li");
  movie.className = "movie-to-watch";

  movie.innerHTML = `
    <img src="${img}" class="banner-movie" alt=""/>
    <div class="description">
      <h1 class="movie-name">${title}</h1>
      <p class="movie-tags"><strong>Gênero: </strong>${genre}</p>
      <p class="movie-tags"><strong>Tempo de filme: </strong>${runtime}</p>
    </div>
    <img src="./img/PNG/marca-x.png" class="delete-card" alt""></img> 
  `;

  return movie;
}

function deleteCardToWatch

async function watchMoviesList() {
  try {
    const apiList = await connectApi.watchList();
    if (apiList.length == 0) {
      resultList.innerHTML = `<p class="no-movies">Nada por aqui</p>`;
    } else {
      apiList.forEach((element) =>
        list.appendChild(
          creatCard(element.img, element.title, element.genre, element.runtime)
        )
      );
    }
  } catch {
    resultList.innerHTML = `<h3 class="warning">Algo deu errado!</h3>`;
  }
}

async function watchedMoviesList() {
  try {
    const apiList = await connectApi.watchedList();
    if (apiList.length == 0) {
      resultList.innerHTML = `<p class="no-movies">Nada por aqui</p>`;
    } else {
      apiList.forEach((element) =>
        list.appendChild(
          creatCard(element.img, element.title, element.genre, element.runtime)
        )
      );
    }
  } catch {
    resultList.innerHTML = `<h3 class="warning">Algo deu errado!</h3>`;
  }
}

watchMoviesList();

buttonWatch.addEventListener("click", watchMoviesList);

buttonWatched.addEventListener("click", watchedMoviesList);

deleteCard.addEventListener("click", )