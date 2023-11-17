let generos = document.querySelector(".series_romcom")
MyAPIKey = "7bd62b07c70beb54f8320746a7049a45";
let URL_peliculas_discover= `https://api.themoviedb.org/3/discover/movie?api_key=${MyAPIKey}&query=${generos}`; 
let URL_series_discover = `https://api.themoviedb.org/3/discover/tv?api_key=${MyAPIKey}&query=${generos}`;
let nombreGenero = generos.dataset.nombre;

fetch(URL_peliculas_discover)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {     
        let arrayGenres = data.results;
        let contenido = "";
        console.log(arrayGenres)

        if (arrayGenres.length === 0) {
            mensaje_html.innerText = "Disculpa! No pudimos encontrar datos que coincidan con tu busqueda"
        }
        else {
            for (let i = 0; i < arrayGenres.length ; i++) {
                contenido +=  `<h2>${arrayGenres.title}</h2>
                    <article class="seriesv 1">
                        <a href="series_detalles.html"> <img src="./img/thesummeriturnedpretty.jpg" alt="The Summer I Turned Pretty"> </a>
                        <div class="infopeli">
                            <a href="./series_detalles.html">The Summer I Turned Pretty</a> <br>
                            <a href="./series_detalles.html">Estreno: 17/06/2022</a>
                            <i class="fa-solid fa-heart" style="color: #ff0000;"></i>
                        </div>
                    </article>`
        }}

        arrayGenres.innerHTML = contenido;
        //aca ponemos un if
    })
    
    .catch(function(error) {
        console.log("Error: " + error);
    })

