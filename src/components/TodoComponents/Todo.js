import React from 'react';

const Todos = props => {
  return (
    <div className= {`todo${props.Todos.completed ? ' completed' : ''}`}
    onClick={() => props.toggleItem(props.Todos.id)}
    >
      <p>{props.Todos.task}</p>
      
    </div>
  );
};

export default Todos;

