import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

import Plx from 'react-plx';

const parallaxData = [
  {
    start: '.trial',
    duration: '25vh',
    startOffset: '30vh',
    properties: [
      {
        startValue: 0,
        endValue: -30,
        unit: 'vh',
        property: 'translateY',
      }
    ]
  },
  {
    start: '.button',
    startOffset: '20vh',
    duration: '80vh',
    properties: [
      {
      startValue: 1,
      endValue: 0,
      property: 'opacity'
      }
    ]
  }
]

export const HomeAboutPlx = () => {
  return (
    <div id="homeabout-plx-outer">
      <Plx className="HomeAbout" parallaxData={parallaxData}>
          <div className="home-about-content">
            <p>Hi there.</p>
            <p> I'm <span className="darker">Ayse</span>, a Software Engineer based in NYC. I am passionate about building software that solves problems while providing elegant, and intuitive experiences.</p>
            <br></br>
            <p> Scroll down to explore!</p>
          </div>
          <div id="home-about-button" >
            <NavLink to="/about" className="navlink"><button>Learn More</button></NavLink>
          </div>
          <div className="button"></div>
      </Plx>
      {/* For mobile media queries, no plx but static elements */}
      <div id="non-plx-hac">
        <div className="home-about-content">
          <p>Hi there.</p>
          <p> I'm <span className="darker">Ayse</span>, a Software Engineer based in NYC. I am passionate about building software that solves problems while providing elegant, and intuitive experiences.</p>
          <br></br>
          <p> Scroll down to explore!</p>
        </div>
        <div id="home-about-button" >
          <NavLink to="/about" className="navlink"><button>Learn More</button></NavLink>
        </div>
      </div>
    </div>
  );
}
