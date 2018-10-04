//`<Todo />` is a component that takes in the`todo` data and displays the task to the screen.
import React from 'react';
const Todo = props => {
  return (
    <div 
      onClick={() => props.changeCompletedHandler(props.todo.id)}
    >
      {props.todo.task}
    </div>
    );
};
export default Todo;
