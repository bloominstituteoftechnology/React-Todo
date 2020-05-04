import React from 'react';

import Todo from './Todo.js';

class TodoList extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h2>Placeholder</h2>
				{
					this.props.taskList.map(taskData => {
						return <Todo key={taskData.id} taskData={taskData}/>
					})
				}
			</div>
		);
	}
}

export default TodoList;
