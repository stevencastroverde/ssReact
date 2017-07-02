import React from 'react';
import loadingAnimation from '../../../images/loading.svg';
import './Loading.css';

const Loading = (props) => {
    return (
        <div className="loading-animation">
            <img src={loadingAnimation} alt="loading animation"/>
        </div>
    )
};

export default  Loading;
