import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <h1 id="title">MOOBI</h1>
            <ul className="nav-links">
            <Link to='/search'>
                    <li className="nav-text">Search</li>
                </Link>
                <Link to='/lib'>
                    <li className="nav-text">My Library</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;