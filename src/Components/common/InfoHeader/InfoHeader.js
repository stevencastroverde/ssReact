import React from 'react';
import './InfoHeader.css';
import Cast from '../Cast/Cast';



const InfoHeader = (props) => {
    if(props.type === 'television') {
        return (
            <div className="background">
                <div className="content">
                    <div className="header-left">
                        <img id="poster" src={props.poster} alt={props.title + 'poster'}/>
                    </div>
                    <div className="header-right">
                        <h1 id="title">{props.title}</h1>
                        <img src={props.channels[0].artwork_208x117} id="channel-logo" alt={props.channels.name + ' logo'}/>
                        <h2>{props.runtime + ' minutes'}</h2>
                        {props.genres.map((genre) => <span key={genre.id}>{genre.title}</span>)}
                        <p className="overview">{props.overview}</p>
                    </div>
                </div>
                <div className="cast-list">
                    {props.cast.map((castMember) => <Cast key={castMember.id} {...castMember}/>)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="background">
                <div className="content">
                    <div className="header-left">
                        <img id="poster" src={props.poster_400x570} alt={props.title + 'poster'}/>
                    </div>
                    <div className="header-right">
                        <h1 id="title">{props.title}</h1>
                        <h3 className="rating"> Rated: {props.rating}</h3>
                        <h2>{(props.duration / 60) + ' minutes'}</h2>
                        {props.genres.map((genre) => <span key={genre.id}>{genre.title}</span>)}
                        <p className="overview">{props.overview}</p>
                    </div>
                </div>
                <div className="cast-list">
                    {props.cast.map((castMember) => <Cast key={castMember.id} {...castMember}/>)}
                </div>
            </div>
        )
    }
}

export default InfoHeader