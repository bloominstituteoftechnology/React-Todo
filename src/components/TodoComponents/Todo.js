import React from 'react';
//this function is each of the items on the TodoList. 
//it is also attaching the ability to choose whether the task is complete or not. 
//
const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;