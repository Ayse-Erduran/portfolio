import React from 'react'
import {NavPage, SideBar} from './index'

//declare and populate initial state
const defaultState = {
  navbar: false,
  sections: ['past', 'present', 'skills']
}

export default class About extends React.Component{
  constructor(){
    super()
    this.state = defaultState
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    const prevState = this.state.navbar;
    this.setState({
      navbar: !prevState
    })
  }

  render(){
    return(
      <div id="about-outer-container">
        <div id="about-container">
          {this.state.navbar? <NavPage/> :
          <div id="about-main">
            <div id="past">
              <p> After being introduced to computer science in college through a course I took on Java, I started entertaining the idea of becoming a Software Engineer. I continued expanding my knowledge of the subject through personal projects and online courses focused on programming and data science.</p>
              <p> I graduated from Columbia University in 2017 and started my career in the art industry, working for international art galleries and auction houses. During these experiences, I relied heavily on technology to find solutions and became increasingly interested in the process of building software to help individuals, and organizations solve problems. This curiosity led me to the Immersive Full Stack Engineering Program at Grace Hopper.</p>
            </div>
            <div id="present">
              <p> I’m a Software Engineer specializing in the NERDS (Node.js, Express, React, Databases using SQL) stack. I am passionate about full-stack development and am excited by new machine learning and artificial intelligence technologies. </p>
            </div>
            <div id="skills">
              <h3> Skills: </h3>
              <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li>Java</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js </li>
                <li>Express.js</li>
                <li>Passport.js</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>SQL</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Github</li>
                <li>Git</li>
                <li>Mocha</li>
                <li>Jasmine</li>
                <li>Chai</li>
                <li>Heroku</li>
                <li>Travis</li>
                <li>Phaser</li>
              </ul>
            </div>
          </div>}
        </div>
        <SideBar navbar={this.state.navbar} sections={this.state.sections} handleClick={this.handleClick}/>
      </div>
    )
  }
}
