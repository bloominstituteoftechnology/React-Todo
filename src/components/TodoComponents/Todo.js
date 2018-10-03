import React from 'react';
import './Todo.css';

const Todo = props => 
  <div onClick={e => {
      props.todo.completed = !props.todo.completed;
      e.target.classList.toggle("completedTodo");
    }}
    className="todo"
    key={props.todo.id}>
      {props.todo.task}
  </div>;

export default Todo;