MyAPIKey = "7bd62b07c70beb54f8320746a7049a45";
let baseURL = "https://api.themoviedb.org/3/";
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("busqueda"); //agarra el input //guarda el valor de mi clave
let IMG_URL = "https://image.tmdb.org/t/p/w500";

let URL_Buscador = baseURL + "search/movie?" + MyAPIKey;
let listaMovies = document.querySelector("#cuerpo")
let URL_peliculas = `https://api.themoviedb.org/3/search/movie?api_key=${MyAPIKey}&query=${busqueda}`
let URL_series = `https://api.themoviedb.org/3/search/tv?api_key=${MyAPIKey}&query=${busqueda}`
//url peliculas y url para seires (with genres)
//resultados de series = ver donde tenog que poner el texto

let loader = document.getElementById("loader");
loader.style.display = "block";


fetch(URL_peliculas) // es como dice la página que hay que hacer el url para buscar lo q pide el user
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {     
        let arrayMovies = data.results;
        let contenido = "";
        console.log(arrayMovies)

        let resultado_html = document.querySelector(".contenedor_resultados")
        let mensaje_html = document.querySelector(".mensaje_error")

        if (arrayMovies.length === 0) {
            mensaje_html.innerText = "Disculpa! No pudimos encontrar datos que coincidan con tu busqueda"
        }
        else {
            for (let i = 0; i < arrayMovies.length ; i++) {
                contenido += `<li class="imagenes_buscador">
                <article class="seriesv 1">
                    <a href="series_detalles.html"?id=${arrayMovies[i].id}> 
                    <img src="${IMG_URL}${arrayMovies[i].poster_path}" alt="${arrayMovies[i].title}"> </a>
                    <div class="infopeli">
                    <a href="peliculas_detalles.html?id=${arrayMovies[i].id}">${arrayMovies[i].title}</a>
                    </div>
                </article>
            </li>` 
        }}

        resultado_html.innerHTML = contenido;
        loader.style.display = "none";
    })
    
    .catch(function(error) {
        console.log("Error: " + error);
    })


    //Y SI PREGUNTA POR UN GENERO?