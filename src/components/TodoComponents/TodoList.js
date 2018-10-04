import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
  return (
    <div>
	    <ul>	
	      {props.toDoList.map(todo => (
	        <li>
		        <Todo
		            handleToggleComplete = {props.handleToggleComplete}
		            key = {todo.id}
		            todo = {todo}
		        /> 
	        </li>
	      ))}
	    </ul>
    </div>
  );
};

export default TodoList;