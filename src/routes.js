import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/common/Header/Header';
import HomePage from './Components/Home/HomePage';
import SearchPage from './Components/Search/SearchPage';
import MoviePage from './Components/Movie/MoviePage';
import ShowPage from './Components/Show/ShowPage';
import NotFound from './Components/NotFound/NotFound';

const Routes = (props) => {
    return (
        <Router {...props}>

            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/search' component={SearchPage}/>
                    <Route path='/show/:id/:subscriptions' component={ShowPage}/>
                    <Route path="/movie/:id/:subscriptions" component={MoviePage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
    </Router>
    )
};

export  {Routes};