// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';

const TodoList = props => {
  return (
    <ul>
      {props.listItem.map(item => {
        return <li key={Math.random()}>{item.task}</li>;
      })}
    </ul>
  );
};


export default TodoList;


