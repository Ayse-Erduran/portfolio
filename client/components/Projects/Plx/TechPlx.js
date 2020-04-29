import React from 'react'
import Plx from 'react-plx';

const techData = [
  {
    start: '.tech-start',
    duration: '40vh',
    properties: [
      {
        startValue: -10,
        endValue: -40,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }
    ]
  }
]


export const TechPlx = ({img}) => {
  return (
      <Plx className="Tech" parallaxData={techData}>
        <img src={img}/>
      </Plx>
  );
}
