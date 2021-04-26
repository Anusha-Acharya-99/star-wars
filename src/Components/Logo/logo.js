import React from 'react';
import logo from '../../Images/logo.png';
import './logo.css';

function Logo(){
    return(
        <div className ="logo">
            <img src = {logo} className = "logo-img"/>
        </div>
    )
}

export default Logo;