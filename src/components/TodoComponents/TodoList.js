import React from 'react';
import ToDo from './Todo.js';

const ToDoList = props => {
  return (
    <div className="main">
      {props.state.map(item => <ToDo clicked={props.checked} item={item} />)}
    </div>
  );
};

export default ToDoList;
