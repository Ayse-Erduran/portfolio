import React from 'react'
import Divider from '@material-ui/core/Divider';
import {GithubOutlined, ExportOutlined} from '@ant-design/icons';

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

export const HomeProjects = ({projectName, first}) => {
  return(
    <div className="home-projects-container" id="HomeProjects">
      {first &&
      <div id="home-projects-title">
        <h1 className="first-element">Selected Projects</h1>
      </div>
      }
      <div id="home-projects-inner">
        <div id="home-project-image">
          <img src={`/images/projects/${projectName}.png`}></img>
        </div>
        <div id="home-project-content">
          <h3 className="center">{projectName}</h3>
          <div className="center">
            <Divider/>
          </div>
          <p className="center">{content[projectName]}</p>
          <div id="project-social">
            <a href={github[projectName]} target="_blank"><GithubOutlined /></a>
            <a href={heroku[projectName]} target="_blank"><ExportOutlined/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
