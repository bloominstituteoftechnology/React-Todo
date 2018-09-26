import React from 'react';
import TodoForm from "./TodoForm.js";
import Todo from './Todo.js';


const TodoList = (props) => {
	return (
	   <div>
		<section className='todolist'>
        {props.list.map(ToDo => {
          return (
            <Todo key={ToDo.id} id={ToDo.id} task={ToDo.task} completed={ToDo.completed}>
            </Todo>
          );
        })}
      </section>
		<TodoForm submit={props.submit}/>
	   </div>
	)
};


export default TodoList;