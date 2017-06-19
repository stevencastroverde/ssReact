import React from 'react';
import './searchResult.css';

const SearchResult = (props) => {
        const isTvShow = props.hasOwnProperty('tvdb');
        if (isTvShow) {
            return (
                <div onClick={(e) => props.chooseCard(e, props.id, true)} className="result-card hover-background-color">
                    <img className="poster" src={props.artwork_304x171} alt={props.title + 'show poster'} />
                    <div className="caption">
                        <h3 className="truncate title">{props.title}</h3>
                        <h2 className="year">{props.first_aired}</h2>
                    </div>
                </div>
            )
        } else {
            return (
                <div onClick={(e) => props.chooseCard(e, props.id, false)} className="result-card hover-background-color">
                    <img className="poster" src={props.poster_240x342} alt={props.title + 'movie poster'} />
                    <div className="caption">
                        <h3 className="truncate title">{props.title}</h3>
                        <h2 className="year">{props.release_year}</h2>
                    </div>
                </div>
            )
        }
};

export default SearchResult