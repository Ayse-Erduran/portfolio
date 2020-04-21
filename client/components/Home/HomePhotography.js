import React from 'react'
import { PhotoGallery } from '../../components'

export const HomePhotography= () => {
  return(
    <div className="home-photo-container" id="HomePhotography">
      <h3>Selected Photographs</h3>
      <div id="photogallery-container">
        <PhotoGallery/>
      </div>
      <p> Checkout more here</p>
    </div>
  )
}
