import React from "react";
import './Todo.css';

function Todo(props) {
  return <li id={props.todo.id} className={props.completed ? 'todo-list todo-complete' : 'todo-list'} onClick={() => props.completeTask(props.todo.id)}>{props.todo.task}</li>;
}

export default Todo;