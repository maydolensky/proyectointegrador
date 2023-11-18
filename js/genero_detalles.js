let generos = document.querySelector(".series_romcom");
let MyAPIKey = "7bd62b07c70beb54f8320746a7049a45";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_genero = qsObj.get("id");
let nombreGenero = generos.dataset.nombre;

let URL_peliculas_discover = `https://api.themoviedb.org/3/discover/movie?api_key=${MyAPIKey}&with_genres=${id_genero}`;
let URL_series_discover = `https://api.themoviedb.org/3/discover/tv?api_key=${MyAPIKey}&with_genres=${id_genero}`;
let IMG_URL = "https://image.tmdb.org/t/p/w500";

fetch(URL_peliculas_discover)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let arrayGenres = data.results;
        let contenido = "";
        console.log(arrayGenres);

        if (arrayGenres.length === 0) {
            // Puedes ajustar este mensaje según tus necesidades
            console.log("Disculpa! No pudimos encontrar datos que coincidan con tu búsqueda");
        } else {
            for (let i = 0; i < 14; i++) {
                contenido += `<article class="populares">
                                <div class="infopelis"> 
                                    <a href="./series_detalles.html?id=${arrayGenres[i].id}">
                                        <img src="${IMG_URL}${arrayGenres[i].poster_path}" alt="${arrayGenres[i].title}">
                                    </a>
                                    <h3>
                                        <a href="./series_detalles.html?id=${arrayGenres[i].id}">${arrayGenres[i].title}</a>
                                    </h3>
                                    <p class="release-date">
                                        <a href="./series_detalles.html?id=${arrayGenres[i].id}">Release Date: ${arrayGenres[i].release_date}</a>
                                    </p>
                                </div>
                            </article>`;
            }

            // Agregar el contenido al elemento con clase "series_romcom"
            let seriesRomcomElement = document.querySelector(".series_romcom");
            seriesRomcomElement.innerHTML = contenido;
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
