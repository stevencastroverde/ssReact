import React, { Component } from 'react';


import './MoviePage.css';

class MoviePage extends Component {
    componentDidMount() {
        console.log(this.props);
    }



    render() {
        return (

            <div>
                <h1>Movie Page</h1>

            </div>
        )
    }
}

export default MoviePage;
