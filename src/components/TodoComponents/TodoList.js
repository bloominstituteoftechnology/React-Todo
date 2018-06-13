import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
	constructor(props){
		super(props);
		console.log('checking state from todolist', this.props.state)
	}
	render() {
		return (
			<div>
				<ul>
				{
					this.props.list.map(todo=>{
						return <Todo key={todo.id} todo={todo.task} />
					})
				}
				</ul>
			</div>
		);
	}
}

export default TodoList;