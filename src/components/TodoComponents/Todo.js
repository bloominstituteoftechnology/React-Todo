import React from 'react';
import './Todo.css';

const Todo = props =>{
  return (
    <div className={props.item.completed ? 'complete' : 'task-div'} onClick={()=>props.click(props.item.id)}>{props.item.task}</div>
  );
};

export default Todo;
