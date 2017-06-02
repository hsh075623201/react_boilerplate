//路由控制
import React from 'react'
import {
  Route,
  Redirect
} from 'react-router'
import {
  Message,
  About,
  Inbox,
  Setting,
  User
} from '../components/component.js'
import App from '../App.js'


const routes = <Route path="/" component={App}>
      <Route path="sub1">
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}/>
      </Route>
      <Route path="sub2">
        <Route path="messages/:id" component={Message} />
      </Route>
      <Route path="setting" component={Setting} />
      <Route path="user" component={User} />

    </Route>



export default routes