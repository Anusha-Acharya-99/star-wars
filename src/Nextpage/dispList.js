import React from 'react';
import { NavLink } from 'react-router-dom';

const DispList = ({id,list}) => {
    return (
        <div className="div-column">
            <ul className = "ul-column">
            {
                    list.map((li, index) => {
                        return ( <NavLink to = {`/${id}/${index}`} className = "nav-links">
                            <li key={index} className="list-column">{li.name || li.title}</li></NavLink>)
                })
                }
            </ul>
        </div>
    )
}

export default DispList;