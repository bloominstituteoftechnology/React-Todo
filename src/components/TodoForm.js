import React from "react";

export default class TodoForm extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<form>
				<label>
					Add Todo
					<input
						name="newTodo"
						type="text"
						onChange={this.props.handleChange}
						value={this.props.newTodo}
					/>
				</label>
				<button onClick={this.props.handleSubmit}>Submit</button>
				<button onClick={this.props.handleClearCompleted}>
					Clear Completed
				</button>
				<button onClick={this.props.handleClearAll}>Clear All</button>
			</form>
		);
	}
}
