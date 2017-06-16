import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>

        </nav>

            )
}

export default Header