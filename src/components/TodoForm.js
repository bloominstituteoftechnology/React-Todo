import React from "react";

class TodoForm extends React.Component {
	constructor(){
		super();
		this.state = { task: "" };
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTask(e, this.state.task);
	};

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="task" id="task" onChange={this.handleChange} />
				<button>Add Task</button>
			</form>
		);
	};

}

export default TodoForm;