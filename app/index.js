import React from 'react'
import {
	Router,
	browserHistory
} from 'react-router'
import ReactDOM from 'react-dom'
import routes from './javascripts/routes/route.js'
import Header from './javascripts/Header.js'
ReactDOM.render( < Header / > , document.getElementById("header"))
ReactDOM.render(<Router history={browserHistory} routes={routes} />,
	document.getElementById("content"))