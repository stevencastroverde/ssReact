import React from 'react';
import './ShowInfo.css';



const ShowInfo = props => {
    const showStatus = props.status === 'Continuing'? 'On Going' : 'Completed';


    return (
        <div className="extra-info">
            <h5>{props.day}</h5>
            <h5>{props.time}</h5>
            <h5>{showStatus}</h5>
            <h5>You might also like:</h5>

        </div>
    )
}

export default ShowInfo