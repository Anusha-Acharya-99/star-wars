import React from 'react';
import {Link} from 'react-router-dom';
import films from './images/films_normal.png';
import species from './images/species_normal.png';
import planets from './images/planets_normal.png';
import people from './images/characters_normal.png';
import starship from './images/droids_normal.png';
import vehicles from './images/vehicles_normal.png';

function Icons(){
    return(
        <div className="icons">
            <ul className="icon">
                <li>
                    <Link to = "/films">
                        <img src={films} className="image"/>
                        <div className="name">FILMS</div>
                    </Link>
                </li>
                <li>
                    <Link to = "/species">
                        <img src={species} className="image"/>
                        <div className="name">SPECIES</div>
                    </Link>
                </li>
                <li>
                    <Link to = "/planets">
                        <img src={planets} className="image"/>
                        <div className="name">PLANETS</div>
                    </Link>
                </li>
            </ul>
            <ul className="icon">
                <li>
                    <Link to = "/people">
                        <img src={people} className="image"/>
                        <div className="name">PEOPLE</div>
                    </Link>
                </li>
                <li>
                    <Link to = "/starship">
                        <img src={starship} className="image"/>
                        <div className="name">STARSHIP</div>
                    </Link>
                </li>
                <li>
                    <Link to = "/vehicles">
                        <img src={vehicles} className="image"/>
                        <div className="name">VEHICLES</div>
                    </Link>
                </li>
                </ul>
                <hr></hr>
        </div>
    )
}

export default Icons;