import React from 'react';
import MovieSquare from './MovieSquare.jsx';
import Grid from '@material-ui/core/Grid';
import env from 'react-dotenv';

class MovieBody extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    async componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key='+env.API_KEY+'&language=en-US&page=1')
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
                <Grid container direction="">
                {movieComponents}
                </Grid>
            </div>
        );
    }
}

export default MovieBody;