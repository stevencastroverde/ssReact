import React, { Component } from 'react';
import './Season.css';

import Episode from '../Episode/Episode';
import Modal from '../../common/Modal/Modal';

class Season extends Component {
    constructor(props){
        super(props);
        this.state= {
            isExpanded: false
        };
    }

    handleSelect = e => {
        e.preventDefault();
        this.setState({ isExpanded: !this.state.isExpanded});
    };

    render(){
      return (
          <div>
            <div className="season-heading" onClick={this.handleSelect}>
                <div className="season-number">
                     <a href="#">Season {this.props.season}</a>
                </div>
            </div>
            <div className="season-episodes">
               {this.props.episodes.map((episode, i) => {return <Episode key={episode.id} thumbnail={episode.thumbnail_400x225} number={episode.episode_number} title={episode.title} index={i} /> })}
            </div>
          </div>
      )
    }
}

export default Season