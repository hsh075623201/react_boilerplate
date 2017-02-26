// 组建模块
import React from 'react'
import fetch from 'node-fetch';

export class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "zsd",
		};
	}
	componentDidMount() {
		this.getData({
			"attr": "url"
		})

	}
	getData(obj) {
		fetch('https://api.github.com/users/github')
			.then(res => res.json())
			.then(json => {
				// console.log(json);
				this.setState({
					value: json[obj.attr]
				})

			});
	}
	handleClick(event) {
		this.getData({
			"attr": "html_url"
		})
	}
	render() {
		return <h3>Message {this.props.params.id} <span onClick={this.handleClick.bind(this)}>{this.state.value}</span></h3>
	}
}

export class About extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <h3>About</h3>
	}
}


export class Inbox extends React.Component {
	render() {
		return (
			<div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
		)
	}
}