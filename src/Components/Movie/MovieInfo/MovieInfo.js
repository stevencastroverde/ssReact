import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.css';




const MovieInfo = props => {
    const inTheaters = props.inTheaters ?  'Currently in Theaters' : 'Not In Theaters';
    const moreThanOneDirector = props.directors.length > 1 ? 'Directors' : 'Director';
    return (
        <div className="movie-info-card">
            <div className="movie-info">
                <h5>{props.title}</h5>
                <h5>{props.year}</h5>
                <h5>{inTheaters}</h5>
                <div className="director">
                <h5>{moreThanOneDirector} :</h5>
                {props.directors.map(person => {
                    return (
                            <h5  key={person.id} >{person.name}</h5>
                    )
                } )}
            </div>
            </div>
                <div className="reviews">
                    <a href={props.metaCritic} target="_blank" rel="noopener noreferrer">MetaCritic</a>
                    <a href={'www.rottentomatoes.com/m/' + props.rottenTomatoes} rel="noopener noreferrer" target="_blank">Rotten Tomatoes</a>
                    <a href={props.commonSense}  target="_blank" rel="noopener noreferrer">Common Sense</a>
                </div>
        </div>
    )
};

MovieInfo.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    inTheaters: PropTypes.bool.isRequired,
    metaCritic: PropTypes.string,
    rottenTomatoes: PropTypes.number,
    commonSense: PropTypes.string,
    directors: PropTypes.arrayOf(PropTypes.object)
};

export default MovieInfo