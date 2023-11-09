

let form = document.querySelector(".buscador")
let input = document.querySelector("#busqueda")
let urlBuscador = ("https://api.themoviedb.org/3/search/movie?api_key=3c76d203320fc343d000e58ef85d7f65")

form.addEventListener("submit", function (e)) { 
    e.prevent();
    let valor = input.value;

    if (valor.length === 0){ //Si lo que ingresa esta vacio
        alert("El campo esta vacio! Por favor ingrese una busqueda para poder asistirlo");
    }
    else {
        realizarBusqueda(valor) //Va a ir a la funcion
        }
    };

function realizarBusqueda(terminoBusqueda) //terminoBusqueda es lo que va a buscar el usuario 
    fetch(urlBuscador + terminoBusqueda)
        .then(function(response) {
            return response.json();
    })
        .then(function(data) { 
            console.log(data);
            let arrayMovies = data.results; //Hace un array con los resultados de la API
            if (arrayMovies.length === 0) { //Si no encuentra ninguna pelicula
                peliculas +="<p>Disculpa! No pudimos encontrar datos que coincidan con tu busqueda</p>"
                listaMovies.innerHTML = peliculas
            } 
            else {
                // PREGUNTAR COMO HACER PARA DEVOLVER CADA PELICULA 
            }
    })
        .catch(function(error){
            console.log("")
        })
    