const url_genres = "https://api.themoviedb.org/3/genre/movie/list"
 
fetch (url_genres)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayGenres= data.data;
        console.log(arrayGenres); 
        
        let listaGenres= document.querySelector(".contenedor_genres");
        let genres=""
        for(let i=1; i< 5; i++){
            genres += `<ul> <li> <h3> <a class="genre" href="./detail-genres.html?id=${arrayGenres[i].id}">${arrayGenres[i].name}</a> </h3> </li> </ul>
            
            <a class="genre" href="./detail-genres.html?id=${arrayGenres[i].id}"><img src="${arrayGenres[i].picture}" alt="${arrayGenres[i].name}"></a>`
    }
        listaGenres.innerHTML= genres 
    })
    .catch(function(error){
        console.log("Error: " + error);
    })
