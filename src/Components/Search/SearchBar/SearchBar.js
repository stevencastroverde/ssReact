import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionSources from '../../../data/SubscriptionSources.js';
import './SearchBar.css';

const SearchBar = (props) => {
        return (
            <form onSubmit={props.submitSearch} className="search-bar">
                <div className="radio-buttons">
                    <radiogroup>
                        <input type="radio" id="tv-radio-btn" required name="search-type" value='tv' checked={true} onChange={props.radioCheck} />
                        <label htmlFor="tv-radio-btn">Television</label>
                        <input type="radio" id="movie-radio-btn" name="search-type" value='movies'  onChange={props.radioCheck} />
                        <label htmlFor="movie-radio-btn">Movies</label>
                    </radiogroup>
                </div>
                <input type="text" placeholder="Movie Title or Show Name" required name='searchTerm' id="search-input" onChange={props.inputChange} />
                        <div className="checkbox-list">
								{SubscriptionSources.map((source, i) => {
									return (
									    <div key={i}>
											<input type="checkbox" id={source.id} name={source.value} className="checkbox" key={source.id} onChange={props.inputChange}/>
                                            <label  htmlFor={source.id}><span></span>{source.displayName}</label>
                                            </div>

									)
								})}
                        </div>
                <div className="search-buttons">
                    <button id="submitButton" type="submit">Search</button>
                    <button type="reset">Clear</button>
                </div>
            </form>
        )

};

SearchBar.propTypes = {
    submitSearch: PropTypes.func,
    radioCheck: PropTypes.func,
    inputChange: PropTypes.func
};


export default SearchBar
