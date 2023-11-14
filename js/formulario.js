let form = document.querySelector(".buscador")
let inputSearch = document.getElementById("busqueda") //input
let searchTerm= document.getElementById('searchTerm')  //agarra el h2 que aparece diciendo 'buscaste'
let urlBuscador = ("https://api.themoviedb.org/3/search/movie?api_key=3c76d203320fc343d000e58ef85d7f65")//pelis


//console.log('busddddddddcaste :' + buscaste.innerText); //prueba

console.log('inputSearch:', inputSearch);
console.log('searchTerm:', searchTerm);

form.addEventListener('submit', function(e) { 
    e.preventDefault();
    let search = inputSearch.value //variable con lo que buscó el us.
    console.log("search>>>>>>: " + search);

    if (search !== "") {
        fetch(`${urlBuscador}&query=${search}`) //url de la api
        .then(function(response) {
            return response.json()
      })
      .then(function(data) {
        searchTerm.textContent = search;
        console.log('Respuesta:', data); // Response de la API en base al search
        console.log(`Encontraste algo en el HTML ===: ${searchTerm.textContent}`);
        console.log("Buscaste: " + search);
      })
      .catch(function(error) {
            console.log('Error al realizar la búsqueda:', error);
      })

           
    }
    else {
        let mensaje = "El campo esta vacio! Por favor ingrese una busqueda para poder asistirlo"
        alert(mensaje);
    }})
    
// .then()
//buscaste.innerText= `Buscaste: ${search}`