import React from 'react'
import Plx from 'react-plx';
import { PhotoGallery } from '../../index'

const titleData = [
  {
    start: '.photo-transition',
    duration: '50vh',
    properties: [
      {
        startValue: 15,
        endValue: 90,
        unit: 'vh',
        property: 'translateX',
      }
    ]
  }
]
const imageData = [
  {
    start: '.photo-transition',
    duration: '40vh',
    properties: [
      {
        startValue: 0,
        endValue: 0.5,
        property: 'opacity'
      }
    ]
  }
]


export const PhotoPlx = () => {
  return (
    <div>
      <Plx className="Button" id="BiggerButton" parallaxData={titleData}>
        <button>Photographs</button>
      </Plx>
      <Plx className="Photo" parallaxData={imageData}>
        <PhotoGallery/>
      </Plx>
    </div>
  );
}
