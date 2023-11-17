let APIKey= "api_key=7bd62b07c70beb54f8320746a7049a45";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("id");

let URL_detallepeli = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=7bd62b07c70beb54f8320746a7049a45`;
let IMG_URL = "https://image.tmdb.org/t/p/w500";

fetch (URL_detallepeli)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let listaMovies= document.querySelector(".contenedor_peliculas");
        let arrayDetallesPeli= data;
        console.log(arrayDetallesPeli); 
        
        let peliculas=""
        peliculas += 
        `<section class="imagenes_sola">
            <a href="${URL_detallepeli}"><h2>Genero</h2></a>
            <article class="fotogrande">
                <img src="${IMG_URL}${arrayDetallesPeli.poster_path}" alt="${arrayDetallesPeli.title}">
                <div class="infopelisgrande">
                    <a href=""><h2>${arrayDetallesPeli.title}</h2></a>
                    <p class="detalle">Estreno: ${arrayDetallesPeli.release_date}</p>
                    <p class="detalle">Sinopsis: ${arrayDetallesPeli.overview}</p>
                    <p class="detalle">Duración: ${arrayDetallesPeli.runtime} min</p>
                    <p class="detalle">Calificación: <span class="star">&#9733;</span> ${arrayDetallesPeli.vote_average}</p>
                </div>
            </article>
        </section>`;
            
            listaMovies.innerHTML+= peliculas //envia a lista movies lo que pusimos en peliculas
        ;})

        .catch(function(error){
            console.log( "Error: " + error);
        })