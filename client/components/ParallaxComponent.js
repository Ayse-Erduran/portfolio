import React from 'react'
//Import throttle method
//import throttle from 'lodash.throttle';
        {/* <ParallaxComponent
          speed={0.4}
          image="https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM2MjU0fQ&auto=format&fit=crop&w=2468&q=80"
        /> */}

export default class ParallaxComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      speed: this.props.speed || 1,
      width: '100%',
      height: this.props.height || '100%',
      top: this.props.top || '0%',
      left: this.props.left,
      right: this.props.right,
      position: 'absolute',
      zIndex: this.props.zindex || 0,
      //background properties
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: this.props.color || null,
      backgroundImage: `url(${this.props.image})`,
      top: 0,
      speed: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(){
    const speed = this.props.speed;
    const top = this.top;

    //calculate new top
    //get current scroll level, # of pixels from the absolute top
    const pageTop = window.scrollY;
    const newTop = top - (pageTop * speed);

    //set new top position
    //ref - a way to reference to new DOM element created
    this.refs.parallaxElement.style.top = `${newTop}px`;

  }

  componentDidMount(){
    window.addEventListener('scroll', throttle(this.handleScroll, 100));
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  render(){
    return(
      <div
        ref="parallaxElement"
        style={{...this.state}}
      >
        {this.props.children}
      </div>
    )
  }
}



