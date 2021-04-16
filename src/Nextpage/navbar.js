import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const top = ['films','species','planets','people','starship','vehicles']

const Navbar = ({name}) => {
    const [select, setSelect] = useState(name.params.id);

    const handleClick = (e) => {
        setSelect(e.target.innerText.toLowerCase());
    }
    
    return (
        <div className="navbar">
                <ul className = "nav-ul">
                {top.map(data => {
                    return (data === select ? 
                        <li className="nav-list" className = "selected" > {data.toUpperCase()}</li> :
                        <NavLink to={`/${data}`} className = "nav-links"><li className="nav-list" onClick = {handleClick}> { data.toUpperCase()}</li></NavLink> )
                })}
                    </ul>
        </div>
    )

}

export default Navbar;