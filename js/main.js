const key = "d255ae32";
let movieNameRef = document.getElementById("search-input");
let result = document.getElementById("result-search");
let list = document.getElementById("result-list");

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&plot=full&apikey=${key}&/`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="warning">Digite um nome de filme</h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //Se o filme existe na database
        if (data.Response == "True") {
          result.innerHTML = `
          <div class="info">
            <div class="add-movie">
              <img src="./img/SVG/plus.svg" alt="plus" />Adicionar na lista
            </div>
            <img
              src=${data.Poster}
              class="poster"
            />
            <div class="infos-movie">
              <h2 class="title-movie">${data.Title}</h2>
              <div class="texts">
                <p class="plot">
                  ${data.Plot}
                </p>
                <p><strong>Diretor: </strong>${data.Director}</p>
                <p><strong>Atores: </strong>${data.Actors}</p>
                <p><strong>Gênero: </strong>${data.Genre}</p>
                <p><strong>Data de lançamento:</strong>${data.Released}</p>
                <p><strong>Tempo de filme: </strong>${data.Runtime}</p>
              </div>
            </div>
          </div>
          `;
        } else {
          result.innerHTML = `<h3 class="warning">${data.Error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="warning">Algo deu errado!</h3>`;
      });
  }
};

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  getMovie();
  movieNameRef.value = "";
});
