import React from "react";
import './Todo.css';

function Todo(props) {
  return (
    <div class="todo-block">
      <input class="todo-check" type="checkbox" name={props.todo.id} checked={props.completed === true ? 'checked': ''}/>
      <li id={props.todo.id} className={props.completed === true ? 'todo-list todo-complete' : 'todo-list'} onClick={() => props.completeTask(props.todo.id)}>{props.todo.task}</li>
    </div>
    
  )
}

export default Todo;