// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

const TodoList = props =>{
  return (
    <div>
      <ul>{props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
};

export default TodoList;
