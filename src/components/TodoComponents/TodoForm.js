import React, { Component } from "react";


class TodoForm extends Component {
	state = {
		newTask: "",
	};

	handleChanges = e => {
		this.setState({
			...this.state,
			newTask: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addNewTask(this.state.newTask);
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChanges} type="text" name="task" value={this.state.newTask} />
					<button>New Errand</button>
				</form>
				<button onClick={this.props.clearPurchased}>Clear Complete</button>
			</>
		);
	}
}

export default TodoForm;
