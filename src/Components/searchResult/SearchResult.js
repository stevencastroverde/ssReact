import React, { Component } from 'react';
import './searchResult.css';


class SearchResult extends Component{
    selectMovie(e){
        e.preventDefault();
        console.log(this.props.id)
    }


    render() {
        return (
            <div onClick={(e) =>this.selectMovie(e)} className="result-card">
                <img className="poster" src={this.props.poster_240x342}/>
                <div className="caption">
                    <h3 className="truncate title">{this.props.title}</h3>
                    <h2 className="year">{this.props.release_year}</h2>
                </div>
            </div>
        )
    }
};

export default SearchResult