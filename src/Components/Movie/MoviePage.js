import React, { Component } from 'react';
import API from '../../API/apiCalls';
import theMask from '../../data/theMask';
import InfoHeader from '../common/InfoHeader/InfoHeader';
import Loading from '../common/Loading/Loading';
import MovieInfo from './MovieInfo/MovieInfo';
import SourceCards from './SourceCards/SourceCards';
import RelatedContent from '../common/RelatedContent/RelatedContent';

import './MoviePage.css';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state ={
            loadingMessage: 'Scouring the Internet for where you can watch this!'
        };
    }
   componentWillMount(){
       if(this.props.location.pathname === '/movie/39014/demo') {

           this.setState ({
               movieInfo: theMask[0],
               images: theMask[1].results,
               relatedMovies: theMask[2].results

           })
       } else {
           let params = this.props.match.params;
           API.getSpecificMovie(params.id)
               .then(response => {
                   this.setState({
                       movieInfo: response[0],
                       images: response[1],
                       relatedMovies: response[2].results
                   })
               });
       }
   }
    selectedMovie= (e, showId) => {
        let params = this.props.match.params;
        this.props.history.push('/show/' + showId + '/' + params.subscriptions);
    };


    render() {
       return (!this.state.movieInfo) ? <Loading message={this.state.loadingMessage}/> :
               <div>
                   <section>
                       <InfoHeader {...this.state.movieInfo}/>
                   </section>
                   <section className="movie-content">
                       <div className="extra-info">
                       <MovieInfo
                           title={this.state.movieInfo.title}
                           year={this.state.movieInfo.release_year}
                           inTheaters={this.state.movieInfo.in_theaters}
                           directors={this.state.movieInfo.directors}
                           metaCritic={this.state.movieInfo.metacritic}
                           rottenTomatoes={this.state.movieInfo.rottentomatoes}
                           commonSense={this.state.movieInfo.common_sense_media}
                       />
                       </div>
                       <div className="banner-trailer">
                           <iframe
                               src={this.state.movieInfo.trailers.web[0].embed}
                                title={this.state.movieInfo.title + " trailer"} height="100%" width="100%"  frameBorder="0">
                           </iframe>
                       </div>

                       <div className="avaliable-sources">

                        <SourceCards
                            rentBuySources={this.state.movieInfo.purchase_web_sources}
                            freeSources={this.state.movieInfo.free_web_sources}
                            subscriptionSources={this.state.movieInfo.subscription_web_sources}/>
                       </div>
                   </section>
                   <section className="related-movies">
                       <h3>Related Movies</h3>
                       <div className="related-movie-list">
                       {this.state.relatedMovies.map(movie => {
                           return <RelatedContent key={movie.id} isTV={false} thumbnail={movie.poster_240x342} title={movie.title} selectRelated={this.selectedMovie} id={movie.id}/>
                       })}
                       </div>
                   </section>
               </div>
    }
}

export default MoviePage;
