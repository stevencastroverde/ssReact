import React, { Component } from 'react';
import TvShow from './TvShow';
import Movie from './Movie';
import './searchResult.css';





class SearchResult extends Component{
    constructor(props){
        super(props);

        this.selectCard = this.selectCard.bind(this);
    }



    selectCard(e){
        e.preventDefault();
        console.log(this.props.id)
    }

    render() {
        const isTvShow = this.props.hasOwnProperty('tvdb');

        return isTvShow === true ?
            <TvShow poster={this.props.artwork_304x171} title={this.props.title} year={this.props.first_aired} id={this.props.id} clickedTvShow={this.selectCard} />
            : <Movie  clickedMovie={this.selectCard} poster={this.props.poster_240x342} title={this.props.title} year={this.props.release_year} />;
    }


};

export default SearchResult