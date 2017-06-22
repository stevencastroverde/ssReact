import React, { Component } from 'react';
import API from '../../API/apiCalls';
import theMask from '../../data/theMask';
import InfoHeader from '../common/InfoHeader/InfoHeader';
import Loading from '../common/Loading/Loading';
import MovieInfo from './MovieInfo/MovieInfo';
import SourceCards from './SourceCards/SourceCards';

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
                       <div className="extra-info">
                       <MovieInfo
                           title={this.state.movieInfo.title}
                           year={this.state.movieInfo.release_year}
                           inTheaters={this.state.movieInfo.in_theaters}
                           directors={this.state.movieInfo.directors}/>
                       </div>
                       <div className="banner-trailer">
                           <iframe
                               src={this.state.movieInfo.trailers.web[0].embed}
                               id="Example2"
                               title="Example2"
                               frameBorder="0"
                               scrolling="no"
                               marginHeight="0"
                               marginWidth="0">
                           </iframe>
                       </div>

                        <SourceCards
                            rentBuySources={this.state.movieInfo.purchase_web_sources}
                            freeSources={this.state.movieInfo.free_web_sources}
                            subscriptionSources={this.state.movieInfo.subscription_web_sources}
                        />
                   </section>
               </div>
           )
       }
    }
}

export default MoviePage;
