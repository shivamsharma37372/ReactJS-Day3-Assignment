import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';


function App() {

  let [movie,setmovie] = useState(null);
  let [title,settitle] = useState("Guardians of the Galaxy Vol. 2");

useEffect(() => {

getmoviedata();

},[])


function readtitle(value){
  settitle(value);
}

function getmoviedata(){
  let url=`http://www.omdbapi.com/?t=${title}&apikey=73d3af09`;

  fetch(url)
  .then((response) => response.json())
  .then((movie) =>{
    console.log(movie);
    setmovie(movie);
  })
  .catch((err) =>{
    console.log(err);
  })
  
}

  return (
    <div className="container">
      <div className="pad">
        <h1>Movie Search</h1>
        <div className="input-grp">
          <input type="text" className="search-field" onChange={(e) =>{readtitle(e.target.value)}} placeholder="Enter movie name" />
          <button className="btn" onClick={getmoviedata}>Get Movie</button>
        </div>
        {
          movie?.Error===undefined?(
        
        <div className="movie">
          <div className="poster">
           <img src={movie?.Poster} className="poster-img"/>
          </div>
          <div className="details">
           <div className="pad">
             <h1>{movie?.Title}</h1>
             <p><strong>Type</strong> : {movie?.Type}</p>
             <p><strong>Genre</strong> : {movie?.Genre}</p>
             <p><strong>Language</strong> : {movie?.Language}</p>
             <p><strong>Director</strong> : {movie?.Director}</p>
             <p><strong>Plot</strong> : {movie?.Plot}</p>
             <p><strong>Cast</strong> : {movie?.Actors}</p>
             <p><strong>Released Date</strong> : {movie?.Released}</p>
             <p><strong>Runtime</strong> : {movie?.Runtime}</p>
             <p><strong>Box Office</strong> : {movie?.BoxOffice}</p>
             
              <div className="Ratings">
                {
                  movie?.Ratings.map((rating,index)=>(
                    <div key={index}> 
                    <strong>{rating.Source}</strong>
                    <h3>{rating.Value}</h3>
                  </div>
                  ))
                }
                

              </div>
           </div>
          </div>
        </div>

          ):
          (
            <h1>Movie Not Found</h1>
          )
        
        }
     </div>
    </div>
  );
}

export default App;
