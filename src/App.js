import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/Searchbar';
import freeMovies from './dummyData/freeMovies';
import SearchResult from './Components/searchResult/SearchResult';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
      <SearchBar />
        <div className="results-grid">
      {freeMovies.map((movie) => <SearchResult key={movie.id} {...movie}/>)}
    </div>
        </div>
    )
  }
}

export default App;
