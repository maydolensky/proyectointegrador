let url_genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=7bd62b07c70beb54f8320746a7049a45";
let url_genres_series= "https://api.themoviedb.org/3/genre/tv/list?api_key=7bd62b07c70beb54f8320746a7049a45";
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("busqueda"); 
let IMG_URL = "https://image.tmdb.org/t/p/w500"; //NO QUITAAAR


fetch(url_genres)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); 

    let arrayGenres = data.genres;
    console.log(arrayGenres);

    let listaGenres = document.querySelector(".contengo_generos");
    let genres = "";

    for (let i = 0; i < 5; i++) {
      genres += `<article class="bloque_de_generos"> 
                    <ul class="contenedor_genres"> 
                        <li> 
                            <h2> 
                                <a class="genero" href="./genero_detalles.html?id=${arrayGenres[i].id}">${arrayGenres[i].name}</a> 
                            </h2> 
                        </li> 
                    </ul>
                </article>`;
    }

    listaGenres.innerHTML = genres;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });


fetch(url_genres_series)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); 

    let arrayGenresS = data.genres;
    console.log(arrayGenresS);

    let listaGenresS = document.querySelector(".contengo_generos_series");
    let genres = "";

    for (let i = 0; i < 5; i++) {
      genres += `<article class="bloque_de_generos"> 
                    <ul class="contenedor_genres"> 
                        <li> 
                            <h2> 
                                <a class="genero" href="./genero_detalles.html?id=${arrayGenresS[i].id}">${arrayGenresS[i].name}</a> 
                            </h2> 
                        </li> 
                    </ul>
                </article>`;
    }

    listaGenresS.innerHTML = genres;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
