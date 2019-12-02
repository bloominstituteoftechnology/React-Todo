import React from "react";

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <li>{this.props.todo.task}</li>;
	}
}

export default Todo;
