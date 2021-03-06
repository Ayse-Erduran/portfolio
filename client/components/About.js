import React from 'react'
import {CaretRightOutlined} from '@ant-design/icons';
import {NavPage, SideBar, Footer} from './index'

//declare and populate initial state
const defaultState = {
  navbar: false,
  black: false,
  sections: ['about-intro', 'past-present', 'skills']
}

export default class About extends React.Component{
  constructor(){
    super()
    this.state = defaultState
    this.handleClick = this.handleClick.bind(this)
    this.listenScrollEvent = this.listenScrollEvent.bind(this)
  }

  handleClick(){
    const prevState = this.state.navbar;
    this.setState({
      navbar: !prevState
    })
  }

  listenScrollEvent(evt){
    if (window.scrollY > 1500) {
      this.setState({black: true})
    } else {
      this.setState({black: false})
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  componentWillMount(){
    window.removeEventListener('scroll', this.listenScrollEvent)
  }

  render(){
    return(
      <div id="about-outer-container">
        <div id="about-container">
          {this.state.navbar? <NavPage handleClick={this.handleClick}/> :
          <div id="about-main">
            <div id="about-intro">
              <img src="/images/about/website-me.jpeg"></img>
              <h3 id="firstname">Ayse</h3>
              <h3 id="lastname">Erduran</h3>
              <div id="intro-box">
                <p className="bold">Hi, I'm Ayse!</p>
                <p> A Software Engineer based in NYC, techie, and admirer of art and design!</p>
                <p> I am passionate about building software and creating experiences that not only look great, but are also accessible and add real value.</p>
              </div>
            </div>
            <div id="past-present">
              <p> I was introduced to computer science in college through a course I took on Java. Having discovered my passion for programming, I continued on expanding my knowledge through personal projects and online courses focused on programming and data science.</p>
              <p> I graduated from Columbia University in 2017 with a BA in Art History and started my career in the art industry, working for international art galleries and auction houses. During these experiences, I relied heavily on technology to find solutions and became increasingly interested in the process of building software to help individuals, and organizations solve problems. This curiosity led me to the Immersive Full Stack Engineering Program at Grace Hopper.</p>
              <p> I’m now a proud Software Engineer specializing in the NERDS stack. I am passionate about full-stack development and am excited by new machine learning and artificial intelligence technologies. </p>
              <p>Apart from work, you can find me taking photographs, cooking spicy food and nerding about space on twitter! </p>
            </div>
            {/* <div style={{height: '100px'}}/> */}
                <div id="skills" className={this.state.black? 'black': ''}>
                  <h3> Skills: </h3>
                  <div id="skills-list">
                    <ul id="ul-left">
                      <li><CaretRightOutlined />Javascript</li>
                      <li><CaretRightOutlined />Python</li>
                      <li><CaretRightOutlined />Java</li>
                      <li><CaretRightOutlined />React</li>
                      <li><CaretRightOutlined />Redux</li>
                      <li><CaretRightOutlined />Node.js </li>
                      <li><CaretRightOutlined />Express.js</li>
                      <li><CaretRightOutlined />Passport.js</li>
                      <li><CaretRightOutlined />Sequelize</li>
                      <li><CaretRightOutlined />PostgreSQL</li>
                      <li><CaretRightOutlined />SQL</li>
                    </ul>
                    <ul id="ul-right">
                      <li><CaretRightOutlined />HTML</li>
                      <li><CaretRightOutlined />CSS</li>
                      <li><CaretRightOutlined />Github</li>
                      <li><CaretRightOutlined />Git</li>
                      <li><CaretRightOutlined />Mocha</li>
                      <li><CaretRightOutlined />Jasmine</li>
                      <li><CaretRightOutlined />Chai</li>
                      <li><CaretRightOutlined />Heroku</li>
                      <li><CaretRightOutlined />Travis</li>
                      <li><CaretRightOutlined />Phaser</li>
                    </ul>
                  </div>
                </div>
              <Footer foreground={true}/>
          </div>}
        </div>
        <SideBar navbar={this.state.navbar} sections={this.state.sections} handleClick={this.handleClick}/>
      </div>
    )
  }
}
