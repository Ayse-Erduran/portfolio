import React from 'react'
import {LinkedinFilled, GithubFilled, FacebookFilled, InstagramFilled} from '@ant-design/icons';

export const HomeContact = () => {
  return(
    <div id="HomeContact" className="home-contact-container">
      <div id="social">
        <LinkedinFilled className="icon"/>
        <GithubFilled className="icon"/>
        <FacebookFilled className="icon"/>
        <InstagramFilled className="icon"/>
      </div>
    </div>
  )
}
