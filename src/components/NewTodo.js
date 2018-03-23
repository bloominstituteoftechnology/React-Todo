import React, { Component } from 'react';

let blankFormString = 'Add something to the list'

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

