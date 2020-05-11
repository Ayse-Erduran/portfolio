import React from 'react'
import Plx from 'react-plx';
import {NavLink} from 'react-router-dom'

const titleData = [
  {
    start: '.home-projects-container',
    startOffset: '15vh',
    duration: '35vh',
    properties: [
      {
        startValue: 88,
        endValue: 15,
        unit: 'vh',
        property: 'translateX',
      }
    ]
  }
]

export const ProjectPlx = () => {
  return (
    <div>
      <div className="moving-button">
        <Plx className="Button" parallaxData={titleData}>
          <NavLink to="/projects" className="Button"><button>Projects</button></NavLink>
        </Plx>
      </div>
      <div className="static-button">
        <NavLink to="/projects" className="Button"><button>Projects</button></NavLink>
      </div>
    </div>
  );
}
