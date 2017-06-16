import React, { Component } from 'react';
import SubscriptionSources from '../../../dummyData/SubscriptionSources.js';
import './SearchBar.css';

class SearchBar extends Component {

    render() {
        return (
            <form onSubmit={this.props.submitSearch}>
                <input type="text" placeholder="Search" name='searchTerm' onChange={this.props.inputChange} />

								{SubscriptionSources.map((source, i) => {
									return (
										<label key={i} htmlFor={source.id}>{source.displayName}
											<input type="checkbox" id={source.id} name={source.value} key={source.id} onChange={this.props.inputChange}/>
											</label>

									)
								})}
        
                <button type="submit">Submit</button>
            </form>
        )
    }
}



export default SearchBar
