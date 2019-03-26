// src/Travel.js
import React from "react";


const Travel = props => { 
    return (
    <div>
        <h1>Travel to {props.destination}</h1>
    
        <figure>
            <img src={props.photo} alt={props.country} />
            <figcaption>
                Discover {props.country}, only {props.distance} miles from France !
            </figcaption>
        </figure>
    </div>
    );
};

export default Travel;