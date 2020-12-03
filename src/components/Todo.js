import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {
	render() {
		return (
			<div
				className={`task ${this.props.taskInfo.completed ? ' completed' : ''} `}
				onClick={() => this.props.toggleTask(this.props.taskInfo.id)}
			>
				<p>{this.props.taskInfo.task}</p>
			</div>
		);
	}
}

export default Todo;
