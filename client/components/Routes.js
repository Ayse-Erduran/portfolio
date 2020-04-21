import React from 'react'
import {About, Home, Projects} from './index'
import {Switch, Route} from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
      <Route exact path="/" component={Home}/>
    </div>
  )
}
