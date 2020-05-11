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
      <div className="moving-button">
        <Plx className="Button" parallaxData={titleData}>
          <NavLink to="/photographs" className="BiggerButton"><button>Photographs</button></NavLink>
        </Plx>
      </div>
      <div className="static-button">
        <div>
          <NavLink to="/photographs" className="Button" id="Bigger"><button>Photographs</button></NavLink>
        </div>
      </div>
    </div>
  );
}


// className="Button" id="BiggerButton"