import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/Searchbar';
import freeMovies from './dummyData/freeMovies';
import freeShows from './dummyData/freeShows';
import SearchResult from './Components/searchResult/SearchResult';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
      <SearchBar />
        <section className="results-grid">
      {freeShows.map((movie) => <SearchResult key={movie.id} {...movie}/>)}
    </section>
        </div>
    )
  }
}

export default App;
