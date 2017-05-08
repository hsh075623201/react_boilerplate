import React from 'react'
import {
	Router,
	browserHistory
} from 'react-router'
import ReactDOM from 'react-dom'
import routes from './javascripts/routes/route.js'
import Header from './javascripts/Header.js'
import Footer from './javascripts/Footer.js'
ReactDOM.render( < Header / > , document.getElementById("header"))
ReactDOM.render(<Router history={browserHistory} routes={routes} />,
	document.getElementById("content"))
ReactDOM.render( < Footer / > , document.getElementById("footer"))