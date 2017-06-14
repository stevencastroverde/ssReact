import React, { Component } from 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResult from '../searchResult/SearchResult';
import './MovieSearch.css';
import freeMovies from '../../dummyData/freeMovies';


class MovieSearch extends Component {
    getInitialState: function (){
        return{
            movies: freeMovies;
            }
    },

    render() {
        return (
            <SearchBar />
        <div>
            {
                this.state.movies.map((movie) => {
                  return  <SearchResult movie={movie}/>;
                });
            }
        </div>

        )};
}

export default MovieSearch