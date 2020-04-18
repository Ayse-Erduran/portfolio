import React from 'react'
import {LinkedinFilled, GithubFilled, FacebookFilled, InstagramFilled} from '@ant-design/icons';

export const HomeContact = () => {
  return(
    <div id="HomeContact" className="home-contact-container">
      <h3>Get in touch</h3>
      <h5>Say hi-</h5>
      <h6>ae2456@columbia.edu</h6>
      <h5>Find me on - </h5>
      <div>
        <LinkedinFilled />
        <GithubFilled />
        <FacebookFilled />
        <InstagramFilled />
      </div>


    </div>
  )
}
