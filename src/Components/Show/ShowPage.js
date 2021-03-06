import React, { Component } from 'react';
import InfoHeader from '../common/InfoHeader/InfoHeader';
import Season from './Season/Season';
import Loading from '../common/Loading/Loading';
import ShowInfo from './ShowInfo/ShowInfo';
import RelatedContent from '../common/RelatedContent/RelatedContent';
import API from '../../API/apiCalls';


// Delete this dummy data
import bobsBurgers from '../../data/bobsBurgers';
import survivor from '../../data/survivor';
import starTrek from '../../data/starTrek';


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
    return myArray;
};


class ShowPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            clickedEpisode: null,
            loadingMessage: 'Finding you all the latest episodes'
        };
        this.selectedShow = this.selectedShow.bind(this);
    }
    componentWillMount() {
        if(this.props.location.pathname === '/show/69/demo') {
            this.setState({
                showInfo: bobsBurgers[0],
                seasons: sortEpisodesBySeason(bobsBurgers[1].results),
                relatedShows: bobsBurgers[2].results

            })

        } else if (this.props.location.pathname === '/show/969/demo') {
            this.setState({
                showInfo: survivor[0],
                seasons: sortEpisodesBySeason(survivor[1].results),
                relatedShows: survivor[2].results

            })
        }
        else if (this.props.location.pathname === '/show/2072/demo') {
            this.setState({
                showInfo: starTrek[0],
                seasons: sortEpisodesBySeason(starTrek[1].results),
                relatedShows: starTrek[2].results

            })
        }
        else {
            let params = this.props.match.params;
             API.getSpecificShow(params.id, params.subscriptions)
                 .then(response => {
                     this.setState({
                         showInfo: response[0],
                         seasons: sortEpisodesBySeason(response[1].results),
                         relatedShows: response[2].results
                     });
                 })
        }

    }
    selectedShow(e, showId) {
        let params = this.props.match.params;
         this.props.history.push('/show/' + showId + '/' + params.subscriptions);
         this.props.history.go();
    };


    render() {
        return (!this.state.showInfo) ? <Loading message={this.state.loadingMessage}/> :
                <div>
                    <InfoHeader {...this.state.showInfo}/>
                    <section className="show-info-seasons">
                        <div className="show-info-card">
                            <ShowInfo day={this.state.showInfo.air_day_of_week} time={this.state.showInfo.air_time} status={this.state.showInfo.status}/>
                            <div className="related-shows">
                            {this.state.relatedShows.map((show, i) => {
                                return <RelatedContent key={show.id} title={show.title} thumbnail={show.artwork_304x171} isTV={true} id={show.id} selectRelated={this.selectedShow} />
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

    }
}

export default ShowPage;
