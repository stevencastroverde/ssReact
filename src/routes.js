import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import App from './App';
import SearchPage from './Components/Search/SearchPage';
import MoviePage from './Components/Movie/MoviePage';
import ShowPage from './Components/Show/ShowPage';
import NotFound from './Components/NotFound/NotFound';

const Routes = (props) => {
    return (
        <Router {...props}>
            <div>
                <Route path='/' component={App}/>
                <Route path='/search' component={SearchPage}/>
                <Route path='/show' component={ShowPage}/>
                <Route path="/movie" component={MoviePage}/>
            </div>
    </Router>
    )
};

export  {Routes};