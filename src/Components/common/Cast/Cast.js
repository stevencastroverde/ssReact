import React from 'react';
import './Cast.css';

const Cast = (props) => {
   return (
       <div className="cast-member">
            <img id='headshot' src={props.image} alt={ 'image of ' + props.name}/>
            <h3>{props.name}</h3>
        </div>
   )
}

export default Cast