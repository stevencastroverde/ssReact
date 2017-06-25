import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {


    return (
        <nav>
            <h1 id="stream-search">Stream Search</h1>
            <ul className="nav-links">
            <li><Link to="/" className="target">Home</Link></li>
            <li><Link to="/search" className="target" id="search">Search</Link></li>
            </ul>
        </nav>

            )
}

export default Header