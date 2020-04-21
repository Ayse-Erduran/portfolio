import React from "react";
import styled, { keyframes } from "styled-components";
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'

//Fade in left animation
import {fadeInLeft} from "react-animations";
const FadeInLeftAnimation = keyframes`${fadeInLeft}`;
const FadeInLeftDiv = styled.div`
  animation: 5s ${FadeInLeftAnimation};
`;
//Slide in down animation
import {fadeInDown} from "react-animations";
const FadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`
  animation: 5s ${FadeInDownAnimation};
`;


export const NavPage = () => {
  return(
    <div id="navbar-container">
      <div id="navbar-left">
        <FadeInLeftDiv>
          <img id="navpage-photo" src="/images/navpage.jpeg"></img>
        </FadeInLeftDiv>
      </div>
      <Divider orientation="vertical"/>
      <div id="navbar-right">
        <FadeInDownDiv>
          <Link to="/about"><h3>About</h3></Link>
          <Link to="/projects"><h3>Projects</h3></Link>
          <h3>Photography</h3>
          <h3>Contact</h3>
        </FadeInDownDiv>
      </div>
    </div>
  )
}




// export const Navbar = () => {
//   return(
//     <div id="navbar-container">
//       <div id="navbar-left">
//         <h1>Home</h1>
//         <h1>Projects</h1>
//         <h1>Photography</h1>
//       </div>
//       <div id="navbar-right">
//           <h1>Contact</h1>
//       </div>
//     </div>
//   )

// }
