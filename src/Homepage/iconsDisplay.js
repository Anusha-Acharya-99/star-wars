import React from 'react';
import { useState } from 'react';

function IconsDisplay({ info }) {
    const {name, src, srcHov} = info;
    const [isHov, setIsHov] = useState(false);

    const mouseOver = (e) => {
        setIsHov(true);
    }

    const mouseOut = (e) => {
        setIsHov(false);
    }

    return (
        <div className="iconsDisplay">
            <img className="iconImg" onMouseOver={mouseOver} onMouseOut={mouseOut} src={isHov ? srcHov : src}></img>
            <div className="iconName">{name}</div>
        </div>
    )
}


export default IconsDisplay;