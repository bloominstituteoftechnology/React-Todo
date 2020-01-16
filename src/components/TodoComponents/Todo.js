import React from 'react';

const Todo = props =>{
    return (
    <div
      onClick={event => props.togglecompleted(props.task.id)}
      className={`task${props.task.completed ? 'completed' : ''}`}>
        <p>{props.task.name}</p>
    </div>
    );
};
  
  export default Todo;