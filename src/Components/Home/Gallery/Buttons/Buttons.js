import React from 'react';
import './Buttons.css';


const buttons = [];

const Buttons = props => {
        for (let i = 0; i < props.numberOfButtons; i++){
           buttons.push(<span className="gallery-button" key={'gallery-button ' +i} onClick={e => props.clickedButton(i + 1)}>{i + 1}</span>);
        }
    return (
        <div className="button-list">
            {buttons}
        </div>
    )
};

export default Buttons