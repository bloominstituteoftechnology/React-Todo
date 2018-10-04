import React from 'react';
import './Todo.css';

const TodoForm = () => {
	return (
		<div>
        	<input
        	  name="input"
        	  onChange={this.changeInputHandler}
        	  placeholder= "....todo"
        	  value={this.state.input}
        	/>
        	<button onClick={this.addTodoHandler}>Add Todo</button>
        	<button>Clear Completed</button>
        </div>
	);
};

export default TodoForm;