import { connectApi } from "./apiConnection.js";

async function addMovieToWatch() {
  const image = document.querySelector(".poster").src;
  const title = document.querySelector(".title-movie").innerHTML;
  const genre = document.querySelector(".genre").innerHTML;
  const runtime = document.querySelector(".runtime").innerHTML;

  //Refatorar para enviar um objeto, contendo esses elementos
  await connectApi.createMovie(image, title, genre, runtime);
}

//Precisa alterar para pegar as informações do filme assistido
async function addMovieWatched() {
  const image = document.querySelector(".poster").src;
  const title = document.querySelector(".title-movie").innerHTML;
  const genre = document.querySelector(".genre").innerHTML;
  const runtime = document.querySelector(".runtime").innerHTML;

  await connectApi.createMovie(image, title, genre, runtime);
}

export const addMovie = {
  addMovieToWatch,
  addMovieWatched,
};
