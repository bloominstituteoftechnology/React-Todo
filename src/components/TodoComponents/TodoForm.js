import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
	//constructor with state
	constructor() {
		super();
		this.state = {
			todosText: ''
		};
	}

	handleChanges = e => {
		//update state with each keystroke
		this.setState({
			todosText: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.todosText);
		this.setState({ todosText: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					name='item'
					value={this.state.todosText}
					onChange={this.handleChanges}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
