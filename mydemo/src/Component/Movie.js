import React from "react";

// const API_IGM="https://image.tmdb.org/t/p/w500/";

const Movie =({movie})=>{
    return(
        <div> 
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <img src={movie.poster_path}></img>
              <br></br>
            <rating>{movie.vote_average}</rating>
        </div>
    )
}
export default Movie;