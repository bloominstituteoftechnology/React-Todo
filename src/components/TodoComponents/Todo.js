import React from 'react';

const Todo = props => {
  return (
  <h2 onClick={() => props.changeTaskStatus(props.todoOnProps.id)}
                     className={`task-header ${props.todoOnProps.completed}`}>
                     {props.todoOnProps.task}
                     
                     
                     </h2>);
};


export default Todo;
