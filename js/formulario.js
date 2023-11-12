let form = document.querySelector(".buscador")
let input = document.querySelector("#busqueda")
let buscaste = document.querySelector(".rta_buscador") //agarra el h2 que aparece diciendo 'buscaste'
let urlBuscador = ("https://api.themoviedb.org/3/search/movie?api_key=3c76d203320fc343d000e58ef85d7f65")//pelis



form.addEventListener('submit', function(e) { 
    e.preventDefault();
    let search = input.value

    if (search !== "") {
        fetch(`${urlBuscador}&query=${search}`)
        .then(function(response) {
            return response.json()
      })
      .then(function(data) {
            console.log(data);
            buscaste.innerText= `Buscaste: ${search}`
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