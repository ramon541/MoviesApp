async function watchList() {
  const connection = await fetch("http://localhost:3000/watchList");
  const convertedConnection = await connection.json();

  return convertedConnection;
}

async function createMovie(img, title, genre, runtime) {
  const connection = await fetch("http://localhost:3000/watchList", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      img: img,
      title: title,
      genre: genre,
      runtime: runtime,
    }),
  });

  const convertedConnection = await connection.json();
  return convertedConnection;
}

export const connectApi = {
  watchList,
  createMovie,
};
