//路由控制
import React from 'react'
import {
	Route,
	Redirect
} from 'react-router'
import {
	Message,
	About,
	Inbox
} from '../components/component.js'
import App from '../App.js'


const routes = <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
      <Redirect to="/inbox" />
    </Route>

// todo list 按需加载
/*const routes = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require(App))
      }, 'HomePage')
    },
  },
	getComponent(nextState, cb) {
	  require.ensure([], (require) => {
	    cb(null, require('components/Main'))
	  }, 'Main')
	},
	childRoutes: [
	  require('./routes/baidu'),
	  require('./routes/404'),
	  require('./routes/redirect')
	]
}*/


export default routes