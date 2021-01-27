import React from 'react';

const base_img_url = 'https://image.tmdb.org/t/p/w500'

function MovieSquare(props) {
    return (
        <div className="square col-md-3">
            <h3 className="movie-title">{props.movie.title}</h3>
            <img 
            src={base_img_url + props.movie.poster_path} 
            alt=""
            className="poster-img"
            height="300"
            width="200"
            />
            <p>{props.movie.overview}</p>
        </div>
    );
}

export default MovieSquare;