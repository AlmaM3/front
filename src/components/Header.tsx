import React, { Component } from 'react';
import img from '../Images/logos.svg';
import '../Styles/Header.css';

let Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__image-container">
                    <img src={img} className="header__logo" alt=""/>
                </div>
            </div>
        </>
    )
}

export default Header;