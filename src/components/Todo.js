import React from 'react';

class Todo extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<ul>
				<li>{this.props.taskData.task}</li>
			</ul>
		);
	}
}

export default Todo;
