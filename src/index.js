import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchPage from './Components/Search/SearchPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<SearchPage /> ,document.getElementById('root'));
registerServiceWorker();
