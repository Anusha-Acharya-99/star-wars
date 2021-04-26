import React from 'react';
import { Link } from 'react-router-dom';
import films from '../../../Images/films_normal.png';
import species from '../../../Images/species_normal.png';
import planets from '../../../Images/planets_normal.png';
import people from '../../../Images/characters_normal.png';
import starship from '../../../Images/droids_normal.png';
import vehicles from '../../../Images/vehicles_normal.png';
import filmsHov from '../../../Images/films_pressed.png';
import speciesHov from '../../../Images/species_pressed.png';
import planetsHov from '../../../Images/planets_pressed.png';
import peopleHov from '../../../Images/characters_pressed.png';
import starshipHov from '../../../Images/droids_pressed.png';
import vehiclesHov from '../../../Images/vehicles_pressed.png';
import IconsDisplay from '../IconsDisplay/iconsDisplay';
import './icons.css';

let Data = [
    { name: "FILMS", src: films, srcHov: filmsHov },
    { name: "SPECIES", src: species, srcHov: speciesHov },
    { name: "PLANETS", src: planets, srcHov: planetsHov },
    { name: "PEOPLE", src: people, srcHov: peopleHov },
    { name: "STARSHIPS", src: starship, srcHov: starshipHov },
    { name: "VEHICLES", src: vehicles, srcHov: vehiclesHov },
];

function Icons() {
    return (
        <div className="icons">
            {
                Data.map((data, index) => {
                    return (
                        <Link to={`/${data.name.toLowerCase()}`} className="links">
                            <IconsDisplay info={data} key={index}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

    
export default Icons;