// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

export class TodoList extends Component {
	render() {
		return (
			<div>
				<div>
					{this.props.data.map(item => (
						<Todo key={item.id} taskInfo={item} toggleTask={this.props.toggleTask} />
					))}
				</div>
				<button onClick={this.props.clearChecked} className="clear__btn">
					Clear Checked
				</button>
			</div>
		);
	}
}

export default TodoList;
