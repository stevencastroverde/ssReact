import React, { Component } from 'react';
import InfoHeader from '../common/InfoHeader/InfoHeader';
import Season from './Season/Season';
import Modal from '../common/Modal/Modal';
import Loading from '../common/Loading/Loading';
import API from '../../API/apiCalls';


// Delete this dummy data
import bobsBurgers from '../../dummyData/bobsBurgers';


import './ShowPage.css';

class ShowPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
            clickedEpisode: null,
            loadingMessage: 'Finding you all the latest episodes'
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.sortEpisodesBySeason = this.sortEpisodesBySeason.bind(this);
    }
    componentWillMount() {

        // let params = this.props.match.params;
        //  API.getSpecificShow(params.id, params.subscriptions)
        //      .then(response => {
        //          this.setState({
        //              showInfo: response[0],
        //              episodes: response[1].results,
        //              relatedShows: response[3].results
        //          });
        //      })
        this.setState({
            showInfo: bobsBurgers[0],
            seasons: this.sortEpisodesBySeason(bobsBurgers[1].results),
            relatedShows: bobsBurgers[3].results

        })

    }


    sortEpisodesBySeason = array => {
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
        console.log(myArray)
        return myArray;
    }

    toggleModal = (e ,index) => {
        this.setState({
            isOpen: !this.state.isOpen,
            clickedEpisode: this.state.episodes[index]
        })
    }


    render() {
        if(!this.state.showInfo){
            return <Loading message={this.state.loadingMessage} />
        } else {
            return (
                <div>
                    <InfoHeader {...this.state.showInfo}/>
                    <div className="seasons">
                        {this.state.seasons.map((season, i) => {
                           return <Season key={season.season} {...season}/>
                        })}
                    </div>
                    <Modal {...this.state.clickedEpisode} onClose={this.toggleModal} show={this.state.isOpen}/>
                </div>
            )
        }
    }
}

export default ShowPage;
