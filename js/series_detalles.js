let APIKey = "api_key=7bd62b07c70beb54f8320746a7049a45";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_series = qsObj.get("id");

let URL_detalleseries = `https://api.themoviedb.org/3/tv/${id_series}?api_key=7bd62b07c70beb54f8320746a7049a45`;
let IMG_URL = "https://image.tmdb.org/t/p/w500";

fetch(URL_detalleseries)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let listaSeries = document.querySelector(".contenedor_series");
    let arrayDetallesSeries = data;
    console.log(arrayDetallesSeries);

    let genreNames = "";
        for (let i = 0; i < arrayDetallesSeries.genres.length; i++) {
        genreNames += `<a href="./genero_detalles.html?id=${arrayDetallesSeries.genres[i].id}">${arrayDetallesSeries.genres[i].name}</a>`;
        if (i < arrayDetallesSeries.genres.length - 1) {
            genreNames += ', ';
        }
    }

    let series = "";
    series +=
      `<section class="imagenes_sola">
          <h2>${genreNames}</h2>
          <article class="fotogrande">
              <img src="${IMG_URL}${arrayDetallesSeries.poster_path}" alt="${arrayDetallesSeries.name}">
              <div class="infopelisgrande">
                  <a href=""><h2>${arrayDetallesSeries.name}</h2></a>
                  <p class="detalle">Estreno: ${arrayDetallesSeries.release_date}</p>
                  <p class="detalle">Sinopsis: ${arrayDetallesSeries.overview}</p>
                  <p class="detalle">Duración: ${arrayDetallesSeries.runtime} min</p>
                  <p class="detalle">Calificación: <span class="star">&#9733;</span> ${arrayDetallesSeries.vote_average}</p>
              </div>
          </article>
      </section>`;

    listaSeries.innerHTML += series;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });