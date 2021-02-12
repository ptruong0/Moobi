import React from 'react';

import StarRatings from 'react-star-ratings';

const base_img_url = 'https://image.tmdb.org/t/p/w500'

function MovieSquare(props) {
    const stars = props.movie.vote_average / 2;
    const overview = props.movie.overview;
    return (
        <div className="square col-md-3">
            <h5 className="movie-title">{props.movie.title}</h5>
            <img 
            src={base_img_url + props.movie.poster_path} 
            alt=""
            className="poster-img"
            height="300"
            width="200"
            />
            <p className="description" >{overview}</p>
            <StarRatings rating={stars} starRatedColor="yellow" starDimension="30px" className="star-ratings"/>
        </div>
    );
}

export default MovieSquare;