import React from "react";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form action="#">
				<input type="text" />
				<input type="button" value="Add Todo" />
				<input type="button" value="Clear Completed" />
			</form>
		);
	}
}

export default TodoForm;
