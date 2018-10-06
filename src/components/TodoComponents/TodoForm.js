import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
	return (
		<form>
        	       <input
                                type="text"
                                name="input"
                                onChange={props.changeInputHandler}
                                value={props.input}
                                placeholder= "....todo"
        	       />

        	       <button onClick={props.addTodoHandler}>Add Todo</button>
        	       <button onClick={props.clearCompletedHandler}>Clear Completed</button>
                </form>
	);
};

export default TodoForm;