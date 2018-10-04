//`<Todo />` is a component that takes in the`todo` data and displays the task to the screen.
import React from 'react';
const Todo = props => {
  return (
    <p 
      style={(props.todo.completed === 'true') ? {textDecoration: 'line-through'} : null}
      onClick={() => props.changeCompletedHandler(props.todo.id)}
    >
      {props.todo.task}
    </p>
    );
};
export default Todo;
