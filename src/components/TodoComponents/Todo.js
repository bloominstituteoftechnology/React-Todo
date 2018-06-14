import React from 'react';

const Todo = props => {
  
  let todoStyles = {
    marginLeft: '10%', 
    fontSize: '20px',
    marginBotton: '10px'
  }

  return (
    <div style={todoStyles}> 
    <div
    style={props.todo.completed ? { color: 'red', textDecoration: 'line-through' } : null }
    onClick={() => props.clickToggleComplete(props.todo.id)}>
  
      {props.todo.task}
    </div>
    </div>
  );
};

export default Todo;