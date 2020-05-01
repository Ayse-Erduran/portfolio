import React from 'react'
import {LinkedinFilled, GithubFilled, FacebookFilled, InstagramFilled} from '@ant-design/icons';

export const Footer = (props) => {
  return(
    <div id="HomeContact" className="home-contact-container">
      <div id="social" className={props.foreground? 'foreground': ''}>
        <a href="https://www.linkedin.com/in/ayseerduran/">
          <LinkedinFilled className="icon"/>
        </a>
        <a href="https://github.com/Ayse-Erduran">
          <GithubFilled className="icon"/>
        </a>
        <a href="https://www.facebook.com/ayse.erduran.77">
          <FacebookFilled className="icon"/>
        </a>
        <a href="https://www.instagram.com/ayseerdz/">
          <InstagramFilled className="icon"/>
        </a>
      </div>
    </div>
  )
}

