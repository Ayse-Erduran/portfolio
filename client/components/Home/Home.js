import React from 'react';
//import children components
import {NavPage, Intro, HomeAbout, HomeProjects, HomePhotography, HomeContact, SideBar} from '../../components';



//Import the Parallax component
//import { Parallax } from 'react-scroll-parallax';
//import ParallaxComponent from '../ParallaxComponent'

//import background image
//import backgroundImage  from '../../../public/images/homeBg.jpg'

//declare and populate initial state
const defaultState = {
  navbar: false,
  sections: ['Intro', 'HomeAbout', 'HomeProjects', 'HomePhotography']
}

export default class Home extends React.Component{
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
      <div id="home-container">
        <div id="home-main">
            {this.state.navbar ? <NavPage/> :
              <div>
                <Intro/>
                <HomeAbout/>
                <div className="project-transition"></div>
                <HomeProjects/>
                <div className="photo-transition"></div>
                <HomePhotography/>
                <HomeContact/>
              </div>
            }
        </div>
        <SideBar navbar={this.state.navbar} sections={this.state.sections} handleClick={this.handleClick}/>
      </div>
    )
  }
}
