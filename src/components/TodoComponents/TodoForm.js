import React from 'react';

const TodoForm = props => {
	return (
	<form>
		<input type='text' placeholder='...todo' value={props.value} onChange={props.taskChangeHandler} />
		<button onClick={props.addTaskHandler}>Add Task</button>
		<button onClick={props.clearCompletedHandler}>Clear Completed</button>
	</form>
	)
};

export default TodoForm;
 
