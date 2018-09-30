// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';
import './Todo.css';

// const todoInput = document.querySelector('input');
// const addTodoButton = document.querySelector('.addTodo');
// const clearTodoButton = document.querySelector('.clearTodo');


class TodoList extends React.Component {
	
	render() {
		
		return (
			<div className = 'todos-container'>
               {this.props.todos.map(todo => <Todo className='todo' todo={todo} key={todo.id} id={todo.id}
                toggle={this.props.toggleClick}/>)}
			</div>
		);
	}
}

export default TodoList;