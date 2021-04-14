import React from 'react';
import { Link } from 'react-router-dom';
import films from './images/films_normal.png';
import species from './images/species_normal.png';
import planets from './images/planets_normal.png';
import people from './images/characters_normal.png';
import starship from './images/droids_normal.png';
import vehicles from './images/vehicles_normal.png';
import filmsHov from './images/films_pressed.png';
import speciesHov from './images/species_pressed.png';
import planetsHov from './images/planets_pressed.png';
import peopleHov from './images/characters_pressed.png';
import starshipHov from './images/droids_pressed.png';
import vehiclesHov from './images/vehicles_pressed.png';
import IconsDisplay from './iconsDisplay';
import './App.css';

let Data = [
    { name: "FILMS", src: films, srcHov: filmsHov },
    { name: "SPECIES", src: species, srcHov: speciesHov },
    { name: "PLANETS", src: planets, srcHov: planetsHov },
    { name: "PEOPLE", src: people, srcHov: peopleHov },
    { name: "STARSHIP", src: starship, srcHov: starshipHov },
    { name: "VEHICLES", src: vehicles, srcHov: vehiclesHov },
];

function Icons() {
    return (
        <div className="icons">
            {
                Data.map((data, index) => {
                    return (
                        <Link to={`/${data.name.toLowerCase()}`}>
                            <IconsDisplay info={data} key={index}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

    
export default Icons;