import React, { Component } from 'react';
import InfoHeader from '../common/InfoHeader/InfoHeader';
import Episode from './Episode/Episode';
import Modal from '../common/Modal/Modal';
import API from '../../API/apiCalls';


import './ShowPage.css';

class ShowPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
            clickedEpisode: null
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    componentWillMount() {

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
    toggleModal(e ,index) {
        this.setState({
            isOpen: !this.state.isOpen,
            clickedEpisode: this.state.episodes[index]
        })
    }


    render() {
        if(!this.state.showInfo){
            return <h1>Loading</h1>
        } else {
            return (
                <div>
                    <InfoHeader {...this.state.showInfo}/>
                    <div className="season">
                        {this.state.episodes.map((episode, i) => {
                           return <Episode key={episode.id} thumbnail={episode.thumbnail_400x225} number={episode.episode_number} title={episode.title} index={i} selectedEpisode={this.toggleModal}/>
                        })}
                    </div>
                    <Modal {...this.state.clickedEpisode} onClose={this.toggleModal} show={this.state.isOpen}/>
                </div>
            )
        }
    }
}

export default ShowPage;
