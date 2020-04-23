import React from 'react'
import {About, Home, Projects, ProjectDetail} from './index'
import {Switch, Route} from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route path="/projects/:projectName" component={ProjectDetail}/>
    </div>
  )
}
