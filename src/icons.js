import React from 'react';
import icon1 from './images/films_normal.png';
import icon2 from './images/species_normal.png';
import icon3 from './images/planets_normal.png';
import icon4 from './images/characters_normal.png';
import icon5 from './images/droids_normal.png';
import icon6 from './images/vehicles_normal.png';

function Icons(){
    return(
        <div className="icons">
            <ul className="icon">
                <li>
                    <a href="">
                        <img src={icon1} className="image"/>
                        <div className="name">FILMS</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={icon2} className="image"/>
                        <div className="name">SPECIES</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={icon3} className="image"/>
                        <div className="name">PLANETS</div>
                    </a>
                </li>
            </ul>
            <ul className="icon">
                <li>
                    <a href="">
                        <img src={icon4} className="image"/>
                        <div className="name">CHARACTERS</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={icon5} className="image"/>
                        <div className="name">STARSHIP</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={icon6} className="image"/>
                        <div className="name">VEHICLES</div>
                    </a>
                </li>
                </ul>
        </div>
    )
}

export default Icons;