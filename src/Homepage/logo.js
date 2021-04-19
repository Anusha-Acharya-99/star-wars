import React from 'react';
import logo from '../images/logo.png';

function Logo(){
    return(
        <div className ="logo">
            <img src = {logo} className = "logo-img"/>
        </div>
    )
}

export default Logo;