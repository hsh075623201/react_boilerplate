// 组建模块
import React from 'react'
import fetch from 'node-fetch';

const Message = React.createClass({
	getInitialState: function() {
		return {
			value: "zsd",
		};
	},
	componentDidMount: function() {
		/*$.get(this.props.source, function(result) {
		  var lastGist = result[0];
		  if (this.isMounted()) {
		    this.setState({
		      username: lastGist.owner.login,
		      lastGistUrl: lastGist.html_url
		    });
		  }
		}.bind(this));*/
		this.getData({
			"attr": "url"
		})

	},
	getData: function(obj) {
		fetch('https://api.github.com/users/github')
			.then(res => res.json())
			.then(json => {
				// console.log(json);
				this.setState({
					value: json[obj.attr]
				})

			});
	},
	handleClick: function(event) {
		this.getData({
			"attr": "html_url"
		})
	},
	render() {
		return <h3>Message {this.props.params.id} <span onClick={this.handleClick}>{this.state.value}</span></h3>
	}
})

export default Message