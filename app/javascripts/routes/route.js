//路由控制
var Router = require('react-router');
var Route = Router.Route;

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



module.exports = App