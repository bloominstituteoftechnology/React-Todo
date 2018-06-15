import React from 'react';

const Todo = props => {
    return (
      <div
        style={props.singleTodo.completed ? { textDecoration: "line-through" } : null}
        onClick={() => props.toggleCompleted(props.singleTodo.id)}
      >
        {props.singleTodo.task}
      </div>
    );
  };
  
  export default Todo;
  


