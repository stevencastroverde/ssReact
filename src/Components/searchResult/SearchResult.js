import React, { Component } from 'react';

import './searchResult.css';





class SearchResult extends Component{
    constructor(props){
        super(props);

        this.selectCard = this.selectCard.bind(this);
    };

    selectCard(e){
        e.preventDefault();
        console.log(this.props.id)
    };

    render() {
        const isTvShow = this.props.hasOwnProperty('tvdb');
        if (isTvShow === true) {
            return (
                <div onClick={this.selectCard} className="result-card">
                    <img className="poster" src={this.props.artwork_304x171} alt={this.props.title + 'show poster'} />
                    <div className="caption">
                        <h3 className="truncate title">{this.props.title}</h3>
                        <h2 className="year">{this.props.first_aired}</h2>
                    </div>
                </div>
            )
        } else {
            return (  <div onClick={this.selectCard} className="result-card">
                <img className="poster" src={this.props.poster_240x342} alt={this.props.title + 'movie poster'} />
                <div className="caption">
                    <h3 className="truncate title">{this.props.title}</h3>
                    <h2 className="year">{this.props.release_year}</h2>
                </div>
            </div>)
        }

    };


};

export default SearchResult