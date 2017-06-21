import React, { Component } from 'react';
import API from '../../API/apiCalls';
import theMask from '../../dummyData/theMask';
import InfoHeader from '../common/InfoHeader/InfoHeader';
import Loading from '../common/Loading/Loading';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieImagesAndTrailers from './MovieImages/MovieImagesAndTrailers';

import './MoviePage.css';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state ={
            loadingMessage: 'Scouring the Internet for where you can watch this!'
        };
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
       if(!this.state.movieInfo){
          return <Loading message={this.state.loadingMessage}/>
       } else {
           return (
               <div>
                   <section>
                       <InfoHeader {...this.state.movieInfo}/>
                   </section>
                   <section className="movie-content">
                       <div>
                       <MovieInfo
                           title={this.state.movieInfo.title}
                           year={this.state.movieInfo.release_year}
                           inTheaters={this.state.movieInfo.in_theaters}
                           directors={this.state.movieInfo.directors}/>
                       </div>
                       <div>
                           <img src={this.state.images.banners[0].medium.url} alt={this.state.movieInfo.title + ' banner'}/>
                       </div>
                       <div>
                           <MovieImagesAndTrailers trailer={this.state.movieInfo.trailers.web[0].embed}
                                                   trailerPoster={this.state.images.posters[0].medium}
                                                   images={this.state.images.thumbnails}/>
                       </div>

                   </section>
               </div>
           )
       }
    }
}

export default MoviePage;
