import React from 'react';

const TodoForm = props => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		task: ''
	// 	};
	// }

	// handleChanges = e => {
	// 	this.setState({
	// 		task: e.target.value
	// 	});
	// };

	// handleAddTask = e => {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	this.props.addTask(this.state.task);
	// 	this.setState({
	// 		task: ''
	// 	});
	// };

	return (
		<div>
			<form onSubmit={props.handleAddTask}>
				<input
					type="text"
					name="item"
					onChange={props.handleChanges}
					placeholder="...todo"
					value={props.task}
				/>
				<button>Add Todo</button>
			</form>
			<button onClick={props.clearCompleted}>Clear Completed</button>
		</div>
	);
};

export default TodoForm;
