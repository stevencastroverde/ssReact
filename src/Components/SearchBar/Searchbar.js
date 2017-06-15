import React, { Component } from 'react';
import './Searchbar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.submitHandler = this.submitHandler.bind(this);
    }
    toggleCheckbox(label) {
        console.log(e)
    }


    submitHandler(e){
        e.preventDefault();
        console.log(e.target.value)
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Search" value={this.state.value} />
                <input type="checkbox" id="amazon-prime" value="amazon_prime" onChange={this.toggleCheckbox}/>
                <label for="amazon-prime">Amazon Prime</label>
                <input type="checkbox" id="netflix" value="netflix"/>
                <label for="netflix">Netflix</label>
                <input type="checkbox" id="hulu" value="hulu_plus"/>
                <label for="hulu">Hulu</label>
                <input type="checkbox" id="crunchyroll" value="crunchyroll_premium"/>
                <label for="crunchyroll">Crunchyroll</label>
                <input type="checkbox" id="drama-fever" value="dramafever_premium"/>
                <label for="drama-fever">Drama Fever</label>
                <input type="checkbox" id="hbo" value="hbo_now"/>
                <label for="hbo">HBO Now</label>
                <input type="checkbox" id="starz" value="starz_subscription"/>
                <label for="starz">Starz</label>
                <input type="checkbox" id="showtime" value="showtime_subscription"/>
                <label for="showtime">Showtime</label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}



export default SearchBar