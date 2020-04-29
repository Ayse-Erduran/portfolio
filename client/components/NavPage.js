import React from "react";
import styled, { keyframes } from "styled-components";
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'

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
          <Link to="/about"><h3>About</h3></Link>
          <Link to="/projects"><h3>Projects</h3></Link>
          <h3>Photography</h3>
          <Link to="/contact"><h3>Contact</h3></Link>
        </FadeInRightDiv>
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
