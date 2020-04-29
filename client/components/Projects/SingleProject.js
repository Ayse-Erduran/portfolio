import React from 'react'
import {GithubOutlined, ExportOutlined, FolderOpenOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import {fetchAllProjects} from '../../store'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'

class SingleProject extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllProjects()
  }

  render(){
    if(this.props.projectsLoading) return <Loader type="ThreeDots" color="Salmon" height={50} width={50} />
    console.log('PROJECTS', this.props.projects)
    const project = this.props.projects.filter(project => (
      project.name === this.props.projectName
    ))[0]
    return(
      <div id="single-project">
        <div id="single-project-top">
          <div id="folder-logo">
            <Link to={`/projects/${project.name}`}>
              <FolderOpenOutlined style={{fontSize: "32px", color: "#294c60"}}/>
            </Link>
          </div>
          <div id="social-media-logo">
            <a href={project.github} target="_blank"><GithubOutlined style={{fontSize: "22px", color: "#294c60"}}/></a>
            <a href={project.heroku} target="_blank"><ExportOutlined style={{fontSize: "22px", color: "#294c60"}}/></a>
          </div>
        </div>
        <div id="single-project-content">
          <h4>{project.name}</h4>
          <p>{project.shortContent}</p>
        </div>
      </div>
    )
  }

}

const mapState = state => ({
  projects: state.project.projects,
  projectsLoading: state.project.projectsLoading
})

const mapDispatch = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects())
})

export default connect(mapState, mapDispatch)(SingleProject)

