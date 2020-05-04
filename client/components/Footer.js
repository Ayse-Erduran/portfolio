import React from 'react'
import {LinkedinFilled, GithubFilled, FacebookFilled, InstagramFilled} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Footer = (props) => {
  return(
    <div className="footer-container">
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
        <a href="mailto: ayyseerduran@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon"/>
        </a>
      </div>
    </div>
  )
}

