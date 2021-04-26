import React from 'react';
import { NavLink } from 'react-router-dom';
import './dispList.css'

const DispList = ({id,list}) => {
    return (
        <div className="div-column">
            <ul className = "ul-column">
            {
                    list.map((li) => {
                        let index = li.url.match(/[0-9]+/);
                        return (
                            <NavLink to={`/${id}/${index}`} className="nav-links" >
                                <li key={index} className="list-column">{(li.name || li.title).toUpperCase()}</li></NavLink>)
                })
                }
            </ul>
        </div>
    )
}

export default DispList;