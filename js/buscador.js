
let MyAPIKey = "api_key=7bd62b07c70beb54f8320746a7049a45"; 
let baseURL = "https://api.themoviedb.org/3/"; 
let IMG_URL = "https://image.tmdb.org/t/p/w500";
let URL_Buscador = baseURL + "search/movie?" + MyAPIKey;



let tituloResultado = document.querySelector("h2");
let listaMovies = document.querySelector(".contenedor_resultados"); // TODA LA UL, TENDR´A LA INFO DE LAS PELIS
let listaSeries = document.querySelector(".contenedor_resultados"); // TODA LA UL, TENDR´A LA INFO DE LAS PELIS


document.querySelector('.buscador').addEventListener('submit', function (e) { // al form


    console.log('------ -HOLAAAAAAAAAAAAAAAAAAAA: '+arrayMovies);


    e.preventDefault();
    
    let search = document.querySelector('#busqueda').value; //lo que buscó el user
    let peliculas= '';
    let series = " ";
    
    if (search !== ''){
        tituloResultado.innerText += `Buscaste: ${search}`;
    }

          //PARA LAS MOVIES
          fetch(URL_Buscador + '&query=' + search) // es como dice la página que hay que hacer el url para buscar lo q pide el user
            .then(function(response) {
                    return response.json();
            })
            .then(function(data) {  
              console.log('--- viene de buscador.js: '+ data);

              let arrayMovies = data.results; //Hace un array con los resultados de la API
              console.log('------ viene de buscador : arrayMovies: '+arrayMovies);
              let i=0;


              if (arrayMovies.length === 0) { //Si no encuentra ninguna pelicula
                peliculas = "<p>Disculpa! No pudimos encontrar datos que coincidan con tu busqueda</p>"  
              }  else { //SI ENCONTRAMOS:
                // Limpiamos el contenido existente
                listaMovies.innerHTML = ""; // SE BORA TODA LA INFO DEL UL
            
                // Iteramos sobre cada película en el array-> arrayMovies.forEach(function(movie) {
                
                
                while(i  < arrayMovies.length) {

                        peliculas +=  ` <article class="seriesv 1">
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
                    </article> ` ;
                    i ++;
                    }
                }
                
                listaMovies.innerHTML = peliculas
                })
                .catch(function(error){
                    console.error("Error al realizar la búsqueda:", error);
                
  })
    
  .catch(function(error){
      console.error("Error al realizar la búsqueda:", error);

  });

    // AHORA PARA LAS SERIES:
    fetch(URL_Buscador + '&query=' + search)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);

            let arraySeries = data.results; //Hace un array con los resultados de la API
            console.log(arraySeries);
            let i= 0;

            if (arraySeries.length === 0) { //Si no encuentra ninguna pelicula
                series ="<p>Disculpa! No pudimos encontrar datos que coincidan con tu busqueda</p>"
            } else{ 
                listaSeries.innerHTML= '';
                
                
            while (i < arraySeries.length){

                series+=   `
                    <article class="seriesv 1">
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
                    i++;

                }



        } listaSeries.innerHTML = series;

    })
    .catch(function(error) {
        console.error("Error al realizar la búsqueda:", error);
})



});