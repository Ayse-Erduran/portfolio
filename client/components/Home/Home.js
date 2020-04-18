import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import {NavPage, Intro, HomeAbout, HomeProjects, HomePhotography, HomeContact} from '../../components';
import {MenuFoldOutlined, CloseOutlined, LineOutlined} from '@ant-design/icons';

//Declare all sections, and a function to set their rotation
const sections = ['Intro', 'HomeAbout', 'HomeProjects', 'HomePhotography', 'HomeContact']

function selectSection(idx){
  const selections = {}
  sections.forEach((section, i) => {
    if (i === idx){
      selections[section] = true
    } else {
      selections[section] = false
    }
  })
  return selections
}


//declare and populate initial state
const defaultState = {
  navbar: false,
  sections: selectSection(0),
}

export default class Home extends Component{
  constructor(){
    super()
    this.state = defaultState
    this.handleClick = this.handleClick.bind(this)
    this.changeSection = this.changeSection.bind(this)
    // this.getSection = this.getSection.bind(this)
  }

  handleClick(){
    const prevState = this.state.navbar;
    this.setState({
      navbar: !prevState
    })
  }

  changeSection(idx){
    const newSelections = selectSection(idx)
    this.setState({
      sections: newSelections,
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
              <HomeProjects projectName="coLab" first={true} />
              <HomeProjects projectName="What-da-Duck" first={false} />
              <HomeProjects projectName="Q-Party" first={false} />
              <HomePhotography/>
              <HomeContact/>
            </div>
          }
        </div>
        <div id="home-side-nav">
          <div id="menu-icon">
            {this.state.navbar ? <CloseOutlined style={{fontSize: '2em'}} onClick={() => this.handleClick()}/>: <MenuFoldOutlined style={{fontSize: '2em'}} onClick={() => this.handleClick()}/>}
          </div>
          <div id="section-icon">
            {sections.map((section, idx) => (
              <div>
                <Link activeClass='selected' to={section} spy={true} smooth={true}>
                  <LineOutlined
                    rotate={this.state.sections[section] ? 135: 0}
                    onClick={() => this.changeSection(idx)}/>
                </Link>
              </div>))
            }
          </div>
        </div>
      </div>
    )
  }
}
