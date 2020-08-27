import React from 'react';
import logo from '../../images/Mirtechpro-Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className = "header">
            <img src={logo} alt=""/>
            <nav className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/courses">Courses</a></li>
                <li className="nav-item"><a className="nav-link" href="/success">Success</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
            </nav>
        </div>
    );
};

export default Header;