import React from 'react'
import {SideBar, Footer, NavPage} from '../index'
import {OverviewImgPlx} from './Plx/OverviewImgPlx'
import {TechPlx} from './Plx/TechPlx'
import {StackPlx} from './Plx/StackPlx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExpandAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import projects from './config'

const defaultState = {
  navbar: false,
  sections: []
}

export default class ProjectDetail extends React.Component{
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
    const project = projects.filter(project => (
      project.name === this.props.match.params.projectName
    ))[0];
    return (
      <div id="project-detail-outer-container">
        {this.state.navbar ? <NavPage/> :
        <div id="project-detail-container">
          <div id="project-detail-intro">
            <h2 id="project-detail-intro-left">{project.name.toUpperCase()}</h2>
            <h2 id="project-detail-intro-right">{project.date}</h2>
          </div>
          <div id="overview-flex">
            <h3>Overview</h3>
            <div id="overview-social">
              <a href={project.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} id="detail-social" className="single-proj-smaller-fa"/>
              </a>
              <a href={project.heroku} target="_blank">
                <FontAwesomeIcon icon={faExpandAlt} id="detail-expand" className="single-proj-smaller-fa"/>
              </a>
            </div>
          </div>
          <div id="project-detail-overview" className="overview-start">
            <p>{project.longContent}</p>
            <div id="overview-hidden" className={project.name === "Q-Party" ?"Party-ov": 'Overview'}>
              <img src={project.imgOverview}/>
            </div>
            <OverviewImgPlx name={project.name} img={project.imgOverview}/>
          </div>
          <div id="project-detail-tech" className="tech-start">
            <div id="tech-hidden">
              <div id="stack-hidden">
                {project.tech.map(elt => (
                  <p className="stack-elt">{elt}</p>
                ))}
              </div>
              <div id="img-tech">
                <img src={project.imgTech}/>
              </div>
            </div>
            <StackPlx tech={project.tech}/>
            <TechPlx img={project.imgTech}/>
          </div>
          <div style={{height: '6rem'}}></div>
          <Footer/>
        </div>}
        <SideBar navbar={this.state.navbar} sections={this.state.sections} handleClick={this.handleClick}/>
      </div>
    )
  }

}
