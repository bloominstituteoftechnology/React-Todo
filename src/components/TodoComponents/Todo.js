import React from 'react';

const Todo = props =>{
    return (
    <div
       style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
        <p>{props.task.name}</p>
    </div>
    );
};
  
  export default Todo;