import React from 'react'
import {ProjectPlx} from './Plx/ProjectPlx'
import simpleParallax from 'simple-parallax-js';
import {NavLink} from 'react-router-dom'

export class HomeProjects extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    const image =  document.getElementById('project-plx');
    new simpleParallax(image, {
      delay: 0,
      orientation: 'down',
      scale: 1.6
    });
  }

  render(){
    return(
      <div className="home-projects-container" id="HomeProjects">
        <div id="moving-button">
          <ProjectPlx/>
        </div>
        <div className="static-button">
          <NavLink to="/projects" className="Button"><button>Projects</button></NavLink>
        </div>
        <img id="project-plx" src="/images/projects/Q-Party.png "/>
      </div>
    )
  }
}
