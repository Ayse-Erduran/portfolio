import React from 'react'
import {About, Home, Projects, ProjectDetail, Photos, NavPage} from './index'
import {Route} from "react-router-dom";

export const Routes = () => {
  return (
    <div id="routes">
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route path="/projects/:projectName" component={ProjectDetail}/>
      <Route path="/photographs" component={Photos}/>
      <Route path="/navpage" component={NavPage}/>
    </div>
  )
}
