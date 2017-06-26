import React from 'react';
import PropTypes from 'prop-types'
import './InfoHeader.css';
import Cast from '../Cast/Cast';

const InfoHeader = (props) => {
    if(props.type === 'television') {
        return (
            <div className="background">
                <div className="info-header-content">
                    <div className="header-left">
                        <img id="poster" src={props.poster} alt={props.title + 'poster'}/>
                    </div>
                    <div className="header-right">
                        <h1 id="title">{props.title}</h1>
                        <img src={props.channels[0].artwork_208x117} id="channel-logo" alt={props.channels.name + ' logo'}/>
                        <div className="genre-list">
                            {props.genres.map((genre, i) => {
                                if(i === props.genres.length - 1){
                               return <span key={genre.id}>{genre.title}</span>
                            } else {
                               return <span key={genre.id}>{genre.title}{' | '}</span>
                             }
                             }
                            )}

                        </div>
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
                <div className="info-header-content">
                    <div className="header-left">
                        <img id="poster" src={props.poster_400x570} alt={props.title + 'poster'}/>
                    </div>
                    <div className="header-right">
                        <h1 id="title">{props.title}</h1>
                        <h5 className="rating">{props.rating}</h5>
                        <h5>{(props.duration / 60) + ' minutes'}</h5>
                        <div className="genre-list">
                            {props.genres.map((genre, i) => {
                                    if(i === props.genres.length - 1){
                                        return <span key={genre.id}>{genre.title}</span>
                                    } else {
                                        return <span key={genre.id}>{genre.title}{', '}</span>
                                    }
                                }
                            )}

                        </div>
                        <p className="overview">{props.overview}</p>
                    </div>
                </div>
                <div className="cast-list">
                    {props.cast.map((castMember) => <Cast key={castMember.id} {...castMember}/>)}
                </div>
            </div>
        )
    }
};

InfoHeader.propTypes = {
    objectWithShape: PropTypes.shape({
        type: PropTypes.string,
        poster: PropTypes.string,
        title: PropTypes.string,
        channels: PropTypes.arrayOf(PropTypes.object),
        genre: PropTypes.arrayOf(PropTypes.object),
        overview: PropTypes.string,
        cast: PropTypes.arrayOf(PropTypes.object)
    })
};

export default InfoHeader