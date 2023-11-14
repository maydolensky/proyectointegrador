let URL_detallepeli = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=api_key=7bd62b07c70beb54f8320746a7049a45}`

fetch (URL_detallepeli)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayDetallesPeli= data.results;
        console.log(arrayDetallesPeli); 
        let listaMovies= document.querySelector(".contenedor_peliculas");
        let peliculas=""