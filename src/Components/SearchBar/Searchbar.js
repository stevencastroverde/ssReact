import React, { Component } from 'react';
import './Searchbar.css';

class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search"/>
                <input type="checkbox" id="amazon-prime" value="amazon_prime"/>
                <label for="amazon-prime">Amazon Prime</label>
                <input type="checkbox" id="netflix" value="netflix"/>
                <label for="netflix">Netflix</label>
                <input type="checkbox" id="hulu" value="hulu_plus"/>
                <label for="hulu">Hulu</label>
                <input type="checkbox" id="crunchyroll" value="crunchroll_premium"/>
                <label for="crunchroll">Crunchroll</label>
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