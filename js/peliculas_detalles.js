let URL_detallepeli = https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=api_key=7bd62b07c70beb54f8320746a7049a45}
console.log(URL_detallepeli)

fetch (URL_detallepeli)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayDetallesPeli= data.results;
        console.log(arrayDetallesPeli); 
        let listaMovies= document.querySelector(".contenedor_peliculas");
        
        let peliculas=""
        peliculas += `
        <div class="contenedor_peliculas"> 

            <section class="imagenes_sola">
                <a href="URL_detallepeli?id=${listaMovies.id}"><h2>Genero</h2></a>
                    <article class="fotogrande">
                        <img src="${IMG_URL}${listaMovies.poster_path}" alt="${listaMovies.title}">
                        
                        <div class="infoseriegrande">
                            <a href=""><h2>Titulo</h2></a> <br>
                            <a href="URL_detallepeli?id=${listaMovies.id}">${listaMovies.release_date}">Estreno</a>
                            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
                            <p class="data_peli">
                                <a href="URL_detallepeli?id=${listaMovies.id}">${listaMovies.overview}</a>
                            </p>
                            <p class="Duración">
                                //NO ENCONTRE EL DE DURACION
                            </p>
                            <p class="Rating">
                                <a href="URL_detallepeli?id=${listaMovies.id}">${listaMovies.vote_average}</a>
                            </p>
                        </div>
                    </article>
            </section>
        </div>   ` 
        listaMovies.innerHTML+= peliculas //envia a lista movies lo que pusimos en peliculas
        ;})

        .catch(function(error){
            console.log( "Error: " + error);
        })