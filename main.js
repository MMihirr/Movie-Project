// https://api.themoviedb.org/3/discover/movie?api_key=5f7eab9027cab7dbda9e5415718597b1
// https://image.tmdb.org/t/p/w500

//http://www.omdbapi.com/?i=tt3896198&apikey=60cabb31
//https://www.omdbapi.com/?s=spiderman&page=3&apikey=60cabb31

const APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=5f7eab9027cab7dbda9e5415718597b1&page=1'
const IMGURL = 'https://image.tmdb.org/t/p/w500'

const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=5f7eab9027cab7dbda9e5415718597b1&query='


getMovies(APIURL);

async function getMovies(APIURL){
    const response = await fetch(APIURL);
    const resData = await response.json();
    //console.log(resData)
    showMovies(resData.results);
}

function showMovies(movies){
    //console.log(movies)
    let data = '';
    movies.forEach((movies) => {
        data += `<div class="card">
        <h1 class="title">${movies.title}</h1>
        <img src= ${IMGURL+movies.poster_path} alt="img" class="poster">
        <p class="rating">Rating : ${movies.vote_average} </p>
        <p class="date">Realease date : ${movies.release_date
        } </p>
        <div class="overview">
            <h3>Overview</h3>
        ${movies.overview} </div>
        
    </div>`

    document.getElementById('movies').innerHTML = data;
        
    });
}

document.querySelector('#search').addEventListener(
    "keyup",
    function(event){
        if (event.target.value != ""){
            getMovies(SEARCHAPI + event.target.value);
        }
        else{
            getMovies(APIURL);
        }
    }
)