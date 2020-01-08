import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodo: ''
		}
	}
	handleChanges = (event) => {
		this.setState({
			newTodo: event.target.value
		})
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTodo(this.state.newTodo);
		this.setState({
			newTodo: ''
		})
	};
	render() {
		return (
			<div>
				<h2>Todo Form</h2>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="Task">Task:</label>
					<input
						value={this.state.newTodo}
						placeholder="Add a new task..."
						type="text"
						name="todo"
						onChange={this.handleChanges}
					/>
					<button>Add task</button>
				</form>
			</div>
		)
	}
}
export default TodoForm;