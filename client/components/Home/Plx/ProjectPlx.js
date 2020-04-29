import React from 'react'
import Plx from 'react-plx';

const titleData = [
  {
    start: '.project-transition',
    // startOffset: '10vh',
    duration: '50vh',
    properties: [
      {
        startValue: 88,
        endValue: 15,
        unit: 'vh',
        property: 'translateX',
      }
    ]
  }
]
const imageData = [
  {
    start: '.project-transition',
    duration: '40vh',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }
    ]
  }
  // {
  //   start: '.project-transition',
  //   startOffset: '60vh',
  //   duration: '40vh',
  //   properties: [
  //     // {
  //     //   startValue: -50,
  //     //   endValue: -100,
  //     //   unit: 'vh',
  //     //   property: 'translateY',
  //     // },
  //     {
  //       startValue: 1,
  //       endValue: 0,
  //       property: 'opacity'
  //     }
  //   ]
  // }
]


export const ProjectPlx = () => {
  return (
    <div>
      <Plx className="Button" parallaxData={titleData}>
        <button>Projects</button>
      </Plx>
      <Plx className="Project" parallaxData={imageData}>
        <img src="/images/projects/Q-Party.png "/>
      </Plx>
    </div>
  );
}
