// src/Travel.js
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div class="travel_country">
        <h1>Travel to {destination}</h1>
    
        <figure>
            <img src={photo} alt={country} />
            <figcaption>
                Discover {country}, only {distance} miles from France !
            </figcaption>
        </figure>
    </div>
);

export default Travel;