import React from 'react'
import {NavPage, SideBar, Footer} from './index'
import simpleParallax from 'simple-parallax-js';


//declare and populate initial state
const defaultState = {
  navbar: false,
  sections: []
}

export default class Photos extends React.Component{
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
    window.scrollTo(0, 0)
  }

  componentDidMount(){
    const images =  document.getElementsByClassName('plx');
    new simpleParallax(images, {
      delay: 0,
      orientation: 'down',
      scale: 1.9
    })
  }

  render(){
    return(
      <div id="photos-outer-container">
        {this.state.navbar? <NavPage handleClick={this.handleClick}/> :
          <div id="photos-inner-container">
            <div id="photo-title">
              <h1>Photographs</h1>
            </div>
            <div id="photos">
              <div id="first-row">
                <img className="first-row" src="/images/photos/1.jpg"/>
                <img className="first-row" src="/images/photos/home-photo.jpg"/>
              </div>
              <div id="second-row">
                <img className="second-row" src="/images/photos/3.jpg"/>
                <img className="second-row" id="ontop" src="/images/photos/4.jpg"/>
              </div>
              <img className="plx" src="/images/photos/5.jpeg"/>
              <div id="fourth-row">
                <img className="fourth-row" src="/images/photos/6.jpg"/>
                <img className="fourth-row" src="/images/photos/7.jpg"/>
              </div>
              <div id="fifth-row">
                <img className="fifth-row" src="/images/photos/8.jpg"/>
                <img className="fifth-row" src="/images/photos/9.jpg"/>
                <img className="fifth-row" id="right" src="/images/photos/10.jpg"/>
              </div>
              <img className="last" src="/images/photos/11.jpg"/>
            </div>
            <Footer/>
          </div>
        }
        <SideBar navbar={this.state.navbar} sections={this.state.sections} handleClick={this.handleClick}/>
      </div>
    )
  }
}
