import React, { Component } from 'react';
import {Link} from 'react-router-dom';


let Home = () => {

    return (
        <>
        <h2>Home</h2>

        <ul>
            
            <li><Link to="/api/login">Iniciar sesión</Link></li>

        </ul>

    
        </>
    )
}

export default Home