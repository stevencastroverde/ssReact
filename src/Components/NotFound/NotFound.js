import React from 'react';
import { Link } from 'react-router-dom';


import './NotFound.css';

const NotFound = () => {
        return (

            <div className="not-found-background">
                <div className="not-found-text">
                    <h1>Whoa... Where are we?</h1>
                    <h2>Looks like this page doesn't exist</h2>
                    <Link to="/">Return Home</Link>
                </div>
            </div>
        )

};

export default NotFound;
