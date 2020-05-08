import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {ScrollToTop, App} from './components'
render(
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>,
  document.getElementById('app')
)
