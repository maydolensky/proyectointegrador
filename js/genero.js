const url_genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=7bd62b07c70beb54f8320746a7049a45";
 
fetch (url_genres)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayGenres= data.genres;
        console.log(arrayGenres); 
        
        let listaGenres= document.querySelector(".contenedor_genres");
        let genres="";
        for(let i=0; i< 5; i++){
            genres += `<ul> <li> <h3> <a class="genre" href="./genero_detalles.html?id=${arrayGenres[i].id}">${arrayGenres[i].name}</a> </h3> </li> </ul>` ;
            
    }
        listaGenres.innerHTML= genres;
    })
    .catch(function(error){
        console.log("Error: " + error);
    })
