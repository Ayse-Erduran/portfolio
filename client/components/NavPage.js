import React from "react";
import styled, { keyframes } from "styled-components";
import Divider from '@material-ui/core/Divider';
import {NavLink} from 'react-router-dom'

//Fade in right animation
import {fadeInRight} from "react-animations";
const FadeInRightAnimation = keyframes`${fadeInRight}`;
const FadeInRightDiv = styled.div`
  animation: 4s ${FadeInRightAnimation};
`;
//Slide in down animation
import {fadeInDown} from "react-animations";
const FadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`
  animation: 3s ${FadeInDownAnimation};
`;


export const NavPage = () => {
  return(
    <div id="navbar-container">
      <div id="navbar-left">
        <FadeInDownDiv>
          <img id="navpage-photo" src="/images/navpage.jpeg"></img>
        </FadeInDownDiv>
      </div>
      <Divider orientation="vertical" className="mid-divider"/>
      <div id="navbar-right">
        <FadeInRightDiv>
          <NavLink to="/" className="navlink"><h3>Home</h3></NavLink>
          <NavLink to="/about" className="navlink"><h3>About</h3></NavLink>
          <NavLink to="/projects" className="navlink"><h3>Projects</h3></NavLink>
          <NavLink to="/photographs" className="navlink"><h3>Photographs</h3></NavLink>
          <NavLink to="/contact" className="navlink"><h3>Contact</h3></NavLink>
        </FadeInRightDiv>
      </div>
    </div>
  )
}
