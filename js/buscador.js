let APIKey = "api_key=7bd62b07c70beb54f8320746a7049a45"; 
let baseURL = "https://api.themoviedb.org/3/"; 
let IMG_URL = "https://image.tmdb.org/t/p/w500";
let URL_Buscador = baseURL + "search/movie?" + APIKey;

let peliculas = "";
let series = "";
let tituloResultado = document.querySelector("h2");
let listaMovies = document.getElementById(".contenedorResultados"); 
tituloResultado.innerText += `${URL_Buscador}`


fetch(URL_Buscador)
    .then(function(response) {
            return response.json();
})
    .then(function(data) { 
        console.log(data);
        let arrayMovies = data.results; //Hace un array con los resultados de la API
        
        if (arrayMovies.length === 0) { //Si no encuentra ninguna pelicula
            peliculas ="<p>Disculpa! No pudimos encontrar datos que coincidan con tu busqueda</p>"
            ///listaMovies.innerHTML = peliculas (creo que no va)
        } 
        else {
            // Limpiamos el contenido existente
            listaMovies.innerHTML = "";

            // Iteramos sobre cada película en el array
            arrayMovies.forEach(function(movie) {
                // Creamos un nuevo elemento de película
                let movieElement = document.createElement("article");
                movieElement.classList.add("pelicula");

                // Contenido de la película
                movieElement.innerHTML = `
                    <h3><a class="nombre-pelicula" href="./detallepelicula.html?id=${movie.id}">${movie.title}</a></h3>
                    <a class="nombre-pelicula" href="./detallepelicula.html?id=${movie.id}">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    </a>
                    <article class="bloque-pelicula-datos">
                        <p>${movie.overview}</p>
                        <p>Fecha de lanzamiento: ${movie.release_date}</p>
                    </article>`;

                // Agregamos el elemento de película al contenedor
                listaMovies.appendChild(movieElement);
            });

        }
})
    .catch(function(error){
        console.error("Error al realizar la búsqueda:", error);
    })
}