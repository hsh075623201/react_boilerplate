import React from 'react'
import {
  Router,
  browserHistory
} from 'react-router'
import ReactDOM from 'react-dom'

import routes from './javascripts/routes/route.js'


ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById("content"))