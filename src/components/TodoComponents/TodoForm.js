import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
	return (
		<div>
        	<input
        	  name="input"
        	  onChange={props.changeInputHandler}
        	  placeholder= "....todo"
        	  value={props.input}
        	/>
        	<button onClick={props.addTodoHandler}>Add Todo</button>
        	<button>Clear Completed</button>
        </div>
	);
};

export default TodoForm;