import React, { Component } from 'react';
import SubscriptionSources from '../../dummyData/SubscriptionSources.js';
import './Searchbar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.submitHandler = this.submitHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    submitHandler(e){
        e.preventDefault();
        console.log(this.state);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState ({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Search" name='searchTerm' onChange={this.handleInputChange} />

								{SubscriptionSources.map((source, i) => {
									return (
										<label key={i} htmlFor={source.id}>{source.displayName}
											<input type="checkbox" id={source.id} name={source.value} key={source.id} onChange={this.handleInputChange}/>
											</label>

									)
								})}
        
                <button type="submit">Submit</button>
            </form>
        )
    }
}



export default SearchBar
