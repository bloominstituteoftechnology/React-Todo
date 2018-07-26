import React from 'react';
//this function is each of the items on the TodoList. 
//it is also attaching the ability to choose whether the task is complete or not. 
//the style line is essentially saying that if the todo is false no line through, 
// but if it is true then a line can be put through it. 

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