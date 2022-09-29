import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Headers = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-list'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Headers;