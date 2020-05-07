import React, { Component } from 'react';

class TodoForm extends Component {
	state = {
		newTask: '',
	};

	handleChanges = (e) => {
		this.setState({
			...this.state,
			newTask: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addNewTask(this.state.newTask);
	};

	render() {
		return (
			<section className="form1">
				<form onSubmit={this.handleSubmit} className="form">
					<input
						onChange={this.handleChanges}
						type="text"
						name="task"
						value={this.state.newTask}
						placeholder={'Enter New Errand'}
					/>
					<button className="btn1">New Errand</button>
				</form>
				<button onClick={this.props.clearCompleted} className="btn2">
					Clear Complete
				</button>
			</section>
		);
	}
}

export default TodoForm;
