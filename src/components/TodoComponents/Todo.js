import React from 'react';

const Todo= props => (
  <div
    className={props.item.completed ? "completed" : null}
    onClick={() => props.toggleCompleted(props.item.id)}
  >
    {props.item.task}{" "}
  </div>
);
export default Todo; 
