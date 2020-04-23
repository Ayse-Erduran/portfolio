import React from 'react'
import {SideBar} from '../index'
import {connect} from 'react-redux'
import {fetchProject} from '../../store'
import Loader from 'react-loader-spinner'

const defaultState = {
  navbar: false,
  sections: ['intro', 'overview', 'technologies']
}


class ProjectDetail extends React.Component{
  constructor(){
    super()
    this.state = defaultState
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    const prevState = this.state.navbar;
    this.setState({
      navbar: !prevState
    })
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectName)
  }

  render(){
    const {name, longContent, date, tech, imgOverview, imgTech} = this.props.project
    if (this.props.loading) return <Loader type="ThreeDots" color="Salmon" height={50} width={50} />
    return (
      <div id="project-detail-outer-container">
        {this.state.navbar ? <NavPage/> :
        <div id="project-detail-container">
          <div id="project-detail-intro">
            <h2 id="project-detail-intro-left">{name}</h2>
            <h2 id="project-detail-intro-right">{date}</h2>
          </div>
          <h3>Overview</h3>
          <div id="project-detail-overview">
            <h6>{longContent}</h6>
            <img src={imgOverview}></img>
          </div>
          <div id="project-detail-tech">
            <img src={imgTech}></img>
            <div id="project-detail-tech-content">
              <h3>Technologies</h3>
              <ul>
                {
                  tech.map(elt => (
                      <li>{elt}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>}
        <SideBar navbar={this.state.navbar} sections={this.state.sections} handleClick={this.handleClick}/>
      </div>
    )
  }

}

const mapState = state => ({
  project: state.project,
  loading: state.loading
})

const mapDispatch = dispatch => ({
  fetchProject: projectName => dispatch(fetchProject(projectName))
})

export default connect(mapState, mapDispatch)(ProjectDetail)
