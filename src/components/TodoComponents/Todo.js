import React from 'react';

const Todo = props => {
  return (
    <div 
    style={props.todos.completed ? { textDecoration: 'line-through', color: 'black'} : null}
    onClick={() => props.toggleTask(props.todos.id)}
    >
      {props.todos.task}
    </div>
  );
}

export default Todo;