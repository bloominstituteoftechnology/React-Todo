import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
	}

	handleChanges = e => {
		this.setState({
			task: e.target.value
		});
	};

	handleAddTask = e => {
		e.preventDefault();
		e.stopPropagation();
		this.props.addTask(this.state.task);
		this.setState({
			task: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddTask}>
					<input
						type="text"
						name="item"
						onChange={this.handleChanges}
						placeholder="...todo"
						value={this.state.task}
					/>
					<button>Add Todo</button>
				</form>
				<button onClick={this.props.clearCompleted}>Clear Completed</button>
			</div>
		);
	}
}

export default TodoForm;
