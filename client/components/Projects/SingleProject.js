import React from 'react'
import {GithubOutlined, ExportOutlined, FolderOpenOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const content = {
  "coLab": "A real-time collaboration application with a code-editor, console and a whiteboard.",
  "What-da-Duck": "An e-commerce site selling rubber ducks to programmers.",
  "Q-Party": "A multiplayer 2D video game featuring a main board game interspersed with 3 minigames."
}

const heroku = {
  "coLab": "https://colabapp.herokuapp.com/",
  "What-da-Duck": "https://what-da-duck.herokuapp.com/",
  "Q-Party": "https://super-quarantine-party.herokuapp.com/"
}

const github = {
  "coLab": "https://github.com/Ayse-Erduran/co-Lab",
  "What-da-Duck": "https://github.com/2001-do-jest-while-true/grace-shopper",
  "Q-Party": "https://github.com/2001-second-split/Quarantine-Party"
}

export const SingleProject = ({projectName}) => {
  return(
    <div id="single-project">
      <div id="single-project-top">
        <div id="folder-logo">
          <Link to={`/projects/${projectName}`}>
            <FolderOpenOutlined style={{fontSize: "32px", color: "#294c60"}}/>
          </Link>
        </div>
        <div id="social-media-logo">
          <a href={github[projectName]} target="_blank"><GithubOutlined style={{fontSize: "22px", color: "#294c60"}}/></a>
          <a href={heroku[projectName]} target="_blank"><ExportOutlined style={{fontSize: "22px", color: "#294c60"}}/></a>
        </div>
      </div>
      <div id="single-project-content">
        <h4>{projectName}</h4>
        <p>{content[projectName]}</p>
      </div>
    </div>
  )
}
