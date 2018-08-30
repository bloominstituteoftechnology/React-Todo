import React from 'react';
import Todo from './Todo'

let TodoList = props => {
  return (
    <p> {props.todoList.map(
      todo =>
      <Todo
        todo={todo}
        key={todo.id}
        handleClick={props.handleClick}/>)}
      </p>
);
}

export default TodoList
