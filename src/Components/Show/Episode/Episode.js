import React from 'react';
import './Episode.css';


const roundRuntime = runtime => {
    return Math.round(runtime / 60);
}
const Episode = (props) => {
    return (
        <div className="episode">
            <div className="episode-image">
                <img src={props.thumbnail_304x171} alt={props.title + ' episode image'}/>
            </div>
            <div className="episode-info">
                <h4>{props.title}</h4>
                <h5 id="runtime">{roundRuntime(props.duration) + ' min'}</h5>
                <p>{props.overview}</p>
                <div id="episode-link">
                    <a target="_blank" rel="noopener noreferrer" href={props.subscription_web_sources[0].link}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Episode