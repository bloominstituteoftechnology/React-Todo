import React from 'react';
import TodoForm from "./TodoForm.js";
import Todo from './Todo.js';


const TodoList = (props) => {
	return (
	   <div>
		<div className='list'>
        {props.items.map(items => {
          return (
            <Todo key={items.id} id={items.id} task={items.task} onClick={props.completedTask}>
            </Todo>
          );
        })}
         </div>
		</div>
	)
};


export default TodoList;