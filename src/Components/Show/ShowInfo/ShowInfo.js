import React from 'react';
import './ShowInfo.css';



const ShowInfo = props => {
    const showStatus = props.status === 'Continuing'? 'On Going' : 'Completed';


    return (
        <div className="extra-info">
            <div>
                <h4>Watch on:</h4>
                <h5>{props.day}</h5>
            </div>
            <div>
                <h4>At:</h4>
                <h5>{props.time}</h5>
            </div>
            <div>
                <h4>Show Status:</h4>
                <h5 id="status">{showStatus}</h5>
            </div>
            <div>
             <h5>You might also like:</h5>
            </div>
        </div>
    )
};

export default ShowInfo