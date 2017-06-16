import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = (props) => {
    return (
        <nav>
            <h1>Stream Search</h1>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>

            )
}

export default Header