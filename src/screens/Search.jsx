import { render } from '@testing-library/react';
import React from 'react';
import env from 'react-dotenv';
import Grid from '@material-ui/core/Grid';

import MovieSquare from '../components/MovieSquare.jsx';
import SearchBar from '../components/SearchBar.jsx';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchedMovies: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.querySelector('#search-form');
        const query = form.search.value;
        if (query != "") {
            console.log(query);
            fetch('https://api.themoviedb.org/3/search/movie?api_key=' + env.API_KEY + '&language=en-US&page=1&include_adult=false&query=' + query)
                .then(res => res.json())
                .then((res) => {
                    console.log(res.results);
                    this.setState({
                        searchedMovies: res.results
                    });
                })
                .catch((err) => console.log(err));
        } 
    }

    render() {
        if (this.state.searchedMovies.length != 0) {
            var movieComponents = this.state.searchedMovies.map(
                (movie) => <MovieSquare key={movie.id} movie={movie} />
            );
        }
        return (
            <div className="search-page">

                <SearchBar handleSubmit={this.handleSubmit} />


                <div className="movie-grid">
                    <Grid container direction="">
                        {movieComponents}
                    </Grid>
                </div>

            </div>
        );
    }
}

export default Search;