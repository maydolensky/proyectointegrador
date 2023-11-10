let APIKey = "api_key=7bd62b07c70beb54f8320746a7049a45"; 
let baseURL = "https://api.themoviedb.org/3/"; 
let IMG_URL = "https://image.tmdb.org/t/p/w500";

//necesarios para llamar a las funciones para home
let API_URL_pelispopulares = baseURL + "movie/popular?" + APIKey;
let API_URL_pelisvaloradas = baseURL + "movie/top_rated?" + APIKey;
let API_URL_seriespopulares = baseURL + "tv/popular?" + APIKey;

fetch (API_URL_pelispopulares)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayMovies= data.results;
        console.log(arrayMovies); 
        
        let listaMovies= document.querySelector("#main");
        let peliculas=""
        for (let i = 0; i < 20; i++) {
            peliculas += `
                <article class="populares">
                    <div class="infopelis"> 
                        <a href="peliculas_detalles.html?id=${arrayMovies[i].id}">
                            <img src="${IMG_URL}${arrayMovies[i].poster_path}" alt="${arrayMovies[i].title}">
                        </a>
                        <h3>
                            <a href="peliculas_detalles.html?id=${arrayMovies[i].id}">${arrayMovies[i].title}</a>
                        </h3>
                        <p class="release-date">
                            <a href="peliculas_detalles.html?id=${arrayMovies[i].id}">${arrayMovies[i].release_date}</a>
                        </p>
                    </div>
                </article>`;
        }
        listaMovies.innerHTML= peliculas
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })

    fetch (API_URL_pelisvaloradas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayMovies= data.results;
        console.log(arrayMovies); 
        
        let listaMovies= document.querySelector("#val");
        let peliculas=""
        for (let i = 0; i < 20; i++) {
            peliculas += `
                <article class="populares">
                    <div class="infopelis"> 
                        <a href="peliculas_detalle.html?id=${arrayMovies[i].id}">
                            <img src="${IMG_URL}${arrayMovies[i].poster_path}" alt="${arrayMovies[i].title}">
                        </a>
                        <h3>
                            <a href="peliculas_detalle.html?id=${arrayMovies[i].id}">${arrayMovies[i].title}</a>
                        </h3>
                        <p class="release-date">
                            <a href="peliculas_detalles.html?id=${arrayMovies[i].id}">${arrayMovies[i].release_date}</a>
                        </p>
                    </div>
                </article>`;
        }
        listaMovies.innerHTML= peliculas
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })

    fetch(API_URL_seriespopulares)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let arraySeries = data.results;
        console.log(arraySeries);

        let listaSeries = document.querySelector("#pop");
        let series = "";
        for (let i = 0; i < 20; i++) {
            series += `
                <article class="populares">
                    <div class="infopelis"> 
                        <a href="series_detalles.html?id=${arraySeries[i].id}">
                            <img src="${IMG_URL}${arraySeries[i].poster_path}" alt="${arraySeries[i].title}">
                        </a>
                        <h3>
                            <a href="series_detalles.html?id=${arraySeries[i].id}">${arraySeries[i].title}</a>
                        </h3>
                        <p class="release-date">
                            <a href="series_detalles.html?id=${arraySeries[i].id}">${arraySeries[i].release_date}</a>
                        </p>
                    </div>
                </article>`;
        }
        listaSeries.innerHTML = series;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
