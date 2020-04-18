import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export const PhotoGallery = () => {
  return(
    <AwesomeSlider>
      <div data-src="/images/sanfran/1.jpeg" />
      <div data-src="/images/sanfran/2.jpeg" />
      <div data-src="/images/sanfran/3.jpeg" />
      <div data-src="/images/sanfran/4.jpeg" />
    </AwesomeSlider>
  )
};
