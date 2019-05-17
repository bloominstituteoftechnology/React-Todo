import React from 'react';

class TodoForm extends React.Component {
	render() {
		return (
			<div className="taskAdder">
				<form onSubmit={this.props.formSubmitHandler}>
					<input
						type="text"
						placeholder="Write New Task Here"
						value={this.props.task}
						name="task"
						onChange={this.props.inputChangeHandler}
					/>
					<button type="submit">Add Task</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
