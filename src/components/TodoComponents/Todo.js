import React from 'react';

const Todo = props =>{
  console.log(props);
    return (
      
    <div
       style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
        <p>{props.todo.task}</p>
    </div>
    );
};
  
  export default Todo;