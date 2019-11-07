import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div onClick={() => this.props.handleTodoCompleted(this.props.todo.id)}>
				{this.props.todo.task}
			</div>
		);
	}
}

export default Todo;
