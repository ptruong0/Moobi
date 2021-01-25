import React from 'react';
import MovieSquare from './MovieSquare.jsx';

class MovieBody extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.api_key = '66c7dffb7d1824e07f936689453f6be8'
    }

    async componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key='+this.api_key+'&language=en-US&page=1')
        .then(res => res.json())
        .then(
            (res) => {
                console.log(res.results);
                this.setState({
                    movies: res.results
                });
            })
        .catch((err) => {
            console.log(err)
        });
    }

    render() {
        var movieComponents = this.state.movies.map(
            (movie) => <MovieSquare key={movie.id} movie={movie}/>
        )
        return (
            <div className="movie-grid">
                {movieComponents}
            </div>
        );
    }
}

export default MovieBody;