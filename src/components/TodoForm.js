import React from 'react';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			todoInput: ''
		};
	}

	inputHandler = e => {
		this.setState({
			todoInput: e.target.value
		});
	}

	submitHandler = e => {
		e.preventDefault();
	}

	clearCompleted = e => {
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<input value={this.state.todoInput} onChange={this.inputHandler} type='text' name='new-task' placeholder='todo'/>
				<button onClick={this.submitHandler}>Add Todo</button>
				<button onClick={this.clearCompleted}>Clear Completed</button>
			</form>
		);
	}
}

export default TodoForm;
