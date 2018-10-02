import React from 'react';
import './Todo.css';
// This is creating a blank array for the ToDo list.
const Todo = (props) => {
	return (
	  <p className="todo" id={props.id} onClick={props.onClick} onClick={props.onClick}>
		{props.task}
	  </p>
	)
}

export default Todo;