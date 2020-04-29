import React from 'react'

export const HomeAbout = () => {
  return(
      <div className="home-about-container" id="HomeAbout">
        <div id="home-about-content">
          <p>Hi there.</p>
          <p> I'm <span className="darker">Ayse</span>, a Software Engineer based in NYC. I am passionate about building software that solves problems while providing elegant, and intuitive experiences.</p>
          <br></br>
          <p> Scroll down to explore!</p>
        </div>
        <div id="home-about-button">
          <button>Learn More</button>
        </div>
      </div>
  )
}
