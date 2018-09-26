import React from 'react';

// This is creating a blank array for the ToDo list.
const Todo = (props) => {
	return (
	  <p className="todo" id={props.id}>
		{props.task}
	  </p>
	)
}

export default Todo;