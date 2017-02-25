// 页面底部
import React from 'react'
import fetch from 'node-fetch';

const Message = React.createClass({
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
		fetch('https://api.github.com/users/github')
			.then(res => res.json())
			.then(json => {
				console.log(json);
				this.setState({

				})

			});
	},
	render() {
		return <h3>Message {this.props.params.id}</h3>
	}
})

export default Message