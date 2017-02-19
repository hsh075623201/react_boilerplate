import React from 'react'
import {
  render
} from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink
} from 'react-router'



{ /**  {this.props.children}   非常重要**/ } { /** 思考：首页也有其他分路由，怎么配**/ }

// declare our routes and their hierarchy

var About = React.createClass({
  render: function() {
    return <h2>about</h2>;
  }
});

var Home = React.createClass({
  render: function() {
    return <h2>Home</h2>;
  }
});


var App = React.createClass({
  render() {
    return (

      <div className="mp_wrap bui_wrap">
      {/**主屏幕**/}
      <div className="mp_pagebox_home">
        
        {/**这里面的内容会被子路由给代替**/}
        {this.props.children}

        {/**公共页脚**/}
        <div className="mp_page_footer">
           <Footer  />
        </div>
        {/**公共页脚**/}
      </div>
      {/**主屏幕**/}
    </div>
    )
  }
});
render((
  <Router>
    <Route path="/" handler={App}>
    
    </Route>
  </Router>), document.getElementById('content'))