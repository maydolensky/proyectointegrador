let url_genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=7bd62b07c70beb54f8320746a7049a45";
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("busqueda"); //agarra el input //guarda el valor de mi clave
let IMG_URL = "https://image.tmdb.org/t/p/w500";


fetch(url_genres)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); // Log the entire data structure to the console

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
