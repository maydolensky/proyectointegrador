let form = document.querySelector(".buscador")
let input = document.querySelector("#busqueda")
let urlBuscador = ("https://api.themoviedb.org/3/search/movie?api_key=3c76d203320fc343d000e58ef85d7f65")



form.addEventListener("submit", function(e) { 
    e.preventDefault();
    let valor = input.value;

    if (valor !== "") {
        this.submit();
    }
    else {
        let mensaje = "El campo esta vacio! Por favor ingrese una busqueda para poder asistirlo"
        alert(mensaje);
    }})
    
