import React, { Component } from 'react';
import API from '../../API/apiCalls';
import theMask from '../../dummyData/theMask';
import InfoHeader from '../common/InfoHeader/InfoHeader';

import './MoviePage.css';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state ={};
    }
   componentWillMount(){
       // let params = this.props.match.params;
       // API.getSpecificMovie(params.id)
       //     .then(response => {
       //         this.setState({
       //             movieInfo: response[0],
       //             images: response[1],
       //             relatedMovie: response[2].results
       //         })
       //         });

       this.setState ({
           movieInfo: theMask[0],
           images: theMask[1].results,
           relatedMovies: theMask[2].results

       })


   }


    render() {
        return (

            <div>
                {this.state && this.state.movieInfo && <InfoHeader {...this.state.movieInfo}/>}

            </div>
        )
    }
}

export default MoviePage;
