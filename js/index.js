let APIKey = "api_key=7bd62b07c70beb54f8320746a7049a45"; 
let baseURL = "https://api.themoviedb.org/3/"; 
let IMG_URL = "https://image.tmdb.org/t/p/w500";

//necesarios para llamar a las funciones para home
let API_URL_pelispopulares = baseURL + "movie/popular?" + APIKey;
let API_URL_pelisvaloradas = baseURL + "movie/top_rated?" + APIKey;
let API_URL_seriespopulares = baseURL + "tv/popular?" + APIKey;

function getMovies(url, category, title) {
    //la vamos a usar para obtener la información de la API, entenderla y usarla    
    fetch(url)
        .then(function(response) {
            return response.json();
    })
        .then(function(data) { 
            console.log(data);
            showMovies(data.results, category, title);           
        });

}

function showMovies(data, category, title) {
//nos va a servir para modularizar los resultados que queremos obtener de la API
    // Agrega un título específico
    let titleEl = document.createElement('h2');
    titleEl.innerText = title;
    main.appendChild(titleEl);

    data.forEach(function(movie) {
        //substrae la info que vamos a necesitar
        let title = movie.title 
        let poster_path = movie.poster_path;
        let vote_average = movie.vote_average;
        let release_date = movie.release_date 
        let mediaType = movie.media_type; // Agregado para distinguir entre películas y series

        let movieEl = document.createElement('article'); //crea un article
        movieEl.classList.add(category); //le pone una clase

        let linkEl = document.createElement('a'); //nos envía al detalle de series o pelis
        if (mediaType === 'movie') {
            linkEl.href = './peliculas_detalles.html';
        } else if (mediaType === 'tv') {
            linkEl.href = './series_detalles.html';
        }          

        let imgEl = document.createElement('img'); //permite ver la img
        imgEl.src = poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/1080x1580";
        imgEl.alt = title;

        linkEl.appendChild(imgEl);

        let infoPeliEl = document.createElement('div');//crea un div y su clave
        infoPeliEl.classList.add('infopeli');

        let nameLinkEl = document.createElement('a');
        if (mediaType === 'movie') {
            nameLinkEl.href = './peliculas_detalles.html';
        } else if (mediaType === 'tv') {
            nameLinkEl.href = './series_detalles.html';
        }
        nameLinkEl.innerText = title;        

        let releaseLinkEl = document.createElement('a');
        if (mediaType === 'movie') {
            releaseLinkEl.href = './peliculas_detalles.html';
        } else if (mediaType === 'tv') {
            releaseLinkEl.href = './series_detalles.html';
        }
        releaseLinkEl.innerText = 'Estreno: ' + release_date;

        let heartIconEl = document.createElement('i');
        heartIconEl.classList.add('fa-solid', 'fa-heart');
        heartIconEl.style.color = '#ff0000';

        infoPeliEl.appendChild(nameLinkEl);
        infoPeliEl.appendChild(document.createElement('br'));
        infoPeliEl.appendChild(releaseLinkEl);
        infoPeliEl.appendChild(heartIconEl);

        movieEl.appendChild(linkEl);
        movieEl.appendChild(infoPeliEl);



        main.appendChild(movieEl);
    });
    };

//llamo a las funciones 
getMovies(API_URL_pelispopulares, 'populares', 'Películas Populares')
getMovies(API_URL_pelisvaloradas, 'valoradas', 'Películas Valoradas');
getMovies(API_URL_seriespopulares, 'populares', 'Series Populares');
// fetch("https://api.themoviedb.org/3/tv/popular?api_key=7bd62b07c70beb54f8320746a7049a45")
//     .then(function (res) {
//         return res.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })