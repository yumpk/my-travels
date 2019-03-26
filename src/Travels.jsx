// src/Travels.jsx
import React from "react";
import Travel from "./Travel";

const data = [
    {
        destination: 'Asia',
        country: 'Cambodia',
        photo: 'https://static01.nyt.com/images/2015/05/17/travel/20150517CAMBODIA-slide-U2FN/20150517CAMBODIA-slide-U2FN-master1050.jpg',
        distance: '9952'
    },
    {
        destination: 'Latin America',
        country: 'Argentina',
        photo: 'https://media.audleytravel.com/-/media/images/home/south-america/argentina/letterbox-images/new-istock/istock_000019452951_iguazu_falls_2400x800.jpg?w=1800&q=80',
        distance: '11458'  
    },
    {
        destination: 'Asia',
        country: 'Laos',
        photo: 'https://media.routard.com/image/79/2/vang-vieng.1479792.c1000x300.jpg',
        distance: '11458'  
    },
    {
        destination: 'Europe',
        country: 'Turkey',
        photo: 'https://cdn.getyourguide.com/img/tour_img-448419-146.jpg',
        distance: '9000'  
    },
    {
        destination: 'Central-America',
        country: 'Guatemala',
        photo: 'https://www.chga.fm/wp-content/uploads/2018/03/guatemala.jpg',
        distance: '2900'  
    },
];

class Travels extends React.Component {
    render() {
      return (
        <div>
        {data.map((trip) => {
            return (
              <Travel
                destination={trip.destination}
                country={trip.country}
                photo={trip.photo}
                distance={trip.distance}
              />
            );
          })}
        </div>
      );
  }
}
export default Travels;