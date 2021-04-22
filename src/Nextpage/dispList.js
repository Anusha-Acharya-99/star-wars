import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import List from './list'

const DispList = ({id,list}) => {
    return (
        <div className="div-column">
            <ul className = "ul-column">
            {
                    list.map((li, index) => {
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