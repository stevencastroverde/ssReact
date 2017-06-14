import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieSearch from './Components/movieSearch/MovieSearch';
import SearchBar from './Components/SearchBar/Searchbar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MovieSearch/> ,document.getElementById('root'));
registerServiceWorker();
