import React, { Component } from 'react';

class GetReminder extends Component {

	constructor() {
		super();
		this.state = {
			newItem:""
		}
	}

	updateNew = (event) => {
		this.setState({newItem:event.target.value});
	}

	addItem = (event) => {
		event.preventDefault();
		this.props.add(this.state.newItem);
		this.setState({newItem:""});
	}

	render() {
		return (
		<form onSubmit={this.addItem}>
			<input value={this.state.newItem} onChange={this.updateNew}>
			</input>
		</form>
		);
	}
}
export default GetReminder;
