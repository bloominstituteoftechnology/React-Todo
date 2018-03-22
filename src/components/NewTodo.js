import React, { Component } from 'react';

let blankFormString = 'What are you going to do with your life?'

class NewTodo extends Component {

	constructor() {
		super();
		this.state = {
			newItem: blankFormString
		}
	}

	updateNew = (event) => {
		this.setState({newItem: event.target.value});
	}

	addItem = (event) => {
		event.preventDefault();
		this.props.add(this.state.newItem);
        this.setState({newItem: blankFormString});
        console.log(this.props);
	}

	render() {
        const style = (this.state.newItem === blankFormString) ? 'emptyForm' : 'nonEmptyForm' ;
		return (
		<form onSubmit={this.addItem}>
			<input className={style} value={this.state.newItem} onChange={this.updateNew}>
			</input>
		</form>
		);
	}
}

export default NewTodo;

