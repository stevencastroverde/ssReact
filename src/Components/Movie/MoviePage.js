import React, { Component } from 'react';
import API from '../../API/apiCalls';

import './MoviePage.css';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state ={};
    }
   componentWillMount(){
       let params = this.props.match.params;
       API.getSpecificMovie(params.id)
           .then(response => {
               this.setState({
                   movieInfo: response[0],
                   images: response[1],
                   relatedMovie: response[2].results
               })
               });

   }


    render() {
        return (

            <div>
                {this.state && this.state.movieInfo && <h1>{this.state.movieInfo.title}</h1>}

            </div>
        )
    }
}

export default MoviePage;
