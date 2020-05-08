import React from 'react'
import Plx from 'react-plx';

const overviewData = [
  {
    start: '.overview-start',
    duration: '20%',
    properties: [
      {
        startValue: 0,
        endValue: -10,
        unit: '%',
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


export const OverviewImgPlx = ({name, img}) => {
  return (
    <div className="hidden-plx">
      <Plx className={name === "Q-Party" ?"Party-ov": 'Overview'} parallaxData={overviewData}>
        <img src={img}/>
      </Plx>
    </div>
  );
}
