import React, { Component } from "react"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


class TodoForm extends Component {
	constructor(){
		super();
		this.state = {
			newTask : ""
		};
	}

	// update state with keypressing
	handleChanges = (event) => {
		console.log(event.target.value);
		this.setState({
			...this.state,
			newTask : event.target.value
		});
	};

	//submit method
	submitTodo = (event) => {
		event.preventDefault();
		this.props.addTodo(event, this.state.newTask);
		this.setState({ newTask: ''});
	};

	render () { 
		return (
			<form onSubmit={this.submitTodo}>
				<input
				value={this.state.newTask}
				onChange={this.handleChanges}
				type='text'
				name='todo'
				/>
				<button>Add</button>
			</form>
		)
	}
}

export default TodoForm;