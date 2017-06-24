import React from 'react';
import './MovieInfo.css';




const MovieInfo = props => {
    const inTheaters = props.inTheaters ?  'Currently in Theaters' : 'Not In Theaters';
    const moreThanOneDirector = props.directors.length > 1 ? 'Directors' : 'Director';
    return (
        <div className="movie-info-card">
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
    )
}

export default MovieInfo