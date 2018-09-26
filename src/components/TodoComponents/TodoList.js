import React from 'react';
import TodoForm from "./TodoForm.js";
import Todo from './Todo.js';


const TodoList = (props) => {
	return (
	   <div>
		<section className='todolist'>
        {props.list.map(todo => {
          return (
            <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed}>
            </Todo>
          );
        })}
      </section>
		<TodoForm />
	   </div>
	)
};


export default TodoList;