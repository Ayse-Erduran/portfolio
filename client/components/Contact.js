import React from 'react'
import {connect} from 'react-redux'
import {sendMessage} from '../store'
import {NavPage, SideBar} from './index'

import styled, { keyframes } from "styled-components";
//Fade in right animation
import {fadeInRight} from "react-animations";
const FadeInRightAnimation = keyframes`${fadeInRight}`;
const FadeInRightDiv = styled.div`
  animation: 5s ${FadeInRightAnimation};
`;

import {SwapRightOutlined} from '@ant-design/icons'
const defaultState = {
  name: '',
  email: '',
  message: '',
  navbar: false,
  sections: []
}

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = defaultState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  async handleSubmit(evt){
    evt.preventDefault()
    await this.props.sendMessage(this.state)
    this.props.status.msg === 'success' ? alert('Message sent!') : ('Message failed to send. Please try again.')
  }

  handleClick(){
    const prevState = this.state.navbar;
    this.setState({
      navbar: !prevState
    })
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render(){
    return(
      <div id="contact-parent">
        {this.state.navbar? <NavPage/> :
          <div id="contact-outer-container">
            <FadeInRightDiv>
              <div id="contact-prompt">
                <p>Would love to hear from you!</p>
              </div>
            </FadeInRightDiv>
            <form id="contact-form" onSubmit={(evt) => this.handleSubmit(evt)}>
            <div id="personal-info">
              <div className="form-field">
                <input type="text" name="name" placeholder="Name*" onChange={(evt) => this.handleChange(evt)}/>
              </div>
              <div className="form-field">
                <input type="text" name="email" placeholder="Email*" onChange={(evt) => this.handleChange(evt)}/>
              </div>
            </div>
            <div className="form-field">
              <textarea rows="5"name="message" placeholder="Message" onChange={(evt) => this.handleChange(evt)}></textarea>
            </div>
            <div className="submit-button">
              <button type="submit">Send <span id="arrow"><SwapRightOutlined/></span></button>
            </div>
          </form>
        </div>}
      <SideBar navbar={this.state.navbar} sections={this.state.sections} handleClick={this.handleClick}/>
    </div>
    )
  }
}

const mapState = state => ({
  status: state.contact
})

const mapDispatch = dispatch => ({
  sendMessage: (message) => dispatch(sendMessage(message))
})

export default connect(mapState, mapDispatch)(Contact)
