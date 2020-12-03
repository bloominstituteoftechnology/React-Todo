import React, { Component } from 'react';

export class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			newInput: ''
		};
	}

	changeHandler = e => {
		// console.log(e.target.value);
		this.setState({
			newInput: e.target.value
		});
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.addTask(this.state.newInput);
		this.setState({
			newInput: ''
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<input type="text" value={this.state.newInput} onChange={this.changeHandler} />
					<button disabled={!this.state.newInput} type="submit">
						Add
					</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
