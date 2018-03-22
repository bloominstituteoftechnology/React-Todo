import React, { Component } from 'react';
import Todo from "./Todo";

class TodoList extends Component {
	
	constructor() {
		super();
		this.state = {
			todos:[]
		};
	}

	addTodo = () => {
		this.state.todos.push(this.props.todo);
	}
	
	render() {
        {this.addTodo()}
		return (this.state.todos.map( (e, i) => {
			if (i >= 1) {
				return <Todo key={i} todo={e} />
			}
		}
		));
	}
}

export default TodoList;