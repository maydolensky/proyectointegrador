MyAPIKey = "api_key=7bd62b07c70beb54f8320746a7049a45"; 
let baseURL = "https://api.themoviedb.org/3/"; 
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("busqueda"); //agarra el input

let URL_Buscador = baseURL + "search/movie?" + MyAPIKey;
let listaMovies = document.querySelector("#cuerpo")


fetch(URL_Buscador + '&query=' + busqueda) // es como dice la página que hay que hacer el url para buscar lo q pide el user
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let movie = data.results;
        let contenido = "";
            for (let i = 0; i < movie.length; i++) {
                if (movie.backdrop_path[i] === null){
                    console.log(i)
                }
                else {
                    let IMG_URL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    contenido += `<ul class="contenedor_resultados">
                    <li class="imagenes_buscador">
                        <article class="seriesv 1">
                            <a href= "./peliculas_detalles.html?${movie.id}">
                            <img src="${IMG_URL}" alt="img"> </a>
                            <p>${movie.original_title} (${movie.release_date}</p>
                        </article>
                    </li>
                </ul>`
                }

            }

let resultadoBusqueda = `<main class="cuerpo">
<h2 id="searchTitle">Buscaste: ${queryStringObj} <p id="searchTerm"></p></h2>
${contenido}</main>`

listaMovies.innerHTML = resultadoBusqueda
        })
//<div class="infopeli"> LO MISMO QUE ARRIBA PERO PARA SERIES
//<a href="./series_detalles.html">The Summer I Turned Pretty</a> <br>
//<a href="./series_detalles.html">
//</div>