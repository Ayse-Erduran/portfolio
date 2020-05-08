import React from 'react'
import Plx from 'react-plx';
import {NavLink} from 'react-router-dom'

const titleData = [
  {
    start: '.home-photo-container',
    startOffset: '10vh',
    duration: '35vh',
    properties: [
      {
        startValue: 0,
        endValue: 30,
        unit: 'vh',
        property: 'translateX',
      }
    ]
  }
]


export const PhotoPlx = () => {
  return (
    <div>
      <Plx className="Button" parallaxData={titleData}>
        <NavLink to="/photographs" id="BiggerButton"><button>Photographs</button></NavLink>
      </Plx>
    </div>
  );
}
// className="Button" 