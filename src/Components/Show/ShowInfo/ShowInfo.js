import React from 'react';
import './ShowInfo.css';



const ShowInfo = props => {
    const showStatus = props.status === 'Continuing'? 'On Air' : 'Completed';


    return (
        <div className="extra-info">
            <h5>{props.day}</h5>
            <h5>{props.time}</h5>
            <h5>{showStatus}</h5>

        </div>
    )
}

export default ShowInfo