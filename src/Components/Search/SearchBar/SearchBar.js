import React from 'react';
import SubscriptionSources from '../../../dummyData/SubscriptionSources.js';
import './SearchBar.css';

const SearchBar = (props) => {
        return (
            <form onSubmit={props.submitSearch}>
                <input type="text" placeholder="Search" name='searchTerm' onChange={props.inputChange} />

								{SubscriptionSources.map((source, i) => {
									return (
										<label key={i} htmlFor={source.id}>{source.displayName}
											<input type="checkbox" id={source.id} name={source.value} key={source.id} onChange={props.inputChange}/>
											</label>

									)
								})}
        
                <button type="submit">Submit</button>
            </form>
        )

}



export default SearchBar
