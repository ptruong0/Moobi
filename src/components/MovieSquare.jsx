import React from 'react';

const base_img_url = 'https://image.tmdb.org/t/p/w500'

function MovieSquare(props) {
    return (
        <div className="square col-md-3">
            <h3 id="movie-title">{props.movie.title}</h3>
            <img 
            src={base_img_url + props.movie.poster_path} 
            alt=""
            id="poster_img"
            height="300"
            width="200"
            />
            <p>{props.movie.overview}</p>
        </div>
    );
}

export default MovieSquare;