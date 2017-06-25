import React, { Component } from 'react';
import InfoHeader from '../common/InfoHeader/InfoHeader';
import Season from './Season/Season';
import Loading from '../common/Loading/Loading';
import ShowInfo from './ShowInfo/ShowInfo';
import RelatedContent from '../common/RelatedContent/RelatedContent';
import API from '../../API/apiCalls';


// Delete this dummy data
import bobsBurgers from '../../data/bobsBurgers';


import './ShowPage.css';


// Helper functions
 const sortEpisodesBySeason = array => {
    let seasonNumber = {};
    for ( let i = 0; i < array.length; i++) {
        let season = array[i].season_number;
        if (!seasonNumber[season]) {
            seasonNumber[season] = [];
        }
        seasonNumber[season].push(array[i]);
    }
    const myArray = [];
    for (let key in seasonNumber) {
        myArray.push({season: key, episodes: seasonNumber[key]});
    }
    console.log(myArray);
    return myArray;
};


class ShowPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            clickedEpisode: null,
            loadingMessage: 'Finding you all the latest episodes'
        };
    }
    componentWillMount() {
        if(this.props.location.pathname === '/show/69/demo') {
            this.setState({
                showInfo: bobsBurgers[0],
                seasons: sortEpisodesBySeason(bobsBurgers[1].results),
                relatedShows: bobsBurgers[3].results

            })

        } else {
            let params = this.props.match.params;
             API.getSpecificShow(params.id, params.subscriptions)
                 .then(response => {
                     this.setState({
                         showInfo: response[0],
                         episodes: response[1].results,
                         relatedShows: response[3].results
                     });
                 })
        }

    }
    selectedShow = (e, showId) => {
        let params = this.props.match.params;
         this.props.history.push('/show/' + showId + '/' + params.subscriptions);
    };


    render() {
        if(!this.state.showInfo){
            return <Loading message={this.state.loadingMessage} />
        } else {
            return (
                <div>
                    <InfoHeader {...this.state.showInfo}/>
                    <section className="show-info-seasons">
                        <div className="show-info-card">
                            <ShowInfo day={this.state.showInfo.air_day_of_week} time={this.state.showInfo.air_time} status={this.state.showInfo.status}/>
                            <div className="related-shows">
                            {this.state.relatedShows.map((show, i) => {
                                return <RelatedContent key={show.id} title={show.title} thumbnail={show.artwork_304x171} isTv={true} id={show.id} selectRelated={this.selectedShow} />
                            })}
                            </div>
                        </div>
                        <div className="seasons">
                            {this.state.seasons.map((season) => {
                               return <Season key={season.season} {...season}/>
                            })}
                        </div>
                    </section>
                </div>
            )
        }
    }
}

export default ShowPage;
