import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/moobi_logo.png';

function Header() {
    return (
        <div className="header">
            <div className="title-and-logo">
                <img src={logoSrc} id="logo-img" alt="" />
                <h1 id="title">MOOBI</h1>
            </div>
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