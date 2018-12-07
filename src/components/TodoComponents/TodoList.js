import React from 'react';
import ToDo from './Todo.js';

// loops through the list items and return a div with the differnt ToDos

const ToDoList = props => {
  return (
    <div className="main">
      {props.state.map(item => (
        <ToDo clicked={props.checked} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ToDoList;
