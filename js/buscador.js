let form = document.querySelector(".buscador")
let input = document.querySelector("#busqueda")
let urlBuscador = ("https://api.themoviedb.org/3/search/movie?api_key=3c76d203320fc343d000e58ef85d7f65")
let listaMovies = document.getElementById("listaMovies"); 


form.addEventListener("submit", function (e) { 
    e.preventDefault();
    let valor = input.value;

    if (valor.length === 0){ //Si lo que ingresa esta vacio
        alert("El campo esta vacio! Por favor ingrese una busqueda para poder asistirlo");
    }
    else {
        // Nos redirige a la página de resultados con el término de búsqueda como parámetro
        window.location.href = `resultados.html?q=${valor}`;
        }
    });

// Agregamos esta función para realizar la búsqueda en la página de resultados
function realizarBusqueda(terminoBusqueda){ //terminoBusqueda es lo que va a buscar el usuario 
    fetch(urlBuscador + terminoBusqueda)
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