import React, { Component } from 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResult from '../searchResult/SearchResult';
import './MovieSearch.css';
import freeMovies from '../../dummyData/freeMovies';


class MovieSearch extends React.Component {

    render() {
        return (
            <SearchBar />
        <div>
            {freeMovies.map((movie) =>
                <SearchResult result={movie}/>
            )}
        </div>

        )};







}

export default MovieSearch