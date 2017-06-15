import React, { Component } from 'react';
import './Searchbar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.submitHandler = this.submitHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    // toggleCheckbox(label) {
    //     console.log(e)
    // }


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
                <input type="checkbox" id="amazon-prime" name="amazon_prime" onChange={this.handleInputChange}/>
                <label for="amazon-prime">Amazon Prime</label>
                <input type="checkbox" id="netflix" name="netflix" onChange={this.handleInputChange}/>
                <label for="netflix">Netflix</label>
                <input type="checkbox" id="hulu" name="hulu_plus" onChange={this.handleInputChange}/>
                <label for="hulu">Hulu</label>
                <input type="checkbox" id="crunchyroll" name="crunchyroll_premium" onChange={this.handleInputChange}/>
                <label for="crunchyroll">Crunchyroll</label>
                <input type="checkbox" id="drama-fever" name="dramafever_premium" onChange={this.handleInputChange}/>
                <label for="drama-fever">Drama Fever</label>
                <input type="checkbox" id="hbo" name="hbo_now" onChange={this.handleInputChange}/>
                <label for="hbo">HBO Now</label>
                <input type="checkbox" id="starz" name="starz_subscription" onChange={this.handleInputChange}/>
                <label for="starz">Starz</label>
                <input type="checkbox" id="showtime" name="showtime_subscription" onChange={this.handleInputChange}/>
                <label for="showtime">Showtime</label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}



export default SearchBar