import React from 'react';
import './Episode.css';

const Episode = (props) => {
    return (
        <div className="episode" onClick={(e) => {props.selectedEpisode(e, props.index)}}>
            <div className="episode-image">
                <img src={props.thumbnail} alt={props.title + ' episode image'}/>
                <h4><span>Episode: {props.number}</span></h4>
            </div>
            <div className="episode-title">
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}

export default Episode