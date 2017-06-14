import React, { Component } from 'react';
import './searchResult.css';


class SearchResult extends Component{
    render() {
        return (
            <div className="result-card">
                <img className="poster" src={this.props.movie.poster_240x342}/>
                <div className="caption">
                    <h3 className="truncate title">{this.props.movie.title}</h3>
                    <h2 className="year">{this.props.movie.release_year}</h2>
                </div>
            </div>
        )
    }
};

export default SearchResult