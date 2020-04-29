import React from 'react'
import Divider from '@material-ui/core/Divider';
import {GithubOutlined, ExportOutlined} from '@ant-design/icons';
import {ProjectPlx} from './Plx/ProjectPlx'

export const HomeProjects = () => {
  return(
    <div className="home-projects-container" id="HomeProjects">
      <ProjectPlx/>
    </div>
  )
}
