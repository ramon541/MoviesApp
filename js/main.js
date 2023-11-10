const key = "d255ae32";
let movieNameRef = document.querySelector(".searchInput");
let card = document.getElementById("filmCard");

document.getElementById("searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(movieNameRef.value);
  movieNameRef.value = "";
});
