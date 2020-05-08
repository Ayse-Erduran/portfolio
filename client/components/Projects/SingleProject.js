import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faExpandAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import projects from './config'

export const SingleProject = ({projectName}) => {
    const project = projects.filter(project => (
      project.name === projectName
    ))[0];

    return(
      <div id="single-project">
        <div id="single-project-top">
          <div id="folder-logo">
            <Link to={`/projects/${project.name}`}>
              <FontAwesomeIcon icon={faFolderOpen} className="single-proj-fa"/>
            </Link>
          </div>
          <div id="social-media-logo">
            <a href={project.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="single-proj-smaller-fa"/>
            </a>
            <a href={project.heroku} target="_blank">
              <FontAwesomeIcon icon={faExpandAlt} className="single-proj-smaller-fa"/>
            </a>
          </div>
        </div>
        <div id="single-project-content">
          <h4>{project.name}</h4>
          <p>{project.shortContent}</p>
        </div>
      </div>
    )

}

