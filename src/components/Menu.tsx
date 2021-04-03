import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let Menu = () => {

    return (
        <>
        <h2>Menu</h2>

        <ul>
            <li><Link to="/api/addremove">Agregar/borrar</Link></li> 
            <li><Link to="/api/protected">Mostrar RFCs protegidos</Link></li>
             
        </ul>

    
        </>
    )
}

export default Menu